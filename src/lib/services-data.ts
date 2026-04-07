import {
  Brain,
  Cloud,
  Code2,
  Cpu,
  Globe,
  Smartphone,
} from "lucide-react";

export const services = [
  {
    id: "web",
    title: "Web Development",
    icon: Globe,
    summary:
      "Performance-first web applications, portals, and design systems engineered for SEO, accessibility, and global scale.",
    benefits: [
      "SSR/SSG and edge-ready architectures",
      "WCAG-aligned UI components",
      "Core Web Vitals optimization",
    ],
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    icon: Smartphone,
    summary:
      "Native and cross-platform apps with offline sync, push, deep links, and store-ready release pipelines.",
    benefits: [
      "iOS, Android, and Flutter/React Native",
      "Analytics and experimentation hooks",
      "CI/CD for TestFlight and Play",
    ],
  },
  {
    id: "saas",
    title: "SaaS Development",
    icon: Code2,
    summary:
      "Multi-tenant B2B platforms with billing, entitlements, audit logs, and admin tooling.",
    benefits: [
      "Tenant isolation and data residency options",
      "Stripe/Billing integrations",
      "Feature flags and safe rollouts",
    ],
  },
  {
    id: "ai",
    title: "AI & Data Solutions",
    icon: Brain,
    summary:
      "LLM features, retrieval pipelines, and analytics stacks with governance and evaluation baked in.",
    benefits: [
      "RAG and tool-calling patterns",
      "Data contracts and observability",
      "Human-in-the-loop workflows",
    ],
  },
  {
    id: "devops",
    title: "DevOps & Cloud",
    icon: Cloud,
    summary:
      "Reliable platforms on AWS, GCP, and Azure with IaC, SRE practices, and cost visibility.",
    benefits: [
      "Terraform/Pulumi and GitOps",
      "SLOs, alerting, and incident response",
      "Security baselines and compliance support",
    ],
  },
  {
    id: "platform",
    title: "Platform Engineering",
    icon: Cpu,
    summary:
      "Internal developer platforms, service templates, and paved roads that boost productivity.",
    benefits: [
      "Golden paths and service catalogs",
      "IDP integrations (Backstage patterns)",
      "Developer experience metrics",
    ],
  },
] as const;
