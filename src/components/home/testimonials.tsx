import { testimonials } from "@/lib/home-data";
import { Reveal } from "@/components/animations/reveal";
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section className="border-y border-border/60 bg-foreground/[0.02] py-10 dark:bg-white/[0.02] sm:py-14">
      <div className="mx-auto max-w-7xl px-0.5 sm:px-1 lg:px-1.5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
            What clients <span className="gradient-text">say</span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            Long-term partnerships with teams who care about craft and
            outcomes.
          </p>
        </Reveal>
        <div className="mt-7 grid gap-4 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.07} scale={0.97} y={28}>
              <blockquote className="glass flex h-full flex-col rounded-2xl p-6 transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-soft">
                <Quote
                  className="h-8 w-8 text-foreground/25"
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
