<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Tramarca web — guía de agente

## Stack

- **Next.js 16.2.3** (App Router · Turbopack · RSC by default)
- **React 19** · **TypeScript strict** (sin `any`)
- **Tailwind CSS 4** con CSS custom properties como design tokens
- **Satoshi + IBM Plex Mono** (fuentes principales)
- **Vercel** deploy · branch `redesign/ui-ux-pro-max` activa
- **Supabase** MCP para lead form (`/api/lead`)
- **Gmail / Calendar / Stripe** MCP disponibles

## Estructura

```
web/
├── app/                    # App Router
│   ├── page.tsx            # Home
│   ├── precios/            # Pricing (PricingCards 490/990/1990)
│   ├── manuales/           # Portfolio listado + [slug] detalle
│   ├── anatomia/           # 48 componentes del manual
│   ├── sobre/              # Nosotros
│   ├── contacto/           # Form → Supabase leads
│   ├── api/lead/route.ts   # POST lead → Supabase
│   └── (legal)/            # aviso-legal · privacidad · cookies · condiciones
├── components/             # Nav · Footer · PricingCards · FaqAccordion · Reveal · SpreadFrame · AnatomiaIcon
├── lib/
│   ├── tiers.ts            # Precios canónicos (490/990/1990€) · single source of truth
│   ├── manuales.ts         # Portfolio 5 manuales
│   ├── anatomia.ts         # 12 caps · 48 components
│   ├── schema.ts           # JSON-LD (Service · FAQ · Organization)
│   └── utils.ts            # cn() helper
└── public/
    ├── portfolio/          # covers + spreads de cada manual
    ├── hero/               # imágenes hero home
    └── recursos/           # imágenes nano-banana reutilizables
```

## Design tokens (Tailwind CSS 4)

Definidos en `app/globals.css` bajo `@theme`:
- `--color-negro` `#0C0C0C` · fondo oscuro
- `--color-carbon` `#1C1C1C` · carbon lighter
- `--color-lacre` `#C4553A` · acento único (el "Punto final")
- `--color-papel` `#F4F0EB` · fondo claro editorial
- `--color-piedra` `#7A7672` · texto secundario
- `--color-ceniza` `#B5B1AC` · texto sobre oscuro
- `--color-arena` `#E4E2DC` · neutro claro

## Convenciones de código

- **RSC por defecto** — `"use client"` solo si hay state / effects / event handlers
- **`next/image`** para toda imagen (con `sizes` apropiado)
- **`next/link`** para toda nav interna
- **Metadata export** en cada page (SEO)
- **Structured data JSON-LD** en páginas core via `<JsonLd>`
- **Tailwind sin `@apply`** — clases inline, repetición OK
- **No emojis** en código ni copy salvo que Fernando lo pida explícito
- **`import type {...}`** separado del runtime

## Do / Don't

- ✅ Editar tokens en `globals.css`, no en el componente
- ✅ Componente nuevo en `components/` con props tipadas estrictas
- ✅ Métricas Lead/Proposal via MCP Supabase
- ❌ NO invocar nano-banana para el logo del cliente (usar upscale ImageMagick del PNG original)
- ❌ NO tocar `tiers.ts` sin coordinar con `/brand-manual-proposal/SKILL.md` — deben quedar alineados
- ❌ NO promesas que la infra no puede cumplir (si no hay workflow, no va en el tier)

## Workflow

1. Leer este AGENTS.md + CLAUDE.md raíz (`/Users/fer/Projects/claude/brand-manual-business/CLAUDE.md`)
2. `/autoplan` antes de cambios grandes
3. `/qa` con Playwright antes de "listo"
4. `/ship` para PR (respetar hooks, no `--no-verify`)

Branch activa: **`redesign/ui-ux-pro-max`**. Preview Vercel auto-desplegada en cada push. `main` no se toca sin aprobación Fernando.
