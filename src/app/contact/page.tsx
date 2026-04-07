import { ContactForm } from "@/components/contact/contact-form";
import { Reveal } from "@/components/animations/reveal";
import { site } from "@/lib/site-config";
import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name}—start your project or book a discovery call.`,
};

export default function ContactPage() {
  return (
    <div className="pb-20 sm:pb-28">
      <section className="border-b border-border/60 bg-foreground/[0.02] py-16 dark:bg-white/[0.02] sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight sm:text-5xl">
              Let&apos;s build{" "}
              <span className="gradient-text">something remarkable</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted">
              Share your goals and constraints—we’ll propose a pragmatic path
              within two business days. Use the form below for the fastest
              response.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 lg:grid-cols-5 lg:px-8 lg:py-20">
        <div className="lg:col-span-2">
          <Reveal>
            <h2 className="font-[family-name:var(--font-display)] text-xl font-bold">
              Contact
            </h2>
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-3 text-foreground hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  <Mail className="h-5 w-5 shrink-0 text-muted" aria-hidden />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-3 text-foreground hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  <Phone className="h-5 w-5 shrink-0 text-muted" aria-hidden />
                  {site.phone}
                </a>
              </li>
              <li className="text-muted leading-relaxed">{site.address}</li>
            </ul>
          </Reveal>
        </div>
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="sr-only">Location map</h2>
          <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
            <iframe
              title="Office location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019764657058!2d-122.396229684681!3d37.793635979756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064fd6a8793%3A0x4c9f0e7b0b0b0b0b!2s1%20Market%20St%2C%20San%20Francisco%2C%20CA%2094105!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="360"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
