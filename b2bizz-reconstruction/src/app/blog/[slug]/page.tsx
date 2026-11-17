import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/data/blog-data";
import { BlogArticleDetail } from "@/components/blog/BlogArticleDetail";
import { CtaBanner } from "@/components/shared/CtaBanner";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | Emerald System Integrators (ESI)`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-canvas text-text-primary bg-noise relative overflow-hidden">
      {/* 1. Article Full Reading Layout */}
      <BlogArticleDetail post={post} />

      {/* 2. Pre-Footer Call to Action Banner */}
      <section className="pt-8 sm:pt-12 lg:pt-16 pb-8 sm:pb-12 relative z-10">
        <div className="container-wrapper">
          <CtaBanner />
        </div>
      </section>
    </div>
  );
}
