"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

const STORAGE_KEY = "tramarca_cookie_consent_v1";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      // localStorage bloqueado: no mostramos banner
    }
  }, []);

  useEffect(() => {
    if (!visible) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") persist("rejected");
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [visible]);

  function persist(value: "accepted" | "rejected") {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // noop
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Consentimiento de cookies"
      aria-modal="false"
      className="fixed bottom-0 left-0 right-0 z-40 bg-negro/95 backdrop-blur text-papel border-t border-papel/15"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-3 md:py-4 flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
        <p className="text-xs md:text-sm text-ceniza leading-snug flex-1 pr-8 md:pr-0">
          <span className="font-mono text-[10px] uppercase tracking-widest text-lacre mr-2">Cookies</span>
          Técnicas + medición anónima con tu permiso. Sin perfilado.
        </p>
        <div className="flex items-center gap-2 shrink-0 flex-wrap">
          <button
            type="button"
            onClick={() => persist("accepted")}
            className="bg-lacre text-papel px-4 h-10 font-mono text-[11px] uppercase tracking-widest hover:bg-lacre-hover focus-visible:outline-2 focus-visible:outline-papel focus-visible:outline-offset-2 transition-colors"
          >
            Aceptar
          </button>
          <button
            type="button"
            onClick={() => persist("rejected")}
            className="border border-papel/25 text-papel px-4 h-10 font-mono text-[11px] uppercase tracking-widest hover:bg-papel/10 focus-visible:outline-2 focus-visible:outline-papel focus-visible:outline-offset-2 transition-colors"
          >
            Rechazar
          </button>
          <Link
            href="/cookies"
            className="font-mono text-[10px] uppercase tracking-widest text-ceniza hover:text-lacre focus-visible:outline-2 focus-visible:outline-papel focus-visible:outline-offset-2 transition-colors px-2 h-10 inline-flex items-center"
          >
            Política
          </Link>
        </div>
        <button
          type="button"
          onClick={() => persist("rejected")}
          aria-label="Cerrar banner de cookies (Escape)"
          className="absolute top-2 right-2 md:hidden flex items-center justify-center w-8 h-8 text-ceniza hover:text-papel focus-visible:outline-2 focus-visible:outline-papel focus-visible:outline-offset-2 transition-colors"
        >
          <X className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
