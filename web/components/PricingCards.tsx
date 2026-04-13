import { TIERS, TIERS_ORDER_DESKTOP } from "@/lib/tiers";
import { ButtonLink } from "./Button";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export function PricingCards({ compact = false }: { compact?: boolean }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-4">
      {TIERS_ORDER_DESKTOP.map((id) => {
        const tier = TIERS[id];
        const isFeatured = tier.featured;
        return (
          <div
            key={id}
            id={id}
            className={cn(
              "relative flex flex-col p-6 md:p-7 lg:p-8 border transition-colors",
              isFeatured
                ? "bg-negro text-papel border-negro md:-my-3 md:py-9 lg:py-10 shadow-xl"
                : "bg-papel text-negro border-negro/15 hover:border-negro/40",
            )}
          >
            {isFeatured && (
              <span className="absolute -top-3 left-8 bg-lacre text-papel text-[10px] tracking-widest uppercase px-3 py-1 font-mono font-medium">
                Recomendado
              </span>
            )}

            {/* Tier label row — name + pages, small, above the price */}
            <div className="flex items-baseline justify-between">
              <span className={cn(
                "font-mono text-[10px] uppercase tracking-[0.3em]",
                isFeatured ? "text-lacre" : "text-lacre",
              )}>
                {tier.name}
              </span>
              <span className={cn("font-mono text-xs", isFeatured ? "text-ceniza" : "text-piedra")}>
                {tier.pages}
              </span>
            </div>

            {/* Price — first and loud */}
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-none">
                {tier.priceDisplay}
              </span>
            </div>
            <p className={cn("mt-2 text-[10px] font-mono uppercase tracking-widest", isFeatured ? "text-lacre" : "text-lacre")}>
              IVA incluido
            </p>

            {/* Tagline under the price */}
            <p className={cn("mt-5 text-[13px]", isFeatured ? "text-ceniza" : "text-piedra")}>
              {tier.label}
            </p>

            {!compact && (
              <p className={cn("mt-2 text-[13px] leading-relaxed", isFeatured ? "text-papel" : "text-negro")}>
                {tier.promise}
              </p>
            )}

            <ul className="mt-5 space-y-2 text-[13px] flex-1">
              {tier.deliverables.map((d) => (
                <li key={d} className="flex gap-2">
                  <Check
                    aria-hidden
                    className={cn(
                      "w-3.5 h-3.5 mt-[3px] flex-shrink-0",
                      isFeatured ? "text-lacre" : "text-lacre",
                    )}
                  />
                  <span className={cn(isFeatured ? "text-ceniza" : "text-piedra")}>{d}</span>
                </li>
              ))}
            </ul>

            <div className={cn("mt-5 pt-4 border-t flex justify-between font-mono text-[11px]", isFeatured ? "border-papel/15 text-ceniza" : "border-negro/10 text-piedra")}>
              <span>{tier.days} días laborables</span>
              <span>{tier.revisions}</span>
            </div>

            <ButtonLink
              href={{ pathname: "/contacto", query: { tier: tier.id } }}
              variant={isFeatured ? "invert" : "primary"}
              size="md"
              className="mt-5 w-full"
            >
              {tier.ctaLabel} →
            </ButtonLink>
          </div>
        );
      })}
    </div>
  );
}
