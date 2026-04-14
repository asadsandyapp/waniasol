"use client";

import { useReducedMotionHydrationSafe } from "@/hooks/use-reduced-motion-hydration-safe";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  /** When true, count up even if the user prefers reduced motion (use sparingly). */
  ignoreReducedMotion?: boolean;
};

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 1.8,
  className,
  ignoreReducedMotion = false,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotionHydrationSafe();
  const effectiveReduce = ignoreReducedMotion ? false : reduce;
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (effectiveReduce || !inView) return;

    let start: number | null = null;
    let raf = 0;

    const step = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / (duration * 1000), 1);
      const eased = 1 - (1 - p) ** 3;
      setDisplay(Math.round(eased * value));
      if (p < 1) {
        raf = requestAnimationFrame(step);
      }
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration, effectiveReduce]);

  if (effectiveReduce) {
    return (
      <span ref={ref} className={className}>
        {prefix}
        {value.toLocaleString()}
        {suffix}
      </span>
    );
  }

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0.35, filter: "blur(4px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </motion.span>
  );
}
