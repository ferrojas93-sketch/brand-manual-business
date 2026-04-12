#!/usr/bin/env bash
# Genera 40 ilustraciones editoriales para /anatomia usando Gemini 2.5 Flash (FREE tier).
# Estilo: Pentagram-meets-Swiss, línea fina negra, acento Lacre, fondo papel crema.

set -euo pipefail

OUT=~/Projects/claude/brand-manual-business/web/public/anatomia
mkdir -p "$OUT"

MODEL="gemini-2.5-flash-image"
SIZE="1K"
ASPECT="4:3"

STYLE="Editorial illustration, cream paper texture background hex F4F0EB, single accent color Lacre orange-red hex C4553A, thin black line work 1-2pt strokes, no gradients, no 3D, flat editorial print style, Pentagram-meets-Swiss-design, quiet negative space, centered composition, subtle paper grain, no text, no letters, no words"

gen() {
  local slug="$1"
  local prompt="$2"
  if [ -f "$OUT/$slug.png" ] || [ -f "$OUT/$slug.jpeg" ]; then
    echo "SKIP $slug (exists)"
    return
  fi
  echo "GEN  $slug"
  nano-banana "$prompt. $STYLE" -m "$MODEL" -s "$SIZE" -a "$ASPECT" -d "$OUT" -o "$slug" 2>&1 | tail -2
}

# 01 FUNDAMENTOS
gen "01-proposito"       "A single compass needle balancing vertically on a small dot, ultra minimal line art"
gen "01-vision"          "A single human eye drawn with one continuous thin line, iris filled solid Lacre orange-red"
gen "01-valores"         "Four smooth stacked stones in perfect vertical balance, the middle one solid Lacre"
gen "01-personalidad"    "A profile face silhouette split vertically in two halves: left half thin line-drawn outline only, right half solid Lacre shape"

# 02 LOGO SYSTEM
gen "02-marca-principal" "A single bold geometric monogram letter T centered inside a precise square grid of dotted guidelines"
gen "02-variantes"       "A triptych of three logo marks side by side: a horizontal wordmark, a compact stacked mark, a single icon, all abstract"
gen "02-zona-exclusion"  "An abstract logo shape surrounded by four concentric squares indicating clearspace margins, with small arrow marks"
gen "02-usos-incorrectos" "A 2x2 grid of the same abstract logo shown stretched horizontally, rotated at angle, recolored wrong, distorted, each with a diagonal Lacre cross-out line"

# 03 TIPOGRAFÍA
gen "03-display"         "A giant solid black letter A in high-contrast display serif, positioned partially cropped off the left edge of canvas, dramatic scale"
gen "03-texto"           "Seven horizontal parallel thin lines simulating flowing paragraph body text, tight regular rhythm"
gen "03-jerarquia"       "Five horizontal stacked bars descending in length like a type scale, topmost bar solid Lacre, others black"
gen "03-escalas"         "A vertical ruler with precise ascending tick marks and number labels abstracted as dashes, modular scale visualization"

# 04 COLOR
gen "04-primarios"       "Three vertical paint stripes side by side of equal width: black, cream, Lacre orange-red, dripping slightly at the bottom"
gen "04-secundarios"     "A 2x3 grid of color swatch chips with small abstract code labels as thin lines below each chip"
gen "04-usos-jerarquia"  "A minimal pie chart divided in three segments: large 70 percent black, medium 20 percent cream with outline, small 10 percent Lacre"
gen "04-valores-pantone" "A single Pantone-style color chip card viewed from above, slightly folded corner, solid Lacre color fill"

# 05 ICONOGRAFÍA
gen "05-trazo"           "A single minimal abstract icon shape drawn with consistent thin stroke weight, shown with stroke endpoints highlighted as small dots"
gen "05-tamanos"         "The same abstract icon repeated in four sizes from small to large in a horizontal row, with tiny numeric tick marks below"
gen "05-coleccion"       "A 3x3 grid of nine different minimal abstract pictograms all drawn in consistent thin line style"
gen "05-icono-donts"     "Four versions of the same icon: one correct black, three wrong variants each marked with a diagonal Lacre crossing line"

# 06 FOTOGRAFÍA
gen "06-direccion"       "A minimalist camera viewfinder frame with crosshairs centered, abstract"
gen "06-tratamiento"     "A rectangular film strip with three frames, the middle frame tinted solid Lacre, the others black and white"
gen "06-composicion"     "A rectangular photo frame with rule of thirds grid lines overlaid, a small Lacre dot at one intersection"
gen "06-moodboard"       "A contact sheet style grid of twelve small rectangular photo frames, one of them solid Lacre"

# 07 VOZ Y TONO
gen "07-principios"      "A pair of elegant oversized quotation marks floating in negative space, the left one black, the right one Lacre"
gen "07-registro"        "A tuning fork standing upright with a tiny Lacre dot floating between its two prongs"
gen "07-glosario"        "An open book seen from above, blank pages, a small Lacre bookmark ribbon hanging from the top"
gen "07-prohibidas"      "Three horizontal words abstracted as lines, each with a Lacre line crossed through them"

# 08 APLICACIONES
gen "08-papeleria"       "A tidy stack of three business cards viewed at slight angle, top card showing a single Lacre dot"
gen "08-digital"         "A laptop screen and a phone screen side by side in minimal outline, both showing abstract horizontal content lines"
gen "08-merch"           "A simple tote bag hanging on a hook, with a single Lacre logo dot centered on the bag"
gen "08-senaletica"      "A directional street sign on a post pointing right, single arrow, Lacre accent at the tip"

# 09 BRAND ARCHITECTURE
gen "09-marca-producto"  "A minimal organizational tree diagram: one parent node on top connected by thin lines to three child nodes below, parent is Lacre"
gen "09-co-branding"     "Two circles overlapping like a Venn diagram, left circle outlined black, right circle outlined Lacre, intersection subtly shaded"
gen "09-submarcas"       "A horizontal row of one large parent mark on the left and three smaller submark variations connected by thin horizontal lines"
gen "09-endorsement"     "A big logo shape with a small endorsement tag attached below reading as a tiny horizontal line, the tag in Lacre"

# 10 GOVERNANCE
gen "10-checklist"       "A clipboard viewed from above with five short horizontal lines representing list items, three with small check marks, checks in Lacre"
gen "10-aprobacion"      "A rubber stamp pressed onto paper leaving a solid Lacre circular mark with slight ink texture"
gen "10-versionado"      "Three stacked document rectangles labeled abstractly v1 v2 v3 as tiny dashes, connected by upward arrows, newest one Lacre"
gen "10-formacion"       "A minimal classroom scene from above: a small rectangular podium front-center and four small round seats in a row facing it, podium solid Lacre"

echo ""
echo "Done. Imágenes en $OUT"
ls "$OUT" | wc -l
