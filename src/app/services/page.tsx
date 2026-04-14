import { Reveal } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/services-data";
import { site } from "@/lib/site-config";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description: `Web, mobile, SaaS, AI, and cloud services by ${site.name}.`,
};

export default function ServicesPage() {
  return (
    <div className="pb-12 sm:pb-16">
      <section className="border-b border-border/60 bg-foreground/[0.02] py-10 dark:bg-white/[0.02] sm:py-12">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-5">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
              Engineering Services
            </p>
            <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Services for{" "}
              <span className="gradient-text">modern enterprises</span>
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted sm:text-xl">
              Deep expertise across product engineering—from customer-facing apps
              to data platforms and cloud foundations. Every engagement is tuned
              to your stage, stack, and compliance needs.
            </p>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {services.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="rounded-full border border-border bg-background/80 px-3.5 py-2 text-sm font-medium text-foreground/90 transition hover:-translate-y-0.5 hover:bg-background hover:shadow-sm"
                >
                  {s.title}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-6 px-3 py-8 sm:px-4 lg:grid-cols-[260px_1fr] lg:gap-8 lg:px-5 lg:py-12">
        <aside className="hidden lg:block">
          <div className="sticky top-24 rounded-2xl border border-border/70 bg-card/40 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              On this page
            </p>
            <nav className="mt-3 space-y-1.5" aria-label="Services sections">
              {services.map((s) => (
                <a
                  key={`toc-${s.id}`}
                  href={`#${s.id}`}
                  className="block rounded-lg px-2.5 py-2 text-sm font-medium text-foreground/80 transition hover:bg-foreground/5 hover:text-foreground"
                >
                  {s.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <div className="space-y-5 sm:space-y-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.id} delay={i * 0.03}>
                <section
                  id={s.id}
                  className="scroll-mt-20 rounded-3xl border border-border/80 bg-card/45 p-6 shadow-[0_10px_40px_-28px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:p-8 lg:p-10"
                >
                  <div className="flex flex-col gap-6 lg:flex-row lg:gap-10">
                    <div className="lg:w-[36%]">
                      <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-border/70 bg-foreground/10 text-foreground shadow-sm">
                        <Icon className="h-7 w-7" aria-hidden />
                      </span>
                      <h2 className="mt-5 font-[family-name:var(--font-display)] text-2xl font-bold sm:text-[1.75rem]">
                        {s.title}
                      </h2>
                      <p className="mt-3 leading-relaxed text-muted">
                        {s.summary}
                      </p>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                        Key benefits
                      </p>
                      <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                        {s.benefits.map((b) => (
                          <li
                            key={b}
                            className="flex gap-3 rounded-xl border border-border/60 bg-background/75 px-3.5 py-3 text-sm leading-relaxed text-foreground/90"
                          >
                            <span
                              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/85"
                              aria-hidden
                            />
                            {b}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-5">
                        <Button href="/contact" variant="primary" className="min-w-[180px]">
                          Discuss {s.title}
                        </Button>
                      </div>
                    </div>
                  </div>
                </section>
              </Reveal>
            );
          })}
        </div>
      </div>

      <section className="mx-auto mt-2 max-w-7xl px-3 text-center sm:px-4 lg:px-5">
        <Reveal>
          <p className="rounded-2xl border border-border/70 bg-card/35 px-4 py-5 text-muted">
            Need a tailored scope or RFP response?{" "}
            <Link
              href="/contact"
              className="font-semibold text-foreground underline-offset-4 hover:underline"
            >
              Contact our team
            </Link>
            .
          </p>
        </Reveal>
      </section>
    </div>
  );
}
