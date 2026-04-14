@AGENTS.md

# Tramarca web — contexto extendido

Ver `AGENTS.md` arriba para stack, estructura y convenciones.

## Business context

Web comercial de Tramarca (estudio editorial que solo hace manuales de marca). Genera leads vía formulario contacto → Supabase → CRM.

- **Dominio**: tramarca.es (DNS IONOS → Vercel, en propagación)
- **Branch activa**: `redesign/ui-ux-pro-max`
- **Preview**: auto en cada push (Vercel)
- **Production**: solo desde `main`, nunca push directo

## Pricing canónico (single source of truth)

```ts
// lib/tiers.ts
Esencial:   490€ IVA incl. · 20-25pp · 5 días lab. · 1 revisión
Profesional: 990€ IVA incl. · 30-40pp · 7 días lab. · 2 revisiones
Premium:   1.990€ IVA incl. · 40-50pp · 10 días lab. · 2 revisiones
```

**Coordinación obligatoria:** cualquier cambio en `tiers.ts` debe replicarse en `~/.claude/skills/brand-manual-proposal/SKILL.md`.

## Deploy

```bash
# Preview (auto, cada push)
git push origin redesign/ui-ux-pro-max

# Production (aprobación Fernando)
git checkout main && git merge redesign/ui-ux-pro-max && git push

# Check status
cd web && vercel ls | head -5
```

## QA mandatory

Antes de decir "listo":
1. `npx tsc --noEmit` limpio
2. Playwright check de las páginas críticas (`/`, `/precios`, `/manuales`, `/contacto`)
3. Mobile 375px sin overflow
4. Meta tags + JSON-LD presentes

## Roadmap pendiente

- [ ] DNS tramarca.es propagación completa
- [ ] Google Search Console + sitemap submit
- [ ] Merge `redesign/ui-ux-pro-max` → `main` cuando Fernando apruebe
- [ ] Aplicar re-pricing Premium 1990 → 2490€ (recomendación growth audit Shamusic v4)
- [ ] Documentar gap "Formación equipo 90min" del Premium (o eliminar de la promesa)
