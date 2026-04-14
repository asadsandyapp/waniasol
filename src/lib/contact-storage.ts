import type { ContactFormValues } from "@/lib/contact";

export type StoredSubmission = ContactFormValues & {
  id: string;
  createdAt: string;
};

const KV_KEY = "contact_submissions_v1";

function hasKvEnv(): boolean {
  return Boolean(
    process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN,
  );
}

/**
 * Production: requires Vercel KV / Redis env (KV_REST_API_URL + KV_REST_API_TOKEN).
 * Local dev: appends to data/submissions.jsonl
 */
export async function addSubmission(values: ContactFormValues): Promise<void> {
  const row: StoredSubmission = {
    ...values,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };

  if (hasKvEnv()) {
    const { kv } = await import("@vercel/kv");
    await kv.lpush(KV_KEY, JSON.stringify(row));
    return;
  }

  if (process.env.NODE_ENV === "development") {
    const fs = await import("node:fs/promises");
    const path = await import("node:path");
    const dir = path.join(process.cwd(), "data");
    await fs.mkdir(dir, { recursive: true });
    const file = path.join(dir, "submissions.jsonl");
    await fs.appendFile(file, `${JSON.stringify(row)}\n`, "utf8");
    return;
  }

  console.warn(
    "[contact] Submission not persisted — set KV_REST_API_URL and KV_REST_API_TOKEN (Vercel KV / Redis). id=%s",
    row.id,
  );
}

export async function getAllSubmissions(): Promise<StoredSubmission[]> {
  if (hasKvEnv()) {
    const { kv } = await import("@vercel/kv");
    const raw = await kv.lrange<string>(KV_KEY, 0, -1);
    return raw
      .map((s) => JSON.parse(s) as StoredSubmission)
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
  }

  if (process.env.NODE_ENV === "development") {
    const fs = await import("node:fs/promises");
    const path = await import("node:path");
    const file = path.join(process.cwd(), "data", "submissions.jsonl");
    try {
      const text = await fs.readFile(file, "utf8");
      const lines = text.trim().split("\n").filter(Boolean);
      return lines
        .map((line) => JSON.parse(line) as StoredSubmission)
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        );
    } catch {
      return [];
    }
  }

  return [];
}
