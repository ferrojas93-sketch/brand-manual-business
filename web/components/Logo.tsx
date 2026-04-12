import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className, invert = false }: { className?: string; invert?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Tramarca · Inicio"
      className={cn(
        "inline-flex items-baseline font-sans font-black tracking-tighter leading-none text-[22px]",
        invert ? "text-papel" : "text-negro",
        className,
      )}
    >
      <span>TRAMARCA</span>
      <span
        aria-hidden
        className="text-lacre leading-none -ml-[1px] translate-y-[2px]"
        style={{ fontSize: "150%" }}
      >
        .
      </span>
    </Link>
  );
}
