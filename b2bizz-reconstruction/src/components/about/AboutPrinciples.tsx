"use strict";
import React from "react";
import { ABOUT_DATA } from "@/data/about-data";

export function AboutPrinciples() {
  const { principles } = ABOUT_DATA;

  return (
    <section className="pt-0 pb-[100px] lg:pb-[150px] relative z-10">
      <div className="container-wrapper">
        {/* Header */}
        <div className="max-w-[700px] mb-12">
          <h2 className="text-[32px] sm:text-[38px] lg:text-[44px] font-normal leading-[1.2] text-brand-volt tracking-tight mb-4">
            {principles.headline}
          </h2>
          <p className="text-text-muted text-base sm:text-lg font-light leading-relaxed">
            {principles.subtitle}
          </p>
        </div>

        {/* 5 Principles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {principles.items.map((item, idx) => (
            <div
              key={item.id}
              className="p-7 rounded-[24px] bg-surface-subtle/70 border border-white/10 hover:border-brand-volt/40 backdrop-blur-md transition-all duration-300 flex flex-col justify-between min-h-[220px] shadow-lg group"
            >
              <div className="text-xs font-mono text-brand-volt mb-6 font-medium">
                0{idx + 1}
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-normal text-text-primary group-hover:text-brand-volt transition-colors mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-muted font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
