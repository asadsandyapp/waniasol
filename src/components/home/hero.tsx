"use client";

import { CyclingTypedWords } from "@/components/animations/cycling-typed-words";
import { GradientMesh } from "@/components/animations/gradient-mesh";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

const HERO_TITLE_LINE1 = "AI-enabled ecosystems";
const HERO_TITLE_LINE2 = "that make commerce";

const HERO_CYCLING_WORDS = [
  "transparent",
  "seamless",
  "secure",
  "profitable",
] as const;

const HERO_SR_ONLY =
  "AI-enabled ecosystems that make commerce transparent, seamless, secure and profitable";

export function Hero() {
  const fadeInitial = { opacity: 1, y: 0 };
  const fadeAnimate = { opacity: 1, y: 0 };

  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-[#fafafa] text-[#0a0a0a] dark:bg-[#0a0a0a] dark:text-white">
      <GradientMesh />
      <div className="relative z-[1] mx-auto max-w-7xl px-0.5 pb-12 pt-10 sm:px-1 sm:pb-14 sm:pt-14 lg:px-1.5 lg:pt-16">
        <div className="mx-auto max-w-3xl text-left [&_p]:text-[#404040] [&_p]:dark:text-white/90">
          <motion.p
            className="mb-5 flex items-center gap-2 text-sm font-medium text-[#525252] dark:text-white/70"
            initial={fadeInitial}
            animate={fadeAnimate}
            transition={{ duration: 0.35 }}
          >
            <span className="text-[#a3a3a3] dark:text-white/40" aria-hidden>
              |
            </span>
            Shaping Smarter Finance
          </motion.p>
          <h1 className="font-[family-name:var(--font-display)] min-h-[3.2em] text-4xl font-bold leading-[1.12] tracking-tight text-[#0a0a0a] dark:text-white sm:min-h-[2.9em] sm:text-5xl lg:min-h-[2.7em] lg:text-6xl">
            <span className="sr-only">{HERO_SR_ONLY}</span>
            <span
              aria-hidden
              className="block"
              data-testid="hero-typewriter-visible"
            >
              <span className="block">{HERO_TITLE_LINE1}</span>
              <span className="mt-1 block sm:mt-2">{HERO_TITLE_LINE2}</span>
              <span
                className="mt-2 block text-blue-600 dark:text-blue-400 sm:mt-3"
                data-testid="hero-cycling-word"
              >
                <CyclingTypedWords
                  words={HERO_CYCLING_WORDS}
                  letterMs={55}
                  holdMs={2000}
                  betweenWordsMs={320}
                />
              </span>
            </span>
          </h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#404040] dark:text-white/90 sm:text-xl"
            initial={fadeInitial}
            animate={fadeAnimate}
            transition={{ duration: 0.35, delay: 0.04 }}
          >
            End-to-end engineering for web, mobile, SaaS, and AI—from strategy
            and architecture to launch, scale, and continuous improvement.
          </motion.p>
          <motion.div
            className="mt-5 flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={fadeInitial}
            animate={fadeAnimate}
            transition={{ duration: 0.35, delay: 0.06 }}
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
