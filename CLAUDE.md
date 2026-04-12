# CLAUDE.md — Instrucciones globales

## Agentes disponibles

10 agentes especializados. Invocarlos cuando el contexto lo justifique:

| Agente | Cuándo invocarlo |
|---|---|
| `ui-ux-designer` | Revisar UI/UX, evaluar diseños, auditar accesibilidad, dar feedback sobre componentes visuales |
| `security-auditor` | Auditorías de seguridad, compliance (SOC 2, PCI DSS, GDPR), revisión de auth/authz, análisis de vulnerabilidades |
| `fullstack-developer` | Features completas que tocan DB + API + frontend como una unidad cohesionada |
| `test-engineer` | Estrategia de tests, escribir tests, CI/CD testing, diagnosticar tests flaky |
| `devops-engineer` | Docker, Kubernetes, Terraform, pipelines CI/CD, infraestructura cloud, deployment strategies |
| `data-analyst` | Análisis de datos de negocio, KPIs, dashboards, SQL, BI, cohort/funnel/retention analysis |
| `seo-strategist` | SEO técnico, keyword research, schema markup, GEO/AEO, auditorías de página, competitive SERP analysis, content architecture |
| `conversion-copywriter` | Landing pages, sales copy, CTAs, headlines A/B, email sequences, ad copy, propuestas de valor, pricing copy |
| `growth-strategist` | Go-to-market, pricing, funnels, CRO, unit economics, analytics setup, A/B testing, competitive positioning, revenue strategy |
| `creative-director` | Brand naming, identidad visual, paletas de color, tipografía, archetypes, moodboards, creative briefs, dirección de marca |

## Skills disponibles

Skills invocables con `/nombre`:

### Diseño y UI
| Skill | Cuándo usarla |
|---|---|
| `/frontend-design` | UI creativa, bold, experimental — portfolios, proyectos personales, trabajo donde importa ser memorable |
| `/ui-ux-pro-max` | Diseño profesional/cliente con stack específico — SaaS, e-commerce, dashboards, industria concreta |
| `/canvas-design` | Arte visual puro — posters, PDFs artísticos, piezas visuales (no interfaces web) |
| `/emil-design-eng` | Pulido de UI — animaciones, microinteracciones, shadcn/ui, detalles invisibles que hacen que algo se sienta bien |

### Ciclo de desarrollo (G Stack — Garry Tan / YC)
| Skill | Cuándo usarla |
|---|---|
| `/autoplan` | Al empezar cualquier proyecto o feature — analiza y genera el plan completo |
| `/office-hours` | Cuando la idea no está clara — Claude hace preguntas para afilarla |
| `/review` | Code review automático post-implementación |
| `/qa` | Antes de publicar — prueba con navegador real, arregla errores en el momento |
| `/qa-only` | Igual que /qa pero solo reporta sin tocar el código |
| `/ship` | Publicar — PR + tests + deploy en un comando |
| `/canary` | Post-deploy — monitoriza que nada rompa |
| `/investigate` | Cuando algo falla y no sabes por qué — modo detective |
| `/cso` | Auditoría de seguridad completa |
| `/retro` | Resumen semanal de cambios y aprendizajes |
| `/guard` | Activar modo protección antes de operaciones delicadas |

### Marketing y Negocio
| Skill | Cuándo usarla |
|---|---|
| `/seo-audit` | Auditoría SEO técnica de 9 categorías con score 0-100, schema copy-paste, GEO/AEO |
| `/landing-page` | Construir landing pages Next.js + Tailwind optimizadas para conversión + SEO |
| `/competitive-intel` | Análisis de competidores: pricing, positioning, SEO, gaps de mercado |
| `/email-sequence` | Secuencias de email marketing: welcome, nurturing, post-propuesta, newsletter |
| `/brand-manual-proposal` | Generar propuestas PDF profesionales para clientes de brand manuals |
| `/brand-manual-build` | Construir el manual de marca completo (30-50pp) — Python → HTML → PDF A4 landscape con paleta CSS por Positioning Axis |
| `/content-creator` | Contenido SEO-optimizado, brand voice analysis, social media content |

### Utilidades
| Skill | Cuándo usarla |
|---|---|
| `/mcp-builder` | Construir servidores MCP para conectar Claude con APIs o servicios externos |
| `/skill-creator` | Crear, iterar y evaluar nuevas skills con sistema de evals y benchmarks |
| `/crafting-effective-readmes` | Crear o mejorar READMEs — OSS, personal, interno, carpetas de config |
| `/file-organizer` | Organizar directorios, limpiar Downloads, encontrar duplicados, restructurar proyectos |
| `/react-best-practices` | Optimizar rendimiento en React/Next.js — waterfalls, bundle size, RSC, re-renders |

### Flujo recomendado para cualquier feature
`/autoplan` → construir → `/review` → `/qa` → `/ship` → `/canary`

### Flujo recomendado para negocio/marketing
`/competitive-intel` → `/office-hours` (positioning) → `/landing-page` → `/seo-audit` → `/email-sequence` → `/ship`

### Flujo adaptativo para construir una web / landing page
**Principio**: cada cliente es distinto (pharma, AI, editorial, luxury, SaaS…). El flujo se adapta según el **Positioning Axis** que decide el `creative-director` en el paso 1.

#### Estrategia (común a todos)
1. `creative-director` → produce: Brand Tokens (colores, tipografía, voz) **+ Positioning Axis**:
   - `sistemático` — preciso, sobrio, corporate/tech/pharma (Linear, Vercel, Pentagram)
   - `bold` — distintivo, editorial, lifestyle/luxury/creative (Stripe Press, Aesop)
   - `híbrido` — sistema sobrio con momentos bold (hero, signature sections)
2. `seo-strategist` → SEO Brief (keywords, intent, meta tags)
3. `conversion-copywriter` → Copy Deck (consume Brand Voice + SEO Brief)
4. `plan-design-review` → valida el plan con ojo de diseñador **antes de construir**

#### Diseño (rama según Positioning Axis)
5a. Si `sistemático` → `ui-ux-pro-max` (decisiones sistemáticas: spacing, hierarchy, density, stack Next.js+Tailwind/shadcn)
5b. Si `bold` → `frontend-design` (UI distintiva, memorable, experimental)
5c. Si `híbrido` → `ui-ux-pro-max` para sistema + `frontend-design` puntualmente en hero/signature sections

#### Construcción y pulido (común)
6. `/landing-page` → construye Next.js + Tailwind (consume Brand Tokens + SEO Brief + Copy Deck + output del paso 5)
7. `emil-design-eng` → pulido universal: microinteracciones, transiciones, detalles que elevan percepción premium
8. `ui-ux-designer` + `playwright` → crítica research-backed de la interfaz real (accessibility, hierarchy, contraste)
9. `design-review` → caza inconsistencias visuales, spacing, jerarquía (distinto de `/qa`, que es funcional)
10. `/visual-qa` → **mandatorio** (por memoria `feedback_visual_qa_always`)
11. `/seo-audit` → SEO técnico + schema copy-paste
12. `/qa` → funcional en navegador real
13. `/ship` → `/canary`

**Regla de oro**: el paso 1 determina 5a/5b/5c. Si `creative-director` no entrega Positioning Axis explícito, es un bloqueo — no continuar hasta tenerlo. Adaptar > hardcodear.

### Flujo para nueva propuesta de cliente
1. Recoger datos del lead (formulario web → Supabase, o manual)
2. `google_calendar` MCP → agendar discovery call (15-30 min)
3. `/brand-manual-proposal` → genera PDF personalizado
4. `gmail` MCP → crear draft de envío de propuesta (personalizar con contexto de la call)
5. `stripe` plugin → generar payment link ligado a `Proposal.number` (tier + precio)
6. `/email-sequence` Type 2 → envía propuesta + payment link + follow-ups automáticos

### Flujo post-venta
1. `google_calendar` MCP → agendar kickoff + review 1 + review 2 en una tanda
2. `/email-sequence` Type 3 → onboarding (brief, updates, entrega)
3. `/email-sequence` Type 4 → nurture (testimonial día +14, referral +90, upsell +180)

### MCPs de negocio (prioritarios en este proyecto)
- **`stripe`** (plugin oficial): crear products/prices/payment links por Proposal. Una línea por tier (esencial/profesional/premium) + custom por proyecto grande.
- **`gmail`**: drafts personalizados tras discovery call, buscar hilos con cliente, leer respuestas para actualizar `Lead.stage` en Supabase.
- **`google_calendar`**: discovery calls, kickoffs, reviews. Evita el bottleneck de ida-y-vuelta de horarios.
- **`supabase`** (ya conectado): CRM canónico. Lee/escribe Lead/Brief/Proposal/Project directamente.
- **`playwright`**: QA de landing + screenshots + render de PDFs de brand manuals.

### Workflow integrado Supabase + Stripe + Gmail
Cuando una Proposal pasa a `status: accepted`:
1. Leer Proposal desde Supabase (`claude_ai_Supabase__execute_sql`)
2. Crear payment link en Stripe con el precio del tier
3. Actualizar `Proposal.payment_link_url` en Supabase
4. Gmail: draft personalizado con el link + kickoff call link de Calendar
5. `/email-sequence` trigger automático `accepted → onboarding`

## Responsabilidades (RACI simplificado)

| Tema | Decide (agente) | Ejecuta (skill) |
|---|---|---|
| Brand identity, naming, visual DNA | `creative-director` | — |
| SEO strategy, keywords, content plan | `seo-strategist` | `/seo-audit` |
| Copy: landing, emails, ads, proposals | `conversion-copywriter` | `/landing-page`, `/email-sequence` |
| Pricing, GTM, funnels, unit economics | `growth-strategist` | `/competitive-intel` |
| Competitor research (data gathering) | — | `/competitive-intel` |
| Proposal generation (PDF) | — | `/brand-manual-proposal` |

**Regla**: los agentes deciden QUÉ hacer (estrategia). Las skills ejecutan el CÓMO (checklists, templates, código). No invocar un agente para ejecutar ni una skill para decidir.

## Data Model (compartido por todos los agentes y skills)

Entidades canónicas para el negocio de brand manuals:

```
Lead: { id, name, email, company, sector, role, source, stage, brand_maturity, budget_signal, notes, consent_given_at, created_at }
  - source: web_form | linkedin | referral | ad | organic
  - stage: new → contacted → qualified → proposal_sent → negotiating → won | lost
  - brand_maturity: new_brand | existing | rebrand

Brief: { id, lead_id, scope_tier, special_requirements, timeline, brand_assets_url, questionnaire_responses }
  - scope_tier: esencial | profesional | premium
  - timeline: standard | rush | flexible

Proposal: { id, brief_id, number (PROP-YYYY-NNN), tier, price, currency, pdf_url, sent_at, status, valid_until }
  - status: draft → sent → viewed → accepted | rejected | expired

Project: { id, proposal_id, status, due_date, revision_count, revision_limit (2), delivered_at }
  - status: kickoff → in_production → review_1 → review_2 → delivered → closed
```

Automated triggers: ver `email-sequence` skill para detalle de cada transición de estado.

## MCPs activos

| MCP | Uso |
|---|---|
| `context7` | Documentación actualizada de librerías. Usarlo proactivamente cuando se trabaje con APIs versionadas (Next.js 15+, tRPC, Drizzle, Hono, etc.) — no esperar a que el usuario lo pida |
| `playwright` | Control directo de navegador — navegar URLs, hacer clic, rellenar formularios, tomar screenshots, scraping, verificar apps desplegadas |
| `postgresql` | Conexión directa a DB en proyectos activos — configurar `POSTGRES_CONNECTION_STRING` en el `.mcp.json` del proyecto |

### Combinaciones de alto valor
- **`ui-ux-designer` + `playwright`**: screenshot de cualquier URL en vivo → crítica research-backed de la interfaz real
- **`fullstack-developer` + `playwright`**: construir feature → verificarla en navegador sin salir de la conversación
- **`test-engineer` + `playwright`**: ejecutar flujos E2E interactivamente en un navegador real

---

## Revisión de código — formato de feedback

Cuando revises código, usa estas severidades:
- **BLOCKER**: Vulnerabilidad de seguridad, pérdida de datos, bug de corrección — debe arreglarse antes del merge
- **MAJOR**: Problema de rendimiento, error handling ausente, deuda técnica significativa
- **MINOR**: Nomenclatura, pequeña ineficiencia — puede abordarse en follow-up
- **NIT**: Puramente cosmético — solo mencionar si aporta valor real

Formato: `[SEVERITY] archivo:línea — descripción breve`

Siempre reconoce lo que está bien hecho. Lidera con un párrafo resumen antes de los detalles.

---

## Debugging — enfoque

1. Reproduce primero. Sin reproducción no hay debugging real.
2. Forma la hipótesis más simple que explique los síntomas.
3. Diseña el experimento más barato para confirmarla o refutarla.
4. Bisect si es necesario: `git bisect` para regresiones, dividir el código para aislar la causa.
5. Arregla la causa raíz, no los síntomas.
6. Escribe un test de regresión antes de cerrar cualquier bug.

---

## LLM / Prompt engineering — referencia rápida

### Modelos Anthropic (2025-2026)
- `claude-opus-4-6` — Máxima capacidad, razonamiento complejo, tareas agénticas
- `claude-sonnet-4-6` — Balance óptimo inteligencia/velocidad — **elección por defecto**
- `claude-haiku-4-5` — Más rápido y barato, tareas de alto volumen simples

### Técnicas clave
- **Extended thinking**: `thinking: {type: "enabled", budget_tokens: N}` — para razonamiento profundo
- **Prompt caching**: `cache_control: {type: "ephemeral"}` en secciones estables — reduce coste hasta 90%
- **Structured outputs**: usa XML tags en el prompt (`<context>`, `<task>`, `<examples>`) — más fiable que JSON en system prompt
- Claude sigue instrucciones literalmente — sé preciso, no vago
- Few-shot examples en `<examples>` mejoran drásticamente la consistencia del formato de salida

---

## Estándares generales

- TypeScript: `strict: true` siempre, sin `any`
- Tests: Vitest para TS/JS, Playwright para E2E — nunca mockear la base de datos en integration tests
- SQL: queries parametrizadas siempre, nunca interpolación de strings
- Secrets: solo en variables de entorno, nunca en código ni logs
- Errores: falla ruidosamente, nunca swallows silenciosos
