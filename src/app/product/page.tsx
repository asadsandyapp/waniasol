import { Reveal } from "@/components/animations/reveal";
import { ProductHero } from "@/components/product/product-hero";
import { Button } from "@/components/ui/button";
import { productFeatures } from "@/lib/product-data";
import { site } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Estate CRM",
  description:
    "Real Estate Management + CRM System: a web portal for inventory, lead CRM, sales, invoicing, and reporting.",
  alternates: { canonical: "/product" },
};

const coreModules = [
  {
    title: "Inventory & Allocation Engine",
    body: "Manage societies, phases, blocks, and quotas with structured availability and lifecycle control.",
  },
  {
    title: "Sales & Billing Operations",
    body: "Run full deal workflows with confirmations, cancellations, invoice generation, and PDF-ready documentation.",
  },
  {
    title: "CRM & Lead Pipeline",
    body: "Capture, qualify, score, and convert leads while tracking activities, tasks, notes, and communication history.",
  },
  {
    title: "Property Sales Management",
    body: "Oversee property-specific sales operations with availability checks, exports, and role-based workflows.",
  },
  {
    title: "Reporting & Forecasting Layer",
    body: "Access financial, sales, performance, property, and CRM reports for faster executive decision-making.",
  },
  {
    title: "Governance & Access Control",
    body: "Apply role-based permissions, activity logs, company-level access, and audit-friendly operational controls.",
  },
];

const serviceCoverage = [
  "Implementation and onboarding for real estate teams",
  "CRM process setup, pipeline design, and campaign structuring",
  "Marketing channel integrations and webhook connectivity",
  "Data import, migration, and controlled export operations",
  "Security hardening, user access governance, and audit support",
  "Ongoing optimization, reporting customization, and scale support",
];

export default function ProductPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[min(70vh,520px)] bg-gradient-to-b from-neutral-400/10 via-background to-transparent dark:from-neutral-500/10" />

      <ProductHero />

      <section className="!pt-6 sm:!pt-8">
        <div className="mx-auto max-w-7xl px-0.5 sm:px-1 lg:px-1.5">
          <Reveal>
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-5">
              {productFeatures.slice(0, 4).map((f, i) => (
                <div
                  key={f.title}
                  className="group relative overflow-hidden rounded-2xl border border-border/80 bg-card/60 p-5 shadow-sm transition-all duration-300 hover:border-foreground/15 hover:shadow-md sm:p-6"
                >
                  <div
                    className={cn(
                      "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                      i === 0 && "from-foreground/8 to-transparent",
                      i === 1 && "from-foreground/5 to-transparent",
                      i === 2 && "from-foreground/6 to-transparent",
                      i === 3 && "from-foreground/5 to-muted/15",
                    )}
                    aria-hidden
                  />
                  <p className="relative text-sm font-semibold text-foreground sm:text-[15px]">
                    {f.title}
                  </p>
                  <p className="relative mt-3 text-sm leading-relaxed text-muted">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border/60 bg-foreground/[0.02] py-8 dark:bg-white/[0.02] sm:py-10">
        <div className="mx-auto max-w-7xl px-0.5 sm:px-1 lg:px-1.5">
          <div className="rounded-[1.75rem] border border-border/80 bg-card/50 p-6 shadow-lg sm:p-8">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
                  Built for revenue teams
                </p>
                <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  One system for operations, pipeline, and proof
                </h2>
                <p className="mt-4 text-balance text-base leading-relaxed text-muted sm:text-lg">
                  Replace scattered spreadsheets and disconnected tools with a
                  single workspace your leadership can trust—and your teams will
                  actually use.
                </p>
              </div>
            </Reveal>

            <div className="mt-4 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:mt-5 lg:grid-cols-4 lg:gap-5">
              {[
                {
                  title: "Property lifecycle clarity",
                  body: "Inventory and availability aligned to how you sell—not how files are stored.",
                },
                {
                  title: "CRM-first workflows",
                  body: "Leads, follow-ups, and history in one thread. Fewer dropped conversations.",
                },
                {
                  title: "Tasks & follow-ups",
                  body: "Activities, tasks, notes, and status updates so momentum doesn’t depend on memory.",
                },
                {
                  title: "Analytics you can act on",
                  body: "Conversion and performance signals surfaced for faster decisions.",
                },
              ].map((b, i) => (
                <Reveal key={b.title} delay={i * 0.07}>
                  <div className="h-full rounded-2xl border border-border/80 bg-card/80 p-5 shadow-sm transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-6">
                    <p className="text-base font-semibold text-foreground">{b.title}</p>
                    <p className="mt-4 text-sm leading-relaxed text-muted">{b.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-0.5 sm:px-1 lg:px-1.5">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
              Product experience
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
              Designed to feel fast, secure, and executive-ready
            </h2>
            <p className="mt-4 text-muted">
              Pipeline execution, governance, and reporting work together—so
              teams move faster with clarity and accountability.
            </p>
          </Reveal>

          <div className="mt-4 grid gap-4 lg:grid-cols-3 lg:mt-5 lg:gap-3">
            {[
              {
                title: "CRM execution",
                description:
                  "Pipeline stages, tasks, activities, notes, scoring, and saved views.",
                chip: "CRM",
              },
              {
                title: "Security",
                description:
                  "Role-based access with audit-ready activity visibility.",
                chip: "Governance",
              },
              {
                title: "Analytics",
                description:
                  "Sales, financial, property, performance, CRM, and goals reporting in context.",
                chip: "Insights",
              },
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 0.09}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-b from-card to-foreground/[0.04] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:to-white/[0.04] sm:p-7">
                  <span className="inline-flex rounded-full bg-foreground/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-muted">
                    {f.chip}
                  </span>
                  <p className="mt-5 text-lg font-semibold text-foreground sm:text-xl">
                    {f.title}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted sm:text-[15px]">
                    {f.description}
                  </p>
                  <div
                    className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-foreground/10 blur-2xl transition-opacity group-hover:opacity-100"
                    aria-hidden
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-foreground/[0.02] py-8 dark:bg-white/[0.02] sm:py-10">
        <div className="mx-auto max-w-7xl px-0.5 sm:px-1 lg:px-1.5">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
              Core modules
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
              Capabilities across the full real estate lifecycle
            </h2>
            <p className="mt-4 text-muted">
              Modular by design—deploy what you need now, expand as your portfolio
              and teams grow.
            </p>
          </Reveal>

          <div className="mt-4 grid gap-3 md:grid-cols-2 lg:mt-5 lg:grid-cols-3 lg:gap-5">
            {coreModules.map((module, i) => (
              <Reveal key={module.title} delay={i * 0.06}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-border/80 bg-card/60 p-5 shadow-sm transition-all duration-300 hover:border-foreground/15 hover:shadow-md sm:p-6">
                  <div
                    className="absolute inset-x-0 top-0 h-1 bg-foreground opacity-90"
                    aria-hidden
                  />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                    Module {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-4 text-base font-semibold text-foreground sm:text-[17px]">
                    {module.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{module.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-0.5 sm:px-1 lg:px-1.5">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-border/80 bg-gradient-to-br from-foreground/[0.06] via-card to-card p-6 shadow-lg sm:p-8">
            <div
              className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-foreground/10 blur-3xl"
              aria-hidden
            />
            <div className="grid gap-4 lg:grid-cols-12 lg:items-center lg:gap-5">
              <div className="relative lg:col-span-7">
                <Reveal>
                  <p className="text-sm font-semibold text-muted sm:text-base">
                    Implementation & success
                  </p>
                  <h2 className="mt-3 text-balance font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-foreground sm:mt-4 sm:text-4xl">
                    From rollout to scale—with a partner, not a PDF
                  </h2>
                  <p className="mt-5 text-balance text-base leading-relaxed text-muted sm:text-lg">
                    Beyond software access, {site.name} helps you integrate,
                    govern, and optimize so adoption sticks and outcomes are
                    measurable.
                  </p>
                </Reveal>
              </div>

              <div className="relative lg:col-span-5">
                <Reveal delay={0.1}>
                  <ul className="space-y-2 sm:space-y-2">
                    {serviceCoverage.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-4 rounded-2xl border border-border/80 bg-card/80 p-4 shadow-sm sm:p-5"
                      >
                        <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-black text-xs font-bold text-white shadow-sm dark:bg-white dark:text-black">
                          ✓
                        </span>
                        <span className="text-sm font-medium leading-snug text-foreground/95">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-foreground/[0.02] py-6 dark:bg-white/[0.02] sm:py-8">
        <div className="mx-auto max-w-7xl px-0.5 sm:px-1 lg:px-1.5">
          <Reveal>
            <div className="glass relative overflow-hidden rounded-[1.75rem] p-6 text-center shadow-lg sm:p-8 lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
                See it on your data
              </p>
              <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-foreground sm:mt-6 sm:text-4xl">
                Ready for a walkthrough that feels real?
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-balance text-base leading-relaxed text-muted sm:mt-6 sm:text-lg">
                Book a focused demo—we’ll map your workflows and show how the
                platform fits your sales and operations model.
              </p>
              <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:mt-5 sm:flex-row sm:gap-3">
                <Button href="/contact" variant="primary" className="min-w-[200px]">
                  Request a demo
                </Button>
                <Button href="/contact" variant="outline" className="min-w-[200px]">
                  Talk to a specialist
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
