# Audit v4.1 final — Shamusic Premium 54pp

## 1. NOTA FINAL: **8.5 / 10**

Subida desde 7.4. Salto real. El manual tiene una tesis, una paleta disciplinada y respeta su propio sistema. Lo que antes eran fricciones (ratios sin contraste, fotos fuera de tono, literales sin renderizar, footers pisados) hoy están cerrados en casi todo. Queda una regresión grave (p09) y tres páginas medianas — por eso no es 9.

---

## 2. CONTRASTE — auditoría sistemática (WCAG AA, umbral 4.5:1 body / 3:1 large ≥24px)

Recorrido página a página. Casos bajo umbral:

| Pág | Elemento | Problema | Fix |
|---|---|---|---|
| **p05** | Bloque pequeño bottom-left "este capítulo declara contra quién trabajamos…" magenta claro sobre midnight | ~3.2:1 en 9-10px — illegible | Subir a `#F4F1EA` (paper) o agrandar a 12px y pasar a magenta-dust `#EAB3EB` |
| **p19** | Card "2.6:1 / DISPLAY ONLY" magenta-sobre-paper débil | Intencional (ejemplo educativo de fallo), pero añadir etiqueta `FAIL` para que no se lea como recomendación |
| **p30** | Párrafo intro "Afilada, no agresiva…" violet-muted sobre midnight | ~3.8:1 — borderline | Subir peso a 500 y color a `#F4F1EA` con 85% opacidad |
| **p45** | Microcopy "SELLO TEMPORAL VERIFICABLE…" magenta hairline | ~3.0:1 sobre paper ligero | Oscurecer a `#6A0612` o aumentar a 9pt |
| **p50** | "IMPRESIÓN LONA TENSADA · INSTALACIÓN…" magenta-dust sobre midnight | ~3.5:1 en 8px | Subir a paper + tracking +20 |

Todo lo demás (paper/midnight principal, magenta-sobre-midnight en display ≥32px, midnight-sobre-paper body) pasa AA holgado.

---

## 3. FOOTER COLLISIONS — regresión check

- **p06** OK · **p07** OK · **p12** OK · **p17** OK (cabecera paper resolvió) · **p22** OK · **p27** OK · **p29** OK · **p30** OK · **p37** OK · **p40** OK · **p44** OK · **p50** OK.
- **REGRESIÓN CRÍTICA — p09**: el ítem 05 "Ningún contrato te lo lees por la noche corriendo…" se solapa con el footer (`SHAMUSIC · MANUAL DE MARCA · MANIFIESTO REBEL · P.09/54`). La safe-zone inferior está invadida por ~8mm. Fix: reducir `font-size` del bloque manifesto de 22→19pt, o eliminar el hueco extra entre ítems y dejar el ítem 05 en una sola línea.
- **p05 (cierre divider esencia)**: el párrafo "este capítulo declara contra quién trabajamos…" roza el footer y se solapa parcialmente con "ESENCIA". Subir márgen-bottom 6mm.

---

## 4. NUEVAS PÁGINAS

- **p04 Origen** — Valor alto. Narrativa real ("Madrid marzo de 2024…"), Mateo como caso arquetipo, drop-cap `M`, métricas de cierre. Ortografía OK. Ya no hay `{{idx}}` visible. **Pega**: el bloque izquierdo "«Firmamos en blanco»" sobre la foto del lápiz tiene la atribución "LO DIJO UN COMPOSITOR DE 19 AÑOS EN UN MICRO ABIERTO EN MADRID" con contraste bajo (magenta 50% sobre foto oscura) — subir opacidad a 85%.
- **p09 Manifiesto Rebel** — Concepto fuerte (outline italic Fraunces + inline body), pero *regresión de footer* (ver §3) y el número `05` queda huérfano arriba sin item. Mirar render.
- **p52 Testimonios** — Muy sólida. Tres retratos duotono + quote + atribución + ciudad. Copy creíble, sin tics de IA. Cuadra sistema. Única nota: las flechas `«` decorativas bajo cada foto son un poco random — las cambiaría por el símbolo circuit-board (coherencia) o las quitaría.

---

## 5. MEDIOCRIDADES PERSISTENTES (3-5 páginas que aún arrastran)

1. **p02 "Tu música. Tu copyright. Tu dinero."** — El gradient violeta + serif outline es el tipo de spread que "funciona" pero se ve en cualquier pitch deck de 2024. No está mal, es *safe*. Subir a memorable: romper el grid con una palabra fuera de caja, añadir un hash real flotando, o pasar a split 2/3 paper / 1/3 midnight.
2. **p10 Logo divider** — El plano técnico con crosshairs y "2.5 : 1 · 0° · NO ROTATION" es genérico de manual de marca. Todo el mundo lo hace así. Se siente templated.
3. **p14 "Seis formas de romperlo"** — El grid 2×3 de don'ts es literal del playbook Pentagram/IBM. Funciona, pero no tiene firma Shamusic. Añadir en cada tile el mantra tachado (ej. "~~Tu música~~") como detalle de personalidad.
4. **p44 Aplicaciones divider** — El render 3D del USB+cajón es el punto más débil visual del manual. Genérico de stock/Midjourney. O sustituir por still-life fotográfico real o por un collage de piezas reales (certificado + vinilo + tote) ya producidas en las páginas siguientes.
5. **p48 Spotify Canvas + App icon** — Correcta pero sin opinión. Es "aquí-está-el-asset". Añadir una línea de copy editorial arriba tipo "El loop de 8 segundos que sella la obra" — convertir la página en argumento, no en especificación.

---

## 6. CONCLUSIÓN GO / NO-GO

**Sí, con 3 fixes bloqueantes antes de enviar al cliente Premium:**

1. **p09 regresión footer** (crítico — afea la sección manifiesto, la más cargada conceptualmente).
2. **p05 microcopy esencia** — contraste + solape inferior.
3. **p52 flechas decorativas** — sustituir por símbolo circuit-board o quitar (coherencia de sistema).

Fixes opcionales de pulido (no bloqueantes): p30 contraste intro, p45/p50 microcopy, p14 mantras tachados en don'ts, p48 headline editorial.

**Dictamen**: una vez cerrados los 3 bloqueantes, el manual está al nivel de un entregable Premium defendible frente a un cliente que ha visto manuales de Pentagram, DIA, Koto. Tiene tesis, tiene disciplina, tiene momentos memorables (p04 origen, p09 manifiesto, p27-29 fotografía, p42 poster Sessions, p52 testimonios). No hay páginas que den vergüenza. Hay páginas que todavía pueden ser mejores — pero ninguna que rompa la impresión de conjunto.
