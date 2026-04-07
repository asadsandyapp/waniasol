import { testimonials } from "@/lib/home-data";
import { Reveal } from "@/components/animations/reveal";
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section className="border-y border-border/60 bg-foreground/[0.02] py-20 dark:bg-white/[0.02] sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
            What clients <span className="gradient-text">say</span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            Long-term partnerships with teams who care about craft and
            outcomes.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.07}>
              <blockquote className="glass flex h-full flex-col rounded-2xl p-6">
                <Quote
                  className="h-8 w-8 text-indigo-500/40 dark:text-indigo-400/40"
                  aria-hidden
                />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                  “{t.quote}”
                </p>
                <footer className="mt-6 border-t border-border pt-6">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-muted">
                    {t.role}, {t.company}
                  </p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
