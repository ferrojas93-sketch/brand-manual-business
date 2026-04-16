# Shamusic — Research consolidado
**Fecha:** 2026-04-13
**Fuentes:** shamusic.es (home, registro-copyright, producción, canta-directo, suscripción) + instagram.com/shamusica

---

## 1. Brand summary

**Nombre:** Shamusic (scrito SHAMUSIC en logo)
**Categoría:** Plataforma blockchain de registro de copyright musical + producción + eventos en directo
**Tagline ON-SITE:** "Sube tu música. Registra el copyright y promociona tus canciones."
**Propuesta core:** Primera plataforma para artistas independientes que protege derechos de autor y facilita descubrimiento/colaboración.
**Ubicación:** Madrid (Calle Almansa 98, 28040). Servicio digital global + eventos físicos en Madrid.
**Público:** Artistas independientes / emergentes España + LATAM (Colombia, Venezuela, Ecuador, Nicaragua, Chile, Argentina, Perú, México) + Miami.
**Mantra clave detectado (repetido en /registro-copyright-musica):** **"Tu música. Tu copyright. Tu dinero."**

---

## 2. Servicios

| Servicio | Descripción | Canal |
|---|---|---|
| Registro copyright | Hash blockchain inmutable + certificado digital con enlace verificable | Plataforma web |
| Suscripción | Free (3 obras) / Premium 9,99€/mes (obras ilimitadas, colaboraciones, perfil extendido) | Plataforma web |
| Producción musical Madrid | Estudios, mezcla, masterización, asesoramiento post-lanzamiento | Estudios físicos Madrid |
| Canta en directo / Shamusic Sessions | Eventos jueves Madrid: Silk (La Moraleja), Sala Jazzville, Café Teatro (Las Rozas). Micro abierto + conciertos + networking | Eventos físicos |
| Discovery Mode | Descubrimiento de artistas dentro de la plataforma (matching) | Plataforma web |
| Asesoramiento legal | SGAE, regalías, propiedad intelectual, plagio | Consultoría |

---

## 3. Sistema visual actual (extracción CSS)

### Paleta descubierta
```css
/* Primarios */
--shamusic-magenta-hot:   #ce68d2;  /* accent principal web (Nectar theme) */
--shamusic-purple-bold:   #9b59b6;  /* secondary */
--shamusic-purple-cta:    #973ac8;  /* botones, enlaces */
--shamusic-violet-vivid:  #7a00df;  /* WP block synced (gradient stop) */

/* Oscuros */
--shamusic-midnight:      #120a25;  /* fondo hero / background oscuro */
--shamusic-ink:           #020a15;  /* casi-negro */
--shamusic-carbon:        #222222;  /* texto oscuro */

/* Neutros */
--shamusic-paper:         #ffffff;
--shamusic-bone:          #f9f9f9;
--shamusic-stone:         #676767;  /* body color */
--shamusic-mist:          #cccccc;
```

### Tipografía detectada
| Rol | Fuente | Peso | Tamaño en site |
|---|---|---|---|
| H1 | **Raleway** | 700 | 50px |
| Body | **Open Sans** | 400 | 16-18px |
| Botones | Arial | 500 | — (inconsistencia) |

**Problema detectado:** uso de 3 familias sin sistema (Raleway + Open Sans + Arial). El manual deberá normalizar esto: proponer sistema de 2 familias como máximo.

### Estilo visual
- Border-radius muy redondeado: **200px** en botones (pill)
- Fondos hero con illustraciones de notación musical line-art en patrón sobre morado oscuro
- Gradientes purple→magenta implícitos
- CTAs en magenta `#ce68d2` sobre fondos oscuros

### Logo existente (a respetar)
- **Wordmark:** "SHAMUSIC" en tipografía chunky display sans-serif, peso black, letras condensadas, muy sólida
- **Símbolo:** estructura tipo circuit-board / red neuronal con 8-10 nodos circulares conectados por líneas (sugiere: blockchain + networking + música)
- **Versiones:** (a) color oscuro sobre fondo claro, (b) outline magenta sobre fondo oscuro
- **Colores logo:** negro/midnight `#120a25` (texto) y magenta vibrante `#ce68d2` (líneas del símbolo)

---

## 4. Arquitectura de navegación

```
HOME
├── SERVICIOS
│   ├── REGISTRO DE MÚSICA (blockchain copyright)
│   ├── PRODUCCIÓN MUSICAL (Madrid)
│   └── CANTA EN DIRECTO (Shamusic Sessions)
├── EQUIPO
├── COLABORADORES
├── SUSCRIPCIÓN (Free / Premium 9,99€)
├── NOVEDADES
│   ├── NOTICIAS
│   └── BLOG
└── EMPIEZA AHORA → open.shamusic.es/signup (app externa)
```

---

## 5. Voice & tone — patrones extraídos

### Léxico recurrente
- `Sube tu música`, `registra`, `protege`, `copyright`, `hash blockchain`, `certificado`, `regalías`
- `artistas independientes`, `artistas emergentes`, `compositor`, `maqueta`
- `Discovery`, `colaboración`, `networking`, `FANS` (mayúscula), `streams`

### Construcciones típicas
- Imperativos directos: "Sube tu música", "Registra tu canción", "Empieza ahora"
- Preguntas retóricas: "¿Sabías que?", "¿Qué es Shamusic?", "¿Cómo lo hacemos?", "¿A quién va dirigido?"
- Tríos rítmicos: **"Tu música. Tu copyright. Tu dinero."**
- Cifras: 67%, 80%, 60% (estadísticas del "¿Sabías que?")
- Cierre cordial: "Hablamos!", "¡Estamos deseando conocerte!"
- Exclamación informal: "!!" (doble signo), emojis musicales 🎶🎧⚠️
- Algún typo ocasional ("musíca") — señal de marca humana, no corporate

### Do / Don't detectados
- **DO:** tono directo, imperativo, cercano, usa datos, empático con el artista independiente
- **DON'T (a corregir en manual):** typos en web oficial, inconsistencia tipográfica, mezcla de mayúsculas/minúsculas sin sistema

---

## 6. Instagram @shamusica (5.208 followers · 340 posts)

### Highlights (stories destacadas)
1. FAQs
2. DISCOVERY MODE
3. COPYRIGHT
4. SHA-SESSIONS

### Tipología de contenido identificada (4 formatos)
1. **"SHAMUSIC PRESENTS [artista]"** — posters promocionales de artistas emergentes (Emma Vallejo, Gerardo Amorín) — formato poster con retrato + wordmark.
2. **Reels educativos / industria** — noticias IA y copyright, casos reales (Lorde con 12 años, streaming manipulado, royalties IA) — tono editorial-periodístico, texto-heavy.
3. **Carruseles pedagógicos** — "Si no registras tu canción, cualquiera puede copiártela" — advertencia + CTA registro.
4. **Micro abierto semanal** — reels/posts de los jueves en Madrid, artistas cantando en directo.

### Partnerships visibles
- **SGAE x SHAMUSIC** — colaboración institucional reciente (posts agosto)
- Artistas: @emmaavallejo, @gerardo_amorin, @prod.vgb, @zzoilo_, @aitanax, @javi.fernandez.musica

### Bio
```
SUBE TU MÚSICA
Registra el #Copyright y #Promociona tus canciones
```

---

## 7. Problema de marca detectado (oportunidad del manual)

La comunicación Shamusic tiene fuerza estratégica (positioning claro, mantra potente, comunidad activa) pero **carece de sistema documentado**:

- 3 familias tipográficas sin jerarquía establecida
- Mezcla de estilos visuales en Instagram (posters bold + reels texto-heavy + carruseles con layouts distintos)
- Ausencia de templates para reels (formato video es su canal principal)
- Ausencia de guidelines de voz consistente (typos, mezcla EN/ES, inconsistencia de tratamiento)
- Paleta con múltiples morados sin roles definidos (#ce68d2 vs #9b59b6 vs #973ac8 vs #7a00df)
- Nombres de producto sin capitalización consistente (SHAMUSIC vs Shamusic vs shamusica)

**Esto justifica el tier Premium**: un manual que convierta la energía existente en sistema escalable, con foco especial en **aplicaciones Instagram (reel / story / post / poster) y Shamusic Sessions (posters eventos Madrid)**.

---

## 8. Archivos descargados en `/research/`

- `logo-sha-music-web.png` (257x62 outline magenta — versión dark bg)
- `logo-sha-music-web-color.png` (versión color midnight bg white — horizontal)
- `favicon.png`
- `bg-plataforma-musica.jpg` (hero background dark purple + notación musical)
- `bg-plataforma-artistas.jpg`
- `bg-colaboracion.jpg`
- `bg-compositor.jpg`
- `01-home-top.png` + `02-home-full.png` + `03-canta-directo.png` + `04-instagram-profile.png`
