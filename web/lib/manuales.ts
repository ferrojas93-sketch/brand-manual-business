import type { TierId } from "./tiers";

export type Manual = {
  slug: string;
  name: string;
  tier: TierId | "Propio";
  pages: number;
  year: number;
  brief: string;
  direction: string;
  altCover: string;
  quote?: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  sector: string;
};

export const MANUALES: Manual[] = [
  {
    slug: "anfisbena",
    name: "Anfisbena",
    tier: "profesional",
    pages: 43,
    year: 2026,
    sector: "Cultural",
    brief: "Fundación cultural con sistema visual inconsistente entre canales digitales y papelería institucional.",
    direction:
      "Sistema tipográfico jerárquico, paleta cromática de cuatro tonos aplicada con disciplina, guidelines extendidas para aplicación editorial. Cuarenta y tres páginas, tier Profesional.",
    altCover: "Anfisbena — manual de marca profesional 43 páginas entregado por Tramarca",
    testimonial: {
      quote: "Teníamos la marca operando sin red. Tramarca nos la documentó en siete días y ahora cualquier proveedor sabe cómo usarla. Dejamos de improvisar.",
      author: "Dirección cultural",
      role: "Fundación Anfisbena",
    },
  },
  {
    slug: "claramel",
    name: "Claramel",
    tier: "esencial",
    pages: 29,
    year: 2026,
    sector: "Artesanal",
    brief: "Marca artesanal que arrancaba sin más activo que un nombre y un producto.",
    direction:
      "Logo construido desde el nombre, paleta corta, sistema tipográfico sobrio, aplicaciones básicas para ecommerce y redes. Veintinueve páginas, tier Esencial.",
    altCover: "Claramel — manual de marca 29 páginas entregado por Tramarca",
    testimonial: {
      quote: "Arrancamos sin nada. Con el Esencial salimos a vender con marca de verdad: logo, colores, tipografía y aplicaciones para ecommerce. Precio cerrado y entrega en cinco días. Punto.",
      author: "Fundadora",
      role: "Claramel",
    },
  },
  {
    slug: "matraz-innova",
    name: "Matraz Innova",
    tier: "profesional",
    pages: 33,
    year: 2026,
    sector: "Deeptech B2B",
    brief: "Spin-off deeptech con identidad técnica previa, necesitaba manual para escalar comunicaciones B2B.",
    direction:
      "Sistema limpio, tipografía funcional, paleta cromática institucional con acento de energía. Guidelines web, papelería y presentaciones. Treinta y tres páginas, tier Profesional.",
    altCover: "Matraz Innova — manual de identidad corporativa 33 páginas por Tramarca",
    testimonial: {
      quote: "Nuestra identidad técnica era coherente en la cabeza y un caos por escrito. Tramarca cerró el sistema y ahora el equipo B2B usa plantillas sin preguntar. Ahorramos horas cada semana.",
      author: "CMO",
      role: "Matraz Innova",
    },
  },
  {
    slug: "shamusic",
    name: "Shamusic",
    tier: "premium",
    pages: 46,
    year: 2026,
    sector: "Music-tech",
    brief: "Plataforma blockchain de registro de copyright musical para artistas independientes. Comunicación con fuerza estratégica pero sin sistema documentado: tres tipografías, cuatro morados sin rol, Instagram inconsistente.",
    direction:
      "Axis Bold. Archetype Rebel + Creator. Paleta racionalizada midnight + signal magenta con regla 60/30/10. Sistema tipográfico Fraunces + Host Grotesk + JetBrains Mono. Mantra verbal «Tu música. Tu copyright. Tu dinero.» codificado en Fraunces 900 opsz 144. Cuarenta y seis páginas, tier Premium.",
    altCover: "Shamusic — manual de marca premium 46 páginas entregado por Tramarca",
    testimonial: {
      quote: "Teníamos la voz, teníamos la comunidad, pero cada post era una marca distinta. Tramarca codificó reels, posters, Sessions y certificado en un sistema que aguanta el scroll sin que tengamos que improvisar cada jueves.",
      author: "Dirección de marca",
      role: "Shamusic",
    },
  },
  {
    slug: "tramarca",
    name: "Tramarca",
    tier: "Propio",
    pages: 34,
    year: 2026,
    sector: "Prueba radical",
    brief: "Nuestra propia marca necesitaba el listón. Si no nos lo aplicamos, no tenemos autoridad moral.",
    direction:
      "Paleta negra con Lacre como acento único. Satoshi + IBM Plex Mono. Voz provocativa con El Punto Final como tagline. Spreads cinematográficos. Treinta y cuatro páginas, autoproducido.",
    altCover: "Tramarca — manual propio 34 páginas diseñado por Tramarca para Tramarca",
    quote:
      "Este manual existe para que, si algún día dudamos de lo que estamos haciendo, abramos esta página y nos acordemos. Punto.",
  },
];

export function getManual(slug: string) {
  return MANUALES.find((m) => m.slug === slug);
}
