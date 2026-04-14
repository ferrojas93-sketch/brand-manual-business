#!/usr/bin/env bash
# Shamusic v2 — extra imagery for premium applications
set -uo pipefail
cd "$(dirname "$0")"

MIDNIGHT="#120A25"
MAGENTA="#CE68D2"
VIOLET="#7A00DF"
PAPER="#F4F1EA"

gen() {
  local n="$1" prompt="$2"
  local out="source-images/$n.png"
  if [ -f "$out" ] && [ "$(stat -f%z "$out" 2>/dev/null || stat -c%s "$out")" -gt 50000 ]; then
    echo "⊙ skip $n"
    return
  fi
  echo "→ $n"
  ./gen-image.sh "$prompt" "$out" || { echo "FAIL $n" >&2; return 1; }
}

# MERCH
gen "31-tshirt-merch"        "Flat mockup of a high-end black t-shirt folded on a midnight $MIDNIGHT surface, photographed overhead. The t-shirt has a large magenta $MAGENTA abstract circuit-and-staff hybrid print on the chest (no readable text). Editorial fashion magazine aesthetic, film grain, moody lighting. Duotone only midnight and magenta. No visible text, no logos."
gen "32-tote-merch"          "Flat mockup of a natural canvas tote bag hanging against a midnight $MIDNIGHT wall, dramatic side light. The tote is canvas off-white with a small printed magenta $MAGENTA abstract circuit motif in bottom corner. Editorial product photography, film grain. Duotone minimal."
gen "33-sticker-sheet"       "Overhead shot of a sheet of die-cut stickers on paper: abstract magenta $MAGENTA geometric shapes (music notes, circuit nodes, hash symbols, sound waves) arranged in a 4×3 grid on bone-paper $PAPER background. Editorial, design-studio aesthetic. No readable text on stickers. Shadow of stickers visible."
gen "34-vinyl-sleeve"        "Square vinyl record sleeve mockup at 25-degree angle: midnight $MIDNIGHT background with radial magenta $MAGENTA ceremonial gradient at center, vinyl record peeking halfway out. Premium music packaging aesthetic, Stripe Press × Vinyl Me Please. Film grain. No text, no readable label — abstract composition."

# DIGITAL APPS
gen "35-app-mobile-ui"       "Smartphone mockup floating on midnight $MIDNIGHT gradient background, screen shows a minimalist music app UI in dark mode: top navigation with magenta $MAGENTA hash symbol, large cover art tile, play progress bar in magenta, song title in white sans-serif, waveform visualization. Editorial product render, clean. Duotone midnight + magenta only. No readable text (placeholder blocks)."
gen "36-spotify-canvas"      "Vertical 9:16 abstract loop artwork for music streaming canvas: dark midnight $MIDNIGHT background with slow swirling magenta $MAGENTA smoke-like motion suggesting a soundwave. Cinematic, premium streaming cover art aesthetic, atmospheric. Film grain. No text, no logos. Single composition (as if frozen from animated loop)."
gen "37-app-icon"            "Single brand app icon composition: rounded-square 1024×1024 tile with midnight $MIDNIGHT background and a centered magenta $MAGENTA minimalist circuit-board symbol (10 nodes connected by hairlines, like a music staff bracket). Very clean, iOS/Android app icon aesthetic, premium. Film grain micro. Nothing else visible."

# SESSIONS / EVENTS
gen "38-stage-banner"        "Wide stage banner mockup hanging behind an empty jazz club stage in Madrid, banner is midnight $MIDNIGHT with large magenta $MAGENTA abstract typography reading 'SESSIONS' in editorial chunky sans-serif (readable but cropped partially by frame). Cinematic Wong Kar-wai aesthetic, film grain, duotone. Empty stage, single magenta spotlight."
gen "39-flyer-a3-print"      "Overhead flat-lay of a printed A3 poster flyer lying on a weathered wooden table with coffee stain edge: poster design is midnight $MIDNIGHT with large magenta $MAGENTA radial gradient at bottom and bold condensed display type (illegible but visible as typographic composition). Editorial print production photography, film grain, tactile, warm ambient light. No readable text."
gen "40-lanyard-pass"        "Close-up of an event pass / lanyard hanging from a fabric strap: pass is midnight $MIDNIGHT with magenta $MAGENTA hologram-like stripe diagonal, blurred jazz club background. Premium festival badge aesthetic, editorial, shallow depth of field. No readable text on the pass."
gen "41-crowd-wide"          "Wide cinematic shot of an intimate Madrid jazz club packed with silhouettes of attendees, stage lit with magenta $MAGENTA wash, heads and shoulders visible from rear. Midnight $MIDNIGHT dominant, duotone. Film grain heavy, no faces readable, no visible brand, editorial concert photography."

# BRAND ARTIFACTS
gen "42-business-card"       "Overhead flat-lay of two business cards at an angle on a midnight $MIDNIGHT surface: one card is bone-paper $PAPER with magenta $MAGENTA small symbol in corner, the other flipped to show midnight side with white wordmark zone. Editorial premium stationery photography, shadow, film grain. Cards are blank (no readable text)."
gen "43-letterhead-flat"     "Overhead flat-lay of a premium letterhead document on bone-paper $PAPER, partially visible corner with a magenta $MAGENTA hairline header rule and tiny mono footer block. Editorial stationery aesthetic, Stripe Press quality paper texture. No readable text. Film grain subtle."
gen "44-envelope"            "Flat-lay of a closed midnight $MIDNIGHT envelope on bone-paper surface, envelope has a magenta $MAGENTA wax-seal-like circle embossed in upper right. Premium direct-mail aesthetic, editorial, film grain, warm lighting. No readable text, no address labels."

# ADDITIONAL CONTENT / PORTRAITS
gen "45-portrait-group"      "Editorial group portrait of three young musicians standing together in a Madrid alleyway at night, silhouetted, one holding a case. Duotone midnight $MIDNIGHT and magenta $MAGENTA only. Heavy film grain, The Face magazine aesthetic, no faces fully visible, moody backlight magenta. No text."
gen "46-hands-upload"        "Close macro of hands on a laptop keyboard typing, screen reflection of magenta $MAGENTA gradient on fingertips, dark midnight $MIDNIGHT ambient. Duotone. Premium tech product photography meets The Face. Film grain. Minimal, intimate. No visible screen content, no brand logos."

# ICON SYSTEM BASE (abstract)
gen "47-icon-grid"           "Design specimen sheet: 16 minimalist outline icons arranged in a 4×4 grid on bone-paper $PAPER background, each icon related to music + tech + legal: upload arrow, hash symbol, shield, wave, note, microphone, vinyl disc, lock, signature, certificate, play, pause, chain link, fingerprint, key, blockchain cube. All icons in hairline magenta $MAGENTA outline 1px, consistent geometric style, clean editorial specimen. No text labels. Premium design system aesthetic."

# DATAVIZ
gen "48-dataviz-flow"        "Infographic abstract composition on midnight $MIDNIGHT: a flow diagram using hairline magenta $MAGENTA lines and circular nodes representing a registration process (upload → hash → certificate → proof), but with abstract symbols not readable words. Editorial data visualization aesthetic, Information is Beautiful award style. Clean minimal. No readable text."

# MOTION BILLBOARD
gen "49-billboard-mockup"    "Outdoor billboard mockup at dusk in Madrid: large billboard against blue-violet dusk sky, billboard content is midnight $MIDNIGHT with massive magenta $MAGENTA serif wordmark (cropped, partial, non-readable) and a single magenta dot. Cinematic wide shot, street context, film grain. Editorial OOH advertising aesthetic. No readable text."

# PRESS KIT / COVER
gen "50-press-kit"           "Overhead flat-lay of a premium press kit: midnight $MIDNIGHT folder, bone-paper $PAPER letter, small USB drive, magenta $MAGENTA promotional card all arranged on dark surface with film grain. Editorial product photography, Stripe Press quality. No readable text on any item."

echo "--- BATCH v2 DONE ---"
ls -lh source-images/ | tail -30
