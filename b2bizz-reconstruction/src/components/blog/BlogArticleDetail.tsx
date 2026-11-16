"use strict";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar, ArrowLeft, ArrowRight, Share2, Check } from "lucide-react";
import { BlogPost, BLOG_POSTS } from "@/data/blog-data";

export function BlogArticleDetail({ post }: { post: BlogPost }) {
  const { content, author } = post;

  // Find related articles (excluding current)
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="page-header-spacing pb-16 relative z-10">
      <div className="container-wrapper">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-text-muted mb-6">
          <Link href="/blog" className="hover:text-brand-volt transition-colors flex items-center gap-1.5">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Articles</span>
          </Link>
          <span className="text-border-olive">/</span>
          <span className="text-brand-volt">{post.category}</span>
        </div>

        {/* Article Header */}
        <div className="max-w-4xl space-y-6 mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-border-olive/40 border border-border-olive text-brand-volt text-xs font-mono uppercase tracking-wider">
            {post.category}
          </span>

          <h1 className="text-[26px] sm:text-[38px] lg:text-[50px] font-normal leading-[1.18] text-brand-volt tracking-tight">
            {post.title}
          </h1>

          <p className="text-text-secondary text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-3xl">
            {post.excerpt}
          </p>

          {/* Author & Published Info Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-border-olive/50">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full overflow-hidden bg-surface-card border border-border-olive shrink-0">
                <Image
                  src={author.avatarSrc}
                  alt={author.name}
                  fill
                  className="object-cover"
                  sizes="44px"
                />
              </div>
              <div>
                <div className="text-sm font-medium text-text-primary">
                  {author.name}
                </div>
                <div className="text-xs text-text-muted">
                  {author.role}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-wider text-text-muted">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {post.publishedDate}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>

        {/* Featured Visual */}
        <div className="relative aspect-[16/8] sm:aspect-[16/7] w-full rounded-[28px] sm:rounded-[36px] overflow-hidden bg-surface-card border border-border-olive shadow-2xl mb-16">
          <Image
            src={post.imageSrc}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

        {/* Article Body Content */}
        <div className="max-w-3xl mx-auto space-y-12 text-text-secondary leading-relaxed">
          {/* Introduction */}
          <div className="text-lg sm:text-xl font-light text-text-primary leading-relaxed p-6 rounded-2xl bg-surface-card border border-border-olive/70">
            {content.intro}
          </div>

          {/* Sections */}
          {content.sections.map((section, idx) => (
            <div key={idx} className="space-y-4 pt-4">
              <h2 className="text-2xl sm:text-3xl font-normal text-brand-volt tracking-tight leading-snug">
                {section.heading}
              </h2>

              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-base sm:text-lg leading-relaxed">
                  {p}
                </p>
              ))}

              {section.keyTakeaways && section.keyTakeaways.length > 0 && (
                <div className="p-6 rounded-2xl bg-surface-card border border-border-olive space-y-3 mt-4">
                  <div className="text-xs font-mono uppercase tracking-wider text-brand-volt font-semibold">
                    Key Architectural Takeaways:
                  </div>
                  <div className="space-y-2">
                    {section.keyTakeaways.map((point, kIdx) => (
                      <div key={kIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-text-primary">
                        <Check className="w-4 h-4 text-brand-volt shrink-0 mt-1" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Conclusion */}
          <div className="p-8 rounded-[24px] bg-surface-card border border-brand-volt/40 space-y-3">
            <h3 className="text-xl font-medium text-brand-volt">
              Summary & Next Steps
            </h3>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              {content.conclusion}
            </p>
          </div>
        </div>

        {/* Related Articles Footer */}
        {relatedPosts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-border-olive/60 space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-normal text-brand-volt tracking-tight">
                Related Articles
              </h3>
              <Link
                href="/blog"
                className="text-xs font-mono uppercase tracking-wider text-text-muted hover:text-brand-volt transition-colors"
              >
                View all insights →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((related) => (
                <Link
                  key={related.id}
                  href={`/blog/${related.slug}`}
                  className="group block rounded-2xl p-6 bg-surface-card border border-border-olive hover:border-brand-volt/50 transition-colors shadow-lg"
                >
                  <div className="text-xs font-mono uppercase text-brand-volt mb-2">
                    {related.category}
                  </div>
                  <h4 className="text-lg font-normal text-text-primary group-hover:text-brand-volt transition-colors line-clamp-2 mb-2">
                    {related.title}
                  </h4>
                  <p className="text-xs text-text-muted line-clamp-2">
                    {related.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

export default BlogArticleDetail;
