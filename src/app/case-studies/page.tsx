import { CaseStudyFilters } from "@/components/case-studies/case-study-filters";
import { Reveal } from "@/components/animations/reveal";
import { site } from "@/lib/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies",
  description: `Selected work and outcomes from ${site.name} clients.`,
};

export default function CaseStudiesPage() {
  return (
    <div className="pb-20 sm:pb-28">
      <section className="border-b border-border/60 bg-foreground/[0.02] py-16 dark:bg-white/[0.02] sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight sm:text-5xl">
              Case <span className="gradient-text">studies</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted">
              Filter by industry. Each engagement pairs measurable outcomes with
              pragmatic engineering choices—documented for your stakeholders.
            </p>
          </Reveal>
        </div>
      </section>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <CaseStudyFilters />
      </div>
    </div>
  );
}
