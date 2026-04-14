"use client";

import { trustedLogos } from "@/lib/home-data";
import { Reveal } from "@/components/animations/reveal";
import { InfiniteMarqueeRow } from "@/components/home/infinite-marquee-row";
import { motion } from "framer-motion";

function LogoChip({ name }: { name: string }) {
  return (
    <div className="flex shrink-0 justify-center">
      <div className="logo-chip glass neo-inset flex h-14 min-w-[148px] max-w-[180px] items-center justify-center rounded-2xl px-3 shadow-sm transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md sm:min-w-[160px]">
        <span className="text-center font-[family-name:var(--font-display)] text-xs font-semibold leading-snug text-muted/90 sm:text-sm">
          {name}
        </span>
      </div>
    </div>
  );
}

const marqueeContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export function TrustedBy() {
  const loop = [...trustedLogos, ...trustedLogos];

  return (
    <section className="border-b border-border/60 bg-foreground/[0.02] py-7 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-7xl px-0.5 sm:px-1 lg:px-1.5">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-muted">
            Trusted by innovative teams worldwide
          </p>
        </Reveal>
        <motion.div
          className="logo-marquee-mask relative mt-5 overflow-hidden py-1"
          variants={marqueeContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-48px" }}
        >
          <InfiniteMarqueeRow durationMs={14_000}>
            {loop.map((name, i) => (
              <LogoChip key={`${name}-${i}`} name={name} />
            ))}
          </InfiniteMarqueeRow>
        </motion.div>
      </div>
    </section>
  );
}
