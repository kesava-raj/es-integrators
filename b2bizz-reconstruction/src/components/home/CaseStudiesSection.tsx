"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { HOME_DATA } from "@/data/home-data";

export const CaseStudiesSection: React.FC = () => {
  const { caseStudies } = HOME_DATA;
  const [currentIdx, setCurrentIdx] = useState(0);

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
  };

  const activeStudy = caseStudies[currentIdx] || caseStudies[0];

  return (
    <section className="section-padding relative z-10 overflow-hidden">
      <div className="container-wrapper">
        {/* Master Card Container matching Reference (745px total height) */}
        <div className="rounded-[28px] sm:rounded-[32px] border border-border-olive/60 bg-[#0E100F] p-5 sm:p-7 lg:p-8 space-y-6 shadow-2xl">
          {/* Top Category Badge and Dynamic Section Heading */}
          <div className="space-y-2.5">
            <div>
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#161A18] border border-border-olive/70 text-xs font-normal text-text-secondary">
                {activeStudy.category}
              </span>
            </div>

            <h2 className="text-h2 text-brand-volt leading-[1.25] font-normal tracking-tight max-w-3xl">
              {activeStudy.title}
            </h2>
          </div>

          {/* Showcase Display: Left Photography + Right Case Meta */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center bg-[#070807] rounded-[22px] sm:rounded-[24px] p-4 sm:p-5 lg:p-6 border border-border-olive/40">
            {/* Photography (630px x 454px native aspect) */}
            <div className="lg:col-span-6 relative rounded-[18px] sm:rounded-[20px] overflow-hidden w-full h-[220px] sm:h-[280px] lg:h-[320px]">
              <Image
                src={activeStudy.imageSrc}
                alt={activeStudy.title}
                fill
                className="object-cover transition-all duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Right Meta Column */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-4 sm:space-y-5">
              <div className="space-y-3">
                <h3 className="text-lg sm:text-xl font-normal text-text-primary tracking-tight">
                  {activeStudy.client}
                </h3>

                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="space-y-0.5">
                    <span className="text-xs text-text-muted">Challenge:</span>
                    <p className="text-text-primary leading-relaxed">
                      {activeStudy.challenge}
                    </p>
                  </div>

                  <div className="space-y-0.5">
                    <span className="text-xs text-text-muted">Solution:</span>
                    <p className="text-text-primary leading-relaxed">
                      {activeStudy.solution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Uplift Metric Chips + View Detail */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                <div className="flex items-center gap-3">
                  <div className="px-3.5 py-2 rounded-xl bg-[#161A18] border border-border-olive/60 min-w-[90px]">
                    <div className="text-lg sm:text-xl font-normal text-brand-volt">
                      {activeStudy.stat1.value}
                    </div>
                    <div className="text-[11px] text-text-muted pt-0.5">
                      {activeStudy.stat1.label}
                    </div>
                  </div>

                  <div className="px-3.5 py-2 rounded-xl bg-[#161A18] border border-border-olive/60 min-w-[90px]">
                    <div className="text-lg sm:text-xl font-normal text-brand-volt">
                      {activeStudy.stat2.value}
                    </div>
                    <div className="text-[11px] text-text-muted pt-0.5">
                      {activeStudy.stat2.label}
                    </div>
                  </div>
                </div>

                <Link
                  href={`/case-study/${activeStudy.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-normal text-brand-volt hover:text-brand-volt-light transition-colors self-start sm:self-auto"
                >
                  <span>View detail</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Footer Row: View All Button on Left, Prev/Next Arrows on Right */}
          <div className="flex items-center justify-between gap-4 pt-1">
            <Link
              href="/case-study"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-brand-volt text-canvas font-medium text-xs sm:text-sm hover:bg-brand-volt-light transition-all duration-300"
            >
              View all case studies
            </Link>

            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="w-9 h-9 rounded-xl bg-[#161A18] border border-border-olive flex items-center justify-center text-text-secondary hover:text-brand-volt hover:border-brand-volt transition-colors"
                aria-label="Previous case study"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="w-9 h-9 rounded-xl bg-[#161A18] border border-border-olive flex items-center justify-center text-text-secondary hover:text-brand-volt hover:border-brand-volt transition-colors"
                aria-label="Next case study"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
