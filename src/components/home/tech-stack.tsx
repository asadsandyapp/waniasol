import { techStack } from "@/lib/home-data";
import { Reveal } from "@/components/animations/reveal";

export function TechStack() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
            Modern <span className="gradient-text">tech stack</span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            We pick proven tools—and adopt new ones when they reduce risk and
            improve velocity.
          </p>
        </Reveal>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {techStack.map((t, i) => (
            <Reveal key={t} delay={i * 0.03}>
              <span className="glass inline-flex rounded-full px-4 py-2 text-sm font-medium text-foreground/90">
                {t}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
