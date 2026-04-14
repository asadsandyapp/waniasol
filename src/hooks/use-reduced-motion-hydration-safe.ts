"use client";

import { useEffect, useState } from "react";

/**
 * Framer's `useReducedMotion()` logs a dev warning and is not reliable during
 * SSR: the server snapshot can disagree with the client's first paint when the
 * user prefers reduced motion, which breaks hydration for animated wrappers.
 *
 * Returns `false` until after mount, then the real preference from
 * `matchMedia` (no Framer dependency, no console noise).
 */
export function useReducedMotionHydrationSafe(): boolean {
  const [mounted, setMounted] = useState(false);
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReduced(mq.matches);
    mq.addEventListener("change", update);
    queueMicrotask(() => {
      setMounted(true);
      update();
    });
    return () => mq.removeEventListener("change", update);
  }, []);

  return mounted && prefersReduced;
}
