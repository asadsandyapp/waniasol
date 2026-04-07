import { trustedLogos } from "@/lib/home-data";
import { Reveal } from "@/components/animations/reveal";

export function TrustedBy() {
  return (
    <section className="border-b border-border/60 bg-foreground/[0.02] py-14 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Trusted by innovative teams worldwide
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {trustedLogos.map((name) => (
            <Reveal key={name} className="flex justify-center">
              <div className="glass neo-inset flex h-14 w-full max-w-[160px] items-center justify-center rounded-2xl px-4">
                <span className="font-[family-name:var(--font-display)] text-sm font-semibold text-muted/90">
                  {name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
