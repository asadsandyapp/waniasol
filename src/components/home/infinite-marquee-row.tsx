"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";

type InfiniteMarqueeRowProps = {
  children: ReactNode;
  /** Time in ms to scroll one full copy of the content (lower = faster). */
  durationMs?: number;
  className?: string;
};

/**
 * Horizontal marquee driven by rAF + inline transform.
 * Survives global CSS that disables animations and is not affected by
 * `prefers-reduced-motion` stylesheet hacks.
 */
export function InfiniteMarqueeRow({
  children,
  durationMs = 16_000,
  className,
}: InfiniteMarqueeRowProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const accRef = useRef(0);
  const lastRef = useRef<number | null>(null);
  const rafRef = useRef(0);

  useLayoutEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const step = (now: number) => {
      if (lastRef.current === null) lastRef.current = now;
      const dt = now - lastRef.current;
      lastRef.current = now;

      const half = el.scrollWidth / 2;
      if (half > 8 && !pausedRef.current) {
        accRef.current = (accRef.current + (dt / durationMs) * half) % half;
        el.style.transform = `translate3d(${-accRef.current}px,0,0)`;
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [durationMs]);

  return (
    <div
      ref={trackRef}
      className={className}
      style={{ display: "flex", width: "max-content", gap: "0.75rem", willChange: "transform" }}
      onPointerEnter={() => {
        pausedRef.current = true;
      }}
      onPointerLeave={() => {
        pausedRef.current = false;
        lastRef.current = null;
      }}
    >
      {children}
    </div>
  );
}
