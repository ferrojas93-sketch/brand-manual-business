#!/usr/bin/env bash
set -uo pipefail
cd "$(dirname "$0")"

MIDNIGHT="#120A25"
MAGENTA="#CE68D2"
VIOLET="#7A00DF"
PAPER="#F4F1EA"
STYLE_GRAIN="film grain 6% overlay, editorial premium aesthetic, no text no watermarks no logos"

gen() {
  local n="$1" prompt="$2"
  local out="source-images/$n.png"
  if [ -f "$out" ] && [ "$(stat -f%z "$out" 2>/dev/null || stat -c%s "$out")" -gt 50000 ]; then
    echo "⊙ skip $n (exists)"
    return
  fi
  echo "→ $n"
  ./gen-image.sh "$prompt" "$out" || { echo "FAIL $n" >&2; return 1; }
}

# 16 — Dense notation overlay (for full-bleed spreads)
gen "16-dense-notation" "Extremely dense hand-drawn musical notation covering the entire canvas: staves, clefs, time signatures, barlines, quarter notes, eighth notes rendered in hairline magenta $MAGENTA on midnight $MIDNIGHT. Like a composer's frantic sketch, layered textures, organized chaos. Full coverage pattern, editorial. No readable text. $STYLE_GRAIN"

# 17 — Data flow / blockchain viz
gen "17-hash-dataflow" "Abstract data visualization: interconnected hexagonal nodes linked by hairline magenta $MAGENTA paths on midnight $MIDNIGHT background, representing a distributed ledger. Each node glows subtly. Composition asymmetric, editorial infographic aesthetic, like Information is Beautiful awards style. Premium technical illustration. No text, no numbers."

# 18 — Sound wave hairline
gen "18-sound-wave-hairline" "Minimalist audio waveform rendered as thin 1px magenta $MAGENTA line on midnight $MIDNIGHT, horizontal, occupying middle third of canvas. Peaks and valleys of an audio track. Very clean, editorial infographic aesthetic. Pure line-art, no shadows, no colors other than midnight and magenta."

# 19 — Vinyl record macro angled
gen "19-vinyl-angled" "Close-up of a magenta-tinted vinyl record seen at 30-degree angle, showing grooves catching light, magenta $MAGENTA reflection on wet-looking black surface. Midnight $MIDNIGHT background. Dramatic, cinematic, premium music magazine cover aesthetic. Film grain. No label visible."

# 20 — Portrait female lateral
gen "20-portrait-female-lateral" "Editorial portrait of a young Latinx female musician with curly hair, side profile, eyes downcast, contemplative. Duotone midnight $MIDNIGHT and magenta $MAGENTA only. Heavy film grain, Resident Advisor / Apartamento magazine cover aesthetic. Shoulders visible, intimate crop. No text, no accessories."

# 21 — Portrait male guitar
gen "21-portrait-male-guitar" "Editorial portrait of a young male singer-songwriter holding an acoustic guitar, looking off-camera, three-quarter profile. Duotone midnight $MIDNIGHT and magenta $MAGENTA only. Heavy film grain, The Face magazine aesthetic, moody, intimate. Guitar body partially visible. No text."

# 22 — Hands keyboard synth
gen "22-hands-synth" "Overhead close-up of hands playing an analog synthesizer, fingers on keys, knobs in soft focus. Duotone midnight $MIDNIGHT and magenta $MAGENTA. Film grain, editorial electronic music magazine. Shallow depth of field, hands only, no face. $STYLE_GRAIN"

# 23 — Concert low angle
gen "23-concert-low-angle" "Low-angle shot from the front row of a small concert: a singer leaning into a microphone, silhouette against a magenta $MAGENTA spotlight. Midnight $MIDNIGHT surroundings. Duotone only. Heavy film grain, editorial music journalism. Dramatic, intimate, no visible brand logos, no readable text."

# 24 — Flyer / poster mockup texture
gen "24-poster-paper-texture" "Overhead flat-lay of a stack of printed posters on a dark surface, top poster shows subtle magenta $MAGENTA ink bleed and paper texture. Midnight $MIDNIGHT background. Editorial print production aesthetic, designer's studio. Film grain. No readable text on posters, just abstract ink areas."

# 25 — Noche neon sign
gen "25-neon-sign" "Single magenta $MAGENTA neon sign on a brick wall at night, sign is abstract (simple line-art representing sound wave or music note), glowing softly. Warm magenta bloom. Midnight $MIDNIGHT darkness around. Duotone only. Cinematic, moody, no readable words in the sign, editorial street photography. Film grain."

# 26 — Mic abierto crowd
gen "26-mic-abierto-scene" "Intimate Madrid jazz café scene, small wooden tables with candles, a microphone on a tiny stage in the back corner, empty chairs in foreground, soft magenta $MAGENTA wash of light across the space. Midnight $MIDNIGHT shadows, duotone only. Cinematic, Wong Kar-wai aesthetic, heavy film grain. No people, no text."

# 27 — Paper notation handwritten
gen "27-paper-notation" "Overhead macro of a page of handwritten musical notation on slightly yellowed paper, written in magenta $MAGENTA ink. Some crossings-out, composer's messy work. Midnight $MIDNIGHT shadow corners. Duotone but paper retains warm off-white. Editorial intimate, film grain. The staff lines and notes are decorative, no recognizable melody."

# 28 — Abstract type specimen
gen "28-type-abstract" "Abstract editorial typography specimen: large black letterforms like 'SM' or fragments of 'SHAMUSIC' at extreme close crop, the letters are pure midnight $MIDNIGHT against a magenta $MAGENTA background, harsh film grain, Swiss typography poster aesthetic. Minimal. No readable words, just cropped letter-shapes as visual texture."

# 29 — Cover hero portrait duotono
gen "29-cover-hero-portrait" "Full-bleed editorial cover portrait: a young musician lit from behind by magenta $MAGENTA rim light, face in shadow, only edges of silhouette glowing. Midnight $MIDNIGHT dominates the frame, 70% negative space. Duotone. Magazine cover / manual cover aesthetic. Cinematic, Stripe Press meets Vinyl Me Please. Heavy film grain. No text, no logos."

# 30 — Circuit + notation hybrid
gen "30-circuit-notation-hybrid" "Abstract hybrid of circuit-board motif and musical staff notation: horizontal staves of a music sheet where the notes are replaced by circuit nodes, all rendered in hairline magenta $MAGENTA on midnight $MIDNIGHT. Editorial illustration, symbolic. Clean, minimal, premium. No text."

echo "--- BATCH 2 DONE ---"
ls -lh source-images/ | tail -20
