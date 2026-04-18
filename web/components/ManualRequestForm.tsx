"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRef, useState } from "react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { Button } from "./Button";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

const schema = z.object({
  email: z.string().email("Email inválido").max(200),
  consent: z.literal(true, { error: "Necesitamos tu consentimiento" }),
  honeypot: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

type Status = "idle" | "sending" | "sent" | "error" | "awaiting-turnstile";

export function ManualRequestForm({ compact = false }: { compact?: boolean }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { honeypot: "" } as FormValues,
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [turnstileToken, setTurnstileToken] = useState<string>("");
  const turnstileRef = useRef<TurnstileInstance | null>(null);

  async function onSubmit(data: FormValues) {
    if (data.honeypot) {
      setStatus("sent");
      return;
    }
    if (TURNSTILE_SITE_KEY && !turnstileToken) {
      setStatus("awaiting-turnstile");
      setErrorMsg("Verificación anti-bot en curso — inténtalo en 1-2 segundos.");
      return;
    }

    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/lead/manual-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.email,
          consent: data.consent,
          turnstileToken,
          honeypot: data.honeypot,
        }),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(body.error ?? "Error desconocido");
      }
      setStatus("sent");
      trackEvent("manual_request_sent", { email_domain: data.email.split("@")[1] ?? "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Error desconocido");
      turnstileRef.current?.reset();
      setTurnstileToken("");
    }
  }

  if (status === "sent") {
    return (
      <div
        role="status"
        aria-live="polite"
        className={cn(
          "bg-papel border border-negro/10 p-6 md:p-8",
          compact ? "max-w-lg" : "max-w-xl"
        )}
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-lacre">
          Enviado
        </p>
        <p className="mt-3 text-2xl md:text-3xl font-black tracking-tight leading-[1.15]">
          Revisa tu email<span className="text-lacre">.</span>
        </p>
        <p className="mt-3 text-base text-piedra leading-relaxed">
          El manual está de camino — llega en menos de un minuto. El enlace es
          válido durante 24 horas. Si no lo ves, revisa spam o escríbenos a{" "}
          <a
            href="mailto:hola@tramarca.es"
            className="text-lacre underline underline-offset-4"
          >
            hola@tramarca.es
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={cn(
        "bg-papel border border-negro/15 p-6 md:p-8",
        compact ? "max-w-lg" : "max-w-xl"
      )}
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-lacre">
        Pedir manual <span className="text-piedra">·</span> PDF gratuito
      </p>
      <h3 className="mt-3 text-2xl md:text-3xl font-black tracking-tight leading-[1.1]">
        Dime dónde te lo mando<span className="text-lacre">.</span>
      </h3>
      <p className="mt-3 text-sm md:text-base text-piedra leading-relaxed">
        Cincuenta y ocho páginas. Sistema editorial completo. Llega a tu
        bandeja en menos de un minuto<span className="text-lacre">.</span>
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label
            htmlFor="manual-email"
            className="block font-mono text-[10px] uppercase tracking-[0.25em] text-piedra mb-2"
          >
            Email *
          </label>
          <input
            id="manual-email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="tu@empresa.com"
            {...register("email")}
            className="w-full bg-arena/40 border border-negro/15 px-4 py-3 text-base text-negro placeholder:text-piedra-light focus:outline-none focus:border-lacre"
          />
          {errors.email && (
            <p className="mt-2 text-xs text-lacre" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        <label className="flex items-start gap-3 text-sm text-negro/85">
          <input
            type="checkbox"
            {...register("consent")}
            className="mt-1 w-4 h-4 accent-lacre shrink-0"
          />
          <span>
            Acepto recibir el manual y que Tramarca me contacte sobre sus
            servicios. Ver{" "}
            <a
              href="/privacidad"
              className="underline underline-offset-2 hover:text-lacre"
            >
              política de privacidad
            </a>
            <span className="text-lacre">.</span>
          </span>
        </label>
        {errors.consent && (
          <p className="text-xs text-lacre" role="alert">
            {errors.consent.message}
          </p>
        )}

        {/* Honeypot — hidden from users */}
        <input
          type="text"
          {...register("honeypot")}
          tabIndex={-1}
          autoComplete="off"
          className="sr-only"
          aria-hidden="true"
        />

        {TURNSTILE_SITE_KEY && (
          <Turnstile
            ref={turnstileRef}
            siteKey={TURNSTILE_SITE_KEY}
            onSuccess={(token) => {
              setTurnstileToken(token);
              if (status === "awaiting-turnstile") {
                setStatus("idle");
                setErrorMsg("");
              }
            }}
            onExpire={() => setTurnstileToken("")}
            options={{ size: "invisible", theme: "light" }}
          />
        )}

        {errorMsg && status !== "awaiting-turnstile" && (
          <p className="text-sm text-lacre" role="alert">
            {errorMsg}
          </p>
        )}

        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="md"
            disabled={status === "sending"}
            className="w-full sm:w-auto"
          >
            {status === "sending"
              ? "Enviando…"
              : "Enviarme el manual →"}
          </Button>
        </div>
      </div>
    </form>
  );
}
