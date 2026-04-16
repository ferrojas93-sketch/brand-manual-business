#!/usr/bin/env bash
# Shamusic — Nano Banana GRATIS (Gemini 2.5 Flash Image) generator via curl
# Usage: ./gen-image.sh "prompt" output-name.png
set -euo pipefail

PROMPT="${1:?prompt required}"
OUT="${2:?output path required}"
API_KEY=$(grep '^GEMINI_API_KEY=' ~/.nano-banana/.env | cut -d= -f2)

if [ -z "$API_KEY" ]; then
  echo "ERROR: GEMINI_API_KEY not found in ~/.nano-banana/.env" >&2
  exit 1
fi

MAX_RETRIES=4
RETRY=0
while [ $RETRY -lt $MAX_RETRIES ]; do
  RESPONSE=$(curl -s --max-time 90 -X POST \
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent" \
    -H "x-goog-api-key: $API_KEY" \
    -H "Content-Type: application/json" \
    -d "$(jq -n --arg p "$PROMPT" '{
      contents: [{parts: [{text: $p}]}],
      generationConfig: {responseModalities: ["TEXT","IMAGE"]}
    }')")

  if echo "$RESPONSE" | jq -e '.error' >/dev/null 2>&1; then
    CODE=$(echo "$RESPONSE" | jq -r '.error.code // 0')
    if [ "$CODE" = "503" ] || [ "$CODE" = "429" ] || [ "$CODE" = "500" ]; then
      RETRY=$((RETRY+1))
      SLEEP=$((RETRY * 8))
      echo "  retry $RETRY/$MAX_RETRIES after ${SLEEP}s (${CODE})" >&2
      sleep $SLEEP
      continue
    else
      echo "API ERROR (non-retriable):" >&2
      echo "$RESPONSE" | jq '.error' >&2
      exit 1
    fi
  fi
  break
done

if [ $RETRY -ge $MAX_RETRIES ]; then
  echo "FAIL after $MAX_RETRIES retries" >&2
  exit 1
fi

# Extract image
IMG_B64=$(echo "$RESPONSE" | jq -r '.candidates[0].content.parts[] | select(.inlineData) | .inlineData.data')

if [ -z "$IMG_B64" ] || [ "$IMG_B64" = "null" ]; then
  echo "ERROR: no image in response" >&2
  echo "$RESPONSE" | jq '.' | head -50 >&2
  exit 1
fi

echo "$IMG_B64" | base64 -d > "$OUT"
echo "✓ $OUT ($(du -h "$OUT" | awk '{print $1}'))"
