"use client";

import { useReducedMotionHydrationSafe } from "@/hooks/use-reduced-motion-hydration-safe";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  scale?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  scale = 1,
}: RevealProps) {
  const reduce = useReducedMotionHydrationSafe();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, scale }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
