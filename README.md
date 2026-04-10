# Brand Manual Business — Toolkit & Infrastructure

Sistema completo de agentes, skills y automatización para un negocio de producción de manuales de marca usando Claude Code.

## Qué es esto

La infraestructura operativa para vender brand manuals como servicio. Incluye:
- **4 agentes especializados** para estrategia (SEO, copy, growth, creative)
- **5 skills de ejecución** para tareas concretas (auditoría SEO, landing pages, emails, propuestas, competencia)
- **Data model** compartido para el CRM (Lead → Brief → Proposal → Project)
- **Workflows de orquestación** documentados
- **Auditoría 360°** del sistema completo (10 roles, 38 gaps encontrados y resueltos)

## Stack de producción

```
Python → HTML (una función por página) → Playwright (QA screenshots + PDF render) → PDF (A4 landscape)
```

Validado en 3 manuales entregados:
- **Matraz Innova**: 33 páginas — consultoría farmacéutica
- **Claramel**: 29 páginas — producto AI
- **Anfisbena**: 43 páginas — punto editorial luxury

## Estructura del repo

```
brand-manual-business/
├── README.md                          ← este archivo
├── CLAUDE.md                          ← instrucciones para Claude Code (RACI, data model, workflows)
├── agents/                            ← 4 agentes de estrategia
│   ├── seo-strategist.md              ← SEO, keywords, GEO, content architecture
│   ├── conversion-copywriter.md       ← Copy que convierte, frameworks, brand voice
│   ├── growth-strategist.md           ← GTM, pricing, funnels, unit economics, data model
│   └── creative-director.md           ← Naming, identidad visual, color, tipografía, archetypes
├── skills/                            ← 5 skills de ejecución
│   ├── seo-audit/SKILL.md             ← Auditoría SEO 10 categorías, score 0-100
│   ├── landing-page/SKILL.md          ← Landing Next.js + Tailwind + Supabase + GDPR
│   ├── competitive-intel/SKILL.md     ← Análisis de competidores con scoring
│   ├── email-sequence/SKILL.md        ← 5 tipos de secuencias, GDPR, Resend
│   └── brand-manual-proposal/SKILL.md ← Generador de propuestas PDF
└── audit/                             ← Resultados de auditoría
    └── project_arsenal_audit.md       ← 38 gaps encontrados, priorizados, resueltos
```

## Cómo usar

### Instalación
Copiar agentes y skills a la ubicación de Claude Code:

```bash
# Agentes → ~/.claude/agents/
cp agents/*.md ~/.claude/agents/

# Skills → ~/.claude/skills/
for skill in skills/*/; do
  name=$(basename "$skill")
  mkdir -p ~/.claude/skills/"$name"
  cp "$skill"SKILL.md ~/.claude/skills/"$name"/
done
```

### Registro en CLAUDE.md
Añadir los agentes y skills al CLAUDE.md del proyecto. Ver el archivo `CLAUDE.md` de referencia en este repo para el formato exacto, incluyendo:
- Tabla de agentes (10)
- Tabla de skills por categoría
- RACI (quién decide vs quién ejecuta)
- Data model (Lead, Brief, Proposal, Project)
- Workflows de orquestación (landing page, propuesta, post-venta)

## Agentes — Arquitectura

Cada agente es un **estratega** que decide QUÉ hacer. Las skills son **ejecutoras** que hacen el CÓMO.

| Agente | Rol | Produce |
|--------|-----|---------|
| `seo-strategist` | Decide keywords, content plan, competitive positioning | SEO Brief, keyword strategy |
| `conversion-copywriter` | Decide qué decir y cómo enmarcarlo | Copy Deck, email copy, ad copy |
| `growth-strategist` | Decide pricing, funnels, channels, metrics | GTM strategy, unit economics |
| `creative-director` | Decide nombre, colores, tipografía, personalidad | Brand Tokens, Voice Brief, Creative Brief |

### Configuración común
- `model: opus` — máxima capacidad (requiere Claude Max o API)
- `memory: project` — recuerdan contexto entre sesiones del mismo proyecto
- `maxTurns: 20-25` — previene loops infinitos
- **Handoff protocols**: cada agente define qué formato de output producen y qué consumen

### Principio clave
Los agentes NO duplican lo que las skills ejecutan. Si `conversion-copywriter` define la estrategia de copy para emails, `/email-sequence` tiene los templates y timing. Sin solapamiento.

## Skills — Ejecución

| Skill | Ejecuta | Depende de |
|-------|---------|-----------|
| `/seo-audit` | Checklist técnica SEO, scoring, schema | WebFetch, WebSearch, Playwright |
| `/landing-page` | Código Next.js + Tailwind completo | Supabase, Brand Tokens |
| `/competitive-intel` | Research de competidores con scoring | WebSearch, WebFetch |
| `/email-sequence` | Templates de 5 tipos de secuencias | Resend, Supabase |
| `/brand-manual-proposal` | PDF de propuesta para clientes | Playwright, Supabase |

## Data Model

Entidades compartidas por todos los agentes y skills:

```
Lead → Brief → Proposal → Project
  │                          │
  └── email sequences        └── revision tracking
      (automated triggers)       (2 rounds included)
```

Ver `CLAUDE.md` para el schema completo con campos y transiciones de estado.

## Flujo de un cliente (end-to-end)

```
1. Descubrimiento (Google, LinkedIn, referral)
2. Landing page → comprende qué ofrecemos en 5 segundos
3. Portfolio → ve ejemplos reales (3 manuales)
4. Pricing → entiende cuánto cuesta (3 tiers + IVA)
5. Formulario → deja sus datos (GDPR consent)
6. Auto-email → confirmación inmediata
7. Respuesta personal → < 24h
8. Propuesta PDF → auto-generada, personalizada por sector
9. Follow-ups automáticos → día 3, 7, 14
10. Aceptación → factura 50% → brief questionnaire
11. Producción → updates por email → entrega PDF + Loom
12. Post-venta → testimonial (día +14), referral (+90), upsell (+180)
```

## Auditoría

El sistema fue auditado desde 10 perspectivas distintas:

**Ronda 1** (5 roles): Arquitecto Claude Code, Ingeniero de Automatización, Especialista SEO, CRO Specialist, Operations Manager
**Ronda 2** (5 roles): Prompt Engineer, Freelancer de Branding, Information Architect, Compliance Officer, El Cliente

38 gaps encontrados. 23 resueltos en rewrite. 15 documentados como P2 (resolver cuando el negocio esté operando).

Ver `audit/project_arsenal_audit.md` para detalles.

## Dependencias externas

| Servicio | Estado | Para qué |
|----------|--------|----------|
| Supabase | Configurar | CRM (leads, briefs, proposals, projects) |
| Resend | Pendiente API key | Email automation |
| Vercel | Disponible | Deploy landing page |
| Google Ads | Crear cuenta | Keyword Planner (volúmenes reales) |
| Google Business Profile | Crear | Local SEO |
| OEPM | Consultar | Verificar trademark del nombre de marca |

## Próximos pasos

1. **Naming** del negocio → `creative-director`
2. **Identidad visual** → `creative-director`
3. **Landing page** → `/landing-page` + `seo-strategist` + `conversion-copywriter`
4. **Configurar Supabase** → schema del data model
5. **Configurar Resend** → email automation
6. **Competitive intel** → `/competitive-intel`
7. **Launch** → `/ship`
