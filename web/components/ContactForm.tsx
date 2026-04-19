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

const ALLOWED_MIME = [
  "image/jpeg",
  "image/png",
  "image/svg+xml",
  "image/webp",
  "application/pdf",
  "application/postscript",
  "application/illustrator",
];
const ALLOWED_ACCEPT = ".pdf,.jpg,.jpeg,.png,.svg,.webp,.ai,.eps";
const MAX_FILE_BYTES = 5 * 1024 * 1024;
const MAX_FILES = 5;

const urlField = z
  .string()
  .trim()
  .max(300)
  .optional()
  .refine((v) => !v || /^https?:\/\/[^\s]+$/i.test(v), "URL con http(s):// por favor")
  .or(z.literal(""));

const schema = z.object({
  name: z.string().min(2, "Necesitamos tu nombre").max(120),
  email: z.string().email("Email inválido").max(200),
  company: z.string().min(2, "¿Cómo se llama lo tuyo?").max(150),
  tier: z.enum(["esencial", "profesional", "premium", "no-lo-se"]),
  message: z.string().min(10, "Tres líneas mínimo").max(3000),
  brand_maturity: z.enum(["new_brand", "existing", "rebrand", "refresh", "update_manual", ""]).optional(),
  company_website: urlField,
  social_linkedin: urlField,
  social_instagram: urlField,
  social_other: urlField,
  sector: z.string().max(80).optional(),
  role: z.string().max(80).optional(),
  team_size: z.enum(["solo", "small", "medium", "large", "enterprise", ""]).optional(),
  consent: z.literal(true, { error: "Necesitamos tu consentimiento" }),
  honeypot: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

type Attachment = {
  filename: string;
  path: string;
  size: number;
  type: string;
};

type UploadingFile = {
  id: string;
  filename: string;
  size: number;
  status: "uploading" | "done" | "error";
  errorMsg?: string;
  attachment?: Attachment;
};

type Status = "idle" | "sending" | "sent" | "error" | "awaiting-turnstile";

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

async function uploadOne(file: File): Promise<Attachment> {
  const res = await fetch("/api/lead/upload", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ filename: file.name, contentType: file.type, size: file.size }),
  });
  if (!res.ok) {
    const data = (await res.json().catch(() => ({}))) as { error?: string };
    throw new Error(data.error ?? "No se pudo preparar la subida");
  }
  const { url, path } = (await res.json()) as { url: string; path: string };

  const put = await fetch(url, {
    method: "PUT",
    headers: { "Content-Type": file.type, "x-upsert": "false" },
    body: file,
  });
  if (!put.ok) {
    throw new Error("Fallo al subir el archivo");
  }

  return { filename: file.name, path, size: file.size, type: file.type };
}

export function ContactForm({ defaultTier }: { defaultTier?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance | null>(null);
  const [files, setFiles] = useState<UploadingFile[]>([]);
  const [openOptional, setOpenOptional] = useState(false);
  const [openAttachments, setOpenAttachments] = useState(false);
  const [attachmentNotice, setAttachmentNotice] = useState<string | null>(null);

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
    },
  });

  async function onFilesSelected(selected: FileList | null) {
    if (!selected || selected.length === 0) return;
    setAttachmentNotice(null);
    const current = files.filter((f) => f.status !== "error");
    if (current.length + selected.length > MAX_FILES) {
      setAttachmentNotice(`Máximo ${MAX_FILES} archivos por formulario.`);
      return;
    }

    const toUpload: UploadingFile[] = [];
    for (const file of Array.from(selected)) {
      if (file.size > MAX_FILE_BYTES) {
        toUpload.push({
          id: crypto.randomUUID(),
          filename: file.name,
          size: file.size,
          status: "error",
          errorMsg: "Máx 5MB",
        });
        continue;
      }
      if (!ALLOWED_MIME.includes(file.type)) {
        toUpload.push({
          id: crypto.randomUUID(),
          filename: file.name,
          size: file.size,
          status: "error",
          errorMsg: "Tipo no permitido",
        });
        continue;
      }
      toUpload.push({
        id: crypto.randomUUID(),
        filename: file.name,
        size: file.size,
        status: "uploading",
      });
    }

    setFiles((prev) => [...prev, ...toUpload]);

    for (const entry of toUpload) {
      if (entry.status === "error") continue;
      const original = Array.from(selected).find((f) => f.name === entry.filename && f.size === entry.size);
      if (!original) continue;
      try {
        const attachment = await uploadOne(original);
        setFiles((prev) =>
          prev.map((f) => (f.id === entry.id ? { ...f, status: "done", attachment } : f))
        );
      } catch (err) {
        setFiles((prev) =>
          prev.map((f) =>
            f.id === entry.id
              ? { ...f, status: "error", errorMsg: err instanceof Error ? err.message : "Error" }
              : f
          )
        );
      }
    }
  }

  function removeFile(id: string) {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  }

  async function onSubmit(data: FormValues) {
    if (TURNSTILE_SITE_KEY && !turnstileToken) {
      setStatus("awaiting-turnstile");
      return;
    }
    if (files.some((f) => f.status === "uploading")) {
      setAttachmentNotice("Espera a que terminen de subir los archivos antes de enviar.");
      return;
    }
    setStatus("sending");
    trackEvent("form_submit", { form: "contact", tier: data.tier });

    const attachments = files.filter((f) => f.status === "done" && f.attachment).map((f) => f.attachment!);
    const socialLinks: Record<string, string> = {};
    if (data.social_linkedin) socialLinks.linkedin = data.social_linkedin;
    if (data.social_instagram) socialLinks.instagram = data.social_instagram;
    if (data.social_other) socialLinks.other = data.social_other;

    const payload = {
      name: data.name,
      email: data.email,
      company: data.company,
      tier: data.tier,
      message: data.message,
      consent: data.consent,
      honeypot: data.honeypot,
      company_website: data.company_website || undefined,
      social_links: Object.keys(socialLinks).length > 0 ? socialLinks : undefined,
      sector: data.sector || undefined,
      role: data.role || undefined,
      team_size: data.team_size || undefined,
      brand_maturity: data.brand_maturity || undefined,
      attachments,
      turnstileToken,
    };

    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      setStatus("sent");
      reset();
      setFiles([]);
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
        <p className="font-mono text-xs uppercase tracking-widest text-lacre">Mensaje recibido</p>
        <p className="mt-4 text-2xl md:text-3xl font-black tracking-tight">
          Gracias. Te escribimos en menos de 24 horas laborables.
        </p>
        <p className="mt-4 text-base text-piedra leading-relaxed">
          Mientras tanto, si te apetece ver cómo pensamos, échale un ojo a la
          <a href="/anatomia" className="text-negro underline decoration-lacre decoration-2 underline-offset-4"> anatomía de un manual Tramarca</a>.
        </p>
      </div>
    );
  }

  const inputCls =
    "w-full bg-papel border border-negro/20 focus:border-lacre focus:ring-1 focus:ring-lacre/30 outline-none px-3 py-3 text-base transition-colors placeholder:text-piedra/85";
  const labelCls = "block text-xs uppercase tracking-widest font-mono text-piedra mb-1";
  const errorCls = "mt-1.5 text-xs text-lacre font-mono";
  const sectionCls = "space-y-8";
  const sectionHeaderCls =
    "flex items-baseline justify-between border-b border-negro/15 pb-3 mb-6";
  const sectionNumCls = "font-mono text-[10px] uppercase tracking-[0.3em] text-lacre";
  const sectionTitleCls = "font-black text-xl md:text-2xl tracking-tight";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-14" noValidate>
      {/* Honeypot */}
      <div
        aria-hidden
        className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden"
      >
        <label htmlFor="honeypot">No rellenar</label>
        <input id="honeypot" type="text" tabIndex={-1} autoComplete="off" {...register("honeypot")} />
      </div>

      {/* Sección 1 — Quién eres */}
      <section className={sectionCls}>
        <div className={sectionHeaderCls}>
          <div>
            <p className={sectionNumCls}>01</p>
            <h3 className={cn(sectionTitleCls, "mt-1")}>Quién eres</h3>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-piedra">Obligatorio</p>
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
      </section>

      {/* Sección 2 — Tu proyecto */}
      <section className={sectionCls}>
        <div className={sectionHeaderCls}>
          <div>
            <p className={sectionNumCls}>02</p>
            <h3 className={cn(sectionTitleCls, "mt-1")}>Tu proyecto</h3>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-piedra">Obligatorio</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <label className={labelCls} htmlFor="tier">Tier que te interesa</label>
            <select id="tier" {...register("tier")} className={cn(inputCls, "appearance-none cursor-pointer")}>
              <option value="esencial">Esencial · 490€</option>
              <option value="profesional">Profesional · 990€</option>
              <option value="premium">Premium · 1.990€</option>
              <option value="no-lo-se">Aún no lo sé</option>
            </select>
          </div>
          <div>
            <label className={labelCls} htmlFor="brand_maturity">Situación de tu marca</label>
            <select id="brand_maturity" {...register("brand_maturity")} className={cn(inputCls, "appearance-none cursor-pointer")}>
              <option value="">Sin especificar</option>
              <option value="new_brand">Marca nueva — aún no existe</option>
              <option value="existing">Marca existente — consolidada</option>
              <option value="rebrand">Rebrand — cambio total</option>
              <option value="refresh">Refresh — evolución visual</option>
              <option value="update_manual">Actualizar manual que ya tengo</option>
            </select>
          </div>
        </div>

        <div>
          <label className={labelCls} htmlFor="message">Cuéntanos el contexto</label>
          <textarea
            id="message"
            rows={5}
            {...register("message")}
            className={cn(inputCls, "resize-none")}
            placeholder="Qué hacéis, qué buscáis del manual, qué problema os lleva a plantearlo ahora..."
          />
          {errors.message && <p className={errorCls}>{errors.message.message}</p>}
        </div>
      </section>

      {/* Sección 3 — Contexto (opcional) */}
      <section className={sectionCls}>
        <button
          type="button"
          onClick={() => setOpenOptional((v) => !v)}
          className={cn(sectionHeaderCls, "w-full text-left cursor-pointer")}
        >
          <div>
            <p className={sectionNumCls}>03</p>
            <h3 className={cn(sectionTitleCls, "mt-1")}>Sobre ti y tu marca</h3>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-piedra">
            Opcional {openOptional ? "↑" : "↓"}
          </p>
        </button>

        {openOptional && (
          <div className="space-y-8">
            <p className="text-sm text-piedra leading-relaxed -mt-2">
              Cuanto más nos cuentes, mejor te respondemos. Todo esto es opcional.
            </p>

            <div>
              <label className={labelCls} htmlFor="company_website">Web actual</label>
              <input id="company_website" {...register("company_website")} className={inputCls} placeholder="https://tuempresa.com" autoComplete="url" />
              {errors.company_website && <p className={errorCls}>{errors.company_website.message}</p>}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className={labelCls} htmlFor="social_linkedin">LinkedIn empresa</label>
                <input id="social_linkedin" {...register("social_linkedin")} className={inputCls} placeholder="https://linkedin.com/company/..." />
                {errors.social_linkedin && <p className={errorCls}>{errors.social_linkedin.message}</p>}
              </div>
              <div>
                <label className={labelCls} htmlFor="social_instagram">Instagram</label>
                <input id="social_instagram" {...register("social_instagram")} className={inputCls} placeholder="https://instagram.com/..." />
                {errors.social_instagram && <p className={errorCls}>{errors.social_instagram.message}</p>}
              </div>
            </div>

            <div>
              <label className={labelCls} htmlFor="social_other">Otra red / portfolio</label>
              <input id="social_other" {...register("social_other")} className={inputCls} placeholder="https://..." />
              {errors.social_other && <p className={errorCls}>{errors.social_other.message}</p>}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className={labelCls} htmlFor="sector">Sector</label>
                <input id="sector" {...register("sector")} className={inputCls} placeholder="SaaS, retail, servicios, cultura..." />
              </div>
              <div>
                <label className={labelCls} htmlFor="role">Tu rol</label>
                <input id="role" {...register("role")} className={inputCls} placeholder="Fundador/a, CMO, diseñador/a..." />
              </div>
            </div>

            <div>
              <label className={labelCls} htmlFor="team_size">Tamaño del equipo</label>
              <select id="team_size" {...register("team_size")} className={cn(inputCls, "appearance-none cursor-pointer")}>
                <option value="">Sin especificar</option>
                <option value="solo">Solo (1 persona)</option>
                <option value="small">Pequeño (1-5)</option>
                <option value="medium">Mediano (6-20)</option>
                <option value="large">Grande (21-50)</option>
                <option value="enterprise">Corporate (50+)</option>
              </select>
            </div>
          </div>
        )}
      </section>

      {/* Sección 4 — Adjuntos (opcional) */}
      <section className={sectionCls}>
        <button
          type="button"
          onClick={() => setOpenAttachments((v) => !v)}
          className={cn(sectionHeaderCls, "w-full text-left cursor-pointer")}
        >
          <div>
            <p className={sectionNumCls}>04</p>
            <h3 className={cn(sectionTitleCls, "mt-1")}>Adjuntos</h3>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-piedra">
            Opcional {openAttachments ? "↑" : "↓"}
          </p>
        </button>

        {openAttachments && (
          <div className="space-y-6">
            <p className="text-sm text-piedra leading-relaxed -mt-2">
              Logo actual, brief, moodboard, referencias o cualquier cosa que nos ayude
              a entender tu proyecto. Máximo {MAX_FILES} archivos, 5MB cada uno.
            </p>

            <label
              htmlFor="file-upload"
              className="block border-2 border-dashed border-negro/25 hover:border-lacre transition-colors p-8 text-center cursor-pointer"
            >
              <p className="font-black text-lg">Selecciona archivos</p>
              <p className="mt-1 font-mono text-xs text-piedra">
                PDF · JPG · PNG · SVG · WebP · AI · EPS
              </p>
              <input
                id="file-upload"
                type="file"
                multiple
                accept={ALLOWED_ACCEPT}
                className="sr-only"
                onChange={(e) => {
                  onFilesSelected(e.target.files);
                  e.target.value = "";
                }}
              />
            </label>

            {attachmentNotice && (
              <p
                role="alert"
                aria-live="polite"
                className="text-sm font-mono text-lacre border-l-2 border-lacre pl-3 py-2 bg-lacre/5"
              >
                {attachmentNotice}
              </p>
            )}

            {files.length > 0 && (
              <ul className="space-y-2">
                {files.map((f) => (
                  <li
                    key={f.id}
                    className="flex items-center justify-between gap-4 border border-negro/15 px-4 py-3 bg-arena/50"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-mono">{f.filename}</p>
                      <p className="text-xs text-piedra mt-0.5">
                        {formatSize(f.size)}
                        {f.status === "uploading" && " · Subiendo…"}
                        {f.status === "done" && " · Subido ✓"}
                        {f.status === "error" && ` · Error: ${f.errorMsg}`}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFile(f.id)}
                      className="shrink-0 flex items-center justify-center w-11 h-11 -my-3 -mr-3 font-mono text-xs text-piedra hover:text-lacre focus-visible:outline-2 focus-visible:outline-lacre transition-colors"
                      aria-label={`Eliminar ${f.filename}`}
                    >
                      <span aria-hidden="true">✕</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </section>

      {/* Consentimiento + Turnstile + Submit */}
      <section className="space-y-6 pt-6 border-t border-negro/15">
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" {...register("consent")} className="mt-1 accent-lacre w-4 h-4" />
          <span className="text-sm text-piedra">
            He leído y acepto la{" "}
            <a href="/privacidad" className="underline hover:text-lacre">política de privacidad</a>.
          </span>
        </label>
        {errors.consent && <p className={errorCls}>{errors.consent.message}</p>}

        {TURNSTILE_SITE_KEY && (
          <Turnstile
            ref={turnstileRef}
            siteKey={TURNSTILE_SITE_KEY}
            onSuccess={(token) => {
              setTurnstileToken(token);
              if (status === "awaiting-turnstile") setStatus("idle");
            }}
            onExpire={() => setTurnstileToken(null)}
            onError={() => setTurnstileToken(null)}
            options={{ theme: "light", size: "flexible" }}
          />
        )}

        {status === "awaiting-turnstile" && (
          <p className="text-sm text-piedra font-mono">
            Espera un segundo — verificando que no eres un robot. Vuelve a pulsar Enviar cuando veas el check verde.
          </p>
        )}

        <Button type="submit" variant="primary" size="lg" disabled={status === "sending"}>
          {status === "sending" ? "Enviando…" : "Enviar →"}
        </Button>

        {status === "error" && (
          <p className="text-sm text-lacre font-mono">
            Algo ha fallado. Prueba en un minuto o escríbenos a hola@tramarca.es
          </p>
        )}
      </section>
    </form>
  );
}
