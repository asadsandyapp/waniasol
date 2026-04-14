import { CtaBanner } from "@/components/home/cta-banner";
import { Hero } from "@/components/home/hero";
import { Process } from "@/components/home/process";
import { ServicesPreview } from "@/components/home/services-preview";
import { StatsBar } from "@/components/home/stats-bar";
import { TechStack } from "@/components/home/tech-stack";
import { Testimonials } from "@/components/home/testimonials";
import { TrustedBy } from "@/components/home/trusted-by";
import { site } from "@/lib/site-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise software for global teams",
  description: site.description,
  openGraph: {
    title: `${site.name} — We Build Scalable Digital Products for Global Businesses`,
    description: site.description,
    url: site.url,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <StatsBar />
      <ServicesPreview />
      <Process />
      <Testimonials />
      <TechStack />
      <CtaBanner />
    </>
  );
}
