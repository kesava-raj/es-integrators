"use strict";
import React from "react";
import Image from "next/image";
import { HOME_TWO_DATA } from "@/data/home-2-data";

export function HomeTwoMetrics() {
  const { metrics } = HOME_TWO_DATA;

  return (
    <section className="py-14 sm:py-20 lg:py-28 relative z-10">
      <div className="container-wrapper">
        {/* 4 Counter Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className="relative p-7 rounded-[28px] bg-surface-card border border-border-olive hover:border-brand-volt/40 backdrop-blur-md transition-all duration-300 flex flex-col justify-between min-h-[220px] shadow-lg group"
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

        {/* Tagline */}
        <div className="text-center max-w-[680px] mx-auto">
          <p className="text-base sm:text-lg text-text-muted font-light leading-relaxed">
            Delivering high-quality solutions, timely delivery, and dependable operations across global delivery centers.
          </p>
        </div>
      </div>
    </section>
  );
}
