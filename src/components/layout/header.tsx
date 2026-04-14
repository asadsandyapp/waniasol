"use client";

import { BrandLogo } from "@/components/layout/brand-logo";
import { site, navLinks } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.08] bg-white/90 shadow-[0_1px_0_0_rgba(0,0,0,0.04)] backdrop-blur-xl dark:border-white/[0.08] dark:bg-[#0a0a0a]/92 dark:shadow-[0_1px_0_0_rgba(255,255,255,0.04)]">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-1 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-foreground focus:px-2 focus:py-2 focus:text-background"
      >
        Skip to content
      </a>
      <div className="relative flex min-h-[3.25rem] w-full items-center overflow-visible py-2 pl-3 pr-3 sm:pl-4 sm:pr-4 lg:pl-5 lg:pr-5">
        <Link
          href="/"
          prefetch={false}
          className="relative z-10 ml-2.5 inline-flex shrink-0 items-center gap-2 overflow-visible rounded-xl py-1 sm:ml-3.5"
          aria-label={`${site.name} home`}
        >
          <BrandLogo priority />
        </Link>

        <div className="absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-2 md:flex">
          <nav className="flex items-center gap-1" aria-label="Main">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={false}
                  className={cn(
                    "whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold tracking-tight transition-colors",
                    active
                      ? "bg-black/[0.07] text-black dark:bg-white/12 dark:text-white"
                      : "text-neutral-600 hover:bg-black/[0.05] hover:text-black dark:text-neutral-400 dark:hover:bg-white/[0.06] dark:hover:text-white",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <span className="ml-1.5 inline-flex shrink-0">
            <ThemeToggle />
          </span>
        </div>

        <div className="relative z-10 ml-auto flex shrink-0 items-center gap-1.5 sm:gap-2">
          <span className="inline-flex md:hidden">
            <ThemeToggle />
          </span>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-black/12 bg-white/90 text-black shadow-sm md:hidden dark:border-white/15 dark:bg-white/5 dark:text-white"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden"
          >
            <nav
              className="flex flex-col gap-0.5 px-0.5 py-3 sm:px-1"
              aria-label="Mobile"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={false}
                  className="rounded-lg px-3 py-2.5 text-base font-medium text-black hover:bg-black/5 dark:text-white dark:hover:bg-white/10"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
