import { ResponsesDashboard } from "@/components/contact/responses-dashboard";
import { getAllSubmissions } from "@/lib/contact-storage";
import { site } from "@/lib/site-config";
import type { Metadata } from "next";
import Link from "next/link";
import { Lock } from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Contact responses",
  robots: { index: false, follow: false },
};

type Props = { searchParams: Promise<{ token?: string }> };

export default async function ResponsePage({ searchParams }: Props) {
  const { token } = await searchParams;
  const secret = process.env.CONTACT_VIEW_TOKEN;

  if (!secret) {
    return (
      <div className="mx-auto max-w-lg px-4 py-20 text-center">
        <p className="text-muted">
          Set{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">
            CONTACT_VIEW_TOKEN
          </code>{" "}
          in your environment (for example Vercel → Project → Settings →
          Environment Variables), then redeploy.
        </p>
      </div>
    );
  }

  if (token !== secret) {
    return (
      <div className="mx-auto max-w-lg px-4 py-20">
        <div className="rounded-2xl border border-border/80 bg-card/80 p-8 text-center shadow-soft">
          <Lock className="mx-auto h-10 w-10 text-muted" aria-hidden />
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold">
            Protected page
          </h1>
          <p className="mt-2 text-sm text-muted">
            Add{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
              ?token=…
            </code>{" "}
            to the URL using the same value as{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
              CONTACT_VIEW_TOKEN
            </code>
            .
          </p>
          <p className="mt-4 text-xs text-muted">
            Example:{" "}
            <code className="break-all rounded bg-muted px-1.5 py-1 font-mono text-[11px]">
              {site.url}/response?token=YOUR_SECRET
            </code>
          </p>
        </div>
      </div>
    );
  }

  const submissions = await getAllSubmissions();

  return (
    <div className="pb-16 pt-10 sm:pb-20 sm:pt-12">
      <div className="mx-auto max-w-4xl px-5">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
              Contact
            </p>
            <h1 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
              Submissions
            </h1>
            <p className="mt-2 max-w-xl text-sm text-muted">
              Entries from the public contact form. Do not share this URL or
              token.
            </p>
          </div>
          <Link
            href="/contact"
            className="text-sm font-semibold text-primary underline-offset-4 hover:underline dark:text-blue-300"
          >
            View contact form
          </Link>
        </div>
        <ResponsesDashboard submissions={submissions} />
      </div>
    </div>
  );
}
