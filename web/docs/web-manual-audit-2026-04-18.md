# Audit cruzado web ↔ manual Tramarca v4

_Fecha: 2026-04-18_
_Reference: manual `~/Projects/claude/brand-manuals/04-tramarca/dist/tramarca-v4.pdf` (58pp · commit 5cfa281)_

Objetivo: barrer la web contra el manual v4 como source of truth. Listar discrepancias, aplicar los fixes simples, dejar los grandes documentados para la fase correspondiente.

---

## Criterios de referencia (manual v4)

### p08 — Nuestra respuesta · 4 pilares
1. **Precio cerrado.** IVA incluido. Publicado. · 490€ / 990€ / 1.990€
2. **Plazo publicado.** Días laborables, no estimados. · 5 · 7 · 10 días
3. **Proceso cerrado.** Dos rondas de revisión incluidas. · 2 rondas
4. **Entrega editorial.** Libro físico (Premium), PDF y assets. · Sistema completo

Cierre: "Lo que ves es lo que pagas."

### p09 — El mercado en una tabla
Ranges canónicos:
| | Agencia | Freelance | Canva+logo | Tramarca |
|---|---|---|---|---|
| Precio | 6.000€ — 18.000€ + IVA | 800€ — 3.500€ | ~80€ | 490€ — 1.990€ |
| Plazo | Semanas de discovery | Variable | Instantáneo | 5 — 10 días laborables |
| Scope | Personalizado | Negociado | Plantilla | Precio fijo publicado |
| Calidad | Calidad de agencia | Depende del perfil | Básico, sin sistema | Sistema documentado de calidad |

### p35 — Principios de voz
1. Claro antes que bonito
2. Directo sin ser seco
3. Concreto sobre vago
4. Nombra lo exacto (reemplaza "señala, no convence")

**Registro por canal**: landing=provocador · propuesta=riguroso · email=cercano · manual=declarativo · social=afilado.

### p57 — La marca en 10 líneas
1. Un estudio que solo hace manuales
2. Precio cerrado 490 / 990 / 1.990€ IVA incl · publicado
3. Plazo publicado 5 / 7 / 10 días laborables
4. Brief firmado antes del kickoff
5. Entrega editorial · libro físico impreso (Premium), PDF y assets por tier
6. Dos rondas de revisión incluidas · proceso cerrado
7. **16 capítulos / 48 componentes · anatomía publicada**
8. Dos tipografías · Satoshi + IBM Plex Mono · sin cursivas
9. Siete colores + un acento · Lacre como punto, nunca fondo
10. El trabajo es revisar · lo que no se documenta, se improvisa

---

## Discrepancias detectadas

### 🔴 MAJOR — requieren trabajo (aplicar en fases posteriores)

| # | Web | Manual v4 | Fix | Fase |
|---|---|---|---|---|
| M1 | `lib/anatomia.ts` y `/anatomia` = **12 capítulos / 48 componentes** | Regla #7 TL;DR = **16 capítulos / 48 componentes** | Reestructurar anatomia a 16 caps siguiendo el manual (I Provocación, II Personas, III Fundamentos, IV Logo, V Tipografía, VI Color, VII Iconografía, VIII Fotografía, IX Voz, X Aplicaciones, XI Arquitectura, XII Governance, XIII Motion, XIV Extensiones, XV Servicio, XVI Portfolio). Actualizar schema HowTo · Breadcrumbs · internal links | **FASE 4 · rediseño /anatomia** |

### 🟡 MINOR — aplicados en esta fase

| # | Web | Manual v4 | Fix aplicado |
|---|---|---|---|
| m1 | Home sección "Cómo trabajamos" = **3 pilares** (Scope · Plazo · Precio) | p08 = **4 pilares** (Precio · Plazo · Proceso · Entrega) | ✅ Reescrito grid 3→4 con los 4 pilares exactos del manual. Grid en desktop pasa a 4 cols |
| m2 | Home nota anatomía: "Premium: 01-08 extendido + **formación al equipo**" | Feedback `project_tramarca_web_security` — "formación 90min" no documentada en infra | ✅ Eliminado "formación al equipo". Reformulado como scope por páginas + libro físico Premium |
| m3 | Home nota anatomía: tiers por capítulos (01-03 / 01-07 / 01-08) | Manual: tiers por páginas, no por capítulos | ✅ Reformulado: "Esencial 20-25pp · Profesional 30-40pp · Premium 40-50pp + libro físico" |
| m4 | Home anatomía 8 tiles (subset curado) | p57 = 16 capítulos | ✅ Añadido "Ocho de los dieciséis capítulos publicados en /anatomia" como disclaimer honesto |
| m5 | Home hero subtitle: "PDF editorial de 20-50 páginas" | Manual: libro + PDF + assets (regla #5) | ⏸ No cambiado — es hero concreto, el libro físico aparece explícito en sección Premium y /precios |

### ✅ Consistencias verificadas

- Hero tagline "Tu marca, por escrito." ↔ manual "Por escrito" (tagline canon)
- "Lo que no se documenta, se improvisa" ↔ regla #10 TL;DR ✓
- Mercado tabla /precios ↔ p09 ranges ✓ (6k-18k / 800-3.5k / ~80 / 490-1.990)
- Proceso 5 pasos (Brief · Confirmación · Producción · Revisiones · Entrega) ↔ regla #4 "brief firmado antes del kickoff" ✓
- Pricing tiers (490/990/1.990€ IVA incl) ↔ regla #2 ✓
- Plazos 5/7/10 días laborables ↔ regla #3 ✓
- Dos rondas de revisión ↔ regla #6 ✓
- Tipografías Satoshi + IBM Plex Mono ↔ regla #8 ✓
- Lacre como punto acento ↔ regla #9 ✓

### 🟢 Rechazos explícitos (mantener)

- **"Sin discovery" en FAQs** — es comparación neutra con agencias, no claim de ventaja. Mantener.
- **Covers de clientes en `/portfolio/{slug}-cover.jpg`** — ya NO servidos públicamente tras FASE 0. Archivados localmente.

---

## Fixes aplicados en esta fase

1. `app/page.tsx:699-722` — Grid "Cómo trabajamos" de 3 a 4 pilares alineados con p08
2. `app/page.tsx:555-558` — Nota anatomía reformulada (quita "formación al equipo", usa páginas + "8 de 16")

## Fixes pendientes

- **FASE 4** (rediseño /anatomia): reestructurar `lib/anatomia.ts` a 16 capítulos alineados con manual v4 + schema HowTo + ejemplos visuales.

---

## Régimen de voz — test rápido aplicado

Manual p35 test: "¿Podría decirlo una agencia grande genérica? Cambia la frase."

Chequeado en home + /precios + /sobre:
- ✅ "Lo que ves es lo que pagas" — específico, no genérico
- ✅ "Sistema documentado de calidad" — específico
- ✅ "Todo por escrito" — específico al método
- ⚠️ "Hablemos de tu marca" (CTA cierre home) — podría sonar genérico. **Recomendación FASE 6 (copy review)**: reemplazar por "Pide tu propuesta" o "Empieza el brief".

---

_Documento vivo · actualizar al cierre de FASE 4_
