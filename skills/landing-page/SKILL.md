---
name: landing-page
description: |
  Build a complete, conversion-optimized landing page. Generates Next.js + Tailwind CSS code
  with SEO meta tags, schema markup, responsive design, and analytics events.
  Triggers on: "landing page", "build landing", "create landing", "website page", 
  "haz la web", "build the site", "haz la landing".
---

# Landing Page Builder

Build complete landing pages with Next.js App Router + Tailwind CSS. Ships with SEO, schema, responsive design, analytics, and form integration.

## Dependencies
- **Next.js 15+ / Tailwind CSS 4 / TypeScript** (default stack — adapt to project)
- **Supabase** (form submissions → leads table)
- **Playwright MCP** (visual QA — optional but recommended)
- **Brand tokens from creative-director** (colors, fonts — use defaults if not defined yet)

## Pre-Build: What You Need

Before writing code, ensure you have:
1. **Copy deck** from `conversion-copywriter` agent (or write inline if no agent invoked)
2. **SEO requirements** from `seo-strategist` agent (or use sensible defaults)
3. **Brand tokens** from `creative-director` agent (or use project defaults)
4. **Primary CTA**: the ONE action we want visitors to take
5. **Social proof**: testimonials, client names, numbers

If these don't exist yet, ask the user or use reasonable defaults — don't block on missing inputs.

## Brand Token Integration

### If creative-director has defined tokens:
```css
/* globals.css or tailwind config */
:root {
  --color-primary: [from creative brief];
  --color-secondary: [from creative brief];
  --color-accent: [from creative brief];
  --color-accent-light: [from creative brief]; /* for dark backgrounds */
  --color-neutral-100: [lightest bg];
  --color-neutral-800: [text];
  --color-neutral-900: [darkest bg];
}
```

### If no brand tokens yet:
Use a professional neutral palette as placeholder:
```css
:root {
  --color-primary: #1a1a2e;    /* deep navy */
  --color-secondary: #16213e;
  --color-accent: #e94560;     /* coral accent */
  --color-accent-light: #ff6b81;
  --color-neutral-100: #fafafa;
  --color-neutral-800: #2d2d2d;
  --color-neutral-900: #121212;
}
```

## Page Architecture (10 Sections)

### 1. Navigation (sticky)
```
Logo [left] — Nav links [center, 3-5 max] — CTA button [right]
Mobile: hamburger + CTA always visible
```

### 2. Hero (above the fold)
```tsx
<section className="min-h-[80vh] flex items-center">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 px-6">
    <div>
      <p className="text-sm tracking-widest uppercase text-[var(--color-accent)]">
        {preHeadline}
      </p>
      <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">
        {headline} {/* Contains primary keyword */}
      </h1>
      <p className="text-xl text-[var(--color-neutral-800)]/70 mt-4">
        {subtitle} {/* For whom + why different */}
      </p>
      <div className="flex gap-4 mt-8">
        <Button size="lg">{primaryCTA}</Button>
        <Button variant="ghost" size="lg">{secondaryCTA}</Button>
      </div>
      <p className="text-sm text-[var(--color-neutral-800)]/50 mt-4">
        {socialProofOneLiner}
      </p>
    </div>
    <div>{/* Product mockup or hero image */}</div>
  </div>
</section>
```

### 3. Problem Section
3 pain points in cards. Use customer language.

### 4. Solution Section
How the product solves each pain point. Show don't tell: mockups, screenshots.

### 5. Process ("How It Works")
Exactly 3 steps: number + verb + outcome.

### 6. Portfolio / Social Proof
Case study cards or testimonial grid with attribution (level 3+ social proof).

### 7. Pricing
2-3 tiers. Highlight recommended. Anchor against expensive alternative.
```tsx
{/* Always show IVA status for Spanish market */}
<p className="text-sm">Precios + IVA. Pago: 50% inicio, 50% entrega.</p>
```

### 8. FAQ (Accordion)
5-7 objection-handling questions. Add FAQPage schema where appropriate.

### 9. Final CTA
Dark background, high contrast. Restate primary benefit. Same CTA as hero.

### 10. Footer
Logo, nav links, contact, social, legal (privacy, terms, cookies), copyright.

## Form Integration (Supabase)

```tsx
// components/ContactForm.tsx
'use client';

import { useState } from 'react';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const data = new FormData(e.currentTarget);

    const res = await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: data.get('name'),
        email: data.get('email'),
        company: data.get('company'),
        message: data.get('message'),
      }),
    });

    setStatus(res.ok ? 'sent' : 'error');
    trackEvent('form_submit', { form: 'contact' });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" required placeholder="Tu nombre" />
      <input name="email" type="email" required placeholder="Email" />
      <input name="company" placeholder="Empresa (opcional)" />
      <textarea name="message" placeholder="Cuéntanos sobre tu marca" />
      <label className="flex items-start gap-2 text-sm">
        <input type="checkbox" name="consent" required className="mt-1" />
        <span>
          Acepto la <a href="/politica-privacidad" className="underline">política de privacidad</a>.
          Mis datos serán tratados para responder a mi consulta.
        </span>
      </label>
      <button type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Enviando...' : 'Solicitar presupuesto'}
      </button>
      {status === 'sent' && <p>Recibido. Te respondemos en 24h.</p>}
    </form>
  );
}
```

```tsx
// app/api/lead/route.ts
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  const body = await req.json();

  const { error } = await supabase.from('leads').insert({
    name: body.name,
    email: body.email,
    company: body.company,
    notes: body.message,
    source: 'web_form',
    stage: 'new',
    consent_given_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
  });

  if (error) return Response.json({ error: error.message }, { status: 500 });
  
  // TODO: trigger welcome email via Resend when MCP is configured
  
  return Response.json({ ok: true });
}
```

## SEO Implementation

```tsx
// app/page.tsx
export const metadata: Metadata = {
  title: '[Primary Keyword] — [Brand Name]',        // 50-60 chars
  description: '[Value prop with keyword and CTA]',   // 150-160 chars
  openGraph: {
    title: '[Title variant]',
    description: '[Description variant]',
    images: ['/og-image.png'],                        // 1200x630px
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://[domain]/[path]' },
};
```

Schema in layout or page:
```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization', // or Service — from seo-audit output
      // ... fields from seo-audit generated schema
    }),
  }}
/>
```

## Analytics Events

```tsx
// lib/analytics.ts
export function trackEvent(name: string, params?: Record<string, string>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', name, params);
  }
}

// Events to implement from launch:
// trackEvent('cta_click', { cta_name: 'hero_primary' });
// trackEvent('scroll_depth', { percent: '50' });
// trackEvent('form_start');
// trackEvent('form_submit', { form: 'contact' });
// trackEvent('pricing_view', { tier: 'profesional' });
// trackEvent('faq_expand', { question: 'pricing' });
```

## Dark Mode

```tsx
// Support system preference
<html className="dark:bg-[var(--color-neutral-900)]">

// Tailwind: use dark: prefix
<section className="bg-[var(--color-neutral-100)] dark:bg-[var(--color-neutral-900)]">
  <h2 className="text-[var(--color-neutral-800)] dark:text-[var(--color-neutral-100)]">
```

Ensure accent color works on both light and dark. Use `--color-accent-light` on dark backgrounds.

## Responsive Rules
- Mobile-first: design for 375px, enhance for larger
- Touch targets: minimum `h-11 w-11` (44px)
- Font sizes: minimum `text-base` (16px) body on mobile
- Images: `next/image` with `sizes` attribute
- CTA always visible: sticky nav CTA or floating button on mobile

## Performance Rules
- React Server Components by default (no `'use client'` unless needed)
- Dynamic import heavy components
- `next/image` for all images
- Preload critical fonts
- Target: Lighthouse 90+

## Legal Pages (Spanish Market)
Every site needs:
- `/politica-privacidad` — GDPR/LOPD-GDD compliant privacy policy
- `/aviso-legal` — legal notice with business identity (NIF, address, contact)
- `/cookies` — cookie policy with consent banner
- Cookie consent banner on first visit (required by EU law)

## Quality Gates
- [ ] Mobile responsive: no horizontal scroll at 375px
- [ ] All CTAs work and track events
- [ ] Form submits to Supabase successfully
- [ ] Schema validates (Rich Results Test)
- [ ] OG image renders (1200x630px)
- [ ] Legal pages exist (privacy, legal notice, cookies)
- [ ] Cookie consent banner works
- [ ] Copy reviewed for brand voice consistency
- [ ] WCAG contrast: 4.5:1 on all text
