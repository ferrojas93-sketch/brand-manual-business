const VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

type VerifyResponse = {
  success: boolean;
  "error-codes"?: string[];
  hostname?: string;
  action?: string;
};

export const TURNSTILE_ENABLED = !!process.env.TURNSTILE_SECRET_KEY;

let missingSecretLogged = false;

export async function verifyTurnstile(token: string | undefined, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    if (process.env.NODE_ENV === "production" && !missingSecretLogged) {
      missingSecretLogged = true;
      console.error(
        "turnstile_misconfig: TURNSTILE_SECRET_KEY missing in production. Anti-bot verification is DISABLED. Set it in Vercel env vars."
      );
    }
    return true;
  }
  if (!token) return false;
  try {
    const body = new URLSearchParams({ secret, response: token, remoteip: ip });
    const res = await fetch(VERIFY_URL, { method: "POST", body, cache: "no-store" });
    const data = (await res.json()) as VerifyResponse;
    if (!data.success) {
      console.warn("turnstile_verify_failed", { codes: data["error-codes"] });
    }
    return data.success === true;
  } catch (err) {
    console.error("turnstile_verify_exception", { message: err instanceof Error ? err.message : "unknown" });
    return false;
  }
}
