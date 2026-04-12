import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MANUALES } from "@/lib/manuales";
import { SITE_URL } from "@/lib/tiers";

export const metadata: Metadata = {
  title: "Manuales entregados · Portfolio",
  description:
    "Cuatro manuales reales: Anfisbena, Claramel, Matraz Innova y el nuestro propio. Páginas, spreads y sistemas. Sin mockups. Trabajo publicado.",
  alternates: { canonical: `${SITE_URL}/manuales` },
};

export default function ManualesPage() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-7xl px-6 pt-20 md:pt-28 pb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-lacre">Portfolio</p>
          <h1 className="mt-6 text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9]">
            Cuatro manuales.
            <br />
            <span className="text-lacre">Cero mockups.</span>
          </h1>
          <p className="mt-10 max-w-3xl text-lg md:text-xl text-piedra leading-relaxed">
            Tres clientes reales. Un manual propio. Ciento treinta y nueve páginas publicadas
            en total. Mira los spreads, los sistemas tipográficos, las paletas. Antes de
            contratar, mira lo que sale por la puerta.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 pb-24 md:pb-32">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {MANUALES.map((m) => (
              <Link
                key={m.slug}
                href={`/manuales/${m.slug}`}
                className="group block border border-negro/10 hover:border-negro/50 transition-colors"
              >
                <div className="relative aspect-[1756/1242] bg-arena overflow-hidden">
                  <Image
                    src={`/portfolio/${m.slug}-cover.jpg`}
                    alt={m.altCover}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-baseline justify-between">
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight">
                      {m.name}
                    </h2>
                    <span className="font-mono text-xs text-piedra uppercase tracking-widest">
                      {m.year}
                    </span>
                  </div>
                  <p className="mt-3 font-mono text-xs text-lacre uppercase tracking-widest">
                    {typeof m.tier === "string" ? m.tier : "Propio"} · {m.pages}pp · {m.sector}
                  </p>
                  <p className="mt-4 text-base text-negro/80 leading-relaxed">{m.brief}</p>
                  <p className="mt-6 font-mono text-xs text-lacre underline underline-offset-4 group-hover:text-lacre-hover">
                    Ver caso completo →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
