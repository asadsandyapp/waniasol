"use client";

import { AnimatedCounter } from "@/components/animations/animated-counter";
import { stats } from "@/lib/home-data";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.58,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const lineReveal = {
  hidden: { scaleX: 0, opacity: 0 },
  show: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      delay: 0.08,
    },
  },
};

export function StatsBar() {
  return (
    <section className="border-b border-border/60 bg-background py-10">
      <div className="mx-auto max-w-7xl px-0.5 sm:px-1 lg:px-1.5">
        <>
          <motion.div
            className="mx-auto mb-8 h-px max-w-lg origin-center bg-gradient-to-r from-transparent via-foreground/18 to-transparent dark:via-white/22"
            variants={lineReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-64px" }}
          />
          <motion.div
            className="grid gap-6 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-72px", amount: 0.2 }}
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={item}
                className="group/stat stat-float text-center"
              >
                <motion.p
                  className="font-[family-name:var(--font-display)] text-4xl font-bold tabular-nums sm:text-5xl"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 24 }}
                >
                  <AnimatedCounter
                    value={s.value}
                    suffix={s.suffix}
                    duration={1.35}
                    className="gradient-text inline-block transition-[text-shadow] duration-300 group-hover/stat:text-shadow-[0_0_28px_rgba(0,0,0,0.12)] dark:group-hover/stat:text-shadow-[0_0_32px_rgba(255,255,255,0.14)]"
                  />
                </motion.p>
                <p className="mt-2.5 text-sm font-medium leading-snug text-muted">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </>
      </div>
    </section>
  );
}
