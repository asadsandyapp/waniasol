import { Reveal } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";
import { openRoles } from "@/lib/careers-data";
import { site } from "@/lib/site-config";
import type { Metadata } from "next";
import { MapPin, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers",
  description: `Join ${site.name}—remote-friendly roles for senior engineers and product leaders.`,
};

export default function CareersPage() {
  return (
    <div className="pb-20 sm:pb-28">
      <section className="border-b border-border/60 bg-foreground/[0.02] py-16 dark:bg-white/[0.02] sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
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

        <div className="mt-16">
          <Reveal>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold">
              Open positions
            </h2>
            <p className="mt-2 text-muted">
              Don’t see a fit? Email{" "}
              <a
                href={`mailto:careers@${site.email.split("@")[1]}`}
                className="font-medium text-indigo-600 hover:underline dark:text-indigo-400"
              >
                careers@{site.email.split("@")[1]}
              </a>{" "}
              with your portfolio.
            </p>
          </Reveal>
          <ul className="mt-8 space-y-4">
            {openRoles.map((job, i) => (
              <Reveal key={job.id} delay={i * 0.04}>
                <li className="glass flex flex-col gap-4 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-[family-name:var(--font-display)] text-lg font-semibold">
                      {job.title}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted">
                      <span className="inline-flex items-center gap-1.5">
                        <Briefcase className="h-4 w-4" aria-hidden />
                        {job.department}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-4 w-4" aria-hidden />
                        {job.location}
                      </span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <Button href="/contact" variant="outline">
                    Apply
                  </Button>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="glass rounded-3xl p-8 text-center sm:p-12">
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold">
              Hiring spotlight
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted">
              We’re expanding our platform engineering and AI practices. Senior
              practitioners thrive here—ownership end-to-end, from design docs
              to production metrics.
            </p>
            <Button href="/contact" variant="primary" className="mt-8">
              Introduce yourself
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
