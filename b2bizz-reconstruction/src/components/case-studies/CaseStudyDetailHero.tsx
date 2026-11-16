"use strict";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CaseStudy } from "@/data/case-studies-data";

export function CaseStudyDetailHero({ study }: { study: CaseStudy }) {
  return (
    <section className="page-header-spacing pb-0 relative z-10">
      <div className="container-wrapper">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-text-muted mb-6">
          <Link href="/case-study" className="hover:text-brand-volt transition-colors">
            Case Studies
          </Link>
          <span className="text-border-olive">/</span>
          <span className="text-brand-volt">{study.client}</span>
        </div>

        {/* Header Block */}
        <div className="max-w-4xl space-y-6 mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-border-olive/40 border border-border-olive text-brand-volt text-xs font-mono uppercase tracking-wider">
            {study.category}
          </span>

          <h1 className="text-[34px] sm:text-[46px] lg:text-[56px] font-normal leading-[1.18] text-brand-volt tracking-tight">
            {study.title}
          </h1>

          <p className="text-text-secondary text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-3xl">
            {study.overview}
          </p>

          {/* Project Quick Facts Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-border-olive/50">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-text-muted">
                Client
              </div>
              <div className="text-sm font-medium text-text-primary mt-1">
                {study.client}
              </div>
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-text-muted">
                Industry
              </div>
              <div className="text-sm font-medium text-text-primary mt-1">
                {study.industry}
              </div>
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-text-muted">
                Duration
              </div>
              <div className="text-sm font-medium text-text-primary mt-1">
                {study.duration}
              </div>
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-text-muted">
                Location
              </div>
              <div className="text-sm font-medium text-text-primary mt-1">
                {study.location}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Photography */}
        <div className="relative aspect-[16/9] sm:aspect-[16/8] w-full rounded-[28px] sm:rounded-[36px] overflow-hidden bg-surface-card border border-border-olive shadow-2xl">
          <Image
            src={study.imageSrc}
            alt={study.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  );
}

export default CaseStudyDetailHero;
