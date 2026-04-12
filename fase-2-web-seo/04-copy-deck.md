# Copy Deck — Tramarca
**Versión**: v1.0 · **Fecha**: 2026-04-12 · **Deploy target**: mayo 2026
**Stack consumidor**: `/landing-page` (Next.js 16 + Tailwind + shadcn/ui)
**Voz**: El Punto Final. Provocativa. Directa. Frases cortas. Punto final siempre. Tuteo.
**Regla de oro**: cifras concretas > adjetivos. IVA incluido explícito. Punto.

---

## Página 1 — `/` (Home)

**URL**: `/`
**Title tag** (59 chars): `Manual de marca. 490€-1990€ IVA incluido. Tramarca.`
**Meta description** (156 chars): `Manuales de marca productizados. Tres tiers. Precio público. IVA incluido. Plazos publicados. 5-10 días. Para pymes españolas. El Punto Final.`
**OG image**: `/og-tramarca.jpg` (spread manual Tramarca propio + logo Lacre)
**Canonical**: `https://tramarca.es/`
**Schema**: Organization + LocalBusiness + Service + OfferCatalog + WebSite + FAQPage + BreadcrumbList

---

### SECCIÓN 1 — Hero

**H1 (variante A — recomendada)**:
> Manuales de marca. Literalmente.

**Sub-H1** (first 200 words GEO-critical — respuesta directa):
> Un manual de marca no tiene por qué tardar seis semanas ni costar diez mil euros. Aquí los precios. IVA incluido. Punto.
> Tres tiers desde 490€. Entrega en 5, 7 o 10 días. Sin discovery eterno. Sin presupuestos opacos. Para pymes y emprendedores en toda España.

**CTA primario**: `Ver los tres tiers →` (destino: `/precios`)
**CTA secundario**: `Los cuatro manuales` (destino: `/manuales`)

**Microcopy hero** (debajo de CTAs, tamaño Plex Mono pequeño):
> 490 / 990 / 1990€ · IVA incluido · Made in España

#### Variantes A/B para testear post-launch

| Var | H1 | Sub |
|---|---|---|
| **A** (default) | Manuales de marca. Literalmente. | Un manual de marca no tiene por qué tardar seis semanas ni costar diez mil euros. |
| **B** | El Punto Final a tu marca. | Manuales de marca con precio público, IVA incluido y plazo publicado. Desde 490€. Punto. |
| **C** | Tu manual de marca. En 5 días. | Tres tiers, pricing en la home, IVA incluido. Sin presupuestos a medida. Sin esperas. Punto final. |

---

### SECCIÓN 2 — Prueba radical (nuestro propio manual)

**H2**: Este es nuestro manual. Por si no te fías del tuyo.

**Cuerpo**:
> Treinta y cuatro páginas. Tipografía Satoshi. Voz provocativa. Sistema de color con Lacre como acento. Hecho por nosotros, para nosotros. Si no te convence el nuestro, no vas a querer el que te hagamos.

**CTA**: `Ver manual Tramarca (34pp) →` (destino: `/manuales/tramarca`)

**Alt imagen cover manual**: `Tramarca — portada del manual propio 34 páginas — manual de marca Lacre sobre Papel`

---

### SECCIÓN 3 — Portfolio

**H2**: Tres manuales. Tres marcas reales. Cero mockups.

**Intro**:
> Trabajo publicado. Páginas reales. Clientes reales. Antes de hablar de precio, mira lo que sale por la puerta.

**Tres cards** (grid desktop / carousel móvil):

| Proyecto | Tier | Subtítulo | Alt text |
|---|---|---|---|
| **Anfisbena** | Profesional · 43pp | Identidad corporativa para fundación cultural. | `Anfisbena — manual de marca profesional 43 páginas entregado por Tramarca` |
| **Claramel** | Esencial · 29pp | Sistema de marca para marca artesanal. | `Claramel — spread tipográfico del manual de marca 29 páginas por Tramarca` |
| **Matraz Innova** | Profesional · 33pp | Brand guidelines para spin-off deeptech. | `Matraz Innova — paleta de color en manual de identidad corporativa por Tramarca` |

**CTA sección**: `Ver los cuatro manuales completos →` (destino: `/manuales`)

---

### SECCIÓN 4 — Los tres tiers (pricing block)

**H2**: Tres tiers. Pricing en la home. IVA incluido.

**Intro (50 palabras, GEO-citable)**:
> Esencial 490€. Profesional 990€. Premium 1.990€. Todos con IVA incluido. Todos con plazo publicado. Todos con entregables cerrados. Sin sorpresas en la factura. Sin "depende, contáctanos". Lo que ves es lo que pagas.

**Layout mandatorio** (desktop 3 col, móvil stacked con Profesional primero):

#### Card 1 — izquierda — **PREMIUM**

- **Label**: Para marcas que quieren manual de 40-50 páginas.
- **Precio**: `1.990€`
- **IVA**: `IVA incluido.`
- **Promesa** (1 frase): Estrategia, identidad verbal y guidelines exhaustivas. Formación a tu equipo incluida.
- **Entregables**:
  - 40-50 páginas, A4 landscape
  - Estrategia de marca completa
  - Identidad verbal + tono de voz
  - Sistema visual extendido (logo, variantes, clearspace, don'ts)
  - Paleta cromática + usos
  - Sistema tipográfico jerárquico
  - Guidelines de aplicación (web, papelería, social, merch)
  - Formación de equipo (sesión 90min remoto)
- **Plazo**: `10 días laborables`
- **Revisiones**: `2 revisiones`
- **CTA**: `Abrir Premium →` (destino: `/contacto?tier=premium`)

#### Card 2 — centro — **PROFESIONAL** (DESTACADO)

- **Badge top**: `RECOMENDADO` (fondo Lacre, texto Papel)
- **Label**: Para la mayoría de pymes. El que escogen ocho de cada diez.
- **Precio**: `990€`
- **IVA**: `IVA incluido.`
- **Promesa** (1 frase): Sistema de marca completo. Voz, visual, guidelines. Lo que necesitas para operar.
- **Entregables**:
  - 30-40 páginas, A4 landscape
  - Sistema visual completo
  - Tono de voz y guidelines verbales
  - Paleta cromática + usos
  - Sistema tipográfico
  - Guidelines de aplicación (web, papelería, social)
  - Plantillas editables (Figma)
- **Plazo**: `7 días laborables`
- **Revisiones**: `2 revisiones`
- **CTA**: `Reservar Profesional →` (destino: `/contacto?tier=profesional`)

#### Card 3 — derecha — **ESENCIAL**

- **Label**: Para marcas que arrancan y quieren los fundamentos bien hechos.
- **Precio**: `490€`
- **IVA**: `IVA incluido.`
- **Promesa** (1 frase): Los fundamentos. Logo, color, tipografía, aplicaciones básicas. Manual que se lee.
- **Entregables**:
  - 20-25 páginas, A4 landscape
  - Logo + variantes + clearspace
  - Paleta cromática + usos básicos
  - Sistema tipográfico
  - 3 aplicaciones clave (papelería, social, firma)
- **Plazo**: `5 días laborables`
- **Revisiones**: `1 revisión`
- **CTA**: `Empezar el Esencial →` (destino: `/contacto?tier=esencial`)

**Footer del bloque pricing**:
> Todos los tiers incluyen brief inicial, kickoff por videollamada y entrega en PDF + Figma. Lo que no incluyen, lo decimos abajo. Punto.

**Link**: `Ver comparativa completa de tiers →` (destino: `/precios`)

---

### SECCIÓN 5 — Founding Customer Program

**H2**: Founding Customer Program. Quedan [COMPLETAR: X] de 5 plazas.

**Cuerpo**:
> Los primeros cinco clientes entran al Founding Program. Pagan su tier al precio full. Reciben extras que no vuelven a publicarse: más páginas, identidad verbal ampliada, formación extendida. A cambio: un case study público, un testimonial en vídeo, dos referidos. Esto se cierra cuando se cierra. No es urgency de marketing. Es matemática.

**Bullets de extras**:
- +10 páginas sobre el tier elegido
- Sesión de estrategia adicional (60min)
- Case study co-producido (nos hacemos cargo del contenido)
- Prioridad de entrega (mitad de plazo si hay hueco)

**CTA**: `Hablamos →` (destino: `/contacto?founding=true`)
**Microcopy**: `Responderemos si todavía hay plaza. Si no, te lo decimos.`

---

### SECCIÓN 6 — Cómo trabajamos

**H2**: Cómo funciona. Cuatro pasos. Cero sorpresas.

**Paso 1 — Brief**
> Rellenas un cuestionario corto. No pedimos tu historia empresarial ni un moodboard. Preguntamos lo que importa: qué haces, a quién, y qué no funciona de tu marca actual.

**Paso 2 — Kickoff (día 1)**
> Videollamada de 30 minutos. Acordamos dirección y firmamos el brief. Aquí arranca el plazo publicado.

**Paso 3 — Revisiones**
> Una (Esencial) o dos (Profesional, Premium) revisiones. Cubren cambios acotados. Si quieres reescribir medio manual, lo presupuestamos aparte. Honesto.

**Paso 4 — Entrega**
> PDF final + Figma editable + assets sueltos. El día que pone en el plazo. No "aproximadamente". El día.

---

### SECCIÓN 7 — Qué NO somos

**H2**: Qué no somos. Por ahorrarte una llamada.

**Cuerpo en tres bloques**:

**No somos una agencia de discovery de seis semanas.**
> Nosotros entregamos en 5-10 días. Una agencia te hace dos meses de workshops, presentación en PDF y tres rondas de propuesta. Todo vale. Pero no es lo mismo.

**No somos Canva ni una plantilla.**
> Si necesitas un brand kit a 12€/mes, usa Canva. Nosotros hacemos manuales que vas a enseñar a tu equipo sin vergüenza.

**No hacemos logo express a 150€.**
> Manual de marca ≠ logo + papelería. Esto es sistema completo. Si solo necesitas logo, hay sitios más baratos. Lo decimos con cariño.

---

### SECCIÓN 8 — FAQs

**H2**: Preguntas que nos hacéis.

*(Las 8 preguntas coinciden 1:1 con el FAQPage schema del SEO doc)*

**¿Cuánto cuesta un manual de marca con Tramarca?**
> Tres tiers con pricing público e IVA incluido: Esencial 490€ (20-25 páginas), Profesional 990€ (30-40 páginas), Premium 1.990€ (40-50 páginas). Precios finales. Sin sorpresas.

**¿Qué incluye el IVA? ¿Hay costes ocultos?**
> El IVA 21% está incluido en los precios publicados. No hay costes ocultos. Cada tier detalla entregables, revisiones y plazos por adelantado. Lo que ves, pagas.

**¿Cuánto tarda en entregarse un manual de marca?**
> Esencial: 5 días laborables. Profesional: 7. Premium: 10. Los plazos se cuentan desde el kickoff con brief firmado. No desde que nos llegó el mail.

**¿Cuántas revisiones incluye cada tier?**
> Esencial incluye 1 revisión. Profesional y Premium, 2. Cada revisión cubre cambios acotados. Cambios de alcance se presupuestan aparte. Transparencia.

**¿Qué diferencia a Tramarca de una agencia?**
> Tramarca es productizado: scope cerrado, precio público, plazo publicado. Una agencia hace discovery, propuesta y custom pricing en semanas. Válido, pero distinto.

**¿Qué es el Founding Customer Program?**
> Los primeros cinco clientes pagan precio full y reciben extras (más páginas, formación, sesión extra) a cambio de case study público, testimonial en vídeo y dos referidos.

**¿En qué se diferencia Tramarca de Ash Proyectos u otras agencias?**
> Entregamos más páginas por menos dinero con IVA incluido y plazo publicado. Profesional 990€ por 30-40 páginas vs 1.490€+IVA por 20 en otros estudios comparables. Además, publicamos el precio desde el minuto uno.

**¿Atendéis fuera de Madrid?**
> Sí. Trabajamos 100% online para toda España. Brief, reviews y entrega por videollamada y email. Ubicación tuya, irrelevante.

---

### SECCIÓN 9 — Cierre / CTA final

**H2**: ¿Empezamos?

**Sub**:
> Tres tiers. IVA incluido. Plazo publicado. Si encaja, se cierra hoy.

**CTA primario**: `Ver los tres tiers →` (destino: `/precios`)
**CTA secundario**: `Escríbenos a hola@tramarca.es`

---

## Página 2 — `/precios`

**URL**: `/precios`
**Title** (57 chars): `Precios manual de marca. IVA incluido. Tramarca.`
**Meta** (153 chars): `Cuánto cuesta un manual de marca. Tres tiers: 490€, 990€, 1.990€. IVA incluido. Plazos 5-10 días. Sin discovery ni sorpresas. Aquí los números.`
**Canonical**: `https://tramarca.es/precios`
**Schema**: Service + OfferCatalog (3 Offers) + FAQPage (FAQs específicas pricing) + BreadcrumbList

### SECCIÓN 1 — Header

**H1**: Cuánto cuesta un manual de marca con Tramarca.

**Párrafo respuesta-directa (first 200 words, GEO-optimized, cifras concretas)**:
> Un manual de marca con Tramarca cuesta 490€, 990€ o 1.990€, IVA incluido. Tres tiers productizados. Entregamos en 5, 7 o 10 días laborables. Páginas reales: 20-25 en Esencial, 30-40 en Profesional, 40-50 en Premium. Revisiones incluidas: 1 en Esencial, 2 en los otros dos.
>
> Comparativa rápida: una agencia tradicional española te pide entre 5.000€ y 50.000€ con custom pricing. Un freelance en Malt, entre 800€ y 1.500€ sin plazo garantizado. Canva, 12€/mes pero lo haces tú. Tramarca ocupa el hueco: productizado, precio público, plazo publicado, IVA incluido.
>
> Lo que ves aquí es el precio final. No hay discovery de pago, ni propuesta a medida, ni sorpresas en la factura. Punto.

---

### SECCIÓN 2 — Tres tier cards

*(Reutilizar las cards de `/` sección 4 — mismo contenido. Aquí con layout más ancho y comparativa visible inmediatamente.)*

**Orden visual**: Premium izq · Profesional centro RECOMENDADO · Esencial der.

---

### SECCIÓN 3 — Tabla comparativa

**H2**: Los tres tiers al detalle.

| | Esencial | Profesional | Premium |
|---|---|---|---|
| **Precio (IVA incl.)** | 490€ | **990€** | 1.990€ |
| **Páginas** | 20-25 | 30-40 | 40-50 |
| **Plazo** | 5 días | 7 días | 10 días |
| **Revisiones** | 1 | 2 | 2 |
| **Estrategia de marca** | — | Básica | Completa |
| **Identidad verbal** | — | ✓ | ✓ extendida |
| **Sistema visual** | Logo + paleta + tipo | Completo | Exhaustivo |
| **Guidelines aplicación** | 3 (papelería, social, firma) | Extendidas (+web) | Totales (+merch) |
| **Plantillas Figma editables** | — | ✓ | ✓ |
| **Formación equipo (90min)** | — | — | ✓ |
| **Entrega** | PDF + Figma | PDF + Figma | PDF + Figma + assets sueltos |

---

### SECCIÓN 4 — Qué incluye siempre

**H2**: Lo que va en todos los tiers.

- Brief inicial (cuestionario estructurado)
- Kickoff por videollamada (30min)
- Entrega en PDF final (A4 landscape) + Figma editable
- Alineación de revisiones por email con deadlines claras
- Soporte post-entrega durante 30 días (dudas de uso)
- Facturación con IVA detallado (para tu contabilidad)

---

### SECCIÓN 5 — Qué NO incluye nunca

**H2**: Lo que no hacemos. Por honestidad.

- Copywriting extenso (web, campañas, slogans comerciales) → contrata un copywriter
- Naming / verbal identity para marca nueva → servicio aparte, cotización específica
- Diseño web, landing pages, ecommerce → contrata un diseñador web
- Packaging, ilustración, motion, fotografía → fuera de scope
- Marketing ads, SEO, estrategia digital → fuera de scope
- Cambios ilimitados → cubrimos 1-2 revisiones; más allá se presupuesta

> No somos una agencia full-service. Somos un estudio que hace un producto concreto muy bien. Punto.

---

### SECCIÓN 6 — Founding Customer Program

*(Reutilizar sección 5 de `/` — mismo copy, CTA contextual.)*

---

### SECCIÓN 7 — FAQs pricing-específicas

**H2**: Preguntas sobre precio.

**¿Por qué 490€ y no 399€ como un logo express?**
> Porque esto no es un logo. Es un manual de 20-25 páginas con sistema, aplicaciones y guidelines. Un logo express a 149€ te da un archivo .ai. Aquí te llevas un documento operativo. Cosas distintas.

**¿Puedo pagar en plazos?**
> Sí. 50% al kickoff, 50% a la entrega. Transferencia o Stripe. Lo que te venga mejor.

**¿Emitís factura con IVA detallado?**
> Sí. Factura electrónica española, con IVA 21% desglosado, lista para tu contabilidad. La envía nuestro sistema el día del cobro.

**¿Y si mi marca ya existe pero quiero rebrand?**
> Igual scope, igual precio. El Profesional y el Premium funcionan muy bien para rebrand. Partimos del activo existente y reconstruimos desde sistema.

**¿Trabajáis con autónomos o solo empresas?**
> Ambos. Factura con NIF personal o CIF, sin diferencia.

**¿Subirán los precios?**
> Sí. Tras los cinco Founding o tras los primeros diez clientes (lo que ocurra antes), revisamos tarifas. Si te interesa, el precio actual se cierra con tu kickoff.

**¿Dónde se paga?**
> Stripe (Link europeo, IVA inclusive) o transferencia SEPA. Te mandamos payment link tras confirmar brief.

---

### SECCIÓN 8 — Cierre

**H2**: Tres tiers. Sin rodeos.

**CTA primario**: `Hablamos →` (destino: `/contacto`)
**Microcopy**: `Respondemos en menos de 24 horas laborables. Sí o no. Punto.`

---

## Página 3 — `/manuales`

**URL**: `/manuales`
**Title** (53 chars): `Manuales entregados · Portfolio · Tramarca`
**Meta** (149 chars): `Cuatro manuales reales: Anfisbena, Claramel, Matraz Innova y el nuestro propio. Páginas, spreads y sistemas. Sin mockups. Trabajo publicado.`
**Schema**: CollectionPage + ItemList

### H1
> Cuatro manuales. Cero mockups.

### Intro (50 palabras)
> Tres clientes reales. Un manual propio. Ciento treinta y nueve páginas publicadas en total. Mira los spreads, los sistemas tipográficos, las paletas. Antes de contratar, mira lo que sale por la puerta.

### Grid de cards

| Card | H3 | Metadata | Alt |
|---|---|---|---|
| 1 | **Anfisbena** | Profesional · 43pp · 2026 | `Anfisbena — manual de marca profesional 43 páginas entregado por Tramarca` |
| 2 | **Claramel** | Esencial · 29pp · 2026 | `Claramel — manual de marca 29 páginas entregado por Tramarca` |
| 3 | **Matraz Innova** | Profesional · 33pp · 2026 | `Matraz Innova — manual de identidad corporativa 33 páginas por Tramarca` |
| 4 | **Tramarca** | Prueba radical · 34pp · 2026 | `Tramarca — manual propio 34 páginas diseñado por Tramarca para Tramarca` |

**CTA grid**: `Ver caso completo →` (destino individual)

---

## Páginas 4-7 — `/manuales/[slug]` (case studies)

**Estructura común para los 4**:

**Title**: `[Nombre] — manual de marca [X]pp · Tramarca` (≤60 chars)
**Meta**: `Caso: manual de marca [X] páginas entregado por Tramarca. Sistema, paleta, tipografía y guidelines de aplicación. Tier [Esencial/Profesional/Premium].`
**Schema**: CreativeWork + BreadcrumbList

### Estructura del case study

1. **Hero**: imagen cover fullbleed + H1 `[Nombre]` + metadata (tier, pp, fecha)
2. **Brief en una frase**: qué era la marca antes y qué necesitaba.
3. **Dirección**: 2-3 frases sobre la decisión de sistema.
4. **Spreads visuales** (8-12 imágenes): paleta, tipografía, aplicaciones.
5. **Sistema en cifras**: número de páginas, tokens de color, tipos tipográficos, aplicaciones.
6. **Citas del cliente** (si hay testimonial).
7. **CTA**: `Ver el tier [X] →` (destino `/precios#[tier]`)

### Copy específico por caso

#### `/manuales/anfisbena`
> **H1**: Anfisbena.
> **Brief**: Fundación cultural con sistema visual inconsistente entre canales digitales y papelería institucional.
> **Dirección**: Sistema tipográfico jerárquico, paleta cromática de cuatro tonos aplicada con disciplina, guidelines extendidas para aplicación editorial. Cuarenta y tres páginas, tier Profesional.

#### `/manuales/claramel`
> **H1**: Claramel.
> **Brief**: Marca artesanal que arrancaba sin más activo que un nombre y un producto.
> **Dirección**: Logo construido desde el nombre, paleta corta, sistema tipográfico sobrio, aplicaciones básicas para ecommerce y redes. Veintinueve páginas, tier Esencial.

#### `/manuales/matraz-innova`
> **H1**: Matraz Innova.
> **Brief**: Spin-off deeptech con identidad técnica previa, necesitaba manual para escalar comunicaciones B2B.
> **Dirección**: Sistema limpio, tipografía funcional, paleta cromática institucional con acento de energía. Guidelines web + papelería + presentaciones. Treinta y tres páginas, tier Profesional.

#### `/manuales/tramarca`
> **H1**: Tramarca. Por nosotros, para nosotros.
> **Brief**: Nuestra propia marca necesitaba el listón. Si no nos lo aplicamos, no tenemos autoridad moral.
> **Dirección**: Paleta negra con Lacre como acento único. Satoshi + IBM Plex Mono. Voz provocativa con El Punto Final como tagline. Spreads cinematográficos. Treinta y cuatro páginas, autoproducido.
> **Cita propia**: "Este manual existe para que, si algún día dudamos de lo que estamos haciendo, abramos esta página y nos acordemos. Punto."

---

## Página 8 — `/sobre`

**URL**: `/sobre`
**Title** (50 chars): `Sobre Tramarca · Manuales productizados · España`
**Meta** (152 chars): `Tramarca es un estudio español que hace manuales de marca como producto cerrado. Precio público. IVA incluido. Plazo publicado. El Punto Final.`
**Schema**: AboutPage + Organization (reafirma entidad)

### H1
> Sobre Tramarca.

### Cuerpo (first 200 words GEO-critical para E-E-A-T)

> Tramarca es un estudio español que hace una sola cosa: manuales de marca. No hacemos web, ni campañas, ni packaging. Manuales. Con precio público, IVA incluido y plazo publicado.
>
> Nació en 2026 a partir de una observación simple: en España nadie publicaba precio claro para un manual de marca. Los estudios escondían el número detrás de "contáctanos". Los paquetes low-cost vendían logo y llamaban manual a un PDF de ocho páginas. Las agencias cobraban diez mil euros y tardaban dos meses. Entre medias, nada.
>
> Tramarca ocupa ese hueco. Tres tiers productizados. Entrega en 10-21 días. Un producto, no un servicio a medida.

### H2 — Qué creemos
- El precio opaco es desprecio al cliente.
- Un manual no es un PDF de ocho páginas.
- Los plazos no son "aproximados".
- El IVA va incluido. Siempre.
- Punto final.

### H2 — Qué hemos entregado
Cuatro manuales, ciento treinta y nueve páginas acumuladas, tres sectores distintos (cultural, artesanal, deeptech) más el nuestro propio. Portfolio público en `/manuales`.

### CTA
`Ver los tres tiers →` (destino: `/precios`)

---

## Página 9 — `/contacto`

**URL**: `/contacto`
**Title** (44 chars): `Contacto · Tramarca`
**Meta** (148 chars): `Escríbenos. Respondemos en 24h laborables. Sí o no al proyecto. Sin ceremonia. hola@tramarca.es o por el formulario. Tu tiempo también cuenta.`
**Schema**: ContactPage

### H1
> Hablamos.

### Cuerpo (breve)
> Rellena cuatro campos. Respondemos en menos de 24 horas laborables. Si encaja, pasamos a kickoff. Si no, también te lo decimos. Tu tiempo también cuenta.

### Form — labels y microcopy

| Campo | Label | Placeholder | Error state |
|---|---|---|---|
| Nombre | `Tu nombre` | — | `Necesitamos tu nombre. Breve.` |
| Email | `Tu email` | `hola@empresa.com` | `El email no tiene buena pinta. Revísalo.` |
| Empresa | `Empresa / proyecto` | — | `¿Cómo se llama lo tuyo?` |
| Tier | `Tier que te interesa` (select) | Esencial 490€ · Profesional 990€ · Premium 1.990€ · Aún no lo sé | — |
| Founding | `¿Eres candidato a Founding?` (checkbox opcional) | — | — |
| Mensaje | `Cuéntanos en tres líneas` | — | — |
| Consent | `He leído la privacidad` (checkbox, link a `/privacidad`) | — | `Necesitamos tu consentimiento para escribirte.` |

**Botón submit**: `Enviar →`
**Loading state**: `Enviando…`
**Success state**: `Hemos recibido tu mensaje. Te contestamos en menos de 24 horas. Punto.`
**Error state**: `Algo ha fallado. Prueba en un minuto o escríbenos a hola@tramarca.es`

**Email directo (destacado aparte del form)**:
> ¿Prefieres email directo? `hola@tramarca.es`

---

## Páginas adicionales — microcopy

### `/404`
**H1**: Esta página no existe. Punto.
**Cuerpo**: Pero las que sí existen son tres: `Los tres tiers`, `Los cuatro manuales`, `Hablamos`.

### `/privacidad`, `/aviso-legal`, `/cookies`, `/condiciones`
[COMPLETAR: textos legales estándar. Voz neutra, estos son legales, no marketing. Usar estructura RGPD estándar.]

### Footer global

**Columna 1 — Navegación**:
- Los tres tiers → `/precios`
- Los cuatro manuales → `/manuales`
- Sobre Tramarca → `/sobre`
- Hablamos → `/contacto`

**Columna 2 — Legal**:
- Aviso legal
- Privacidad
- Cookies
- Condiciones generales

**Columna 3 — Contacto**:
- `hola@tramarca.es`
- LinkedIn → `linkedin.com/company/tramarca`

**Bottom line (font Plex Mono pequeño)**:
> Tramarca · Manuales de marca productizados · España · IVA incluido · El Punto Final.

**Copyright**: `© 2026 Tramarca. Todos los derechos reservados.`

---

## Handoff al `/landing-page`

### Checklist que consume `/landing-page`

- [x] Title + meta + canonical de cada página (9 páginas totales: `/`, `/precios`, `/manuales`, 4 case studies, `/sobre`, `/contacto`)
- [x] Jerarquía H1/H2/H3 definida por sección
- [x] Copy completo (no placeholders salvo 4 `[COMPLETAR:]` marcados: bio Fernando, contador Founding, textos legales, dirección GBP)
- [x] CTAs exactos con destinos (`/precios`, `/manuales`, `/contacto?tier=X`, `/contacto?founding=true`)
- [x] Microcopy form completo (labels, placeholders, error/success/loading)
- [x] Alt text para 3+ imágenes portfolio críticas
- [x] Variantes A/B/C para H1 y sub-H1 (sección A/B tests)
- [x] FAQPage content 1:1 con schema JSON-LD del SEO doc

### 3 puntos de atención visual (para `/landing-page` y `emil-design-eng`)

1. **Jerarquía hero**: H1 dominante (Satoshi Black ~88-112px desktop). Sub-H1 en Satoshi Regular 20-24px con line-height generoso. CTA primario Lacre sobre Papel, CTA secundario outline. Microcopy `IBM Plex Mono` 12-14px.
2. **Contraste Lacre en CTAs**: `#C4553A` sobre fondo Papel `#F4F0EB` da AA+ en botones. Verificar AAA en modo dark (Lacre sobre Carbon `#1C1C1C`).
3. **Tabla pricing en móvil**: la tabla comparativa de `/precios` sección 3 colapsa en tarjetas stacked por tier (no scroll horizontal). Profesional siempre aparece primero en móvil.

### Relación 1:1 keywords ↔ secciones

| Keyword | Página | Sección donde aparece literal | Densidad target |
|---|---|---|---|
| manual de marca | `/` H1 + `/precios` H1 + `/sobre` párrafo 1 | Hero, pricing intro, about | 8-12× en `/`, 12-15× en `/precios` |
| manual de identidad corporativa | `/precios` + FAQs | Comparison table, FAQ body | 3-5× |
| brandbook España | `/sobre` + meta description | About para, meta | 2-3× |
| precio manual de marca | `/precios` H1 + intro + H2s | Headers + body | 5-8× |
| IVA incluido | `/` (6×+) y `/precios` (10×+) | Hero sub, cards, FAQs, footer | 10-15× total |
| productizado / productizados | `/sobre` + `/precios` | Body | 4-6× |
| tres tiers | `/` + `/precios` | CTAs + headings | 5-8× |
| 10 días / 15 días / 21 días | Pricing cards + FAQs | Metadata cards, FAQ | 3-5× cada |
| pymes españolas | `/sobre` + `/` | Intro, about | 3-4× |

### Decisiones cerradas v1.0

1. **Plazos publicados**: 5 / 7 / 10 días laborables (Esencial/Profesional/Premium). Reframe SLA total (brief→kickoff→producción→revisiones→entrega), no tiempo de producción.
2. **Contador Founding**: "Quedan 5 de 5 plazas" literal en landing. Update manual al cerrar cada Founding.
3. **Bio Fernando**: omitida. `/sobre` cubre E-E-A-T vía histórico de manuales + qué creemos.
4. **Positioning Axis**: híbrido. `ui-ux-pro-max` para pricing/tabla/form + `frontend-design` en hero, manual propio y Founding.
5. **GBP**: Madrid con dirección oculta ("no mostrar mi dirección"), `addressLocality: Madrid` en schema, sin `streetAddress` público.
6. **Legales**: plantilla RGPD estándar redactada internamente para launch, revisión abogado T3.
7. **Google Ads**: alta pendiente por usuario (15min, solo Keyword Planner, sin activar campaña).

---

## Fin del Copy Deck v1.0

**Siguiente paso del flujo CLAUDE.md**: `plan-design-review` → valida copy + wireframe antes de pasar a diseño (`ui-ux-pro-max` / `frontend-design` / híbrido según Positioning Axis que decidirá `creative-director` en el paso 1 retroactivo, aunque brand tokens ya existen).

**Decisión pendiente de Positioning Axis**: recomendado **híbrido** — sistema sobrio (ui-ux-pro-max para pricing cards, tabla, form) con momentos bold (frontend-design en hero + sección "Nuestro propio manual" + Founding Program). Justificación: voz Tramarca exige carácter en puntos signature, pero la tabla de pricing y el form necesitan disciplina sistemática.
