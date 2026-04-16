# Shamusic Brand Manual v3.3 — Review UX / Polish

Senior Designer review. 19 snapshots auditados (p01, p02, p03, p04, p06, p08, p10, p12, p14, p16, p18, p20, p22, p24, p26, p28, p30, p32, p34, p36, p38, p40, p42, p44, p46, p48, p50, p52, p54) + CSS de `build_v2.py`.

---

## 1. NOTA POLISH — **7.4 / 10**

Manual sólido, con voz propia (magenta + midnight + Fraunces italic como firma editorial). Supera con claridad el umbral de "AI slop" en estructura editorial, pero aún revela su origen generado en la repetición de patrones (spec blocks, card grids de 3×2, openers capitulares casi idénticos). Le falta una capa de craft humano — jerarquías rotas, marginalia, decisiones compositivas que sólo toma un ojo que ha montado 50 manuales.

## 2. AUDITORÍA POR DIMENSIÓN

| Dimensión | Nota | Diagnóstico |
|---|---|---|
| **Tipografía** | 8.0 | Escala declarada es buena (148/68/44/30/22/18/13/11/9.5) con saltos dramáticos. Fraunces opsz 144 bien configurado. **Debilidades**: Host Grotesk 900 tight-tracked funciona en display pero los H1 (p06, p14, p22, p44) se ven idénticos — no hay voz diferenciada entre "título de capítulo" y "título de sección". El uso del punto magenta como firma (p22, p42) empieza a volverse mecánico — aparece en CADA título. Falta hanging punctuation. No se aprovechan las ligatures/stylistic sets de Fraunces. |
| **Color** | 8.2 | 60/30/10 bien argumentado y ejecutado (p16). Paleta comprometida: midnight domina, magenta firma. **Debilidades**: el magenta #CE68D2 vs magenta-dust #F5C2F7 se lee casi igual en tamaños pequeños — falta separación tonal. Los gradientes radiales de los openers (p14, p22) son idénticos entre sí: misma posición, mismo radio, misma suavidad. Patrón repetido = aspecto de template. |
| **Spacing** | 7.0 | `.stack-4/6/10/16` da ritmo consistente. Márgenes 22/24mm correctos. **Debilidades**: no hay baseline grid real — las cards de p10, p18, p32, p38 no alinean entre spreads consecutivos. Los gutters de 8mm son uniformes en todo; un manual top varía gutters por jerarquía (4mm / 8mm / 14mm). Página 06 tiene los 5 items con leading idéntico — se lee como lista de checkout. |
| **Composición** | 6.8 | Hay intentos editoriales fuertes (p02 outline type, p30 fotografía desbordando, p42 X gigante). **Debilidades**: demasiadas páginas resuelven con "H1 arriba-izq + grid simétrico abajo" (p03, p06, p10, p14 interior, p18, p22, p26, p32, p38, p44, p52). Es el layout por defecto. Falta un solo spread realmente asimétrico tipo Emigre, Mucho, Bibliothèque — con texto que rompa, cuerpo que fluya en 2 columnas de anchos distintos, o imagen a full bleed con caption sangrada. |
| **Microdetalles** | 7.2 | Metastrip bien. Hairlines (p20) con buen peso. Mono para metadatos funciona. **Debilidades**: el "dot lacre" (punto magenta al final de cada título) se convierte en tic — pierde significado por repetición. Los page numbers (P.XX / 54) son correctos pero planos; un manual top los trata como marca (p ej. numeración romana en openers, arábiga en contenido). Captions son demasiado breves (p10: "PRINCIPAL · MIDNIGHT") — no hay voz, sólo etiqueta. |
| **Coherencia** | 8.5 | Sí se percibe la misma marca en todo — logro real. Los openers capitulares I-X con numeral magenta gigante dan espinazo. Portada (p01) ↔ contraportada (p54) rima. Problema opuesto: **demasiada** coherencia — las páginas son TAN parecidas en densidad que el ritmo se aplana. |

## 3. AI SLOP DETECTOR

1. **Openers capitulares clónicos** (p04, p08, p14, p34, p36, p42). I/II/III/VII/IX en Fraunces magenta-dust, mismo corpus cursiva arriba-izq, mismo gradiente radial en esquina superior. Un humano habría roto el patrón en el capítulo 5 para mantener la atención.
2. **Card grid 3×N recurrente** (p10, p12, p18, p38, p40, p44, p52). Cuatro formatos, seis formas, ocho slides, seis pósters, cinco escenas — siempre la misma rejilla con caption abajo. Dashboard SaaS disfrazado.
3. **Spec blocks tabulares** (p03, p24, p46, p48, p52) con pares `LABEL — VALUE` en dos columnas mono. Es legible pero huele a Notion database rendering.
4. **Punto magenta al final de CADA título** — hubo una decisión de firma, pero se aplicó con `replace_all` en vez de con criterio. En un manual top aparecería en el 30-40% de títulos, no en el 100%.
5. **Fotografías duotono idénticas en saturación** (p28, p30, p44). Misma receta magenta+midnight aplicada uniformemente. Falta una imagen que rompa — una foto B/N puro, un grano real, una sobreexposición deliberada.

## 4. WHAT'S MISSING — 5 ELEMENTOS PRO

1. **Pull quotes editoriales con Fraunces display italic a 90-120pt** rompiendo la columna (ej. citar a un artista, a un fundador, a Lester Bangs). Actualmente los italic subheads van siempre a 18pt — desaprovecha Fraunces.
2. **Marginalia tipo Tufte** — notas al margen en mono 7pt con línea de conexión hairline. Perfecto para anti-patterns (p22) o explicar decisiones técnicas del logo (p12).
3. **Callouts anatómicos sobre mockups** — líneas finas + labels numerados (01 arc ratio, 02 negative space, 03 clearspace) sobre el logo y sobre el certificado (p46). Ahora los specs están separados del objeto; deberían apuntarlo.
4. **Color-in-context strip** — un spread donde la paleta 60/30/10 se vea APLICADA a un mockup real (poster + stage + merch + web) en vez de sólo explicada en donut chart (p16).
5. **Índice editorial con número de página + ilustración/miniatura** en vez del TOC plano que probablemente hay entre p03 y p06. Los manuales top (Pentagram, Bibliothèque) tratan el índice como obra.

Bonus: cross-references activas ("ver color en contexto, p.28") — inexistentes.

## 5. PÁGINAS GANADORAS Y PERDEDORAS

**Top 5**:
- **p02** — outline Fraunces + relleno alternado. Único spread con voz tipográfica real.
- **p30** — fotografía desbordando a sangre con caption contenida. Ratio 2/3+1/3 editorial.
- **p42** — X gigante en Fraunces + fotografía de concierto + "Sessions." anclado abajo. Cinematográfico.
- **p46** — certificado como objeto. Específico, concreto, muy poco AI.
- **p14** — apertura Color con Fraunces III ambientada. Funciona la primera vez.

**Bottom 5**:
- **p06** — cinco valores con icono numerado. Checkout SaaS.
- **p18** — contraste matrix 3×2. Aburrida y además todos los ejemplos dicen "Aa Texto".
- **p26** — 18 iconos en grid 6×3 con caption idéntica. Sheet de iconos, no pieza editorial.
- **p38** — 5 reels en cards verticales clónicas. Mobile mockup estándar.
- **p48** — ocho slides en grid 4×2, densidad plana. No respira.

## 6. CSS / TÉCNICA — 3 QUE FALTAN

1. **`hanging-punctuation: first last`** en `.display-xl` y subheads — Fraunces con comillas tipográficas colgando fuera de caja es un marker instantáneo de craft editorial. Coste: 1 línea CSS.
2. **`initial-letter: 3 2`** (drop caps reales) en aperturas de capítulo — sustituye al numeral romano como recurso y añade textura editorial. Safari y Chrome lo soportan con `-webkit-initial-letter`.
3. **`column-count: 2; column-rule: 0.5px solid var(--mid); column-gap: 10mm`** en páginas narrativas (apertura de capítulo tipo manifesto) + **`font-variation-settings: 'opsz' N`** variando opsz según tamaño real para aprovechar Fraunces variable (ahora está fijo en 18 y 144, no se interpola). Añadir también `text-wrap: pretty` y `text-wrap: balance` en H1/display.

## 7. VEREDICTO POLISH

> Esto se siente: **professional** (con momentos artisanal en p02, p30, p42, p46).
>
> El detalle: **cuidado** (no obsesivo). Hay decisiones conscientes, pero también hay 15-20 páginas resueltas con la plantilla por defecto.

**One big win**: romper el patrón del opener capitular. Diseñar I-X como 10 piezas distintas — cada una con una decisión compositiva única (una con foto full bleed, otra sólo tipográfica, otra con pattern generativo, otra con objeto 3D) — elevaría el manual de 7.4 a 8.8 sin tocar el resto.
