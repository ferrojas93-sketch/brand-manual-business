import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SITE_URL } from "@/lib/tiers";
import { JsonLd } from "@/components/JsonLd";
import { jsonLdGraph, breadcrumbListSchema, aboutPageSchema } from "@/lib/schema";
import { MANUALES } from "@/lib/manuales";

export const metadata: Metadata = {
  title: "Nosotros · Un estudio que solo hace manuales de marca",
  description: `Un estudio español que solo hace manuales de marca. Precio público, IVA incluido, plazo publicado. ${MANUALES.length} manuales entregados. Trabajamos por escrito.`,
  alternates: { canonical: `${SITE_URL}/sobre` },
};

const schemaGraph = jsonLdGraph(
  breadcrumbListSchema([
    { name: "Inicio", url: SITE_URL },
    { name: "Nosotros", url: `${SITE_URL}/sobre` },
  ]),
  aboutPageSchema()
);

export default function SobrePage() {
  return (
    <>
      <JsonLd data={schemaGraph} />
      {/* Hero editorial — papel con retrato del estudio */}
      <section className="relative bg-papel border-b border-negro/15 overflow-hidden">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 pt-6 md:pt-8 pb-6 md:pb-8">
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-piedra border-b border-negro/15 pb-4">
            <span>Tramarca <span className="text-lacre">·</span> Estudio editorial</span>
            <span className="hidden md:inline">Nosotros</span>
            <span>Madrid <span className="text-lacre">·</span> 2026</span>
          </div>
        </div>

        <div className="relative mx-auto max-w-[1500px] px-6 md:px-10 pt-4 md:pt-6 pb-16 md:pb-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-end">
            <div className="lg:col-span-7">
              <div className="flex items-start gap-6">
                <span aria-hidden className="mt-2 block w-[3px] h-24 bg-lacre shrink-0" />
                <div>
                  <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.35em] text-piedra">
                    Nosotros <span className="text-lacre">·</span> Por escrito
                  </p>
                  <h1
                    className="mt-5 font-sans font-black tracking-[-0.04em] leading-[0.9] text-negro"
                    style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
                  >
                    Un estudio<br />
                    que solo hace<br />
                    manuales<span className="text-lacre">.</span>
                  </h1>
                </div>
              </div>
              <p className="mt-8 max-w-xl text-lg md:text-xl text-piedra leading-[1.55]">
                No hacemos web, ni campañas, ni packaging, ni naming. Una sola cosa,
                hecha bien. Precio público, IVA incluido, plazo publicado<span className="text-lacre">.</span>
              </p>
            </div>
            <div className="lg:col-span-5">
              <figure className="relative aspect-[3/4] overflow-hidden border border-negro/10 bg-arena">
                <Image
                  src="/hero/04-hands-studio.jpg"
                  alt="Manos revisando una página de manual de marca en el estudio"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                  priority
                />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-negro/70 via-negro/20 to-transparent p-5">
                  <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-lacre">
                    Fig. 34 · Estudio
                  </p>
                  <p className="mt-1 text-papel font-black text-sm leading-tight">
                    El trabajo es revisar<span className="text-lacre">.</span>
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Manifiesto narrativo — ventajas competitivas reales */}
      <section className="bg-papel">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-20 md:py-28 grid lg:grid-cols-12 gap-10 lg:gap-16">
          <aside className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-lacre">
              Por qué Tramarca
            </p>
            <h2 className="mt-5 font-sans font-black tracking-tight leading-[1.02] text-4xl md:text-5xl">
              Cuatro decisiones que nos hacen distintos<span className="text-lacre">.</span>
            </h2>
            <p className="mt-5 text-piedra text-base leading-relaxed max-w-sm">
              No son trucos de marketing. Son la manera en la que trabajamos y lo que
              deja un manual Tramarca frente a cualquier alternativa del mercado<span className="text-lacre">.</span>
            </p>
          </aside>

          <div className="lg:col-span-8 space-y-10 text-lg md:text-xl leading-[1.65] text-negro/85">
            <Reveal>
              <p className="text-2xl md:text-3xl font-black leading-[1.15] border-l-4 border-lacre pl-6 py-2 text-negro">
                Un estudio especializado solo en manuales de marca<span className="text-lacre">.</span>
              </p>
              <p className="mt-5">
                No hacemos web, ni campañas, ni packaging, ni ads, ni ocho servicios más
                diluidos. Hacemos una sola cosa y por eso la hacemos deprisa y la hacemos
                bien. En un estudio generalista el manual es un entregable más; aquí es
                <strong> el producto</strong>. Eso cambia cómo pensamos, cómo escribimos
                y cómo producimos cada página.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-2xl md:text-3xl font-black leading-[1.15] border-l-4 border-lacre pl-6 py-2 text-negro">
                Un sistema documentado, no un logo con colores<span className="text-lacre">.</span>
              </p>
              <p className="mt-5">
                El 90% de lo que se vende como &ldquo;manual de marca&rdquo; en España son
                ocho láminas con logo, paleta y tipografía. Un brand kit, no un manual.
                Nosotros entregamos entre 20 y 50 páginas de sistema operativo: grid,
                jerarquía, voz, aplicaciones, qué hacer y qué no. Un documento que tu
                equipo puede abrir el lunes y aplicar sin preguntarte cada vez<span className="text-lacre">.</span>
              </p>
            </Reveal>

            <Reveal>
              <p className="text-2xl md:text-3xl font-black leading-[1.15] border-l-4 border-lacre pl-6 py-2 text-negro">
                Productizado, no consultivo<span className="text-lacre">.</span>
              </p>
              <p className="mt-5">
                Una agencia tradicional hace discovery de seis semanas, propuesta a medida
                y timeline &ldquo;a definir&rdquo;. Aquí el scope está cerrado antes de empezar:
                tres tiers con entregables documentados, plazo publicado de 5/7/10 días, y
                dos rondas de revisión acotadas. Menos reuniones, menos fricción, más
                delivery. Tu tiempo no se va en workshops.
              </p>
            </Reveal>

            <Reveal>
              <p className="text-2xl md:text-3xl font-black leading-[1.15] border-l-4 border-lacre pl-6 py-2 text-negro">
                Async por email, no reuniones<span className="text-lacre">.</span>
              </p>
              <p className="mt-5">
                Brief, kickoff, reviews y entrega por escrito. Nada de videollamadas
                obligatorias ni reuniones semanales. Lo que entregamos es un documento;
                el proceso para fabricarlo también lo es. Ganas tiempo para tu equipo y
                evitas el bucle de &ldquo;vamos a agendar una call para verlo&rdquo;<span className="text-lacre">.</span>
              </p>
            </Reveal>

            <Reveal>
              <p className="text-base md:text-lg text-piedra italic border-t border-negro/15 pt-8">
                El precio público con IVA incluido, los 5/7/10 días y la garantía del 50%
                son consecuencia de estas cuatro decisiones — no la ventaja en sí. Si
                entregamos deprisa y documentado, podemos permitirnos decirte el precio
                desde el minuto uno.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Qué creemos — manifesto dark */}
      <section className="section-dark">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-24 md:py-32">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-lacre">
            Qué creemos
          </p>
          <ul className="mt-10 space-y-6 text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] max-w-5xl">
            {[
              "Un manual es un sistema, no un archivo.",
              "Especializarse es la única forma de ir rápido.",
              "El discovery eterno es pereza disfrazada de rigor.",
              "Lo que no se documenta, se improvisa.",
              "Un buen sistema libera al equipo del permiso constante.",
            ].map((x, i) => (
              <li key={i} className="flex gap-6 items-baseline border-b border-papel/10 pb-6">
                <span className="font-mono text-sm text-lacre shrink-0 mt-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  {x.endsWith(".") ? (
                    <>
                      {x.slice(0, -1)}
                      <span className="text-lacre">.</span>
                    </>
                  ) : (
                    x
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Stats + portfolio */}
      <section className="bg-papel border-t border-negro/10">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 py-20 md:py-28">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-lacre">
              Qué hemos entregado
            </p>
            <h2 className="mt-6 font-sans font-black tracking-tight leading-[1.05] max-w-5xl text-4xl md:text-6xl lg:text-7xl">
              Cuatro manuales.
              <br />
              <span className="text-piedra">Ciento treinta y nueve páginas.</span>
              <br />
              Tres sectores<span className="text-lacre">.</span>
            </h2>
          </Reveal>

          <Reveal>
            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-negro/15 border border-negro/15">
              {[
                { n: "04", l: "Manuales entregados" },
                { n: "139", l: "Páginas producidas" },
                { n: "03", l: "Sectores" },
                { n: "100%", l: "Con PDF público" },
              ].map((s) => (
                <div key={s.l} className="bg-papel p-6 md:p-8">
                  <p className="font-sans font-black text-4xl md:text-6xl text-negro tracking-[-0.03em]">
                    {s.n}
                  </p>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-piedra">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <p className="mt-12 max-w-3xl text-lg md:text-xl text-piedra leading-relaxed">
              Cultural (Anfisbena), artesanal (Claramel), deeptech (Matraz Innova) más
              el nuestro propio. Portfolio público, PDFs descargables, sin mockups.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <ButtonLink href="/precios" variant="primary" size="lg">
                Ver precios →
              </ButtonLink>
              <ButtonLink href="/manuales" variant="ghost" size="lg">
                Ver manuales publicados
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
