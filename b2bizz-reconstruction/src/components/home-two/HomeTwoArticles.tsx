"use strict";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HOME_TWO_DATA } from "@/data/home-2-data";
import { Button } from "@/components/ui/Button";

export function HomeTwoArticles() {
  const { articles } = HOME_TWO_DATA;

  return (
    <section className="pt-0 pb-14 sm:pb-20 lg:pb-28 relative z-10">
      <div className="container-wrapper">
        {/* Header with Title and "Explore all blogs" */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-[26px] sm:text-[36px] lg:text-[46px] font-normal leading-[1.2] text-brand-volt tracking-tight mb-2">
              {articles.headline}
            </h2>
            <p className="text-sm text-text-muted font-light">
              {articles.note}
            </p>
          </div>

          <div>
            <Button
              href={articles.cta.href}
              variant="secondary"
              className="rounded-full px-6 py-2.5 flex items-center gap-2"
            >
              <span>{articles.cta.text}</span>
              <Image
                src={articles.cta.arrowIcon}
                alt=""
                width={16}
                height={16}
                className="w-4 h-4 dark:invert opacity-75"
              />
            </Button>
          </div>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.items.map((article) => (
            <Link
              key={article.id}
              href={article.href}
              className="group block rounded-[28px] overflow-hidden bg-surface-card border border-border-olive hover:border-brand-volt/40 p-5 backdrop-blur-md transition-all duration-300 shadow-xl"
            >
              {/* Article Featured Image */}
              <div className="relative aspect-[16/10] w-full rounded-[20px] overflow-hidden mb-5 bg-surface-subtle border border-border-olive">
                <Image
                  src={article.imageSrc}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                />
              </div>

              {/* Meta: Category & Date */}
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-text-muted mb-3">
                <span className="text-brand-volt">{article.category}</span>
                <span>{article.date}</span>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-normal text-text-primary group-hover:text-brand-volt transition-colors leading-snug line-clamp-2">
                {article.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
