import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";
import { SITE_URL } from "@/lib/tiers";
import { JsonLd } from "@/components/JsonLd";
import { jsonLdGraph, breadcrumbListSchema, contactPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contacto · Pide tu manual de marca",
  description:
    "Rellena el formulario o escríbenos a hola@tramarca.es. Respondemos en menos de 24 horas laborables con propuesta y link de pago seguro via Stripe.",
  alternates: { canonical: `${SITE_URL}/contacto` },
};

const schemaGraph = jsonLdGraph(
  breadcrumbListSchema([
    { name: "Inicio", url: SITE_URL },
    { name: "Contacto", url: `${SITE_URL}/contacto` },
  ]),
  contactPageSchema()
);

function ContactFormWithParams({
  searchParams,
}: {
  searchParams: { tier?: string; founding?: string };
}) {
  return (
    <ContactForm
      defaultTier={searchParams.tier}
      defaultFounding={searchParams.founding === "true"}
    />
  );
}

export default async function ContactoPage({
  searchParams,
}: {
  searchParams: Promise<{ tier?: string; founding?: string }>;
}) {
  const sp = await searchParams;

  return (
    <>
      <JsonLd data={schemaGraph} />
      <section>
        <div className="mx-auto max-w-5xl px-6 pt-20 md:pt-28 pb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-lacre">Contacto</p>
          <h1 className="mt-6 text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9]">
            Hablamos<span className="text-lacre">.</span>
          </h1>
          <p className="mt-10 max-w-2xl text-lg md:text-xl text-piedra leading-relaxed">
            Rellena el formulario. Te escribimos en menos de 24 horas laborables con
            propuesta y link de pago seguro. Si encaja, kickoff en 48h. Si no, te lo
            decimos con honestidad.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-6 pb-20 md:pb-28">
          {/* Proceso — 3 pasos */}
          <div className="mb-14 grid md:grid-cols-3 gap-6 border-y border-negro/15 py-8">
            {[
              { n: "01", t: "Rellena el form", d: "Cuéntanos tu proyecto. Adjunta logo, brief o referencias si quieres." },
              { n: "02", t: "Te escribimos en 24h", d: "Revisamos, valoramos encaje y mandamos propuesta con link de pago Stripe." },
              { n: "03", t: "Kickoff en 48h", d: "Confirmas pago, firmamos brief y arranca el contador del tier que elijas." },
            ].map((s) => (
              <div key={s.n}>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-lacre">{s.n}</p>
                <h3 className="mt-2 font-black text-lg tracking-tight">{s.t}</h3>
                <p className="mt-2 text-sm text-piedra leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>

          <Suspense fallback={<div className="font-mono text-sm text-piedra">Cargando…</div>}>
            <ContactFormWithParams searchParams={sp} />
          </Suspense>

          <div className="mt-16 pt-10 border-t border-negro/15">
            <p className="font-mono text-xs uppercase tracking-widest text-piedra">
              ¿Prefieres email directo?
            </p>
            <a
              href="mailto:hola@tramarca.es"
              className="mt-2 block text-3xl md:text-4xl font-black tracking-tight hover:text-lacre transition-colors"
            >
              hola@tramarca.es
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
