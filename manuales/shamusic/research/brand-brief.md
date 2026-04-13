# Shamusic — Brand Brief (Premium Manual)

**Autor:** creative-director (Tramarca)
**Fecha:** 2026-04-13
**Scope:** Manual de marca Premium 40-50pp. Logo INTACTO — solo se documenta y sistematiza.
**Axis decidido:** **bold** con sistema editorial — magenta como firma no negociable, midnight como lienzo, tipografía de peso extremo, notación musical line-art como textura recurrente.

---

## 1. Positioning Axis

**→ BOLD.**

Tres razones:
1. **Canal principal es Instagram/reel.** El feed se gana con contraste y personalidad, no con sobriedad corporate. Un axis `sistemático` (tipo Linear, Pentagram) moriría en el scroll — Shamusic compite contra DistroKid, SGAE y posts de artistas, no contra SaaS B2B.
2. **El mantra "Tu música. Tu copyright. Tu dinero." es un manifiesto, no un claim técnico.** Exige tipografía declarativa, peso extremo, cadencia de poster político. Híbrido diluiría la fuerza.
3. **El logo ya es bold** (wordmark chunky black + símbolo circuit magenta saturado sobre midnight casi-negro). Un manual sistemático contradiría el activo existente. El trabajo es **construir el sistema editorial que el logo exige y aún no tiene**.

---

## 2. Brand Archetype

**Primario: Rebel (Outlaw).**
**Secundario: Creator.**

**Argumento:**
Shamusic se construye como el aliado del artista independiente **contra** el sistema — contra los sellos que se quedan con el 80% de los royalties, contra el plagio, contra la opacidad de la SGAE, contra la IA que suplanta. El lenguaje recurrente en web e Instagram es de **protección y reivindicación** ("Si no registras tu canción, cualquiera puede copiártela", "Tu música. Tu copyright. Tu dinero."). Eso es **Rebel** puro: el archetype que se define por un enemigo claro (la industria extractiva) y un aliado (el artista emergente).

La capa **Creator** viene de que el producto también habilita creación (producción, colaboraciones, Discovery, Sessions en directo). Evita que la marca sea solo reactiva/defensiva: Shamusic no solo te protege, te hace crecer.

**Implicaciones visuales:** paletas de alto contraste (midnight + magenta), tipografía declarativa, layouts asimétricos, uso de typography as protest sign. Nada redondeado, nada "friendly". Border-radius máximo 4-8px (rompemos el pill 200px actual — es cliché 2018).

---

## 3. Brand Tokens CSS

Paleta racionalizada: de 4 morados sin rol a **1 primario + 1 deep + 1 accent con light variant + neutros + semánticos**.

```css
/* ============================================================ */
/* SHAMUSIC — Brand Tokens v1                                   */
/* ============================================================ */

/* PRIMARY — Midnight: autoridad, protección, lienzo principal */
--color-primary:        #120A25;  /* Midnight Studio — BG hero, covers, poster bg */
--color-primary-deep:   #06020F;  /* Obsidian — secciones aún más profundas, print rich black */

/* ACCENT — Magenta: energía, CTA, FIRMA DE MARCA (no negociable) */
--color-accent:         #CE68D2;  /* Signal Magenta — CTAs, highlights, símbolo del logo */
--color-accent-light:   #F5C2F7;  /* Magenta Dust — magenta sobre magenta, hover states, accent secundario sobre midnight */
--color-accent-deep:    #7A00DF;  /* Violet Deep — gradient stop, fondos accent alternativos, solo decorativo */

/* NEUTRALS — Paper/Ink/Mid */
--color-neutral-paper:  #F4F1EA;  /* Bone Paper — off-white editorial, NO blanco puro (editorial premium feel) */
--color-neutral-ink:    #0A0612;  /* Ink Black — texto sobre paper, near-black con matiz violeta */
--color-neutral-mid:    #8B8499;  /* Ash Violet — texto secundario, metadata, captions */

/* SEMANTIC — aplicar con mesura, nunca competir con magenta */
--color-success:        #6EE7B7;  /* Mint Signal — confirmación copyright registrado */
--color-warn:           #FFB547;  /* Amber Signal — alertas plagio, advertencias */
```

**Roles semánticos (la razón por la que existe cada token):**

| Token | Rol narrativo | Uso permitido | Uso prohibido |
|---|---|---|---|
| `--color-primary` | **Autoridad / protección** | Fondo hero, poster bg, covers manual, secciones cinematográficas | Nunca como texto sobre accent (contraste pobre) |
| `--color-primary-deep` | **Profundidad editorial** | Dividers full-bleed, section openers, rich black en print | No usar en digital body bg (demasiado plano) |
| `--color-accent` | **Energía / CTA / FIRMA** | CTAs primarios, highlights en headlines, símbolo logo, subrayados mantra | Nunca como fondo de párrafos largos (fatiga) |
| `--color-accent-light` | **Accent sobre oscuro** | Hover, data-viz secundaria, acentos sobre midnight cuando magenta puro compite con logo | No usar sobre paper (contraste insuficiente) |
| `--color-accent-deep` | **Decorativo / gradient** | Gradient stops magenta→violet, textura abstracta, fondos de sección alternativos | Nunca en tipografía (legibilidad) |
| `--color-neutral-paper` | **Lienzo editorial claro** | Fondo secciones pedagógicas del manual, covers alternativas | No usar como CTA bg |
| `--color-neutral-ink` | **Texto primario** | Body text, headlines sobre paper | No usar sobre midnight (se pierde) |
| `--color-neutral-mid` | **Metadata** | Captions, page numbers, labels, bylines | No usar en headlines |

**Regla del 60/30/10 para Shamusic:**
- **60%** midnight (`--color-primary`) — la marca vive en el oscuro
- **30%** neutrals (paper/ink/mid) — oxígeno editorial
- **10%** magenta (`--color-accent`) — nunca más, nunca menos. Si hay duda, menos.

---

## 4. Typography Pairing

**Cambio propuesto:** sustituir **Raleway + Open Sans + Arial** por **Host Grotesk + Fraunces** (dos familias, sistema completo, gratis en Google Fonts + Fontshare).

**Argumento del cambio:**
Raleway es el "Inter de 2014" — omnipresente, sin personalidad, uso defensivo. Para un manual Premium que debe ser el más bonito del portfolio Tramarca, necesitamos:
- Un display **grotesque de peso extremo (900)** que aguante el contraste con el logo chunky existente sin competir con él. Host Grotesk tiene la neutralidad industrial necesaria + weight 900 + ligaturas discretas.
- Un **serif editorial con opsz variable** para el mantra y momentos de gravedad ("Tu música. Tu copyright. Tu dinero." merece un serif que respire). Fraunces con `font-optical-sizing: auto` da peso editorial premium a 120px y legibilidad intacta a 16px.

Si hay resistencia a cambiar display, fallback válido: **Space Grotesk + Fraunces** (Space Grotesk 700 aguanta bien, más cercano al feel tech/blockchain).

### Sistema tipográfico final

| Rol | Familia | Peso | Tamaño | Line-height | Letter-spacing | Uso |
|---|---|---|---|---|---|---|
| **Display XL** (Hero / mantra / poster) | Fraunces | 900 (opsz 144) | 96-160px | 0.92 | -0.03em | "TU MÚSICA. TU COPYRIGHT. TU DINERO." Cover manual. Poster Sessions. |
| **Display L** (Section openers) | Host Grotesk | 900 | 56-80px | 0.95 | -0.02em | Titulares capítulos, covers secundarias |
| **Headline M** (H2 en body) | Host Grotesk | 800 | 32-48px | 1.05 | -0.015em | Secciones dentro de página |
| **Subhead** | Fraunces | 500 italic | 20-24px | 1.3 | 0 | Bajadas, kickers editoriales, pull quotes |
| **Body** | Host Grotesk | 400 | 15-17px | 1.55 | 0 | Párrafos, descripciones |
| **Body emphasis** | Host Grotesk | 600 | 15-17px | 1.55 | 0 | Énfasis inline |
| **Caption / Metadata** | Host Grotesk | 500 | 11-12px | 1.4 | 0.06em UPPERCASE | Page numbers, labels, bylines |
| **Mono / Data** | JetBrains Mono | 500 / 700 | 12-14px | 1.5 | 0 | Hashes blockchain, % estadísticas, timestamps eventos, IDs |

**Pesos a cargar (performance):** Host Grotesk 400/500/600/800/900 · Fraunces 500italic/900 · JetBrains Mono 500/700. Total 8 archivos woff2.

**Anti-patterns explícitos:**
- Nunca Arial (eliminar del site)
- Nunca 3 familias en una misma pieza
- Nunca Fraunces en body copy >2 frases
- Nunca Host Grotesk 400 para headlines (pierde peso)

---

## 5. Visual Direction

6 bullets con referencias mentales:

1. **Editorial tipo Stripe Press × The Face magazine × Resident Advisor.** Layouts asimétricos, grids de 12 columnas con violaciones deliberadas, headlines que invaden márgenes, numeración de página en mono grande. Fotografía de artistas tratada con grain + duotono midnight/magenta.

2. **Notación musical line-art como textura-firma.** La web actual ya tiene pentagramas y notas en line-art sobre los fondos morados — esto es un activo ownable. Sistematizarlo: capa textura `opacity: 0.06` sobre midnight, líneas de 0.5-1px en magenta o paper, aparece en dividers, en backgrounds de cover, en transiciones de sección del manual. Es la "huella dactilar" de Shamusic.

3. **Circuit-board motif del símbolo, expandido como lenguaje.** Los nodos-líneas del símbolo del logo se convierten en sistema: connectors entre secciones, mapas de flujo (ej. registro → hash → certificado), data-viz de Discovery Mode. Siempre magenta sobre midnight, siempre 1px hairline. Es la forma visual de "blockchain + red + música".

4. **Gradientes magenta→violet solo como momento ceremonial.** No decoración ambient. Se usa en: cover del manual, página apertura "Tu música. Tu copyright. Tu dinero.", transición a sección de Sessions. Nunca en botones, nunca en fondos largos. Es el "fade to black" de la marca — respeto por la rareza.

5. **Posters SHAMUSIC PRESENTS como template hero del sistema.** El formato Instagram 4:5 con retrato artista + wordmark es ya icónico en el feed. El manual debe codificar: retrato tratado en duotono midnight/magenta con grain 8%, wordmark fijo top-left o bottom-right, tipografía Fraunces 900 para nombre artista, metadata en mono bottom strip (fecha/venue/IG handle). Consistencia de 12 meses garantiza reconocimiento en scroll.

6. **Grain y ruido como material táctil.** Todo fondo midnight lleva capa de grain `opacity: 4-6%`, film emulation. Anti-digital sterile. Shamusic es de artistas, no de banqueros. La marca debe sentirse como vinilo, no como SaaS.

**Anti-references (evitar parecerse a):**
- Spotify (demasiado pop, verde neón, round everything)
- SGAE / entidades de gestión (gris corporate, sin alma)
- DistroKid (naranja sin sistema, feed caótico)
- Discord (morado saturado "gamer")
- Cualquier marca de blockchain que use gradientes crypto-bro azul/cyan

---

## 6. Principios de comunicación visual

5 principios operativos, no negociables:

1. **El símbolo del logo nunca aparece suelto sin wordmark, excepto en favicon/app icon a ≤48px.** El símbolo solo gana significado al lado de SHAMUSIC. Suelto es circuit genérico — peor, puede leerse como logo blockchain de cualquiera. Solo excepción: contextos donde la asociación ya está establecida (perfil IG, header app logueado).

2. **El magenta se gana, no se gasta.** Nunca más del 10% de la superficie. Si una página tiene CTA en magenta, no puede tener además fondo magenta ni highlight magenta. Un magenta por página. Esta regla protege el valor del color como firma — si todo es magenta, nada es magenta.

3. **Los datos y los hashes viven en mono; la emoción vive en Fraunces; el sistema en Host Grotesk.** Jerarquía semántica tipográfica: un certificado blockchain se ve en JetBrains Mono, un testimonio de artista en Fraunces italic, un titular de sección en Host Grotesk 900. Romper esto rompe la legibilidad del lenguaje de marca.

4. **En video/reel, la tipografía es un solo peso (Host Grotesk 900) y un solo color por escena.** El scroll de Instagram no perdona mezclas. Un reel = una voz tipográfica. Transiciones por color, no por tipografía. La variación ocurre entre reels, nunca dentro del mismo reel.

5. **Toda pieza lleva metadata en mono bottom-strip: fecha, ubicación/canal, hashtag.** Es el "sello discográfico" del sistema — convierte cada post/poster/página en archivo. `05.12.2025 · MADRID · @shamusica` en JetBrains Mono 500 11px uppercase letter-spacing 0.06em. Este detalle es lo que separa un feed de artista amateur de un feed editorial premium.

---

## 7. Handoff a /brand-manual-build

**Inputs listos:**
- Tokens CSS arriba (sección 3) — copiar a `theme.css` del pipeline
- Tipografía — cargar desde Google Fonts (Fraunces, Host Grotesk, JetBrains Mono)
- Positioning Axis: `bold` → usar template editorial asimétrico, covers cinematográficos full-bleed midnight, dividers con gradient magenta→violet ceremonial
- Páginas obligatorias del manual:
  1. Cover (midnight + wordmark + gradient ceremonial)
  2. Mantra spread ("Tu música. Tu copyright. Tu dinero." en Fraunces 900 160px full-bleed)
  3. Archetype (Rebel + Creator)
  4. Logo — versiones, zonas de respeto, min sizes, usos prohibidos (logo intacto, solo documentar)
  5. Color system (roles, 60/30/10, accesibilidad WCAG)
  6. Typography system (specimen Fraunces + Host Grotesk + JetBrains Mono, escala, pesos)
  7. Notación musical texture — uso
  8. Circuit motif — lenguaje visual
  9. Poster SHAMUSIC PRESENTS — template codificado
  10. Instagram system — reel, story, post, carrusel (crítico)
  11. Shamusic Sessions — poster evento Madrid (template físico A3 + digital)
  12. Voice & tone (handoff a conversion-copywriter)
  13. Do / Don't visual
  14. Metadata stamp system
  15. Contact / credits
