# ULTRAPLAN Tramarca — 2026-04-18

> Plan estratégico web + SEO + contenido derivado de la sesión de handoff post-manual v4.
> Source of truth operativa hasta cierre de fase.

---

## Veredictos previos (decisiones tomadas antes de ejecutar)

### 1. Anatomía — MANTENER pero REDEFINIR como hub educativo

**Estado actual**: `/anatomia` es un listado documental de 12 capítulos × 48 componentes con descripción corta. Cumple la función de mostrar profundidad de scope pero no aporta valor educativo ni tracciona SEO.

**Problemas**:
- Lectura lineal, sin profundidad por componente
- Sin ejemplos visuales reales (cada item debería mostrarse aplicado en un spread de los 5 manuales del portfolio)
- SEO plano — descripciones cortas, sin long-tail keywords
- No conecta con blog ni con portfolio
- Se siente como spec interno, no como recurso

**Decisión**: **Rediseñar como hub educativo.** No lista — hub que conecta con portfolio + blog:
- Cada capítulo con sección expandible: qué es · por qué importa · ejemplo real (spread del portfolio) · link a blog post relacionado
- Schema.org `HowTo` o `TechArticle` por capítulo → rich results
- CTAs internos hacia tier correspondiente (Esencial 01-03 · Profesional 01-07 · Premium 01-12)
- Internal link juice hacia `/manuales/[slug]` y `/blog/[slug]`

**Por qué mantenerlo**: es pieza de autoridad. Para la query "qué incluye un manual de marca" Tramarca debe rankear — es nuestro territorio.

### 2. Menú nav — REORDENAR por buyer journey

**Orden actual**: Manuales · Anatomía · Precios · Nosotros

**Problema**: "Manuales" primero asume que el visitante quiere ver trabajo antes que entender el producto. Para comprador con baja awareness, el camino es: entender qué compra → ver precio → ver trabajo → confiar en quién lo hace.

**Propuesta**: **Anatomía · Precios · Manuales · Nosotros** (Contacto permanece en el CTA del botón).

**Trade-off**: Anatomía primero refuerza que somos especialistas documentales (posicionamiento). Precios segundo responde la pregunta transactional crítica ("¿cuánto?"). Manuales tercero da pruebas. Nosotros cuarto cierra la confianza. Es el orden que recomienda el growth-strategist para productos con precio público.

### 3. Blog — SÍ, con arquitectura editorial minimalista

**No** blog SaaS típico con categorías, tags, filtros, buscador. **Sí** editorial con:
- Hasta 4 categorías: Guías · Análisis · Curiosidades · Proceso
- `/blog` listado chronological con hero + excerpt
- `/blog/[slug]` artículo editorial con schema.org Article
- RSS feed (requisito Google News Publisher Center futuro)
- Related posts basados en categoría

### 4. Sección /mejores-practicas — SÍ, pero como hub editorial

**Concepto**: subhub de `/blog` o página propia a nivel raíz que analiza manuales famosos (NASA 1976, British Rail 1965, Mailchimp, Slack, Oatly, MasterCard, Stripe Press) con mockups/screenshots propios + análisis editorial.

**Triple valor**:
1. **SEO link bait**: piezas sobre NASA Graphics Standards Manual o FedEx hidden arrow son gold — muchos backlinks orgánicos
2. **Autoridad de marca**: demuestra que conocemos la historia y los clásicos — agencias no lo tienen
3. **Contenido educativo**: conecta con `/anatomia` (ejemplos canónicos de cada capítulo) y `/blog`

**Decisión arquitectural**: crear como `/blog` con categoría "Análisis" + las 5 piezas pilar tagged. NO una ruta separada — reduce complejidad.

---

## ULTRAPLAN — 6 fases, ordenadas por dependencia

### FASE 1 · Foundations inmediatas (2h · hoy)

Quick wins que desbloquean el resto:

#### 1.1 Manual v4 en web + descarga funcional
- Copiar `~/Projects/claude/brand-manuals/04-tramarca/dist/tramarca-v4.pdf` → `web/public/manual-tramarca.pdf`
- Verificar descarga funciona con `<a href download>` o rewrite en `next.config.ts`
- Actualizar `lib/manuales.ts`: `tramarca.pages: 34 → 58`
- Reactivar CTA "Ver manual Tramarca" oculta en home (audit 360 la escondió)
- Cambiar copy hero manual: "34pp" → "58pp"
- Cover image `public/portfolio/tramarca-cover.jpg` → sustituir por `04-tramarca/dist/assets/generated/cover-hero.png` (matte black book v4) — **opcional**, validar antes

#### 1.2 Menú nav reorder
- `components/Nav.tsx` — LINKS array: Anatomía · Precios · Manuales · Nosotros
- Actualizar footer nav si aplica

#### 1.3 Audit 58MB PDF — ¿optimizar?
- 58MB es pesado. Opcional: versión "Web" 15-20MB (imágenes rasterizadas 150 DPI vs 300 DPI) + versión "Full" 58MB
- Decisión: mantener 58MB en esta fase, optimización en FASE 6

**Entregable**: Manual v4 vivo en tramarca.es, descargable, menú reordenado.

---

### FASE 2 · Alineación web ↔ manual v4 (1.5h)

Manual es source of truth. Web debe reflejarlo.

#### 2.1 Audit cruzado — contradicciones

Barrido sistemático comparando:

| Web | Manual v4 ref | Acción |
|---|---|---|
| Copy hero / secciones core | p08 "Nuestra respuesta" (4 pilares) | Verificar que los 4 pilares (Precio cerrado · Plazo publicado · Proceso cerrado · Entrega editorial) salen consistentes |
| Tabla comparativa /precios | p09 "El mercado en una tabla" | Confirmar ancla 6.000€–18.000€ agencia, 800€–3.500€ freelance |
| Voz/tono copy | p35 Principios voz (4 + registro por canal) | Eyebrow + H2 + body deben seguir "Claro · Directo · Concreto · Nombra lo exacto" |
| Tiers descripciones | p53 (equivalente en manual) | Cruzar entregables — matching exacto |
| 10 reglas TL;DR | p57 La marca en 10 líneas | Cada regla debe ser verificable en la web |

**Entregable**: `docs/web-manual-audit-2026-04-18.md` con tabla de discrepancias + fixes aplicados.

#### 2.2 Copy + CTAs review global
- Hero home + cierre + todos los CTAs primarios/secundarios
- CTA "Pedir propuesta en 24h" vs "Hablemos de tu marca" — decidir consistencia
- Tone check en cada página contra `feedback_tramarca_copy_forbidden`

**Entregable**: pasada limpia de copy, nada de residuos async/no-rondas, lenguaje afirmativo.

---

### FASE 3 · SEO estratégico (3-4h)

Investigación profunda y guardada como documento estratégico operativo.

#### 3.1 Keyword research — fuentes primarias

**Herramientas** (priorizadas por acceso/coste):
- **Google Trends** España — trending queries "manual de marca", "brand manual", "guía de marca", "identidad corporativa"
- **Google Search Console** (si hay data) — queries reales que ya traen impresiones
- **Keyword Planner** (Google Ads, cuenta ya creada) — volumen + competencia + CPC
- **Ubersuggest free tier** — 3 queries/día, data secundaria
- **AnswerThePublic** — long-tail preguntas reales
- **Web fetch competidores SERP**: qué rankea hoy para keywords core
- **SERP features check** — featured snippets, PAA, knowledge panel

#### 3.2 Intent clustering

Agrupar keywords por intento:

| Intent | Ejemplos | Dónde rankear |
|---|---|---|
| **Transactional** | "manual de marca precio", "cuánto cuesta manual de marca" | /precios + blog transactional |
| **Commercial** | "manual de marca vs brand kit", "estudio manual de marca Madrid" | /sobre + /precios + blog comercial |
| **Informational** | "qué es un manual de marca", "cómo hacer manual de marca" | /anatomia + blog guías |
| **Navigational** | "Tramarca", "tramarca.es" | Home + schema Organization |
| **Inspirational** | "manuales de marca famosos", "ejemplos manuales marca" | /blog análisis + /mejores-practicas |

#### 3.3 Competitive SERP audit

Queries core a auditar con `WebFetch` + manual review:
- "manual de marca" (informational)
- "manual de marca precio" (transactional)
- "manual de marca ejemplos" (inspirational)
- "agencia branding Madrid" (commercial competencia)
- "cuánto cuesta manual de marca" (long-tail transactional)
- "brand guidelines España" (bilingual)
- "manual de identidad corporativa" (variante semántica)

Para cada query: top 10 + SERP features + páginas propias candidatas.

#### 3.4 Content calendar 90 días

Plan editorial con prioridad cada pieza por (volumen × intent-match × dificultad-inversa):
- Semana 1-2: pieza pilar transactional "Cuánto cuesta un manual de marca en España"
- Semana 3-4: pieza pilar educativa "Qué incluye un manual de marca" (hub /anatomia)
- Semana 5-6: pieza link-bait "NASA Graphics Standards Manual — guía completa"
- Semana 7-8: pieza commercial "Manual de marca vs Brand Kit"
- Semana 9-10: pieza curiosidades "Logos famosos con secretos tipográficos"
- Semana 11-12: pieza análisis "Mailchimp's brand voice · cómo lo documentan"

**Entregable**: `docs/seo-strategy-2026.md` — ~15-20 páginas con:
1. Keyword universe (30-50 keywords con volumen/intent/KD)
2. Intent map página por página
3. Content calendar 90 días con primera pieza lista para write
4. Technical SEO checklist (schema, internal linking, sitemap, hreflang)
5. Backlink strategy outline

---

### FASE 4 · Rediseño /anatomia como hub (2h)

Aplicar veredicto 1. Mantener estructura actual (12 caps × 48 componentes) pero enriquecer.

#### Cambios por componente
- Sección expandible con 4 bloques: **Definición** · **Por qué importa** · **Ejemplo real** (spread del portfolio) · **Profundiza** (link blog)
- Cover de capítulo con imagen del manual v4 divider correspondiente (ya existen en dist/assets/generated)

#### Estructura de página
- Hero editorial con sumario "12 capítulos · 48 componentes · 5 manuales como referencia"
- Tabla de contenidos navegable (anclas)
- Ficha por capítulo con componentes expandibles
- CTA por tier al final de cada capítulo (Esencial, Profesional, Premium)

#### SEO
- Schema `HowTo` por capítulo (steps = componentes)
- Breadcrumb schema
- FAQ schema para preguntas frecuentes por capítulo
- Internal links a blog (cuando existan) + a `/manuales/[slug]` ejemplos

**Entregable**: `/anatomia` reconvertida en hub con ~4-5× más contenido SEO-relevante.

---

### FASE 5 · Infraestructura blog (3h)

#### 5.1 Ruta Next.js
- `app/blog/page.tsx` — listado chronological con hero + category filter ligero
- `app/blog/[slug]/page.tsx` — artículo con hero editorial + body + related posts
- Content source: MDX en `content/blog/*.mdx` o data-driven `lib/blog.ts`
- Schema: `Article` + `BreadcrumbList` + `Person` (author) + `Organization` (publisher) + `FAQPage` si aplica

#### 5.2 Taxonomía
- **Guías** — howtos, educativo (consume `/anatomia`)
- **Análisis** — manuales famosos, casos (consume histórico)
- **Curiosidades** — logos, detalles tipográficos (link bait)
- **Proceso** — cómo trabaja Tramarca (buyer journey)

#### 5.3 RSS feed
- `app/feed.xml/route.ts` — Atom/RSS 2.0 válido
- Link en `<head>` del sitio
- Habilita Google News Publisher Center futuro

**Entregable**: `/blog` funcional con 1 post dummy de test + schema + RSS.

---

### FASE 6 · Contenido pilar — piezas blog (ongoing, ~6-10h/pieza con imágenes)

**Addenda 2026-04-18**: cada pieza debe incluir obligatoriamente:
- **Imágenes originales o stockless de calidad** — 3-6 imágenes por pieza generadas con nano-banana (tono contemporary editorial) + anotaciones visuales cuando aplique (flechas, comparativas, antes/después)
- **Alt text SEO** en cada imagen — descripciones ricas con keywords naturales
- **Captions editoriales** bajo cada imagen (Fig. 01 · concepto) siguiendo estilo del manual v4
- **Schema Article** + `ImageObject` + `FAQPage` cuando hay preguntas + `HowTo` para guías
- **Internal linking**: mínimo 3 links a `/anatomia` + 2 a `/manuales/tramarca` + 1 a `/precios` o `/contacto`

**Agente responsable**: nuevo `editorial-writer` creado para esta fase — especialista en blog long-form editorial + SEO + visual direction. Lee `brief` que incluye keyword target + estructura + fuentes + tono, produce `.mdx` ready-to-publish con prompts de imagen listos para nano-banana.

Flujo por pieza:
1. `seo-strategist` entrega brief (keyword target + SERP gap + outline + schema requerido)
2. `editorial-writer` redacta long-form + prompts de imagen + alt text
3. Usuario / nano-banana genera las imágenes desde los prompts
4. `conversion-copywriter` pulido CTAs + cierre editorial
5. Publicación via MDX + schema inyectado

---

Prioridad por SEO score (volumen × intent-match × dificultad-inversa):

#### 6.1 "Cuánto cuesta un manual de marca en España 2026" (transactional)
- Long-form 2.500-3.500 palabras
- Tabla rangos reales: agencias · freelance · plataformas · Tramarca
- FAQ schema con 10-15 preguntas
- CTA /precios + tabla comparativa
- Target: featured snippet

#### 6.2 "Anatomía de un manual de marca: 12 capítulos imprescindibles" (educativo)
- Hub page conectada con `/anatomia` (una evolución editorial)
- Schema HowTo
- 2.000-3.000 palabras
- Link a cada capítulo de `/anatomia`

#### 6.3 "NASA Graphics Standards Manual (1976) — guía completa" (link bait)
- Análisis editorial 3.000+ palabras
- Screenshots del manual original (dominio público)
- Nuestro comentario profesional
- Backlink magnet potential alto

#### 6.4 "Manual de marca vs Brand Kit — cuál necesitas" (commercial)
- Comparativa 1.500-2.000 palabras
- Diagrama ilustrativo
- FAQ + CTA tiers

#### 6.5 "Logos famosos con secretos tipográficos" (viral/curiosities)
- FedEx flecha · Amazon smile A-Z · Baskin-Robbins 31 · Tour de France ciclista · Toblerone oso
- 2.000 palabras
- Imágenes anotadas
- Share-friendly

**Entregable**: 5 piezas pilar publicadas, schema completo, internal linking robusto.

---

## Priorización de ejecución inmediata

### Hoy / esta sesión (4-5h)
1. **FASE 1 completa** — manual v4 + menú (arreglos visibles, quick wins)
2. **FASE 2.1** — audit cruzado web ↔ manual (documento)
3. **FASE 3 (primera mitad)** — keyword research + intent map

### Siguiente sesión (3-4h)
4. **FASE 3 (segunda mitad)** — content calendar + doc final
5. **FASE 4** — rediseño /anatomia
6. **FASE 2.2** — copy + CTAs pass final

### Sesiones posteriores (3h + 4-8h/pieza)
7. **FASE 5** — infra blog
8. **FASE 6** — empezar pieza pilar #1

---

## Dependencias críticas

- FASE 3 (SEO) debe terminarse ANTES de FASE 4 (anatomía) — keywords determinan cómo estructurar el hub
- FASE 4 (anatomía) debe terminarse ANTES de FASE 6.2 — blog post hub refiere a anatomía
- FASE 5 (blog infra) debe existir ANTES de FASE 6 (contenido)
- FASE 2.2 (copy review) se hace DESPUÉS de FASE 4 para no reescribir dos veces

---

## Riesgos y decisiones pendientes

1. **58MB PDF** — acceptable para descarga directa? Alternativas: gated behind email capture, o versión ligera 15MB.
2. **Sustituir cover Tramarca en portfolio** — actualizar a matte black book v4? Riesgo: romper consistency con el resto de covers.
3. **Blog en español vs bilingual** — decisión estratégica. Recomendación: español only MVP, bilingual cuando haya tracción.
4. **Backlinks outreach** — Brandemia, Marketing Directo, Dcuello, Behance, Awwwards, Brand New. No en este ULTRAPLAN — siguiente fase.

---

## Referencias cruzadas

- Manual Tramarca v4: `~/Projects/claude/brand-manuals/04-tramarca/dist/tramarca-v4.pdf`
- Memoria handoff: `project_tramarca_next_session.md`
- Memoria forbidden copy: `feedback_tramarca_copy_forbidden.md`
- SEO agent memory previa: `web/.claude/agent-memory/seo-strategist/project_tramarca_seo_strategy_2026_04.md`
- Pricing canon: `web/lib/tiers.ts` + `~/.claude/skills/brand-manual-proposal/SKILL.md`

---

_Documento creado 2026-04-18. Actualizar estado al cierre de cada fase._
