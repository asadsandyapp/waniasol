export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "shipping-saas-globally",
    title: "Shipping SaaS globally without slowing down",
    excerpt:
      "How we structure teams, compliance checkpoints, and release trains for international B2B products.",
    date: "2026-03-18",
    readTime: "6 min read",
    category: "Engineering",
    content: [
      "International SaaS introduces tax, data residency, and localization requirements early. We treat these as product features—not late surprises.",
      "Our default playbook pairs feature teams with a platform group that maintains paved roads: auth, billing, observability, and policy-as-code guardrails.",
      "Release trains with dark launches and progressive delivery reduce risk when regulations differ by region.",
    ],
  },
  {
    slug: "llm-governance",
    title: "LLM governance that product teams actually follow",
    excerpt:
      "Practical patterns for evaluation, red-teaming, and human review without blocking innovation.",
    date: "2026-02-02",
    readTime: "8 min read",
    category: "AI",
    content: [
      "Start with clear use-case boundaries and measurable quality bars. We co-design evaluation sets with domain experts before writing production prompts.",
      "Logging and tracing for LLM calls are non-negotiable. We standardize on structured outputs and schema validation at the edge.",
      "Human-in-the-loop flows and escalation paths keep customer trust high while automation scales.",
    ],
  },
  {
    slug: "core-web-vitals-enterprise",
    title: "Core Web Vitals for enterprise marketing and app surfaces",
    excerpt:
      "A checklist we use with Fortune 500 teams to improve LCP, INP, and CLS without full rewrites.",
    date: "2026-01-12",
    readTime: "5 min read",
    category: "Performance",
    content: [
      "Profile real-user data first. Synthetic tests miss CDN variance and device constraints.",
      "Image and font strategy usually wins: modern formats, priority hints, and subsetting.",
      "Third-party scripts are budgeted and loaded on interaction or idle—never blocking the critical path.",
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
