import type { ComponentType } from "react";

import CuantoCuesta from "./cuanto-cuesta-manual-de-marca-espana-2026";
import QueEsUnManual from "./que-es-un-manual-de-marca";
import ManualVsBrandBook from "./manual-marca-vs-brand-book";
import NasaManual from "./nasa-graphics-standards-manual-1976";
import ComoHacer from "./como-hacer-manual-de-marca-paso-a-paso";
import MejoresManuales from "./mejores-manuales-de-marca-historia";
import FedexFlecha from "./fedex-flecha-oculta";
import LogosSecretos from "./logos-secretos-tipograficos";
import BriefCuestionario from "./brief-manual-marca-cuestionario";

/**
 * Registry estático de bodies por slug.
 * Turbopack no soporta dynamic import con template literal — esta alternativa es canónica.
 */
export const POST_BODIES: Record<string, ComponentType> = {
  "cuanto-cuesta-manual-de-marca-espana-2026": CuantoCuesta,
  "que-es-un-manual-de-marca": QueEsUnManual,
  "manual-marca-vs-brand-book": ManualVsBrandBook,
  "nasa-graphics-standards-manual-1976": NasaManual,
  "como-hacer-manual-de-marca-paso-a-paso": ComoHacer,
  "mejores-manuales-de-marca-historia": MejoresManuales,
  "fedex-flecha-oculta": FedexFlecha,
  "logos-secretos-tipograficos": LogosSecretos,
  "brief-manual-marca-cuestionario": BriefCuestionario,
};

export function getPostBody(slug: string): ComponentType | null {
  return POST_BODIES[slug] ?? null;
}
