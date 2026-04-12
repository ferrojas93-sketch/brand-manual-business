export const SITE_URL = "https://tramarca.es";

export const organizationSchema = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Tramarca",
  alternateName: "Tramarca Manuales de Marca",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo-tramarca.png`,
    width: 512,
    height: 512,
  },
  description:
    "Servicio productizado de manuales de marca para pymes y emprendedores españoles. Tres tiers con pricing público y IVA incluido.",
  foundingDate: "2026",
  areaServed: { "@type": "Country", name: "España" },
  knowsAbout: [
    "Manual de marca",
    "Brand guidelines",
    "Identidad corporativa",
    "Brandbook",
    "Identidad visual",
    "Sistema de marca",
  ],
  slogan: "El Punto Final.",
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
          "Manual de marca 20-25 páginas. Logo, paleta, tipografía, aplicaciones básicas. 1 revisión. Entrega 5 días.",
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
          "Manual de marca 30-40 páginas. Sistema completo, tono de voz, guidelines extendidas. 2 revisiones. Entrega 7 días.",
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
          "Manual de marca 40-50 páginas. Estrategia + identidad verbal + guidelines exhaustivas + formación equipo. 2 revisiones. Entrega 10 días.",
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
      name: "¿Cuánto cuesta un manual de marca con Tramarca?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tres tiers con pricing público e IVA incluido: Esencial 490€ (20-25 páginas), Profesional 990€ (30-40 páginas), Premium 1.990€ (40-50 páginas). Precios finales. Sin sorpresas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué incluye el IVA? ¿Hay costes ocultos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El IVA 21% está incluido en los precios publicados. No hay costes ocultos. Cada tier detalla entregables, revisiones y plazos por adelantado.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tarda en entregarse un manual de marca?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Esencial: 5 días laborables. Profesional: 7 días. Premium: 10 días. Los plazos se cuentan desde el kickoff con brief firmado.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuántas revisiones incluye cada tier?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Esencial incluye 1 revisión. Profesional y Premium, 2 revisiones. Cada revisión cubre cambios acotados; cambios de alcance se presupuestan aparte.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué diferencia a Tramarca de una agencia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tramarca es productizado: scope cerrado, precio público, plazo publicado. Una agencia tradicional hace discovery, propuesta y custom pricing en semanas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es el Founding Customer Program?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los primeros cinco clientes reciben su tier al precio full con extras adicionales (más páginas, branding verbal, formación) a cambio de un case study público, testimonial en vídeo y dos referidos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Atendéis fuera de Madrid?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Tramarca opera 100% online para toda España. El proceso (brief, reviews, entrega) se hace por videollamada y email.",
      },
    },
    {
      "@type": "Question",
      name: "¿Emitís factura con IVA detallado?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Factura electrónica española con IVA 21% desglosado, lista para tu contabilidad.",
      },
    },
  ],
};

export function jsonLdGraph(...nodes: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
