# Shamusic · Manual de marca Premium

Quinto cliente del portfolio Tramarca. PDF final: `~/Projects/claude/brand-manuals/05-shamusic/dist/manual.pdf` (54pp · 80MB).

## Estructura de este directorio

```
manuales/shamusic/
├── research/       # Playwright scraping + voice-tone + brand-brief + competitive-intel
├── audits/         # 7 reviews multi-perfil (CD · UX · Copy · Growth · Pipeline · Footer sweep · Visual)
├── assets/
│   ├── logo/       # LOGO-OG + LOGO-OG-white + SYMBOL-only (upscale ImageMagick del original)
│   └── raw/        # 50+ imágenes nano-banana FREE (Gemini 2.5 Flash · $0 total)
└── scripts/        # batch-generate.sh + gen-image.sh (reusables para próximos manuales)
```

## Proceso (4 iteraciones · 7.4 → 8.5)

1. **Research** (playwright shamusic.es + IG @shamusica + competitive-intel)
2. **Creative direction** (axis BOLD · archetype Rebel+Creator · tokens midnight+magenta)
3. **Voice & tone** (22 términos sí · 15 no · mantra "Tu música. Tu copyright. Tu dinero.")
4. **Imagery** (50 piezas nano-banana 2.5 Flash FREE + 2 logos upscale Lanczos)
5. **Build** (Python + HTML + Playwright PDF A4 landscape · 54pp)
6. **Audit multi-perfil** (5 agentes paralelos, iterar hasta 8.5)
7. **Entrega** (PDF + spreads portfolio web)

## Lecciones destiladas a la skill `/brand-manual-build`

Ver `~/.claude/skills/brand-manual-build/SKILL.md` — 8 reglas codificadas desde esta iteración:
1. Contraste WCAG AA obligatorio
2. Footer safe-zone global
3. Logo cliente nunca AI (upscale ImageMagick)
4. Renumber dinámico regex
5. `TOTAL = len(PAGES)`
6. Regex 3 dígitos (>100pp)
7. Linter coherencia nombres (caso Emma→Mateo)
8. Pipeline auditoría multi-perfil antes de entregar

## Portfolio web

Case study vivo en `web/app/manuales/shamusic/` con cover + 6 spreads + PDF descargable (`public/portfolio/shamusic/`).
