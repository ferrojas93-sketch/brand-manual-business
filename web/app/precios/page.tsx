import type { Metadata } from "next";
import Link from "next/link";
import { PricingCards } from "@/components/PricingCards";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ButtonLink } from "@/components/Button";
import { JsonLd } from "@/components/JsonLd";
import { FOUNDING_SLOTS_REMAINING, FOUNDING_SLOTS_TOTAL, SITE_URL } from "@/lib/tiers";
import { jsonLdGraph, serviceSchema } from "@/lib/schema";

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
    a: "Sí. Si tras la primera entrega consideras que el manual no resuelve lo que acordamos en el brief, reembolsamos el 50% pagado al kickoff dentro de los 14 días siguientes a la entrega. No entregamos a medias: o sale el manual completo, o devolvemos. Punto.",
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
      <section>
        <div className="mx-auto max-w-7xl px-6 pt-20 md:pt-28 pb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-lacre">Precios</p>
          <h1 className="mt-6 text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95]">
            Cuánto cuesta un manual de marca con Tramarca.
          </h1>
          <div className="mt-10 max-w-3xl space-y-5 text-lg md:text-xl text-negro/80 leading-relaxed">
            <p>
              Un manual de marca con Tramarca cuesta <strong>490€, 990€ o 1.990€, IVA incluido</strong>. Tres tiers productizados. Entregamos en 5, 7 o 10 días laborables. Páginas reales: 20-25 en Esencial, 30-40 en Profesional, 40-50 en Premium. Revisiones incluidas: 1 en Esencial, 2 en los otros dos.
            </p>
            <p className="text-piedra">
              Una agencia tradicional española te pide entre 5.000€ y 50.000€ con custom pricing. Un freelance, entre 800€ y 1.500€ sin plazo garantizado. Canva, 12€/mes pero lo haces tú. Tramarca ocupa el hueco: productizado, precio público, plazo publicado, IVA incluido.
            </p>
            <p>
              Lo que ves aquí es el precio final. Sin discovery de pago, sin propuesta a medida, sin sorpresas en la factura.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-arena">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <PricingCards />
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:py-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">
              Los tres tiers al detalle.
            </h2>
            <p className="font-mono text-xs uppercase tracking-widest text-piedra">
              Scroll horizontal en móvil →
            </p>
          </div>

          <div className="mt-14 overflow-x-auto -mx-6 px-6">
            <table className="w-full min-w-[860px] border-collapse text-left">
              <thead>
                <tr>
                  <th className="py-6 pr-6 align-bottom font-mono text-xs uppercase tracking-widest text-piedra w-[28%]">
                    Comparativa
                  </th>
                  <th className="align-bottom p-0 w-[24%]">
                    <div className="border-t-2 border-negro pt-6 pr-6">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-piedra">Tier 1</p>
                      <p className="mt-2 text-3xl md:text-4xl font-black tracking-tight">Esencial</p>
                      <p className="mt-1 text-2xl font-black">490€</p>
                      <p className="font-mono text-[10px] text-piedra uppercase tracking-widest">IVA incluido</p>
                    </div>
                  </th>
                  <th className="align-bottom p-0 w-[24%] relative">
                    <div className="absolute -top-4 left-0 right-4 bg-lacre text-papel font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 text-center">
                      Recomendado
                    </div>
                    <div className="border-t-2 border-lacre pt-6 pr-6 bg-lacre/5">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-lacre">Tier 2</p>
                      <p className="mt-2 text-3xl md:text-4xl font-black tracking-tight">Profesional</p>
                      <p className="mt-1 text-2xl font-black">990€</p>
                      <p className="font-mono text-[10px] text-piedra uppercase tracking-widest">IVA incluido</p>
                    </div>
                  </th>
                  <th className="align-bottom p-0 w-[24%]">
                    <div className="border-t-2 border-negro pt-6 pr-2">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-piedra">Tier 3</p>
                      <p className="mt-2 text-3xl md:text-4xl font-black tracking-tight">Premium</p>
                      <p className="mt-1 text-2xl font-black">1.990€</p>
                      <p className="font-mono text-[10px] text-piedra uppercase tracking-widest">IVA incluido</p>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.slice(1).map((r) => (
                  <tr key={r.label} className="border-b border-negro/10 hover:bg-arena/40 transition-colors">
                    <td className="py-5 pr-6 font-mono text-[11px] text-piedra uppercase tracking-widest">
                      {r.label}
                    </td>
                    <td className="py-5 pr-6 text-base">{r.esencial}</td>
                    <td className="py-5 pr-6 text-base bg-lacre/5 font-semibold">
                      {r.profesional}
                    </td>
                    <td className="py-5 pr-2 text-base">{r.premium}</td>
                  </tr>
                ))}
                <tr>
                  <td className="py-8 pr-6" />
                  <td className="py-8 pr-6">
                    <ButtonLink href="/contacto" variant="ghost" size="md">
                      Empezar el Esencial →
                    </ButtonLink>
                  </td>
                  <td className="py-8 pr-6 bg-lacre/5">
                    <ButtonLink href="/contacto" variant="primary" size="md">
                      Reservar Profesional →
                    </ButtonLink>
                  </td>
                  <td className="py-8 pr-2">
                    <ButtonLink href="/contacto" variant="ghost" size="md">
                      Abrir Premium →
                    </ButtonLink>
                  </td>
                </tr>
              </tbody>
            </table>
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
                "Kickoff por videollamada (30min)",
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
              Lo que no hacemos. Por honestidad.
            </h2>
            <ul className="mt-8 space-y-3 text-base md:text-lg text-negro/85">
              {[
                "Copywriting extenso (web, campañas, slogans comerciales)",
                "Naming / verbal identity para marca nueva (cotización específica)",
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
            <p className="mt-8 text-base text-piedra italic">
              No somos una agencia full-service. Somos un estudio que hace un producto
              concreto muy bien.
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
            Tres tiers. Sin rodeos.
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

      <JsonLd data={jsonLdGraph(serviceSchema)} />
    </>
  );
}
