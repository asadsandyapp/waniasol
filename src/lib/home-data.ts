import {
  Brain,
  Cloud,
  Code2,
  Cpu,
  Layout,
  Smartphone,
} from "lucide-react";

export const trustedLogos = [
  "Northwind",
  "Globex",
  "Acme Corp",
  "Stark Industries",
  "Umbrella",
  "Wayne Ent.",
] as const;

export const serviceCards = [
  {
    title: "Web Platforms",
    description:
      "High-performance web apps, portals, and design systems built for scale and SEO.",
    icon: Layout,
  },
  {
    title: "Mobile Products",
    description:
      "Native and cross-platform apps with offline-first patterns and analytics.",
    icon: Smartphone,
  },
  {
    title: "SaaS & APIs",
    description:
      "Multi-tenant architecture, billing, auth, and observability from day one.",
    icon: Code2,
  },
  {
    title: "AI & Data",
    description:
      "LLM integrations, pipelines, and decision systems with governance baked in.",
    icon: Brain,
  },
  {
    title: "Cloud & DevOps",
    description:
      "CI/CD, IaC, and SRE practices across AWS, GCP, and Azure footprints.",
    icon: Cloud,
  },
  {
    title: "Platform Engineering",
    description:
      "Developer experience, internal tooling, and reliability programs.",
    icon: Cpu,
  },
] as const;

export const casePreview = [
  {
    slug: "fintech-scale",
    title: "Global payments rail modernization",
    industry: "FinTech",
    metric: "42%",
    metricLabel: "latency reduction",
    summary:
      "Rebuilt core transaction services with event-driven architecture.",
  },
  {
    slug: "healthcare-platform",
    title: "HIPAA-ready patient platform",
    industry: "Healthcare",
    metric: "3.2×",
    metricLabel: "faster releases",
    summary:
      "Shipped a secure patient portal with audit trails and integrations.",
  },
  {
    slug: "retail-omni",
    title: "Omnichannel retail engine",
    industry: "Retail",
    metric: "28%",
    metricLabel: "conversion lift",
    summary:
      "Unified inventory and checkout across web, mobile, and in-store.",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Discovery",
    text: "We align on outcomes, constraints, and success metrics with your stakeholders.",
  },
  {
    step: "02",
    title: "Architecture",
    text: "Blueprint systems for security, scale, and velocity—documented and reviewed.",
  },
  {
    step: "03",
    title: "Build & ship",
    text: "Iterative delivery with demos, QA automation, and production readiness.",
  },
  {
    step: "04",
    title: "Evolve",
    text: "Observability, cost optimization, and roadmap partnership post-launch.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "WaniaSol operates like an extension of our product org. Velocity and quality are both best-in-class.",
    name: "Sarah Chen",
    role: "VP Engineering",
    company: "Series C SaaS, US",
  },
  {
    quote:
      "From architecture to delivery, the team was transparent, rigorous, and consistently ahead of schedule.",
    name: "James Okonkwo",
    role: "CTO",
    company: "Enterprise FinTech, UK",
  },
  {
    quote:
      "They understood regional compliance needs and still moved fast. Rare combination.",
    name: "Layla Al-Mansoori",
    role: "Head of Digital",
    company: "Logistics, UAE",
  },
] as const;

export const techStack = [
  "Next.js",
  "React",
  "Node.js",
  "TypeScript",
  "Python",
  "PostgreSQL",
  "Kubernetes",
  "AWS",
  "Terraform",
  "GraphQL",
] as const;

export const stats = [
  { value: 120, suffix: "+", label: "Products shipped" },
  { value: 15, suffix: "", label: "Countries served" },
  { value: 98, suffix: "%", label: "Client retention" },
  { value: 8, suffix: "+", label: "Years of excellence" },
] as const;
