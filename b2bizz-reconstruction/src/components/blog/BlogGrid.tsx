"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/data/blog-data";
import { cn } from "@/lib/utils";

export function BlogGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === selectedCategory);

  const featuredPost = filteredPosts[0];
  const regularPosts = filteredPosts.slice(1);

  return (
    <section className="py-12 lg:py-16 relative z-10">
      <div className="container-wrapper space-y-12">
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 border-b border-border-olive/50 pb-6">
          {BLOG_CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 border cursor-pointer",
                  isActive
                    ? "bg-brand-volt text-surface-base border-brand-volt shadow-sm font-semibold"
                    : "bg-surface-card text-text-secondary border-border-olive hover:text-brand-volt hover:border-brand-volt/50"
                )}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Featured Post Card (if available) */}
        {featuredPost && (
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group block rounded-[32px] overflow-hidden bg-surface-card border border-border-olive hover:border-brand-volt/50 transition-all duration-300 shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
              <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] lg:h-[420px] w-full overflow-hidden bg-surface-base">
                <Image
                  src={featuredPost.imageSrc}
                  alt={featuredPost.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
              </div>

              <div className="lg:col-span-5 p-8 sm:p-12 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-border-olive/40 text-brand-volt border border-border-olive">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-text-muted">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl font-normal text-text-primary group-hover:text-brand-volt transition-colors leading-snug">
                  {featuredPost.title}
                </h2>

                <p className="text-sm sm:text-base text-text-secondary leading-relaxed line-clamp-3">
                  {featuredPost.excerpt}
                </p>

                <div className="pt-4 border-t border-border-olive/50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-9 h-9 rounded-full overflow-hidden bg-surface-base border border-border-olive">
                      <Image
                        src={featuredPost.author.avatarSrc}
                        alt={featuredPost.author.name}
                        fill
                        className="object-cover"
                        sizes="36px"
                      />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-text-primary">
                        {featuredPost.author.name}
                      </div>
                      <div className="text-[11px] text-text-muted">
                        {featuredPost.publishedDate}
                      </div>
                    </div>
                  </div>

                  <div className="w-10 h-10 rounded-full border border-border-olive group-hover:border-brand-volt group-hover:bg-brand-volt group-hover:text-surface-base flex items-center justify-center transition-all shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Regular Posts Grid */}
        {regularPosts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block rounded-[26px] overflow-hidden bg-surface-card border border-border-olive hover:border-brand-volt/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-base">
                  <Image
                    src={post.imageSrc}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-surface-base/90 text-brand-volt border border-border-olive/80 backdrop-blur-md">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs text-text-muted">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.publishedDate}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-normal text-text-primary group-hover:text-brand-volt transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-sm text-text-secondary leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border-olive/50 flex items-center justify-between">
                    <div className="text-xs text-text-muted">
                      By {post.author.name}
                    </div>
                    <div className="w-8 h-8 rounded-full border border-border-olive group-hover:border-brand-volt group-hover:bg-brand-volt group-hover:text-surface-base flex items-center justify-center transition-all shrink-0">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default BlogGrid;
