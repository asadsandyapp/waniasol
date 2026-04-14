"use client";

import { ProductDashboardMock } from "@/components/product/product-dashboard-mock";
import { BrandLogo } from "@/components/layout/brand-logo";
import { Button } from "@/components/ui/button";
import { useReducedMotionHydrationSafe } from "@/hooks/use-reduced-motion-hydration-safe";
import { site } from "@/lib/site-config";
import { motion } from "framer-motion";

const stats = [
  { label: "Pipeline clarity", value: "End-to-end" },
  { label: "Teams", value: "Role-based" },
  { label: "Delivery", value: "Web portal" },
];

export function ProductHero() {
  const reduced = useReducedMotionHydrationSafe();

  return (
    <section className="relative overflow-hidden pb-5 pt-8 sm:pb-8 sm:pt-10 lg:pt-12">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute -left-24 top-[-120px] h-[420px] w-[420px] rounded-full bg-neutral-400/20 blur-3xl dark:bg-neutral-100/10"
          animate={
            reduced ? undefined : { x: [0, 28, 0], y: [0, -18, 0] }
          }
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-20 top-[40%] h-[380px] w-[380px] rounded-full bg-neutral-500/15 blur-3xl dark:bg-neutral-400/8"
          animate={
            reduced ? undefined : { x: [0, -22, 0], y: [0, 24, 0] }
          }
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-0.5 sm:px-1 lg:px-1.5">
        <div className="glass relative overflow-hidden rounded-3xl p-6 sm:rounded-[2rem] sm:p-8 lg:p-9">
          <div className="grid gap-4 lg:grid-cols-12 lg:items-center lg:gap-5">
            <div className="relative z-[1] lg:col-span-7">
              <motion.div
                initial={reduced ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex flex-wrap items-center gap-2"
              >
                <span className="inline-flex rounded-full border border-border bg-card/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted shadow-sm">
                  Real estate platform
                </span>
                <span className="hidden text-xs font-semibold text-muted sm:inline">
                  CRM · Sales · Inventory
                </span>
              </motion.div>

              <motion.h1
                initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: reduced ? 0 : 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-5 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]"
              >
                <span className="block">Run property operations and revenue</span>
                <span className="mt-1 block text-muted">
                  from one intelligent workspace
                </span>
              </motion.h1>

              <motion.p
                initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: reduced ? 0 : 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-5 max-w-xl text-balance text-base leading-relaxed text-muted sm:text-lg"
              >
                Inventory, CRM, sales, and reporting in a single product—built
                for teams that need speed, visibility, and governance without
                switching tools.
              </motion.p>

              <motion.div
                initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: reduced ? 0 : 0.18,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-7 flex flex-wrap gap-2"
              >
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-border/90 bg-card/80 px-4 py-2.5 shadow-sm"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-muted">
                      {s.label}
                    </p>
                    <p className="text-sm font-semibold text-foreground">{s.value}</p>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: reduced ? 0 : 0.22,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center"
              >
                <Button href="/contact">Book a live walkthrough</Button>
                <Button href="/services" variant="outline">
                  How we implement
                </Button>
              </motion.div>

              <div className="mt-4 flex items-center gap-3 border-t border-border pt-6">
                <div className="shrink-0 rounded-xl border border-border bg-card/80 p-1.5 shadow-sm">
                  <BrandLogo size="compact" />
                </div>
                <p className="text-sm font-medium text-muted">
                  <span className="font-semibold text-foreground">{site.name}</span>{" "}
                  — enterprise-grade delivery, productized for real estate.
                </p>
              </div>
            </div>

            <motion.div
              className="relative lg:col-span-5"
              initial={
                reduced ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }
              }
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.65,
                delay: reduced ? 0 : 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="relative rounded-[1.35rem] border border-border/80 bg-card shadow-lg">
                <div className="overflow-hidden rounded-[1.3rem] bg-card">
                  <ProductDashboardMock />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
