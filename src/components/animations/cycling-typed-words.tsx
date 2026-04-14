"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type CyclingTypedWordsProps = {
  words: readonly string[];
  className?: string;
  letterMs?: number;
  holdMs?: number;
  betweenWordsMs?: number;
};

/**
 * Cycles through words: types one word letter-by-letter, holds, clears, next word.
 * Does not disable for prefers-reduced-motion — the full sentence lives in sr-only
 * on the parent; users who need less motion can still read that.
 */
export function CyclingTypedWords({
  words,
  className,
  letterMs = 55,
  holdMs = 2000,
  betweenWordsMs = 320,
}: CyclingTypedWordsProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(0);

  const display = words[wordIndex]?.slice(0, visibleCount) ?? "";
  const longestWord = words.reduce(
    (longest, current) => (current.length > longest.length ? current : longest),
    "",
  );

  useEffect(() => {
    if (words.length === 0) {
      return;
    }

    let cancelled = false;
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    const schedule = (fn: () => void, ms: number) => {
      timeouts.push(
        setTimeout(() => {
          if (!cancelled) fn();
        }, ms),
      );
    };

    let wordIdx = 0;
    let count = 0;

    const typeStep = () => {
      if (cancelled) return;
      const w = words[wordIdx];
      const chars = Array.from(w);
      const len = chars.length;

      if (count < len) {
        count += 1;
        setWordIndex(wordIdx);
        setVisibleCount(count);
        schedule(typeStep, letterMs);
        return;
      }

      schedule(() => {
        if (cancelled) return;
        setVisibleCount(0);
        wordIdx = (wordIdx + 1) % words.length;
        setWordIndex(wordIdx);
        count = 0;
        schedule(() => {
          if (cancelled) return;
          typeStep();
        }, betweenWordsMs);
      }, holdMs);
    };

    typeStep();

    return () => {
      cancelled = true;
      for (const id of timeouts) {
        clearTimeout(id);
      }
    };
  }, [words, letterMs, holdMs, betweenWordsMs]);

  return (
    <span
      className={cn(className, "relative inline-grid min-h-[1.15em] align-baseline")}
      aria-hidden
    >
      <span className="invisible whitespace-nowrap">{longestWord}</span>
      <span className="absolute inset-0 whitespace-nowrap">{display}</span>
    </span>
  );
}
