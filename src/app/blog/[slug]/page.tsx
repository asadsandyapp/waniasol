import { Reveal } from "@/components/animations/reveal";
import { blogPosts, getPostBySlug } from "@/lib/blog-data";
import { site } from "@/lib/site-config";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="pb-20 sm:pb-28">
      <header className="border-b border-border/60 bg-foreground/[0.02] py-16 dark:bg-white/[0.02] sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
              {post.category}
            </p>
            <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-muted">{post.excerpt}</p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span>{post.readTime}</span>
              <span>{site.name}</span>
            </div>
          </Reveal>
        </div>
      </header>
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div>
          {post.content.map((para, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <p className="mb-6 text-lg leading-relaxed text-muted">{para}</p>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <Link
            href="/blog"
            className="mt-10 inline-flex text-sm font-semibold text-indigo-600 hover:underline dark:text-indigo-400"
          >
            ← Back to all articles
          </Link>
        </Reveal>
      </div>
    </article>
  );
}
