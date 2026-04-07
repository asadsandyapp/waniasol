"use client";

import { GradientMesh } from "@/components/animations/gradient-mesh";
import { Button } from "@/components/ui/button";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <GradientMesh />
      <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-20 sm:px-6 sm:pb-28 sm:pt-28 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-muted backdrop-blur-md"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Trusted by teams in the US, UK, EU &amp; Middle East
          </motion.p>
          <motion.h1
            className="font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            We Build Scalable Digital Products for{" "}
            <span className="gradient-text">Global Businesses</span>
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
          >
            End-to-end engineering for web, mobile, SaaS, and AI—from strategy
            and architecture to launch, scale, and continuous improvement.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
          >
            <Button href="/contact" variant="primary" className="min-w-[180px] py-3">
              Get Started
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
            <Button href="/contact" variant="outline" className="min-w-[180px] py-3">
              <Calendar className="h-4 w-4" aria-hidden />
              Book a Call
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
