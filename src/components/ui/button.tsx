import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-[var(--accent-start)] to-[var(--accent-end)] text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:brightness-105 active:scale-[0.98]",
  secondary:
    "bg-foreground text-background hover:bg-foreground/90 active:scale-[0.98] dark:bg-white dark:text-slate-950",
  ghost:
    "bg-transparent text-foreground hover:bg-foreground/5 active:bg-foreground/10",
  outline:
    "border border-border bg-card/50 text-foreground hover:bg-card hover:border-foreground/15",
};

export function Button({
  className,
  variant = "primary",
  children,
  href,
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
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
