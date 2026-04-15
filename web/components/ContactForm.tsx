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
  name: z.string().min(2, "Necesitamos tu nombre. Breve."),
  email: z.string().email("El email no tiene buena pinta. Revísalo."),
  company: z.string().min(2, "¿Cómo se llama lo tuyo?"),
  tier: z.enum(["esencial", "profesional", "premium", "no-lo-se"]),
  founding: z.boolean().optional(),
  message: z.string().min(10, "Tres líneas mínimo. Para no perder el tiempo."),
  consent: z.literal(true, {
    error: "Necesitamos tu consentimiento para escribirte.",
  }),
  website: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm({ defaultTier, defaultFounding }: { defaultTier?: string; defaultFounding?: boolean }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      tier: (["esencial", "profesional", "premium"].includes(defaultTier ?? "")
        ? defaultTier
        : "no-lo-se") as FormValues["tier"],
      founding: !!defaultFounding,
    },
  });

  async function onSubmit(data: FormValues) {
    if (TURNSTILE_SITE_KEY && !turnstileToken) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    trackEvent("form_submit", { form: "contact", tier: data.tier });

    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, turnstileToken }),
    });

    if (res.ok) {
      setStatus("sent");
      reset();
      turnstileRef.current?.reset();
      setTurnstileToken(null);
    } else {
      setStatus("error");
      turnstileRef.current?.reset();
      setTurnstileToken(null);
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-negro/20 p-8 md:p-12 bg-arena">
        <p className="font-mono text-xs uppercase tracking-widest text-lacre">Recibido</p>
        <p className="mt-4 text-2xl md:text-3xl font-black tracking-tight">
          Hemos recibido tu mensaje. Te contestamos en menos de 24 horas. Punto.
        </p>
      </div>
    );
  }

  const inputCls =
    "w-full bg-transparent border-b border-negro/25 focus:border-lacre outline-none py-3 text-base transition-colors placeholder:text-piedra/60";
  const labelCls = "block text-xs uppercase tracking-widest font-mono text-piedra mb-1";
  const errorCls = "mt-1.5 text-xs text-lacre font-mono";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
      {/* Honeypot: invisible, no-trackable para humanos; los bots lo rellenan y el servidor lo ignora */}
      <div
        aria-hidden
        className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden"
      >
        <label htmlFor="website">No rellenar</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <label className={labelCls} htmlFor="name">Tu nombre</label>
          <input id="name" {...register("name")} className={inputCls} autoComplete="name" />
          {errors.name && <p className={errorCls}>{errors.name.message}</p>}
        </div>
        <div>
          <label className={labelCls} htmlFor="email">Tu email</label>
          <input id="email" type="email" {...register("email")} className={inputCls} placeholder="hola@empresa.com" autoComplete="email" />
          {errors.email && <p className={errorCls}>{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label className={labelCls} htmlFor="company">Empresa / proyecto</label>
        <input id="company" {...register("company")} className={inputCls} autoComplete="organization" />
        {errors.company && <p className={errorCls}>{errors.company.message}</p>}
      </div>

      <div>
        <label className={labelCls} htmlFor="tier">Tier que te interesa</label>
        <select id="tier" {...register("tier")} className={cn(inputCls, "appearance-none cursor-pointer")}>
          <option value="esencial">Esencial · 490€ IVA incl.</option>
          <option value="profesional">Profesional · 990€ IVA incl.</option>
          <option value="premium">Premium · 1.990€ IVA incl.</option>
          <option value="no-lo-se">Aún no lo sé</option>
        </select>
      </div>

      <label className="flex items-start gap-3 cursor-pointer">
        <input type="checkbox" {...register("founding")} className="mt-1 accent-lacre w-4 h-4" />
        <span className="text-sm text-piedra">¿Eres candidato al Founding Customer Program?</span>
      </label>

      <div>
        <label className={labelCls} htmlFor="message">Cuéntanos en tres líneas</label>
        <textarea id="message" rows={5} {...register("message")} className={cn(inputCls, "resize-none")} />
        {errors.message && <p className={errorCls}>{errors.message.message}</p>}
      </div>

      <label className="flex items-start gap-3 cursor-pointer">
        <input type="checkbox" {...register("consent")} className="mt-1 accent-lacre w-4 h-4" />
        <span className="text-sm text-piedra">
          He leído y acepto la <a href="/privacidad" className="underline hover:text-lacre">política de privacidad</a>.
        </span>
      </label>
      {errors.consent && <p className={errorCls}>{errors.consent.message}</p>}

      {TURNSTILE_SITE_KEY && (
        <Turnstile
          ref={turnstileRef}
          siteKey={TURNSTILE_SITE_KEY}
          onSuccess={(token) => setTurnstileToken(token)}
          onExpire={() => setTurnstileToken(null)}
          onError={() => setTurnstileToken(null)}
          options={{ theme: "light", size: "flexible" }}
        />
      )}

      <Button type="submit" variant="primary" size="lg" disabled={status === "sending" || (!!TURNSTILE_SITE_KEY && !turnstileToken)}>
        {status === "sending" ? "Enviando…" : "Enviar →"}
      </Button>

      {status === "error" && (
        <p className="text-sm text-lacre font-mono">
          Algo ha fallado. Prueba en un minuto o escríbenos a hola@tramarca.es
        </p>
      )}
    </form>
  );
}
