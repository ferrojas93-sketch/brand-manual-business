# Tramarca · SEO Strategy 2026

**Source of truth operativa · Director de estrategia: seo-strategist**
**Fecha emisión: 2026-04-18 · Vigencia: hasta 2026-07-18 (revisar trimestralmente)**
**Audiencia: Fernando (Director BI, perfil estratégico no técnico)**

---

## Resumen ejecutivo

Tramarca es un estudio editorial español que **solo** hace manuales de marca, con precio cerrado público (490€/990€/1.990€ IVA incluido) y plazos publicados (5/7/10 días laborables). Es una propuesta de valor radicalmente diferenciada en un mercado español dominado por:

1. **Agencias con pricing opaco** (JohnAppleman, Summa, The Brand Doctor): 6.000€–18.000€ + IVA, discovery workshops, propuesta custom.
2. **Freelances individuales** (Logocrea, Lalolastudio, Grafikeo): 800€–3.500€, packs abiertos, sin plazo publicado.
3. **Plataformas low-cost** (Canva, Fiverr, 99designs): ~80€, plantilla sin sistema.

Esta posición única — **scope cerrado en pricing público** — es también nuestra cuña SEO. Ninguna de las tres clases anteriores puede contestar con autoridad a la query **"manual de marca precio"**: las agencias ocultan precios, los freelance los negocian, las plataformas comercializan plantillas. Tramarca publica la tabla.

Este documento define:

- **Keyword universe** de 52 queries priorizadas en 5 buckets de intent
- **Análisis SERP competitivo** para 6 queries core
- **Intent map** página por página (7 URLs actuales + blog a construir)
- **Content calendar 90 días** con 13 piezas redactables
- **10 ideas concretas** para la sección "Análisis" del blog
- **Schema markup plan** (qué añadir, qué mantener)
- **Riesgos SEO** reconocidos con mitigaciones
- **Priority list** semana a semana

La tesis estratégica: **ganar primero el territorio transactional** (comprador con intención de pagar), después expandir a **territorio informational** (autoridad categoría), y finalmente a **territorio inspirational** (link bait con análisis de manuales famosos — donde el SEO se encuentra con la autoridad cultural).

---

## 1. Keyword universe · 52 queries priorizadas

### Notas de honestidad metodológica

Los volúmenes y KD que figuran abajo son **estimaciones** derivadas de:
- SERP density (nº resultados, competencia, ads presentes)
- Google autocomplete + related searches
- Ubersuggest free-tier data cruzada con SERP observacional
- Comparación con queries análogas en inglés (UK/US) ajustadas por tamaño mercado España

**Volúmenes marcados "estimado"** son orden de magnitud, no cifra exacta. Volúmenes **"verificable"** solo los daremos cuando tengamos Google Keyword Planner conectado (pendiente Fernando crear cuenta Google Ads, 10 minutos) o 90 días de datos en Search Console.

**KD (Keyword Difficulty)** usa escala 0-100 estándar Ahrefs/Ubersuggest. En España branding sector, 40+ ya es competitivo (head keywords), 20-40 es sweet spot long-tail, <20 son gemas.

### Bucket A · Transactional (comprador con intención de pagar) · 12 queries

Estas son las queries donde Tramarca debe estar entre los 3 primeros. Son el pipeline de leads.

| Query | Intent | Volumen/mes (est.) | KD (est.) | Target URL | Prioridad |
|---|---|---|---|---|---|
| manual de marca precio | Transactional | 260–480 | 38 | /precios | **P0** |
| cuánto cuesta un manual de marca | Transactional | 170–320 | 34 | /blog/cuanto-cuesta-manual-marca | **P0** |
| manual de identidad corporativa precio | Transactional | 140–210 | 36 | /precios | **P0** |
| tarifa manual de marca | Transactional | 40–70 | 22 | /precios | P1 |
| precio manual identidad visual | Transactional | 70–110 | 28 | /precios | P1 |
| presupuesto manual de marca | Transactional | 50–90 | 24 | /contacto | P1 |
| hacer manual de marca para mi empresa | Transactional | 90–140 | 30 | /precios | P1 |
| manual de marca barato | Transactional | 30–60 | 16 | /precios (Esencial anchor) | P2 |
| manual de marca online | Transactional | 110–180 | 32 | / (home) | P1 |
| manual de marca profesional | Commercial/Tx | 90–160 | 34 | /precios | P1 |
| agencia manual de marca Madrid | Transactional local | 40–80 | 26 | /sobre | P1 |
| estudio manual de marca | Transactional | 50–90 | 24 | / (home) | P1 |

**Racional del P0**: las 3 P0 capturan el ~60% de la demanda transaccional. Si rankeamos top-5 en estas tres, el pipeline de leads transaccional está resuelto. Todas apuntan a `/precios` o a un blog post que lleva a `/precios`.

**Gap táctico**: "manual de marca barato" tiene baja KD (16) pero alta calidad de lead dudosa. Incluir pero no priorizar — Esencial 490€ es ya nuestra posición "accesible".

### Bucket B · Commercial investigation (comparando opciones) · 10 queries

El comprador sabe que quiere un manual, está comparando. Aquí ganamos con **transparencia comparativa**.

| Query | Intent | Volumen/mes (est.) | KD (est.) | Target URL | Prioridad |
|---|---|---|---|---|---|
| manual de marca vs brand book | Commercial | 70–120 | 20 | /blog/manual-marca-vs-brand-book | **P0** |
| diferencia brand book y manual de marca | Commercial | 50–90 | 18 | /blog/manual-marca-vs-brand-book | P1 |
| agencia vs freelance manual de marca | Commercial | 30–60 | 14 | /blog/agencia-vs-freelance | P1 |
| manual de marca vs guía de estilo | Commercial | 40–70 | 16 | /blog/manual-marca-vs-guia-estilo | P2 |
| mejores estudios branding España | Commercial | 50–90 | 42 | /sobre | P2 |
| Tramarca opiniones | Navigational/Comm | 10–30 | 8 | /sobre | P2 |
| alternativa a agencia de branding | Commercial | 20–40 | 18 | /blog/alternativa-agencia-branding | P2 |
| brand book precio España | Commercial | 40–70 | 24 | /precios | P1 |
| contratar diseñador manual de marca | Commercial | 30–60 | 22 | /contacto | P1 |
| manual de marca llave en mano | Commercial | 20–50 | 14 | /precios | P2 |

**Racional**: "manual de marca vs brand book" es la query commercial más potente — responde una duda real de comprador y nos permite posicionar Tramarca como respuesta correcta al caso de uso "necesito documento técnico operativo", no brand book emocional.

### Bucket C · Informational (aprendiendo qué es / cómo hacer) · 15 queries

Volumen grande, intent educational. Aquí jugamos para **autoridad de categoría** y feed del funnel.

| Query | Intent | Volumen/mes (est.) | KD (est.) | Target URL | Prioridad |
|---|---|---|---|---|---|
| qué es un manual de marca | Informational | 880–1.300 | 46 | /blog/que-es-manual-de-marca | **P0** |
| cómo hacer un manual de marca | Informational | 720–1.100 | 48 | /blog/como-hacer-manual-marca-paso-a-paso | **P0** |
| qué incluye un manual de marca | Informational | 320–520 | 32 | /anatomia | **P0** |
| partes de un manual de marca | Informational | 210–320 | 28 | /anatomia | P1 |
| componentes manual de marca | Informational | 140–240 | 26 | /anatomia | P1 |
| manual de marca paso a paso | Informational | 170–280 | 34 | /blog/como-hacer-manual-marca-paso-a-paso | P1 |
| estructura manual de identidad corporativa | Informational | 90–160 | 24 | /anatomia | P1 |
| guía de estilo marca ejemplo | Informational | 110–190 | 28 | /blog/guia-estilo-marca | P2 |
| manual de marca pdf | Informational (top-of-funnel) | 390–620 | 38 | /manuales | P1 |
| plantilla manual de marca | Informational | 480–720 | 44 | /blog/plantilla-vs-custom | P2 |
| cómo estructurar manual de marca | Informational | 70–120 | 20 | /anatomia | P1 |
| qué es brand book | Informational | 260–420 | 40 | /blog/manual-marca-vs-brand-book | P1 |
| tono de voz marca | Informational | 190–320 | 36 | /blog/tono-voz-marca | P2 |
| manual de identidad corporativa qué es | Informational | 320–500 | 40 | /blog/que-es-manual-de-marca | P1 |
| cómo definir identidad visual | Informational | 140–230 | 30 | /blog/definir-identidad-visual | P2 |

**Racional del P0**: "qué es un manual de marca" y "cómo hacer un manual de marca" son las dos queries de mayor volumen informational en el mercado español. Brandemia rankea #1 en ambas con contenido de 2020–2022. No vamos a desplazarla a Brandemia en 6 meses, pero sí a llegar top-10 y capturar el 10–20% del tráfico restante.

"qué incluye un manual de marca" es el cuerpo natural para **/anatomia** (16 capítulos × 48 componentes). Esta query es nuestra — nadie tiene la profundidad documental que tenemos.

### Bucket D · Navigational (buscan Tramarca o nuestro portfolio) · 5 queries

Baja volumen hoy, crecerá con brand building.

| Query | Intent | Volumen/mes (est.) | KD (est.) | Target URL | Prioridad |
|---|---|---|---|---|---|
| tramarca | Navigational | <50 (crece con awareness) | <10 | / | P0 branded |
| tramarca.es | Navigational | <20 | <10 | / | P0 |
| tramarca manual de marca | Navigational | <20 | <10 | / | P0 |
| tramarca estudio | Navigational | <20 | <10 | /sobre | P0 |
| manual tramarca pdf | Navigational | <10 | <10 | /manuales/tramarca | P1 |

**Acción obligada**: verificar Google Search Console, someter sitemap (ya creado `/app/sitemap.ts`), y monitorizar que estas branded queries no devuelvan resultados dispersos. Sitelinks en SERP aparecen tras 3–6 meses de indexación consistente.

### Bucket E · Inspirational / Link bait (demanda cultural, backlinks) · 10 queries

Territorio donde el SEO se encuentra con la autoridad editorial. Bajo volumen transaccional directo, pero **alto valor estratégico**: links orgánicos, shares sociales, referencias desde blogs de diseño, futuro Google News publisher.

| Query | Intent | Volumen/mes (est.) | KD (est.) | Target URL | Prioridad |
|---|---|---|---|---|---|
| mejores manuales de marca famosos | Inspirational | 110–190 | 22 | /blog/mejores-manuales-marca-historia | P1 |
| NASA graphics standards manual español | Inspirational | 40–80 | 14 | /blog/nasa-graphics-standards-manual | P1 |
| logo FedEx flecha oculta | Inspirational | 260–420 | 30 | /blog/fedex-flecha-oculta | P1 |
| logos con mensajes ocultos | Inspirational | 680–1.100 | 42 | /blog/logos-secretos-tipograficos | P1 |
| Mailchimp tono de voz | Inspirational | 50–90 | 16 | /blog/mailchimp-voice-guide | P2 |
| Oatly branding rebrand | Inspirational | 90–160 | 28 | /blog/oatly-voz-irreverente | P2 |
| Stripe Press diseño editorial | Inspirational | 40–80 | 18 | /blog/stripe-press-editorial | P2 |
| Slack rebrand Pentagram | Inspirational | 70–120 | 24 | /blog/slack-rebrand-2019 | P2 |
| Baskin Robbins 31 logo | Inspirational | 110–180 | 22 | /blog/baskin-robbins-31 | P2 |
| British Rail logo 1965 | Inspirational | 50–90 | 18 | /blog/british-rail-1965 | P2 |

**Racional**: "logos con mensajes ocultos" es la query inspirational de mayor volumen — curiosidad universal. Es difícil (KD 42) pero un artículo editorial de 3.000 palabras con 10 logos analizados (FedEx, Amazon, Baskin-Robbins, Toblerone, Tour de France, LG, Beats, NBC, Hyundai, Carrefour) puede rankear top-5 en 4–6 meses porque la mayoría de resultados actuales son listicles débiles.

**Nota estratégica**: el bucket E es donde Tramarca se diferencia de agencias. JohnAppleman no escribe sobre NASA 1976. Nosotros sí. Esto construye **autoridad cultural** que se transfiere a las queries transactional.

---

## 2. SERP competitive analysis · Top 6 queries

Metodología: análisis de los dominios que rankean top-10 hoy para cada query, basado en WebSearch proxy-a-SERP (Google bloquea scraping directo). Identificamos 3 cosas por query: **quién rankea**, **con qué tipo de contenido**, **dónde hay hueco para Tramarca**.

### 2.1 · "manual de marca precio"

**Top dominios observados**:
1. sortlist.es — "Precio de un manual de identidad corporativa en 2025" · blog post SEO con ranges amplios
2. lalolastudio.com — "Cuánto cuesta un Manual de Marca" · landing de servicio con pack descriptions
3. oliverpuente.com — "Paquetes de creación de manual de marca" · pricing tiers (pero no precio público)
4. pululart.com — "¿Cuánto cuesta elaborar un manual de identidad corporativa?" · blog post explicativo
5. logocrea.com — "Manual de identidad corporativa" · landing con "desde 400€"
6. grafikeo.es — "¿Cuánto cuesta un Branding?" · blog post wide-scope branding
7. abstractbranding.com — "¿Cuánto cuesta diseñar un logotipo profesional en 2026?" · off-intent (logo, no manual)
8. talosabogados.com — registro de marca (off-intent, no manual)

**SERP features**: ausencia de featured snippet robusto (Google muestra snippet de Sortlist pero genérico "entre 500€ y 5.000€"). People Also Ask presente con 4 preguntas. No shopping ads. No image pack destacado.

**Competitive difficulty evaluation**: KD ~38. Sortlist tiene fortaleza de dominio (DA 72) pero contenido genérico. Lalolastudio y Logocrea tienen Product schema implementado → rich results. Lo que **ningún resultado tiene**: precio cerrado IVA incluido publicado con plazo publicado con revisiones especificadas.

**Gap para Tramarca**:
- **Hueco #1**: tabla comparativa con 4 columnas (Agencia · Freelance · Canva · Tramarca) con cifras duras. Manual v4 p09 ya tiene este copy — solo hay que web-ificar.
- **Hueco #2**: Product schema con 3 offers (490/990/1990€) con `valueAddedTaxIncluded: true`. Ya implementado en `/lib/schema.ts`.
- **Hueco #3**: FAQ schema con 8–12 preguntas sobre pricing (ya tenemos 13 en schema). Rich results de acordeón.
- **Hueco #4**: `Product` + `AggregateOffer` en lugar de solo `Service` — Google prefiere Product para pricing tangible.

**Plan de ataque**: `/precios` page + blog post `/blog/cuanto-cuesta-manual-marca` que linke a `/precios`. Query cover con ambas URLs (page principal transaccional, blog post informational — evita cannibalization si blog usa intent informational ["cuánto cuesta" explicativo] y page usa intent transactional [tabla + CTA pay]).

### 2.2 · "cuánto cuesta un manual de marca"

**Top dominios observados**:
1. pululart.com — post 2023
2. sortlist.es — post 2025 (mismo URL que 2.1)
3. lalolastudio.com — landing
4. wolfagenciademarketing.com — "Cuánto cobrar por un manual de identidad corporativa según el mercado actual" · target designers, no clients
5. markagrafica.com — producto físico "A4 12pag"
6. tarifario.org — directorio aranceles
7. logocrea.com — producto
8. oliverpuente.com — paquetes
9. redproducciones.org — blog post

**SERP features**: featured snippet presente (Sortlist). PAA con 4 preguntas ("¿Cuánto cuesta diseñar un manual de marca?", "¿Cuánto vale un logotipo con manual?", "¿Es caro un manual?", "¿Qué hay que pagar a un diseñador gráfico?"). No local pack.

**Competitive difficulty evaluation**: KD ~34. Más baja que 2.1 porque es conversacional long-tail. Oportunidad real de featured snippet.

**Gap para Tramarca**:
- **Hueco de featured snippet**: responder la pregunta en los primeros 40–60 palabras del post con una cifra concreta ("En España 2026, un manual de marca profesional cuesta entre 490€ y 1.990€ IVA incluido en estudios productizados como Tramarca, entre 800€ y 3.500€ con freelance independientes, y entre 6.000€ y 18.000€ + IVA con agencias tradicionales").
- **Hueco de PAA coverage**: incluir H2s que respondan las 4 PAA literalmente.
- **Hueco de tabla estructurada**: markup table (no imagen) con los 4 segmentos de mercado.

**Plan de ataque**: pieza 2.500–3.000 palabras en `/blog/cuanto-cuesta-manual-marca` con FAQ schema + HowTo schema ("Cómo calcular el presupuesto de tu manual de marca"). CTA primario hacia `/precios`. Target: featured snippet + top-3 orgánico.

### 2.3 · "manual de marca ejemplos"

**Top dominios observados (resultados dominados por PDFs institucionales descargables)**:
1. inexmoda.org.co (PDF)
2. renata.edu.co (PDF)
3. imart.es (PDF)
4. techo.org (PDF)
5. nunsys.com (PDF)
6. utadeo.edu.co (PDF)
7. euskadi.eus (PDF)
8. incibe.es (PDF)
9. champagnat.org (PDF)
10. emiliomoro.com (PDF)

**SERP features**: image pack fuerte en top de resultados (miniaturas de portadas). No featured snippet. PAA menor.

**Competitive difficulty evaluation**: query con intent dual (quiero VER ejemplos vs quiero CONTRATAR para que me hagan uno). SEO-wise, los PDFs tienen alto dwell time pero baja CTR de conversion. KD ~42 pero **la competencia es baja para intent comercial**.

**Gap para Tramarca**:
- **Hueco crítico**: NADIE ofrece ejemplos de manuales CON la opción de contratar ese mismo estudio. Tramarca tiene 5 manuales en portfolio — el nuestro (v4 58pp) descargable tras email capture + 4 logos+sector del resto (Anfisbena, Claramel, Matraz, Shamusic).
- **Hueco técnico**: `/manuales` necesita `ItemList` schema de ejemplos + `CreativeWork` schema por cada manual individual (hoy no hay `/manuales/[slug]` pública para 4 de 5 — decisión estratégica consciente).
- **Hueco de contenido**: pieza editorial "15 manuales de marca reales analizados" que incluya los 5 de Tramarca + 10 famosos (NASA, FedEx, Mailchimp…) = link bait + proof of craft.

**Plan de ataque**:
1. Corto plazo: optimizar `/manuales` como landing "ejemplos manual de marca" con 5 cards + embedded preview del manual Tramarca v4.
2. Medio plazo: pieza pilar `/blog/mejores-manuales-marca-historia` con 15 ejemplos analizados (tramarca + 10 famosos + 4 portfolio).
3. Ambas páginas interlink.

### 2.4 · "qué es un manual de marca" (long-tail elegida por nosotros)

**Top dominios observados**:
1. brandemia.org — autoridad histórica del sector español, post de referencia
2. 20sagencia.com
3. tuatara.co — LATAM pero rankea en España
4. maxcf.es
5. tiendanube.com — wide reach blog
6. lllu.es
7. etinor.com
8. ingenima.com
9. drminsky.eu

**SERP features**: featured snippet ocupado por Brandemia. PAA con 4 preguntas. Sin image pack fuerte.

**Competitive difficulty evaluation**: KD ~46. Brandemia es la autoridad — no desplazamos en 6 meses. Realista: top-10 en 4 meses, top-5 en 8-10 meses.

**Gap para Tramarca**:
- Brandemia responde "qué es" en modo enciclopedia. Nosotros respondemos "qué es desde la perspectiva de quién lo fabrica" — diferencial de POV.
- Podemos superar a los #3-#10 con contenido mejor estructurado, más específico, con ejemplos reales del portfolio.
- Information Gain play: añadir datos que nadie más tiene (ej: "el manual de marca promedio en España tiene 24 páginas, los nuestros 30–58" + microestadística de cómo cada capítulo se usa).

**Plan de ataque**: pieza 2.000–2.500 palabras con Article + FAQPage schema. Estructura: definición canon (40 palabras featured-snippet-ready) → 3 diferencias clave con brand book/guía estilo → anatomía resumida (link a `/anatomia`) → "qué no es" → ejemplos reales → FAQ 8 preguntas. CTA `/precios` + `/anatomia`.

### 2.5 · "manual de marca vs brand book" (elegida por alta ratio intent/volumen)

**Top dominios observados**:
1. branzai.com — "Diferencias entre un BrandBook y un Manual de Marca" (post de 2018 pero aún top)
2. platzi.com — wide reach plataforma educación
3. marketing-trending.com
4. franciscotorreblanca.es
5. weareshifta.com (Elisava)
6. arrontesybarrera.com
7. redactorasdigitales.com
8. hubspot.es — blog traducido
9. cei.es

**SERP features**: sin featured snippet claro. PAA limitado. Image pack comparativas.

**Competitive difficulty evaluation**: KD ~20. Content gap real — los resultados top son posts de 2018 con info redundante y sin update. Oportunidad de **publicar la pieza canon 2026**.

**Gap para Tramarca**:
- Tabla comparativa detallada (manual técnico vs brand book emocional) con 10+ filas de criterios.
- Decision tree "¿cuál necesitas?" con 3-4 preguntas que llevan al tipo correcto.
- Honestidad: Tramarca hace **manuales de marca**, no brand books inspiracionales puros. Explicarlo es ventaja, no desventaja.
- Ejemplos visuales: screenshot de un brand book (Stripe Press, Nike) junto a screenshot del manual Tramarca v4.

**Plan de ataque**: pieza 1.800–2.200 palabras con comparación table, Article schema, FAQ schema. CTA final según diagnóstico: manual→`/precios`, brand book puro→ (sinceridad: "no es lo que hacemos, recomendamos X").

### 2.6 · "logos con mensajes ocultos" (elegida por volumen + vectores link bait)

**Top dominios observados**:
1. logowski.com — "Hidden Meanings in Logos: FedEx, Amazon, Toyota, NASA & More"
2. edition.cnn.com — "Follow the arrow: Hidden designs in famous logos"
3. inkbotdesign.com
4. creativebloq.com
5. 1000logos.net
6. designermurat.com — listicle largo
7. logohistories.com — contenido experto editorial
8. freelogoservices.com
9. imjustcreative.com

**SERP features**: image pack dominante. Video results (YouTube shorts). PAA con curiosidades. Featured snippet contentado por CNN.

**Competitive difficulty evaluation**: KD ~42. Competitivo globalmente pero **en español la competencia es mucho más débil**. Inkbot, CNN, CreativeBloq son inglés. En es-ES el top es contenido traducido débil.

**Gap para Tramarca**:
- **Hueco linguístico**: la query en español tiene pocos competidores de calidad. Tramarca puede ser el recurso canónico español sobre logos con mensajes ocultos.
- **Hueco visual**: la mayoría de posts usan stock images. Tramarca puede crear infografías editoriales propias (SVG) con annotations — reusables, compartibles, citables.
- **Hueco de profundidad**: incluir 15+ logos (FedEx, Amazon, Baskin-Robbins 31, Toblerone, Tour de France, LG→Pac-Man, NBC→pavo real, Beats→auricular, Hyundai→H+handshake, Carrefour, Pinterest→P+pin, Vaio→onda, Unilever→U compuesto, FormulaOne→1, Goodwill→G+sonrisa) y para cada uno: origen, designer, año, significado.

**Plan de ataque**: pieza 3.500–4.000 palabras con 15 logos analizados. Schema Article + ImageObject + (posible) VideoObject si añadimos un embed. Esta pieza es la **pieza con mayor potencial de backlinks orgánicos** — candidata a outreach a Brandemia, Marketing Directo, Dcuello para link exchange.

---

## 3. Intent map · Página por página

Cada URL actual de tramarca.es tiene un primary keyword, 3 secondary y content gaps identificados contra lo que rankea la competencia.

### `/` · Home

- **Primary**: "Tramarca" (navegacional/branded) + "estudio manual de marca"
- **Secondary**: "manual de marca online", "manual de marca profesional", "manual de marca España"
- **Content gaps a cerrar**:
  - Añadir eyebrow/microcopy arriba del hero con la entity descriptor canónica ("Estudio editorial español · solo manuales de marca · precio cerrado IVA incl.") — mejora el snippet en branded queries.
  - Sección proof-of-craft (manual v4 visible) está bien — es mejor que cualquier competencia.
  - Internal links: añadir link a `/blog` una vez exista (si no existe hoy, flag para FASE 5).
- **Schema actual**: Organization + WebSite + LocalBusiness + Service + FAQPage (14 Q). Completo y correcto.
- **Meta title actual vs recomendado**: verificar que H1 home incluye "manual de marca" explícitamente.

### `/precios`

- **Primary**: "manual de marca precio"
- **Secondary**: "cuánto cuesta manual de marca", "manual de identidad corporativa precio", "brand book precio España"
- **Content gaps a cerrar**:
  - **BLOCKER**: schema actual es `Service + hasOfferCatalog`. Debe escalar a `Product + AggregateOffer` para competir con Logocrea/Lalolastudio en rich results. Ver sección 5.
  - Tabla comparativa mercado (agencia / freelance / Canva / Tramarca) con cifras concretas — ya tenemos en manual v4 p09, faltaría replicar en web.
  - Calculator/selector interactivo "¿Qué tier necesitas?" (3 preguntas → recomendación) — incrementa dwell time 40–60%.
  - FAQ sección visible (no solo schema) con 8 preguntas clave.
  - Internal link a `/blog/cuanto-cuesta-manual-marca` (cuando exista) — anchor "Análisis completo del mercado".
- **Meta title recomendado**: "Manual de marca · Precio cerrado 490€ / 990€ / 1.990€ IVA incl. — Tramarca" (76 chars, largo pero legible)
- **Meta description recomendada**: "Manual de marca con precio cerrado publicado. 3 tiers desde 490€ IVA incluido. Plazo 5-10 días laborables. Sin discovery opaco, sin costes ocultos." (160 chars)

### `/anatomia`

- **Primary**: "qué incluye un manual de marca"
- **Secondary**: "partes manual de marca", "componentes manual de marca", "estructura manual identidad corporativa"
- **Content gaps a cerrar**:
  - **Estructura 16 capítulos** alineada con manual v4 (hoy dice 12 en `lib/anatomia.ts` — discrepancia doc audit M1, pendiente FASE 4 del ULTRAPLAN).
  - Cada capítulo debe tener expand con: definición · por qué importa · ejemplo real del portfolio · profundiza (link blog).
  - Schema HowTo por capítulo (steps = componentes). 16 HowTos = 16 rich results candidatos.
  - FAQ schema propio (no confundir con FAQ home) — 6–8 preguntas específicas de anatomía.
  - Breadcrumb schema.
- **Meta title recomendado**: "Anatomía de un manual de marca · 16 capítulos, 48 componentes — Tramarca"
- **Meta description recomendada**: "Lo que incluye un manual de marca profesional: 16 capítulos y 48 componentes documentados. Con ejemplos reales del portfolio Tramarca."

### `/manuales`

- **Primary**: "manual de marca ejemplos"
- **Secondary**: "ejemplos brand book", "manuales de marca reales", "casos manual identidad corporativa"
- **Content gaps a cerrar**:
  - `ItemList` schema con los 5 manuales (aunque 4 no tengan detalle público, el item list puede existir).
  - Introducción de 150–200 palabras con H1 que contiene "ejemplos de manual de marca" — hoy posiblemente falta.
  - Destacar manual v4 Tramarca como "ejemplo canónico" visible y descargable (gated email).
  - Eliminar links rotos si `/manuales/[slug]` estaban en sitemap antes de FASE 0.
- **Meta title recomendado**: "Ejemplos de manuales de marca · Portfolio Tramarca — 5 manuales reales"
- **Meta description**: "Portfolio editorial de manuales de marca reales: Anfisbena, Claramel, Matraz, Shamusic, Tramarca. Manual Tramarca v4 (58pp) descargable."

### `/manuales/tramarca` (único detalle público)

- **Primary**: "manual Tramarca pdf"
- **Secondary**: "manual de marca editorial ejemplo", "brand guidelines ejemplo real"
- **Content gaps**:
  - CreativeWork + DigitalDocument schema.
  - Preview de 6–8 spreads del manual (hoy pocas imágenes, verificar).
  - CTA download gated email (ya implementado `/api/lead/manual-request`).
  - Cross-sell: "Si te interesa este manual, nuestro tier Premium parte de 1.990€ → /precios".
- **Meta title**: "Manual de marca Tramarca · 58 páginas, edición única — Caso real Premium"

### `/sobre`

- **Primary**: "estudio branding Madrid" / "Tramarca estudio"
- **Secondary**: "estudio manual de marca España", "Tramarca opiniones", "equipo Tramarca"
- **Content gaps**:
  - AboutPage schema (ya tenemos en `aboutPageSchema()`).
  - Person schema para founder(s) — fortalece entity consensus.
  - Manifesto corto (200 palabras) con la entity descriptor canónica: "Tramarca es un estudio de diseño editorial en Madrid especializado exclusivamente en manuales de marca…".
  - Testimonials con Review schema una vez tengamos 3+ (hoy prematuro — memoria ya decide no hacerlo).
- **Meta title**: "Sobre Tramarca · Estudio editorial de manuales de marca en Madrid"

### `/contacto`

- **Primary**: "presupuesto manual de marca" / "contacto Tramarca"
- **Secondary**: "solicitar propuesta manual marca", "contratar manual de marca"
- **Content gaps**:
  - ContactPage schema (ya tenemos).
  - Clarificar respuesta SLA ("Te respondemos en 24h laborables con propuesta").
  - Trust signals: factura electrónica, IVA incluido, 2 formas de pago.
- **Meta title**: "Contacto Tramarca · Pide tu propuesta — Respuesta en 24h"

### `/blog` (a construir · FASE 5 ULTRAPLAN)

- **Primary landing**: "blog Tramarca manual marca"
- **Secondary**: ninguna querry head — la home del blog es hub, no target keyword.
- **Content gaps críticos**: inexistencia actual = gap total.
- **Schema**: Blog + BreadcrumbList. Cada post: Article + Person (autor) + Organization (publisher) + FAQPage si aplica.
- **Arquitectura info**: 4 categorías (Guías · Análisis · Curiosidades · Proceso). RSS feed obligatorio.

---

## 4. Content calendar 90 días · 13 piezas

Formato: cada pieza es **redactable** con el brief aquí. Copywriter consume esta tabla → produce draft → SEO strategist review → QA → publish.

**Principio priorización**: orden = (demand signals × intent-match × content-gap) / difficulty. Primero transactional alto-valor, luego educational para autoridad, finalmente inspirational para link building.

### Pieza 01 · Semana 1-2

- **Keyword primary**: cuánto cuesta un manual de marca
- **Secondary**: manual de marca precio España, tarifa manual de marca, cuánto vale un manual de identidad corporativa
- **URL**: `/blog/cuanto-cuesta-manual-marca-espana-2026`
- **Title tag**: "Cuánto cuesta un manual de marca en España 2026 · Guía de precios real — Tramarca" (89 chars · acortar a 60-70 en implementación: "Cuánto cuesta un manual de marca en España 2026 — Tramarca")
- **H1**: "Cuánto cuesta un manual de marca en España (2026)"
- **Meta description**: "Rangos reales de precio para un manual de marca en España en 2026: agencias 6.000-18.000€, freelance 800-3.500€, estudios productizados 490-1.990€ IVA incl." (158 chars)
- **Target length**: 2.500-3.000 palabras
- **Schema obligado**: Article + FAQPage (12 Q) + HowTo ("Cómo calcular el presupuesto de tu manual de marca" 4 pasos)
- **Internal links outgoing**: `/precios` (2x), `/anatomia`, `/manuales`, `/blog/manual-marca-vs-brand-book` (cuando exista)
- **Internal links incoming necesarios**: desde `/precios` (anchor "Análisis completo del mercado"), desde home FAQ, desde `/blog` hub
- **CTA objetivo**: "Ver los 3 tiers en /precios"
- **Categoría**: Guías
- **Featured snippet play**: primer párrafo 40-60 palabras con respuesta directa.

### Pieza 02 · Semana 3-4

- **Keyword primary**: qué es un manual de marca
- **Secondary**: qué es un brandbook, definición manual identidad corporativa, manual de marca significado
- **URL**: `/blog/que-es-un-manual-de-marca`
- **Title tag**: "Qué es un manual de marca · Definición, propósito y anatomía — Tramarca"
- **H1**: "Qué es un manual de marca (y qué no es)"
- **Meta description**: "Un manual de marca es un documento operativo de 20-50 páginas que fija cómo se usa una identidad visual y verbal. Qué incluye, qué no, y cómo se diferencia de un brand book."
- **Target length**: 2.000-2.500 palabras
- **Schema**: Article + FAQPage (8 Q)
- **Internal links outgoing**: `/anatomia`, `/blog/manual-marca-vs-brand-book`, `/manuales`
- **Internal links incoming**: desde `/anatomia`, desde home, desde `/blog` hub, desde todas las demás piezas como referencia canon
- **CTA objetivo**: "Ver anatomía completa en /anatomia"
- **Categoría**: Guías

### Pieza 03 · Semana 5-6

- **Keyword primary**: manual de marca vs brand book
- **Secondary**: diferencia brand book manual de marca, qué es un brand book, brand guidelines vs brandbook
- **URL**: `/blog/manual-marca-vs-brand-book`
- **Title tag**: "Manual de marca vs Brand Book · Cuál necesita tu empresa — Tramarca"
- **H1**: "Manual de marca vs Brand Book: cuál necesita tu empresa"
- **Meta description**: "Brand book es inspiracional. Manual de marca es operativo. Tabla comparativa completa y decision tree para elegir cuál necesitas."
- **Target length**: 1.800-2.200 palabras
- **Schema**: Article + FAQPage (6 Q)
- **Internal links outgoing**: `/precios`, `/anatomia`, `/blog/que-es-un-manual-de-marca`
- **Internal links incoming**: desde `/precios` FAQ, desde `/blog/que-es-un-manual-de-marca`
- **CTA objetivo**: "Si necesitas manual, ver /precios. Si buscas brand book puro, te recomendamos X."
- **Categoría**: Guías

### Pieza 04 · Semana 7-8

- **Keyword primary**: cómo hacer un manual de marca
- **Secondary**: manual de marca paso a paso, crear manual identidad corporativa, proceso creación manual marca
- **URL**: `/blog/como-hacer-manual-marca-paso-a-paso`
- **Title tag**: "Cómo hacer un manual de marca paso a paso · Proceso editorial — Tramarca"
- **H1**: "Cómo hacer un manual de marca: proceso de 8 pasos"
- **Meta description**: "El proceso real de hacer un manual de marca profesional: brief, auditoría, sistema visual, aplicaciones, validación. 8 pasos con ejemplos del portfolio Tramarca."
- **Target length**: 2.500-3.200 palabras
- **Schema**: Article + HowTo (8 steps) + FAQPage (6 Q)
- **Internal links outgoing**: `/anatomia` (anchor por cada paso), `/manuales`, `/precios`
- **Internal links incoming**: desde `/anatomia`, desde `/blog/que-es`, desde home FAQ
- **CTA objetivo**: "¿Prefieres que lo hagamos nosotros? /precios"
- **Categoría**: Proceso

### Pieza 05 · Semana 9-10 · PRIMERA PIEZA DE ANÁLISIS (link bait)

- **Keyword primary**: NASA graphics standards manual español
- **Secondary**: NASA manual de marca 1976, NASA brand guidelines historia, manual NASA Worm
- **URL**: `/blog/nasa-graphics-standards-manual-1976`
- **Title tag**: "NASA Graphics Standards Manual (1976) · El manual de marca que definió una agencia — Tramarca"
- **H1**: "NASA Graphics Standards Manual: el libro de reglas de 1976 que lo cambió todo"
- **Meta description**: "Richard Danne y Bruce Blackburn diseñaron el manual de marca de NASA en 1975. 90 páginas que redefinieron cómo documentar una identidad visual. Análisis editorial completo."
- **Target length**: 2.800-3.500 palabras
- **Schema**: Article + ImageObject (múltiples scans del manual, dominio público Archive.org)
- **Internal links outgoing**: `/manuales/tramarca` ("un manual editorial español 50 años después"), `/anatomia`
- **Internal links incoming**: desde `/blog/mejores-manuales-marca-historia` (pieza posterior), desde home si se destaca
- **Backlinks target**: outreach a Brandemia, Marketing Directo, Gràffica, Experimenta, Foroalfa, Dcuello
- **CTA objetivo**: soft — "Ver Tramarca v4, un manual editorial que sigue la misma tradición"
- **Categoría**: Análisis

### Pieza 06 · Semana 11-12

- **Keyword primary**: logo FedEx flecha oculta
- **Secondary**: FedEx flecha escondida, Lindon Leader FedEx, logos con mensajes ocultos (coverage parcial)
- **URL**: `/blog/fedex-flecha-oculta-historia`
- **Title tag**: "La flecha oculta del logo FedEx · Historia del rediseño de 1994 — Tramarca"
- **H1**: "La flecha oculta del logo FedEx: el momento eureka de Lindon Leader"
- **Meta description**: "Lindon Leader en Landor Associates descubrió por accidente la flecha entre E y X. 40 premios después, es el espacio negativo más famoso del diseño. Análisis completo."
- **Target length**: 1.800-2.400 palabras
- **Schema**: Article + ImageObject
- **Internal links outgoing**: `/blog/logos-secretos-tipograficos` (cuando exista), `/blog/nasa-graphics-standards-manual-1976`
- **Backlinks target**: outreach + shares en Threads/LinkedIn (share-friendly)
- **Categoría**: Análisis

### Pieza 07 · Semana 13 · Cierre trimestre · PIEZA HUB

- **Keyword primary**: mejores manuales de marca famosos
- **Secondary**: manuales de marca históricos, manuales de marca icónicos, ejemplos manual de marca históricos
- **URL**: `/blog/mejores-manuales-marca-historia`
- **Title tag**: "15 manuales de marca que hicieron historia · Análisis editorial — Tramarca"
- **H1**: "15 manuales de marca que cambiaron el diseño editorial"
- **Meta description**: "De NASA 1976 a Mailchimp digital: 15 manuales de marca icónicos analizados con detalle editorial. El canon de la documentación de identidad."
- **Target length**: 4.000-5.000 palabras (pieza pilar)
- **Schema**: Article + ImageObject (15) + ItemList
- **Entradas (pre-hubs a piezas futuras)**:
  1. NASA (1976) → link interno a pieza 05
  2. British Rail (1965)
  3. IBM (1956-1972, Paul Rand)
  4. Lufthansa (1963, Otl Aicher)
  5. FedEx (1994) → link interno a pieza 06
  6. Apple (2001, fuente discreta)
  7. MasterCard (2016, Pentagram)
  8. Mailchimp voice guide
  9. Slack (2019, Pentagram)
  10. Oatly (ongoing rebrand, Forsman & Bodenfors)
  11. Stripe Press (editorial canon)
  12. MoMA (2004, Matthew Carter)
  13. Mexico '68 Olympics (Lance Wyman)
  14. City of Melbourne (2009, Landor)
  15. Tramarca v4 (2026) — cierre provocador: "el canon español contemporáneo"
- **Internal links outgoing**: todas las piezas 05-06 + futuras + `/manuales/tramarca`
- **CTA objetivo**: soft — "Si quieres un manual editorial en esa tradición: /precios"
- **Categoría**: Análisis (pieza pilar)

### Piezas 08-13 · Semanas 14-26 (post-90-días pero backlog)

- **08**: Partes de un manual de marca (`/blog/partes-manual-marca`) — feeder `/anatomia`. Categoría Guías.
- **09**: Agencia vs freelance vs estudio productizado (`/blog/agencia-vs-freelance-manual-marca`) — commercial intent. Categoría Proceso.
- **10**: Logos con mensajes ocultos · 15 ejemplos (`/blog/logos-secretos-tipograficos`) — pieza link bait major. Categoría Curiosidades.
- **11**: Mailchimp Voice & Tone · El manual que democratizó el tono de marca (`/blog/mailchimp-voice-guide`). Categoría Análisis.
- **12**: Plantilla vs custom · Cuándo basta una plantilla de manual de marca (`/blog/plantilla-vs-custom`). Categoría Guías.
- **13**: Baskin Robbins 31 · El logo que era un juego (`/blog/baskin-robbins-31`). Categoría Curiosidades.

---

## 5. Schema implementation plan

### Estado actual en `/lib/schema.ts` (verificado 2026-04-18)

Implementado:
- Organization + WebSite + LocalBusiness (home)
- Service + hasOfferCatalog con 3 Offers (home y /precios)
- FAQPage con 13 preguntas (home)
- AboutPage helper
- ContactPage helper
- CollectionPage helper
- CreativeWork helper (manual individual)
- TechArticle helper
- BreadcrumbList helper

**Diagnóstico**: arquitectura schema sólida pero hay upgrades clave pendientes para rich results competitivos.

### Decisiones claras

#### Decisión 1 · `/precios` → escalar Service a Product + AggregateOffer

**Por qué**: Google prefiere Product schema para pricing tangible. Lalolastudio y Logocrea ya lo implementan → ganan rich results con precio, stars, availability. Tramarca queda en desventaja con solo Service.

**Acción**: añadir en `/lib/schema.ts` un nuevo helper `productSchema()` que genere:

```
Product: {
  name: "Manual de marca Tramarca",
  description: "...",
  brand: Organization,
  offers: AggregateOffer {
    lowPrice: 490,
    highPrice: 1990,
    priceCurrency: "EUR",
    offerCount: 3,
    offers: [3 Offer como ya tenemos]
  }
}
```

Embeber en `/precios` page como `jsonLdGraph(productSchema(), breadcrumbListSchema(...))`.

**Mantener**: el Service schema actual en home. Product schema en /precios. No duplicar.

#### Decisión 2 · Mantener FAQPage pero **partir** en 2

**Por qué**: 14 preguntas en home FAQPage es demasiado. Mejor señalizar 6-8 en home (pricing + proceso) y las restantes mover a página específica:
- 6-8 en home (las de mayor intent transactional)
- 4-5 en `/precios` (específicas pricing)
- 3-4 en `/anatomia` (específicas componentes)
- 3-4 en `/sobre` (específicas empresa)

Google respeta mejor FAQPage segmentados por contexto que uno gigante.

**Acción**: refactor `faqSchema` en 4 constantes temáticas.

#### Decisión 3 · Añadir HowTo schema en `/anatomia` (16 capítulos = 16 HowTos)

**Por qué**: cada capítulo del manual es un "cómo hacer X componente de marca". HowTo schema permite rich result con steps, imagen, tool, estimatedCost.

**Acción**: helper `howToSchema({chapter, steps[], image})` que renderice por capítulo.

**Riesgo**: Google penaliza HowTo de baja calidad (recetas spam). Mitigación: solo implementar si cada chapter tiene contenido robusto (mínimo 200 palabras + 4 steps con imágenes).

#### Decisión 4 · Añadir `DigitalDocument` + `DownloadAction` en `/manuales/tramarca`

**Por qué**: el manual v4 PDF gated es un DigitalDocument descargable. Schema específico permite Google entender que hay un asset downloadable tras lead capture.

**Acción**: nuevo helper `digitalDocumentSchema()` con fileFormat, fileSize, contentSize, downloadUrl (puede apuntar al endpoint `/api/lead/manual-request`).

#### Decisión 5 · NO implementar (aún)

- **Review / AggregateRating**: mantener decisión previa — implementar solo cuando tengamos 5+ reviews reales con nombre y empresa.
- **Course schema**: la "formación al equipo" del Premium ya NO está en la web (se eliminó en audit). No implementar.
- **Event schema**: no hay eventos recurrentes.
- **Video schema**: todavía no hay videos en web.
- **hreflang**: mantener es-ES only hasta tener tracción de 6+ meses.

### Schema priority list

| # | Acción | Página | Impacto estimado | Esfuerzo |
|---|---|---|---|---|
| 1 | Añadir Product + AggregateOffer | /precios | Alto (rich results pricing) | 1h |
| 2 | Partir FAQPage en 4 | home, /precios, /anatomia, /sobre | Medio | 2h |
| 3 | Añadir Person schema founder | /sobre | Bajo-medio (entity consensus) | 30min |
| 4 | DigitalDocument en /manuales/tramarca | /manuales/tramarca | Medio | 45min |
| 5 | HowTo por capítulo | /anatomia | Alto pero depende FASE 4 | 3h (tras restruct) |
| 6 | Article + FAQPage en cada post blog | /blog/[slug] | Alto (por pieza) | 30min/pieza |
| 7 | BlogPosting root en /blog | /blog | Medio | 30min |

---

## 6. Ideas concretas · Sección "Análisis" del blog (10+)

Piezas diseñadas para **link bait + autoridad editorial**. Formato: Título propuesto · Keyword target · Longitud estimada · Por qué funciona.

### 1. NASA Graphics Standards Manual (1976) · El libro que redefinió documentar una identidad

- **Keyword target**: NASA graphics standards manual español
- **Longitud**: 2.800-3.500 palabras
- **Por qué funciona**: keyword de baja KD (14) en español. Manual de dominio público → podemos usar escaneos (Archive.org). Historia rica (Danne + Blackburn + "Worm" logo + rescinded 1992 + reissue 2015). Backlinks potential muy alto de blogs de diseño.

### 2. La flecha oculta de FedEx · 40 premios y un accidente feliz

- **Keyword target**: logo FedEx flecha oculta
- **Longitud**: 1.800-2.400 palabras
- **Por qué funciona**: 260-420 búsquedas/mes, curiosidad universal. Historia linda (Lindon Leader, Landor, 90s). Share-friendly en LinkedIn/Threads. Es el "hook" perfecto para el funnel: curiosidad → Tramarca como autoridad → /precios.

### 3. Baskin-Robbins · El 31 escondido en BR

- **Keyword target**: Baskin Robbins 31 logo
- **Longitud**: 1.200-1.600 palabras
- **Por qué funciona**: curiosity content rompe-internet. KD 22. Brand internacional reconocible en España. Formato listicle-en-depth único frente a los listicles genéricos.

### 4. Toblerone · El oso de Berna que casi nadie ve

- **Keyword target**: logo Toblerone oso Berna
- **Longitud**: 1.400-1.800 palabras
- **Por qué funciona**: alineado con bucket E. Brand cotidiano. Historia de Berna (capital del oso) + diseño. Imagen compartible.

### 5. Amazon · La sonrisa que va de A a Z

- **Keyword target**: logo Amazon sonrisa A-Z significado
- **Longitud**: 1.500-2.000 palabras
- **Por qué funciona**: brand máximo reach, alta volumen búsqueda, historia clara (Turner Duckworth 2000). Interesante: link a filosofía Jeff Bezos + brand promise.

### 6. British Rail (1965) · El sistema gráfico que sobrevivió a la privatización

- **Keyword target**: British Rail logo 1965 historia
- **Longitud**: 2.200-2.800 palabras
- **Por qué funciona**: obra canon del diseño industrial UK. Gerald Barney + Design Research Unit. Doble flecha icónica. Link bait absoluto en comunidad diseño. Poca competencia en español.

### 7. Mailchimp Voice & Tone · El manual que democratizó el tono de marca

- **Keyword target**: Mailchimp tono de voz
- **Longitud**: 2.000-2.400 palabras
- **Por qué funciona**: referencia obligada en cualquier conversación sobre brand voice. styleguide.mailchimp.com es accesible. Nos da credibilidad en el territorio voz (diferencial Tramarca).

### 8. Stripe Press · Cuando una empresa tecnológica construye su editorial

- **Keyword target**: Stripe Press diseño editorial
- **Longitud**: 1.800-2.400 palabras
- **Por qué funciona**: referencia máxima del diseño editorial contemporáneo. Alinea Tramarca con territorio "editorial + tech serio". Audiencia objetivo (founders tech) consume Stripe Press.

### 9. Slack 2019 · El rediseño más odiado (y necesario) de la década

- **Keyword target**: Slack rebrand Pentagram
- **Longitud**: 2.000-2.600 palabras
- **Por qué funciona**: Pentagram + Michael Bierut = autoridad máxima. Rebrand mediático (Fast Company, Dezeen). Debate público → engagement. Lección sobre rebranding valiente.

### 10. Oatly · El rebrand que inventó la voz "anti-marca"

- **Keyword target**: Oatly branding rebrand voz
- **Longitud**: 2.000-2.400 palabras
- **Por qué funciona**: caso icónico de brand voice disruption. 12x crecimiento post-rebrand. Ejemplo de que el manual de marca NO es solo visual — es voz.

### 11. IBM (1956-1972) · Cuando Paul Rand hizo del logo una lección

- **Keyword target**: Paul Rand IBM logo historia
- **Longitud**: 2.400-3.000 palabras
- **Por qué funciona**: figura canon máxima del diseño del s.XX. Referencia cultural universal. Imagen del logo ya es patrimonio. Muy citable.

### 12. Lufthansa (1963) · Otl Aicher y el sistema gráfico alemán

- **Keyword target**: Lufthansa manual de marca Otl Aicher
- **Longitud**: 2.200-2.800 palabras
- **Por qué funciona**: otro canon absoluto (Ulm School + Otl Aicher). Pocos posts en español. Profundidad brutal (manual 1963 es textbook en Royal College of Art).

### 13. MasterCard 2016 · Cuando quitar el nombre fortaleció la marca

- **Keyword target**: MasterCard logo rediseño Pentagram
- **Longitud**: 1.600-2.000 palabras
- **Por qué funciona**: rediseño reciente, mediático. Pentagram otra vez. Historia breve (pasar de wordmark a signo puro) → lección clara sobre madurez de marca.

**Recomendación de secuencia**: arrancar con **1 (NASA)** — máxima autoridad generada por la pieza inaugural. Luego **2 (FedEx)** — accesibilidad y volumen. Luego **7 (Mailchimp)** — posiciona tono de voz, diferencial Tramarca. Luego **10 (Oatly)** — conecta con pymes contemporáneas. Hub (pieza 07 del calendar) consolida las piezas individuales.

---

## 7. Riesgos SEO actuales

### Riesgo 1 · Autoridad de dominio baja (DA estimado <10)

**Descripción**: tramarca.es es dominio de 2026, sin backlinks relevantes aún. Brandemia (DA 46+), Sortlist (DA 72), HubSpot (DA 93) tienen ventajas estructurales permanentes.

**Impacto**: queries de alta KD (qué es un manual de marca, cómo hacer) no rankeamos top-10 en 90 días. Realista: top-20 → top-10 en 6-9 meses.

**Mitigación**:
- Focalizar el primer trimestre en queries de KD 14-28 (bucket A transactional P1-P2 + bucket E inspirational).
- Link-building orgánico vía piezas análisis (NASA, FedEx) → outreach a Brandemia, Marketing Directo, Gràffica.
- Listings: inclusión en Awwwards, Behance, FWA (si visual work lo merita).
- Google Business Profile verificado con foto, reviews.
- Directorios España: Sortlist listing, Clutch (internacional pero crece en España), DesignRush.

### Riesgo 2 · PDF 58MB gated reduce dwell time / aumenta bounce

**Descripción**: manual Tramarca v4 en `/manuales/tramarca` descargable tras lead gate. PDF 58MB es pesado → usuarios pueden abandonar. Además, el gating reduce tráfico que ve el contenido real.

**Impacto**: dwell time bajo, bounce rate alto, señal negativa para Google en page quality.

**Mitigación**:
- Versión "light" del manual (150 DPI vs 300 DPI) → 15-20MB (en FASE 6 ULTRAPLAN).
- Preview inline con 8-12 spreads (SVG/WebP optimizados) ANTES del gate. Usuario entiende el valor antes de dar email.
- Schema DigitalDocument con fileSize declarado → Google no penaliza si lo avisas.
- CRITICAL: verificar que `/manuales/tramarca` render tenga texto indexable (no solo imágenes del PDF).

### Riesgo 3 · Keyword cannibalization latente /precios vs blog post cuánto cuesta

**Descripción**: `/precios` apunta a "manual de marca precio" transactional. `/blog/cuanto-cuesta-manual-marca` apunta a la variante pregunta-en-lenguaje. Si Google fusiona intents, las dos páginas se canibalizarán.

**Impacto**: ninguna de las dos rankea top-3 porque Google se confunde.

**Mitigación**:
- `/precios` primary = "manual de marca precio" + secondary variants breves, intent claro transactional (CTA dominante).
- `/blog/cuanto-cuesta-manual-marca` primary = "cuánto cuesta un manual de marca", intent informational (2.500+ palabras de análisis, CTA soft al final).
- Internal link claro desde blog → /precios (no desde /precios → blog).
- Canonical tags distintos, no cross-canonical.

### Riesgo 4 · Brandemia autoridad sectorial inatacable a 12 meses

**Descripción**: Brandemia rankea #1 en ~60% de queries informational del sector. Dominio 2008, DA alto, backlinks masivos.

**Impacto**: no podremos capturar el Google answer box en "qué es un manual de marca" o "cómo hacer manual de marca" en Year 1.

**Mitigación**:
- **No atacar frontalmente**: no replicar el contenido de Brandemia con ligeras variaciones. Producir Information Gain — ángulos, datos o POV que Brandemia no tiene.
- **Estrategia de colaboración**: proponer artículo invitado en Brandemia (máxima autoridad referring domain). Contenido: caso Tramarca v4 o análisis NASA.
- **Territorio propio**: dominar queries donde Brandemia no compite (ej: "manual de marca precio cerrado IVA incluido", "estudio productizado manual marca").

### Riesgo 5 · Entity disambiguation: "Tramarca" homónimo con otras empresas

**Descripción**: "Tramarca" puede colisionar con marcas comerciales homónimas (hay empresas italianas y LATAM con nombre similar o Tramarca Autotrasporti). En Knowledge Graph, Google puede no consolidar la entity correctamente.

**Impacto**: branded searches diluidas, knowledge panel no disponible en año 1.

**Mitigación**:
- `sameAs` ampliado: LinkedIn Tramarca (único canal social de Tramarca — decisión Fernando 2026-04-18). Añadir perfiles profesionales verificados: Behance, Awwwards, Brand New (cuando tengamos backlinks editoriales). **No** Twitter/X/Instagram/Threads — no formamos presencia ahí por decisión estratégica.
- Founding date declarado en Organization schema (ya tenemos 2026).
- Consistencia NAP (Name-Address-Phone) en Google Business Profile + todas las mentions.
- Artículos con menciones enlazadas a tramarca.es ("estudio español Tramarca") — construcción entity link.
- Publicar Press Release de fundación en Europa Press, Marketing Directo, Dcuello (incluso si es soft).

---

## 8. Implementation priority list · 12 semanas

Cada semana es un bloque accionable. Si se completa una semana por adelantado, pull-forward la siguiente.

### Semana 1 · Foundations técnicas

- [ ] Google Search Console verificado, sitemap submitted (app/sitemap.ts ya creado).
- [ ] Google Business Profile creado en Madrid, categoría "Graphic Designer" + secondary "Marketing Agency".
- [ ] Google Analytics 4 + GTM verificados, eventos conversion declarados (form submit, download manual, CTA click).
- [ ] Schema upgrade #1: Product + AggregateOffer en `/precios`.
- [ ] Schema upgrade #2: partir FAQPage en 4 (home, /precios, /anatomia, /sobre).

### Semana 2 · Pieza 01 draft + launch

- [ ] Blog infrastructure: `app/blog/page.tsx` + `app/blog/[slug]/page.tsx` + RSS feed `app/feed.xml/route.ts` + MDX o data-driven.
- [ ] Pieza 01 "Cuánto cuesta un manual de marca en España 2026" — brief al conversion-copywriter.
- [ ] Revisar draft pieza 01 (SEO strategist review).
- [ ] Publicar Pieza 01.

### Semana 3 · Local SEO push

- [ ] Directory listings: Sortlist.es, Clutch, DesignRush, Páginas Amarillas (si gratis), QDQ.
- [ ] Schema upgrade #3: Person schema founder en /sobre.
- [ ] Mejorar `/precios` con tabla comparativa mercado (4 columnas).
- [ ] Iniciar Pieza 02 "Qué es un manual de marca".

### Semana 4 · Pieza 02 + amplificación Pieza 01

- [ ] Publicar Pieza 02.
- [ ] Internal linking Pieza 01 ↔ Pieza 02 ↔ /precios ↔ /anatomia.
- [ ] LinkedIn post sobre Pieza 01 (Fernando + founder).
- [ ] Revisar primeras impressions en Search Console (señal temprana indexación).

### Semana 5 · Schema DigitalDocument + Pieza 03

- [ ] Schema upgrade #4: DigitalDocument en /manuales/tramarca.
- [ ] Draft Pieza 03 "Manual de marca vs Brand Book".
- [ ] QA cross-browser home + /precios + /anatomia (verificar rich results en Schema.org Validator).

### Semana 6 · Pieza 03 launch + Anatomía restruct (FASE 4 ULTRAPLAN)

- [ ] Publicar Pieza 03.
- [ ] Iniciar restructuración /anatomia 12→16 capítulos.
- [ ] Schema HowTo por capítulo (cuando restruct complete).

### Semana 7 · Pieza 04 draft

- [ ] Anatomía 16 caps publicada.
- [ ] Schema upgrade #5: HowTo en /anatomia.
- [ ] Draft Pieza 04 "Cómo hacer un manual de marca paso a paso".

### Semana 8 · Pieza 04 launch + primer link building outreach

- [ ] Publicar Pieza 04.
- [ ] Outreach email a 3 blogs: Brandemia (artículo invitado propuesta), Marketing Directo (PR launch Tramarca), Gràffica (caso v4).

### Semana 9 · Pieza 05 NASA (primera análisis)

- [ ] Draft Pieza 05 "NASA Graphics Standards Manual 1976" con imágenes Archive.org.
- [ ] Verificar dominio público + attribution correcta.
- [ ] Revisar draft.

### Semana 10 · Pieza 05 launch + Pieza 06 draft

- [ ] Publicar Pieza 05.
- [ ] Outreach específico Pieza 05: Foroalfa, Experimenta, Dcuello (comunidad diseño hispanohablante).
- [ ] Draft Pieza 06 "La flecha oculta de FedEx".

### Semana 11 · Pieza 06 launch

- [ ] Publicar Pieza 06.
- [ ] Social amplification: **solo LinkedIn** (decisión estratégica 2026-04-18, no presencia en otras redes). Post largo + carousel con imagen anotada + commentary.
- [ ] Review métricas 90-días-inicial: impressions Search Console, CTR, posiciones promedio.

### Semana 12 · Pieza 07 HUB + cierre trimestre

- [ ] Draft Pieza 07 "15 manuales de marca que hicieron historia" (pieza pilar).
- [ ] Internal link audit: cada pieza 01-06 debe linkar a Pieza 07.
- [ ] Publicar Pieza 07.
- [ ] Retrospective Q2: qué rankeó, qué no, ajustar calendar Q3.

---

## 9. Métricas de éxito · Qué trackear

### KPIs leading (semana 1-12)

- Impressions totales Search Console: objetivo **20.000+/mes para mes 3** (partiendo de ~500/mes mes 1).
- Queries ranqueadas en top-20: objetivo **80+ queries para mes 3**.
- CTR promedio: objetivo **>2%** (baseline España es ~1.8% para queries branded, ~3.5% para commercial).
- Impressions queries branded "tramarca*": objetivo **crecimiento 3x mes 3 vs mes 1**.

### KPIs lagging (mes 3-6)

- Top-10 posiciones en 5+ queries transactional (bucket A). Objetivo mes 6.
- Top-5 posición en "manual de marca precio" o "cuánto cuesta manual de marca". Objetivo mes 6-9.
- Backlinks de referring domains nuevos: **8-12** para mes 6.
- Leads atribuidos a orgánico (UTM): **10%+ del pipeline total** para mes 6.

### Anti-métricas · Señales de alarma

- Bounce rate /precios >70% → problema de intent mismatch o UX.
- Dwell time blog posts <40s → problema de calidad de contenido.
- Core Web Vitals LCP >2.5s → problema técnico blocker rich results.
- Queries canibalizadas (misma URL rankea para queries de diferente intent) → refactor urgente.

### Honestidad GEO (AI search)

**No prometemos**: tasa de citas en Google AI Overviews, ChatGPT, Perplexity. No hay herramienta pública fiable.

**Sí vamos a medir** (proxies):
- Crecimiento tráfico directo (proxy de menciones en AI answers).
- Crecimiento branded search (proxy de reconocimiento).
- Spot-check manual trimestral: preguntar en ChatGPT, Perplexity, Claude "¿dónde puedo contratar un manual de marca en España con precio fijo?" y documentar si Tramarca aparece.

---

## 10. Dependencias con otras fases

- **FASE 4 del ULTRAPLAN** (rediseño `/anatomia` 12→16 capítulos): dependency hard para Schema HowTo + Pieza 04 + pieza de contenido anatomía.
- **FASE 5 del ULTRAPLAN** (infra blog): dependency hard para publicar TODAS las piezas. Sin `/blog/[slug]` no hay estrategia SEO ejecutable.
- **Google Keyword Planner account**: Fernando debe crear cuenta Google Ads (10min). Desbloquea volúmenes verificables.
- **Google Business Profile**: setup manual, verificación por tarjeta postal (5-7 días).
- **Manuals fotografía profesional del founder(s)**: para Person schema robusto en /sobre. Shoot 1h.

---

## 11. Conclusión ejecutiva

**La tesis en una frase**: Tramarca puede ganar top-5 en las 3 queries transactional más valiosas del mercado español de manuales de marca en 6-9 meses, porque ofrece la única respuesta estructurada (precio cerrado IVA incluido público) a una query donde la competencia esconde precios estratégicamente.

**El orden importa**: transactional primero (ingresos), informational segundo (autoridad), inspirational tercero (link building). Saltarse el orden = construir tráfico sin pipeline.

**La diferencia crítica**: no copiar a Brandemia. Construir Information Gain genuino — ángulos que solo un estudio que fabrica manuales puede ofrecer. La autoridad se compra con perspectiva única, no con volumen de palabras.

**El próximo paso tangible**: arrancar Pieza 01 "Cuánto cuesta un manual de marca en España 2026" con el conversion-copywriter en semana 1. Target publish = viernes semana 2. CTA primario a `/precios`. Esa pieza + el Product schema en `/precios` + Google Business Profile son el minimum viable SEO setup de primer mes.

---

_Documento vivo. Revisar el estado de cada pieza del content calendar al cierre de cada sprint quincenal. Actualizar KD/volumen estimados cuando entre data real de Search Console (mes 2 en adelante)._

_Referencias de investigación: [Sortlist España](https://www.sortlist.es/blog/precio-manual-de-identidad-corporativa/), [Lalolastudio](https://lalolastudio.com/precio-manual-de-marca/), [Brandemia](https://brandemia.org/manual-de-marca-elementos-que-debes-anadir), [Branzai](https://www.branzai.com/2018/12/diferencias-entre-un-brandbook-y-un.html), [Logocrea](https://www.logocrea.com/servicios-adicionales/manual-identidad-corporativa/), [JohnAppleman](https://www.johnappleman.com/), [Pentagram Slack](https://www.pentagram.com/work/slack), [NASA Standards Manual](https://standardsmanual.com/products/nasa-graphics-standards-manual), [Mailchimp Style Guide](https://styleguide.mailchimp.com/), [Logo Histories FedEx](https://www.logohistories.com/p/fedex-logo-design-1994-landor-lindon-leader)._
