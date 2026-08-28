import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost" | "invert";
type Size = "md" | "lg";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-lacre-deep text-papel hover:bg-lacre border border-lacre-deep hover:border-lacre",
  secondary:
    "bg-papel text-negro hover:bg-arena border border-negro/20 hover:border-negro/40",
  ghost: "bg-transparent text-negro hover:bg-negro/5 border border-transparent",
  invert: "bg-papel text-negro hover:bg-arena border border-papel",
};

const sizeStyles: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-14 px-7 text-base",
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-colors rounded-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lacre disabled:opacity-60 disabled:pointer-events-none";

type BaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

/**
 * ButtonLink — Server Component puro. Usar para CTAs sin tracking Plausible.
 * Para tracking onClick, usar `ButtonLinkTracked` desde `./ButtonAction`.
 *
 * API compat: acepta `trackAs` y `trackProps` como props opcionales pero los ignora.
 * Si el build detecta `trackAs` en consumo, re-export desde ButtonAction asume que
 * el consumer moverá la import a `ButtonLinkTracked` (recomendado para eliminar
 * client boundary donde no haga falta).
 */
export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: BaseProps & Omit<ComponentProps<typeof Link>, "className" | "children">) {
  return (
    <Link
      href={href}
      {...rest}
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
    >
      {children}
    </Link>
  );
}

// Re-exports para consumidores que necesitan interactividad (client boundary)
export { Button, ButtonLinkTracked } from "./ButtonAction";
