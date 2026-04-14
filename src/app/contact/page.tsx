import { ContactForm } from "@/components/contact/contact-form";
import { Reveal } from "@/components/animations/reveal";
import { site } from "@/lib/site-config";
import type { Metadata } from "next";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name}—start your project or book a discovery call.`,
};

export default function ContactPage() {
  const contactEmail = "info@waniasol.com";

  return (
    <div className="pb-12 sm:pb-16">
      <section className="border-b border-border/60 bg-foreground/[0.02] py-10 dark:bg-white/[0.02] sm:py-12">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-5">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
              Contact
            </p>
            <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Let&apos;s build{" "}
              <span className="gradient-text">something remarkable</span>
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted sm:text-xl">
              Share your goals and constraints—we’ll propose a pragmatic path
              within two business days.
            </p>
            <div className="mt-7 inline-flex rounded-2xl border border-border/70 bg-card/45 px-4 py-3 shadow-[0_10px_40px_-28px_rgba(0,0,0,0.35)] backdrop-blur-sm">
              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex items-center gap-2.5 text-sm font-medium text-foreground transition hover:opacity-80 sm:text-base"
              >
                <Mail className="h-5 w-5 shrink-0 text-muted" aria-hidden />
                {contactEmail}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-8 sm:py-10">
        <ContactForm />
      </section>
    </div>
  );
}
