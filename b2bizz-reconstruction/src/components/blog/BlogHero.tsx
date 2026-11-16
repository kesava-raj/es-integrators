"use strict";

import React from "react";

export function BlogHero() {
  return (
    <section className="page-header-spacing pb-0 relative z-10">
      <div className="container-wrapper">
        <div className="max-w-[820px] mb-10 space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-border-olive/40 border border-border-olive text-brand-volt text-xs font-mono uppercase tracking-wider">
            Insights & Perspectives
          </span>
          <h1 className="text-[36px] sm:text-[48px] lg:text-[60px] font-normal leading-[1.15] text-brand-volt tracking-tight">
            Technology & Consulting Insights
          </h1>
          <p className="text-text-secondary text-base sm:text-lg lg:text-[1.125rem] font-light leading-relaxed max-w-[640px]">
            Thought leadership, architectural blueprints, and strategic frameworks from Emerald System Integrators on engineering digital transformation and empowering what&apos;s next.
          </p>
        </div>
      </div>
    </section>
  );
}

export default BlogHero;
