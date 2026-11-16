"use strict";
import React from "react";

export function CaseStudiesHero() {
  return (
    <section className="page-header-spacing pb-0 relative z-10">
      <div className="container-wrapper">
        <div className="max-w-[820px] mb-10 space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-border-olive/40 border border-border-olive text-brand-volt text-xs font-mono uppercase tracking-wider">
            Proven Outcomes
          </span>
          <h1 className="text-[36px] sm:text-[48px] lg:text-[60px] font-normal leading-[1.15] text-brand-volt tracking-tight">
            Case Studies
          </h1>
          <p className="text-text-secondary text-base sm:text-lg lg:text-[1.125rem] font-light leading-relaxed max-w-[640px]">
            Explore how Emerald System Integrators partners with organizations across industries to simplify technological complexity, optimize operations, and achieve measurable growth.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CaseStudiesHero;
