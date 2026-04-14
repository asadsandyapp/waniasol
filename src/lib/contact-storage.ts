import type { ContactFormValues } from "@/lib/contact";
import { Redis } from "@upstash/redis";

const LIST_KEY = "contact:submissions";
const MAX_SUBMISSIONS = 200;

export type StoredSubmission = { id: string; receivedAt: string } & ContactFormValues;

function getRedis(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}

/** True when Upstash env vars are set (Vercel / production persistence). */
export function isStorageConfigured(): boolean {
  return !!(
    process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
  );
}

/** In-memory fallback for `next dev` when Redis is not configured. */
let devMemory: StoredSubmission[] = [];

/**
 * Persists a validated contact lead. Fails soft: logs on error; callers can still return 200.
 */
export async function addSubmission(data: ContactFormValues): Promise<void> {
  const row: StoredSubmission = {
    ...data,
    id: crypto.randomUUID(),
    receivedAt: new Date().toISOString(),
  };

  const redis = getRedis();
  if (redis) {
    await redis.lpush(LIST_KEY, JSON.stringify(row));
    await redis.ltrim(LIST_KEY, 0, MAX_SUBMISSIONS - 1);
    return;
  }

  if (process.env.NODE_ENV === "development") {
    devMemory.unshift(row);
    devMemory = devMemory.slice(0, MAX_SUBMISSIONS);
    return;
  }

  console.warn(
    "[contact-storage] UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN not set; submission not persisted.",
  );
}

/** Newest first (same order as LPUSH + LRANGE). */
export async function getSubmissions(): Promise<StoredSubmission[]> {
  const redis = getRedis();
  if (redis) {
    const raw = await redis.lrange(LIST_KEY, 0, MAX_SUBMISSIONS - 1);
    return raw.map((s) => JSON.parse(s as string) as StoredSubmission);
  }

  if (process.env.NODE_ENV === "development") {
    return [...devMemory];
  }

  return [];
}
