import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";

const variants: Record<Variant, string> = {
  primary:
    "bg-black text-white shadow-md hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 active:scale-[0.98]",
  secondary:
    "bg-black text-white hover:bg-black/90 active:scale-[0.98] dark:bg-white dark:text-black dark:hover:bg-white/90",
  ghost:
    "bg-transparent text-black hover:bg-black/5 active:bg-black/10 dark:text-white dark:hover:bg-white/10 dark:active:bg-white/15",
  outline:
    "border border-black/20 bg-white/80 text-black hover:bg-neutral-50 hover:border-black/30 dark:border-white/35 dark:bg-transparent dark:text-white dark:hover:border-white/50 dark:hover:bg-white/5",
};

export function Button({
  className,
  variant = "primary",
  children,
  href,
  type,
  ...props
}: ComponentProps<"button"> & {
  variant?: Variant;
  href?: string;
  children: ReactNode;
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} prefetch={false} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} className={classes} {...props}>
      {children}
    </button>
  );
}
