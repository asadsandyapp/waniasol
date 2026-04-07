import { Reveal } from "@/components/animations/reveal";
import { blogPosts } from "@/lib/blog-data";
import { site } from "@/lib/site-config";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: `Insights on engineering, AI, and delivery from ${site.name}.`,
};

export default function BlogPage() {
  return (
    <div className="pb-20 sm:pb-28">
      <section className="border-b border-border/60 bg-foreground/[0.02] py-16 dark:bg-white/[0.02] sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight sm:text-5xl">
              Insights &amp; <span className="gradient-text">playbooks</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted">
              Practical articles for engineering leaders—performance, AI
              adoption, and how we ship with global teams.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <ul className="space-y-10">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.05}>
              <li>
                <article>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                    {post.category} · {post.readTime}
                  </p>
                  <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-indigo-600 dark:hover:text-indigo-400"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-2 text-muted leading-relaxed">{post.excerpt}</p>
                  <time
                    className="mt-4 block text-sm text-muted"
                    dateTime={post.date}
                  >
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </article>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </div>
  );
}
