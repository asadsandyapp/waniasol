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
  const [featured, ...restPosts] = blogPosts;

  return (
    <div className="pb-12 sm:pb-16">
      <section className="border-b border-border/60 bg-foreground/[0.02] py-10 dark:bg-white/[0.02] sm:py-12">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-5">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
              Insights
            </p>
            <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Insights &amp; <span className="gradient-text">playbooks</span>
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted sm:text-xl">
              Practical articles for engineering leaders—performance, AI
              adoption, and how we ship with global teams.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-3 py-8 sm:px-4 lg:px-5 lg:py-12">
        <Reveal>
          <article className="rounded-3xl border border-border/80 bg-card/45 p-6 shadow-[0_10px_40px_-28px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:p-8 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              Featured · {featured.category} · {featured.readTime}
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight sm:text-4xl">
              <Link href={`/blog/${featured.slug}`} className="transition hover:opacity-80">
                {featured.title}
              </Link>
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
              {featured.excerpt}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted">
              <time dateTime={featured.date}>
                {new Date(featured.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span>{site.name}</span>
            </div>
          </article>
        </Reveal>

        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {restPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.05}>
              <li>
                <article className="h-full rounded-2xl border border-border/75 bg-background/75 p-5 transition hover:-translate-y-0.5 hover:shadow-sm sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                    {post.category} · {post.readTime}
                  </p>
                  <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-bold leading-tight">
                    <Link href={`/blog/${post.slug}`} className="transition hover:opacity-80">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-muted leading-relaxed">{post.excerpt}</p>
                  <time className="mt-5 block text-sm text-muted" dateTime={post.date}>
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
