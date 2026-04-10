---
name: email-sequence
description: |
  Design and write complete email sequences: welcome, nurturing, post-proposal, post-purchase,
  upsell, referral. Each email uses copywriting frameworks with A/B subject lines.
  Triggers on: "email sequence", "email marketing", "welcome email", "nurturing",
  "drip campaign", "follow-up email", "secuencia de emails", "email de seguimiento".
---

# Email Sequence Builder

Execution skill for email sequences. Copy strategy (frameworks, psychology, brand voice) comes from `conversion-copywriter` agent. This skill handles templates, timing, triggers, and technical implementation.

## Dependencies
- **Resend MCP** (when configured): send emails directly
- **Supabase**: lead stage management (triggers sequences based on `Lead.stage` changes)
- Copy direction from `conversion-copywriter` agent (or write inline using frameworks below)

## GDPR / LOPD Compliance (Non-Negotiable for EU)

Every email system MUST implement:
1. **Double opt-in**: confirmation email before adding to marketing list
2. **Explicit consent**: checkbox on forms — NOT pre-checked
3. **Unsubscribe**: one-click unsubscribe link in every email, working within 24h
4. **Data rights**: link to privacy policy in footer
5. **Sender identification**: business name + physical address in footer
6. **Record of consent**: store when/how consent was given in Supabase

```
Footer template for every email:
─────────────────────────
[Business Name] · [Address, City, Spain]
Has recibido este email porque [reason].
[Cancelar suscripción] · [Política de privacidad]
```

## Sequence Types

### Type 1: Lead Magnet Delivery + Welcome (7 emails)
**Trigger**: `Lead.stage` = new, `Lead.source` = web_form (with lead magnet)

| # | Day | Goal | Framework | Subject Line A / B |
|---|-----|------|-----------|-------------------|
| 1 | 0 | Deliver resource | Direct | "Tu guía de branding está lista" / "Aquí tienes: [nombre del recurso]" |
| 2 | 1 | Build connection | BAB | "Por qué dejé de hacer logos sueltos" / "La diferencia entre un logo y una marca" |
| 3 | 3 | Deliver value | Educational | "3 errores de marca que hacen perder clientes" / "Tu marca probablemente comete el error #2" |
| 4 | 5 | Show proof | Case study | "Cómo [Cliente] pasó de caos a consistencia" / "De 47 Google Docs a un solo manual" |
| 5 | 7 | Introduce offer | PAS | "¿Cuánto tiempo pierdes sin un manual de marca?" / "El coste oculto de no tener guidelines" |
| 6 | 9 | Sell | AIDA | "Tu manual de marca, listo en 5 días" / "Oferta especial para suscriptores" |
| 7 | 12 | Last push + value | Loss aversion | "Último día: auditoría de marca gratuita" / "Antes de irme, un regalo" |

**Email body structure** (each email):
```markdown
## Email [N]: [Name]
- **Subject A**: [option]
- **Subject B**: [option]
- **Preview text**: [first 40 chars of body — make them count]
- **Framework**: [PAS/BAB/AIDA/Educational]
- **Body**: [full copy, 150-300 words, 1-3 sentence paragraphs]
- **CTA**: [one button text + destination URL]
- **Sending**: from "[Name] <name@domain.com>" (personal, not team@)
```

### Type 2: Post-Proposal Follow-Up (4 emails)
**Trigger**: `Proposal.status` = sent

| # | Day | Goal | Subject |
|---|-----|------|---------|
| 1 | 0 | Deliver proposal | "Tu propuesta para [Brand] — #PROP-YYYY-NNN" |
| 2 | 3 | Add value | "Un ejemplo relevante para [sector del cliente]" |
| 3 | 7 | Check in | "¿Alguna duda sobre la propuesta?" |
| 4 | 14 | Final follow-up | "Propuesta vigente hasta [date] — ¿seguimos adelante?" |

### Type 3: Post-Purchase / Onboarding (5 emails)
**Trigger**: `Lead.stage` = won (payment received)

| # | Day | Goal | Subject |
|---|-----|------|---------|
| 1 | 0 | Welcome + next steps | "¡Arrancamos! Tu manual de marca — próximos pasos" |
| 2 | 1 | Brief questionnaire | "Una pregunta rápida sobre tu marca" (link to brief form) |
| 3 | 3 | Progress update | "Tu moodboard está listo — preview" |
| 4 | 7 | Mid-production update | "Tu manual está en producción" |
| 5 | Delivery day | Delivery + walkthrough | "Tu manual de marca está listo 🎉" (PDF + Loom link) |

### Type 4: Post-Delivery Nurture (3 emails)
**Trigger**: `Project.status` = delivered

| # | Day after delivery | Goal | Subject |
|---|-------------------|------|---------|
| 1 | +14 | Testimonial request | "¿Cómo va tu marca? (una pregunta rápida)" |
| 2 | +90 | Referral request | "¿Conoces a alguien que necesite un manual?" |
| 3 | +180 | Upsell | "Tu marca ha crecido — ¿actualizamos el manual?" |

### Type 5: Monthly Newsletter (Ongoing)
**Audience**: All leads not in active sequence, opted-in

**Format**: 80% value / 20% pitch

Value emails (3 of 4):
- Brand tip of the month
- Industry trend + your perspective
- Mini case study or before/after

Pitch email (1 of 4):
- New work, updated pricing, limited availability

**Subject line formulas**:
- "[Número] [cosa] que [resultado]" — "3 errores de marca que espantan clientes"
- "Cómo [persona/empresa] [logró cosa]" — "Cómo Anfisbena unificó su marca en 43 páginas"
- "La verdad sobre [tema]"
- Question: "¿Tu marca pasa el test de los 5 segundos?"

## Segmentation Logic

| Lead Attribute | Sequence |
|---------------|----------|
| source = web_form + downloaded lead magnet | Type 1 (Welcome) |
| source = linkedin + qualified | Skip to Type 2 (Proposal) when ready |
| source = referral | Abbreviated welcome (emails 1, 4, 5 only) |
| Proposal.status = sent | Type 2 (Post-Proposal) |
| Lead.stage = won | Type 3 (Onboarding) |
| Project.status = delivered | Type 4 (Post-Delivery) |
| Not in any active sequence | Type 5 (Newsletter) |

**Rule**: A lead is in only ONE sequence at a time. When they advance stages, exit current sequence, enter next.

## Email Copy Rules

- **Subject lines**: 40-50 chars, A/B always, personalization sparingly
- **Body**: 150-300 words, 1-3 sentence paragraphs, one topic, one CTA
- **Mobile-first**: most people read on phones
- **Language**: Spanish (tú) for creative/startup sector, Spanish (usted) for corporate
- **From**: personal name, not "equipo" or "team"
- **Reply-to**: same as From — replies must reach a human

## Technical Implementation

### Resend (Recommended)
```typescript
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

// Send single email
await resend.emails.send({
  from: 'Fernando <fer@[domain].com>',
  to: lead.email,
  subject: subjectLine,
  html: renderEmailTemplate(emailData),
  headers: {
    'List-Unsubscribe': `<https://[domain]/unsubscribe?email=${lead.email}>`,
  },
});

// Batch send (newsletter)
await resend.batch.send(
  subscribers.map(sub => ({
    from: 'Fernando <fer@[domain].com>',
    to: sub.email,
    subject: subjectLine,
    html: renderEmailTemplate(emailData),
  }))
);
```

### Sequence Trigger (Supabase Edge Function or Cron)
```typescript
// Check for leads needing next email in sequence
// Run daily via cron or on Lead.stage change via Supabase webhook
async function processSequences() {
  const leads = await supabase
    .from('leads')
    .select('*, proposals(*), projects(*)')
    .in('stage', ['new', 'proposal_sent', 'won']);
  
  for (const lead of leads.data) {
    const nextEmail = calculateNextEmail(lead);
    if (nextEmail) {
      await sendEmail(lead, nextEmail);
      await logEmailSent(lead.id, nextEmail.sequence, nextEmail.number);
    }
  }
}
```

## Metrics

| Metric | Target | What It Tells You |
|--------|--------|------------------|
| Open rate | > 35% | Subject line quality |
| Click rate | > 3% | Body + CTA quality |
| Reply rate | > 1% | Trust + engagement |
| Unsubscribe | < 0.5% | Content relevance |
| Sequence completion | > 60% | Sequence isn't too long |
| Conversion (sequence → client) | > 5% | Sequence effectiveness |
