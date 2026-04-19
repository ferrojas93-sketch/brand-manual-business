export type BlogCategory = "guias" | "analisis" | "curiosidades" | "proceso";

export const CATEGORY_LABEL: Record<BlogCategory, string> = {
  guias: "Guías",
  analisis: "Análisis",
  curiosidades: "Curiosidades",
  proceso: "Proceso",
};

export const CATEGORY_KICKER: Record<BlogCategory, string> = {
  guias: "Cómo hacer las cosas bien. Sin atajos.",
  analisis: "Manuales famosos, leídos página a página.",
  curiosidades: "Detalles de logos y marcas que casi nadie ve.",
  proceso: "Cómo trabaja Tramarca. Por dentro.",
};

export type BlogImage = {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
};

export type BlogFaq = {
  q: string;
  a: string;
};

export type BlogPost = {
  slug: string;
  category: BlogCategory;
  title: string;
  excerpt: string;
  heroImage: BlogImage;
  publishedAt: string; // ISO date
  updatedAt?: string;
  readingMinutes: number;
  primaryKeyword: string;
  secondaryKeywords: string[];
  metaTitle: string;
  metaDescription: string;
  author: string;
  tags: string[];
  faqs?: BlogFaq[];
  /** MDX/body lives en `content/blog/{slug}.mdx` */
  contentPath: string;
};

/**
 * Blog posts de Tramarca.
 * Primera pieza pilar en fase de redacción (editorial-writer agent).
 * Esta tabla es data-driven temporal hasta migrar a MDX contentlayer.
 */
export const POSTS: BlogPost[] = [
  {
    slug: "logos-secretos-tipograficos",
    category: "curiosidades",
    title: "Logos famosos con secretos tipográficos",
    excerpt:
      "Diez logos famosos esconden detalles visuales que la mayoría no nota: la flecha Amazon de A a Z, el oso de Berna en Toblerone, el 31 en Baskin-Robbins, el ciclista en Tour de France y seis más.",
    heroImage: {
      src: "/blog/logos-secretos-tipograficos/hero.jpg",
      alt: "Logos famosos con secretos tipográficos ocultos — composición visual abstracta de letterforms y espacios negativos sugiriendo significados ocultos sobre concreto editorial",
      caption: "Fig. 01 · Una vez vistos, no se pueden no ver.",
    },
    publishedAt: "2026-04-12",
    readingMinutes: 14,
    primaryKeyword: "logos con mensajes ocultos",
    secondaryKeywords: [
      "logos famosos secretos",
      "FedEx flecha oculta",
      "Amazon flecha A a Z",
      "Toblerone oso Berna",
      "Baskin Robbins 31",
      "logos secretos tipograficos",
    ],
    metaTitle: "10 logos famosos con secretos tipográficos · Análisis editorial",
    metaDescription:
      "Diez logos famosos esconden detalles visuales: Amazon, Toblerone, Baskin-Robbins, Tour de France, NBC, LG, Hyundai, Carrefour, Beats, Wendy's. Análisis completo.",
    author: "Tramarca",
    tags: ["logos", "secretos", "espacio negativo", "curiosidades", "Pentagram"],
    contentPath: "content/blog/logos-secretos-tipograficos.tsx",
    faqs: [
      {
        q: "¿Qué logo famoso tiene la flecha más conocida escondida?",
        a: "FedEx, diseñado por Lindon Leader en Landor Associates en 1994. La flecha aparece en el espacio negativo entre la letra E mayúscula y la x minúscula del wordmark. Es ejemplo canónico en escuelas de diseño del mundo. Lo cubrimos al detalle en nuestra pieza dedicada al logo FedEx.",
      },
      {
        q: "¿Por qué Amazon tiene una sonrisa debajo del wordmark?",
        a: "Anthony Biles en Turner Duckworth Londres diseñó el logo en 2000 con flecha curva que va de la 'a' a la 'z' del wordmark. Significado dual: literalmente conecta a-z (todo el alfabeto, todo el catálogo) mientras simultáneamente forma una sonrisa de satisfacción del cliente.",
      },
      {
        q: "¿Hay un oso escondido en el logo Toblerone?",
        a: "Sí. La silueta del Matterhorn (montaña suiza) que aparece en el logo Toblerone esconde un oso erguido sobre las patas traseras en el espacio negativo. Es referencia a Berna, ciudad de origen del chocolate (Bern significa 'oso' en alemán antiguo). Se añadió en el rediseño de 1970, no estaba en el logo original de 1908.",
      },
      {
        q: "¿Es deliberado que los secretos aparezcan en logos famosos?",
        a: "A veces sí, a veces no. La flecha FedEx fue accidente geométrico que Lindon Leader refinó deliberadamente al notarlo. El 31 de Baskin-Robbins fue intencional desde el rediseño 2005 de Lippincott. El 'mom' del logo Wendy's no fue intencional pero la marca lo capitalizó retrospectivamente. La regla: ojos entrenados reconocen secretos productivos cuando aparecen.",
      },
      {
        q: "¿Debería mi logo tener un secret escondido?",
        a: "No necesariamente. La mayoría de logos icónicos (Apple, Microsoft, IBM, Coca-Cola) funcionan perfectamente sin doble lectura visual. Los secretos integrados son herramienta opcional, no requisito. Y son contraproducentes si se fuerzan — los buenos secretos emergen del proceso de diseño riguroso, no se añaden como feature decorativa.",
      },
    ],
  },
  {
    slug: "brief-manual-marca-cuestionario",
    category: "proceso",
    title: "El brief que firmamos antes de empezar",
    excerpt:
      "Las 23 preguntas reales del cuestionario Tramarca, agrupadas en cinco bloques. Por qué cada bloque importa, qué pasa con un brief débil, ejemplos brief sólido vs débil, y plantilla descargable.",
    heroImage: {
      src: "/blog/brief-manual-marca-cuestionario/hero.jpg",
      alt: "Brief estructurado de manual de marca Tramarca con 23 preguntas en 5 bloques sobre concreto editorial — el documento operativo más importante del proceso",
      caption: "Fig. 01 · 23 preguntas, 5 bloques, 30-50 minutos.",
    },
    publishedAt: "2026-03-20",
    readingMinutes: 12,
    primaryKeyword: "brief manual de marca",
    secondaryKeywords: [
      "cuestionario manual de marca",
      "brief diseño marca",
      "brief brand book",
      "cuestionario brand brief",
      "como hacer un brief de marca",
    ],
    metaTitle: "El brief que firmamos · 23 preguntas para tu manual de marca",
    metaDescription:
      "Las 23 preguntas reales del cuestionario brief de Tramarca, agrupadas en 5 bloques operativos. Por qué firmar brief antes del kickoff es regla no negociable.",
    author: "Tramarca",
    tags: ["brief", "proceso", "cuestionario", "metodología"],
    contentPath: "content/blog/brief-manual-marca-cuestionario.tsx",
    faqs: [
      {
        q: "¿Por qué hay que firmar el brief antes de empezar el proyecto?",
        a: "Tres razones operativas: (1) impide la ingeniería especulativa basada en intuiciones de conversaciones informales — la conversación pasa de subjetiva a objetiva; (2) protege ambos lados ante scope creep — referencia escrita para decidir qué entra en el proyecto y qué se cotiza aparte; (3) obliga al cliente a articular sus requisitos antes de comprar, lo que produce claridad interna independientemente del manual posterior.",
      },
      {
        q: "¿Cuántas preguntas debe tener un brief profesional?",
        a: "Sweet spot: 20-30 preguntas estructuradas en 4-6 bloques temáticos. El cuestionario Tramarca tiene 23 preguntas en 5 bloques (negocio, audiencia, activos existentes, proveedores y casos de uso, tono y restricciones). Por debajo de 15 preguntas el brief es decorativo. Por encima de 50 está overengineered.",
      },
      {
        q: "¿Qué pasa si no respondo bien el brief?",
        a: "Tres consecuencias predecibles: iteración infinita en la dirección visual (sin referencias positivas/negativas claras), aplicaciones documentadas que no se usan (capítulos extensos sobre uso retail si no tienes presencia retail física), y plazo desbordado por scope mal acotado (restricciones legales/sectoriales que aparecen tarde).",
      },
      {
        q: "¿Puedo usar este brief con otros proveedores?",
        a: "Sí, lo distribuimos como plantilla pública gratuita. Escríbenos a hola@tramarca.es y te enviamos el link a la plantilla Notion completa. Creemos que mejorar el estándar de brief en el sector beneficia al mercado completo, independientemente de quién ejecute el manual posteriormente.",
      },
      {
        q: "¿Cuánto tiempo lleva rellenar el brief?",
        a: "Entre 30 y 50 minutos para clientes que tienen claridad sobre su negocio. Hasta 90 minutos para clientes que están articulando por primera vez algunos de los aspectos preguntados (audiencia operativa, proveedores externos planeados, restricciones sectoriales). El proceso mismo de rellenar produce claridad interna.",
      },
    ],
  },
  {
    slug: "fedex-flecha-oculta",
    category: "analisis",
    title: "La flecha oculta del logo FedEx",
    excerpt:
      "Lindon Leader descubrió por accidente la flecha entre la E y la X en 1994. 40 premios después es el ejemplo canónico de espacio negativo. Historia completa del rebrand.",
    heroImage: {
      src: "/blog/fedex-flecha-oculta/hero.jpg",
      alt: "FedEx logo flecha oculta — composición tipográfica entre E y X revela la flecha canónica del espacio negativo diseñada por Lindon Leader en Landor 1994",
      caption: "Fig. 01 · El espacio negativo más famoso del diseño.",
    },
    publishedAt: "2026-02-04",
    readingMinutes: 12,
    primaryKeyword: "logo FedEx flecha oculta",
    secondaryKeywords: [
      "FedEx flecha escondida",
      "Lindon Leader FedEx",
      "logos con mensajes ocultos",
      "espacio negativo FedEx",
      "Landor FedEx rebrand",
    ],
    metaTitle: "La flecha oculta del logo FedEx · Historia del rediseño 1994",
    metaDescription:
      "Lindon Leader descubrió por accidente la flecha entre E y X en 1994. 40 premios después es el espacio negativo más famoso del diseño. Análisis editorial.",
    author: "Tramarca",
    tags: ["FedEx", "Landor", "espacio negativo", "análisis", "1994"],
    contentPath: "content/blog/fedex-flecha-oculta.tsx",
    faqs: [
      {
        q: "¿Dónde está exactamente la flecha oculta del logo FedEx?",
        a: "Entre la letra 'E' mayúscula y la letra 'x' minúscula del wordmark FedEx. El espacio blanco formado por el trazo vertical derecho de la E y la diagonal inferior izquierda de la x forma una silueta de flecha apuntando a la derecha. Una vez que la ves, no se puede no ver.",
      },
      {
        q: "¿Quién diseñó el logo FedEx?",
        a: "Lindon Leader en Landor Associates en 1994. Leader llevaba 12 años en Landor cuando recibió el proyecto del rebrand, como respuesta al cambio oficial de nombre de Federal Express a FedEx. Pasó varias semanas ajustando una letterform custom basada en Univers 67 y Futura Bold antes de descubrir la flecha por accidente.",
      },
      {
        q: "¿La flecha fue intencional desde el inicio o un accidente?",
        a: "Accidente geométrico del kerning agresivo que Leader luego refinó a propósito. Leader ha contado en entrevistas que al reducir el tracking entre E y X la flecha 'simplemente apareció'. Después invirtió tres semanas ajustando los ángulos de la X para que la flecha fuera perfecta geométricamente sin que la letra perdiera legibilidad.",
      },
      {
        q: "¿Qué es el espacio negativo en diseño?",
        a: "El espacio negativo es el área vacía alrededor o dentro de un elemento visual que forma a su vez una figura significativa. Es un principio Gestalt llamado 'figura-fondo reversible'. En el logo FedEx, el espacio blanco entre E y x forma la flecha. Otros ejemplos clásicos: el pavo real NBC, el 31 en el logo Baskin-Robbins, el oso de Berna en Toblerone.",
      },
      {
        q: "¿Cuántos premios ha ganado el logo FedEx?",
        a: "Más de 40 premios internacionales de diseño desde 1994. Seleccionado en 'Best Logos of All Time' de Business Week (2011), incluido en retrospectiva del MoMA sobre diseño corporativo americano, y reconocido como uno de los 15 logos más influyentes del siglo XX por Rolling Stone (2019). Leader ganó personalmente el American Graphic Design Award en 1995.",
      },
      {
        q: "¿Cómo se aplica esta disciplina en un manual de marca moderno?",
        a: "Dos lecciones operativas: primero, empezar el sistema visual por tipografía (no por iconografía) y dejar que elementos gráficos emerjan del letterform. Segundo, documentar la construcción geométrica con retícula exacta para que el logo pueda reproducirse sin deformarse. En Tramarca codificamos ambos principios en el capítulo IV Sistema de logo de cada manual que producimos.",
      },
    ],
  },
  {
    slug: "mejores-manuales-de-marca-historia",
    category: "analisis",
    title: "15 manuales de marca que hicieron historia",
    excerpt:
      "De NASA 1976 a Stripe Press 2019: quince manuales editoriales que cambiaron cómo se documenta una identidad visual. El canon contemporáneo en orden cronológico.",
    heroImage: {
      src: "/blog/mejores-manuales-de-marca-historia/hero.jpg",
      alt: "Timeline editorial de los mejores manuales de marca famosos desde 1956 hasta 2026 — IBM, Lufthansa, NASA, FedEx, Apple, Mailchimp, Stripe Press y Tramarca v4",
      caption: "Fig. 01 · El canon editorial del documentation design.",
    },
    publishedAt: "2026-02-26",
    readingMinutes: 18,
    primaryKeyword: "mejores manuales de marca famosos",
    secondaryKeywords: [
      "manuales de marca históricos",
      "manuales de marca icónicos",
      "ejemplos manual de marca históricos",
      "manuales de marca famosos",
      "mejores brand guidelines historia",
    ],
    metaTitle: "15 manuales de marca que hicieron historia · Canon editorial",
    metaDescription:
      "De NASA 1976 a Stripe Press 2019: quince manuales editoriales analizados con detalle. El canon del documentation design que sigue siendo referencia.",
    author: "Tramarca",
    tags: ["canon", "historia", "análisis", "NASA", "IBM", "Pentagram"],
    contentPath: "content/blog/mejores-manuales-de-marca-historia.tsx",
    faqs: [
      {
        q: "¿Cuál es el manual de marca más influyente de la historia?",
        a: "Depende del criterio. Por influencia en documentation design, el NASA Graphics Standards Manual (1976) de Danne y Blackburn. Por longevidad, el British Rail Corporate Identity Manual (1965) que sigue usándose en parte. Por democratización de la voz verbal, el Mailchimp Voice & Tone Guide (2012). No hay un único ganador — hay un canon de quince obras que forman el oficio.",
      },
      {
        q: "¿Por qué casi todos los manuales clásicos usan Helvetica?",
        a: "Tres razones operativas: (1) disponibilidad técnica — Helvetica era la tipografía estándar en sistemas fotográficos y luego digitales, garantizando reproducibilidad; (2) neutralidad visual — no añade connotación emocional, permitiendo que la marca hable por sí misma; (3) escalabilidad — funciona de 6pt a 60m de altura sin perder legibilidad. Para manuales contemporáneos han aparecido alternativas (Inter, Satoshi, custom typefaces como Apple San Francisco), pero el principio de restricción tipográfica sigue vigente.",
      },
      {
        q: "¿Puedo descargar estos manuales?",
        a: "Algunos sí, otros no. El NASA Graphics Standards Manual está en dominio público (Archive.org). El British Rail Manual también. MoMA, Mexico 68, Apple son documentos internos no publicados al público, aunque existen reproducciones académicas. Mailchimp Voice & Tone es public por diseño (voiceandtone.com). El Standards Manual Books de Reed y Smyth reeditaron facsímiles de NASA y British Rail accesibles en segunda mano.",
      },
      {
        q: "¿Qué tienen en común todos estos manuales?",
        a: "Cinco patrones: (1) restricción tipográfica radical — 1-2 familias máximo; (2) sistema antes que logo — arquitectura visual antes que marca gráfica; (3) aplicaciones con casos extremos documentados; (4) versionado y evolución previstas; (5) endorsement ejecutivo explícito que convierte el manual en norma obligatoria, no sugerencia.",
      },
      {
        q: "¿Un manual de marca contemporáneo puede alcanzar este nivel?",
        a: "Técnicamente sí — los estándares editoriales son transferibles. Oatly, Stripe Press y algunos manuales Pentagram contemporáneos demuestran que la disciplina sigue viva. En Tramarca producimos manuales siguiendo esa tradición editorial con precio cerrado (490€/990€/1.990€) y plazos publicados. El manual Tramarca v4 propio (58pp) aplica los mismos principios a sí misma.",
      },
    ],
  },
  {
    slug: "como-hacer-manual-de-marca-paso-a-paso",
    category: "proceso",
    title: "Cómo hacer un manual de marca paso a paso",
    excerpt:
      "Proceso real de producción editorial en 8 pasos: brief, auditoría, fundamentos, sistema visual, voz, aplicaciones, guidelines y empaquetado. Con tiempos honestos por modelo.",
    heroImage: {
      src: "/blog/como-hacer-manual-de-marca-paso-a-paso/hero.jpg",
      alt: "Cómo hacer un manual de marca paso a paso — ocho pasos editoriales numerados 01 → 08 con tiempos y entregables documentados",
      caption: "Fig. 01 · Ocho pasos, tiempos documentados.",
    },
    publishedAt: "2026-01-12",
    readingMinutes: 13,
    primaryKeyword: "cómo hacer un manual de marca",
    secondaryKeywords: [
      "manual de marca paso a paso",
      "crear manual identidad corporativa",
      "proceso creación manual marca",
      "hacer manual de marca",
    ],
    metaTitle: "Cómo hacer un manual de marca paso a paso · Proceso editorial",
    metaDescription:
      "Proceso real de hacer un manual de marca profesional: brief, auditoría, sistema visual, voz, aplicaciones, validación. 8 pasos con tiempos honestos y plantillas.",
    author: "Tramarca",
    tags: ["proceso", "paso a paso", "HowTo", "manual de marca"],
    contentPath: "content/blog/como-hacer-manual-de-marca-paso-a-paso.tsx",
    faqs: [
      {
        q: "¿Cuánto tiempo lleva hacer un manual de marca profesional?",
        a: "Tiempo de trabajo efectivo: 3-8 días en estudios productizados (Tramarca entrega en 5-10 días laborables), 6-10 días con freelance senior (pero plazo calendario 3-6 semanas por carga paralela), 15-25 días con agencia tradicional (plazo 6-12 semanas con discovery). Si se hace internamente con equipo de diseño, 20-40 días fragmentados durante 2-4 meses calendario.",
      },
      {
        q: "¿Cuáles son los pasos mínimos de un proceso profesional?",
        a: "Ocho pasos cerrados: (1) brief estructurado, (2) auditoría de activos existentes, (3) fundamentos (propósito, visión, valores), (4) sistema visual base (logo, paleta, tipografía, iconografía), (5) voz y tono verbal, (6) aplicaciones reales (papelería, digital, merch), (7) guidelines y governance, (8) empaquetado y entrega. Cada paso con entregable documentado y criterio de aprobación.",
      },
      {
        q: "¿Puedo saltarme el brief y empezar directo?",
        a: "No deberías. Sin brief firmado, el proceso se convierte en ingeniería especulativa que acaba en iteración infinita. El brief fija scope, audiencia, proveedores externos involucrados y casos de uso. Invertir 2h en brief bien hecho ahorra 2 semanas de producción después. En Tramarca es regla dura: sin brief firmado no empezamos.",
      },
      {
        q: "¿Qué pasa si necesito más revisiones de las incluidas?",
        a: "En tiers productizados con scope cerrado (Tramarca Profesional y Premium incluyen 2 rondas), cualquier revisión adicional se presupuesta aparte con transparencia — tarifa por horas o fija según alcance. Nunca aparece un extra sin aprobación previa. Preferimos revisiones acotadas a revisiones ilimitadas porque protege plazo y foco del proyecto.",
      },
      {
        q: "¿Qué archivos debe entregar el estudio al final?",
        a: "PDF A4 landscape del manual, archivos fuente del logo (SVG + PNG @1x/@2x/@3x + PDF + EPS), Figma editable con componentes, tokens CSS/JSON de color y tipografía, plantillas editables de papelería (Adobe + Canva), y guía de onboarding del equipo. En tier Premium se añade copia física del manual encuadernada como libro de edición única enviada a oficina.",
      },
      {
        q: "¿Hago el manual yo mismo o lo encargo?",
        a: "Hacerlo internamente tiene sentido si hay equipo de diseño senior que puede dedicar 4-8 semanas exclusivas. Encargarlo tiene sentido si no hay ese equipo disponible. Los tres tiers Tramarca (490€/990€/1.990€ IVA incluido) productizan el proceso para entregar en 5-10 días laborables con precio cerrado.",
      },
    ],
  },
  {
    slug: "nasa-graphics-standards-manual-1976",
    category: "analisis",
    title: "NASA Graphics Standards Manual (1976)",
    excerpt:
      "El manual editorial que redefinió la documentación de identidad visual. Danne y Blackburn documentaron NASA en 90 páginas publicadas en 1976. Análisis completo.",
    heroImage: {
      src: "/blog/nasa-graphics-standards-manual-1976/hero.jpg",
      alt: "NASA Graphics Standards Manual 1976 — variantes cromáticas oficiales del logotipo Worm (rojo PMS 185, negro, warm gray) escaneadas del manual original página 1.4 dominio público Archive.org",
      caption: "Fig. 01 · El Worm en sus tres variantes cromáticas oficiales · página 1.4 del manual original.",
    },
    publishedAt: "2025-12-18",
    readingMinutes: 14,
    primaryKeyword: "NASA graphics standards manual",
    secondaryKeywords: [
      "NASA manual de marca 1976",
      "NASA brand guidelines historia",
      "manual NASA Worm",
      "Danne Blackburn NASA",
      "NASA graphics standards español",
    ],
    metaTitle: "NASA Graphics Standards Manual (1976) · Análisis editorial",
    metaDescription:
      "Richard Danne y Bruce Blackburn diseñaron el manual de marca de NASA en 1975. 90 páginas que redefinieron cómo documentar identidad visual. Análisis editorial completo.",
    author: "Tramarca",
    tags: ["NASA", "historia", "análisis", "editorial", "1976"],
    contentPath: "content/blog/nasa-graphics-standards-manual-1976.tsx",
    faqs: [
      {
        q: "¿Dónde puedo descargar el NASA Graphics Standards Manual original?",
        a: "El PDF completo de la edición de 1976 está en dominio público y disponible gratuitamente en Archive.org (archive.org/details/nasa-graphics-standards-manual). Puedes descargar páginas individuales o el manual completo. La reedición facsímil de Reed y Smyth (Kickstarter 2015) ocasionalmente aparece en segunda mano.",
      },
      {
        q: "¿Quiénes diseñaron el manual NASA de 1976?",
        a: "Richard Danne y Bruce Blackburn, dos diseñadores neoyorquinos que dirigían un pequeño estudio (menos de diez personas). Aceptaron el encargo del Federal Design Improvement Program en 1974 con una condición: tenía que ser un sistema documentado completo, no solo un logo. El resultado fue el manual de 90 páginas publicado en enero de 1976.",
      },
      {
        q: "¿Qué es el 'Worm' de NASA?",
        a: "El Worm es el logotipo tipográfico diseñado por Danne y Blackburn en 1975: la palabra NASA en mayúsculas con trazo continuo rojo y sin travesaño en la A (esa ausencia gana el apodo). Fue identidad oficial de NASA desde 1975 hasta 1992, cuando el administrador Dan Goldin ordenó el regreso al meatball por motivos sentimentales. En 2020 el Worm reapareció en el Falcon 9 de SpaceX como identidad secundaria.",
      },
      {
        q: "¿Qué hace especial al manual NASA frente a otros manuales de la época?",
        a: "Su arquitectura documental. Cada decisión está soportada por ejemplos concretos, cada regla tiene plantilla técnica con medidas exactas, cada aplicación (desde tarjeta de visita hasta lateral de transbordador espacial) tiene página propia con instrucciones. Cualquier proveedor externo podía abrir el PDF y ejecutar sin ambigüedad — ese principio es el núcleo del manual operativo moderno.",
      },
      {
        q: "¿Por qué sigue siendo referencia cincuenta años después?",
        a: "Porque la disciplina editorial — reglas aplicables sin interpretación — es intemporal. El logotipo Worm es hijo de los 70s y puede verse datado, pero el sistema documental que lo sostiene sigue siendo el estándar contra el que se mide cualquier manual profesional contemporáneo. En Tramarca lo tomamos como referencia para nuestro propio manual v4.",
      },
    ],
  },
  {
    slug: "manual-marca-vs-brand-book",
    category: "guias",
    title: "Manual de marca vs Brand Book",
    excerpt:
      "Brand book es aspiracional, manual de marca es operativo. Tabla comparativa con 15 dimensiones, árbol de decisión en 60 segundos y 4 escenarios según tu caso.",
    heroImage: {
      src: "/blog/manual-marca-vs-brand-book/hero.jpg",
      alt: "Manual de marca vs brand book — comparativa editorial split: brand book inspiracional (40-120pp) vs manual de marca operativo (20-50pp)",
      caption: "Fig. 01 · Dos documentos, dos propósitos.",
    },
    publishedAt: "2025-11-30",
    readingMinutes: 10,
    primaryKeyword: "manual de marca vs brand book",
    secondaryKeywords: [
      "diferencia brand book manual de marca",
      "qué es un brand book",
      "brand guidelines vs brandbook",
      "manual marca vs guía de estilo",
    ],
    metaTitle: "Manual de marca vs Brand Book · Cuál necesita tu empresa",
    metaDescription:
      "Brand book es inspiracional, manual de marca es operativo. Tabla comparativa, decision tree y 4 escenarios reales para elegir cuál necesitas en 2026.",
    author: "Tramarca",
    tags: ["brand book", "manual de marca", "comparativa", "guía"],
    contentPath: "content/blog/manual-marca-vs-brand-book.tsx",
    faqs: [
      {
        q: "¿Cuál es la diferencia esencial entre un brand book y un manual de marca?",
        a: "El brand book es aspiracional: cuenta la historia, presenta el arquetipo, inspira al equipo. El manual de marca es operativo: fija reglas aplicables para que cualquier proveedor produzca consistente sin preguntarte. Uno mueve corazones, el otro mueve producción.",
      },
      {
        q: "¿Necesito los dos o me vale uno?",
        a: "Depende del tamaño y fase. Autónomos y startups tempranas normalmente necesitan solo manual de marca (lo operativo). PYMEs con equipo en crecimiento también. Marcas consolidadas en rebrand o captando inversión valoran tener los dos: brand book para narrativa, manual para ejecución. Corporate con 50+ empleados casi siempre tiene ambos.",
      },
      {
        q: "¿Un manual de marca incluye lo que incluye un brand book?",
        a: "Parcialmente. Un manual profesional incluye capítulo de Fundamentos (propósito, visión, valores, personalidad) que toca temas del brand book, pero en profundidad menor. Si necesitas trabajo estratégico profundo (naming, posicionamiento, investigación de audiencia), necesitas brand book específico con strategist, no solo manual.",
      },
      {
        q: "¿Cuánto cuesta cada uno en España 2026?",
        a: "Brand book: 3.000€-15.000€ según agencia (incluye discovery, strategy, moodboards). Manual de marca: 490€-1.990€ en estudios productizados como Tramarca (IVA incluido, plazos publicados), 800€-3.500€ con freelance senior, 6.000€-18.000€ con agencia tradicional.",
      },
      {
        q: "¿Tramarca hace brand books?",
        a: "No. Tramarca hace solo manuales de marca — sistema operativo completo — y por eso puede publicar precios cerrados y plazos de 5, 7 o 10 días. Si necesitas brand book (strategy, arquetipo, moodboards), te recomendamos colegas especializados en strategy y después podemos producir el manual consumiendo ese brand book como input.",
      },
      {
        q: "¿Puedo usar mi brand book para hacer mi propio manual?",
        a: "Puedes, pero probablemente no deberías. Los manuales profesionales requieren sistemas tipográficos bien estructurados, valores técnicos de color para imprenta, guidelines explícitas con ejemplos de usos incorrectos y archivos fuente bien empaquetados. Es un trabajo editorial especializado que consume 40-80 horas de producción técnica. La alternativa DIY suele quedarse en brand kit decorativo.",
      },
    ],
  },
  {
    slug: "que-es-un-manual-de-marca",
    category: "guias",
    title: "Qué es un manual de marca",
    excerpt:
      "Un manual de marca es un documento operativo de 20-50 páginas que fija por escrito cómo se aplica una identidad visual y verbal. Qué incluye, qué no, cuándo lo necesitas.",
    heroImage: {
      src: "/blog/que-es-un-manual-de-marca/hero.jpg",
      alt: "Qué es un manual de marca — definición operativa como sistema documentado de identidad visual y verbal, 20-50 páginas con 48 componentes",
      caption: "Fig. 01 · Documento operativo, no decoración.",
    },
    publishedAt: "2025-11-08",
    readingMinutes: 11,
    primaryKeyword: "qué es un manual de marca",
    secondaryKeywords: [
      "qué es un brandbook",
      "definición manual identidad corporativa",
      "manual de marca significado",
      "manual de identidad corporativa qué es",
    ],
    metaTitle: "Qué es un manual de marca · Definición y anatomía",
    metaDescription:
      "Un manual de marca es un documento operativo de 20-50 páginas que fija cómo se usa una identidad visual y verbal. Qué incluye, qué no, cómo distinguir uno profesional.",
    author: "Tramarca",
    tags: ["manual de marca", "definición", "qué es", "guía"],
    contentPath: "content/blog/que-es-un-manual-de-marca.tsx",
    faqs: [
      {
        q: "¿Qué es exactamente un manual de marca?",
        a: "Un manual de marca es un documento operativo de 20-50 páginas que fija por escrito cómo se aplica una identidad visual y verbal en todos los contextos donde la marca aparece: logo, colores, tipografía, aplicaciones digitales, papelería, voz, guidelines. Su función no es inspirar — es evitar que alguien improvise al producir con tu marca.",
      },
      {
        q: "¿Es lo mismo que un brand book?",
        a: "No. El brand book es aspiracional — cuenta la historia, presenta el arquetipo, inspira al equipo. El manual de marca es operativo — fija reglas aplicables. Ambos son útiles pero resuelven problemas distintos. Lo desarrollamos en detalle en 'Manual de marca vs Brand Book: cuál necesita tu empresa'.",
      },
      {
        q: "¿Qué debe incluir un manual profesional mínimamente?",
        a: "La lista mínima: sistema de logo con variantes y zona de exclusión, sistema tipográfico con jerarquía, paleta cromática con valores técnicos (Pantone, CMYK, RGB, HEX), aplicaciones reales (papelería, digital, merch), voz y tono, guidelines de usos correctos e incorrectos, y archivos fuente (SVG, PNG, PDF, Figma editable).",
      },
      {
        q: "¿Cuántas páginas debe tener un manual de marca?",
        a: "La unidad mínima funcional son 20 páginas. Por debajo es brand kit. La unidad completa ronda las 40-60 páginas e incluye voz verbal, aplicaciones extendidas, arquitectura de marca y governance. En Tramarca publicamos tres tiers: 20-25pp (Esencial), 30-40pp (Profesional) y 40-50pp (Premium con libro físico).",
      },
      {
        q: "¿Cuándo necesito un manual de marca?",
        a: "El umbral práctico está en la segunda persona: cuando contratas a alguien externo (empleado, freelance, imprenta, agencia) para producir algo con tu marca, necesitas manual. Otros disparadores: lanzas web o producto digital, crece tu equipo a 5+ personas, vas a captar inversión, o planeas lanzar submarcas.",
      },
      {
        q: "¿Cuánto cuesta un manual de marca en España?",
        a: "Los rangos reales 2026 van de 80€ (plantilla sin sistema) a 18.000€ (agencia tradicional con discovery). El sweet spot para pymes operativas está entre 490€ y 2.000€ en estudios productizados. Tramarca publica tres tiers cerrados: Esencial 490€, Profesional 990€, Premium 1.990€, todos IVA incluido con plazos de 5/7/10 días.",
      },
    ],
  },
  {
    slug: "cuanto-cuesta-manual-de-marca-espana-2026",
    category: "guias",
    title:
      "Cuánto cuesta un manual de marca en España 2026",
    excerpt:
      "Rangos reales 2026 de agencia tradicional, freelance, plantilla y estudio productizado. Qué incluye cada precio, qué deberías evitar, cómo elegir.",
    heroImage: {
      src: "/blog/cuanto-cuesta-manual-de-marca-espana-2026/hero.jpg",
      alt: "Cuánto cuesta un manual de marca en España 2026 — rangos reales 490€ Esencial a 1.990€ Premium IVA incluido con plazo publicado",
      caption: "Fig. 01 · Lo que pagas es un objeto defendible.",
    },
    publishedAt: "2025-10-15",
    readingMinutes: 9,
    primaryKeyword: "cuánto cuesta un manual de marca",
    secondaryKeywords: [
      "manual de marca precio",
      "precio manual de marca españa",
      "manual de marca agencia precio",
      "manual de marca freelance precio",
    ],
    metaTitle: "Cuánto cuesta un manual de marca en España 2026",
    metaDescription:
      "Rangos reales: agencia 6.000-18.000€, freelance 800-3.500€, plantilla ~80€, Tramarca 490-1.990€ IVA incl. Qué incluye cada precio, qué evitar.",
    author: "Tramarca",
    tags: ["precio", "manual de marca", "España", "2026"],
    contentPath: "content/blog/cuanto-cuesta-manual-de-marca-espana-2026.mdx",
    faqs: [
      {
        q: "¿Cuál es el precio mínimo realista para un manual de marca profesional?",
        a: "En España 2026, un manual operativo profesional empieza en torno a los 490€ IVA incluido con un estudio productizado como Tramarca. Por debajo de esa cifra normalmente estás comprando un brand kit (plantilla con logo + colores + tipografía), no un manual con sistema documentado.",
      },
      {
        q: "¿Por qué una agencia cobra 6.000€-18.000€ por lo mismo?",
        a: "Las agencias tradicionales incluyen discovery workshops, propuestas personalizadas, equipos multidisciplinares y timelines de 6-12 semanas. Ese modelo tiene sentido para marcas corporativas que necesitan acompañamiento estratégico profundo. Si tu proyecto está claro y quieres un sistema documentado sin ritual, un estudio productizado te sale mucho más eficiente.",
      },
      {
        q: "¿Un freelance a 800€ entrega un manual igual que uno a 3.500€?",
        a: "No. Con un freelance a 800€ sueles llevarte logo + paleta + tipografía básica (20 páginas o menos). Un freelance a 3.500€ debería entregar sistema completo con aplicaciones, voz y guidelines extendidas. La diferencia depende más del perfil que del precio: contrata siempre con portfolio publicado y scope por escrito.",
      },
      {
        q: "¿Lleva IVA aparte o incluido?",
        a: "En España, los precios publicados pueden ser 'IVA incluido' (B2C estándar) o 'IVA aparte' (B2B común en agencias). Tramarca publica todos los precios con IVA 21% incluido. Siempre pregunta y pide factura electrónica con el desglose antes de firmar.",
      },
      {
        q: "¿Cómo se paga un manual de marca?",
        a: "Lo más común en estudios es 50/50 (mitad al inicio, mitad a la entrega). En Tramarca el pago es íntegro al kickoff: aceptas propuesta, firmas brief, abonas el importe (transferencia SEPA o Stripe) y el proyecto arranca. Plazos cortos (5-10 días laborables) hacen innecesario fraccionar. Factura electrónica con IVA 21% desglosado al instante. Pregunta siempre por la estructura de pago antes de firmar nada.",
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return POSTS.filter((p) => p.category === category).sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getRecentPosts(limit = 5): BlogPost[] {
  return [...POSTS]
    .sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .slice(0, limit);
}
