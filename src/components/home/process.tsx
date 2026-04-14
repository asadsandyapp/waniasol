import { processSteps } from "@/lib/home-data";
import { Reveal } from "@/components/animations/reveal";

export function Process() {
  return (
    <section className="py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-0.5 sm:px-1 lg:px-1.5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
            A process you can <span className="gradient-text">trust</span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            Transparent rituals, predictable delivery, and engineering rigor at
            every step.
          </p>
        </Reveal>
        <ol className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.06}>
              <li className="relative">
                <div className="glass rounded-2xl p-6">
                  <span className="font-[family-name:var(--font-display)] text-4xl font-bold text-foreground/10 dark:text-white/10">
                    {p.step}
                  </span>
                  <h3 className="mt-2 font-[family-name:var(--font-display)] text-lg font-semibold">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {p.text}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
