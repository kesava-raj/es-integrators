"use client";

import React from "react";
import Image from "next/image";

export const MetricsSection: React.FC = () => {
  return (
    <section className="section-padding relative z-10 overflow-hidden">
      <div className="container-wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: 3D Constellation Globe Illustration */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
              <Image
                src="/icons/icon-xdZBOwkMZJer.svg"
                alt="Global B2B Constellation Map"
                width={420}
                height={400}
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Column: Title, Subtitle, and 2-Metric Split */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h2 className="text-h2-compact text-brand-volt leading-[1.25] font-normal tracking-tight">
                Proven performance,
                <br />
                Measurable results
              </h2>
              <p className="text-body text-text-secondary text-sm sm:text-base leading-relaxed max-w-xl">
                Our work is backed by measurable results. These numbers reflect the trust, success, and outcomes we&apos;ve delivered for our B2B partners across industries and regions.
              </p>
            </div>

            {/* 2 Key Metrics with Dividers matching Reference */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              <div className="space-y-3">
                <div className="text-4xl sm:text-5xl font-normal text-brand-volt tracking-tight">
                  4X
                </div>
                <div className="border-b border-border-olive/50 pb-2" />
                <p className="text-sm sm:text-[15px] text-text-secondary leading-snug">
                  Average ROI on digital strategy projects
                </p>
              </div>

              <div className="space-y-3">
                <div className="text-4xl sm:text-5xl font-normal text-brand-volt tracking-tight">
                  2
                </div>
                <div className="border-b border-border-olive/50 pb-2" />
                <p className="text-sm sm:text-[15px] text-text-secondary leading-snug">
                  Global presence hubs (Chennai, India & Michigan, USA)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
