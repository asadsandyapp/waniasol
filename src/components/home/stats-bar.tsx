import { stats } from "@/lib/home-data";
import { AnimatedCounter } from "@/components/animations/animated-counter";
import { Reveal } from "@/components/animations/reveal";

export function StatsBar() {
  return (
    <section className="border-b border-border/60 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <div className="text-center">
                <p className="font-[family-name:var(--font-display)] text-4xl font-bold sm:text-5xl">
                  <AnimatedCounter
                    value={s.value}
                    suffix={s.suffix}
                    className="gradient-text"
                  />
                </p>
                <p className="mt-2 text-sm font-medium text-muted">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
