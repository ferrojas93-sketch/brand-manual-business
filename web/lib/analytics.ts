type PlausibleFn = (eventName: string, options?: { props?: Record<string, string | number | boolean> }) => void;

declare global {
  interface Window {
    plausible?: PlausibleFn;
    gtag?: (command: string, eventName: string, params?: Record<string, unknown>) => void;
  }
}

/**
 * Plausible custom event tracking.
 * Plausible tracks pageviews automáticamente; custom events para conversion funnel.
 *
 * Eventos canónicos Tramarca 2026:
 * - manual_request_sent       · form PDF gated completado
 * - manual_request_error      · error en form PDF
 * - cta_pedir_propuesta       · click CTA contacto principal
 * - cta_descargar_manual      · click CTA anchor #pedir-manual
 * - cta_precios               · click hacia /precios
 * - blog_read_end             · scroll 80% en post blog
 * - pricing_card_click        · click tier específico
 */
export function trackEvent(
  name: string,
  props?: Record<string, string | number | boolean>
): void {
  if (typeof window === "undefined") return;
  if (typeof window.plausible === "function") {
    window.plausible(name, props ? { props } : undefined);
  }
  // Optional GA fallback si se añade futuro
  if (typeof window.gtag === "function") {
    window.gtag("event", name, props);
  }
}
