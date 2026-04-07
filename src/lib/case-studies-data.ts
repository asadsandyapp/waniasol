export type CaseStudyCategory =
  | "all"
  | "fintech"
  | "healthcare"
  | "retail"
  | "enterprise";

export type CaseStudy = {
  id: string;
  title: string;
  category: Exclude<CaseStudyCategory, "all">;
  industry: string;
  problem: string;
  solution: string;
  technologies: string[];
  results: { label: string; value: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "fintech-scale",
    title: "Global payments rail modernization",
    category: "fintech",
    industry: "FinTech",
    problem:
      "Legacy monoliths caused inconsistent latency and slowed feature delivery across regions.",
    solution:
      "Event-driven microservices, zero-downtime migrations, and golden-path developer tooling with full observability.",
    technologies: ["Kubernetes", "Kafka", "PostgreSQL", "TypeScript", "AWS"],
    results: [
      { label: "Latency reduction", value: "42%" },
      { label: "Release frequency", value: "5×" },
      { label: "Incident MTTR", value: "-60%" },
    ],
  },
  {
    id: "healthcare-platform",
    title: "HIPAA-ready patient engagement platform",
    category: "healthcare",
    industry: "Healthcare",
    problem:
      "Fragmented systems and compliance overhead blocked a unified patient experience.",
    solution:
      "Secure multi-tenant SaaS with audit trails, SSO, and integration adapters for EHR systems.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "HIPAA controls", "GCP"],
    results: [
      { label: "Release cadence", value: "3.2× faster" },
      { label: "Patient satisfaction", value: "+18 pts" },
      { label: "Audit findings", value: "0 critical" },
    ],
  },
  {
    id: "retail-omni",
    title: "Omnichannel commerce engine",
    category: "retail",
    industry: "Retail",
    problem:
      "Inventory drift between channels led to stockouts and abandoned carts.",
    solution:
      "Real-time inventory graph, edge caching, and unified checkout APIs across web and stores.",
    technologies: ["GraphQL", "Redis", "React Native", "Terraform", "Azure"],
    results: [
      { label: "Conversion lift", value: "28%" },
      { label: "Cart abandonment", value: "-14%" },
      { label: "API p99", value: "<120ms" },
    ],
  },
  {
    id: "enterprise-analytics",
    title: "Enterprise analytics & AI copilot",
    category: "enterprise",
    industry: "Enterprise SaaS",
    problem:
      "Customers struggled to derive insights from siloed warehouse tables and dashboards.",
    solution:
      "Semantic layer, governed LLM workflows, and embedded analytics with role-based controls.",
    technologies: ["Python", "dbt", "Snowflake", "OpenAI API", "React"],
    results: [
      { label: "Time-to-insight", value: "-55%" },
      { label: "Adoption", value: "3.4×" },
      { label: "Support tickets", value: "-31%" },
    ],
  },
];

export const categoryLabels: Record<CaseStudyCategory, string> = {
  all: "All",
  fintech: "FinTech",
  healthcare: "Healthcare",
  retail: "Retail",
  enterprise: "Enterprise",
};
