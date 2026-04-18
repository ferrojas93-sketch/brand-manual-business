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
