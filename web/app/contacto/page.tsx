import type { Metadata } from "next";
import Image from "next/image";
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
  searchParams: { tier?: string };
}) {
  return <ContactForm defaultTier={searchParams.tier} />;
}

export default async function ContactoPage({
  searchParams,
}: {
  searchParams: Promise<{ tier?: string }>;
}) {
  const sp = await searchParams;

  return (
    <>
      <JsonLd data={schemaGraph} />
      {/* Hero — imagen de fondo con overlay, proceso aside compacto */}
      <section className="relative bg-papel border-b border-negro/15 overflow-hidden">
        {/* Flatlay como background con opacidad — se intuye sin competir */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/hero-v5/contacto-hero-flatlay.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-[0.18]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-papel/80 via-papel/40 to-papel/80" />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 pt-16 md:pt-20 pb-14 md:pb-20">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-7">
              <div className="flex items-start gap-5">
                <span
                  aria-hidden
                  className="mt-[0.22em] block w-[3px] h-[0.68em] bg-lacre shrink-0"
                  style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
                />
                <h1
                  className="font-sans font-black tracking-[-0.04em] leading-[0.9] text-negro"
                  style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
                >
                  Hablamos<span className="text-lacre">.</span>
                </h1>
              </div>
              <p className="mt-8 max-w-xl text-base md:text-lg text-piedra leading-[1.55]">
                Rellena el formulario. Te escribimos en menos de 24 horas laborables
                con propuesta y link de pago seguro. Si encaja, kickoff en 48h. Si
                no, te lo decimos con honestidad<span className="text-lacre">.</span>
              </p>

              <div className="mt-6 inline-flex items-baseline gap-3 border-l-2 border-lacre pl-4 max-w-xl">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-lacre shrink-0">
                  Plantilla
                </span>
                <p className="text-sm text-piedra leading-[1.55]">
                  ¿Quieres preparar el brief antes? <a href="/recursos/brief-tramarca.pdf" download className="text-negro underline underline-offset-4 hover:text-lacre">Descarga el brief PDF (23 preguntas)</a> y mándanoslo cumplimentado a <a href="mailto:hola@tramarca.es" className="text-negro underline underline-offset-4 hover:text-lacre">hola@tramarca.es</a><span className="text-lacre">.</span>
                </p>
              </div>
            </div>

            {/* Lateral proceso 3 pasos — compacto */}
            <aside className="lg:col-span-5 mt-4 lg:mt-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-lacre mb-4">
                Cómo funciona
              </p>
              <ol className="divide-y divide-negro/15 border-y border-negro/15">
                {[
                  {
                    n: "01",
                    t: "Rellena el formulario",
                    d: "Cuéntanos el proyecto. Adjunta logo, brief o referencias si los tienes.",
                  },
                  {
                    n: "02",
                    t: "Te escribimos en 24h",
                    d: "Revisamos el brief y enviamos propuesta con link de pago Stripe.",
                  },
                  {
                    n: "03",
                    t: "Kickoff en 48h",
                    d: "Confirmas pago, firmamos brief y arranca el contador del tier que elijas.",
                  },
                ].map((s) => (
                  <li key={s.n} className="flex items-baseline gap-4 py-4">
                    <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-lacre shrink-0 min-w-[24px]">
                      {s.n}
                    </span>
                    <div className="min-w-0">
                      <h2 className="font-black text-base tracking-tight">{s.t}</h2>
                      <p className="mt-1 text-sm text-piedra leading-relaxed">{s.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </aside>
          </div>
        </div>
      </section>

      {/* Formulario — fondo contrastado editorial */}
      <section className="bg-arena">
        <div className="mx-auto max-w-3xl px-6 py-10 md:py-14">
          <div className="bg-papel border border-negro/15 shadow-[0_30px_80px_-30px_rgba(12,12,12,0.25)] p-8 md:p-12 lg:p-16">
            <div className="mb-10 pb-8 border-b border-negro/15">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-lacre">
                Formulario
              </p>
              <h2 className="mt-3 text-2xl md:text-3xl font-black tracking-tight">
                Cuéntanos tu proyecto<span className="text-lacre">.</span>
              </h2>
              <p className="mt-3 text-sm md:text-base text-piedra leading-relaxed">
                Obligatorio: cuatro campos. Opcional: todo lo demás — ayuda pero no
                bloquea.
              </p>
            </div>
            <Suspense fallback={<div className="font-mono text-sm text-piedra">Cargando…</div>}>
              <ContactFormWithParams searchParams={sp} />
            </Suspense>
          </div>

          <div className="mt-16 pt-10 border-t border-negro/15 text-center">
            <p className="font-mono text-xs uppercase tracking-widest text-piedra">
              ¿Prefieres email directo?
            </p>
            <a
              href="mailto:hola@tramarca.es"
              className="mt-2 inline-block text-3xl md:text-4xl font-black tracking-tight hover:text-lacre transition-colors"
            >
              hola@tramarca.es
            </a>
          </div>

          {/* Sello editorial — signature visual al cierre */}
          <div className="mt-16 flex justify-center">
            <figure className="relative w-40 md:w-52 aspect-square">
              <Image
                src="/hero-v5/contacto-seal.jpg"
                alt="Sello editorial Tramarca — disco lacre con hairline horizontal"
                fill
                sizes="(min-width: 768px) 13rem, 10rem"
                className="object-contain"
              />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
