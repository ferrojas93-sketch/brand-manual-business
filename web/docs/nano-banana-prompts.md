# Nano-banana prompts · imágenes blog Tramarca

_Source of truth para Fernando · pegar literal en Gemini 2.5 Flash Image (`gemini.google.com`).
Cada prompt produce hero o figura para una pieza concreta del blog._

## Norma raíz

Todas las imágenes Tramarca se generan con **nano-banana** (Gemini 2.5 Flash Image).
Composiciones tipográficas magick están **prohibidas** como hero/figura final
(salvo favicon/logo tile pequeños).

## Reglas de prompt comunes

**Keywords obligados**: `Pentagram aesthetic`, `Stripe Press editorial`,
`cold flat daylight`, `desaturated`, `contemporary minimalism`,
`matte concrete or paper surface`, `magazine-grade photography`.

**Prohibidos absolutos**: `Kinfolk`, `golden hour`, `letterpress`,
`sepia`, `warm nostalgia`, `Mont Blanc`, `Mamiya`, `olive leaves`,
`brass compass`, `tracing paper`, `vintage rustic wood`.

**Aspect ratio**: hero 16:9 (1600×900), fig secundaria 4:3 (1600×1200).

**Paleta**: `matte black #0C0C0C`, `paper cream #F4F0EB`, `lacre red #C4553A`
(acento puntual único), `concrete gray`. NO purpura, naranja, amarillo
salvo si la pieza es sobre marca específica con esa paleta.

**Negative style global**: `no text overlay, no logos visible, no people
faces, no Kinfolk aesthetic, no warm nostalgia, no rustic textures,
no golden hour, no decorative props`.

---

## 01 · `/blog/cuanto-cuesta-manual-de-marca-espana-2026`

### Hero (16:9 · 1600×900)

```
Editorial product shot of a stack of four brand manuals at different
thicknesses on matte concrete surface. Visual representation of price
range tiers. Pentagram aesthetic, Stripe Press editorial style. Cold
flat daylight from above-left, desaturated paper cream and matte black
binding. The thinnest manual on top with a single small terracotta-lacre
dot accent. Geometric precision, magazine-grade photography. No text
visible, no logos, no decorative props. 16:9 ultra sharp focus.
Negative: no warm nostalgia, no Kinfolk, no rustic wood, no golden hour.
```

### Alt text esperado tras subir

> Stack editorial de cuatro manuales de marca de distinto grosor representando rangos de precio en España 2026 — fotografía Pentagram aesthetic en cold flat daylight

---

## 02 · `/blog/que-es-un-manual-de-marca`

### Hero (16:9 · 1600×900)

```
Editorial photography of an open brand manual spread on matte concrete
surface, showing a clearly visible grid construction with geometric
typography samples and component diagrams. Pentagram aesthetic,
contemporary editorial. Cold flat daylight directly above, desaturated
paper cream and matte black ink. Single terracotta-lacre dot as
accent on a corner detail. Composition: book takes 70% of frame
centered. No text legible, no logos, no hands. Magazine-grade,
16:9 ultra sharp focus.
Negative: no Kinfolk, no warm tones, no decorative props, no people.
```

---

## 03 · `/blog/manual-marca-vs-brand-book`

### Hero (16:9 · 1600×900)

```
Two different book formats side by side on matte concrete table,
clearly contrasting. Left: a thicker coffee-table-style book with
softer cover (representing brand book aspirational). Right: a thinner
technical manual with rigid linen cover and visible grid lines on
visible spread (representing operational manual). Pentagram aesthetic,
cold flat daylight, desaturated paper cream and matte black, single
terracotta-lacre dot accent only on the right (technical) book spine.
16:9 magazine-grade, ultra sharp focus.
Negative: no decorative props, no warm tones, no Kinfolk.
```

---

## 04 · `/blog/como-hacer-manual-de-marca-paso-a-paso`

### Hero (16:9 · 1600×900)

```
Editorial top-down photograph of a designer's workspace: matte concrete
surface with brand manual draft pages spread out, geometric construction
sketches, color swatches in matte black and paper cream tones, a
single terracotta-lacre dot as accent on one swatch. A clean black
mechanical pencil resting on the spread. Pentagram aesthetic, Stripe
Press editorial, cold flat daylight from above. Numbered annotations
visible faintly suggesting process steps. No hands visible, no faces.
Magazine-grade 16:9 ultra sharp focus.
Negative: no warm wood, no Kinfolk, no Mont Blanc pen, no golden hour.
```

---

## 05 · `/blog/nasa-graphics-standards-manual-1976` ✅ YA TIENE IMAGEN REAL

Hero actual usa **scan auténtico de página 1.4 del manual NASA original
1976** (variantes Worm rojo + negro + gray) descargada de Archive.org
con Public Domain Mark 1.0. NO necesita nano-banana — la imagen real
del manual histórico es más fuerte que cualquier render.

3 figuras secundarias también con scans reales del PDF original
(`fig-02-worm.jpg`, `fig-03-patches.jpg`, `fig-04-grid.jpg`).

---

## 06 · `/blog/fedex-flecha-oculta`

### Hero (16:9 · 1600×900) — necesita nano-banana

```
Macro editorial photograph of orange and purple paint swatches on matte
concrete surface, with a subtle arrow shape formed by the negative space
between two color blocks. Visual reference to negative space design
without showing any actual logo. Pentagram aesthetic, cold flat
daylight, desaturated. The arrow space is the focal point — the
viewer's eye discovers it after the colors. Geometric precision.
Magazine-grade 16:9 ultra sharp focus.
Negative: no FedEx logo visible (avoid trademark), no decorative props,
no Kinfolk, no warm tones.
```

Alternativa si la primera no convence:

```
Close-up macro of typographic letterforms cut from cardboard sheets
arranged on matte concrete surface, showing how negative space between
adjacent letter shapes can form a meaningful figure. Educational
design photography. Pentagram aesthetic, cold flat daylight,
desaturated paper cream and matte black with one small orange-lacre
accent dot. No actual brand logos visible. Magazine-grade 16:9.
```

---

## 07 · `/blog/mejores-manuales-de-marca-historia`

### Hero (16:9 · 1600×900) — necesita nano-banana

```
Editorial top-down product photography of fifteen brand manuals
arranged in chronological order on matte concrete surface, from oldest
(1956 thick hardcover linen-bound) to newest (2026 contemporary
slim matte black with paper edge). Subtle thickness variation
representing different eras. Pentagram aesthetic, Stripe Press
editorial style, cold flat daylight from directly above, desaturated
paper cream and matte black with a single terracotta-lacre dot
accent only on the most recent manual (right-most). Composition:
diagonal arrangement, clean negative space. No text legible, no
logos, no decorative props. Magazine-grade 16:9 ultra sharp focus.
Negative: no warm tones, no Kinfolk, no rustic wood surface.
```

---

## Workflow para cada pieza

1. **Fernando**: copiar el prompt literal en Gemini app (https://gemini.google.com)
2. Generar 3-4 variantes, elegir la mejor
3. Descargar como JPG, sobrescribir `public/blog/{slug}/hero.jpg`
4. Verificar dimensiones >= 1600×900
5. Antes de commit, invocar agente `visual-guardian` para validar
6. Commit: `git add public/blog/{slug}/ && git commit -m "feat(blog): nano-banana hero · {slug}"`

## Test de sanity tras generar

- ¿Pasaría al lado de pentagram.com sin parecer Webflow template?
- ¿Hay algún prop vintage (Mamiya, brass, olive leaf, oak wood)? Si sí → regenerar
- ¿El lacre aparece como acento puntual o domina? Acento únicamente
- ¿Es legible a 400px de ancho (preview WhatsApp / LinkedIn)? Si no → más zoom-in
- ¿La imagen tiene >100KB? Si <50KB → probablemente vacío o cartel

## Figuras secundarias

Cuando las piezas se expanden con figuras inline (cada 2-3 H2), generar
con prompts derivados del hero pero más cercanos al concepto del H2
respectivo. Ejemplos:

- "Cuánto cuesta" Fig. 02: close-up de billete + factura sobre concreto
- "Qué es" Fig. 02: close-up de spread tipográfico con jerarquía H1-H6
- "Cómo hacer" Fig. 02 a 09: una por paso del proceso (8 figuras secuenciales)

Mantener la coherencia visual con el hero respectivo.
