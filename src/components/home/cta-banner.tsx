"use client";

import { Button } from "@/components/ui/button";
import { motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function CtaBanner() {
  const reduce = useReducedMotion();

  return (
    <section className="pb-20 sm:pb-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-indigo-500/20 bg-gradient-to-br from-indigo-950/90 via-slate-900 to-violet-950/90 p-10 text-center shadow-soft sm:p-14 dark:from-indigo-950 dark:via-slate-950 dark:to-violet-950"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(129,140,248,0.25),transparent_55%)]" />
          <Sparkles
            className="relative mx-auto h-10 w-10 text-indigo-300"
            aria-hidden
          />
          <h2 className="relative mt-4 font-[family-name:var(--font-display)] text-2xl font-bold text-white sm:text-3xl">
            Ready to build your next flagship product?
          </h2>
          <p className="relative mx-auto mt-3 max-w-xl text-indigo-100/90">
            Tell us about your roadmap. We’ll respond within one business day
            with next steps.
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href="/contact"
              variant="secondary"
              className="min-w-[200px] bg-white text-slate-950 hover:bg-indigo-50"
            >
              Start Your Project
            </Button>
            <Button
              href="/case-studies"
              variant="outline"
              className="min-w-[200px] border-white/25 bg-white/5 text-white hover:bg-white/10"
            >
              See our work
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
