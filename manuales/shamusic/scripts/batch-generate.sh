#!/usr/bin/env bash
# Shamusic batch image generator — 2.5 Flash FREE only
set -uo pipefail
cd "$(dirname "$0")"

# Shared style vars
MIDNIGHT="#120A25"
MAGENTA="#CE68D2"
VIOLET="#7A00DF"
PAPER="#F4F1EA"
STYLE_GRAIN="film grain 6% overlay, editorial premium aesthetic, Stripe Press meets Resident Advisor, no text no watermarks no logos"

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

# 02 — Circuit-board motif
gen "02-circuit-motif" "Abstract circuit-board / neural network motif: geometric network of 12-15 circular nodes connected by thin hairline magenta $MAGENTA lines on deep midnight $MIDNIGHT background. Nodes glow with soft magenta halo. Composition asymmetric, editorial, technical but warm. $STYLE_GRAIN"

# 03 — Ceremonial gradient cover
gen "03-gradient-ceremonial" "Pure radial ceremonial gradient: magenta $MAGENTA flowing into deep violet $VIOLET and fading to midnight $MIDNIGHT at edges. Dramatic full-bleed, abstract, cinematic, feels like a vinyl record sleeve cover. Slight film grain. No patterns, no text."

# 04 — Grain pure texture
gen "04-grain-texture" "Abstract film grain and noise texture sheet: midnight $MIDNIGHT base with layered analog grain, subtle magenta $MAGENTA micro-speckle, feels like pushed 35mm Kodak Portra film pushed 2 stops. Dense texture, no objects, no composition, usable as overlay layer. High contrast grain detail."

# 05 — Portrait masculine duotono
gen "05-portrait-male-duotono" "Abstract editorial portrait of a young male independent musician, hood up, shadow across face, three-quarter angle. Duotone treatment using midnight $MIDNIGHT and magenta $MAGENTA only (no other colors). Heavy film grain, moody Vogue Italia editorial aesthetic, Resident Advisor cover style. Soft light from one side, minimalist. No text."

# 06 — Portrait feminine duotono
gen "06-portrait-female-duotono" "Abstract editorial portrait of a young female independent musician, profile view, eyes closed in performance, microphone near lips. Duotone only midnight $MIDNIGHT and magenta $MAGENTA. Heavy film grain, Resident Advisor magazine cover style. Dramatic side-light, intimate, no other colors. No text."

# 07 — Hands guitar duotono
gen "07-hands-guitar" "Close macro of hands playing an acoustic guitar, capturing fingers on strings, shallow depth of field. Duotone midnight $MIDNIGHT and magenta $MAGENTA. Film grain heavy, editorial fashion magazine treatment. Intimate, hands only, no face. Strings catch a hint of magenta highlight."

# 08 — Microphone studio
gen "08-microphone-studio" "Close-up of a vintage condenser studio microphone on a boom arm, shot in deep shadow. Duotone only midnight $MIDNIGHT and magenta $MAGENTA. Heavy film grain, moody, dramatic rim light in magenta. Editorial music magazine aesthetic. No text, no brand on mic."

# 09 — Jazz club moody
gen "09-jazz-club-interior" "Moody interior of a small jazz club in Madrid at night: empty stage with single magenta $MAGENTA spotlight, warm shadows, red velvet details visible as midnight $MIDNIGHT darkness, deep perspective toward stage. Duotone palette midnight + magenta only. Film grain heavy, cinematic, Wong Kar-wai aesthetic, no people, atmospheric."

# 10 — Vinyl macro
gen "10-vinyl-macro" "Macro photograph of a black vinyl record groove, angled so magenta $MAGENTA light catches the grooves creating prismatic highlights. Midnight $MIDNIGHT shadows dominate. Extreme close-up, abstract, shallow depth of field. Film grain, editorial music magazine. No label text visible."

# 11 — Recording studio console
gen "11-studio-console" "Abstract low-angle shot of a recording studio mixing console: rows of faders and knobs glowing subtly, bokeh lights in background. Duotone midnight $MIDNIGHT and magenta $MAGENTA — no other colors. Heavy film grain, editorial, premium music technology magazine. Shallow depth of field, cinematic. No readable text on console."

# 12 — Piano keys
gen "12-piano-keys" "Macro of piano keys at an angle, with magenta $MAGENTA gradient light playing across the black and midnight $MIDNIGHT tones of the keys. Dramatic shadow, duotone only midnight and magenta, film grain. Editorial, moody. No hands, no text."

# 13 — Concert silhouettes
gen "13-concert-crowd" "Silhouettes of a small crowd at an intimate concert, hands raised, shot from behind. Stage beyond glows with magenta $MAGENTA light. Duotone midnight $MIDNIGHT and magenta only. Heavy film grain, 35mm feel, editorial music journalism aesthetic. No faces readable, no text."

# 14 — Hand writing score
gen "14-hand-writing-score" "Close overhead shot of a hand writing musical notes on staff paper with a dip pen, ink magenta $MAGENTA against midnight $MIDNIGHT paper. Editorial intimate, film grain heavy, duotone. The staff lines visible, a few notes drawn. No face, no other objects."

# 15 — Cassette tape
gen "15-cassette-tape" "Vintage compact cassette tape on a flat surface, photographed overhead in moody light. Duotone midnight $MIDNIGHT background and magenta $MAGENTA highlights on the tape's spools. Film grain, editorial still life. Label blank (no text). Analog nostalgia, Stripe Press aesthetic."

echo "--- BATCH 1 DONE ---"
ls -lh source-images/
