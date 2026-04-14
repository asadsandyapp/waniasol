"use client";

import { Button } from "@/components/ui/button";
import { useReducedMotionHydrationSafe } from "@/hooks/use-reduced-motion-hydration-safe";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function CtaBanner() {
  const reduce = useReducedMotionHydrationSafe();

  return (
    <section className="pb-10 sm:pb-14">
      <div className="mx-auto max-w-7xl px-0.5 sm:px-1 lg:px-1.5">
        <motion.div
          className="relative overflow-hidden rounded-3xl glass neo-inset p-5 text-center sm:p-7"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--mesh-1),transparent_55%)]" />
          <Sparkles
            className="relative mx-auto h-10 w-10 text-muted"
            aria-hidden
          />
          <h2 className="relative mt-4 font-[family-name:var(--font-display)] text-2xl font-bold text-foreground sm:text-3xl">
            Ready to build your next flagship product?
          </h2>
          <p className="relative mx-auto mt-3 max-w-xl text-muted">
            Tell us about your roadmap. We’ll respond within one business day
            with next steps.
          </p>
          <div className="relative mt-4 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" variant="primary" className="min-w-[200px]">
              Start Your Project
            </Button>
            <Button href="/services" variant="outline" className="min-w-[200px]">
              See our work
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
