# Shamusic — Auditoría Visual 360° del Manual Premium

**Auditor:** ui-ux-designer (Tramarca) · **Fecha:** 2026-04-13 · **Snapshots revisados:** 46/46 · **HTML fuente:** `dist/manual.html`

---

## Resumen ejecutivo (5 líneas)

1. **El brief es ambicioso, la ejecución es competente pero tímida.** La paleta, tipografía y tokens están bien definidos, pero el manual ejecuta el 40% del potencial del axis BOLD declarado en el brief.
2. **El logo está pixelado en p09, p10, p11 y p15/16/43** (mismo asset `logo-outline.png` de 257×62 reescalado al 58-75%). BLOCKER — afecta 6+ páginas, no solo p09.
3. **La portada (p01) falla el brief explícito**: el brief dice "cover con wordmark + gradient ceremonial"; en lugar de abrir con el logo grande y un momento cinematográfico, abre con un h1 tipo editorial genérico y el logo aparece diminuto a pie de página.
4. **Falta ejecutar 8 de las 11 técnicas CSS del stack moderno** que pedían: no hay `clip-path`, ni `mix-blend-mode` (solo overlay en p26), ni gradient mesh real, ni `conic-gradient`, ni `feTurbulence`, ni `backdrop-filter`, ni text-stroke, ni mask-image. La mayoría de páginas oscuras son un plano midnight + radial gradient suave. Sin drama.
5. **Los section dividers (p04, p08, p13, p18, p23, p27, p30, p34, p38, p41) son clones** — idéntico layout con un numeral romano translúcido a la derecha. 10 de 46 páginas (22%) ejecutan el mismo truco. Para un "Premium" esto es padding, no contenido.

---

## 1. Jerarquía visual página a página

### Apertura (p01-p03)
- **p01** Portada: **jerarquía invertida**. El h1 "La marca que protege a quien la hace" domina; el wordmark aparece a 14mm de altura al fondo (demasiado pequeño). Brief exige "cover cinematográfico con wordmark prominente". La página respira bien pero el gradient `gradient-cer` es el mismo radial morado genérico que veremos en 9 dividers más — la portada no tiene identidad propia.
- **p02** Mantra: la única página con verdadero WOW tipográfico. Fraunces 148pt funciona. PERO el `gradient-cer` está a opacity 0.4 — se siente plana, no cinematográfica. **Falta profundidad: grain, noise, wash de magenta en esquinas.** El metadata strip abajo corta el drama ("Tres sustantivos. Tres puntos..." irrumpe).
- **p03** Colofón: jerarquía correcta, pero visualmente es *Linear.app*. Paper + Host Grotesk + grid 3-col. Funciona pero es completamente intercambiable con cualquier manual SaaS. Cero firma Shamusic.

### Esencia (p04-p07)
- **p04** Divider Esencia: tipografía editorial correcta pero el numeral "I" translúcido es un patrón que se repetirá 9 veces más → agotamiento visual.
- **p05** Positioning: **buena jerarquía editorial**, headlines invaden márgenes correctamente. El hair-mag divider es el único elemento distintivo. Falta el ingrediente `bold`: esta página podría estar en el manual de un bufete de abogados.
- **p06** Valores: **la más sosa del bloque**. Cinco filas con número mono + título + descripción. Es la mitad inferior de una página FAQ de Stripe. No hay ninguna firma visual.
- **p07** Pilares 4-col: **ejecución más fuerte** — full-bleed 4 columnas alternando midnight/obsidian. Sin embargo los títulos (Registro / Producción / Sessions / Discovery) se ven cortados en el snapshot ("Sessi..."). Grid apretado sin respiración.

### Logo (p08-p12) — SECCIÓN CRÍTICAMENTE CORTA
- **p09 Logo showcase**: BLOCKER pixelación. El logo es el protagonista y se ve borroso. Fondo midnight plano sin grain visible.
- **p10 Tres fondos**: concepto claro (midnight / paper / magenta) pero los tres mockups son idénticos en tamaño → ritmo visual muerto. **Oportunidad desperdiciada**: el cuadro "excepción sobre magenta" debería tener algún tratamiento (grain agresivo, scanline, blur radial) para marcarse como excepción.
- **p11 Clearspace**: funcional pero aburrido. Falta **diagrama geométrico de construcción** (grid, proporciones, relaciones matemáticas). En Pentagram/Porsche/Apple un clearspace lleva dibujo técnico, no un outline dashed.
- **p12 Don'ts**: 6 bloques con texto, **ZERO ejemplos visuales de logo mal aplicado**. Un "no gires" sin imagen del logo girado es inútil. Esto es el don'ts más débil que puedo recordar en un Premium.

### Color (p13-p17)
- **p14 Paleta**: los swatches están bien dimensionados pero distribuidos 4×2 estático. El Magenta Dust (#F5C2F7) al lado del paper #F4F1EA genera contraste pobre → la card de Dust se lee borrosa.
- **p15 Ratio 60/30/10**: el concepto funciona, pero es un bar chart horizontal de toda la vida. Falta **data-viz editorial**: un circuit-board tree que reparta 60/30/10 como red, un mapa de color codificado, algo que respete el brief "circuit motif como lenguaje".
- **p16 Contextos**: split 50/50 midnight/paper — decente. El único spread del manual que usa dualidad real.
- **p17 WCAG**: **la página más aburrida del manual**. Es una tabla. En un Premium, contrast checker debe tener visual demo grande de cada par sobre superficie generosa.

### Tipografía (p18-p22)
- **p19 Sistema 3-col**: ejecución correcta pero cada card es idéntica. Las tres "Aa" podrían tener tratamientos distintos (Fraunces con opsz animation frame capturada, Host con weight axis demo, JetBrains con caret/prompt).
- **p20 Escala**: lista, no showcase. Las 10 filas son baseline tabla con sample. **Oportunidad brutal desperdiciada**: un specimen tipográfico premium se despliega en 2-3 pp de especímenes gigantes, no una tabla.
- **p21 Specimen Sha.**: **la mejor página tipográfica del manual.** El stacking de la S gigante translúcida detrás y "Sha." enfrente con punto magenta es el tipo de drama que el resto del manual debería tener. Úsese como benchmark.
- **p22 Don'ts tipográficos**: otra tabla de 6 bloques. Mismo problema que p12 — falta demostración visual.

### Sistema visual (p23-p26)
- **p24 Huella dactilar** (notación musical): **la segunda página más fuerte**. Pattern de notas llena fondo, headline "Huella dactilar." cruza. Pero opacidad mal calibrada — compite con headline. **Falta `mix-blend-mode: overlay` o `difference` para que las notas se hundan en el fondo y el headline salga al frente sin taparlas.**
- **p25 Circuit motif**: el diagrama de nodos existe pero se ve "nano-banana genérico". La página podría ser un templo de circuit design — mapa completo del flujo registro→hash→certificado como piece editorial, no un cuadrado pequeño.
- **p26 Gradient + Grain**: split 50/50. El lado "grano" tiene verdadera textura — bien. El lado "gradient" es el mismo radial que se ve en p04/08/13/18/23/27/30/34/38/41 — NO es una pieza ceremonial, es el fondo default.

### Voz y lexicón (p27-p30)
- **p28 Atributos**: 3 columnas con card por atributo — correcto, sobrio.
- **p29 Lexicón (Say/Don't say)**: **la página con menor jerarquía del manual**. Es una nube de pills. Nada llama atención. Falta typography as protest sign, falta peso.
- **p30 Cinco pares**: maqueta de 2 columnas "say this / not that" cortada en el snapshot (algunas filas fuera de frame). Overflow issue — MAJOR.

### Fotografía (p31-p33)
- **p32 Duotono**: 4 retratos duotono midnight/magenta en fila. Bien pero los crops son idénticos (4:5 retrato medio) → ritmo plano. **Oportunidad**: alternar full-bleed, close-up extremo, wide del artista en espacio, para crear cadencia de revista.
- **p33 Espacios**: 3 fotos + bloque texto. Layout asimétrico funciona pero los márgenes interiores son demasiado parejos — falta la violación deliberada del grid que el brief pedía.

### Instagram (p34-p37) — SECCIÓN CRÍTICAMENTE CORTA
- **p35 Poster anatomy**: mockup poster "Emma Vallejo" a la izquierda + tabla specs a la derecha. Es exactamente la misma estructura de p33 y de p40 y de p42 y de p43 — el manual se vuelve predecible.
- **p36 Reel timeline**: tabla con timecodes y copy. Falta mockup real del reel (phone frame, screen flow, 5 frames secuenciales).
- **p37 Grid 3×3**: **mejor página del bloque Instagram** — 9 celdas con tratamientos distintos (retrato, alerta, data "67%", mantra, etc). Esto es lo que debería ser todo el bloque IG.

### Sessions (p38-p40) — SECCIÓN CRÍTICAMENTE CORTA
- **p39 Poster Sessions "Noche magenta"**: **la tercera página más fuerte**. Tipografía Fraunces dominando, imagen de fondo moody. Pero es un único poster — Premium debería mostrar 6-8 posters en cadena para demostrar consistencia serializada de 12 meses, no un caso.
- **p40 Anatomía del poster Sessions**: tabla specs + imagen pequeña. Mismo patrón "mockup+tabla" ya agotado.

### Aplicaciones (p41-p43) — SECCIÓN CRÍTICAMENTE CORTA
- **p42 Certificado**: mockup impreso con hash — concepto correcto, layout plano. Un certificado premium debería tener tratamiento de documento notarial (seal, watermark, paper texture).
- **p43 Email + Hero web**: split 50/50. El lado "Hero web" es decente — notación musical como fondo funciona. El email es una card plana en midnight.

### Cierre (p44-p46)
- **p44 Mantra final "Si no lo registras, cualquiera lo hará"**: Fraunces italic grande — funciona, pero es casi idéntico a p02 (mismo bg, mismo tratamiento). **Debería escalar el drama** (full bleed más extremo, color más saturado, grain más marcado) para cerrar el libro con más peso que abrirlo.
- **p45 Créditos**: correcto, sobrio.
- **p46 Contraportada**: *Sube. Registra. Cobra.* — funciona como cierre pero es una versión menor del mantra de p02.

---

## 2. Oportunidades CSS dejadas en la mesa

**Inventario rápido de técnicas aplicadas vs. disponibles:**

| Técnica | Aplicada | Donde se aplica hoy | Donde DEBERÍA aplicarse |
|---|---|---|---|
| `clip-path: polygon()` | ❌ | — | p01 (corte editorial sobre el wordmark), p02 (tajo diagonal en "copyright"), p39 (crop del poster en ángulo) |
| `mix-blend-mode` | ⚠️ parcial (`overlay` en grain p26) | solo p26 | p24 notación musical (`difference`), p25 circuit motif (`screen`), p32 duotono (`multiply` real en lugar de filter) |
| Gradient mesh (múltiples radiales) | ❌ | solo un radial simple | p01 cover (3-4 radiales superpuestos midnight→violet→magenta), p02 mantra, todos los dividers |
| `font-variation-settings` | ⚠️ solo Fraunces opsz fijo | p19 | Animar opsz por glyph en p20 specimen, weight axis variable en p21 |
| SVG `<feTurbulence>` grain | ❌ (usa PNG grain) | — | SVG filter inline permite grain escalable sin archivo. p07 pilares, p26, todos los midnight bgs |
| `backdrop-filter: blur() saturate()` | ❌ | — | Overlays en p39 poster (título flotante sobre foto con backdrop-blur), p33 espacios, card del email p43 |
| `conic-gradient` | ❌ | — | **Huge miss**: discos de vinilo decorativos en p07 pilar Sessions, p33 espacios, p39 poster; además para data-viz del ratio 60/30/10 en p15 (un conic pie) |
| `text-stroke` / `-webkit-text-stroke` | ❌ | — | p02 mantra (outline version alternada), p21 specimen Sha (stroke version del fondo), p44 cierre |
| `mask-image` | ❌ | — | p24 notación musical enmascarando sobre el headline, p42 certificado con mask watermark, p33 imágenes con mask de circuit pattern |
| `transform: rotate/skew` | ❌ | — | Metadata strips rotados 90° en márgenes (tipo Resident Advisor), "SHAMUSIC" lateral rotado, labels dividers editoriales en diagonal |
| Animaciones frame-key en PDF | ❌ | — | PDF admite frame estático de animation-step: capture del frame 50% de un `font-variation-settings` animado, capture de paso medio de un morph de logo |
| `filter: hue-rotate / saturate` en imágenes | ⚠️ | solo `brightness(0) invert(1)` en logo | p32 duotono real con `filter: grayscale(1) contrast(1.2) sepia(1) hue-rotate(250deg)` |

**Páginas que piden drama CSS urgente y no lo tienen:**

- **p01 Portada**: gradient mesh 3-capas + grain SVG + clip-path en un elemento decorativo + wordmark full-bleed 40% del ancho. Hoy es un h1 sobre gradient.
- **p02 Mantra**: text-stroke outline alternando las 3 líneas + grain 6% + letra "T" de "Tu" con gradient text-fill + punto magenta con box-shadow glow.
- **p07 Pilares**: cada pilar debería tener un tratamiento CSS diferente — uno con conic-gradient disco, otro con mask circuit, otro con gradient mesh, no los 4 iguales.
- **p17 WCAG**: debería ser un interactive-looking dashboard con backdrop-blur cards.
- **p25 Circuit motif**: SVG propio con `feGaussianBlur` + `feMerge` para glow magenta en los nodos (ahora se ve como una imagen PNG plana).
- **p32 Duotono**: `mix-blend-mode: multiply` real con capa de magenta sobre capa midnight de la foto, no un filter plano.
- **p42 Certificado**: el fondo debe tener watermark circuit en `mask-image` + border pattern + sello con `conic-gradient`.

---

## 3. Problemas concretos detectados (por severidad)

### BLOCKER (bloqueantes — arreglar antes de enviar al cliente)

- `[BLOCKER] p09 — Logo pixelado`: `logo-outline.png` 257×62 se reescala al 58% del ancho A4 (≈240mm) → DPI efectivo ≈27. Imposible imprimir Premium. Se menciona en todos los avisos.
- `[BLOCKER] p10, p11, p15 poster mock, p16, p35, p39, p42, p43, p46 — logo reutilizado pixelado`: no es solo p09, son **9 páginas**. Fernando subestimó el impacto.
- `[BLOCKER] p01 Portada sin logo prominente`: contradice brief explícito ("cover con wordmark + gradient ceremonial"). La portada actual es una intro editorial, no una cover.
- `[BLOCKER] p30 overflow`: el grid "Cinco pares" está cortado en el snapshot — dos filas quedan fuera del área A4. Revisar cálculo de altura.
- `[BLOCKER] p12 Don'ts sin ejemplos visuales`: manual de marca sin demostración visual de qué NO hacer con el logo es malpractice. Cliente rechaza con razón.
- `[BLOCKER] p22 Don'ts tipografía sin ejemplos`: mismo problema.

### MAJOR (drama insuficiente para tier Premium)

- `[MAJOR] p04, p08, p13, p18, p23, p27, p30(divider), p34, p38, p41 — 10 dividers clónicos`: mismo layout, mismo gradient, mismo roman numeral translúcido. Cada divider debería tener su propio tratamiento acorde al capítulo (Logo → circuit animation, Color → conic pie, Typografía → type specimen animado, etc.).
- `[MAJOR] p07 Pilares — títulos cortados`: "Sessi..." se ve truncado en el snapshot. Grid demasiado apretado.
- `[MAJOR] p01 — gradient-cer default`: el mismo gradient que usan 10 dividers — la portada no se distingue.
- `[MAJOR] p15 Ratio bar chart 60/30/10`: bar chart horizontal genérico. Merece un tratamiento editorial (conic pie, circuit distribution, type-as-data-viz).
- `[MAJOR] p17 WCAG tabla plana`: página más aburrida. Rediseñar como dashboard con visual demos grandes.
- `[MAJOR] p20 Escala tipográfica como tabla`: una escala tipográfica Premium son 2-3 spreads de especímenes gigantes, no una tabla con samples de 30pt.
- `[MAJOR] p25 Circuit motif insignificante`: merece un spread completo con circuit propio generado en SVG, no un cuadrado con pocos nodos.
- `[MAJOR] p29 Lexicón nube de pills sin jerarquía`: rediseñar como editorial (Say THIS enorme / Don't say this pequeño y tachado).
- `[MAJOR] p32 Duotono con 4 crops idénticos`: falta cadencia editorial.
- `[MAJOR] p35-p37 Instagram solo 3 pp útiles`: falta reel template real, story templates (4 tipos), highlights covers, bio, carrusel 5 slides.
- `[MAJOR] p38-p40 Sessions solo 3 pp`: falta flyer A3 físico, lineup template, story "queda 1 día", post after-event, photobook.
- `[MAJOR] p41-p43 Aplicaciones solo 3 pp`: **la más grave de todas las ausencias** para un Premium — falta merch, vinyl sleeve, Spotify Canvas, app UI, business card, stage banner, app icon, YouTube art, etc. (lista completa abajo).

### MINOR

- `[MINOR] p14 Paleta — Magenta Dust borroso sobre Paper`: usar 0.5px border ink para definir la card.
- `[MINOR] p02 mantra — metastrip interrumpe el drama`: bajar opacity a 0.3 o mover a margen exterior.
- `[MINOR] p16 contextos — los dos bloques text-heavy`: falta al menos 1 de los 2 con mockup/demo visual.
- `[MINOR] p19 — las 3 "Aa" idénticas`: Fraunces debería tener opsz 144 evidente, Host Grotesk weight axis animated frame, JetBrains caret.
- `[MINOR] p26 — split 50/50 rígido`: alternar a 60/40 asimétrico.
- `[MINOR] p44 vs p02`: casi clónicos. Diferenciar el cierre.

### NIT

- `[NIT] p03 colofón — todo Host Grotesk sin Fraunces`: la ficha editorial de un manual premium suele incluir un editorial serif para fechas/firma.
- `[NIT] p06 Valores — tipografía del número "01" demasiado pequeña`: debería ser Display XL mono, no caption.

---

## 4. Secciones que merecen expansión

El brief de creative-director ya lista 15 secciones obligatorias. El build solo cubre 10 con profundidad editorial. Propuesta **+16 páginas nuevas** para llegar a 62pp (dentro del rango Premium 50-60pp, admitiendo 2pp de slack).

### 4.1 Logo (hoy 5 pp → propuesta 10 pp)

Añadir:
- **p-LOGO-A Construcción geométrica**: grid del símbolo circuit con medidas, proporciones, ángulos. Diagrama técnico tipo Apple/Porsche.
- **p-LOGO-B Variantes del sistema**: monogram (solo símbolo), stacked vertical, horizontal extendido, simplificado favicon 16/32/64. Hoy no existe.
- **p-LOGO-C Logo sónico (sound-logo)**: waveform visualization del sound logo de Shamusic. JetBrains Mono timestamps, 3-5 segundos, 44.1kHz. Incluye spec de archivo (WAV, MP3, duración).
- **p-LOGO-D Motion signature**: 6 frames del logo animado (dibujo del circuit + entrada del wordmark). Frame 1 a Frame 6 en grid horizontal. Apoyado con `font-variation-settings` capturado.
- **p-LOGO-E Logo sobre superficie**: el logo aplicado en 6 superficies reales — vinilo, camiseta, mochila, puerta de estudio, telón Sessions, pantalla app. Cada uno en duotono.

### 4.2 Aplicaciones (hoy 3 pp → propuesta 12 pp)

Añadir un capítulo "Merch & Print" (4pp) + "Digital surfaces" (4pp) + "Event & Stage" (2pp):

**Merch & Print:**
- **p-APP-01 Camiseta + tote**: 2 mockups full-bleed, uno camiseta negra con símbolo magenta, uno tote bone paper con wordmark. Specs de print (DTG, 300dpi).
- **p-APP-02 Stickers + patches**: sheet de 12 stickers (símbolo solo, "Tu música.", mantra completo, #shamusica handle, número de edición). Patches bordados.
- **p-APP-03 Vinyl sleeve**: sleeve 12" gatefold con arte duotono + hash blockchain en contraportada. Anatomy specs.
- **p-APP-04 Print production**: paper stocks (Munken Lynx 120g / Arcoprint EW 300g cover), Pantone conversion, bleed/safety, printer notes.

**Digital surfaces:**
- **p-APP-05 Spotify Canvas + cover art**: template de Canvas 9:16 (loop 8s) + cover 3000×3000, duotono + wordmark bottom.
- **p-APP-06 App icon + iOS widget**: icon 1024×1024, 180×180, 120×120. Widget UI specs.
- **p-APP-07 Dashboard producer UI**: mockup de la UI logged-in mostrando hash/waveform/earnings. App real de Shamusic.
- **p-APP-08 YouTube channel art + Apple Music Connect banner**: 2560×1440 + 1200×627.

**Event & Stage:**
- **p-APP-09 Stage banner Sessions**: 3m×1m impreso, mockup en contexto fotográfico.
- **p-APP-10 Flyer A3 físico + roll-up**: 297×420mm flyer Sessions + roll-up 850×2000mm para eventos.

### 4.3 Instagram (hoy 4 pp → propuesta 8 pp)

Añadir:
- **p-IG-A Reel templates (3 tipos)**: "manifiesto" / "data" / "artista spotlight" — 5 frames cada uno en grid.
- **p-IG-B Story templates (4 tipos)**: "queda 1 día" / "live now" / "nuevo artista" / "certificado emitido".
- **p-IG-C Highlights covers**: 5 covers circulares para Sessions / Registro / Discovery / Press / FAQ.
- **p-IG-D Carrusel pedagógico (5 slides)**: el flujo "cómo registrar una canción en 5 pasos" — cada slide un mockup.

### 4.4 Sessions (hoy 3 pp → propuesta 6 pp)

Añadir:
- **p-SES-A Serie de 6 posters**: 12 meses serializados → grid 2×3 mostrando consistencia en scroll.
- **p-SES-B Lineup template + after-event photobook cover**.
- **p-SES-C Ticket + wristband + lanyard**.

### 4.5 Nuevas secciones completas

**Motion / Sonification (nueva sección, 3 pp)**
- **p-MOTION-1 Logo animation frames**: 8 frames del logo entry.
- **p-MOTION-2 Sound logo waveform**: específicamente la huella sonora.
- **p-MOTION-3 Motion principles**: ease, duración, transiciones entre secciones.

**Iconografía del ecosistema (nueva sección, 2 pp)**
- **p-ICON-1 Icon system**: 18 iconos en grid (hash, upload, discovery, sessions, certificate, copyright shield, blockchain link, dashboard, play, pause, artist, producer, studio, wallet, search, notification, chat, settings). Trazo 1px magenta hairline sobre midnight. Cada uno en 48px + 24px.
- **p-ICON-2 Icon construction**: grid de 24×24 con el patrón de construcción.

---

## 5. Nuevas páginas propuestas (16 páginas — ficha detallada)

| # | Spread | Objetivo | Layout | Técnica CSS clave | Referencia / mockup necesario |
|---|---|---|---|---|---|
| 1 | **Logo construction geometry** | Demostrar rigor del símbolo circuit con medidas, grid, proporciones | Full-bleed midnight, símbolo a 60% centrado con capas SVG encima (grid, ángulos, radios) | SVG inline + `<animate>` frozen frame + `mix-blend-mode: screen` en líneas de medida | Diagrama vectorial del logo con medidas (Figma export SVG) |
| 2 | **Logo variants system** | Monogram, stacked, horizontal, favicon 16/32/64 | Grid 2×3, cada variante en su "container" con label mono | `backdrop-filter: blur()` sutil en labels | 5 versiones del logo en HD (pending de nano-banana) |
| 3 | **Sound-logo + motion signature** | Waveform del sound logo + 6 frames del motion | 2/3 superior waveform con `conic-gradient` de espectro; 1/3 inferior los 6 frames en fila | `conic-gradient` para espectro circular + SVG path para waveform | Archivo de audio ya generado (o mock WAV) + 6 PNG frames del motion |
| 4 | **Logo sobre superficie** | Demostrar logo en 6 superficies reales | Grid asimétrico 2×3 con crops distintos (full-bleed vs container) | `mix-blend-mode: multiply` + `filter: grayscale` en cada mockup + grain overlay | 6 mockups duotono: vinyl / tshirt / tote / door / telón / phone |
| 5 | **Iconografía ecosistema** | 18 iconos del sistema producto | Grid 6×3 sobre midnight, cada icono en círculo hairline | SVG inline + `stroke-dasharray` para trazo animado (frame frozen) | 18 iconos vectoriales hairline magenta 1px |
| 6 | **Icon construction** | Grid 24×24 con patrón de construcción | Split 50/50: izquierda icon en 480px con grid overlay, derecha specs | CSS grid `repeating-linear-gradient` para la rejilla de construcción | Uno de los iconos en SVG para descomponer |
| 7 | **Merch — camiseta + tote** | Mockup de apparel | Full-bleed 2-col: camiseta negra izq + tote bone paper der | `clip-path` para crops "torsion" + `backdrop-filter` para sombras | 2 mockups apparel (camiseta frontal + tote) — generar con nano-banana |
| 8 | **Merch — stickers + patches** | Sheet de 12 stickers | Grid 4×3 con varied rotaciones `transform: rotate()` por sticker | `transform: rotate()` -3 a +3deg aleatorio + `filter: drop-shadow()` | Sheet generada (12 stickers en SVG, varias formas) |
| 9 | **Vinyl sleeve 12" gatefold** | Portada + contraportada vinyl | Spread completo full-bleed, portada izq con retrato duotono + mantra, contra der con hash + tracklist mono | `mix-blend-mode: multiply` real en duotono + `feTurbulence` SVG para grain vinilo | Mockup gatefold 12" (portada + contra) — nano-banana |
| 10 | **Spotify Canvas + cover art** | Template streaming | Split: izq Canvas 9:16 phone mockup, der cover 3000×3000 + specs | `clip-path: polygon()` corte editorial en el phone mock | 1 Canvas loop frame + 1 cover 3000×3000 |
| 11 | **Stage banner + flyer A3** | Soportes evento físico | Split asimétrico: stage banner 3m×1m full-bleed arriba, flyer A3 abajo en 40% | `transform: skew()` sutil para banner en perspectiva + grain | Mockup banner Sessions + flyer A3 (nano-banana con contexto foto) |
| 12 | **Dashboard producer UI** | UI logged-in de la plataforma | Full-bleed mockup dashboard con hash/waveform/earnings cards | `backdrop-filter: blur()` para cards flotantes + `font-variation-settings` variable en números | 1 screenshot UI producer (o mockup high-fi en Figma) |
| 13 | **Instagram reel templates (3 tipos)** | Manifesto / Data / Artist | Grid 3 columnas × 5 frames cada una = 15 phone-frame mocks | `mask-image` con gradient fade para suggest motion + `mix-blend-mode: screen` en transitions | 3 sets de 5 frames cada uno (15 mockups total) |
| 14 | **Story templates (4 tipos)** | Queda 1 día / Live now / Nuevo artista / Cert emitido | Grid 2×2 con story 9:16 mockups | `backdrop-filter: blur()` para overlay stickers + `conic-gradient` para ring live | 4 stories mockup 1080×1920 |
| 15 | **Sessions — serie de 6 posters** | 12 meses serializados → consistencia en scroll | Grid 2×3, cada poster Emma/Lía/Noah/… | `mix-blend-mode: multiply` para duotono + `transform: rotate()` -1 a 1deg para stack feel | 6 retratos artistas distintos (generar en nano-banana con mismo treatment) |
| 16 | **Print production specs** | Pantone, paper stocks, bleed | Layout tabla editorial con swatches Pantone reales + fotos de papeles | `conic-gradient` para cada Pantone chip + `filter: contrast()` en foto papel | Fotos de pantone swatch + muestras papel (Munken / Arcoprint) |

---

## Recomendaciones finales priorizadas

**Must fix (antes de entregar al cliente):**
1. Sustituir `logo-outline.png` HD en 9 páginas (p09, p10, p11, p15, p16, p35, p39, p42, p43, p46).
2. Arreglar overflow p30.
3. Añadir ejemplos visuales de don'ts en p12 y p22 (son páginas útiles o se eliminan).
4. Rediseñar p01 portada con logo prominente (brief exige esto).

**Should fix (para alcanzar tier Premium):**
5. Diferenciar los 10 dividers clónicos — al menos 5 con tratamiento único por capítulo.
6. Rediseñar p15 ratio y p17 WCAG con drama editorial.
7. Expandir Aplicaciones de 3pp a 12pp (nuevas p-APP-01 a 10).
8. Expandir Instagram de 4pp a 8pp (nuevas p-IG-A a D).
9. Expandir Sessions de 3pp a 6pp.
10. Añadir secciones Motion/Sound-logo e Iconografía.

**Nice to have:**
11. Aplicar `mix-blend-mode: multiply` real a duotonos p32.
12. Añadir `feTurbulence` SVG grain (escalable) reemplazando PNG.
13. Animaciones frame-capturadas en logo motion y tipografía.

**Un gran win si solo hay tiempo para uno:**
→ **Expandir Aplicaciones (p41-p43) de 3pp a 10pp** con merch, vinyl, Spotify, dashboard, app icon, stage banner. Es lo que separa un "nice brand manual" de un "fuck, this is Premium".
