"use client";

import Link from "next/link";
import { type ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

/**
 * Link con tracking de click para Plausible custom events.
 * Uso: envolver CTAs conversion-críticos con event name declarado.
 */
export function TrackedAnchor({
  href,
  event,
  props,
  external,
  children,
  className,
  ariaLabel,
}: {
  href: string;
  event: string;
  props?: Record<string, string | number | boolean>;
  external?: boolean;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}) {
  const handleClick = () => {
    trackEvent(event, props);
  };

  if (external) {
    return (
      <a
        href={href}
        onClick={handleClick}
        className={className}
        aria-label={ariaLabel}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={handleClick} className={className} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
