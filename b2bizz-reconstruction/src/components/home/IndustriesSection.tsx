"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HOME_DATA } from "@/data/home-data";

export const IndustriesSection: React.FC = () => {
  const { industries } = HOME_DATA;
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 360;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="section-padding relative z-10 overflow-hidden">
      <div className="container-wrapper space-y-8 sm:space-y-12">
        {/* Header with Title on Left and Prev/Next Arrows on Right */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <h2 className="text-h2 text-brand-volt leading-[1.3] font-normal tracking-tight max-w-2xl">
            Accelerating B2B growth
            <br />
            across diverse industries
          </h2>

          {/* Slider Prev / Next Arrows */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-xl bg-[#161A18] border border-border-olive flex items-center justify-center text-text-secondary hover:text-brand-volt hover:border-brand-volt transition-colors"
              aria-label="Previous Industry"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-xl bg-[#161A18] border border-border-olive flex items-center justify-center text-text-secondary hover:text-brand-volt hover:border-brand-volt transition-colors"
              aria-label="Next Industry"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Carousel Track with 338px x 380px Cards */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }}
        >
          {industries.map((item) => (
            <div
              key={item.id}
              className="w-[280px] sm:w-[320px] md:w-[338px] h-[360px] sm:h-[380px] shrink-0 snap-start rounded-[24px] overflow-hidden relative border border-border-olive/60 group cursor-pointer"
            >
              <Image
                src={item.imageSrc}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 280px, 338px"
              />
              {/* Subtle Dark Gradient at Bottom to ensure label legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Title pinned to Bottom-Left matching Reference */}
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-base sm:text-lg font-normal text-brand-volt tracking-tight group-hover:text-brand-volt-light transition-colors">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
