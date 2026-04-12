import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { SITE_URL } from "@/lib/tiers";

export const metadata: Metadata = {
  title: "Sobre Tramarca · Manuales productizados · España",
  description:
    "Tramarca produce sistemas de marca documentados. Tu marca, sin improvisar. Precio público, IVA incluido, plazo publicado. Estudio español.",
  alternates: { canonical: `${SITE_URL}/sobre` },
};

export default function SobrePage() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-7xl px-6 pt-20 md:pt-28 pb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-lacre">Sobre</p>
          <h1 className="mt-6 text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9]">
            Sobre Tramarca<span className="text-lacre">.</span>
          </h1>
        </div>

        <div className="mx-auto max-w-3xl px-6 pb-20 space-y-6 text-lg md:text-xl text-negro/85 leading-relaxed">
          <p>
            Tramarca es un estudio español que hace una sola cosa: <strong>manuales de marca</strong>.
            No hacemos web, ni campañas, ni packaging. Manuales. Con precio público, IVA
            incluido y plazo publicado.
          </p>
          <p>
            Nació en 2026 a partir de una observación simple: en España nadie publicaba
            precio claro para un manual de marca. Los estudios escondían el número detrás de
            &quot;contáctanos&quot;. Los paquetes low-cost vendían logo y llamaban manual a
            un PDF de ocho páginas. Las agencias cobraban diez mil euros y tardaban dos
            meses. Entre medias, nada.
          </p>
          <p>
            Tramarca ocupa ese hueco. Tres tiers productizados. Entrega en 5-10 días. Un
            producto, no un servicio a medida.
          </p>
        </div>
      </section>

      <section className="section-dark">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <p className="font-mono text-xs uppercase tracking-widest text-lacre">
            Qué creemos
          </p>
          <ul className="mt-8 space-y-6 text-3xl md:text-5xl font-black tracking-tight leading-[1.1] max-w-4xl">
            {[
              "El precio opaco es desprecio al cliente.",
              "Un manual no es un PDF de ocho páginas.",
              "Los plazos no son «aproximados».",
              "El IVA va incluido. Siempre.",
              "Punto final.",
            ].map((x, i) => (
              <li key={i} className="flex gap-6 items-baseline">
                <span className="font-mono text-sm text-lacre shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <p className="font-mono text-xs uppercase tracking-widest text-lacre">
            Qué hemos entregado
          </p>
          <h2 className="mt-6 text-4xl md:text-6xl font-black tracking-tight leading-[1.05] max-w-4xl">
            Cuatro manuales. Ciento treinta y nueve páginas. Tres sectores.
          </h2>
          <p className="mt-8 max-w-3xl text-lg md:text-xl text-piedra leading-relaxed">
            Cultural (Anfisbena), artesanal (Claramel), deeptech (Matraz Innova) más el
            nuestro propio. Portfolio público, no mockups.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <ButtonLink href="/precios" variant="primary" size="lg">
              Ver precios →
            </ButtonLink>
            <ButtonLink href="/manuales" variant="ghost" size="lg">
              Ver manuales publicados
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
