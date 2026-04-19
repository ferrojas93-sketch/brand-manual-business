import type { ComponentType } from "react";
import CasoAnfisbena from "./anfisbena";
import CasoClaramel from "./claramel";
import CasoMatrazInnova from "./matraz-innova";
import CasoShamusic from "./shamusic";
import CasoTramarca from "./tramarca";

/**
 * Registry estático de casos de estudio. Mismo patron que content/blog/index.ts.
 * Solo manuales con caso completo escrito y permiso del cliente.
 */
export const CASO_BODIES: Record<string, ComponentType> = {
  anfisbena: CasoAnfisbena,
  claramel: CasoClaramel,
  "matraz-innova": CasoMatrazInnova,
  shamusic: CasoShamusic,
  tramarca: CasoTramarca,
};

export function getCasoBody(slug: string): ComponentType | undefined {
  return CASO_BODIES[slug];
}
