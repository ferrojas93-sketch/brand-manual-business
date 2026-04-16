# Handoff — Próxima sesión Tramarca
**Fecha:** 2026-04-14
**Sesión origen:** rebuild Shamusic v1→v4.2 + audit integral repo + scaffold Jinja2 + integración Supabase + decisión estratégica

---

## 🎯 ARRANQUE: lee primero estos 4 archivos en este orden

1. **Este archivo** (HANDOFF-NEXT-SESSION.md) — qué hacemos
2. `~/Projects/claude/brand-manual-business/AUDIT-REPO.md` — estado del repo
3. `~/.claude/projects/-Users-fer/memory/project_shamusic_v4_audits.md` — pipeline auditoría
4. `~/.claude/projects/-Users-fer/memory/reference_tramarca_audit_pipeline.md` — los 5 prompts canónicos

Todo lo demás se carga vía la memoria automática (`MEMORY.md` ya indexado).

---

## 🚀 TAREA INMEDIATA: ULTRAPLAN matriz estructural de manuales

**El problema que vamos a resolver:**
Los 5 manuales (Matraz, Claramel, Anfisbena, Tramarca, Shamusic) clonan la misma estructura. No hay variación por **tier** (Esencial 490€ vs Premium 1990€ entregan mismo esqueleto), por **sector** (cultural / fashion / tech / luxury / mass-market / B2B / D2C / experiencial), ni por **tipo** (producto físico / servicio digital / plataforma / experiencia / hybrid).

**El objetivo:**
Construir una matriz canónica de estructura de manuales basada en cómo lo hacen las grandes agencias (Spotify, Mailchimp, Apple, NASA, Airbnb, Slack, Zara, FedEx, MasterCard, IBM). Refactorizar `/brand-manual-build` para que cada nuevo cliente reciba una estructura PROPIA según los 3 ejes.

---

## 📋 PLAN DE 5 FASES — copy-paste para arrancar

### FASE A — Análisis paralelo de 10 manuales reales (5 agentes · ~30 min)

10 manuales públicos a investigar:

| # | Marca | URL/fuente | Sector | Tipo |
|---|---|---|---|---|
| 1 | Spotify Brand Center | brandcenter.spotify.com (público) | Tech/Music | Plataforma |
| 2 | Mailchimp Brand Hub | content-style-guide.mailchimp.com | SaaS B2B | Servicio digital |
| 3 | Apple Marketing Identity | marketing.services.apple/identity (PDF público) | Tech/Hardware | Producto |
| 4 | NASA Graphics Standards Manual 1976 | standardsmanual.com (reedición) | Institucional | Hybrid |
| 5 | Airbnb Design Language System | airbnb.design/building-a-visual-language | Marketplace | Plataforma |
| 6 | Slack Brand Guidelines | slack.com/intl/es-es/media-kit | SaaS | Plataforma |
| 7 | Zara/Inditex Brand Book | filtraciones públicas + lookbooks | Fashion | Producto físico |
| 8 | FedEx Brand Identity (Lindon Leader) | brandnew.underconsideration archive | Logística | Servicio |
| 9 | MasterCard 2016 Rebrand | mastercard.com/brandcenter | Finanzas | Servicio |
| 10 | IBM Design Language | ibm.com/design/language | Enterprise | Hybrid |

**Prompts canónicos para los 5 agentes** (usar `general-purpose` con `WebFetch` + `Tavily`):

Cada agente recibe **2 manuales** y devuelve para cada uno:
- Número total de capítulos / spreads
- Lista exhaustiva de capítulos (en orden)
- Profundidad (páginas por capítulo)
- 3 técnicas únicas que solo aplican grandes (motion, sound, AR, accessibility deep)
- Cuál es la longitud del manual completa
- Qué hace especial el sector que reflejar
- Qué NO incluyen (lección de restricción)

Output en `/manuales/_research-matrix/{marca-slug}.md` (un .md por marca).

### FASE B — Síntesis cruzada (1 agente brand-strategist · ~15 min)

Lee los 10 análisis y consolida en `/manuales/_research-matrix/SYNTHESIS.md`:
- Matriz "Anatomía Universal" con ~35-40 capítulos posibles
- Agrupados en 6 bloques: Foundation / System / Identity / Application / Voice / Operations
- Tabla cross: capítulo × tier (E/P/Pr) × sector × tipo
- Lista de "técnicas reservadas a grandes" (motion, sound, AR, accessibility deep-dive, multi-language)

### FASE C — Diseño de estructuras Tramarca (creative-director + brand-strategist)

Genera en `/manuales/_research-matrix/STRUCTURES.md`:

**3 plantillas base por tier:**
- Esencial (490€) = 12 capítulos canónicos
- Profesional (990€) = 18 capítulos canónicos + 2 sectoriales
- Premium (1.990€) = 25 capítulos canónicos + 4 sectoriales + 2 client-specific

**5 perfiles sectoriales:**
- tech-saas / cultural-editorial / fashion-lifestyle / luxury-heritage / service-d2c

**3 perfiles por tipo:**
- producto-fisico (+ packaging, point-of-sale)
- servicio-digital (+ UI patterns, error states, motion)
- hybrid (+ ecosystem map)

### FASE D — Refactor skill + scaffold (~1h)

1. `~/.claude/skills/brand-manual-build/SKILL.md` — añadir matriz + selector dinámico
2. `~/.claude/agents/creative-director.md` — añadir **Structural Variant** como output bloqueante (3 ejes obligatorios: tier, sector, tipo)
3. `_scaffold/templates/structures/` — crear YAMLs por combinación (`premium-tech-plataforma.yaml`, `profesional-fashion-producto.yaml`, etc.)
4. `~/.claude/skills/brand-manual-proposal/SKILL.md` — el scope se calcula desde los 3 ejes

### FASE E — Auditoría retroactiva (~30 min)

Pasar los 5 manuales existentes contra la nueva matriz:
- ¿Qué le falta a Shamusic Premium para alinearse con su tier ideal? (probable: motion, sound branding, packaging digital)
- ¿Qué le falta a Anfisbena Profesional?
- Etc.

Output: `/manuales/_research-matrix/RETRO-AUDIT.md` con gaps por manual.

---

## 🛠️ Lo que NECESITO para empezar la próxima sesión

**Orden literal a Claude al abrir nueva sesión:**

```
Lee /Users/fer/Projects/claude/brand-manual-business/HANDOFF-NEXT-SESSION.md
y arranca la FASE A del ULTRAPLAN.
```

Eso basta. Yo (Claude) cargaré:
- Este archivo (te dice todo el contexto y el plan)
- AUDIT-REPO.md (estado actual del repo)
- Las 2 memorias clave (pipeline auditoría + lessons aplicadas a la skill)
- Memoria automática indexada en MEMORY.md

No necesito que copies/pegues nada manualmente.

---

## ⚠️ Constraints que el próximo Claude debe respetar

1. **Effort = max** desde el primer prompt (memoria `feedback_max_effort_default`)
2. **Nano-banana SOLO modelo gratis** `gemini-2.5-flash-image` (memoria `feedback_nano_banana_images`)
3. **Pipeline auditoría multi-perfil** antes de cualquier entrega Premium (memoria `reference_tramarca_audit_pipeline`)
4. **Logo cliente nunca AI** — upscale ImageMagick Lanczos del original
5. **Tramarca async only** — proceso 100% por email (memoria `feedback_tramarca_async_only`)
6. **Visual-QA mandatorio** antes de mostrar output (memoria `feedback_visual_qa_always`)
7. **Verificación antes de completion** — no decir "listo" sin verificar (memoria `feedback_agent_verification`)

---

## 📦 Estado actual del repo (snapshot)

- **5 manuales entregados** en `~/Projects/claude/brand-manuals/01-matraz` a `05-shamusic`
- **Web Tramarca** en branch `redesign/ui-ux-pro-max` (no merged a main aún)
- **Skill scaffold Jinja2** lista en `~/Projects/claude/brand-manuals/_scaffold/`
- **Skill brand-manual-build** actualizada con 8 reglas Shamusic v4
- **Skill brand-manual-proposal** alineada con tiers web + Supabase SQL canónicos
- **Memoria** indexada con 31 entradas en `~/.claude/projects/-Users-fer/memory/MEMORY.md`

---

## 💡 Ideas estratégicas pendientes (para cuando termine ULTRAPLAN)

Las 3 mejoras diferenciales identificadas en esta sesión (no urgentes, pero capturadas):

1. **Tramarca Mark** en cada manual entregado — viral coefficient infinito
2. **Serie editorial "Anatomía de un manual"** — SEO + autoridad + lead magnet
3. **Suscripción "Auditoría anual de marca" 490€/año** — recurring revenue

Posponer hasta que la matriz estructural esté hecha.

---

## 🔚 Lo que NO hay que hacer en la próxima sesión

- ❌ NO repricing (decisión Fernando: no aplicar 1990→2490 todavía)
- ❌ NO migrar manuales antiguos a Jinja2 (solo 6º cliente en adelante)
- ❌ NO tocar `tiers.ts` sin coordinar con el SKILL proposal (deben quedar alineados)
- ❌ NO pushear a `main` sin aprobación Fernando
- ❌ NO empezar a aplicar mejoras estratégicas (Mark, contenido, suscripción) — primero la matriz

---

**Resumen en 1 línea:** próxima sesión arranca FASE A del ULTRAPLAN — investigar 10 manuales de grandes marcas con 5 agentes paralelos para construir matriz estructural Tramarca por tier × sector × tipo.
