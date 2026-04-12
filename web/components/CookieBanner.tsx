"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

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
      className="fixed bottom-0 left-0 right-0 z-50 bg-negro/95 backdrop-blur text-papel border-t border-papel/15"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-3 flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
        <p className="text-xs md:text-sm text-ceniza leading-snug flex-1">
          <span className="font-mono text-[10px] uppercase tracking-widest text-lacre mr-2">Cookies</span>
          Técnicas + medición anónima con tu permiso. Sin perfilado.
        </p>
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => persist("accepted")}
            className="bg-lacre text-papel px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest hover:bg-lacre-hover transition-colors"
          >
            Aceptar
          </button>
          <button
            type="button"
            onClick={() => persist("rejected")}
            className="border border-papel/25 text-papel px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest hover:bg-papel/10 transition-colors"
          >
            Rechazar
          </button>
          <Link
            href="/cookies"
            className="font-mono text-[10px] uppercase tracking-widest text-piedra hover:text-lacre transition-colors"
          >
            Política
          </Link>
        </div>
      </div>
    </div>
  );
}
