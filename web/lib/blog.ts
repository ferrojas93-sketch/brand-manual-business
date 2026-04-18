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
    slug: "nasa-graphics-standards-manual-1976",
    category: "analisis",
    title: "NASA Graphics Standards Manual (1976)",
    excerpt:
      "El manual editorial que redefinió la documentación de identidad visual. Danne y Blackburn documentaron NASA en 90 páginas publicadas en 1976. Análisis completo.",
    heroImage: {
      src: "/blog/nasa-graphics-standards-manual-1976/hero.jpg",
      alt: "Manual NASA Graphics Standards 1976 — edición facsímil Reed y Smyth sobre mesa editorial, fig. 01",
      caption: "Fig. 01 · El manual que definió el canon editorial.",
    },
    publishedAt: "2026-05-15",
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
      alt: "Comparativa visual entre brand book aspiracional y manual de marca operativo sobre mesa editorial, fig. 01",
      caption: "Fig. 01 · Dos documentos, dos propósitos.",
    },
    publishedAt: "2026-05-08",
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
      alt: "Manual de marca editorial abierto sobre mesa con retícula y componentes técnicos, fig. 01",
      caption: "Fig. 01 · Documento operativo, no decoración.",
    },
    publishedAt: "2026-05-02",
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
      alt: "Pila de manuales de marca publicados en diferentes tamaños sobre superficie de concreto editorial — comparativa de precios 2026 España",
      caption: "Fig. 01 · Rangos reales de mercado 2026.",
    },
    publishedAt: "2026-05-01",
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
        q: "¿Puedo pagar en plazos?",
        a: "Depende del estudio. En Tramarca los tiers Profesional y Premium se pagan al 50% al kickoff y 50% a la entrega final; el tier Esencial se paga íntegro al inicio. Aceptamos transferencia SEPA y Stripe. Emitimos factura electrónica en cada pago.",
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
