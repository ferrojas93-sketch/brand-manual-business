# Tramarca · Web

Estudio editorial español que solo hace manuales de marca. Esta es la web comercial: portfolio + pricing + contacto.

**Prod**: [tramarca.es](https://tramarca.es) (DNS en propagación)
**Preview**: auto-Vercel en cada push a `redesign/ui-ux-pro-max`

---

## Stack

- **Next.js 16.2.3** — App Router, Turbopack, React Server Components por defecto
- **React 19** · **TypeScript strict** (sin `any`)
- **Tailwind CSS 4** con CSS custom properties en `@theme`
- **Supabase** (MCP) — lead form → CRM
- **Vercel** — deploy continuo

---

## Desarrollo local

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # build de producción
npx tsc --noEmit     # typecheck
```

**Requisitos**: Node 20+, npm 10+.

---

## Estructura

```
web/
├── app/                    # Páginas (App Router)
├── components/             # Componentes compartidos
├── lib/
│   ├── tiers.ts            # ⚠️ SSoT de precios · alinear con SKILL proposal
│   ├── manuales.ts         # Portfolio (5 manuales)
│   ├── anatomia.ts         # 12 caps · 48 components
│   └── schema.ts           # JSON-LD para SEO
└── public/                 # Imágenes + portfolio PDFs descargables
```

Ver `AGENTS.md` y `CLAUDE.md` para convenciones detalladas.

---

## Deploy

### Preview (automático)
```bash
git push origin redesign/ui-ux-pro-max
# → Vercel abre preview en web-XXX-ferrojas93...vercel.app
```

### Production
```bash
# Solo con aprobación Fernando
git checkout main
git merge redesign/ui-ux-pro-max
git push origin main
# → Promote a producción desde Vercel dashboard
```

### CLI útil
```bash
vercel ls                   # últimos deploys
vercel inspect <url>        # logs + status
vercel env pull             # sync env vars a .env.local
```

---

## SEO checklist

- [x] Metadata export en cada `page.tsx` (title ≤60ch, description ≤160ch)
- [x] `alternates.canonical` absoluto
- [x] JSON-LD Service + FAQPage + Organization (`lib/schema.ts`)
- [x] `sitemap.ts` + `robots.ts`
- [x] Open Graph + Twitter cards en layout
- [ ] Google Search Console registrado + sitemap submit (pendiente post DNS)
- [ ] Bing Webmaster Tools
- [x] Alt text en todas las imágenes `<Image>`
- [x] Lighthouse ≥ 90 en performance (mobile + desktop)

---

## Env vars

```bash
# .env.local (no commit)
NEXT_PUBLIC_SITE_URL=https://tramarca.es
SUPABASE_URL=...
SUPABASE_SERVICE_ROLE_KEY=...        # solo servidor, API route /api/lead
RESEND_API_KEY=...                   # email transaccional
```

Pull desde Vercel: `vercel env pull .env.local`.

---

## Testing

```bash
# Typecheck (obligatorio antes de commit)
npx tsc --noEmit

# Smoke test con Playwright MCP
# → ver CLAUDE.md sección "QA mandatory"
```

---

## Roadmap pendiente

- [ ] DNS tramarca.es propagación completa (Google 8.8.8.8 aún IONOS viejo)
- [ ] Google Search Console + sitemap submit
- [ ] Merge `redesign/ui-ux-pro-max` → `main`
- [ ] Aplicar re-pricing Premium 1990→2490€ (recomendación growth audit Shamusic v4)
- [ ] Documentar gap "Formación equipo 90min" del Premium (o eliminar)
- [ ] Google Analytics 4 + Search Console integración

---

## Contacto

`hola@tramarca.es` · Madrid
