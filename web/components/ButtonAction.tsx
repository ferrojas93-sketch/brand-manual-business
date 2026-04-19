"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";
import { trackEvent } from "@/lib/analytics";

type Variant = "primary" | "secondary" | "ghost" | "invert";
type Size = "md" | "lg";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-lacre text-papel hover:bg-lacre-hover border border-lacre hover:border-lacre-hover",
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

/** Native HTML button. Requires client boundary porque `<button onClick>` lo exige. */
export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: BaseProps & ComponentProps<"button">) {
  return (
    <button
      {...rest}
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
    >
      {children}
    </button>
  );
}

/** ButtonLink con Plausible tracking onClick. Solo usar cuando hay `trackAs`. */
export function ButtonLinkTracked({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  trackAs,
  trackProps,
  onClick,
  ...rest
}: BaseProps &
  Omit<ComponentProps<typeof Link>, "className" | "children"> & {
    /** Event name for Plausible custom tracking. Se dispara onClick. */
    trackAs?: string;
    trackProps?: Record<string, string | number | boolean>;
  }) {
  const handleClick = trackAs
    ? (e: React.MouseEvent<HTMLAnchorElement>) => {
        trackEvent(trackAs, trackProps);
        onClick?.(e);
      }
    : onClick;

  return (
    <Link
      href={href}
      {...rest}
      onClick={handleClick}
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
    >
      {children}
    </Link>
  );
}
