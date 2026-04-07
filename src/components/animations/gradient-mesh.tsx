"use client";

import { motion, useReducedMotion } from "framer-motion";

export function GradientMesh() {
  const reduce = useReducedMotion();

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--mesh-1),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_0%,var(--mesh-2),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_35%_at_0%_100%,var(--mesh-3),transparent)]" />
      {!reduce && (
        <>
          <motion.div
            className="absolute -left-1/4 top-1/4 h-[420px] w-[420px] rounded-full bg-indigo-500/20 blur-[100px]"
            animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -right-1/4 bottom-0 h-[380px] w-[380px] rounded-full bg-violet-500/15 blur-[90px]"
            animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute left-1/3 top-1/2 h-[280px] w-[280px] rounded-full bg-blue-500/10 blur-[80px]"
            animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.65, 0.4] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
}
