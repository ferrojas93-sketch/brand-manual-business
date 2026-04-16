# Code review — pipeline `/brand-manual-build` (Shamusic v4.1)

**Resumen.** El pipeline funciona end-to-end y entrega un PDF editorial de alta calidad, pero arrastra deuda que se hará cara en el sexto/séptimo cliente: `build_v2.py` es un monolito de 2.732 líneas con HTML inline, renumerado de páginas frágil y PDF de 80 MB (2,7× el target de la skill). Lo que está bien: `shell()` + `divider()` + `specs()` como helpers comunes, tokens centralizados, regex post-process como red de seguridad, separación limpia `build → render_pdf → qa_snapshots`, y la convención `p01..pNN` como funciones. Eso hay que conservarlo.

## 1. Problemas detectados

- **[BLOCKER] `build_v2.py:33`** — `TOTAL = 54` hardcodeado, pero `PAGES` (L2683-2699) incluye 4 páginas nuevas (`p_origin_story`, `p_manifiesto_rebel`, `p_testimonios`, + removidos) y el total real difiere. Fix: `TOTAL = len(PAGES)` computado en `build()` y regex que reemplace también el denominador.
- **[BLOCKER] `build_v2.py:2711`** — el regex `r'P\.\d{1,2}\s*/\s*\d{1,2}'` solo cubre 1-2 dígitos. Si el manual llega a 100pp falla silenciosamente. Usar `\d{1,3}`.
- **[MAJOR] `build_v2.py:546, 794, 933, 969, 1300, 1470, 1938, 2040, 2196, 2248, 2389, 2439, 2489, 2582, 2627, 2674`** — 16 páginas bypasean `shell()` y escriben su propio `metastrip` inline con `P.NN` literal. Tres (L2582/2627/2674) usan `P.00` como placeholder, salvado por el regex — pero esto es un code smell: todas las páginas deberían pasar por `shell()`. Refactor: helper `metastrip(chapter, variant)` sin page_num, inyectado por `build()`.
- **[MAJOR] Tamaño 80 MB PDF** — objetivo skill `<30MB`. Causa probable: PNGs nano-banana sin compresión + `device_scale_factor=2` en `render_pdf.py:20`. Fix: pre-procesar mockups con `pngquant --quality=75-90` o convertir a JPEG Q85 para fotos; bajar DPR a 1.5 (suficiente para print 150dpi @ A4 landscape).
- **[MAJOR] HTML inline como f-strings** — 2.700 líneas de CSS/HTML en strings Python: sin syntax highlighting, sin linter HTML, imposible hacer diff visual. El `build.py.template` (20KB) sugiere que hubo intento de plantillado; no se terminó. Recomendación: migrar a Jinja2 con `templates/page_*.html` + `data/copy.yaml`, manteniendo toolkit Python solo para orquestación.
- **[MAJOR] Sin separación data / presentación** — copy (mantras, valores, testimonios) hardcodeado en cada función. Cambiar una palabra implica editar Python. Externalizar a `copy.yaml` o `copy.md` como la skill exige en pre-requisitos.
- **[MINOR] `build_v2.py:2706`** — `idx, p in enumerate(PAGES, start=1)` re-numera correctamente, pero el `page_num` que cada función pasa a `shell()` ya es irrelevante. Eliminar el parámetro para evitar confusión.
- **[MINOR] `qa_snapshots.py:28`** — `f"p{i+1:02d}.png"` asume ≤99 páginas; consistente con resto. OK.
- **[NIT] `build_v2.py:34`** — `MOCK = "mockups"` como string mágico, duplicado en ~40 sitios.

## 2. Reglas a añadir a la skill `brand-manual-build`

Aprendizajes recurrentes Shamusic v1→v4.1 que deben quedar codificados:

1. **`TOTAL` debe derivarse de `len(PAGES)` — nunca hardcodear.** Añadir en la sección "Renumerado dinámico" de SKILL.md (L73-78).
2. **Única vía de `metastrip`: `shell()`.** Prohibir `<div class="metastrip">` inline en páginas — regla lint-friendly fácil de auditar con grep.
3. **Verificación WCAG previa al render.** Script `qa_contrast.py` que lea pares fg/bg declarados en tokens y falle si algún par <4.5:1 para body o <3:1 para display. Hoy no existe; el checklist (L149) pide contraste pero no hay test.
4. **Test de footer-collision automatizado.** Tras snapshot, detectar overlap entre bounding box de `.metastrip` y elementos con `z-index>0`. Hoy se detecta a ojo en `/visual-qa`. Codificarlo.
5. **Linter de cohesión de nombres de página.** Aserción: cada función `pNN_*` en `PAGES` aparece exactamente una vez y su índice textual coincide (o se tolera explícitamente con comentario `# renumbered`).
6. **Budget de tamaño PDF: fail-hard si >40MB.** `render_pdf.py` debe abortar con mensaje accionable ("optimiza mockups con pngquant").
7. **Regla anti-monolito: `build.py` máx 1.500 líneas.** Por encima, split por capítulo (`pages/logo.py`, `pages/color.py`, etc.).
8. **Mandatorio Jinja2 para clientes 6+.** El coste de migrar HTML-en-string crece cuadrático con el número de páginas.

## 3. Checklist pre-envío (antes del QA visual)

El constructor debe validar ANTES de lanzar `/visual-qa`:

- [ ] `TOTAL == len(PAGES)` y `grep -c "def p" build.py` cuadra con ambos.
- [ ] `grep -n 'metastrip.*P\.' build.py` devuelve 0 líneas fuera de `shell()`.
- [ ] `grep -nE 'P\.(00|0?[0-9]+)' build.py | grep -v shell` → 0 (no hay números hardcodeados rebeldes).
- [ ] `du -h dist/manual.pdf` < 40MB; si no, optimizar mockups antes de enseñar al cliente.
- [ ] `qa_snapshots.py` corre limpio y el número de PNGs = `len(PAGES)`.
- [ ] Smart quotes sanitizadas: `grep -P '[\x{201c}\x{201d}\x{2018}\x{2019}]' copy.md` → 0.
