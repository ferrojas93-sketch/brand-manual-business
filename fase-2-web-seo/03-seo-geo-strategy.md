# SEO + GEO Strategy — Tramarca
**Fecha**: 2026-04-12 · **Autor**: seo-strategist · **Deploy target**: finales mayo 2026
**Alcance**: FASE 2 — lanzamiento web tramarca.es + estrategia contenido + GEO + roadmap T2-T4 2026
**Input base**: `01-competitive-intel.md` + `02-competitive-intel-ronda2.md` + SERP empírica 2026-04-12

---

## 0. Resumen ejecutivo — 15 decisiones a tomar YA

1. **Dominio canónico = tramarca.es**. 301 desde .com / .org / .store. Hreflang `es-ES`. Sin estrategia multi-TLD.
2. **La SERP de "precio manual de marca" está dominada por blogs informativos (Sortlist, Lalolastudio, Abstract, Grafikeo, Pululart) — NO por landings comerciales**. Hipótesis 1 del brief: CONFIRMADA. Ventana abierta para landing comercial + schema `Service`.
3. **Ash Proyectos rankea con páginas geo-segmentadas** ("Agencia de branding en Madrid", "imagen corporativa Madrid", "diseño gráfico Madrid") — NO con landing de pricing. Hipótesis 2 del brief: PARCIALMENTE refutada. Ash no domina "precio manual de marca"; domina "agencia branding Madrid". Oportunidad: Tramarca ataca las dos verticales con páginas separadas.
4. **Hoy los LLMs NO recomiendan a nadie en particular** para "mejor servicio de manual de marca España". Cuando se les fuerza, citan Brandeame, Agarimo, Outline — marcas con contenido SEO largo, no productizadas. Hipótesis 3: CONFIRMADA. Territorio GEO totalmente virgen.
5. **Ningún competidor español tiene schema markup `Service` con `Offer` y precios**. Tramarca puede ser el primer resultado en rich snippets / knowledge panel para "manual de marca precio".
6. **Arquitectura de URLs decidida**: `/` (home comercial) · `/precios` (pricing detallado) · `/manuales` (portfolio) · `/manuales/[slug]` (case studies) · `/proceso` · `/sobre` · `/blog` · `/blog/[slug]` · `/recursos/glosario` · `/recursos/[slug]` (templates/descargables). NO usar `/es/` prefix (dominio ya es .es).
7. **Pilar SEO = `/precios`**, no `/`. Ataca la query comercial-precio con respuesta directa arriba y resto de evidencia debajo. La home es branding, la pricing es captura.
8. **Blog pilar #1 = "Cuánto cuesta un manual de marca en España 2026"**. Ataca la keyword con mayor competencia actual (Sortlist rankea top 1) con estructura superior, stats citables y schema `FAQPage`. Esta pieza sola puede traer 60-70% del tráfico orgánico del primer año.
9. **Founding Customer Program es un activo GEO, no solo de conversión**. Cada case study con cliente real + testimonial + citación pública = señal de autoridad que los LLMs rescrapean. Escribir cada case study como artículo 800-1200 palabras con datos concretos (páginas entregadas, plazo real, feedback literal).
10. **Registrar Tramarca en Sortlist + Clutch + Trustpilot + Top Diseño España + Goodfirms** en los primeros 30 días. Estos directorios son fuente primaria para training data de ChatGPT/Claude y retrieval de Perplexity. Sin presencia aquí, invisible en GEO.
11. **Google Business Profile = obligatorio**, categoría "Graphic Designer" + secundaria "Marketing Agency". Zona Madrid centro. Aunque Tramarca no sea presencial, el GBP activa señales locales que desbloquean "manual de marca Madrid".
12. **LocalBusiness schema en / + Service schema + OfferCatalog con 3 ofertas (490/990/1990€)** — JSON-LD completo provisto abajo, copy-paste directo.
13. **Medir GEO manualmente desde día 1**: hoja de cálculo con 20 queries testeadas mensualmente en ChatGPT (buscador activado), Perplexity, Claude (web), Gemini. Sin herramienta reliable en el mercado aún — métrica = menciones y citaciones.
14. **NO pagar Ahrefs/Semrush el primer trimestre**. Google Search Console + Google Keyword Planner (gratis con cuenta Ads) + búsquedas manuales dan 80% del valor. Considerar Ahrefs en T3 cuando haya contenido que medir.
15. **El riesgo #1 no es ranking, es desindexación**. Asegurar robots.txt correcto, canonicals, sitemap.xml, Next.js App Router `metadata` en cada página. Un deploy con `noindex` accidental borra 3 meses de trabajo.

---

## 1. Auditoría de lo ya hecho (Ronda 1 + Ronda 2)

### Qué es sólido
- **Mapa competitivo (15 competidores, 3 ligas)**: robusto. La liga "productized boutique" con Ash como único peer directo es el insight estratégico que marca toda la estrategia SEO.
- **Gap de pricing transparency**: validado empíricamente. En mi SERP pull de 2026-04-12, de 10 resultados top para "precio manual de marca", ninguno es landing comercial con pricing público y estructurado.
- **Patrones UX a replicar**: sólidos y alineados con SEO (mockup visual, comparison table, FAQ extensa, schema-compatible).
- **Identificación de Ash como competidor #1 head-to-head**: correcta, pero incompleta desde ángulo SEO (ver siguiente punto).

### Huecos desde ángulo SEO/GEO que Ronda 1+2 no cubrió

1. **SEO de Ash Proyectos NO es en "precio manual de marca"** — Ash rankea en queries geo-segmentadas Madrid ("agencia branding Madrid", "imagen corporativa Madrid", "diseño gráfico Madrid"). Ash es un rival local/geo, no un rival de pricing. Esto cambia la estrategia: Tramarca debe abrir **dos frentes** (pricing + Madrid).
2. **Sortlist es el rival SEO real, no Ash**. Sortlist domina "precio manual de identidad corporativa" y "precio branding España" con blog post editorial. Para ganar tráfico comercial, hay que superarlo en contenido, no solo en producto.
3. **Lalolastudio rankea top 3 con un único post optimizado** ("Cuánto cuesta un Manual de Marca"). Prueba que en este vertical basta **una pieza 10x mejor** para dominar; no hace falta cluster masivo.
4. **Abstract Branding publica data (rangos freelance/small/mid/large) citados por otros posts**. Es la fuente primaria que otros blogs rescrapean. Tramarca puede convertirse en nueva fuente primaria publicando su propio report anual con data real de proyectos.
5. **Nadie en el análisis opera GEO** — ni siquiera Ash tiene schema `Service` con `Offer`. Ventana enorme.
6. **Competidores SEO que faltaron en ronda 1+2**: Pululart, Grafikeo, OMNIA Soluciones, Brandeame, Squembri, Maxcf, Samuparra — todos rankean con contenido informacional y ninguno vende productized. Son fuentes de backlinks/menciones, no competidores directos.

### Conclusión auditoría
Ronda 1+2 son excelentes para **posicionamiento y copy**. Insuficientes para **SEO táctico**: no analizaron SERP, no diferenciaron competidor comercial de competidor informacional, no detectaron la segmentación geo de Ash. Esta estrategia corrige esos puntos.

---

## 2. Keyword research exhaustivo

### Metodología
- Queries testeadas manualmente en Google.es (región España, incógnito) el 2026-04-12
- Volumen estimado vía señales: cantidad de ads Google, "People Also Ask" presente, autocomplete depth, longitud de resultados
- Dificultad estimada (1-10) por: autoridad de los dominios top 10, tipo de contenido dominante (blog débil vs landing fuerte), presencia de marcas grandes
- Volumen numérico exacto = NO disponible sin Google Keyword Planner; marcado como estimación cualitativa (alta/media/baja)

### Cluster 1 — Informacional (top funnel) · 25 keywords

Contenido blog largo. Intención I. Objetivo: tráfico + autoridad topical + feed para LLMs (GEO).

| # | Query | Intent | Volumen | Dif | Top 3 SERP hoy | Formato | Prioridad |
|---|---|---|---|---|---|---|---|
| 1 | qué es un manual de marca | I | Alta | 5 | Brandemia, MaxCF, Tiendanube | Blog pilar | P0 |
| 2 | qué es un manual de identidad corporativa | I | Alta | 5 | Domestika, Pululart, CEI | Blog pilar | P0 |
| 3 | cómo hacer un manual de marca | I | Alta | 6 | Shopify, Samuparra, Calmo | Blog guía paso a paso | P0 |
| 4 | ejemplos manual de marca | I | Media | 4 | Gtech, Agarimo, Cebra | Listicle con portfolio | P0 |
| 5 | manual de marca pdf | I | Alta | 5 | Issuu, Nunsys, Nichoseo | Descargable + blog | P1 |
| 6 | plantilla manual de marca | I | Media | 4 | Canva, Shopify, blog varios | Recurso descargable | P1 |
| 7 | estructura manual de marca | I | Media | 4 | Brandemia, 20s, Moloon | Blog detallado | P1 |
| 8 | manual de marca canva | I | Media | 3 | Canva oficial, blogs | Blog tutorial | P2 |
| 9 | manual de marca simple | I | Media | 4 | Shopify, varios | Guía corta | P2 |
| 10 | qué es un brandbook | I | Media | 4 | Rafamoreno, HubSpot | Blog + glosario | P1 |
| 11 | diferencia manual de marca y brandbook | I | Baja | 3 | Muy poca competencia real | Glosario / FAQ | P1 |
| 12 | elementos manual de identidad corporativa | I | Media | 5 | Pululart, Brandemia | Blog | P1 |
| 13 | manual de identidad corporativa ejemplo | I | Media | 4 | Issuu, blogs varios | Galería + blog | P0 |
| 14 | brandbook ejemplo pdf | I | Media | 4 | Issuu, varios | Galería | P1 |
| 15 | manuales de marca famosos | I | Media | 4 | Gràffica, Cebra | Listicle | P1 |
| 16 | cómo estructurar un manual de marca | I | Baja | 3 | Blogs pequeños | Blog práctico | P2 |
| 17 | manual de marca para empresas | I | Media | 5 | Varios | Blog orientado pyme | P1 |
| 18 | manual de marca paso a paso | I | Media | 4 | Samuparra, varios | Blog tutorial | P1 |
| 19 | qué incluye un manual de marca | I | Media | 4 | Brandemia, Moloon | Blog FAQ | P1 |
| 20 | manual de marca tipografía | I | Baja | 3 | Blogs técnicos | Glosario | P2 |
| 21 | manual de marca paleta de colores | I | Baja | 3 | Blogs técnicos | Glosario | P2 |
| 22 | tono de voz manual de marca | I | Baja | 3 | Pocos | Blog + glosario | P2 |
| 23 | identidad visual empresa | I | Alta | 6 | Agencias varias | Blog pilar | P2 |
| 24 | branding vs identidad corporativa | I | Media | 4 | Blogs varios | Glosario largo | P2 |
| 25 | manual de marca para restaurante | I | Baja | 2 | Casi vacío | Blog nicho | P1 |

**Insight crítico**: P0 informacional son piezas pilar. P1 son cluster páginas. P2 se publican oportunistamente.

### Cluster 2 — Comercial-precio (mid funnel) · 20 keywords

**Donde Tramarca GANA con transparencia**. Intención C con transaccional latente.

| # | Query | Intent | Volumen | Dif | Top 3 SERP hoy | Formato | Prioridad |
|---|---|---|---|---|---|---|---|
| 26 | cuánto cuesta un manual de marca | C | Alta | 5 | Sortlist, Lalolastudio, Pululart | Blog pilar + CTA | P0 |
| 27 | precio manual de marca | C | Alta | 5 | Lalolastudio, Sortlist, Logocrea | Blog + pricing link | P0 |
| 28 | precio manual de identidad corporativa | C | Alta | 5 | Sortlist, Pululart | Blog pilar | P0 |
| 29 | tarifas manual de marca | C | Media | 4 | Adga, Doblegar | Pricing page directa | P0 |
| 30 | precio manual de marca españa | C | Media | 4 | Sortlist, Abstract | Blog + pricing | P0 |
| 31 | cuánto cuesta un manual de identidad corporativa | C | Alta | 5 | Sortlist, Pululart | Blog + CTA | P0 |
| 32 | precio brandbook | C | Media | 4 | Pocos españoles | Pricing page | P0 |
| 33 | cuánto cuesta un brandbook | C | Baja | 3 | Pocos en español | Blog | P1 |
| 34 | precio logotipo y manual de marca | C | Media | 4 | Abstract, varios | Blog comparativo | P1 |
| 35 | tarifas branding españa | C | Media | 5 | Grafikeo, varios | Blog + pricing | P1 |
| 36 | precio manual de marca pyme | C | Baja | 3 | Casi vacío | Landing pyme | P0 |
| 37 | manual de marca barato | C | Baja | 3 | Competencia low-cost | NO atacar (bajaría posicionamiento) | — |
| 38 | manual de marca profesional precio | C | Media | 4 | Sortlist, varios | Landing | P0 |
| 39 | presupuesto manual de marca | C | Media | 4 | Varios | Blog + calculator | P1 |
| 40 | costo manual de marca españa | C | Baja | 3 | Pocos | Blog | P2 |
| 41 | manual de marca desde 500€ | C | Baja | 2 | Vacío | Landing especifica | P1 |
| 42 | manual de marca iva incluido | C | Muy baja | 1 | Vacío | **Landing única Tramarca** | P0 |
| 43 | cuánto se cobra por un manual de identidad | C | Media | 4 | Varios blogs | Blog | P2 |
| 44 | precio diseño manual de marca | C | Media | 4 | Varios | Blog | P2 |
| 45 | comparar precios manual de marca | C | Baja | 3 | Vacío | Comparativa | P1 |

**Estrategia P0 cluster 2**: superar Sortlist con una pieza pilar `/blog/cuanto-cuesta-un-manual-de-marca-2026` que incluye tabla real de precios (Tramarca + Ash + Tomyflow + agencias), data de proyectos entregados, FAQ schema y CTA directo a `/precios`.

### Cluster 3 — Comercial-producto (bottom funnel) · 20 keywords

Landing principal + tier pages + Madrid. Intención C/T.

| # | Query | Intent | Volumen | Dif | Top 3 SERP hoy | Formato | Prioridad |
|---|---|---|---|---|---|---|---|
| 46 | servicio manual de marca | T | Media | 5 | Oliver Puente, Squembri, OMNIA | Landing `/` | P0 |
| 47 | agencia manual de marca | T | Media | 6 | JohnAppleman, varios | Landing | P0 |
| 48 | agencia manual de marca madrid | T | Media | 6 | Ash, JohnAppleman, ArtDinamica | Landing `/madrid` | P0 |
| 49 | agencia manual de marca barcelona | T | Media | 6 | Toormix, Agosto, varios | Landing `/barcelona` | P1 |
| 50 | agencia manual de marca valencia | T | Baja | 4 | Home of Branding | Landing `/valencia` | P2 |
| 51 | crear manual de marca | T | Alta | 6 | Domestika, varios tutoriales | Landing + blog | P1 |
| 52 | diseño manual de marca | T | Media | 5 | Brandesign, Squembri | Landing | P0 |
| 53 | contratar diseñador manual de marca | T | Baja | 4 | Malt, freelance | Landing | P1 |
| 54 | hacer manual de marca profesional | T | Media | 5 | Varios | Landing | P0 |
| 55 | manual de marca online | T | Baja | 3 | Canva, varios | Landing + comparativa | P1 |
| 56 | estudio branding madrid | T | Alta | 7 | Ash, JohnAppleman, Erretres | Landing `/madrid` | P0 |
| 57 | identidad corporativa empresa madrid | T | Alta | 7 | Ash, JohnAppleman | Landing `/madrid` | P0 |
| 58 | brand manual service spain | T (EN) | Baja | 3 | Sortlist dir | Landing EN `/en/` | P1 |
| 59 | brand guidelines service spain | T (EN) | Baja | 3 | Varios | Landing EN | P1 |
| 60 | manual de marca para startup | T | Baja | 3 | Pocos dedicados | Landing nicho | P0 |
| 61 | manual de marca para restaurante | T | Baja | 2 | Casi vacío | Landing nicho | P1 |
| 62 | manual de marca para ecommerce | T | Baja | 3 | Pocos | Landing nicho | P1 |
| 63 | manual de marca freelance | T | Baja | 3 | Pocos | Landing nicho | P2 |
| 64 | tramarca | Nav | Marca nueva | 0 | Vacío | Branded, home | P0 |
| 65 | tramarca manual de marca | Nav | Marca nueva | 0 | Vacío | Home | P0 |

**Estrategia cluster 3**: Home `/` ataca #46, #54, #64, #65. `/precios` ataca #42, #38, #36. `/madrid` ataca #48, #56, #57, #47 geo. Landings nicho (`/para-startups`, `/para-restaurantes`) como cluster de largo plazo.

---

## 3. Arquitectura de contenido (sitemap SEO-first)

```
tramarca.es/
├── / ························· Home (hero comercial, "manual de marca profesional")
├── /precios ················· Pricing page (3 tiers + comparison table + FAQ)
├── /manuales ················ Portfolio (grid)
│   ├── /manuales/anfisbena
│   ├── /manuales/claramel
│   ├── /manuales/matraz-innova
│   └── /manuales/tramarca · "Nuestro propio manual"
├── /proceso ················· 4 pasos + plazos explícitos
├── /sobre ··················· About Fernando + fundación + valores
├── /contacto ················ Form + calendly + email
├── /para-startups ·········· Landing nicho
├── /para-restaurantes ······ Landing nicho
├── /para-ecommerce ········· Landing nicho
├── /madrid ·················· Landing local Madrid (ataca Ash)
├── /barcelona ·············· Landing local (T3)
├── /founding-program ······· Página específica founding customers
├── /blog/
│   ├── /cuanto-cuesta-un-manual-de-marca-2026 ·········· PILAR #1 (P0)
│   ├── /que-es-un-manual-de-marca ······················· PILAR #2 (P0)
│   ├── /como-hacer-un-manual-de-marca ··················· PILAR #3 (P0)
│   ├── /manual-de-marca-pdf-ejemplos-2026 ··············· Cluster
│   ├── /manual-de-marca-para-pymes ······················ Cluster
│   ├── /diferencia-manual-de-marca-brandbook ············ Cluster
│   ├── /elementos-manual-identidad-corporativa ·········· Cluster
│   ├── /tramarca-vs-ash-proyectos ······················· Comparativa (GEO gold)
│   └── ... (20+ artículos cluster)
├── /recursos/
│   ├── /glosario ·············· 30 términos (tipografía, paleta, grid, mockup...)
│   ├── /glosario/[slug] ······· página por término (LSI + schema DefinedTerm)
│   ├── /plantilla-brief ······· descargable lead magnet
│   └── /checklist-manual ······ descargable lead magnet
└── /en/ ······················· versión EN (T4) hreflang es-ES <> en
```

### Internal linking map (hub-and-spoke)

- **Home** → `/precios`, `/manuales`, `/proceso`, blog pilar #1
- **`/precios`** → cada tier explicado, `/manuales`, blog pilar #1, `/founding-program`, FAQ
- **Blog pilar #1 ("cuánto cuesta")** → `/precios`, `/manuales`, blog pilar #2, glosario, comparativa Ash
- **Cada case study (`/manuales/[slug]`)** → `/precios`, `/proceso`, otros 2 case studies
- **Landings nicho** → `/precios`, 1-2 case studies relevantes, blog
- **Glosario** → blog pilares, case studies relevantes
- **Footer universal**: links a `/precios`, `/manuales`, `/proceso`, `/sobre`, `/contacto`, `/blog`

Regla: **todo artículo de blog P0/P1 debe tener mínimo 3 links internos outbound y recibir 2 inbound.**

---

## 4. On-page SEO specification

### Landing principal `/`

```
Title: Manuales de marca profesionales desde 490€. IVA incluido. | Tramarca
        (58 chars)
Meta: Manuales de marca productizados para pymes españolas. 3 tiers: 490€ · 990€ · 1.990€ IVA incluido. Plazos publicados. El Punto Final.
        (154 chars)
Canonical: https://tramarca.es/
hreflang: es-ES (self), x-default

H1: Manuales de marca. Literalmente.
H2: Tres tiers. Tres precios. IVA incluido.
H2: Nuestro trabajo. Cuatro manuales sobre la mesa.
H2: El proceso. Cuatro pasos. Sin sorpresas.
H2: Founding Customer Program. Cinco plazas.
H2: Preguntas que todos hacen.

Keywords primarias: manual de marca, manuales de marca profesionales, servicio manual de marca
Keywords secundarias: manual de identidad corporativa, brandbook España, precio manual de marca
LSI: tipografía, paleta, identidad visual, guía de estilo, tono de voz, sistema de marca, aplicaciones
```

### Pricing `/precios`

```
Title: Precio manual de marca 2026: 490€ · 990€ · 1.990€ IVA incl | Tramarca
        (60 chars exacto)
Meta: Precios públicos por tier. Esencial 490€ (20-25pp). Profesional 990€ (30-40pp). Premium 1.990€ (40-50pp). IVA incluido. Plazos publicados.
        (155 chars)
Canonical: https://tramarca.es/precios

H1: Precio manual de marca. Tres tiers. IVA incluido.
H2: Esencial. 490€. Para los que empiezan con criterio.
H2: Profesional. 990€. El sweet spot.
H2: Premium. 1.990€. Todo lo que una marca necesita.
H2: Comparativa feature por feature.
H2: ¿Qué NO cuesta extra?
H2: Founding Customer Program. Primeros cinco.
H2: Preguntas sobre el precio.

Keywords primarias: precio manual de marca, cuánto cuesta un manual de marca, tarifas manual de marca
Keywords secundarias: precio manual de identidad corporativa, presupuesto manual de marca, manual de marca iva incluido
LSI: propuesta, factura, pago, transferencia, tier, alcance, revisiones, entregables, plazo de entrega
```

### Alt text policy (portfolio images)

Patrón: `[Nombre proyecto] — [tier entregado] — manual de marca [página específica si aplica] por Tramarca`

Ejemplos:
- `Anfisbena — manual de marca profesional 43 páginas entregado por Tramarca`
- `Claramel — spread tipográfico del manual de marca 29 páginas por Tramarca`
- `Matraz Innova — paleta de color en manual de identidad corporativa por Tramarca`
- `Tramarca — portada del manual propio 34 páginas`

NUNCA: "imagen1.jpg", "mockup", "brand book example".

### Anchor text strategy en CTAs

- Hero primario: **"Ver los tres tiers"** → `/precios` (no "click here")
- Hero secundario: **"Los cuatro manuales"** → `/manuales`
- Pricing inline: **"Empezar el Esencial"** / **"Reservar Profesional"** / **"Abrir Premium"** (action-oriented + tier name = anchor rico)
- Blog → pricing: **"ver precios con IVA incluido"** (no "aquí")
- Portfolio → pricing: **"precio del tier Profesional"** (contexto)

---

## 5. Schema markup completo (JSON-LD)

### Landing principal `/`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://tramarca.es/#organization",
      "name": "Tramarca",
      "alternateName": "Tramarca Manuales de Marca",
      "url": "https://tramarca.es",
      "logo": {
        "@type": "ImageObject",
        "url": "https://tramarca.es/logo-tramarca.png",
        "width": 512,
        "height": 512
      },
      "description": "Servicio productizado de manuales de marca para pymes y emprendedores españoles. Tres tiers con pricing público y IVA incluido.",
      "founder": {
        "@type": "Person",
        "name": "Fernando",
        "jobTitle": "Director"
      },
      "foundingDate": "2026",
      "areaServed": {
        "@type": "Country",
        "name": "España"
      },
      "knowsAbout": [
        "Manual de marca",
        "Brand guidelines",
        "Identidad corporativa",
        "Brandbook",
        "Identidad visual",
        "Sistema de marca"
      ],
      "slogan": "El Punto Final.",
      "sameAs": [
        "https://www.linkedin.com/company/tramarca",
        "https://tramarca.com",
        "https://tramarca.org"
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://tramarca.es/#localbusiness",
      "name": "Tramarca",
      "image": "https://tramarca.es/og-tramarca.jpg",
      "url": "https://tramarca.es",
      "telephone": "+34-XXX-XXX-XXX",
      "priceRange": "€€",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "[COMPLETAR]",
        "addressLocality": "Madrid",
        "postalCode": "[COMPLETAR]",
        "addressCountry": "ES"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 40.4168,
        "longitude": -3.7038
      },
      "openingHoursSpecification": [{
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }]
    },
    {
      "@type": "Service",
      "@id": "https://tramarca.es/#service",
      "serviceType": "Manual de marca",
      "name": "Servicio de manual de marca Tramarca",
      "description": "Manuales de marca productizados para pymes españolas en 3 tiers con pricing público IVA incluido y plazos publicados.",
      "provider": { "@id": "https://tramarca.es/#organization" },
      "areaServed": { "@type": "Country", "name": "España" },
      "category": "Brand guidelines design",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Tiers Tramarca",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Esencial",
            "description": "Manual de marca 20-25 páginas. Logo, paleta, tipografía, aplicaciones básicas. 1 revisión. Entrega 5 días.",
            "price": "490",
            "priceCurrency": "EUR",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": "490",
              "priceCurrency": "EUR",
              "valueAddedTaxIncluded": true
            },
            "availability": "https://schema.org/InStock",
            "url": "https://tramarca.es/precios#esencial"
          },
          {
            "@type": "Offer",
            "name": "Profesional",
            "description": "Manual de marca 30-40 páginas. Sistema completo, tono de voz, guidelines extendidas. 2 revisiones. Entrega 7 días.",
            "price": "990",
            "priceCurrency": "EUR",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": "990",
              "priceCurrency": "EUR",
              "valueAddedTaxIncluded": true
            },
            "availability": "https://schema.org/InStock",
            "url": "https://tramarca.es/precios#profesional"
          },
          {
            "@type": "Offer",
            "name": "Premium",
            "description": "Manual de marca 40-50 páginas. Estrategia + identidad verbal + guidelines exhaustivas + formación equipo. 2 revisiones. Entrega 10 días.",
            "price": "1990",
            "priceCurrency": "EUR",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": "1990",
              "priceCurrency": "EUR",
              "valueAddedTaxIncluded": true
            },
            "availability": "https://schema.org/InStock",
            "url": "https://tramarca.es/precios#premium"
          }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://tramarca.es/#website",
      "url": "https://tramarca.es",
      "name": "Tramarca",
      "publisher": { "@id": "https://tramarca.es/#organization" },
      "inLanguage": "es-ES"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Tramarca", "item": "https://tramarca.es" }
      ]
    }
  ]
}
</script>
```

### FAQPage schema (embed en `/` y `/precios`)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cuánto cuesta un manual de marca con Tramarca?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tramarca ofrece tres tiers con pricing público e IVA incluido: Esencial 490€ (20-25 páginas), Profesional 990€ (30-40 páginas) y Premium 1.990€ (40-50 páginas). Todos los precios son finales, sin sorpresas en la factura."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué incluye el IVA? ¿Hay costes ocultos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El IVA (21%) está incluido en los precios publicados. No hay costes ocultos. Cada tier detalla entregables, revisiones y plazos por adelantado."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tarda en entregarse un manual de marca?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Esencial: 5 días laborables. Profesional: 7 días. Premium: 10 días. Los plazos se cuentan desde el kickoff con el brief firmado."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuántas revisiones incluye cada tier?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Esencial incluye 1 revisión. Profesional y Premium incluyen 2 revisiones. Cada revisión cubre cambios acotados; cambios de alcance se presupuestan aparte."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué diferencia a Tramarca de una agencia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tramarca es un servicio productizado: scope cerrado, precio público, plazo publicado. Una agencia tradicional hace discovery, propuesta y custom pricing en semanas. Tramarca entrega en días con precio cerrado."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué es el Founding Customer Program?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Los primeros cinco clientes reciben su tier al precio full con extras adicionales (más páginas, branding verbal, formación) a cambio de un case study público, testimonial en vídeo y dos referidos."
      }
    },
    {
      "@type": "Question",
      "name": "¿En qué se diferencia Tramarca de Ash Proyectos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tramarca entrega más páginas a menor precio (Profesional 30-40pp por 990€ vs Ash Corporativo 20pp por 1.803€ con IVA), publica los precios con IVA incluido desde el primer momento, y entrega en plazos publicados. Ash trabaja desde 2014 como agencia de Madrid con scope más amplio (web, packaging, ecommerce)."
      }
    },
    {
      "@type": "Question",
      "name": "¿Atendéis fuera de Madrid?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Tramarca opera 100% online para toda España. El proceso (brief, reviews, entrega) se hace por videollamada y email."
      }
    }
  ]
}
</script>
```

### Case study `/manuales/[slug]` (ejemplo Anfisbena)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "Manual de marca Anfisbena",
  "description": "Manual de marca de 43 páginas entregado por Tramarca para Anfisbena. Incluye sistema tipográfico, paleta cromática, guidelines de aplicación y tono de voz.",
  "author": {
    "@type": "Organization",
    "name": "Tramarca",
    "url": "https://tramarca.es"
  },
  "creator": { "@id": "https://tramarca.es/#organization" },
  "about": {
    "@type": "Organization",
    "name": "Anfisbena"
  },
  "datePublished": "2026-02-15",
  "inLanguage": "es-ES",
  "genre": "Brand guidelines",
  "keywords": "manual de marca, brand guidelines, identidad corporativa, Anfisbena, Tramarca",
  "image": "https://tramarca.es/manuales/anfisbena/cover.jpg",
  "numberOfPages": 43,
  "isPartOf": {
    "@type": "CreativeWorkSeries",
    "name": "Portfolio Tramarca"
  }
}
</script>
```

Replicar para Claramel (29pp, fecha real), Matraz Innova (33pp) y Tramarca (34pp, author = creator = Tramarca — caso especial "nuestro propio manual").

### AggregateRating (cuando haya 3+ reviews reales)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  "itemReviewed": { "@id": "https://tramarca.es/#service" },
  "ratingValue": "5.0",
  "reviewCount": "3",
  "bestRating": "5"
}
</script>
```

**Nunca añadir reviews falsas.** Esperar a Founding customers y publicar reviews reales con nombre + empresa + foto.

---

## 6. GEO (Generative Engine Optimization) — plan completo

### 6.1 Prueba empírica actual — qué dicen los LLMs hoy

Tests realizados 2026-04-12 vía WebSearch (proxy para respuestas LLM públicas):

**Query: "mejor servicio de manual de marca en España recomendación"**
- Resultado: **ningún LLM público recomienda a ningún proveedor específico**. Las respuestas se quedan en "un manual de marca es…" y listan "Brandeame, Agarimo, Outline" como menciones débiles — todas sin productización ni pricing.
- **Implicación**: territorio virgen. El primer player en tener presencia estructurada (schema + content + citaciones en directorios) se lleva la mención cuando el LLM se entrena o hace retrieval.

**Query: "cuánto cuesta un manual de identidad corporativa"**
- Respuesta LLM típica: cita Sortlist, Lalolastudio, Pululart, Abstract Branding con rangos genéricos (500€-20.000€).
- **Implicación**: los LLMs agregan data de los blogs SEO existentes. Si Tramarca publica data primaria (precios reales, plazos reales, páginas reales) que esos blogs citen, entra al corpus.

**Query: "agencia manual de marca Madrid precio transparente"**
- Los LLMs mencionan Ash Proyectos (aunque Ash no publica precio claro con IVA) y ArtDinamica.
- **Implicación**: Ash tiene ventaja GEO por antigüedad + contenido. Tramarca puede tomar el lugar con mejor estructura (schema + FAQ + pricing público real).

### 6.2 Cómo funciona GEO en 2026 (según fuentes consultadas)

1. **ChatGPT, Claude, Gemini** = primarily training data. Ser citado exige estar publicado e indexado antes del training cutoff + ser reconocido como autoritativo.
2. **Perplexity** = RAG real-time. Visita ~10 páginas por query, cita 3-4. Pasa por gates: relevancia semántica, frescura, calidad estructural, autoridad, engagement.
3. **Google AI Overviews** = mix de training + retrieval de SERP. Quien rankea top 10 orgánico tiene probabilidad de ser citado.
4. **Factores citación**: patrones de cita previos, autoridad de dominio y entidad, estructura + fluency, stats y evidence, unique insights y quotes.
5. **Dato citable**: contenido con stats/quotes añadidas tiene **30-40% más visibilidad en respuestas AI** que contenido sin ellas. Keyword stuffing es penalizado por debajo del baseline.
6. **First 200 words** = crítico. La respuesta directa a la query primaria debe estar en los primeros 200 palabras de cada artículo.

### 6.3 Checklist GEO — 18 acciones concretas

| # | Acción | Dónde | Orden | Ejecuta | KPI éxito |
|---|---|---|---|---|---|
| 1 | Publicar Wikipedia-style "about" page con datos verificables | `/sobre` + FAQ schema | semana 1 | copywriter | página indexada |
| 2 | Schema Service + OfferCatalog + Offer con precios | `/` + `/precios` | semana 1 | dev | rich results test pass |
| 3 | FAQPage schema en `/` y `/precios` con 8 preguntas | `/` + `/precios` | semana 1 | dev | FAQ visible en SERP |
| 4 | Registro en Sortlist España (perfil completo + 3 case studies) | sortlist.es | semana 2 | Fernando | perfil aprobado |
| 5 | Registro en Clutch.co (perfil + categorías branding/design) | clutch.co | semana 2 | Fernando | perfil aprobado |
| 6 | Registro en Trustpilot con link en web | trustpilot.com | semana 2 | Fernando | 3+ reviews en 60d |
| 7 | Google Business Profile categoría "Graphic Designer" | google.com/business | semana 1 | Fernando | perfil verificado |
| 8 | Perfil LinkedIn empresa completo con publicaciones 2x/sem | linkedin.com | continuo | Fernando | 500 seguidores 90d |
| 9 | Artículos Medium (perfil Fernando) 1x/mes reescritos desde blog | medium.com | mensual | Fernando | 3 artículos pub |
| 10 | Respuestas Reddit r/branding, r/emprender | reddit.com | semanal | Fernando | 10 respuestas útiles/mes |
| 11 | Respuestas Quora queries manual de marca español | quora.com | semanal | Fernando | 5 respuestas/mes |
| 12 | Post LinkedIn con data primaria ("hicimos 4 manuales, aquí las stats") | LinkedIn | semana 3 | Fernando | 50+ reactions |
| 13 | Case study formato "answer-first" en cada `/manuales/[slug]` | site | semana 2 | copywriter | 4 publicados |
| 14 | Blog pilar "cuánto cuesta manual de marca 2026" con data citable | site | semana 3 | copywriter | 3000+ palabras |
| 15 | Estructura cada H2 = pregunta auto-contenida (passage ready) | todo blog | continuo | copywriter | cumplido en audit |
| 16 | Data primaria publicable: "Tramarca Report: precios reales manuales de marca España 2026" | site + PDF | mes 2 | Fernando | 10+ backlinks |
| 17 | Menciones en podcasts españoles de diseño/emprendimiento | externo | trimestre | Fernando | 2 podcasts |
| 18 | Monitorización mensual: spreadsheet con 20 queries en ChatGPT/Perplexity/Claude/Gemini | hoja cálculo | mensual | Fernando | tendencia menciones ↑ |

### 6.4 Contenido GEO-optimizado — plantilla de artículo

Estructura obligatoria para cada pieza pilar:

```
[TÍTULO — formato pregunta/promesa directa, con año]

[PÁRRAFO 1 — 50-80 palabras, respuesta directa a la query primaria con datos concretos]
Ej: "En España, un manual de marca profesional cuesta entre 490€ y 1.990€ IVA incluido con un servicio productizado. Agencias tradicionales cobran entre 5.000€ y 50.000€. Freelance en Malt: 800-1.500€. Este artículo desglosa qué pagas en cada tramo, con datos reales de 4 proyectos entregados por Tramarca en 2026."

[TABLA — pricing real, fuente citable]

[SECCIÓN H2: ¿Qué incluye un manual de marca profesional?]
[Stats: número de páginas por tier, número de revisiones, plazo en días laborables]

[SECCIÓN H2: ¿Por qué varía tanto el precio?]
[Factores concretos con números, no adjetivos]

[SECCIÓN H2: Tramarca vs Ash Proyectos vs agencias — comparativa]
[Comparison table literal con precios IVA incluido y sin IVA]

[SECCIÓN H2: Pregunta frecuente 1, 2, 3...]
[FAQ schema embebido]

[CITA AL AUTOR — Fernando, Director Tramarca, con foto, para E-E-A-T]

[FECHA ACTUALIZADO + SCHEMA Article con datePublished y dateModified]
```

### 6.5 Monitorización GEO — método manual (no hay tool fiable 2026)

**Spreadsheet mensual** con:

| Query | ChatGPT menciona Tramarca? | Perplexity cita Tramarca? | Claude menciona? | Gemini menciona? | Posición cita | Notas |
|---|---|---|---|---|---|---|

**20 queries a testear mensualmente**:
1. mejor servicio manual de marca en España
2. cuánto cuesta un manual de marca en España
3. agencia manual de marca Madrid con pricing público
4. manual de marca pyme precio 2026
5. servicio productizado manual de marca España
6. brand guidelines service Spain pricing
7. manual de identidad corporativa para startup España
8. quién ofrece manual de marca con precio público en España
9. comparar Ash Proyectos vs otros estudios manual de marca
10. manual de marca 500 euros España
11. manual de marca IVA incluido España
12. qué estudio hace manuales de marca productizados
13. manual de marca para pyme con plazos publicados
14. mejores estudios de branding pequeños en España
15. manual de marca barato pero profesional España
16. cómo elegir un servicio de manual de marca
17. ejemplo manual de marca profesional España 2026
18. cuánto cuesta un brandbook profesional
19. servicios de diseño de marca con precio público
20. agencia manual de identidad corporativa Madrid

**KPI GEO**: al cierre de T3 2026, Tramarca aparece citado en ≥10% de las 20 queries en al menos un LLM. Al cierre T4, ≥30%.

---

## 7. Competidor deep-dive SEO — Ash Proyectos

### Estructura SEO de Ash

SERP pull `site:ashproyectos.com` devuelve **>10 páginas indexadas clave**:
- Home (branding Madrid)
- `/en/creative-agency/` (versión inglés)
- `/contacto-agencia-diseno-web/`
- `/en/graphic-design/`
- `/en/design-agency-services/`
- `/en/digital-kit/` (Kit Digital — hack SEO muy inteligente)
- `/en/video-editing/`
- `/en/online-shop-design/`
- `/en/agencia-creativa-en-madrid/`
- `/agencia-diseno-web-madrid/`
- `/agencia-diseno-imagen-corporativa-empresas/`
- `/precios-branding/` (pricing)

### Keywords donde Ash rankea

- "agencia branding Madrid" (top 10)
- "imagen corporativa Madrid" (top 10)
- "diseño web Madrid" (top 20)
- "Kit Digital diseño" (top 10 — oportunidad que Tramarca podría copiar)
- "precio logotipo Madrid" (top 5, según briefing — confirmar en T2)

### Keywords donde Ash NO rankea (oportunidades)

- "manual de marca precio" → dominada por Sortlist/Lalolastudio
- "cuánto cuesta un manual de marca" → dominada por blogs informativos
- "manual de identidad corporativa España" → dominada por blogs
- "agencia manual de marca" → vacío comercial real
- "manual de marca IVA incluido" → vacío total

### Contenido que Tramarca debe replicar y superar

1. **Página geo-segmentada por ciudad**: Ash tiene `/agencia-diseno-web-madrid/`. Tramarca debe publicar `/madrid` con H1 "Manual de marca Madrid. Precio público. IVA incluido." (keyword angle distinto).
2. **Dual language**: Ash tiene versión inglesa completa (`/en/`). Tramarca debe planificar `/en/` para T4 con foco "brand manual service Spain" (low competition, high intent turístico/startup internacional).
3. **Página "Kit Digital"**: Ash atrae tráfico por programa público español. Tramarca debería evaluar si el manual de marca es elegible Kit Digital 2026 (la categoría "identidad corporativa" lo fue en 2022-2024).

### Backlinks Ash (visible signals)

Sin Ahrefs, búsqueda manual muestra Ash mencionado en:
- Sortlist (directorio)
- Clutch (dudoso, verificar)
- Perfiles LinkedIn de empleados
- Algunos blogs de diseño

**Conclusión**: Ash NO tiene authority link profile fuerte. Su ranking local Madrid se basa más en antigüedad de dominio + GBP + contenido geo que en backlinks. Tramarca puede competir en 6-12 meses con contenido superior + directorios agresivos + LinkedIn orgánico.

### Huecos Ash deja que Tramarca puede tomar

1. **Manual de marca como producto principal nombrado** — Ash lo mete dentro de packs.
2. **IVA incluido** — Ash no lo hace. Query "manual de marca iva incluido" = propiedad Tramarca.
3. **Founding program / urgency honesta** — Ash no tiene mecanismo de escasez.
4. **Case study de su propio manual** — Ash no publica su propio manual. Tramarca sí.
5. **Voz/carácter** — Ash es neutro corporativo. "El Punto Final." es propiedad intelectual SEO (branded search).

---

## 8. Local SEO

### ¿Merece la pena GBP? SÍ, con matices.

Aunque Tramarca opera 100% online, Google Business Profile desbloquea:
- Aparición en Google Maps para "agencia branding Madrid" / "diseño gráfico Madrid"
- Knowledge panel con foto, reseñas, horario
- Citaciones locales que retroalimentan autoridad de dominio
- **Señal GEO**: los LLMs (especialmente Gemini) rescrapean GBP como fuente autoritativa

### Configuración recomendada GBP

- **Nombre**: Tramarca
- **Categoría primaria**: "Graphic Designer" (en ES: "Diseñador gráfico")
- **Categoría secundaria**: "Marketing Agency" + "Branding Agency" si disponible
- **Dirección**: privada si es casa (marcar "no muestres mi dirección") — aún así permite appearance en local SERP
- **Área servida**: España (todas las comunidades autónomas)
- **Horario**: L-V 9-18
- **Descripción**: "Manuales de marca productizados para pymes españolas. 3 tiers con pricing público e IVA incluido. El Punto Final."
- **Servicios**: añadir cada tier como servicio con precio
- **Fotos**: 10+ (manuales abiertos, spreads, mockups, work-in-progress)
- **Reseñas**: pedir a cada Founding customer review GBP + Trustpilot

### Citations directorios españoles (orden prioridad)

1. Sortlist.es ← indispensable
2. Clutch.co ← GEO gold
3. Trustpilot.com ← reviews
4. Páginas Amarillas ← señal local vieja pero activa
5. Lafede.es / Comunidaddisenadores.com
6. Behance + Dribbble (perfil empresa) ← traffic + GEO
7. Goodfirms.co
8. DesignRush
9. ElMejorSitioWeb.com
10. Axonn / Empresite / Einforma (dirs corporativas)

### Estrategia por ciudad (geo-pages)

- **Madrid — P0** (T2): `/madrid` ataca Ash directamente
- **Barcelona — P1** (T3): `/barcelona` — tono editorial/artesanal para competir con Toormix/Agosto
- **Valencia — P2** (T3): `/valencia` — mercado menos saturado
- **Bilbao / Sevilla — P3** (T4): evaluar tras datos de conversión

Cada geo-page: H1 "Manual de marca [ciudad]. Precio público. IVA incluido." + copy específico ("Trabajamos con pymes de [ciudad] online") + 1-2 case studies relevantes + LocalBusiness schema con `areaServed: [ciudad]`.

---

## 9. Roadmap SEO trimestral

### T2 2026 (mayo-julio) — Foundation + pilares

**Mayo**
- Deploy web Next.js 16 con schema completo en `/` y `/precios` (semana 1-2)
- Google Search Console + GA4 + Plausible setup (semana 2)
- GBP + Sortlist + Clutch + Trustpilot (semana 3)
- Publicar 4 case studies `/manuales/[slug]` con schema CreativeWork (semana 3-4)
- Publicar pilar #1: "Cuánto cuesta un manual de marca en España 2026" (semana 4)

**Junio**
- Publicar pilar #2: "Qué es un manual de marca: guía 2026"
- Publicar pilar #3: "Cómo hacer un manual de marca paso a paso"
- Publicar `/madrid` geo-landing
- Primer Founding customer aceptado → review GBP + case study actualizado
- LinkedIn 2 posts/semana

**Julio**
- Publicar 4 artículos cluster (manual pyme, manual startup, diferencia brandbook, ejemplos pdf)
- Glosario 10 términos
- Primer podcast español (gestión + aparición)
- Medium cross-post mensual

**KPIs T2**:
- 15+ páginas indexadas
- 0→10 keywords ranqueando top 50
- 3+ reviews públicas (GBP + Trustpilot)
- 100+ impresiones/día Google Search Console
- 2 Founding customers cerrados

### T3 2026 (agosto-octubre) — Cluster expansion + authority

**Agosto**
- Publicar comparativa "Tramarca vs Ash Proyectos" (GEO gold)
- Publicar `/para-startups` + `/para-restaurantes`
- 4 artículos cluster más
- Glosario a 20 términos

**Septiembre**
- **Tramarca Report 2026**: data primaria publicable (precios reales, plazos reales, feedback real). PDF descargable + blog post. Este es el **activo GEO maestro**: los blogs SEO lo citarán, y con ello entra al corpus LLM.
- `/barcelona` y `/valencia` geo-landings
- Campaña digital PR: pitch el Report a Brandemia, Gràffica, La Criatura, Control, Domestika blog
- 4 artículos cluster

**Octubre**
- Auditoría SEO completa (usar `/seo-audit`) → fixes
- Primeros backlinks de calidad (post report)
- Blog pilar #4: "Manual de marca para pymes españolas: la guía definitiva 2026"
- Plantillas descargables lead magnet (`/recursos/plantilla-brief`, `/recursos/checklist-manual`)

**KPIs T3**:
- 40+ páginas indexadas
- 30+ keywords top 50, 10+ top 20, 3+ top 10
- 10 Founding slots → completos (programa cerrado)
- 10+ reviews públicas
- 10+ backlinks dofollow
- Primera mención documentada en LLM (ChatGPT o Perplexity)
- 500+ impresiones/día GSC

### T4 2026 (noviembre-enero 2027) — CRO + topical authority

**Noviembre**
- CRO: A/B tests en `/precios` (hero copy, orden tiers, Founding badge)
- Glosario a 30 términos
- Publicar 4 artículos cluster más
- Versión EN `/en/` launch

**Diciembre**
- Pilar #5: "Tramarca Portfolio Report 2026: 20 manuales entregados"
- Campaña backlink activa (outreach guest posts)
- Plantilla Notion de brief cliente como lead magnet premium
- Podcast #2 + #3

**Enero 2027**
- Auditoría anual SEO completa
- Renovar pilares 2026 con datos 2027
- Plan T1 2027

**KPIs T4**:
- 70+ páginas indexadas
- 50+ keywords top 50, 20+ top 20, 8+ top 10
- 20+ reviews públicas
- 25+ backlinks dofollow
- 30%+ de las 20 queries GEO mencionan Tramarca
- 1.500+ impresiones/día GSC
- 10+ conversiones orgánicas/mes

---

## 10. KPIs y tracking

### Herramientas stack (T2-T3: free only)

| Tool | Coste | Qué mide | Cuándo |
|---|---|---|---|
| Google Search Console | 0€ | Impresiones, CTR, queries reales, indexación, errores | obligatorio, día 1 |
| GA4 | 0€ | Sesiones, conversiones, funnel | obligatorio, día 1 |
| Plausible | 9€/mes | Analytics sin cookies, privacy-first | recomendado día 1 |
| Google Keyword Planner | 0€ (con cuenta Ads) | Volumen real keywords ES | semana 1 |
| Google Trends | 0€ | Estacionalidad, tendencias | semanal |
| Google Rich Results Test | 0€ | Validar schema | cada deploy |
| Google PageSpeed Insights | 0€ | Core Web Vitals | cada deploy |
| Ahrefs / Semrush | 100-200€/mes | Backlinks, keyword tracking avanzado | T3 si hay budget |
| LLM monitoring | manual | Menciones en ChatGPT/Perplexity/Claude/Gemini | mensual, spreadsheet |

### Events GA4 (conversiones)

```js
// eventos custom a configurar
gtag('event', 'view_pricing')          // pageview /precios
gtag('event', 'click_tier', { tier: 'esencial|profesional|premium' })
gtag('event', 'click_cta_hero', { destination: 'pricing|portfolio' })
gtag('event', 'click_founding_badge')
gtag('event', 'submit_contact_form', { tier_interested: '...' })
gtag('event', 'download_lead_magnet', { asset: 'plantilla-brief|checklist' })
gtag('event', 'scroll_depth_90')       // lectura completa de blog pilar
```

Definir como **conversions en GA4**: `submit_contact_form`, `click_tier`, `download_lead_magnet`.

### Dashboard de reporting mensual

Métricas mandatorias:
1. **Organic sessions** (GA4) — target T4: 1.500/mes
2. **Organic conversions** (GA4) — target T4: 10+/mes
3. **Keywords top 10** (GSC) — target T4: 8
4. **Keywords top 20** (GSC) — target T4: 20
5. **Impresiones diarias** (GSC) — target T4: 1.500+
6. **CTR orgánico medio** (GSC) — target: >3%
7. **Backlinks dofollow** (manual o Ahrefs) — target T4: 25+
8. **Reviews públicas** (GBP + Trustpilot + Clutch) — target T4: 20+
9. **LLM mentions rate** (spreadsheet manual) — target T4: 30%
10. **Core Web Vitals** — mantener verde (LCP<2.5s, CLS<0.1, INP<200ms)

---

## Apéndices

### A. Anti-patrones SEO a evitar

1. **NO** usar `/es/` prefix en el dominio `.es`
2. **NO** duplicar contenido entre `/` y `/inicio` (canonical siempre a `/`)
3. **NO** aceptar backlinks de PBN o link farms
4. **NO** escribir blog posts <1.500 palabras para keywords P0 (serán weak content)
5. **NO** noindex accidental en staging → verificar producción con `curl -I` antes de deploy
6. **NO** schema markup que no refleje el contenido real (Google penaliza spammy schema)
7. **NO** meter reseñas falsas. Riesgo reputacional + schema penalty
8. **NO** targeting "manual de marca barato" — bajaría positioning

### B. Dependencias con otros agentes/skills

- `creative-director`: ya entregó Brand Tokens + voz. SEO consume sin modificar.
- `conversion-copywriter`: recibe este documento como SEO Brief. Devuelve Copy Deck que respeta keywords primarias + voz.
- `growth-strategist`: valida pricing y Founding Program. Sin cambios a pricing esperables en T2.
- `/landing-page`: consume Brand Tokens + SEO Brief + Copy Deck para construir.
- `/seo-audit`: se ejecuta post-deploy de cada pieza. Este documento marca qué auditar.

### C. Archivos adicionales

- `03-seo-geo-strategy.md` — este documento (maestro)
- Próximos: `04-copy-deck.md` (conversion-copywriter), `05-implementation.md` (dev handoff)

---

## Fuentes consultadas (2026-04-12)

- SERP manual investigation Google.es (10 queries, región España)
- [Sortlist — Precio manual identidad corporativa 2025](https://www.sortlist.es/blog/precio-manual-de-identidad-corporativa/)
- [Lalolastudio — Cuánto cuesta un Manual de Marca](https://lalolastudio.com/precio-manual-de-marca/)
- [Ash Proyectos — Home](https://ashproyectos.com/) + [pricing](https://ashproyectos.com/precios-branding/)
- [Pululart — Coste manual identidad corporativa](https://pululart.com/blog/cuanto-cuesta-elaborar-manual-identidad-corporativa/)
- [Abstract Branding — Precio logotipo España 2026](https://www.abstractbranding.com/blog-de-branding/precio-logotipo-espana-2025)
- [Similarweb — GEO Complete 2026 Guide](https://www.similarweb.com/blog/marketing/geo/what-is-geo/)
- [Backlinko — Generative Engine Optimization](https://backlinko.com/generative-engine-optimization-geo)
- [Enrich Labs — GEO Complete 2026 Guide](https://www.enrichlabs.ai/blog/generative-engine-optimization-geo-complete-guide-2026)
- [ZipTie — How Perplexity Answers Work](https://ziptie.dev/blog/how-perplexity-ai-answers-work/)
- [arxiv 2311.09735 — GEO paper original](https://arxiv.org/abs/2311.09735)
- [Firebrand — GEO Best Practices 2026](https://www.firebrand.marketing/2025/12/geo-best-practices-2026/)
- Reportes internos: `01-competitive-intel.md`, `02-competitive-intel-ronda2.md`
