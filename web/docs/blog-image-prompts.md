# Prompts nano-banana · Imágenes blog Tramarca

_Actualmente todas las piezas usan `portfolio/tramarca-cover.jpg` como placeholder.
Generar con nano-banana (Gemini 2.5 Flash Image · gratis) y sustituir en `public/blog/{slug}/hero.jpg`._

## Reglas globales (ver `agents/editorial-writer.md`)

**Keywords obligados**: Pentagram aesthetic, Stripe Press, cold flat daylight,
desaturated editorial, contemporary minimalism, matte surfaces, muted natural light.

**Prohibidos**: Kinfolk, golden hour, letterpress, sepia, warm nostalgia,
Mont Blanc, olive leaves, brass compass, vintage Mamiya, rustic wood.

**Aspect ratio**: 16:9 para heros, 4:3 para figs secundarias.

**Paleta Tramarca**: negro matte (#0C0C0C), papel crema (#F4F0EB), steel greys,
lacre (#C4553A) como único color cálido de acento.

---

## Pieza 01 · `/blog/cuanto-cuesta-manual-de-marca-espana-2026`

### Hero (16:9)
Contemporary editorial product shot of a stack of four brand manuals in
different thicknesses on matte concrete surface, visually showing the
price range comparison. Pentagram aesthetic, cold flat daylight from
above, desaturated paper cream and matte black binding, single small
terracotta-lacre dot as accent on top manual. Geometric precision,
magazine-grade photography, 16:9 ultra sharp focus. No props beyond
the books. No text visible.

---

## Pieza 02 · `/blog/que-es-un-manual-de-marca`

### Hero (16:9)
Editorial still life of an open brand manual spread on matte concrete
surface. Spread shows visible grid construction with geometric diagrams
and typography samples. Pentagram aesthetic, cold flat daylight, paper
cream and matte black ink, single terracotta-lacre dot accent. No props,
no hands, no additional objects. Magazine-grade photography, 16:9
ultra sharp focus.

### Fig. 02 (opcional · 4:3)
Close-up shot of a typographic specimen page on matte cream paper,
showing hierarchical type scale (H1 to H6) in black with one terracotta
highlight. Stripe Press editorial aesthetic, cold flat daylight,
desaturated, no decorative elements.

---

## Pieza 03 · `/blog/manual-marca-vs-brand-book`

### Hero (16:9)
Two different book formats on matte concrete table side by side: on
the left a larger coffee-table-style brand book with aspirational
imagery on cover, on the right a thinner technical manual with
geometric diagrams on cover. Clear visual contrast between narrative
vs technical. Pentagram aesthetic, cold flat daylight, desaturated
paper cream and matte black, single terracotta-lacre dot as accent
on the technical manual only. 16:9 ultra sharp focus.

### Fig. 02 (opcional · 4:3)
Side-by-side interior spread comparison: left spread shows aspirational
lifestyle photography with poetic quote (brand book), right spread
shows technical logo construction with grid diagram and measurements
(manual). Clear editorial contrast. Cold flat daylight, matte surfaces,
contemporary minimalism.

---

## Pieza 05 · `/blog/nasa-graphics-standards-manual-1976` · CATEGORÍA ANÁLISIS

### Hero (16:9)
Archival-style editorial photograph of the NASA Graphics Standards
Manual (1976 facsimile edition) open on a concrete surface, showing a
construction diagram spread with the NASA "Worm" logotype geometry.
Contemporary museum photography aesthetic — Stripe Press, not vintage
nostalgia. Cold flat daylight, desaturated except the original red
(Pantone 185) of the logotype. No props beyond the book. No hands.
Magazine-grade, 16:9 ultra sharp focus.

### Fig. 02 (4:3) · El Worm logotipo
Close-up macro shot of the NASA Worm logotype printed in red on matte
cream paper, tight framing on the missing crossbar of the "A". Museum
photography aesthetic, cold flat daylight, contemporary minimalism.

### Fig. 03 (4:3) · Aplicación a transbordador
Archival-style photo reference of the NASA Worm painted on the
fuselage of a space shuttle or jet (technical documentation, not
action shot). Desaturated, concrete studio aesthetic, red accent
preserved. Crop tight on lettering and structure.

### Fig. 04 (4:3) · Comparativa Worm vs Meatball
Side-by-side graphic comparison of the two NASA logos on matte cream
paper: the Worm (1976-1992) in red vs the Meatball (1959-1975 and
1992-present) in blue. Clean flat-lay editorial photography, cold
daylight, no decorative elements.

### Fig. 05 (4:3) · Reed + Smyth facsimile 2015
The Kickstarter facsimile edition of the NASA manual on a concrete
surface, closed book showing the cover embossing. Editorial museum
aesthetic, cold flat daylight, desaturated cream and matte navy.

---

## Workflow para aplicar

1. Fernando abre nano-banana (https://gemini.google.com/app con modelo
   Gemini 2.5 Flash Image) o ChatGPT con generación de imagen.
2. Pega el prompt literal de la pieza que necesite.
3. Genera 3-4 variantes, elige la que mejor encaja.
4. Descarga como JPG y sobrescribe `public/blog/{slug}/hero.jpg`.
5. Si generó figs secundarias, guardar como `public/blog/{slug}/fig-02.jpg`,
   `fig-03.jpg`, etc.
6. Commit: `git add public/blog/ && git commit -m "feat(blog): imágenes
   hero generadas · pieza {slug}"`.

## Test de sanity tras generar

- ¿La imagen pasaría al lado de Pentagram.com sin parecer Webflow template?
- ¿Hay algún prop vintage (Mamiya, brass, olive leaf)? Si sí → regenerar.
- ¿El lacre aparece como acento puntual o domina? Acento.
- ¿Es legible a 400px (preview thumbnail en WhatsApp/LinkedIn)? Si no → regenerar más zoom-in.
