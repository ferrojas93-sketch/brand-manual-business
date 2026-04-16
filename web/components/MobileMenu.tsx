"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

type NavLink = { href: string; label: string };

type MobileMenuProps = {
  links: NavLink[];
};

export function MobileMenu({ links }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          aria-label="Abrir menú"
          className="md:hidden flex items-center justify-center w-11 h-11 -mr-2 text-negro hover:text-lacre focus-visible:outline-2 focus-visible:outline-lacre focus-visible:outline-offset-2 transition-colors"
        >
          <Menu className="w-6 h-6" strokeWidth={1.5} aria-hidden="true" />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-negro/40 backdrop-blur-sm data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out" />
        <Dialog.Content
          className="fixed right-0 top-0 z-50 h-full w-full max-w-[420px] bg-papel shadow-[-20px_0_60px_-20px_rgba(12,12,12,0.25)] flex flex-col data-[state=open]:animate-slide-in-right data-[state=closed]:animate-slide-out-right focus:outline-none"
          aria-describedby={undefined}
        >
          <div className="flex items-center justify-between px-6 h-16 border-b border-negro/15">
            <Dialog.Title asChild>
              <span className="sr-only">Menú de navegación</span>
            </Dialog.Title>
            <Logo />
            <Dialog.Close asChild>
              <button
                type="button"
                aria-label="Cerrar menú"
                className="flex items-center justify-center w-11 h-11 -mr-2 text-negro hover:text-lacre focus-visible:outline-2 focus-visible:outline-lacre focus-visible:outline-offset-2 transition-colors"
              >
                <X className="w-6 h-6" strokeWidth={1.5} aria-hidden="true" />
              </button>
            </Dialog.Close>
          </div>

          <nav className="flex-1 overflow-y-auto px-6 py-8" aria-label="Navegación principal">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-piedra mb-6">
              Índice
            </p>
            <ul className="space-y-1">
              {links.map((link, i) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-4 py-3 text-4xl font-black tracking-tight text-negro hover:text-lacre focus-visible:outline-2 focus-visible:outline-lacre focus-visible:outline-offset-4 transition-colors"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-lacre shrink-0 translate-y-[-0.2em]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      {link.label}
                      <span className="text-lacre">.</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="px-6 py-6 border-t border-negro/15">
            <Link
              href="/contacto"
              onClick={() => setOpen(false)}
              className="block bg-negro text-papel text-center py-4 font-mono text-xs uppercase tracking-[0.2em] hover:bg-lacre focus-visible:outline-2 focus-visible:outline-lacre focus-visible:outline-offset-2 transition-colors"
            >
              Pedir propuesta →
            </Link>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-piedra text-center">
              hola@tramarca.es
            </p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
