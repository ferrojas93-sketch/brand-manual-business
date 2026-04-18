export const SITE_URL = "https://tramarca.es";

export const organizationSchema = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Tramarca",
  alternateName: "Tramarca — Estudio editorial de manuales de marca",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo-tramarca.png`,
    width: 512,
    height: 512,
  },
  description:
    "Estudio editorial español especializado en manuales de marca. Tres tiers con precio cerrado e IVA incluido, plazos publicados.",
  foundingDate: "2026",
  areaServed: { "@type": "Country", name: "España" },
  knowsAbout: [
    "Manual de marca",
    "Brand guidelines",
    "Identidad corporativa",
    "Brandbook",
    "Identidad visual",
    "Sistema de marca",
    "Brand book",
    "Manual identidad visual",
  ],
  sameAs: [
    "https://www.linkedin.com/company/tramarca",
    "https://tramarca.com",
    "https://tramarca.org",
  ],
};

export const localBusinessSchema = {
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: "Tramarca",
  image: `${SITE_URL}/og-tramarca.jpg`,
  url: SITE_URL,
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Madrid",
    addressRegion: "Madrid",
    addressCountry: "ES",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
};

export const serviceSchema = {
  "@type": "Service",
  "@id": `${SITE_URL}/#service`,
  serviceType: "Manual de marca",
  name: "Servicio de manual de marca Tramarca",
  description:
    "Manuales de marca productizados para pymes españolas en 3 tiers con pricing público IVA incluido y plazos publicados.",
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: { "@type": "Country", name: "España" },
  category: "Brand guidelines design",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tiers Tramarca",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Esencial",
        description:
          "Manual de marca 20-25 páginas. Logo, paleta, tipografía, aplicaciones básicas. 1 revisión. Entrega 5 días laborables.",
        price: "490",
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "490",
          priceCurrency: "EUR",
          valueAddedTaxIncluded: true,
        },
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/precios#esencial`,
      },
      {
        "@type": "Offer",
        name: "Profesional",
        description:
          "Manual de marca 30-40 páginas. Sistema completo, tono de voz, guidelines extendidas. 2 revisiones. Entrega 7 días laborables.",
        price: "990",
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "990",
          priceCurrency: "EUR",
          valueAddedTaxIncluded: true,
        },
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/precios#profesional`,
      },
      {
        "@type": "Offer",
        name: "Premium",
        description:
          "Manual de marca 40-50 páginas. Estrategia + identidad verbal + guidelines exhaustivas + copia impresa encuadernada como libro de edición única. 2 revisiones. Entrega 10 días laborables.",
        price: "1990",
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "1990",
          priceCurrency: "EUR",
          valueAddedTaxIncluded: true,
        },
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/precios#premium`,
      },
    ],
  },
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Tramarca",
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "es-ES",
};

export const faqSchema = {
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto cuesta un manual de marca en España?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tres tiers con precio cerrado e IVA incluido: Esencial 490€ (20-25 páginas, 5 días laborables), Profesional 990€ (30-40 páginas, 7 días) y Premium 1.990€ (40-50 páginas, 10 días). En agencias tradicionales el rango equivalente es 1.500€ a 8.000€ más IVA.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué incluye un manual de marca?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sistema de identidad visual (logo, paleta, tipografía, grid), aplicaciones (papelería, firma de email, RRSS), guidelines de uso y, según el tier, estrategia de marca, identidad verbal y plantillas Figma editables. Entregamos PDF A4 landscape y archivos fuente. 48 componentes repartidos en 12 capítulos.",
      },
    },
    {
      "@type": "Question",
      name: "¿El IVA va incluido? ¿Hay costes ocultos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, el IVA 21% está incluido en los precios publicados (490€, 990€, 1.990€). No hay fees de discovery ni tarifas por revisión adicional dentro del scope acordado. Factura electrónica española con IVA desglosado.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tarda en entregarse un manual de marca?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Plazo garantizado desde el kickoff con brief firmado: Esencial 5 días laborables, Profesional 7 días, Premium 10 días. Las revisiones incluidas no alargan el plazo base.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuántas revisiones incluye cada tier?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Esencial incluye 1 ronda de revisión. Profesional y Premium incluyen 2 rondas. Cambios de scope se presupuestan aparte con precio transparente.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa si necesito más revisiones de las incluidas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Te pasamos presupuesto acotado antes de empezar: tarifa por horas o fija según alcance. También puedes ampliar a un tier superior pagando solo la diferencia (490→990→1.990€).",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo pagar en dos veces?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Profesional y Premium se pagan en dos plazos: 50% al kickoff y 50% en la entrega. Esencial se paga íntegro al kickoff. Transferencia SEPA o Stripe. Factura electrónica en cada pago.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es la diferencia entre un manual de marca y un logo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un logo es un archivo. Un manual de marca es un sistema documentado: cómo usar ese logo, con qué colores, tipografías, aplicaciones, tono verbal y qué evitar. Tramarca entrega documentos operativos de 20-50 páginas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué diferencia a Tramarca de una agencia de branding?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tramarca es un estudio productizado: scope cerrado, precio público, plazo publicado, entregables documentados. Una agencia tradicional hace discovery workshops, propuesta personalizada, pricing custom y timelines de 6-12 semanas. Ambos modelos son válidos según el caso.",
      },
    },
    {
      "@type": "Question",
      name: "¿Sirve Tramarca para rebrand o solo para marca nueva?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ambos. Profesional y Premium funcionan bien para rebrand partiendo del activo existente. Para marca nueva recomendamos Premium (estrategia + identidad verbal).",
      },
    },
    {
      "@type": "Question",
      name: "¿Hay garantía de devolución?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Si tras la primera entrega el manual no resuelve el brief firmado, devolvemos el 50% del pago de kickoff dentro de los 14 días. O sale el manual completo, o devolvemos: no entregamos a medias.",
      },
    },
    {
      "@type": "Question",
      name: "¿Trabajáis con autónomos, PYMES o solo empresas grandes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Autónomos, PYMES y empresas medianas. Factura con NIF personal o CIF, sin diferencia de precio. Cliente tipo factura entre 100k€ y 10M€.",
      },
    },
    {
      "@type": "Question",
      name: "¿Atendéis fuera de Madrid? ¿Trabajáis en remoto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Trabajamos 100% en remoto desde Madrid para toda España y Europa. Brief estructurado online, kickoff por email, reviews por email con deadlines claras, entrega en PDF y Figma.",
      },
    },
  ],
};

// --- Page-specific schema helpers ---

export function breadcrumbListSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function aboutPageSchema() {
  return {
    "@type": "AboutPage",
    "@id": `${SITE_URL}/sobre#aboutpage`,
    url: `${SITE_URL}/sobre`,
    name: "Sobre Tramarca",
    description:
      "Estudio editorial español que solo hace manuales de marca. Precio cerrado, plazo publicado, sistema documentado.",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "es-ES",
  };
}

export function contactPageSchema() {
  return {
    "@type": "ContactPage",
    "@id": `${SITE_URL}/contacto#contactpage`,
    url: `${SITE_URL}/contacto`,
    name: "Contacto Tramarca",
    description:
      "Formulario de contacto Tramarca. Respuesta en 24h laborables con propuesta y link de pago seguro.",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    inLanguage: "es-ES",
  };
}

export function collectionPageSchema(args: {
  url: string;
  name: string;
  description: string;
  items: Array<{ name: string; url: string; image?: string }>;
}) {
  return {
    "@type": "CollectionPage",
    "@id": `${args.url}#collectionpage`,
    url: args.url,
    name: args.name,
    description: args.description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    inLanguage: "es-ES",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: args.items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: item.url,
        name: item.name,
        ...(item.image ? { image: item.image } : {}),
      })),
    },
  };
}

export function creativeWorkSchema(args: {
  url: string;
  name: string;
  description: string;
  image: string;
  client?: string;
  tier?: string;
  pages?: number;
}) {
  return {
    "@type": "CreativeWork",
    "@id": `${args.url}#creativework`,
    url: args.url,
    name: args.name,
    description: args.description,
    image: args.image,
    creator: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "es-ES",
    genre: "Manual de marca",
    ...(args.client ? { about: args.client } : {}),
    ...(args.tier ? { award: `Tier ${args.tier}` } : {}),
    ...(args.pages ? { numberOfPages: args.pages } : {}),
  };
}

export function techArticleSchema(args: {
  url: string;
  name: string;
  description: string;
  image?: string;
}) {
  return {
    "@type": "TechArticle",
    "@id": `${args.url}#article`,
    url: args.url,
    headline: args.name,
    description: args.description,
    ...(args.image ? { image: args.image } : {}),
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "es-ES",
    datePublished: "2026-04-12",
    dateModified: new Date().toISOString().split("T")[0],
  };
}

/**
 * Schema Product + AggregateOffer para /precios.
 * Google muestra rich result de rango de precio en SERP cuando el patrón está bien formado.
 * Acompaña al `serviceSchema` (que queda como clasificación) — son complementarios, no duplicados.
 */
export const productSchema = {
  "@type": "Product",
  "@id": `${SITE_URL}/precios#product`,
  name: "Manual de marca Tramarca",
  description:
    "Manual de marca productizado en 3 tiers con pricing público IVA incluido, plazos publicados y entregables cerrados. Esencial 490€ · Profesional 990€ · Premium 1.990€.",
  image: `${SITE_URL}/og-tramarca.jpg`,
  brand: { "@id": `${SITE_URL}/#organization` },
  category: "Servicios profesionales · Diseño editorial · Manual de marca",
  sku: "TRAMARCA-MANUAL-MARCA",
  url: `${SITE_URL}/precios`,
  offers: {
    "@type": "AggregateOffer",
    "@id": `${SITE_URL}/precios#aggregateoffer`,
    priceCurrency: "EUR",
    lowPrice: "490",
    highPrice: "1990",
    offerCount: 3,
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/precios`,
    seller: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "España" },
    offers: [
      {
        "@type": "Offer",
        "@id": `${SITE_URL}/precios#offer-esencial`,
        name: "Manual de marca Esencial",
        description:
          "Manual 20-25 páginas. Logo, paleta, tipografía y aplicaciones básicas. 1 revisión. Entrega 5 días laborables.",
        price: "490",
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "490",
          priceCurrency: "EUR",
          valueAddedTaxIncluded: true,
        },
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/precios#esencial`,
        eligibleRegion: { "@type": "Country", name: "España" },
      },
      {
        "@type": "Offer",
        "@id": `${SITE_URL}/precios#offer-profesional`,
        name: "Manual de marca Profesional",
        description:
          "Manual 30-40 páginas. Sistema completo, tono de voz, guidelines extendidas. 2 revisiones. Entrega 7 días laborables.",
        price: "990",
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "990",
          priceCurrency: "EUR",
          valueAddedTaxIncluded: true,
        },
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/precios#profesional`,
        eligibleRegion: { "@type": "Country", name: "España" },
      },
      {
        "@type": "Offer",
        "@id": `${SITE_URL}/precios#offer-premium`,
        name: "Manual de marca Premium",
        description:
          "Manual 40-50 páginas con libro físico encuadernado de edición única. Estrategia + identidad verbal + guidelines exhaustivas. 2 revisiones. Entrega 10 días laborables.",
        price: "1990",
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "1990",
          priceCurrency: "EUR",
          valueAddedTaxIncluded: true,
        },
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/precios#premium`,
        eligibleRegion: { "@type": "Country", name: "España" },
      },
    ],
  },
};

export function articleSchema(args: {
  url: string;
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  keywords?: string[];
  section?: string;
}) {
  return {
    "@type": "Article",
    "@id": `${args.url}#article`,
    url: args.url,
    headline: args.headline,
    description: args.description,
    image: args.image,
    author:
      args.author !== undefined
        ? { "@type": "Organization", name: args.author }
        : { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "es-ES",
    datePublished: args.datePublished,
    dateModified: args.dateModified ?? args.datePublished,
    ...(args.keywords?.length ? { keywords: args.keywords.join(", ") } : {}),
    ...(args.section ? { articleSection: args.section } : {}),
    mainEntityOfPage: args.url,
  };
}

export function faqPageSchema(items: Array<{ q: string; a: string }>) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}

export function jsonLdGraph(...nodes: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
