# Auditoría integral del repo Tramarca
**Fecha:** 2026-04-14
**Scope:** brand-manual-business + brand-manuals (5 manuales) + skills + memoria

---

## 1. CLAUDE.md / AGENTS.md / SKILL.md — inventario

| Archivo | Estado | Nota |
|---|---|---|
| `brand-manual-business/CLAUDE.md` | ✅ | Completo, 163 líneas. Documenta agentes, skills, MCPs, data model, workflows. |
| `brand-manual-business/web/CLAUDE.md` | 🗑️ STUB | Solo contiene `@AGENTS.md`. No aporta contexto específico de la web. |
| `brand-manual-business/web/AGENTS.md` | 🗑️ STUB | Solo avisa "este no es el Next.js que conoces". No describe componentes ni patrones. |
| `~/CLAUDE.md` | ✅ | Global user settings, actualizado. |
| `~/.claude/skills/brand-manual-build/SKILL.md` | ✅ | 176 líneas, 4 reglas Shamusic aplicadas (WCAG, footer, logo-no-AI, renumber). |
| `~/.claude/skills/brand-manual-proposal/SKILL.md` | ⚠️ | Tiers mismatched: dice Profesional 30-35pp y precios 400-1200-2400€. Web real: 30-40pp / 490-990-1990€. |

## 2. Coherencia Tiers — web vs skill/proposal

| Tier | Web `tiers.ts` | Proposal SKILL | ❌ Mismatch |
|---|---|---|---|
| Esencial | 490€ · 20-25pp · 5 días | 400-600€ · 20-25pp · 7 días | Precio + plazo |
| Profesional | 990€ · 30-40pp · 7 días | 800-1200€ · **30-35pp** · 10 días | Precio + páginas + plazo |
| Premium | 1.990€ · 40-50pp · 10 días | 1500-2400€ · 40-50pp · 15 días | Precio + plazo |

**Riesgo:** si se invoca `/brand-manual-proposal` la propuesta sale con datos obsoletos → cliente confundido / promesas incumplibles.

## 3. Growth-strategist audit Premium

Shamusic v4 reveló:
- PDF real entrega 54pp vs promesa 40-50pp → ✅ supera
- Incluye 15 aplicaciones vs promesa 4 → ✅ supera
- **Falta Figma editable + assets sueltos** — prometidos, no entregados → ❌ gap packaging
- **Formación equipo 90min** — prometida en Premium, sin workflow → ❌ gap service
- **Recomendación**: subir Premium 1.990 → **2.490€** (paquete cerrado) · target 2.990€ Q3.

## 4. Git — manuales/shamusic/ sucio

59 archivos untracked en `manuales/shamusic/`:
- 8 reviews/audits .md (keepers, documentan iteraciones)
- ~50 source-images nano-banana (keepers, activos de marca)
- Scripts temporales (`batch-generate*.sh`, `gen-image.sh`) — reutilizables
- `audit-*.md` duplicados de varias fases

## 5. Skills y agentes — gaps detectados

### `/brand-manual-build` SKILL.md
Tiene aplicadas las reglas Shamusic v1-v4:
- ✅ Contraste WCAG AA
- ✅ Footer safe-zone global
- ✅ Logo cliente no AI
- ✅ Renumber dinámico
- ✅ Pipeline auditoría multi-perfil (4 agentes)

### `/brand-manual-proposal` SKILL.md
❌ Tiers desactualizados
❌ Sin SQL Supabase para lead→proposal transition
⚠️ Sin integración con email-sequence post-envío

### Agente `creative-director`
❌ No documenta "no regenerar logos con AI" (lección Shamusic)
⚠️ No valida Positioning Axis = bloqueante explícito para `/brand-manual-build`

### Agente `ui-ux-designer`
✅ OK para audits

### Memorias
❌ Falta memoria "pipeline multi-perfil auditoría Premium" (lección v4)
❌ Falta memoria "re-pricing Premium 1990→2490€"

## 6. Web Tramarca (`/web`)

- ✅ Build verde, TypeScript strict, sin errores
- ✅ Portfolio 5 manuales (tramarca + anfisbena + claramel + matraz + shamusic)
- ✅ `/precios` coherente con `tiers.ts`
- ⚠️ Precios Premium obsoletos si se aplica el re-pricing recomendado
- ❌ README mínimo, sin guía de deploy Vercel

## 7. Repo housekeeping

Archivos obsoletos detectados:
- `brand-manuals/05-shamusic/src/build_v2.py` — el v2 es el actual. El `build.py` original de Tramarca era base para clonar.
- `manuales/shamusic/source-images/*.png` — 50 imágenes grandes, no comprimidas, algunas duplicadas.
- `web/public/portfolio/shamusic/` — 6 spreads PNG de v3 (antes del rebuild). Deberían ser v4.1 final.

---

## TOP 10 ACTIONS — priorizadas

### P0 BLOCKERS (aceptar clientes)
1. **Alinear tiers** en `/brand-manual-proposal/SKILL.md` con `web/lib/tiers.ts` (30-40pp prof, precios 490/990/1990)
2. **Añadir regla "no AI logo"** al agente `creative-director` (MD del agente)
3. **Expandir `web/AGENTS.md`** con patrones Next.js 16, App Router, páginas clave, stack
4. **Expandir `web/CLAUDE.md`** con deploy Vercel + estructura web
5. **Documentar gap Figma+assets** del Premium en tier description (o subir precio)

### P1 MEDIUM (antes del relaunch)
6. Aplicar re-pricing Premium 1990 → 2490€ en `tiers.ts` + tabla comparativa
7. Crear memoria `project_tramarca_audit_pipeline.md` con pipeline multi-perfil
8. Limpiar `manuales/shamusic/` — commit audits como doc, mover source-images a `/assets/raw/`
9. Actualizar spreads portfolio web: regenerar `web/public/portfolio/shamusic/spread-*.jpg` desde v4.1 QA
10. Escribir `web/README.md` con deploy + SEO + entornos

### P2 LOW (nice to have)
- Migrar `brand-manuals/05-shamusic/src/` de HTML-in-Python a Jinja2 + YAML data para el 6º cliente
- CI job de re-pricing automático cada 60 días/10 clientes
- Ampliar `/brand-manual-proposal` con integración Supabase (lead→proposal workflow)
