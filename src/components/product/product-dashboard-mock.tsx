"use client";

import { Reveal } from "@/components/animations/reveal";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

type Tab = "properties" | "crm" | "sales";

function TabButton({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-lg border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        active
          ? "border-transparent bg-black text-white shadow-sm dark:bg-white dark:text-black"
          : "border-border bg-card text-foreground hover:bg-foreground/5",
      )}
    >
      {label}
    </button>
  );
}

export function ProductDashboardMock() {
  const [tab, setTab] = useState<Tab>("crm");

  const content = useMemo(() => {
    switch (tab) {
      case "properties":
        return {
          title: "Inventory & Allocation",
          subtitle:
            "Societies, phases, blocks, and quotas with real-time availability.",
          kpis: [
            { label: "Societies", value: "18" },
            { label: "Quotas", value: "1,260" },
            { label: "Available", value: "312" },
          ],
          rows: [
            {
              name: "Bahria Town – Phase 8",
              status: "Active quotas",
              progress: 78,
            },
            {
              name: "DHA Lahore – Phase 6",
              status: "Limited stock",
              progress: 64,
            },
            {
              name: "Gulberg Greens – Block C",
              status: "New allocation",
              progress: 41,
            },
          ],
        };
      case "crm":
        return {
          title: "CRM + Client Intelligence",
          subtitle:
            "Leads, pipeline, activities, and follow-ups with role-based access.",
          kpis: [
            { label: "New leads", value: "146" },
            { label: "Visits booked", value: "34" },
            { label: "Follow-ups due", value: "22" },
          ],
          rows: [
            {
              name: "Ahmed R.",
              status: "Interested · DHA Phase 6",
              progress: 62,
            },
            {
              name: "Fatima K.",
              status: "Visit scheduled · Bahria Phase 8",
              progress: 39,
            },
            {
              name: "Usman S.",
              status: "Negotiation · Gulberg Greens",
              progress: 18,
            },
          ],
        };
      case "sales":
        return {
          title: "Property Sales",
          subtitle:
            "Bookings, confirmations, invoices, and revenue visibility (PKR).",
          kpis: [
            { label: "Pipeline", value: "₨ 48.2M" },
            { label: "Confirmed", value: "12" },
            { label: "Invoices", value: "28" },
          ],
          rows: [
            {
              name: "Booking created",
              status: "Pending confirmation",
              progress: 62,
            },
            {
              name: "Invoice sent",
              status: "Awaiting payment",
              progress: 36,
            },
            {
              name: "Sale confirmed",
              status: "Completed",
              progress: 18,
            },
          ],
        };
      default: {
        const _exhaustive: never = tab;
        return _exhaustive;
      }
    }
  }, [tab]);

  const kpiCards = content.kpis.map((k) => (
    <div
      key={k.label}
      className="rounded-xl border border-border bg-card p-4 shadow-sm transition-transform duration-300 hover:-translate-y-0.5"
    >
      <p className="text-xs font-semibold text-muted">{k.label}</p>
      <p className="mt-2 text-2xl font-semibold tabular-nums text-foreground">
        {k.value}
      </p>
    </div>
  ));

  return (
    <div className="rounded-3xl border border-border bg-gradient-to-b from-card to-foreground/[0.03] p-6 shadow-inner backdrop-blur-sm dark:to-white/[0.03]">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-foreground">Real Estate CRM</p>
          <p className="mt-1 text-xs font-semibold text-muted">
            Live preview · Pakistan-ready portal
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <TabButton
            active={tab === "properties"}
            label="Properties"
            onClick={() => setTab("properties")}
          />
          <TabButton active={tab === "crm"} label="CRM" onClick={() => setTab("crm")} />
          <TabButton
            active={tab === "sales"}
            label="Sales"
            onClick={() => setTab("sales")}
          />
        </div>
      </div>

      <Reveal className="mt-5">
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-lg font-semibold text-foreground">{content.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {content.subtitle}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </Reveal>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">{kpiCards}</div>

      <Reveal y={18} delay={0.1} className="mt-4">
        <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-foreground">Overview</p>
            <span className="text-xs font-semibold text-muted">Updated just now</span>
          </div>

          <div className="mt-4 space-y-2">
            {content.rows.map((r) => (
              <div key={r.name} className="rounded-xl border border-border bg-foreground/[0.03] p-3 dark:bg-white/[0.04]">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-foreground">{r.name}</p>
                    <p className="mt-1 text-xs font-semibold text-muted">
                      {r.status}
                    </p>
                  </div>
                  <div className="text-xs font-semibold text-muted">{r.progress}%</div>
                </div>
                <div className="mt-3 h-2 rounded-full bg-foreground/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${r.progress}%` }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="h-2 rounded-full bg-foreground"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
