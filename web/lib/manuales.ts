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
  /** Brief visible descripción de la empresa cliente (1 frase · estilo p56 manual v4) */
  companyDetail: string;
  /** Path al logo tile del cliente en /public/portfolio/logos (png|svg) */
  logo: string;
  /** Tile background para el logo · "dark" (negro) o "light" (papel) o "lacre" */
  logoBg: "dark" | "light" | "lacre";
  /** Si false, /trabajos/[slug] redirige a /trabajos — trabajo hecho pero no mostrable aún */
  showDetail: boolean;
};

export const MANUALES: Manual[] = [
  {
    slug: "anfisbena",
    name: "Anfisbena",
    tier: "profesional",
    pages: 43,
    year: 2026,
    sector: "Moda · Ropa",
    brief: "Marca de ropa contemporánea con sistema visual inconsistente entre canales digitales y papelería comercial.",
    direction:
      "Sistema tipográfico jerárquico, paleta cromática de cuatro tonos aplicada con disciplina, guidelines extendidas para aplicación editorial y papelería comercial. Cuarenta y tres páginas, tier Profesional.",
    altCover: "Anfisbena — manual de marca profesional 43 páginas entregado por Tramarca",
    testimonial: {
      quote: "Teníamos la marca operando sin red. Tramarca nos la documentó en siete días y ahora cualquier proveedor sabe cómo usarla. Dejamos de improvisar.",
      author: "Dirección de marca",
      role: "Anfisbena",
    },
    companyDetail: "Marca de ropa contemporánea. Sistema documentado con identidad visual, voz editorial y papelería comercial.",
    logo: "/portfolio/logos/anfisbena.png",
    logoBg: "dark",
    showDetail: true,
  },
  {
    slug: "claramel",
    name: "Claramel",
    tier: "esencial",
    pages: 29,
    year: 2026,
    sector: "IA personalizada",
    brief: "Asistente de IA personalizada que arrancaba sin más activo que un nombre y un producto.",
    direction:
      "Logo construido desde el nombre, paleta corta, sistema tipográfico sobrio, aplicaciones básicas para producto y web. Veintinueve páginas, tier Esencial.",
    altCover: "Claramel — manual de marca 29 páginas entregado por Tramarca",
    testimonial: {
      quote: "Arrancamos sin nada. Con el Esencial salimos con marca de verdad: logo, colores, tipografía y aplicaciones para producto y web. Precio cerrado y entrega en cinco días.",
      author: "Fundadora",
      role: "Claramel",
    },
    companyDetail: "Asistente de IA personalizada. Identidad base, paleta, tipografía y aplicaciones para producto y web.",
    logo: "/portfolio/logos/claramel.png",
    logoBg: "light",
    showDetail: true,
  },
  {
    slug: "matraz-innova",
    name: "Matraz Innova",
    tier: "profesional",
    pages: 33,
    year: 2026,
    sector: "Farmacéutica",
    brief: "Laboratorio farmacéutico con identidad técnica previa, necesitaba manual para escalar comunicación a cliente profesional y consumidor final.",
    direction:
      "Sistema limpio, tipografía funcional, paleta cromática institucional con acento de energía. Guidelines web, papelería y presentaciones. Treinta y tres páginas, tier Profesional.",
    altCover: "Matraz Innova — manual de identidad corporativa 33 páginas por Tramarca",
    testimonial: {
      quote: "Nuestra identidad era coherente en la cabeza y un caos por escrito. Tramarca cerró el sistema y ahora el equipo usa plantillas sin preguntar. Ahorramos horas cada semana.",
      author: "Dirección de marketing",
      role: "Matraz Innova",
    },
    companyDetail: "Laboratorio farmacéutico. Sistema visual y verbal para comunicar ciencia a cliente profesional y consumidor final.",
    logo: "/portfolio/logos/matraz.svg",
    logoBg: "light",
    showDetail: true,
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
    companyDetail: "Plataforma music-tech. Manual Premium completo — estrategia, voz, aplicaciones y governance.",
    logo: "/portfolio/logos/shamusic.png",
    logoBg: "dark",
    showDetail: true,
  },
  {
    slug: "tramarca",
    name: "Tramarca",
    tier: "Propio",
    pages: 58,
    year: 2026,
    sector: "Meta · Este manual",
    brief: "Nuestra propia marca necesitaba el listón. Si no nos lo aplicamos, no tenemos autoridad moral.",
    direction:
      "Paleta negra con Lacre como acento único. Satoshi + IBM Plex Mono. Voz provocativa con El Punto Final como tagline. Spreads cinematográficos. Cincuenta y ocho páginas, autoproducido.",
    altCover: "Tramarca — manual propio 58 páginas diseñado por Tramarca para Tramarca",
    quote:
      "Este manual existe para que, si algún día dudamos de lo que estamos haciendo, abramos esta página y nos acordemos.",
    companyDetail: "Nuestra propia marca aplicada a sí misma. El documento que estás leyendo.",
    logo: "/portfolio/logos/tramarca.svg",
    logoBg: "lacre",
    showDetail: true,
  },
];

export function getManual(slug: string) {
  return MANUALES.find((m) => m.slug === slug);
}
