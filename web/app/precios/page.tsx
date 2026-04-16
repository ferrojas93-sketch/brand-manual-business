import type { Metadata } from "next";
import Link from "next/link";
import { PricingCards } from "@/components/PricingCards";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ButtonLink } from "@/components/Button";
import { JsonLd } from "@/components/JsonLd";
import { FOUNDING_SLOTS_REMAINING, FOUNDING_SLOTS_TOTAL, SITE_URL } from "@/lib/tiers";
import { jsonLdGraph, serviceSchema, breadcrumbListSchema } from "@/lib/schema";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Precios manual de marca. IVA incluido.",
  description:
    "Cuánto cuesta un manual de marca. Tres tiers: 490€, 990€, 1.990€. IVA incluido. Plazos 5-10 días. Sin discovery ni sorpresas. Aquí los números.",
  alternates: { canonical: `${SITE_URL}/precios` },
};

const pricingFaqs = [
  {
    q: "¿Por qué 490€ y no 399€ como un logo express?",
    a: "Porque esto no es un logo. Es un manual de 20-25 páginas con sistema, aplicaciones y guidelines. Un logo express a 149€ te da un archivo .ai. Aquí te llevas un documento operativo. Cosas distintas.",
  },
  {
    q: "¿Puedo pagar en plazos?",
    a: "Sí. 50% al kickoff, 50% a la entrega. Transferencia o Stripe. Lo que te venga mejor.",
  },
  {
    q: "¿Emitís factura con IVA detallado?",
    a: "Sí. Factura electrónica española, con IVA 21% desglosado, lista para tu contabilidad. La envía nuestro sistema el día del cobro.",
  },
  {
    q: "¿Y si mi marca ya existe pero quiero rebrand?",
    a: "Igual scope, igual precio. El Profesional y el Premium funcionan muy bien para rebrand. Partimos del activo existente y reconstruimos desde sistema.",
  },
  {
    q: "¿Trabajáis con autónomos o solo empresas?",
    a: "Ambos. Factura con NIF personal o CIF, sin diferencia.",
  },
  {
    q: "¿Subirán los precios?",
    a: "Sí. Tras los cinco Founding o tras los primeros diez clientes (lo que ocurra antes), revisamos tarifas. Si te interesa, el precio actual se cierra con tu kickoff.",
  },
  {
    q: "¿Hay garantía si no me convence?",
    a: "Sí. Si tras la primera entrega consideras que el manual no resuelve lo que acordamos en el brief, reembolsamos el 50% del pago de kickoff dentro de los 14 días siguientes a la entrega. O sale el manual completo, o devolvemos: no entregamos a medias. Queda por escrito en el contrato.",
  },
  {
    q: "¿Dónde se paga?",
    a: "Stripe (Link europeo, IVA incluido) o transferencia SEPA. Te mandamos payment link tras confirmar brief.",
  },
];

const comparisonRows = [
  { label: "Precio (IVA incl.)", esencial: "490€", profesional: "990€", premium: "1.990€" },
  { label: "Páginas", esencial: "20-25", profesional: "30-40", premium: "40-50" },
  { label: "Plazo", esencial: "5 días", profesional: "7 días", premium: "10 días" },
  { label: "Revisiones", esencial: "1", profesional: "2", premium: "2" },
  { label: "Estrategia de marca", esencial: "—", profesional: "Básica", premium: "Completa" },
  { label: "Identidad verbal", esencial: "—", profesional: "✓", premium: "✓ extendida" },
  { label: "Sistema visual", esencial: "Logo + paleta + tipo", profesional: "Completo", premium: "Exhaustivo" },
  { label: "Guidelines aplicación", esencial: "3 (papelería, social, firma)", profesional: "Extendidas (+web)", premium: "Totales (+merch)" },
  { label: "Plantillas Figma", esencial: "—", profesional: "✓", premium: "✓" },
  { label: "Formación equipo (90min)", esencial: "—", profesional: "—", premium: "✓" },
  { label: "Entrega", esencial: "PDF + Figma", profesional: "PDF + Figma", premium: "PDF + Figma + assets sueltos" },
];

export default function PreciosPage() {
  return (
    <>
      {/* Hero compacto + price cards arriba, horizontal en desktop */}
      <section className="bg-papel border-b border-negro/10">
        <div className="mx-auto max-w-7xl px-6 pt-16 md:pt-20 pb-10 md:pb-14">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-lacre">
                Precios <span className="text-piedra">·</span> IVA incluido
              </p>
              <h1 className="mt-5 text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.95]">
                Cuánto cuesta un manual
                <br className="hidden sm:block" /> de marca con Tramarca
                <span className="text-lacre">.</span>
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="text-base md:text-lg text-piedra leading-[1.55]">
                Tres tiers productizados: <strong className="text-negro">490€, 990€ o 1.990€, IVA incluido</strong>.
                Entrega en 5, 7 o 10 días laborables. Páginas reales, revisiones incluidas,
                precio final<span className="text-lacre">.</span>
              </p>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-widest text-piedra">
                <span>Precio publicado</span>
                <span className="text-lacre">·</span>
                <span>Plazo garantizado</span>
                <span className="text-lacre">·</span>
                <span>Sin sorpresas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price cards primero */}
      <section className="bg-arena">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
          <PricingCards />
        </div>
      </section>

      <section className="bg-papel">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-lacre">Comparativa</p>
              <h2 className="mt-5 text-3xl md:text-5xl font-black tracking-tight leading-[1.05]">
                Los tres tiers al detalle<span className="text-lacre">.</span>
              </h2>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-piedra md:max-w-[14rem] md:text-right">
              Misma base. Distinto alcance<span className="text-lacre">.</span>
            </p>
          </div>

          <div className="mt-12 overflow-x-auto">
            <div className="min-w-[780px] border border-negro/15">
              <div className="grid grid-cols-[1.1fr_1fr_1fr_1fr] bg-negro text-papel">
                <div className="px-5 py-5 font-mono text-[10px] uppercase tracking-[0.25em] text-piedra">
                  Comparativa
                </div>
                <div className="px-5 py-5 border-l border-papel/15">
                  <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-ceniza">Tier 1</p>
                  <p className="mt-1 text-lg md:text-xl font-black tracking-tight">Esencial</p>
                  <p className="mt-1 text-sm font-mono text-ceniza tabular-nums">490€ <span className="text-ceniza/70">· IVA incl.</span></p>
                </div>
                <div className="relative px-5 py-5 border-l border-papel/15 bg-lacre/15">
                  <span className="absolute -top-2.5 left-5 bg-negro text-lacre border border-lacre font-mono text-[9px] uppercase tracking-[0.2em] px-2 py-0.5 font-bold">
                    Recomendado
                  </span>
                  <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-lacre">Tier 2</p>
                  <p className="mt-1 text-lg md:text-xl font-black tracking-tight">Profesional</p>
                  <p className="mt-1 text-sm font-mono text-ceniza tabular-nums">990€ <span className="text-ceniza/70">· IVA incl.</span></p>
                </div>
                <div className="px-5 py-5 border-l border-papel/15">
                  <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-ceniza">Tier 3</p>
                  <p className="mt-1 text-lg md:text-xl font-black tracking-tight">Premium</p>
                  <p className="mt-1 text-sm font-mono text-ceniza tabular-nums">1.990€ <span className="text-ceniza/70">· IVA incl.</span></p>
                </div>
              </div>

              {comparisonRows.slice(1).map((r, idx) => (
                <div
                  key={r.label}
                  className={cn(
                    "grid grid-cols-[1.1fr_1fr_1fr_1fr] border-t border-negro/10 text-[13px] md:text-sm",
                    idx % 2 === 1 && "bg-arena/35",
                  )}
                >
                  <div className="px-5 py-3.5 font-mono text-[10px] uppercase tracking-[0.2em] text-piedra">
                    {r.label}
                  </div>
                  <div className="px-5 py-3.5 border-l border-negro/10 text-negro">{r.esencial}</div>
                  <div className="px-5 py-3.5 border-l border-negro/10 text-negro bg-lacre/[0.06] font-medium">
                    {r.profesional}
                  </div>
                  <div className="px-5 py-3.5 border-l border-negro/10 text-negro">{r.premium}</div>
                </div>
              ))}

              <div className="grid grid-cols-[1.1fr_1fr_1fr_1fr] border-t-2 border-negro">
                <div className="px-5 py-5" />
                <div className="px-5 py-5 border-l border-negro/10">
                  <ButtonLink href="/contacto" variant="ghost" size="md" className="w-full">
                    Esencial →
                  </ButtonLink>
                </div>
                <div className="px-5 py-5 border-l border-negro/10 bg-lacre/[0.06]">
                  <ButtonLink href="/contacto" variant="primary" size="md" className="w-full">
                    Profesional →
                  </ButtonLink>
                </div>
                <div className="px-5 py-5 border-l border-negro/10">
                  <ButtonLink href="/contacto" variant="ghost" size="md" className="w-full">
                    Premium →
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-arena">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05]">
              Lo que va en todos los tiers.
            </h2>
            <ul className="mt-8 space-y-3 text-base md:text-lg text-negro/85">
              {[
                "Brief inicial (cuestionario estructurado)",
                "Kickoff por email (async, sin reuniones)",
                "Entrega en PDF final (A4 landscape) + Figma editable",
                "Alineación de revisiones por email con deadlines claras",
                "Soporte post-entrega durante 30 días (dudas de uso)",
                "Facturación con IVA detallado (para tu contabilidad)",
              ].map((x) => (
                <li key={x} className="flex gap-3">
                  <span className="text-lacre mt-1">→</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05]">
              Lo que queda fuera del tier<span className="text-lacre">.</span>
            </h2>
            <ul className="mt-8 space-y-3 text-base md:text-lg text-negro/85">
              {[
                "Copywriting extenso (web, campañas, slogans comerciales)",
                "Naming / verbal identity para marca nueva",
                "Diseño web, landing pages, ecommerce",
                "Packaging, ilustración, motion, fotografía",
                "Marketing ads, SEO, estrategia digital",
                "Cambios ilimitados (cubrimos 1-2 revisiones)",
              ].map((x) => (
                <li key={x} className="flex gap-3">
                  <span className="text-piedra mt-1">✕</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-base text-piedra">
              Si tu proyecto necesita algo que no entra en el tier, lo cotizamos aparte.
              Sin problema<span className="text-lacre">.</span>
            </p>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <p className="font-mono text-xs uppercase tracking-widest text-lacre">
            Founding Customer Program
          </p>
          <h2 className="mt-6 text-4xl md:text-6xl font-black tracking-tight leading-[1.05] max-w-4xl">
            Quedan{" "}
            <span className="text-lacre">
              {FOUNDING_SLOTS_REMAINING} de {FOUNDING_SLOTS_TOTAL}
            </span>{" "}
            plazas.
          </h2>
          <p className="mt-8 text-lg text-ceniza max-w-3xl leading-relaxed">
            Los primeros cinco clientes pagan precio full y reciben extras: +10 páginas
            sobre el tier elegido, sesión de estrategia adicional (60min), case study
            co-producido, prioridad de entrega. A cambio: case study público, testimonial
            en vídeo, dos referidos. Se cierra cuando se cierra.
          </p>
          <div className="mt-10">
            <ButtonLink
              href={{ pathname: "/contacto", query: { founding: "true" } }}
              variant="invert"
              size="lg"
            >
              Hablamos →
            </ButtonLink>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">
            Preguntas sobre precio.
          </h2>
          <div className="mt-12">
            <FaqAccordion items={pricingFaqs} />
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 text-center">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
            Tres tiers. Precios cerrados.
          </h2>
          <div className="mt-10">
            <ButtonLink href="/contacto" variant="invert" size="lg">
              Hablamos →
            </ButtonLink>
          </div>
          <p className="mt-6 font-mono text-xs text-piedra">
            Respondemos en menos de 24 horas laborables. Sí o no.
          </p>
        </div>
      </section>

      <JsonLd
        data={jsonLdGraph(
          serviceSchema,
          breadcrumbListSchema([
            { name: "Inicio", url: SITE_URL },
            { name: "Precios", url: `${SITE_URL}/precios` },
          ])
        )}
      />
    </>
  );
}
