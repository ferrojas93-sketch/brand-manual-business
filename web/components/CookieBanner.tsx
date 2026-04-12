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
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-50 bg-negro text-papel border border-papel/15 shadow-2xl"
    >
      <div className="p-5 md:p-6">
        <p className="font-mono text-[10px] uppercase tracking-widest text-lacre">
          Cookies
        </p>
        <p className="mt-3 text-sm text-ceniza leading-relaxed">
          Usamos cookies técnicas para que la web funcione. Con tu permiso, una medición
          anónima de tráfico (sin perfilado). Puedes rechazarla sin romper nada.
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => persist("accepted")}
            className="bg-lacre text-papel px-4 py-2 font-mono text-xs uppercase tracking-widest hover:bg-lacre-hover transition-colors"
          >
            Aceptar
          </button>
          <button
            type="button"
            onClick={() => persist("rejected")}
            className="border border-papel/25 text-papel px-4 py-2 font-mono text-xs uppercase tracking-widest hover:bg-papel/10 transition-colors"
          >
            Rechazar
          </button>
          <Link
            href="/cookies"
            className="font-mono text-[11px] uppercase tracking-widest text-piedra hover:text-lacre transition-colors"
          >
            Política
          </Link>
        </div>
      </div>
    </div>
  );
}
