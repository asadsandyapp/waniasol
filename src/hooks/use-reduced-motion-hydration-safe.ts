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

    // Older mobile Safari only supports addListener/removeListener.
    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", update);
    } else if (typeof mq.addListener === "function") {
      mq.addListener(update);
    }

    Promise.resolve().then(() => {
      setMounted(true);
      update();
    });

    return () => {
      if (typeof mq.removeEventListener === "function") {
        mq.removeEventListener("change", update);
      } else if (typeof mq.removeListener === "function") {
        mq.removeListener(update);
      }
    };
  }, []);

  return mounted && prefersReduced;
}
