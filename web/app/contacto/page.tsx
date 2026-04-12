import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";
import { SITE_URL } from "@/lib/tiers";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Escríbenos. Respondemos en 24h laborables. Sí o no al proyecto. Sin ceremonia. hola@tramarca.es o por el formulario. Tu tiempo también cuenta.",
  alternates: { canonical: `${SITE_URL}/contacto` },
};

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
      <section>
        <div className="mx-auto max-w-5xl px-6 pt-20 md:pt-28 pb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-lacre">Contacto</p>
          <h1 className="mt-6 text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9]">
            Hablamos<span className="text-lacre">.</span>
          </h1>
          <p className="mt-10 max-w-2xl text-lg md:text-xl text-piedra leading-relaxed">
            Rellena cuatro campos. Respondemos en menos de 24 horas laborables. Si encaja,
            pasamos a kickoff. Si no, también te lo decimos. Tu tiempo también cuenta.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-6 pb-20 md:pb-28">
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
