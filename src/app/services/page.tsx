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
    <div className="pb-20 sm:pb-28">
      <section className="border-b border-border/60 bg-foreground/[0.02] py-16 dark:bg-white/[0.02] sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight sm:text-5xl">
              Services for{" "}
              <span className="gradient-text">modern enterprises</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted">
              Deep expertise across product engineering—from customer-facing apps
              to data platforms and cloud foundations. Every engagement is tuned
              to your stage, stack, and compliance needs.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="space-y-20">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.id} delay={i * 0.03}>
                <section
                  id={s.id}
                  className="scroll-mt-28 rounded-3xl border border-border/80 bg-card/30 p-8 sm:p-10"
                >
                  <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
                    <div className="lg:w-1/3">
                      <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/25 to-violet-500/15 text-indigo-600 dark:text-indigo-300">
                        <Icon className="h-7 w-7" aria-hidden />
                      </span>
                      <h2 className="mt-6 font-[family-name:var(--font-display)] text-2xl font-bold">
                        {s.title}
                      </h2>
                      <p className="mt-3 text-muted leading-relaxed">
                        {s.summary}
                      </p>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold uppercase tracking-wider text-muted">
                        Key benefits
                      </p>
                      <ul className="mt-4 space-y-3">
                        {s.benefits.map((b) => (
                          <li
                            key={b}
                            className="flex gap-3 text-sm leading-relaxed text-foreground/90"
                          >
                            <span
                              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                              aria-hidden
                            />
                            {b}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <Button href="/contact" variant="primary">
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

      <section className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-muted">
            Need a tailored scope or RFP response?{" "}
            <Link
              href="/contact"
              className="font-semibold text-indigo-600 underline-offset-4 hover:underline dark:text-indigo-400"
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
