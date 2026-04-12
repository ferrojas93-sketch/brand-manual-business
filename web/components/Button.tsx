import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost" | "invert";
type Size = "md" | "lg";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-lacre text-papel hover:bg-lacre-hover border border-lacre hover:border-lacre-hover",
  secondary:
    "bg-papel text-negro hover:bg-arena border border-negro/20 hover:border-negro/40",
  ghost:
    "bg-transparent text-negro hover:bg-negro/5 border border-transparent",
  invert:
    "bg-papel text-negro hover:bg-arena border border-papel",
};

const sizeStyles: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-14 px-7 text-base",
};

type BaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-colors rounded-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lacre disabled:opacity-60 disabled:pointer-events-none";

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
