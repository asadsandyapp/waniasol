"use client";

import { site } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

type BrandLogoProps = {
  className?: string;
  /** Use on above-the-fold header to avoid lazy-load flash */
  priority?: boolean;
  /** Header: default nav height; Footer: larger; Compact: tight rows (e.g. product hero) */
  size?: "header" | "footer" | "compact";
};

/**
 * Wordmark sized to the nav row. Do not use CSS scale() — it blows past the header
 * and triggers huge LCP paint bounds.
 */
const sizeClasses = {
  header:
    "h-8 w-auto max-h-9 max-w-[11rem] object-contain object-left sm:h-9 sm:max-w-[13rem]",
  footer:
    "h-9 w-auto max-h-10 max-w-[13rem] object-contain object-left sm:h-10 sm:max-w-[15rem]",
  compact:
    "h-7 w-auto max-w-[9rem] object-contain object-left sm:h-8 sm:max-w-[10rem]",
} as const;

export function BrandLogo({
  className,
  priority,
  size = "header",
}: BrandLogoProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    Promise.resolve().then(() => setMounted(true));
  }, []);

  return (
    <span
      className={cn(
        "relative z-10 inline-flex max-w-full shrink-0 items-center overflow-hidden",
        className,
      )}
    >
      {!mounted ? (
        <span
          className="inline-block h-9 w-[7.5rem] max-w-full rounded bg-black/10 dark:bg-white/15"
          aria-hidden
        />
      ) : (
        <Image
          src="/waniasol-logo-light.png"
          alt={site.name}
          width={429}
          height={78}
          priority={priority}
          loading={priority ? "eager" : undefined}
          sizes={
            size === "compact"
              ? "(max-width: 640px) 140px, 160px"
              : size === "footer"
                ? "(max-width: 640px) 200px, 240px"
                : "(max-width: 640px) 160px, 208px"
          }
          className={cn(
            sizeClasses[size],
            "dark:invert dark:brightness-0 dark:contrast-100",
          )}
        />
      )}
    </span>
  );
}
