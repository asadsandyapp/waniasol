import { blogPosts } from "@/lib/blog-data";
import { site } from "@/lib/site-config";
import type { MetadataRoute } from "next";

const staticRoutes = [
  "",
  "/about",
  "/services",
  "/case-studies",
  "/careers",
  "/contact",
  "/blog",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const lastModified = new Date();

  const pages = staticRoutes.map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const posts = blogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...pages, ...posts];
}
