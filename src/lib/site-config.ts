export const site = {
  name: "WaniaSol",
  tagline: "Enterprise software engineering for global teams",
  description:
    "We build scalable digital products, platforms, and AI-powered solutions for businesses across the US, UK, Europe, and the Middle East.",
  url: "https://waniasol.com",
  email: "hello@waniasol.com",
  phone: "+1 (415) 555-0142",
  address: "1 Market Street, San Francisco, CA 94105",
  social: {
    linkedin: "https://linkedin.com/company/waniasol",
    twitter: "https://twitter.com/waniasol",
    github: "https://github.com/waniasol",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/product", label: "Product" },
  { href: "/careers", label: "Careers" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerColumns = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/careers", label: "Careers" },
      { href: "/blog", label: "Blog" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/services#web", label: "Web Development" },
      { href: "/services#mobile", label: "Mobile Apps" },
      { href: "/services#saas", label: "SaaS" },
      { href: "/services#ai", label: "AI & Data" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/product", label: "Real Estate CRM" },
      { href: "/blog", label: "Insights" },
      { href: "/contact", label: "Start a Project" },
    ],
  },
] as const;
