"use client";

import { site } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <motion.form
      className="glass rounded-2xl p-6 sm:p-8"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {sent ? (
        <p className="text-center text-lg font-medium text-foreground" role="status">
          Thank you—our team will reach out within one business day at{" "}
          <a href={`mailto:${site.email}`} className="text-indigo-600 underline dark:text-indigo-400">
            {site.email}
          </a>
          .
        </p>
      ) : (
        <>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label htmlFor="name" className="text-sm font-medium text-foreground">
                Full name
              </label>
              <input
                id="name"
                name="name"
                required
                autoComplete="name"
                className="mt-2 w-full rounded-xl border border-border bg-background/80 px-4 py-3 text-sm outline-none transition focus:border-indigo-500/50 focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Work email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="mt-2 w-full rounded-xl border border-border bg-background/80 px-4 py-3 text-sm outline-none transition focus:border-indigo-500/50 focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="company" className="text-sm font-medium text-foreground">
                Company
              </label>
              <input
                id="company"
                name="company"
                autoComplete="organization"
                className="mt-2 w-full rounded-xl border border-border bg-background/80 px-4 py-3 text-sm outline-none transition focus:border-indigo-500/50 focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Project details
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="mt-2 w-full resize-y rounded-xl border border-border bg-background/80 px-4 py-3 text-sm outline-none transition focus:border-indigo-500/50 focus:ring-2 focus:ring-ring"
                placeholder="Goals, timeline, and tech preferences..."
              />
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted">
              By submitting, you agree to our privacy terms. We never spam.
            </p>
            <Button type="submit" variant="primary" className="sm:min-w-[160px]">
              Start Your Project
            </Button>
          </div>
        </>
      )}
    </motion.form>
  );
}
