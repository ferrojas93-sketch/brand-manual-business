---
name: Tramarca SEO strategy — doc canónico 2026 emitido
description: Estado SEO Tramarca.es tras seo-strategy-2026.md (doc source of truth 90d). Keyword universe 52kw, SERP analysis 6 queries, calendar 13 piezas, schema plan, riesgos
type: project
---

## Estado post-emisión doc 2026-04-18

**Documento canónico**: `web/docs/seo-strategy-2026.md` (~10k palabras). Vigencia hasta 2026-07-18, revisar trimestralmente.

## Keyword universe · 52 queries por bucket

- **Transactional** 12 · P0: "manual de marca precio" (KD 38), "cuánto cuesta un manual de marca" (KD 34), "manual identidad corporativa precio" (KD 36)
- **Commercial** 10 · P0: "manual de marca vs brand book" (KD 20 — content gap claro, competencia 2018 desactualizada)
- **Informational** 15 · P0: "qué es un manual de marca" (Brandemia #1, KD 46), "cómo hacer un manual de marca" (KD 48), "qué incluye un manual de marca" (KD 32 — territorio nuestro via /anatomia)
- **Navigational** 5 branded
- **Inspirational / link bait** 10 · NASA, FedEx, logos secretos, Mailchimp, Oatly, Stripe Press, Slack

## Competitive landscape España (verificado vía WebSearch)

- **Sortlist** (DA alto, SEO agresivo, pricing articles 2025)
- **Lalolastudio, Logocrea** (Product schema → rich results · principal threat rich results)
- **Brandemia** (autoridad categoría, inatacable frontal año 1)
- **Pululart, Grafikeo, Oliver Puente** (middle tier, superables)
- **JohnAppleman, Summa, The Brand Doctor** (premium sin pricing público)

## Content calendar 13 piezas (semanas 1-12+backlog)

P01 Cuánto cuesta (w1-2) · P02 Qué es (w3-4) · P03 Manual vs Brand Book (w5-6) · P04 Paso a paso (w7-8) · P05 NASA 1976 (w9-10) · P06 FedEx (w11) · P07 HUB 15 manuales históricos (w12) · backlog P08-P13.

## Schema plan · 5 upgrades críticos

1. **Product + AggregateOffer en /precios** (principal gap vs Lalolastudio/Logocrea)
2. Partir FAQPage en 4 por contexto
3. Person schema founder en /sobre
4. DigitalDocument en /manuales/tramarca
5. HowTo por capítulo /anatomia (depende FASE 4 ULTRAPLAN 12→16 caps)

## Riesgos principales

1. DA bajo (<10) — realista top-10 queries head en 6-9 meses
2. PDF 58MB gated reduce dwell time — mitigar con versión ligera + preview inline
3. Cannibalización /precios vs /blog/cuanto-cuesta — separar intent transactional vs informational
4. Brandemia inatacable — no copiar, producir Information Gain con POV de fabricante
5. Entity disambiguation "Tramarca" homónimos — reforzar sameAs + Knowledge Graph

## Insights nuevos post-investigación

- **Gap real mercado España**: NADIE publica Product schema con `valueAddedTaxIncluded: true` explícito. Tramarca ya lo tiene en `/lib/schema.ts`. Solo falta escalar Service → Product para rich results.
- **Queries long-tail KD 14-22 son gold**: "NASA graphics standards manual español" (KD 14), "manual de marca vs brand book" (KD 20), "Baskin Robbins 31" (KD 22). Win rate alto en 3-6 meses.
- **Featured snippet "cuánto cuesta un manual de marca"** es capturable con párrafo 40-60 palabras respuesta directa.
- **PDFs institucionales dominan "manual de marca ejemplos"** (inexmoda, renata, imart…). Oportunidad Tramarca: único ejemplo CON opción de contratar.
- **"logos con mensajes ocultos"** 680-1.100 búsquedas/mes es query major link-bait en español, competencia traducida débil.

## Próximo paso tangible

Arrancar Pieza 01 "Cuánto cuesta un manual de marca en España 2026" con conversion-copywriter semana 1. Target publish viernes w2. En paralelo: Product schema en /precios + Google Business Profile verificación.

## Dependencias críticas bloqueantes

- FASE 5 ULTRAPLAN (infra blog) ANTES de cualquier publicación
- FASE 4 ULTRAPLAN (/anatomia 12→16 caps) ANTES de HowTo schema + Pieza 04
- Google Keyword Planner account (Fernando, 10 min) para volúmenes verificables
- Google Business Profile setup + tarjeta postal (5-7 días)

## Entity naming canónico (recordatorio — usar literal)

"Tramarca es un estudio de diseño editorial en Madrid especializado exclusivamente en manuales de marca, con tres tiers productizados (490€, 990€, 1.990€ IVA incluido) y entrega en 5, 7 o 10 días mediante proceso 100% asíncrono."
