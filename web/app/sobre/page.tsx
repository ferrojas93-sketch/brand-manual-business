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

        <div className="relative mx-auto max-w-[1500px] px-6 md:px-10 pt-2 md:pt-4 pb-16 md:pb-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
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
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-14 md:py-20">
          {/* Header full-width editorial */}
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-20 pb-10 border-b border-negro/15">
            <div className="md:col-span-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-lacre">
                Por qué Tramarca
              </p>
              <h2 className="mt-5 font-sans font-black tracking-tight leading-[1.02] text-4xl md:text-5xl">
                Cuatro decisiones<br />que nos hacen distintos<span className="text-lacre">.</span>
              </h2>
            </div>
            <div className="md:col-span-7 md:pt-6">
              <p className="text-piedra text-lg leading-relaxed">
                No son trucos de marketing. Son la manera en que trabajamos y lo que
                deja un manual Tramarca frente a cualquier alternativa del mercado.
                Las consecuencias visibles — precio cerrado, plazo publicado,
                manual propio publicado — salen de aquí, no al revés<span className="text-lacre">.</span>
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto space-y-14 text-lg md:text-xl leading-[1.65] text-negro/85">
            <Reveal>
              <p className="text-2xl md:text-3xl font-black leading-[1.15] border-l-4 border-lacre pl-6 py-2 text-negro">
                Un estudio especializado solo en manuales de marca<span className="text-lacre">.</span>
              </p>
              <p className="mt-5">
                No hacemos web, ni campañas, ni packaging, ni ads, ni ocho servicios más
                diluidos. Hacemos una sola cosa y por eso la hacemos rápido y bien. En un
                estudio generalista el manual es un entregable más; aquí es
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
                Aquí el scope está cerrado antes de empezar: tres tiers con entregables
                documentados, plazo publicado de 5/7/10 días laborables, y dos rondas
                de revisión incluidas dentro del proceso. Brief, kickoff, reviews y
                entrega por escrito — lo que entregamos es un documento y el proceso
                para fabricarlo también lo es. El precio y el plazo los sabes antes
                de firmar<span className="text-lacre">.</span>
              </p>
            </Reveal>

            <Reveal>
              <p className="text-2xl md:text-3xl font-black leading-[1.15] border-l-4 border-lacre pl-6 py-2 text-negro">
                Manual propio publicado · transparencia editorial<span className="text-lacre">.</span>
              </p>
              <p className="mt-5">
                Aplicamos a nosotros mismos el mismo estándar que vendemos. Nuestro
                manual de marca de 58 páginas es público — descargable tras dejar
                tu email. Es el único caso del portfolio que puedes hojear antes
                de hablar con nosotros. Si no nos lo aplicamos, no tenemos
                autoridad moral para producirlo<span className="text-lacre">.</span>
              </p>
            </Reveal>

            <Reveal>
              <p className="text-base md:text-lg text-piedra italic border-t border-negro/15 pt-8">
                El precio público con IVA incluido y los 5/7/10 días son consecuencia
                de estas cuatro decisiones — no la ventaja en sí. Si entregamos
                deprisa y documentado, podemos permitirnos decirte el precio
                desde el minuto uno.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Estudio editorial — bloque atmosférico sobre el entorno de producción */}
      <section className="bg-arena border-y border-negro/15">
        <div className="mx-auto max-w-[1720px] px-6 md:px-10 py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <figure className="relative aspect-[16/9] overflow-hidden bg-papel border border-negro/10 shadow-[0_40px_80px_-30px_rgba(12,12,12,0.25)]">
                <Image
                  src="/hero-v5/sobre-studio.jpg"
                  alt="Estudio editorial Tramarca — stack de manuales impresos, libro abierto con retícula y pieza cerámica lacre sobre concreto"
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover"
                  priority
                />
              </figure>
            </div>
            <div className="lg:col-span-5">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-lacre">
                Estudio editorial
              </p>
              <h2 className="mt-6 text-4xl md:text-5xl font-black tracking-tight leading-[1.05]">
                Categoría antes que adjetivo<span className="text-lacre">.</span>
              </h2>
              <p className="mt-8 text-lg text-piedra leading-[1.6]">
                Tramarca es un estudio editorial, no una agencia creativa. El
                producto es el libro — impreso, encuadernado, defendible — y
                todo lo que lo rodea se ordena alrededor de ese objeto. La
                disciplina editorial ES la propuesta de valor<span className="text-lacre">.</span>
              </p>
            </div>
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

    </>
  );
}
