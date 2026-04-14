# Shamusic — Auditoría textual 360 del Manual de Marca

**Autor:** conversion-copywriter
**Fecha:** 2026-04-13
**Archivos auditados:**
- `/Users/fer/Projects/claude/brand-manuals/05-shamusic/src/build.py` (46 páginas)
- `/Users/fer/Projects/claude/brand-manual-business/manuales/shamusic/research/voice-tone.md`

---

## Resumen ejecutivo — 5 líneas

1. **Lo que está fuerte:** mantra maestro, apertura (pp. 1-3), sección tipográfica (18-22) y certificado blockchain (p. 42). La voz es coherente en dividers y voz-y-tono explícita (27-30).
2. **Lo que falla — CRÍTICO:** el manual **rompe su propio lexicon** en la página 29 (lista Yes/No): incluye "Partnership" en los SÍ cuando en voice-tone.md está prohibido; incluye "Premium tier" en los NO sin matizar; faltan 7 de los 15 términos prohibidos oficiales.
3. **Contenido faltante para tier Premium:** solo 1 ejemplo de reel, 0 de carrusel pedagógico, 0 de story además del aviso, 0 de push, 0 de onboarding plataforma, 0 de copy de error, 0 de legal/FAQ, 0 de bio IG, 0 de Spotify blurbs.
4. **Mantras secundarios:** solo aparece 1 (Sube·Registra·Cobra) en contraportada. Faltan los otros 4 — el manual no aprovecha el sistema verbal creado.
5. **Estructura narrativa:** abre bien, flojea en el tramo 34-40 (IG + Sessions: repetitivo, poco copy real), cierra correcto pero sin pirotecnia. Necesita 10-12 páginas nuevas de aplicación verbal.

---

## 1. Issues por severidad

### BLOCKER

**B1. [src/build.py:807 · p29 Lexicon] — "Partnership" aparece en SIEMPRE DECIMOS, pero voice-tone.md lo prohíbe expresamente.**
- Actual: `yes = ["…", "Partnership"]`
- Voice-tone §2 NUNCA: "Partner / partnership — Inglés de corporate. Se dice colaboración."
- **Fix:** reemplazar `"Partnership"` por `"Colaboración"` en la lista yes.

**B2. [p29 Lexicon] — "Premium tier" prohibido sin razón, contradice voice-tone.md.**
- Actual: `no = ["…", "Premium tier", …]`
- Voice-tone §2: "Premium (sin contexto) — Ambiguo. Se dice **Suscripción Premium** o **Plan Premium**, siempre con sustantivo." → el prohibido es "Premium" sin sustantivo, no "Premium tier".
- **Fix:** reemplazar `"Premium tier"` por `"Premium (suelto)"` o simplemente `"Premium"`.

**B3. [p29 Lexicon] — Lista NO incompleta: faltan 7 términos prohibidos del voice-tone oficial.**
- Voice-tone tiene 15 términos prohibidos. El manual lista 15 pero no coinciden: faltan **Exclusivo / VIP**, **Hacer match**, **Unlock / desbloquea**, **Game-changer**, **Industria musical (pro)**, **Innovador**, **Startup** ✓ sí está.
- Lista actual incluye "Customer", "Growth", "Engagement", "Premium tier" que no están en el canon oficial — son adiciones sin fundamento documental.
- **Fix:** sustituir por la lista canónica de 15:
```
no = ["Startup", "Usuario", "Cliente", "Monetizar", "Solución",
      "Low-cost", "Partner", "Familia", "Innovador", "Exclusivo",
      "Hacer match", "Desbloquea", "Game-changer", "Industria musical", "Reyes"]
```

**B4. [p29 Lexicon YES] — Lista canónica pide 22 términos, manual solo muestra 15, y mezcla mal.**
- Faltan: **Tu obra**, **Tu prueba**, **Tu dinero**, **Cobra**, **Sellado**, **Timestamp**, **Artistas emergentes**, **Sello temporal**, **Regalías**, **Jueves en Madrid**.
- **Fix:** reemplazar lista por los 22 aprobados; si no caben visualmente, dividir en dos filas de 11.

**B5. [Toda la sección Voz y tono pp. 27-30] — El manual solo dedica 4 páginas al sistema verbal cuando es la columna vertebral de la marca Rebel+Creator. Premium requiere mínimo 8-10 páginas de voz + aplicaciones verbales.**
- Faltan páginas dedicadas a: tone range por contexto (8 casos), tríos rítmicos (5), mantras secundarios (5), CTAs verbales (3), plantillas de email, copy legal, copy de error, plantillas sociales.
- **Fix:** añadir 10 páginas propuestas en §3 de este documento.

**B6. [p07 Pilares, p. 7] — "Match" usado en descripción de Discovery: "Match entre artistas y productores".**
- Voice-tone §2 NUNCA: "Hacer match — Se dice conectar o descubrir (Discovery Mode)."
- **Fix:** `"Conexión entre artistas y productores. Colaborar sin red de contactos."`

### MAJOR

**M1. [p02 Mantra] — El punto final del mantra usa `<span class="mag">.</span>` correcto, pero la bajada tiene cuatro frases en un párrafo ("Tres sustantivos. Tres puntos. Una promesa. Este mantra…"). Voice-tone §3 dice máx 3 frases por párrafo.**
- **Fix:** romper en dos: "Tres sustantivos. Tres puntos. Una promesa." (salto) "Aparece en cada aplicación — reels, posters, web, contratos. Es el ADN verbal de Shamusic."

**M2. [p03 Colofón] — "SEDE: Madrid, ES" — innecesario "ES". Voice-tone usa "Madrid" sin país.**
- **Fix:** `("SEDE", "Madrid")`

**M3. [p03 Colofón] — "Un sistema documentado. Ni uno de adorno." — la segunda frase no es voz Shamusic (suena a Tramarca). Mantra secundario cabría aquí.**
- **Fix:** `"Un sistema documentado. Una marca que se defiende sola."`

**M4. [p05 Posicionamiento] — Título demasiado largo (21 palabras). Voice-tone §3 pide frases de 5-9.**
- Actual: "Shamusic no es una plataforma de distribución. Es la prueba legal de que la música es tuya."
- **Fix (dos frases cortas):** "Shamusic no distribuye. **Shamusic prueba.**"
- Y debajo: "La prueba legal de que la música es tuya. Antes del primer play, antes del primer pleito."

**M5. [p05] — "Lo que llaman «manual» y son ocho láminas." — meta-chiste editorial que no encaja en la lista de "contra qué". El lector no está evaluando manuales de marca; está defendiendo su música.**
- **Fix (eliminar y reemplazar):** `"La SGAE que tarda meses. Los contratos en los que firmas sin leer."`

**M6. [p06 Valores] — Valor 04 "Fricción cero" usa anglicismo innecesario + trío "Sube, registra, cobra." con COMA en lugar de PUNTO.**
- Voice-tone §3 firma rítmica: "Sube. Registra. Cobra." (tres puntos, NO comas).
- **Fix descripción 04:** "Sube. Registra. Cobra. Sin abogados. Sin papeles. Sin semanas."
- **Fix nombre valor:** "Sin fricción" (español) o mantener "Fricción cero" si Fernando lo valida.

**M7. [p06 Valor 03 "Comunidad"] — "La industria es red. Los artistas se encuentran aquí antes que en Spotify." — "La industria es red" no se entiende; confuso.**
- **Fix:** "Los artistas se encuentran aquí antes que en Spotify. Y se ven la cara cada jueves en Madrid."

**M8. [p09 Logo showcase] — "Wordmark + símbolo circuit." — "circuit" en inglés sin explicar + sin traducción.**
- **Fix:** `"Wordmark + símbolo circuit-board."` o `"Wordmark + símbolo (los nodos)."` Si "circuit" es nombre propio del símbolo, nombrarlo bien la primera vez.

**M9. [p10 Logo versiones] — "ej. hero de redes tomadas" — "redes tomadas" es jerga interna, un lector externo no entiende.**
- **Fix:** `"ej. campañas donde el magenta ocupa el frame completo"`

**M10. [p12 No hacer logo] — usa "✕" pero tipográficamente es carácter multiplicación; voice-tone no especifica pero convención editorial de lujo usa "—" o "NO".**
- **NIT** — dejar como está si no molesta, o cambiar a "NO" en letras versalitas.

**M11. [p14 Paleta] — "primary", "deep bg", "accent · firma", "gradient only", "text on paper" en inglés.**
- Mezcla inglés/español inconsistente dentro de roles. Voice-tone §2: términos técnicos con equivalente natural → traducir.
- **Fix:** `primario`, `fondo profundo`, `acento · firma`, `solo gradiente`, `texto sobre paper` (o uniformar todo en inglés dev-grade si se prefiere — pero decidir).

**M12. [p15 Ratio] — "Si todo es magenta, nada es magenta. Un magenta por página." — frase potente pero debería elevarse a regla con marco, no perderse en body.**
- **Fix:** mantener pero destacar tipográficamente como pull-quote de sección.

**M13. [p19 Sistema tipográfico] — "Aa" en specimen sin mostrar glifos distintivos. Premium espera alphabet full (A-Z, 0-9) al menos en Fraunces y Host.**
- **Fix:** añadir página 19bis con specimen A-Z a-z 0-9 para las tres familias.

**M14. [p22 Type don'ts] — "Raleway es Inter de 2014." — chiste interno para diseñadores; el manual lo lee el equipo de Shamusic (no diseñadores senior).**
- **Fix:** `"Raleway está sobreutilizada y pierde distinción. Host Grotesk da carácter industrial más acorde con Rebel+Creator."`

**M15. [p24 Textura notación] — "Huella dactilar." como título es poético pero confuso; la textura no es una huella.**
- **Fix:** `"La partitura invisible."` o `"Notación como firma."`

**M16. [p28 Voice attrs card 3 "Cercana"] — "No colega" incluye "'panas'" (Venezuela/Colombia) como ejemplo a evitar. Correcto, pero el voice-tone oficial lista "familia, reyes, leyenda" — "panas" se añadió.**
- **MINOR** — consistencia con canon. Sustituir "panas" por "leyenda" para alinear.

**M17. [p30 Do/Don't] — Solo 5 pares, voice-tone canónico tiene 10. Premium debe mostrar 8-10 mínimo.**
- **Fix:** añadir página 30bis con otros 5 pares del canon:
  - ✓ "9,99 € al mes. Obras ilimitadas. Sin letra pequeña." ✕ "¡Oferta low-cost por tiempo limitado!"
  - ✓ "Registramos tu obra en blockchain. Sello temporal inmutable." ✕ "Solución integral disruptiva de propiedad intelectual."
  - ✓ "Cobra por tu música. Sin intermediarios que se queden el 80%." ✕ "Monetiza tu contenido y maximiza tu ROI."
  - ✓ "Primera plataforma española que registra, produce y estrena." ✕ "Startup innovadora que revoluciona la industria."
  - ✓ "Activa Discovery Mode y conecta." ✕ "¡Desbloquea acceso VIP a Discovery!"

**M18. [p35 Poster IG anatomy] — "Este template codifica 12 meses de reconocimiento." — "template" sin traducir.**
- **Fix:** `"Esta plantilla codifica 12 meses de reconocimiento."`

**M19. [p36 Reel] — Único reel ejemplificado. El guion de voice-tone.md (Reel 15s "Regístrate antes de publicar" con tabla seg/visual/tipo/voz) no aparece literal en el manual.**
- **Fix:** ver pp. propuestas §3 (Reel pack).

**M20. [p40 Sessions anatomy] — "edición numerada (#001, #002…)" — coherente con voice-tone (#047). Pero metadata en p. 39 mezcla: "ED. #047" con punto y almohadilla; coherencia pide solo `#047`.**
- **Fix:** normalizar a `SESSIONS #047`.

**M21. [p40] — "Silk Moraleja · Jazzville · Café Teatro Las Rozas" — inconsistente con voice-tone ("Silk · La Moraleja"). Falta "La".**
- **Fix:** `"Silk · La Moraleja · Jazzville · Café Teatro Las Rozas"`

**M22. [p42 Certificado] — "Válida ante SGAE, AIE, entidades de gestión y procedimientos legales." — sobre-promesa legal peligrosa. El registro blockchain NO es automáticamente válido ante SGAE.**
- **Fix:** `"Este documento constituye prueba técnica de autoría anterior a la publicación, admisible como evidencia en procedimientos legales y reclamaciones de autoría."`

**M23. [p43 Email transaccional] — Asunto: "Tu obra está registrada. Hash dentro." — OK, pero no coincide con voice-tone §4 ejemplo 6: "Registrado. Tu obra está sellada."**
- Decidir cuál es canónico. Recomendación: usar voice-tone canónico (menos palabras, más imperativo).

**M24. [p43 Email] — "Acabamos de sellar *Noche magenta* en la red." — "la red" ambiguo; blockchain es más preciso.**
- **Fix:** `"Acabamos de sellar *Noche magenta* en blockchain."`

**M25. [p43 Hero web] — "5.208 ARTISTAS · 340 POSTS" — "POSTS" en inglés descuadra. Además, dato dudoso (¿340 posts es social proof débil?).**
- **Fix:** `"5.208 ARTISTAS · 12.400 OBRAS REGISTRADAS"` (métrica relevante al producto, no social).

**M26. [p44 Cierre mantra] — "Si no lo registras, cualquiera lo hará." — VERSIÓN CORTA del mantra secundario #1. Pero no dice "Regístrate antes de publicar" (el mantra canónico).**
- **Decisión:** esta frase es el mantra #4 refundido ("Un hash vale más que mil pleitos" encaja mejor como cierre). Reemplazar o añadir página 44bis con los 5 mantras.

### MINOR

**m1. [p01 Portada] — "Manual de marca · Premium edition" mezcla ES+EN.**
- **Fix:** `"Manual de marca · Edición Premium"`.

**m2. [p01] — "Primera plataforma blockchain para artistas independientes." — "primera" es reclamo fuerte sin matizar (¿primera en España? ¿mundial?).**
- **Fix:** `"Primera plataforma española que registra en blockchain, produce y estrena música de artistas independientes."`

**m3. [p03] — "AXIS: Bold" en inglés mientras "ARCHETYPE: Rebel + Creator" también. Coherente pero internamente sería `"EJE"` y `"ARQUETIPO"`.**
- **NIT** — mantener si el equipo acepta anglicismos técnicos. Si se prioriza voz español, traducir.

**m4. [p04 Esencia divider] — "Lo que Shamusic protege, lo que Shamusic empuja, lo que Shamusic jamás hará." — repetición de "Shamusic" intencional (anáfora), pero frena la lectura.**
- **Fix:** `"Lo que protege. Lo que empuja. Lo que jamás hará."`

**m5. [p06 Valor 05 "Honestidad"] — "Y la prueba vale más." — fin inesperado; cae bien pero "la prueba vale más que un viral" sería más específico.**
- **Fix:** `"No prometemos virales. Prometemos la prueba. La prueba dura décadas. El viral, una semana."`

**m6. [p07 Pilares] — Los 4 pilares en una página sin jerarquía de importancia. "Registro" debería ocupar más espacio visual que "Discovery" (Registro es el core product, Discovery es side feature).**
- **Fix estratégico:** considerar layout 50/50 + 25/25 (Registro grande, los otros pequeños) en lugar de 4 columnas iguales.

**m7. [p12] — "Ningún elemento dentro del clearspace." — "clearspace" en inglés.**
- **Fix:** `"Ningún elemento dentro de la zona de respeto."`

**m8. [p15 Ratio] — "Oxígeno editorial" es frase de diseñador, no de Shamusic.**
- **Fix:** `"Aire. Respiración entre momentos de intensidad."`

**m9. [p17 WCAG] — "FAIL · solo display" — "FAIL" en inglés. Mejor: "NO · solo display grande".**

**m10. [p18 Type divider subtitle] — "De tres familias caóticas a un sistema de dos familias." — Contradicción interna: el sistema tiene TRES familias (Fraunces, Host, JetBrains), no dos. Error factual.**
- **Fix:** `"De tres familias caóticas a un sistema de tres con rol."`

**m11. [p20 Scale] — Samples tipográficos en inglés/mezcla: "METADATA · PAGE NUMBER · LABEL" debería ser español.**
- **Fix:** `"METADATA · PÁGINA · ETIQUETA"` o mantener si es decisión dev-grade.

**m12. [p24] — "Aparece en covers, dividers y aperturas de sección" — "covers" y "dividers" en inglés sin traducir.**
- **Fix:** `"Aparece en portadas, separadores y aperturas de sección."`

**m13. [p26] — "No es decoración ambient" — "ambient" en inglés.**
- **Fix:** `"No es decoración ambiental."` o `"No es fondo decorativo."`

**m14. [p31 Photo divider] — "Nunca foto stock. Nunca saturada." — correcto pero la doble negación podría ser más directa.**
- **NIT** — mantener.

**m15. [p33 Environments] — "MADRID · BARCELONA · CDMX" — si el mercado es España + LATAM, ¿por qué solo CDMX de LATAM? Buenos Aires, Bogotá, Santiago son mercados lógicos.**
- **Fix de producto (consultar):** `"MADRID · BARCELONA · CDMX · BUENOS AIRES · BOGOTÁ"`

**m16. [p35 Poster] — handle usado inconsistente: a veces "@shamusica", a veces "@SHAMUSICA". Coherencia.**
- **Fix:** siempre `@shamusica` en body/captions; `@SHAMUSICA` solo cuando forma parte de un poster con todos los textos en uppercase.

**m17. [p36 Reel hook] — "«Si no lo registras…»" — comillas angulares españolas, bien. Pero voice-tone canónico usa frase ligeramente distinta: "Una IA acaba de clonar la voz de un artista vivo."**
- **Fix:** aceptar ambas como variantes del mismo mantra pedagógico.

**m18. [p37 Grid feed] — "02 min lectura" — "min" abreviado genera duda (¿minutos?). Mejor: "2 min de lectura".**

**m19. [p42 Certificado] — "Válida ante SGAE, AIE…" ya señalado en M22. Adicionalmente: "AIE" sin expandir en una pieza pensada para artistas que quizá no conozcan la sigla.**
- **Fix:** `"admisible como prueba en reclamaciones ante SGAE, AIE (Artistas Intérpretes o Ejecutantes) y procedimientos legales."`

**m20. [p43 Email] — "Consérvalo." — correcto. Pero cierre del email sin firma (¿Shamusic? ¿Emma — equipo?). Voice-tone §4 firma: "— El equipo de Shamusic / shamusic.es · Madrid".**
- **Fix:** añadir firma.

**m21. [p45 Créditos] — "ENTREGA: PDF · manual.html · assets Figma" — "assets" en inglés.**
- **Fix:** `"PDF · manual.html · archivos Figma"` o `"PDF · manual.html · sistema Figma"`.

**m22. [p46 Contraportada] — "Sube. Registra. Cobra." — correcto, ALINEADO con voice-tone. Bien.**
- ✓ OK. Incluye los mantras secundarios que sí están bien usados.

### NIT

**n1. [global] — "Tipografía" con tilde correcta en divider p. 18. Verificado. ✓**
**n2. [p29] — "Comunidad" sin artículo es válido estilísticamente (lista de tokens).**
**n3. [p43 Email] — Preview text no aparece explicitado; Premium debería mostrarlo.**
**n4. [p45] — "Este manual es un documento vivo." → cliché pero tolerable.**

---

## 2. Uso de mayúsculas — verificación

| Forma | Uso canónico | Estado en manual |
|---|---|---|
| SHAMUSIC (uppercase) | Solo logo/wordmark/meta-strip | ✓ Correcto (metastrip, posters) |
| Shamusic (capitalizado) | Body, titulares | ✓ Correcto |
| shamusica (handle) | @shamusica | ⚠ Mezcla con @SHAMUSICA — **M16 arriba** |
| Shamusic Sessions | Ambos capitalizados | ✓ Correcto |
| Session #047 | `#` + tres dígitos | ✓ Correcto (#047, #012) |
| Discovery Mode | Ambos EN capitalizados | ✓ Correcto |
| copyright | Minúscula en texto | ✓ Correcto (p02, p05) |
| blockchain | Minúscula siempre | ✓ Correcto |
| FANS | Solo versalitas posters | No aparece; N/A |

**Resultado:** mayúsculas OK salvo @SHAMUSICA inconsistente (M16).

## 3. Puntuación — verificación

- `!!` dobles — **no detectado**. ✓
- `!` simples — no detectados en copy del manual (bien; el canon dice 1 por pieza máx).
- Emojis en body — **p37 grid usa ⚠️** en "ALERTA". Voice-tone permite ⚠️. ✓ Correcto.
- Guion largo `—` — usado consistentemente. ✓

## 4. Trato tú/usted — verificación

Todo el manual usa **tú** directo. ✓ Correcto.
Cero "usted" detectados.

## 5. Mantra maestro — citas correctas

- p02: "Tu música. Tu copyright. Tu dinero." ✓
- p37 grid: idem ✓
- p44 cierre: NO cita el mantra maestro; usa mantra secundario alternativo ("Si no lo registras, cualquiera lo hará."). **Decisión estratégica** — si el cierre debe ser el mantra maestro, reemplazar.

---

## 3. Páginas nuevas propuestas (12 páginas adicionales — 46 → 58)

Estas páginas cubren los gaps Premium detectados. Copy completo ready-to-ship incluido. Insertar DESPUÉS de p30 (voz) y antes de p31 (foto), + expansión en aplicaciones (post p43).

---

### NUEVA P-A · "Tone range por contexto" (insertar tras p28)

**Objetivo:** mostrar las 8 variaciones tonales del canon para que un redactor sepa qué registro usar según plataforma.

**Copy completo:**

> **HEADER:** Voz · Ocho contextos · Un mismo ADN
>
> **H1:** La misma voz. Ocho volúmenes.
>
> **Tabla:**
> | Contexto | Tono | Apertura canónica |
> |---|---|---|
> | Reel IA / plagio | Serio + urgente | "Una IA acaba de clonar la voz de un artista vivo. Esto es lo que tienes que hacer hoy." |
> | Post Sessions | Celebratorio + acogedor | "Jueves. Silk. Micro abierto. Trae tu canción." |
> | Confirmación registro | Preciso + calmado | "Registrado. Tu obra queda sellada a las 21:04 del 12.04.2026." |
> | Alerta plagio | Directo + protector | "Hemos detectado un uso no autorizado. Tu certificado es la prueba." |
> | Primeros pasos | Cálido + instructivo | "Bienvenida a Shamusic. Tres pasos y tu primera obra está protegida." |
> | Hero web | Declarativo + manifiesto | "Sube tu música. El copyright es tuyo antes del primer play." |
> | Blog / novedades | Editorial + pedagógico | "Lorde firmó su primer contrato con 12 años. Esto es lo que no te cuentan del día después." |
> | Legal / términos | Preciso + humano | "Esto es lo que hacemos con tus datos. Corto, en cristiano, sin letra pequeña." |
>
> **Footer:** El tono cambia. El mantra no.

---

### NUEVA P-B · "Tríos rítmicos y mantras secundarios" (insertar tras P-A)

**Objetivo:** codificar los 5 tríos rítmicos firma + 5 mantras secundarios como assets visuales reutilizables.

**Copy:**

> **HEADER:** Sistema verbal · Firmas rítmicas
> **H1:** Cinco tríos. Cinco mantras. El ritmo de la marca.
>
> **Columna izquierda — TRÍOS RÍTMICOS**
> 01 · **Sube. Registra. Cobra.** — onboarding, hero, CTA.
> 02 · **Tu obra. Tu prueba. Tu defensa.** — sección copyright.
> 03 · **Un jueves. Un micro. Una canción.** — Sessions.
> 04 · **Hash. Sello. Certificado.** — cómo funciona.
> 05 · **Escribe. Graba. Regístrate antes de publicar.** — pedagogía anti-plagio.
>
> **Columna derecha — MANTRAS SECUNDARIOS**
> 01 · **Regístrate antes de publicar.** — pedagógico, evergreen.
> 02 · **La prueba es tuya.** — post-registro.
> 03 · **Sube. Registra. Cobra.** — 3-step.
> 04 · **Un hash vale más que mil pleitos.** — editorial punzante.
> 05 · **Del estudio al jueves.** — Sessions + producción.
>
> **CTAs verbales:**
> — Registra tu primera obra — gratis. (top-of-funnel)
> — Pásate a Premium. (upgrade)
> — Nos vemos el jueves. (Sessions)
>
> **Footer:** El mantra maestro no se toca. Los secundarios rotan según campaña.

---

### NUEVA P-C · "Plantillas de reel — 3 guiones completos" (expandir p36)

**Objetivo:** ampliar de 1 a 3 guiones de reel, cubriendo los 3 contextos principales (plagio, Sessions, tutorial).

**Copy:**

> **H1:** Tres reels. Tres ángulos. Un mismo sistema.
>
> **REEL 01 · "Regístrate antes de publicar" (pedagogía anti-plagio)**
> | Seg | Visual | On-screen | Voz en off |
> |---|---|---|---|
> | 0-2 | Manos subiendo .wav a Spotify | — | — |
> | 2-5 | Waveform magenta sobre midnight | **"SUBES."** | "Subes tu canción." |
> | 5-8 | 5 logos de plataformas apareciendo | **"LA PUBLICAS."** | "La publicas en todas partes." |
> | 8-11 | Waveform duplicándose | **"ALGUIEN LA COPIA."** | "Alguien la renombra, la sube como suya." |
> | 11-14 | Certificado blockchain con hash | **"¿DÓNDE ESTÁ TU PRUEBA?"** | "¿Dónde está tu prueba?" |
> | 14-15 | Logo SHAMUSIC + shamusic.es | **shamusic.es** | — |
>
> **REEL 02 · "Sessions este jueves" (comunidad)**
> | Seg | Visual | On-screen | Voz en off |
> |---|---|---|---|
> | 0-3 | Interior Silk, luz magenta, gente | **"JUEVES · 21H"** | Samples de tres cortes mezclados |
> | 3-8 | 3 retratos duotono con nombre | **"@emmaavallejo / @prod.vgb / @lia.ruiz"** | — |
> | 8-12 | Micro abierto en primer plano | **"TRAE TU CANCIÓN."** | "Trae tu canción o trae tus oídos." |
> | 12-15 | Wordmark + dirección | **"SILK · LA MORALEJA · ENTRADA LIBRE"** | — |
>
> **REEL 03 · "Cómo funciona en 15s" (tutorial)**
> | Seg | Visual | On-screen | Voz en off |
> |---|---|---|---|
> | 0-3 | Pantalla app: botón "Subir obra" | **"1. SUBES."** | "Subes el audio." |
> | 3-7 | Animación hash generándose | **"2. REGISTRAMOS."** | "Lo sellamos en blockchain. Tres segundos." |
> | 7-11 | Certificado PDF aparece | **"3. TIENES LA PRUEBA."** | "Te damos el certificado. Descargable." |
> | 11-15 | CTA magenta flat | **"GRATIS. SIN LETRA PEQUEÑA."** | "Gratis. Sin letra pequeña." |

---

### NUEVA P-D · "Carrusel pedagógico IG (10 slides)" (nueva, tras p36)

**Objetivo:** codificar el formato carrusel que el manual actual no toca.

**Copy:**

> **H1:** Carrusel · 10 slides · El formato pedagógico.
>
> **ESTRUCTURA CANÓNICA:**
> - Slide 01 · HOOK (display XL sobre midnight)
> - Slides 02-08 · CONTENIDO (alternar midnight/paper; 1 dato por slide)
> - Slide 09 · MANTRA (fondo magenta flat)
> - Slide 10 · CTA (logo + URL + handle)
>
> **EJEMPLO COMPLETO — "5 cosas que no te dice la SGAE":**
>
> 01 · *Midnight.* "5 cosas que la SGAE no te dice." / "Desliza →"
> 02 · *Paper.* "01. Tu obra no queda registrada al afiliarte. Solo gestionan cobros."
> 03 · *Midnight.* "02. La inscripción cuesta tiempo. Semanas, a veces meses."
> 04 · *Paper.* "03. Si tu obra se plagia antes del alta, no hay cobertura."
> 05 · *Midnight.* "04. El 80% del reparto se va a los 100 artistas más escuchados."
> 06 · *Paper.* "05. Para reclamar, necesitas prueba anterior a la publicación."
> 07 · *Midnight.* "Esa prueba se llama hash." + imagen hash en mono magenta.
> 08 · *Paper.* "Y se genera en 3 minutos." + captura certificado.
> 09 · *Magenta flat.* "Regístrate antes de publicar." (Fraunces 900)
> 10 · *Midnight.* Logo SHAMUSIC + shamusic.es + @shamusica

---

### NUEVA P-E · "Stories — 4 plantillas" (nueva, tras P-D)

**Copy:**

> **H1:** Stories · Cuatro plantillas. Ningún improv.
>
> **01 · ALERTA (⚠️)**
> Fondo: midnight + grano.
> Texto: **"⚠️ ALERTA PLAGIO — Hemos detectado un uso no autorizado de una obra registrada. El certificado es tu defensa. Abre la app."**
> CTA sticker: "VER APP".
>
> **02 · SESSIONS (🎤)**
> Fondo: retrato duotono o interior jazz club.
> Texto: **"Esta noche. Silk. 21:00. Trae tu canción. 🎤"**
> CTA sticker: "CÓMO LLEGAR".
>
> **03 · NUEVO ARTISTA (📜)**
> Fondo: poster SHAMUSIC PRESENTS.
> Texto: **"Nueva edición — @emmaavallejo entra a Shamusic. Nueva obra registrada."**
> CTA sticker: "ESCUCHAR".
>
> **04 · PEDAGOGÍA (pregunta retórica)**
> Fondo: magenta flat.
> Texto: **"¿Subes antes de registrar? Entonces firmas en blanco."**
> CTA sticker: ENCUESTA "¿Sueles registrar?" SÍ / NO.
>
> **REGLA:** máx 25 palabras por story. Un emoji máximo.

---

### NUEVA P-F · "Email — Plantillas transaccionales (6)" (expandir p43)

**Copy:**

> **H1:** Email · Seis asuntos. Seis plantillas.
>
> **01 · BIENVENIDA (primer registro)**
> Asunto: **"Bienvenida a Shamusic. Tu primera obra te espera."**
> Preview: Tres pasos. Tres minutos. Cero papeles.
> Body:
> > Hola [Nombre],
> >
> > Acabas de abrir cuenta en la primera plataforma española que registra en blockchain, produce y estrena música independiente.
> >
> > Tres pasos para tu primera obra:
> > 01 · Sube el audio.
> > 02 · Le ponemos hash y sello temporal.
> > 03 · Descargas tu certificado.
> >
> > Regístrate antes de publicar. Eso es todo.
> >
> > — El equipo de Shamusic · shamusic.es · Madrid
>
> **02 · CONFIRMACIÓN REGISTRO**
> Asunto: **"Registrado. Tu obra está sellada."**
> Preview: Hash + certificado descargable dentro.
> Body: (versión canónica voice-tone §4).
>
> **03 · ALERTA TERCERO CONSULTA HASH**
> Asunto: **"Alguien acaba de verificar tu hash."**
> Preview: No es un problema. Es exactamente lo que queremos.
> Body:
> > Emma,
> >
> > Un tercero ha consultado el hash de *"Noche magenta"* a las 14:22 del 13.04.2026.
> >
> > Esto pasa cuando alguien quiere confirmar tu autoría — un sello, una plataforma, un abogado. No es un plagio, es lo contrario: es el sistema funcionando.
> >
> > Si recibes una oferta o una reclamación vinculada, tu certificado es la prueba. Puedes descargarlo de nuevo aquí.
> >
> > — Shamusic
>
> **04 · ACCESO RECHAZADO A SESSIONS**
> Asunto: **"Esta edición de Sessions está completa. La siguiente, sí."**
> Body:
> > [Nombre],
> >
> > Esta semana no entras — el aforo de Session #048 se llenó en 2h. No es personal, es geometría.
> >
> > Te reservamos plaza prioritaria para #049 (22.05.2026 · Silk · 21h). No tienes que hacer nada: te apuntamos automáticamente.
> >
> > Si prefieres venir a una edición concreta, responde a este email.
> >
> > — Sessions
>
> **05 · UPGRADE A PREMIUM**
> Asunto: **"Pásate a Premium. Obras ilimitadas."**
> Preview: 9,99 €/mes. Sin letra pequeña.
> Body:
> > [Nombre],
> >
> > Con tu plan Free has registrado 3 obras. Bien.
> >
> > Premium te da obras ilimitadas, Discovery Mode, colaboración con productores y perfil público con streaming directo. 9,99 € al mes. Sin permanencia.
> >
> > Pásate a Premium.
> >
> > — Shamusic
>
> **06 · BAJA / CANCELACIÓN**
> Asunto: **"Listo. Baja procesada. Tus obras siguen registradas."**
> Body:
> > [Nombre],
> >
> > Hemos dado de baja tu Premium. Vuelves a plan Free el [fecha]. Nada se borra: tus obras siguen selladas, tus certificados siguen descargables, tu hash sigue siendo prueba.
> >
> > Si te vas del todo, avísanos y te exportamos todo antes de cerrar cuenta.
> >
> > — Shamusic

---

### NUEVA P-G · "Push notifications · 8 plantillas"

**Copy:**

> **H1:** Push · Ocho plantillas. Máximo 10 palabras.
>
> **REGLAS:**
> - Máx 10 palabras.
> - Sin emojis en el cuerpo (solo en prefijo opcional).
> - Verbo primero siempre.
> - Nombre del artista si es posible (personalización = +47% CTR).
>
> **01 · Registro confirmado**
> > Registrada. *Noche magenta* sellada a las 21:04.
>
> **02 · Alerta hash consultado**
> > Alguien consultó tu hash. Revisa la app.
>
> **03 · Alerta posible plagio**
> > ⚠️ Uso no autorizado detectado. Abre Shamusic.
>
> **04 · Sessions esta noche**
> > Hoy. Silk · 21h · Session #048. Trae tu canción.
>
> **05 · Nuevo artista Discovery**
> > @prod.vgb quiere colaborar contigo. Ver propuesta.
>
> **06 · Recordatorio upgrade**
> > Tu tercera obra espera. Pásate a Premium.
>
> **07 · Certificado listo**
> > Tu certificado está listo. Descárgalo cuando puedas.
>
> **08 · Nueva edición Sessions**
> > Session #049 abre aforo. Plazas limitadas.

---

### NUEVA P-H · "Copy de errores y estados UI (9 mensajes)"

**Copy:**

> **H1:** Errores · Copy del sistema cuando algo se rompe.
>
> **REGLA:** el error explica QUÉ pasa y QUÉ hacer. Nunca echa la culpa al usuario. Nunca usa "error", "incorrecto" o "inválido" a secas.
>
> **01 · Archivo demasiado grande**
> > "Este archivo pesa 187 MB. Nuestro tope son 100 MB por obra. Comprime o divide y vuelve."
>
> **02 · Formato no soportado**
> > "Este formato no lo podemos sellar. Aceptamos .wav, .mp3, .flac, .aiff."
>
> **03 · Hash ya existe (duplicado)**
> > "Esta obra ya está sellada en Shamusic — por ti, en otra cuenta o por un tercero. Si crees que es un error, escríbenos a hola@shamusic.es."
>
> **04 · Pago fallido**
> > "El pago no pasó. Puede ser la tarjeta, puede ser el banco. Prueba otra vez o cambia de método."
>
> **05 · Sin conexión**
> > "Sin conexión. Seguimos aquí cuando vuelvas."
>
> **06 · Obra no encontrada**
> > "Esta obra no existe o se ha retirado. Si tenías un enlace guardado, puede estar caducado."
>
> **07 · Login fallido**
> > "Email o contraseña no cuadran. Si no te acuerdas, te mandamos un enlace."
>
> **08 · Mantenimiento**
> > "Estamos mejorando algo por dentro. Diez minutos y volvemos."
>
> **09 · Acceso denegado (Sessions aforo)**
> > "Esta edición está completa. Te reservamos la siguiente."

---

### NUEVA P-I · "Copy legal — página Términos (extractos)"

**Copy:**

> **H1:** Legal · En cristiano. Sin letra pequeña.
>
> **Intro (página legal de la web):**
> > Esto es lo que hacemos con tu música y tus datos. Corto, claro, sin letra pequeña.
>
> **Sobre tu obra:**
> > Tu obra es tuya. Siempre. Nosotros solo registramos una huella técnica (hash) en una red distribuida pública. No poseemos tu música, no la distribuimos a plataformas sin tu permiso, no la usamos para entrenar modelos.
>
> **Sobre tus datos:**
> > Guardamos lo mínimo para que el servicio funcione: email, nombre, método de pago (si eres Premium), metadatos de tus obras. No los vendemos. No los compartimos con terceros que no sean necesarios para procesar pagos (Stripe) o enviar emails (Resend).
>
> **Sobre tu suscripción:**
> > Premium son 9,99 €/mes. Sin permanencia. Cancelas cuando quieras desde tu cuenta. Las obras que registraste mientras fuiste Premium siguen registradas — nada se pierde al bajar de plan.
>
> **Sobre disputas:**
> > Si alguien reclama una obra tuya, tu certificado es la prueba técnica de autoría anterior. No podemos mediar, pero podemos aportar la evidencia. La jurisdicción aplicable es Madrid, España.
>
> **Sobre IA:**
> > Ningún dato de Shamusic (audios, metadatos, perfiles) se usa para entrenar modelos de IA generativa — ni nuestros ni de terceros. Esto no es una política: está en contrato.
>
> **Footer legal:** "Este resumen es la voz humana del documento. El texto legal completo está [aquí]. Si algo contradice, manda este resumen."

---

### NUEVA P-J · "Naming — Cómo nombrar un Session + playlists + bios"

**Copy:**

> **H1:** Naming · Cómo se bautizan las piezas de Shamusic.
>
> **SESSIONS** (1-2 palabras evocadoras, Fraunces 900):
> - "Noche magenta" · #047
> - "Primera luz" · #048
> - "Último piso" · #049
> - "Reverb" · #050
> - "Tres voces" · #051
>
> **REGLA:** sustantivo + adjetivo O sustantivo + sustantivo. Nunca verbos. Nunca números en el nombre. Evocativo, no literal. Prohibido: "Sessions de abril", "Gran Sessions", "Sessions especial".
>
> **PLAYLISTS SPOTIFY** (descripción <120 char, voz Shamusic):
> - *Shamusic Discovery* — "Diez artistas que registraron antes de publicar. Actualizada cada jueves."
> - *Del estudio al jueves* — "Lo que se grabó esta semana en Madrid. Crudo, reciente, con copyright probado."
> - *Sessions tapes* — "Grabaciones del micro abierto. Sin retoque. Martes después del jueves."
>
> **INSTAGRAM BIO** (150 char):
> > Primera plataforma española que registra tu música en blockchain. Sube · Registra · Cobra. Sessions cada jueves en Madrid. ↓
>
> **TWITTER/X BIO** (160 char):
> > Tu música. Tu copyright. Tu dinero. Registro blockchain para artistas independientes. Sessions · Madrid · jueves. shamusic.es
>
> **LINKEDIN COMPANY** (2000 char, tono corporate-pero-Shamusic):
> > Shamusic es la primera plataforma española que registra música en blockchain, produce en estudios propios y estrena cada jueves en directo desde Madrid. Creada para el artista independiente que quiere prueba legal de autoría, comunidad real y cobro sin intermediarios. 9,99 €/mes. Sin permanencia. Sin letra pequeña.

---

### NUEVA P-K · "FAQ — 8 preguntas canónicas con copy ready-to-ship"

**Copy:**

> **H1:** FAQ · Ocho preguntas. Ocho respuestas directas.
>
> **01 · ¿El registro en blockchain tiene validez legal?**
> > Sí, como prueba técnica de autoría anterior a la publicación. No sustituye a la SGAE (eso es gestión de cobro), pero sí sirve como evidencia en un pleito o reclamación.
>
> **02 · ¿Qué pasa si cancelo Premium?**
> > Vuelves al plan Free. Las obras que registraste siguen registradas. Nada se borra, nada se pierde.
>
> **03 · ¿Podéis subir mi música a Spotify?**
> > No somos distribuidora. Registramos tu copyright antes de que tú subas a donde quieras: Spotify, Apple Music, Bandcamp, tu propia web.
>
> **04 · ¿Y si mi obra ya está publicada en otra plataforma?**
> > Puedes registrarla igual. La fecha del hash será la de hoy, no la de la publicación original. Protege desde ahora contra usos futuros.
>
> **05 · ¿Quién puede entrar a Shamusic Sessions?**
> > Cualquier artista independiente. Aforo 80 personas, entrada libre hasta completar. Los 3 artistas del lineup se eligen por rotación — si quieres entrar, sube obras y manifiestalo.
>
> **06 · ¿Discovery Mode es un match como Tinder?**
> > No. Es una herramienta de conexión entre artistas y productores basada en compatibilidad de género, fase del proyecto y ubicación. No es un swipe.
>
> **07 · ¿Puedo borrar una obra registrada?**
> > Puedes ocultar tu perfil y retirar una obra de Discovery. El hash en blockchain no se borra — es justo lo que le da valor de prueba. Si quieres eliminar el hash por RGPD, escríbenos.
>
> **08 · ¿Cuánto cuesta todo esto?**
> > Free: 3 obras registradas, sin Discovery, sin perfil público. Premium: 9,99 €/mes, obras ilimitadas, Discovery, perfil público. Sin permanencia.

---

### NUEVA P-L · "Blog post anatomy + ejemplo completo"

**Copy:**

> **H1:** Blog · Cómo escribir una entrada Shamusic.
>
> **ESTRUCTURA (5 partes):**
> 1. Hook de una frase (serif Fraunces 900).
> 2. Caso real / gancho (3-4 líneas).
> 3. Explicación técnica (cuerpo, con 1 dato y 1 cita).
> 4. Qué hacer hoy (3 pasos imperativos).
> 5. Cierre con mantra secundario.
>
> **EJEMPLO COMPLETO · "Lorde firmó su primer contrato con 12 años":**
>
> > **Lorde firmó su primer contrato con 12 años.**
> >
> > Esto es lo que no te cuentan del día después.
> >
> > Ella Yelich-O'Connor firmó con Universal Music Group en 2009 con un contrato que le dejaba sin control creativo sobre su propia voz hasta los 21. Cuando se quiso renegociar *Royals* en 2013, ya era tarde: el tema había generado 1,3 millones de dólares y ella cobraba 0,08 € por stream. Lorde no es víctima; Lorde es evidencia.
> >
> > El 67% de artistas latinoamericanos registran sus obras DESPUÉS de publicarlas, según el estudio de IFPI 2024. Es decir: tres de cada cuatro canciones salen al mundo sin prueba de autoría anterior. Un plagio, un sample no autorizado, una IA que clona voz — y no hay cómo ganar el pleito.
> >
> > Eso es lo que blockchain resuelve en 3 minutos:
> > 01 · Sube el audio antes de publicar.
> > 02 · Deja que lo sellemos con hash y timestamp.
> > 03 · Guarda el certificado. Es tu prueba.
> >
> > Un hash vale más que mil pleitos. Y cuesta menos que un café.
> >
> > — Shamusic

---

## 4. Resumen de acciones

### Inmediatas (BLOCKER — antes de entregar al cliente)
1. Corregir lexicon p29 (22 SÍ canónicos, 15 NO canónicos). [B1-B4]
2. Corregir "Match → Conexión" en p7 pilares. [B6]
3. Añadir 10 páginas nuevas mínimo para justificar tier Premium. [B5]

### Alta prioridad (MAJOR)
- 26 fixes de copy listados M1-M26.

### Siguientes iteraciones
- 22 MINOR fixes (m1-m22).
- Decisión estratégica sobre ES vs EN en términos técnicos (paleta p14, assets p45).

### Estado final esperado
- 46 páginas → **58 páginas** (+12 nuevas)
- Voice-tone canon 100% respetado
- Cobertura Premium de aplicaciones verbales: reel × 3, carrusel, stories × 4, emails × 6, push × 8, errores × 9, FAQ × 8, legal, naming, blog.
- Mantra maestro + 5 secundarios + 5 tríos + 3 CTAs todos presentes y citados literalmente.

---

**Firma del audit:** si el cliente lee p28 y p29 seguidas con los fixes BLOCKER aplicados, debería poder escribir un post de Instagram, un email transaccional y una story sin abrir ninguna otra referencia. Esa es la vara.
