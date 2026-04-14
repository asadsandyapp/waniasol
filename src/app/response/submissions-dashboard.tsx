import type { StoredSubmission } from "@/lib/contact-storage";
import { isStorageConfigured } from "@/lib/contact-storage";
import { logoutAction } from "./actions";

function Row({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="grid gap-1 sm:grid-cols-[minmax(0,10rem)_1fr] sm:gap-4">
      <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
        {label}
      </dt>
      <dd className="whitespace-pre-wrap text-sm text-foreground">{value}</dd>
    </div>
  );
}

export function SubmissionsDashboard({
  submissions,
}: {
  submissions: StoredSubmission[];
}) {
  const configured = isStorageConfigured();

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-foreground">
            Contact submissions
          </h2>
          <p className="mt-1 text-sm text-muted">
            {submissions.length} request{submissions.length === 1 ? "" : "s"}{" "}
            stored
            {!configured && process.env.NODE_ENV === "production" ? (
              <span className="block text-amber-700 dark:text-amber-400">
                Warning: Upstash Redis is not configured — new submissions are
                not saved in production until you add{" "}
                <code className="rounded bg-muted px-1 py-0.5 text-xs">
                  UPSTASH_REDIS_REST_URL
                </code>{" "}
                and{" "}
                <code className="rounded bg-muted px-1 py-0.5 text-xs">
                  UPSTASH_REDIS_REST_TOKEN
                </code>{" "}
                in Vercel.
              </span>
            ) : null}
            {process.env.NODE_ENV === "development" && !configured ? (
              <span className="block text-muted">
                Dev mode: submissions are kept in memory only (restart clears
                them).
              </span>
            ) : null}
          </p>
        </div>
        <form action={logoutAction}>
          <button
            type="submit"
            className="rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-foreground/[0.04]"
          >
            Log out
          </button>
        </form>
      </div>

      {submissions.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border bg-muted/20 px-6 py-16 text-center">
          <p className="font-medium text-foreground">No submissions yet.</p>
          <p className="mt-2 text-sm text-muted">
            When someone submits the contact form, entries appear here (newest
            first).
          </p>
        </div>
      ) : (
        <ul className="space-y-6">
          {submissions.map((s, index) => (
            <li
              key={s.id}
              className="rounded-2xl border border-border bg-card/60 p-6 shadow-soft backdrop-blur-sm dark:bg-card/30"
            >
              <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2 border-b border-border/60 pb-3">
                <span className="font-[family-name:var(--font-display)] text-lg font-semibold text-foreground">
                  #{submissions.length - index}
                </span>
                <time
                  dateTime={s.receivedAt}
                  className="text-xs font-medium tabular-nums text-muted"
                >
                  {new Date(s.receivedAt).toLocaleString(undefined, {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })}
                </time>
              </div>
              <dl className="space-y-3">
                <Row label="Name" value={s.name} />
                <Row label="Email" value={s.email} />
                <Row label="Phone" value={s.phone} />
                <Row label="Project type" value={s.projectType} />
                <Row label="Timeline" value={s.expectedTimeline} />
                <Row label="Engagement" value={s.engagementModel} />
                <Row label="Goals" value={s.businessGoals} />
              </dl>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
