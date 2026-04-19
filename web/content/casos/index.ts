import type { ComponentType } from "react";
import CasoTramarca from "./tramarca";

/**
 * Registry estático de casos de estudio. Mismo patron que content/blog/index.ts.
 * Solo manuales con caso completo escrito y permiso del cliente.
 */
export const CASO_BODIES: Record<string, ComponentType> = {
  tramarca: CasoTramarca,
};

export function getCasoBody(slug: string): ComponentType | undefined {
  return CASO_BODIES[slug];
}
