"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CASE_STUDIES, CASE_STUDY_CATEGORIES } from "@/data/case-studies-data";
import { cn } from "@/lib/utils";

export function CaseStudiesGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredStudies =
    selectedCategory === "All"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((item) => item.category === selectedCategory);

  return (
    <section className="py-12 lg:py-16 relative z-10">
      <div className="container-wrapper space-y-10">
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 border-b border-border-olive/50 pb-6">
          {CASE_STUDY_CATEGORIES.map((category) => {
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

        {/* Case Studies 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredStudies.map((study) => (
            <Link
              key={study.id}
              href={`/case-study/${study.slug}`}
              className="group block rounded-[28px] overflow-hidden bg-surface-card border border-border-olive hover:border-brand-volt/50 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              {/* Featured Visual */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-base">
                <Image
                  src={study.imageSrc}
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-surface-base/90 text-brand-volt border border-border-olive/80 backdrop-blur-md">
                    {study.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-text-muted">
                    {study.client} • {study.industry}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-normal text-text-primary group-hover:text-brand-volt transition-colors leading-snug">
                    {study.title}
                  </h3>
                  <p className="text-sm text-text-secondary line-clamp-2 leading-relaxed">
                    {study.overview}
                  </p>
                </div>

                {/* Metrics Footer Bar */}
                <div className="pt-5 border-t border-border-olive/60 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-6 sm:gap-8">
                    <div>
                      <div className="text-xl sm:text-2xl font-bold font-display text-brand-volt">
                        {study.stat1.value}
                      </div>
                      <div className="text-[11px] text-text-muted font-light">
                        {study.stat1.label}
                      </div>
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-bold font-display text-brand-volt">
                        {study.stat2.value}
                      </div>
                      <div className="text-[11px] text-text-muted font-light">
                        {study.stat2.label}
                      </div>
                    </div>
                  </div>

                  <div className="w-10 h-10 rounded-full border border-border-olive group-hover:border-brand-volt group-hover:bg-brand-volt group-hover:text-surface-base flex items-center justify-center transition-all shrink-0">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaseStudiesGrid;
