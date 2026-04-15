import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

type Result = { success: boolean; limit: number; remaining: number; reset: number };

const memory = new Map<string, { count: number; resetAt: number }>();

function memoryLimit(key: string, max: number, windowMs: number): Result {
  const now = Date.now();
  const entry = memory.get(key);
  if (!entry || entry.resetAt < now) {
    memory.set(key, { count: 1, resetAt: now + windowMs });
    return { success: true, limit: max, remaining: max - 1, reset: now + windowMs };
  }
  if (entry.count >= max) {
    return { success: false, limit: max, remaining: 0, reset: entry.resetAt };
  }
  entry.count += 1;
  return { success: true, limit: max, remaining: max - entry.count, reset: entry.resetAt };
}

let redisClient: Redis | null = null;
let ipLimiter: Ratelimit | null = null;
let emailLimiter: Ratelimit | null = null;

function getRedis(): Redis | null {
  if (redisClient) return redisClient;
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  redisClient = new Redis({ url, token });
  return redisClient;
}

function getIpLimiter(): Ratelimit | null {
  if (ipLimiter) return ipLimiter;
  const redis = getRedis();
  if (!redis) return null;
  ipLimiter = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(5, "60 s"),
    prefix: "rl:lead:ip",
    analytics: false,
  });
  return ipLimiter;
}

function getEmailLimiter(): Ratelimit | null {
  if (emailLimiter) return emailLimiter;
  const redis = getRedis();
  if (!redis) return null;
  emailLimiter = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(3, "1 h"),
    prefix: "rl:lead:email",
    analytics: false,
  });
  return emailLimiter;
}

export async function limitByIp(ip: string): Promise<Result> {
  const limiter = getIpLimiter();
  if (limiter) {
    const r = await limiter.limit(ip);
    return { success: r.success, limit: r.limit, remaining: r.remaining, reset: r.reset };
  }
  return memoryLimit(`ip:${ip}`, 5, 60_000);
}

export async function limitByEmail(email: string): Promise<Result> {
  const limiter = getEmailLimiter();
  if (limiter) {
    const r = await limiter.limit(email);
    return { success: r.success, limit: r.limit, remaining: r.remaining, reset: r.reset };
  }
  return memoryLimit(`email:${email}`, 3, 60 * 60_000);
}
