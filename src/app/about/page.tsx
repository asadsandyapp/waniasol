import { Reveal } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site-config";
import type { Metadata } from "next";
import { Award, Heart, Shield, Sparkles } from "lucide-react";
export const metadata: Metadata = {
  title: "About Us",
  description: `Vision, mission, and leadership at ${site.name}.`,
};

const leaders = [
  {
    name: "Amelia Wright",
    role: "CEO & Co-founder",
    bio: "Former VP Engineering at a Fortune 500; scaled distributed teams across US and EU.",
  },
  {
    name: "Marcus Okoro",
    role: "CTO",
    bio: "Architect of cloud-native platforms; speaker on reliability and platform engineering.",
  },
  {
    name: "Elena Petrov",
    role: "Chief Delivery Officer",
    bio: "Leads engagement governance; background in enterprise transformation consulting.",
  },
] as const;

const values = [
  {
    title: "Innovation",
    text: "We invest in R&D and bring pragmatic AI and platform patterns to every engagement.",
    icon: Sparkles,
  },
  {
    title: "Quality",
    text: "Code review, automated testing, and operational readiness are non-negotiable.",
    icon: Award,
  },
  {
    title: "Integrity",
    text: "Transparent communication, realistic timelines, and ethical use of data and models.",
    icon: Shield,
  },
  {
    title: "Partnership",
    text: "We embed with your product org—shared goals, shared metrics, shared wins.",
    icon: Heart,
  },
] as const;

export default function AboutPage() {
  return (
    <div className="pb-12 sm:pb-16">
      <section className="border-b border-border/60 bg-foreground/[0.02] py-10 dark:bg-white/[0.02] sm:py-12">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-5">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
              About {site.name}
            </p>
            <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Engineering partner for{" "}
              <span className="gradient-text">ambitious teams</span>
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted sm:text-xl">
              We are a global software house helping enterprises and fast-growing
              startups design, build, and evolve digital products—with the polish
              and rigor expected by international clients.
            </p>
            <div className="mt-7 flex flex-wrap gap-2.5">
              <a
                href="#story"
                className="rounded-full border border-border bg-background/80 px-3.5 py-2 text-sm font-medium text-foreground/90 transition hover:-translate-y-0.5 hover:bg-background hover:shadow-sm"
              >
                Our story
              </a>
              <a
                href="#leadership"
                className="rounded-full border border-border bg-background/80 px-3.5 py-2 text-sm font-medium text-foreground/90 transition hover:-translate-y-0.5 hover:bg-background hover:shadow-sm"
              >
                Leadership
              </a>
              <a
                href="#values"
                className="rounded-full border border-border bg-background/80 px-3.5 py-2 text-sm font-medium text-foreground/90 transition hover:-translate-y-0.5 hover:bg-background hover:shadow-sm"
              >
                Culture & values
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-3 py-8 sm:px-4 lg:px-5 lg:py-12">
        <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
          <Reveal>
            <div className="h-full rounded-2xl border border-border/70 bg-card/45 p-6 shadow-[0_10px_40px_-28px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                North Star
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-bold">
              Vision
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                A world where every business can ship reliable, secure, and
                delightful software—without compromising speed or craft.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-2xl border border-border/70 bg-card/45 p-6 shadow-[0_10px_40px_-28px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Execution
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-bold">
              Mission
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                We combine product thinking, modern architecture, and disciplined
                delivery to help our clients win in competitive markets across the
                US, UK, Europe, and the Middle East.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="story"
        className="border-y border-border/60 bg-foreground/[0.02] py-8 dark:bg-white/[0.02] sm:py-10"
      >
        <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-5">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Journey
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-bold sm:text-3xl">
              Our story
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              {site.name} began as a small product studio shipping critical
              platforms for regulated industries. As our clients expanded
              internationally, we invested in security, compliance, and
              distributed delivery—becoming the partner we wished we had on day
              one: senior, accountable, and obsessed with outcomes.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Today we operate across time zones with pods that blend strategy,
              design, and engineering—so you get velocity without surprises.
            </p>
          </Reveal>
        </div>
      </section>

      <section
        id="leadership"
        className="mx-auto max-w-7xl px-3 py-8 sm:px-4 lg:px-5 lg:py-12"
      >
        <Reveal className="text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold">
            Leadership
          </h2>
          <p className="mt-3 text-muted">
            Operators who have shipped at scale—and still write code when it
            matters.
          </p>
        </Reveal>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {leaders.map((l, i) => (
            <Reveal key={l.name} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-border/70 bg-card/45 p-6 shadow-[0_10px_40px_-28px_rgba(0,0,0,0.35)] backdrop-blur-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border/60 bg-foreground/10 font-[family-name:var(--font-display)] text-lg font-bold text-foreground">
                  {l.name
                    .split(" ")
                    .map((p) => p[0])
                    .join("")}
                </div>
                <h3 className="mt-5 font-[family-name:var(--font-display)] text-lg font-semibold">
                  {l.name}
                </h3>
                <p className="text-sm font-medium text-muted">
                  {l.role}
                </p>
                <p className="mt-3 text-sm text-muted leading-relaxed">{l.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        id="values"
        className="border-t border-border/60 bg-foreground/[0.02] py-8 dark:bg-white/[0.02] sm:py-10"
      >
        <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-5">
          <Reveal className="text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold">
              Culture &amp; values
            </h2>
          </Reveal>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={i * 0.05}>
                  <div className="flex gap-4 rounded-2xl border border-border/70 bg-card/45 p-6 shadow-[0_10px_40px_-28px_rgba(0,0,0,0.35)] backdrop-blur-sm">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-foreground/10 text-foreground">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">
                        {v.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted leading-relaxed">
                        {v.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-3 py-9 text-center sm:px-4 lg:px-5">
        <Reveal>
          <div className="rounded-2xl border border-border/70 bg-card/35 px-4 py-7 sm:px-6">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold">
              Work with us
            </h2>
            <p className="mt-3 text-muted">
              Explore open roles or start a conversation about your next launch.
            </p>
            <div className="mt-5 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/careers" variant="primary" className="min-w-[170px]">
                View careers
              </Button>
              <Button href="/contact" variant="outline" className="min-w-[170px]">
                Contact
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
