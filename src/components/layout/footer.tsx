import { BrandLogo } from "@/components/layout/brand-logo";
import { IconGithub, IconLinkedIn, IconX } from "@/components/icons/social";
import { footerColumns, site } from "@/lib/site-config";
import Link from "next/link";

const icons = {
  linkedin: IconLinkedIn,
  twitter: IconX,
  github: IconGithub,
} as const;

export function Footer() {
  return (
    <footer className="overflow-visible border-t border-border bg-foreground/[0.02] dark:bg-black/20">
      <div className="mx-auto max-w-7xl px-0.5 py-7 sm:px-1 lg:px-1.5">
        <div className="grid gap-5 overflow-visible md:grid-cols-2 lg:grid-cols-5">
          <div className="overflow-visible lg:col-span-2">
            <Link
              href="/"
              className="inline-flex max-w-full overflow-visible"
              aria-label={`${site.name} home`}
            >
              <BrandLogo size="footer" />
            </Link>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">
              {site.tagline}. Engineering excellence for teams that ship at
              global scale.
            </p>
            <div className="mt-6 flex gap-3">
              {(Object.keys(site.social) as (keyof typeof site.social)[]).map(
                (key) => {
                  const Icon = icons[key];
                  return (
                    <a
                      key={key}
                      href={site.social[key]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card/50 text-muted transition hover:text-foreground hover:shadow-md"
                      aria-label={key}
                    >
                      <Icon className="h-[18px] w-[18px] shrink-0" />
                    </a>
                  );
                },
              )}
            </div>
          </div>
          {footerColumns.map((col) => (
            <div key={col.title}>
              <p className="font-[family-name:var(--font-display)] text-sm font-semibold text-foreground">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-muted transition hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-col gap-3 border-t border-border pt-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="hover:text-foreground">
              Privacy
            </Link>
            <Link href="/contact" className="hover:text-foreground">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
