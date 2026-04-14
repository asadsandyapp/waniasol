"use client";

import { serviceCards } from "@/lib/home-data";
import { Reveal } from "@/components/animations/reveal";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ServicesPreview() {
  return (
    <section id="services" className="py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-0.5 sm:px-1 lg:px-1.5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
            Services built for <span className="gradient-text">outcomes</span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            Product-minded engineering across the full stack—designed for
            reliability, velocity, and measurable business impact.
          </p>
        </Reveal>
        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="group relative h-full"
                >
                  <Link
                    href="/services"
                    prefetch={false}
                    className="glass neo-inset flex h-full flex-col rounded-2xl p-6 transition hover:border-foreground/15 hover:shadow-soft"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-foreground/10 text-foreground">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-muted opacity-0 transition group-hover:opacity-100" />
                    </div>
                    <h3 className="mt-5 font-[family-name:var(--font-display)] text-lg font-semibold">
                      {s.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                      {s.description}
                    </p>
                  </Link>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
