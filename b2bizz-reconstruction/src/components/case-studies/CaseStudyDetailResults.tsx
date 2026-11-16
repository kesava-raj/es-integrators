"use strict";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { CaseStudy, CASE_STUDIES } from "@/data/case-studies-data";

export function CaseStudyDetailResults({ study }: { study: CaseStudy }) {
  const { results, testimonial } = study;

  // Find next case study for cross-navigation
  const currentIndex = CASE_STUDIES.findIndex((item) => item.slug === study.slug);
  const nextStudy =
    CASE_STUDIES[(currentIndex + 1) % CASE_STUDIES.length] || CASE_STUDIES[0];

  return (
    <section className="py-12 lg:py-20 relative z-10">
      <div className="container-wrapper space-y-16">
        {/* Results Metrics Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-brand-volt font-semibold">
            Quantitative Impact
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-brand-volt leading-snug tracking-tight">
            {results.heading}
          </h2>
          <p className="text-body text-text-secondary text-base sm:text-lg leading-relaxed">
            {results.description}
          </p>
        </div>

        {/* 3 Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {results.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-8 rounded-[24px] bg-surface-card border border-border-olive flex flex-col justify-between space-y-4 shadow-lg"
            >
              <div className="text-4xl sm:text-5xl font-bold font-display text-brand-volt">
                {metric.value}
              </div>
              <div className="space-y-1">
                <div className="text-base font-medium text-text-primary">
                  {metric.label}
                </div>
                <div className="text-xs sm:text-sm text-text-muted font-light leading-relaxed">
                  {metric.detail}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Quote Banner */}
        <div className="relative rounded-[28px] overflow-hidden border border-border-olive bg-surface-card p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-10">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-border-olive shrink-0 bg-surface-base">
            <Image
              src={testimonial.avatarSrc}
              alt={testimonial.author}
              fill
              className="object-cover"
              sizes="80px"
            />
          </div>

          <div className="space-y-3 flex-1">
            <blockquote className="text-base sm:text-lg lg:text-xl font-normal text-text-primary leading-snug">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <div className="text-sm text-text-secondary font-medium">
              <span className="text-brand-volt">{testimonial.author}</span> —{" "}
              <span className="text-text-muted">{testimonial.role}, {testimonial.company}</span>
            </div>
          </div>
        </div>

        {/* Next Project Footer Cross-link */}
        <div className="pt-8 border-t border-border-olive/60 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-mono uppercase tracking-wider text-text-muted">
              Next Case Study
            </span>
            <div className="text-xl sm:text-2xl font-normal text-text-primary">
              {nextStudy.title}
            </div>
          </div>

          <Link
            href={`/case-study/${nextStudy.slug}`}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-brand-volt text-surface-base hover:bg-brand-volt-light font-medium text-sm transition-all shadow-md group shrink-0"
          >
            <span>View Next Case Study</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CaseStudyDetailResults;
