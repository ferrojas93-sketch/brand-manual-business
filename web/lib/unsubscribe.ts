import { createHmac, timingSafeEqual } from "node:crypto";

/**
 * One-click unsubscribe token (RFC 8058).
 * HMAC-SHA256(email + version) -> base64url 16 bytes.
 * Reusa SUPABASE_SERVICE_ROLE_KEY como secret (ya rotamos si se filtra).
 */
const VERSION = "v1";

function getSecret(): string {
  const secret = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!secret) throw new Error("unsubscribe_secret_missing");
  return secret;
}

function hmac(input: string): string {
  return createHmac("sha256", getSecret())
    .update(input)
    .digest("base64url")
    .slice(0, 22);
}

export function makeUnsubscribeToken(email: string): string {
  return hmac(`${VERSION}:${email.toLowerCase()}`);
}

export function verifyUnsubscribeToken(email: string, token: string): boolean {
  if (!token || token.length !== 22) return false;
  const expected = makeUnsubscribeToken(email);
  const a = Buffer.from(token);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export function buildUnsubscribeUrl(email: string, baseUrl: string): string {
  const token = makeUnsubscribeToken(email);
  const params = new URLSearchParams({ email, token });
  return `${baseUrl}/api/unsubscribe?${params.toString()}`;
}
