import Redis from "ioredis";
import { RateLimiterRedis, RateLimiterMemory, type RateLimiterRes } from "rate-limiter-flexible";

type Result = { success: boolean; limit: number; remaining: number; reset: number };

let redisClient: Redis | null = null;
let ipLimiter: RateLimiterRedis | RateLimiterMemory | null = null;
let emailLimiter: RateLimiterRedis | RateLimiterMemory | null = null;

function getRedis(): Redis | null {
  if (redisClient) return redisClient;
  const url = process.env.REDIS_URL;
  if (!url) return null;
  try {
    redisClient = new Redis(url, {
      enableOfflineQueue: true,
      maxRetriesPerRequest: 2,
      connectTimeout: 5000,
      commandTimeout: 3000,
      retryStrategy: (times) => (times > 3 ? null : Math.min(times * 200, 1000)),
    });
    redisClient.on("error", (err) => {
      console.warn("redis_error", { message: err.message });
    });
    return redisClient;
  } catch (err) {
    console.warn("redis_init_failed", { message: err instanceof Error ? err.message : "unknown" });
    return null;
  }
}

function makeIpLimiter(): RateLimiterRedis | RateLimiterMemory {
  if (ipLimiter) return ipLimiter;
  const redis = getRedis();
  ipLimiter = redis
    ? new RateLimiterRedis({
        storeClient: redis,
        keyPrefix: "rl:ip",
        points: 5,
        duration: 60,
        inMemoryBlockOnConsumed: 10,
        inMemoryBlockDuration: 60,
        insuranceLimiter: new RateLimiterMemory({ keyPrefix: "rl:ip:ins", points: 5, duration: 60 }),
      })
    : new RateLimiterMemory({ keyPrefix: "rl:ip", points: 5, duration: 60 });
  return ipLimiter;
}

function makeEmailLimiter(): RateLimiterRedis | RateLimiterMemory {
  if (emailLimiter) return emailLimiter;
  const redis = getRedis();
  emailLimiter = redis
    ? new RateLimiterRedis({
        storeClient: redis,
        keyPrefix: "rl:email",
        points: 3,
        duration: 3600,
        inMemoryBlockOnConsumed: 5,
        inMemoryBlockDuration: 3600,
        insuranceLimiter: new RateLimiterMemory({ keyPrefix: "rl:email:ins", points: 3, duration: 3600 }),
      })
    : new RateLimiterMemory({ keyPrefix: "rl:email", points: 3, duration: 3600 });
  return emailLimiter;
}

function toResult(limit: number, res: RateLimiterRes, success: boolean): Result {
  return {
    success,
    limit,
    remaining: Math.max(0, res.remainingPoints),
    reset: Date.now() + res.msBeforeNext,
  };
}

async function consume(limiter: RateLimiterRedis | RateLimiterMemory, key: string, limit: number): Promise<Result> {
  try {
    const res = await limiter.consume(key);
    return toResult(limit, res, true);
  } catch (err) {
    if (err && typeof err === "object" && "remainingPoints" in err) {
      return toResult(limit, err as RateLimiterRes, false);
    }
    console.error("ratelimit_unknown_error", { message: err instanceof Error ? err.message : "unknown" });
    // Fail-closed en producción: si el limitador está roto, no aceptamos tráfico sin control.
    const allow = process.env.NODE_ENV !== "production";
    return { success: allow, limit, remaining: allow ? limit : 0, reset: Date.now() + 60_000 };
  }
}

export async function limitByIp(ip: string): Promise<Result> {
  return consume(makeIpLimiter(), ip, 5);
}

export async function limitByEmail(email: string): Promise<Result> {
  return consume(makeEmailLimiter(), email, 3);
}
