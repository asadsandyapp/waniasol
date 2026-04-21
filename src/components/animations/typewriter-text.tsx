"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type TypewriterTextProps = {
  text: string;
  className?: string;
  /** Milliseconds between each character */
  speedMs?: number;
  /** Delay before the first character appears */
  startDelayMs?: number;
  /** Blinking caret after the typed segment */
  showCursor?: boolean;
};

/**
 * Letter-by-letter reveal using timers (not CSS animation-delay). Global
 * `prefers-reduced-motion` sets `animation-duration: 0.01ms !important` on `*`,
 * which breaks staggered CSS keyframes; JS opacity avoids that.
 */
export function TypewriterText({
  text,
  className,
  speedMs = 36,
  startDelayMs = 0,
  showCursor = false,
}: TypewriterTextProps) {
  const chars = Array.from(text);
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (chars.length === 0) {
      Promise.resolve().then(() => setVisible(0));
      return;
    }

    if (typeof window.matchMedia !== "function") {
      Promise.resolve().then(() => setVisible(chars.length));
      return;
    }

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      Promise.resolve().then(() => setVisible(chars.length));
      return;
    }

    Promise.resolve().then(() => setVisible(0));
    let cancelled = false;
    const timeouts: number[] = [];
    const schedule = (fn: () => void, ms: number) => {
      timeouts.push(
        window.setTimeout(() => {
          if (!cancelled) fn();
        }, ms),
      );
    };

    schedule(() => {
      let i = 0;
      const step = () => {
        if (cancelled) return;
        i += 1;
        setVisible(i);
        if (i < chars.length) {
          schedule(step, speedMs);
        }
      };
      step();
    }, startDelayMs);

    return () => {
      cancelled = true;
      for (const id of timeouts) {
        window.clearTimeout(id);
      }
    };
  }, [text, speedMs, startDelayMs, chars.length]);

  const caretOn = showCursor && visible >= chars.length;

  return (
    <span className={cn(className, "inline")}>
      {chars.map((char, i) => (
        <span
          key={`${i}-${char}`}
          className="inline transition-opacity duration-75"
          style={{ opacity: i < visible ? 1 : 0 }}
        >
          {char}
        </span>
      ))}
      {showCursor && (
        <span
          aria-hidden
          className="typewriter-caret ml-px inline-block min-h-[0.85em] w-[2px] bg-current align-[-0.08em]"
          style={{ opacity: caretOn ? 1 : 0 }}
        />
      )}
    </span>
  );
}
