import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MANUALES } from "@/lib/manuales";
import { SITE_URL } from "@/lib/tiers";
import { JsonLd } from "@/components/JsonLd";
import { ButtonLink } from "@/components/Button";
import {
  jsonLdGraph,
  breadcrumbListSchema,
  collectionPageSchema,
} from "@/lib/schema";

const TOTAL_PAGES = MANUALES.reduce((sum, m) => sum + m.pages, 0);
const SECTORS = Array.from(new Set(MANUALES.map((m) => m.sector.split(" ")[0]))).length;

export const metadata: Metadata = {
  title: "Trabajos · Portfolio de manuales entregados",
  description: `${MANUALES.length} manuales de marca entregados por Tramarca — ${TOTAL_PAGES} páginas publicadas, ${SECTORS} sectores. Trabajo real, precio cerrado, plazo publicado.`,
  alternates: { canonical: `${SITE_URL}/trabajos` },
};

const schemaGraph = jsonLdGraph(
  breadcrumbListSchema([
    { name: "Inicio", url: SITE_URL },
    { name: "Trabajos", url: `${SITE_URL}/trabajos` },
  ]),
  collectionPageSchema({
    url: `${SITE_URL}/trabajos`,
    name: "Portfolio de manuales de marca Tramarca",
    description: `${MANUALES.length} manuales de marca entregados por Tramarca.`,
    items: MANUALES.filter((m) => m.showDetail).map((m) => ({
      name: `${m.name} — manual de marca ${m.pages}pp`,
      url: `${SITE_URL}/trabajos/${m.slug}`,
      image: `${SITE_URL}/portfolio/${m.slug}-cover.jpg`,
    })),
  })
);

const logoBgClass: Record<"dark" | "light" | "lacre", string> = {
  dark: "bg-negro",
  light: "bg-arena border border-negro/10",
  lacre: "bg-lacre",
};

function TierLabel({ tier }: { tier: string }) {
  const raw = tier.toUpperCase();
  return (
    <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-piedra">
      {raw === "PROPIO" ? "META" : raw}
    </span>
  );
}

export default function TrabajosPage() {
  return (
    <>
      <JsonLd data={schemaGraph} />

      {/* Editorial masthead — replica p56 manual v4 */}
      <section className="bg-papel border-b border-negro/15">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 pt-6 md:pt-8 pb-6 md:pb-8">
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-piedra border-b border-negro/15 pb-4">
            <span>XVI <span className="text-lacre">·</span> Portfolio</span>
            <span className="hidden md:inline">Manuales entregados</span>
            <span>Tramarca.es/trabajos</span>
          </div>
        </div>

        <div className="mx-auto max-w-[1500px] px-6 md:px-10 pb-16 md:pb-20">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-14">
            <div className="lg:col-span-5">
              <p className="font-mono text-[10px] md:text-xs uppercase tracking-[0.35em] text-piedra">
                Portfolio <span className="text-lacre">·</span> Manuales reales
              </p>
              <h1
                className="mt-5 font-sans font-black tracking-[-0.04em] leading-[0.9] text-negro"
                style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
              >
                Portfolio<span className="text-lacre">.</span>
              </h1>
              <p className="mt-8 max-w-md text-base md:text-lg text-piedra leading-[1.6]">
                Cinco manuales publicados. Cero mockups. Cero casos hipotéticos.
                Trabajo real para clientes reales, entregado a precio cerrado y
                plazo publicado<span className="text-lacre">.</span>
              </p>

              <div className="mt-16 md:mt-20 border-t-2 border-negro pt-6 flex items-end gap-10">
                <div>
                  <p
                    className="font-sans font-black tracking-[-0.05em] leading-none text-negro tabular-nums"
                    style={{ fontSize: "clamp(6rem, 14vw, 11rem)" }}
                  >
                    {MANUALES.length}
                    <span className="text-lacre">.</span>
                  </p>
                </div>
                <dl className="pb-4 space-y-2 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-piedra">
                  <div className="flex gap-3">
                    <dt className="w-20 text-piedra-light">Manuales</dt>
                    <dd className="text-negro font-medium">{MANUALES.length}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="w-20 text-piedra-light">Páginas</dt>
                    <dd className="text-negro font-medium tabular-nums">{TOTAL_PAGES}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="w-20 text-piedra-light">Sectores</dt>
                    <dd className="text-negro font-medium">{SECTORS}</dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* Lista editorial — cada fila = 1 cliente */}
            <div className="lg:col-span-7 mt-4 lg:mt-0">
              <ul className="border-t border-negro/15">
                {MANUALES.map((m) => {
                  const tierUpper =
                    typeof m.tier === "string" ? m.tier.toUpperCase() : "PROPIO";
                  const Body = (
                    <div className="grid grid-cols-[88px_1fr] sm:grid-cols-[112px_1fr] gap-4 sm:gap-6 py-6">
                      {/* Logo tile */}
                      <div
                        className={`relative aspect-[3/1] overflow-hidden ${logoBgClass[m.logoBg]} flex items-center justify-center`}
                      >
                        <Image
                          src={m.logo}
                          alt={`Logo de ${m.name}`}
                          fill
                          sizes="112px"
                          className="object-contain p-3"
                        />
                      </div>

                      {/* Detalles */}
                      <div>
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
                          <h2 className="text-xl md:text-2xl font-black tracking-tight leading-none">
                            {m.name}<span className="text-lacre">.</span>
                          </h2>
                          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-piedra-light shrink-0">
                            {tierUpper === "PROPIO" ? "META" : tierUpper} <span className="text-lacre">·</span> {m.pages}PP
                          </span>
                        </div>
                        <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.28em] text-lacre">
                          {m.sector}
                        </p>
                        <p className="mt-3 text-[13px] md:text-sm text-negro/80 leading-[1.55] max-w-2xl">
                          {m.companyDetail}
                        </p>
                        {m.showDetail && (
                          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-lacre">
                            <Link
                              href={`/trabajos/${m.slug}`}
                              className="hover:text-lacre-hover underline underline-offset-4"
                            >
                              Ver caso completo →
                            </Link>
                          </p>
                        )}
                      </div>
                    </div>
                  );

                  return (
                    <li
                      key={m.slug}
                      className="border-b border-negro/15"
                    >
                      {Body}
                    </li>
                  );
                })}
              </ul>

              <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.3em] text-piedra">
                Datos verificables en tramarca.es/trabajos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manual propio — signature spread */}
      <section className="bg-arena border-y border-negro/15">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-lacre">
                Manual propio
              </p>
              <h2 className="mt-5 text-4xl md:text-5xl font-black tracking-tight leading-[1.05]">
                Nuestro manual, publicado<span className="text-lacre">.</span>
              </h2>
              <p className="mt-6 text-base md:text-lg text-piedra leading-[1.6] max-w-md">
                Cincuenta y ocho páginas aplicadas a nosotros mismos. Si no nos
                aplicamos el listón, no tenemos autoridad moral para venderlo.
                Es el único que puedes hojear antes de hablar con nosotros<span className="text-lacre">.</span>
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">
                <ButtonLink href="/trabajos/tramarca" variant="primary" size="lg">
                  Ver manual Tramarca (58pp) →
                </ButtonLink>
              </div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <figure className="relative aspect-[16/11] overflow-hidden bg-papel border border-negro/10 shadow-[0_40px_80px_-30px_rgba(12,12,12,0.3)]">
                <Image
                  src="/portfolio/tramarca-cover.jpg"
                  alt="Tramarca — portada del manual propio 58 páginas"
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover"
                  priority
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* CTA conversion */}
      <section className="section-dark">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">
            ¿Tu marca en esta lista<span className="text-lacre">?</span>
          </h2>
          <p className="mt-6 text-lg text-ceniza max-w-2xl mx-auto leading-relaxed">
            Tres tiers, precio cerrado, plazo publicado. Si encaja, empezamos
            por el brief<span className="text-lacre">.</span>
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <ButtonLink href="/contacto" variant="invert" size="lg">
              Pedir propuesta en 24h →
            </ButtonLink>
            <ButtonLink href="/precios" variant="ghost" size="lg">
              Ver precios
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
