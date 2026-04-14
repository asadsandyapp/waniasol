"use client";

/**
 * Static layers only — identical markup on server and client (no Framer
 * conditionals) to avoid hydration mismatches.
 */
export function GradientMesh() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--mesh-1),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_100%_0%,var(--mesh-2),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_35%_at_0%_100%,var(--mesh-3),transparent)]" />
      <div className="absolute -left-1/4 top-1/4 h-[420px] w-[420px] rounded-full bg-neutral-400/15 blur-[100px] dark:bg-white/[0.07]" />
      <div className="absolute -right-1/4 bottom-0 h-[380px] w-[380px] rounded-full bg-neutral-500/12 blur-[90px] dark:bg-white/[0.05]" />
      <div className="absolute left-1/3 top-1/2 h-[280px] w-[280px] rounded-full bg-neutral-400/10 blur-[80px] dark:bg-white/[0.04]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
}
