import { casePreview } from "@/lib/home-data";
import { Reveal } from "@/components/animations/reveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CaseStudiesPreview() {
  return (
    <section className="border-y border-border/60 bg-foreground/[0.02] py-20 dark:bg-white/[0.02] sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-xl">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
              Case studies with{" "}
              <span className="gradient-text">measurable impact</span>
            </h2>
            <p className="mt-4 text-lg text-muted">
              A snapshot of how we partner with product and engineering leaders
              to ship ambitious programs.
            </p>
          </Reveal>
          <Reveal>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
            >
              View all case studies
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {casePreview.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.08}>
              <article className="glass flex h-full flex-col rounded-2xl p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  {c.industry}
                </span>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl font-semibold">
                  {c.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted">{c.summary}</p>
                <div className="mt-6 flex items-baseline gap-2 border-t border-border pt-6">
                  <span className="font-[family-name:var(--font-display)] text-3xl font-bold gradient-text">
                    {c.metric}
                  </span>
                  <span className="text-sm text-muted">{c.metricLabel}</span>
                </div>
                <Link
                  href={`/case-studies#${c.slug}`}
                  className="mt-4 text-sm font-semibold text-foreground hover:underline"
                >
                  Read the story
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
