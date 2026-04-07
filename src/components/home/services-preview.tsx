"use client";

import { serviceCards } from "@/lib/home-data";
import { Reveal } from "@/components/animations/reveal";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ServicesPreview() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
            Services built for <span className="gradient-text">outcomes</span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            Product-minded engineering across the full stack—designed for
            reliability, velocity, and measurable business impact.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                    className="glass neo-inset flex h-full flex-col rounded-2xl p-6 transition hover:border-indigo-500/30 hover:shadow-soft"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/15 text-indigo-600 dark:text-indigo-300">
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
