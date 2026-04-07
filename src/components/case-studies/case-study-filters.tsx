"use client";

import {
  caseStudies,
  categoryLabels,
  type CaseStudyCategory,
} from "@/lib/case-studies-data";
import { Reveal } from "@/components/animations/reveal";
import { cn } from "@/lib/utils";
import { useMemo, useState } from "react";

const filters: CaseStudyCategory[] = [
  "all",
  "fintech",
  "healthcare",
  "retail",
  "enterprise",
];

export function CaseStudyFilters() {
  const [active, setActive] = useState<CaseStudyCategory>("all");

  const filtered = useMemo(() => {
    if (active === "all") return caseStudies;
    return caseStudies.filter((c) => c.category === active);
  }, [active]);

  return (
    <div>
      <div
        className="flex flex-wrap justify-center gap-2"
        role="tablist"
        aria-label="Filter case studies"
      >
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            role="tab"
            aria-selected={active === f}
            onClick={() => setActive(f)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition",
              active === f
                ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/25"
                : "text-muted hover:bg-foreground/5",
            )}
          >
            {categoryLabels[f]}
          </button>
        ))}
      </div>
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {filtered.map((c, i) => (
          <Reveal key={c.id} delay={i * 0.05}>
            <article
              id={c.id}
              className="glass scroll-mt-28 rounded-2xl p-6 lg:p-8"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                {c.industry}
              </span>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold">
                {c.title}
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed">
                <div>
                  <p className="font-semibold text-foreground">Problem</p>
                  <p className="mt-1 text-muted">{c.problem}</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Solution</p>
                  <p className="mt-1 text-muted">{c.solution}</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Technologies</p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {c.technologies.map((t) => (
                      <li
                        key={t}
                        className="rounded-lg bg-foreground/5 px-2 py-1 text-xs font-medium"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Results</p>
                  <ul className="mt-3 grid gap-3 sm:grid-cols-3">
                    {c.results.map((r) => (
                      <li
                        key={r.label}
                        className="rounded-xl border border-border bg-card/40 p-3 text-center"
                      >
                        <p className="font-[family-name:var(--font-display)] text-xl font-bold gradient-text">
                          {r.value}
                        </p>
                        <p className="mt-1 text-xs text-muted">{r.label}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
