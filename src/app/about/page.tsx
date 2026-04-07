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
    <div className="pb-20 sm:pb-28">
      <section className="border-b border-border/60 bg-foreground/[0.02] py-16 dark:bg-white/[0.02] sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              About {site.name}
            </p>
            <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight sm:text-5xl">
              Engineering partner for{" "}
              <span className="gradient-text">ambitious teams</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted">
              We are a global software house helping enterprises and fast-growing
              startups design, build, and evolve digital products—with the polish
              and rigor expected by international clients.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold">
              Vision
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              A world where every business can ship reliable, secure, and
              delightful software—without compromising speed or craft.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold">
              Mission
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We combine product thinking, modern architecture, and disciplined
              delivery to help our clients win in competitive markets across the
              US, UK, Europe, and the Middle East.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border/60 bg-foreground/[0.02] py-16 dark:bg-white/[0.02] sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold sm:text-3xl">
              Our story
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              {site.name} began as a small product studio shipping critical
              platforms for regulated industries. As our clients expanded
              internationally, we invested in security, compliance, and
              distributed delivery—becoming the partner we wished we had on day
              one: senior, accountable, and obsessed with outcomes.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Today we operate across time zones with pods that blend strategy,
              design, and engineering—so you get velocity without surprises.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <Reveal className="text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold">
            Leadership
          </h2>
          <p className="mt-3 text-muted">
            Operators who have shipped at scale—and still write code when it
            matters.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {leaders.map((l, i) => (
            <Reveal key={l.name} delay={i * 0.06}>
              <div className="glass h-full rounded-2xl p-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/30 to-violet-500/20 font-[family-name:var(--font-display)] text-lg font-bold text-indigo-700 dark:text-indigo-200">
                  {l.name
                    .split(" ")
                    .map((p) => p[0])
                    .join("")}
                </div>
                <h3 className="mt-5 font-[family-name:var(--font-display)] text-lg font-semibold">
                  {l.name}
                </h3>
                <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  {l.role}
                </p>
                <p className="mt-3 text-sm text-muted leading-relaxed">{l.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-foreground/[0.02] py-16 dark:bg-white/[0.02] sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold">
              Culture &amp; values
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={i * 0.05}>
                  <div className="glass flex gap-4 rounded-2xl p-6">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-600 dark:text-indigo-300">
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

      <section className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold">
            Work with us
          </h2>
          <p className="mt-3 text-muted">
            Explore open roles or start a conversation about your next launch.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/careers" variant="primary">
              View careers
            </Button>
            <Button href="/contact" variant="outline">
              Contact
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
