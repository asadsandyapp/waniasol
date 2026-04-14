import type { StoredSubmission } from "@/lib/contact-storage";
import {
  Building2,
  Calendar,
  Clock,
  Inbox,
  Layers,
  Mail,
  Phone,
  Sparkles,
  Target,
  User,
} from "lucide-react";

function formatWhen(iso: string) {
  try {
    return new Intl.DateTimeFormat(undefined, {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export function ResponsesDashboard({
  submissions,
}: {
  submissions: StoredSubmission[];
}) {
  if (submissions.length === 0) {
    return (
      <div className="mx-auto max-w-lg rounded-2xl border border-border/80 bg-card/80 px-8 py-14 text-center shadow-soft dark:shadow-none">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-foreground/[0.06] dark:bg-white/[0.06]">
          <Inbox className="h-7 w-7 text-muted" aria-hidden />
        </div>
        <p className="mt-5 font-[family-name:var(--font-display)] text-xl font-semibold text-foreground">
          No submissions yet
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          When someone submits the contact form, their entry will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <p className="text-sm text-muted">
        Showing <strong className="text-foreground">{submissions.length}</strong>{" "}
        {submissions.length === 1 ? "submission" : "submissions"} (newest first).
      </p>
      <ul className="space-y-6">
        {submissions.map((s) => (
          <li key={s.id}>
            <article className="overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-b from-card/95 to-card/60 shadow-soft backdrop-blur-sm dark:from-[#141414]/95 dark:to-[#0a0a0a]/80 dark:shadow-[0_24px_80px_-32px_rgba(0,0,0,0.65)]">
              <header className="flex flex-col gap-3 border-b border-border/60 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted">
                  <Calendar className="h-3.5 w-3.5" aria-hidden />
                  {formatWhen(s.createdAt)}
                </div>
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary dark:border-white/20 dark:bg-white/10 dark:text-white">
                  <Layers className="h-3.5 w-3.5" aria-hidden />
                  {s.projectType}
                </span>
              </header>

              <div className="grid gap-5 px-5 py-5 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
                <div className="flex gap-3 rounded-xl bg-foreground/[0.03] p-3 dark:bg-white/[0.04]">
                  <User className="mt-0.5 h-4 w-4 shrink-0 text-muted" aria-hidden />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                      Name
                    </p>
                    <p className="mt-0.5 font-medium text-foreground">{s.name}</p>
                  </div>
                </div>
                <div className="flex gap-3 rounded-xl bg-foreground/[0.03] p-3 dark:bg-white/[0.04]">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-muted" aria-hidden />
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                      Email
                    </p>
                    <a
                      href={`mailto:${encodeURIComponent(s.email)}`}
                      className="mt-0.5 block truncate font-medium text-primary underline-offset-4 hover:underline dark:text-blue-300"
                    >
                      {s.email}
                    </a>
                  </div>
                </div>
                <div className="flex gap-3 rounded-xl bg-foreground/[0.03] p-3 dark:bg-white/[0.04]">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-muted" aria-hidden />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                      Phone
                    </p>
                    <a
                      href={`tel:${s.phone.replace(/\s/g, "")}`}
                      className="mt-0.5 block font-medium text-foreground"
                    >
                      {s.phone}
                    </a>
                  </div>
                </div>
                <div className="flex gap-3 rounded-xl bg-foreground/[0.03] p-3 dark:bg-white/[0.04]">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-muted" aria-hidden />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                      Timeline
                    </p>
                    <p className="mt-0.5 font-medium text-foreground">
                      {s.expectedTimeline}
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 rounded-xl bg-foreground/[0.03] p-3 dark:bg-white/[0.04] sm:col-span-2 lg:col-span-1">
                  <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-muted" aria-hidden />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                      Engagement
                    </p>
                    <p className="mt-0.5 font-medium text-foreground">
                      {s.engagementModel}
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-border/60 px-5 py-5 sm:px-6">
                <div className="flex gap-3">
                  <Target className="mt-1 h-4 w-4 shrink-0 text-muted" aria-hidden />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                      Business goals
                    </p>
                    <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-foreground/95">
                      {s.businessGoals}
                    </p>
                  </div>
                </div>
              </div>

              <footer className="flex items-center gap-2 border-t border-border/40 bg-foreground/[0.02] px-5 py-3 text-xs text-muted dark:bg-white/[0.02] sm:px-6">
                <Sparkles className="h-3.5 w-3.5" aria-hidden />
                <span className="font-mono text-[11px] opacity-80">id: {s.id}</span>
              </footer>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
