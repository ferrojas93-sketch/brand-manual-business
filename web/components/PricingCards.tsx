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
              "relative flex flex-col p-8 md:p-10 border transition-colors",
              isFeatured
                ? "bg-negro text-papel border-negro md:-my-6 md:py-14 shadow-xl"
                : "bg-papel text-negro border-negro/15 hover:border-negro/40",
            )}
          >
            {isFeatured && (
              <span className="absolute -top-3 left-8 bg-lacre text-papel text-[10px] tracking-widest uppercase px-3 py-1 font-mono font-medium">
                Recomendado
              </span>
            )}

            <div className="flex items-baseline justify-between">
              <h3 className={cn("text-2xl font-black tracking-tight", isFeatured ? "text-papel" : "text-negro")}>
                {tier.name}
              </h3>
              <span className={cn("font-mono text-xs", isFeatured ? "text-ceniza" : "text-piedra")}>
                {tier.pages}
              </span>
            </div>

            <p className={cn("mt-2 text-sm", isFeatured ? "text-ceniza" : "text-piedra")}>
              {tier.label}
            </p>

            <div className="mt-8 flex items-baseline gap-2">
              <span className="text-5xl font-black tracking-tighter">{tier.priceDisplay}</span>
            </div>
            <p className={cn("mt-1 text-sm font-mono underline underline-offset-4", isFeatured ? "text-lacre" : "text-lacre")}>
              IVA incluido.
            </p>

            {!compact && (
              <p className={cn("mt-6 text-sm leading-relaxed", isFeatured ? "text-papel" : "text-negro")}>
                {tier.promise}
              </p>
            )}

            <ul className="mt-6 space-y-2.5 text-sm flex-1">
              {tier.deliverables.map((d) => (
                <li key={d} className="flex gap-2.5">
                  <Check
                    aria-hidden
                    className={cn(
                      "w-4 h-4 mt-[3px] flex-shrink-0",
                      isFeatured ? "text-lacre" : "text-lacre",
                    )}
                  />
                  <span className={cn(isFeatured ? "text-ceniza" : "text-piedra")}>{d}</span>
                </li>
              ))}
            </ul>

            <div className={cn("mt-6 pt-6 border-t flex justify-between font-mono text-xs", isFeatured ? "border-papel/15 text-ceniza" : "border-negro/10 text-piedra")}>
              <span>{tier.days} días laborables</span>
              <span>{tier.revisions}</span>
            </div>

            <ButtonLink
              href={{ pathname: "/contacto", query: { tier: tier.id } }}
              variant={isFeatured ? "invert" : "primary"}
              size="lg"
              className="mt-6 w-full"
            >
              {tier.ctaLabel} →
            </ButtonLink>
          </div>
        );
      })}
    </div>
  );
}
