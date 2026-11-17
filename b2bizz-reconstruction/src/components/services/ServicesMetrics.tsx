"use strict";
import React from "react";
import Image from "next/image";
import { SERVICES_PAGE_DATA } from "@/data/services-data";

export function ServicesMetrics() {
  const { metrics } = SERVICES_PAGE_DATA;

  return (
    <section className="pt-14 sm:pt-20 lg:pt-28 pb-0 relative z-10">
      <div className="container-wrapper">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-[28px] bg-surface-card border border-border-olive hover:border-brand-volt/40 backdrop-blur-md transition-all duration-300 flex flex-col justify-between min-h-[220px] shadow-lg group"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-volt/10 border border-brand-volt/20 p-2.5 flex items-center justify-center mb-6">
                <Image
                  src={item.iconSrc}
                  alt=""
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>

              <div>
                <div className="text-4xl sm:text-5xl font-medium text-brand-volt mb-2 tracking-tight group-hover:scale-105 transition-transform duration-300 origin-left">
                  {item.value}
                </div>
                <div className="text-sm text-text-muted font-light leading-snug">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center max-w-[680px] mx-auto pt-6">
          <p className="text-sm sm:text-base text-text-muted font-light leading-relaxed">
            Our numbers aren’t just statistics — they reflect real business transformation and measurable ROI.
          </p>
        </div>
      </div>
    </section>
  );
}
