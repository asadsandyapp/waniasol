import { Reveal } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: `Join ${site.name}—remote-friendly roles for senior engineers and product leaders.`,
};

export default function CareersPage() {
  return (
    <div className="pb-12 sm:pb-16">
      <section className="border-b border-border/60 bg-foreground/[0.02] py-10 dark:bg-white/[0.02] sm:py-12">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-5">
          <Reveal>
            <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight sm:text-5xl">
              Build with <span className="gradient-text">exceptional peers</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted">
              We hire craftspeople who care about product outcomes—not ticket
              counts. Distributed by design, with mentorship, autonomy, and
              modern tooling.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-3 py-8 sm:px-4 lg:px-5 lg:py-12">
        <Reveal>
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold">
            Culture
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              "Async-first collaboration with intentional syncs",
              "Learning budget and conference support",
              "Transparent leveling and feedback cycles",
              "Balance: sustainable pace, not hero culture",
            ].map((item) => (
              <li
                key={item}
                className="glass rounded-2xl px-5 py-4 text-sm text-foreground/90"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-8">
          <Reveal>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold">
              Current openings
            </h2>
            <p className="mt-2 text-muted">
              There are no open positions right now. We still welcome strong profiles for future roles.
            </p>
          </Reveal>
          <Reveal delay={0.04}>
            <div className="mt-4 rounded-2xl border border-border/70 bg-card/45 p-6 shadow-[0_10px_40px_-28px_rgba(0,0,0,0.35)] backdrop-blur-sm">
              <p className="text-sm text-muted">
                Want to be considered first when roles reopen? Email{" "}
              <a
                href={`mailto:careers@${site.email.split("@")[1]}`}
                className="font-medium text-foreground underline-offset-4 hover:underline"
              >
                careers@{site.email.split("@")[1]}
              </a>{" "}
                with your resume, portfolio, and areas of expertise.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-4 text-sm text-muted">
              For project inquiries, use{" "}
              <a
                href="/contact"
                className="font-medium text-foreground underline-offset-4 hover:underline"
              >
                our contact page
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-5">
        <Reveal>
          <div className="glass rounded-3xl p-8 text-center sm:p-12">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold">
              Talent network
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted">
              Share your profile once and we’ll reach out when a role aligns with
              your experience in product engineering, platform, or AI delivery.
            </p>
            <Button href="/contact" variant="primary" className="mt-4">
              Join talent network
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
