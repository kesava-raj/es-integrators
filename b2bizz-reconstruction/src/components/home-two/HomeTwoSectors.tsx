"use client";

import React, { useState } from "react";
import Image from "next/image";
import { HOME_TWO_DATA } from "@/data/home-2-data";

export function HomeTwoSectors() {
  const { sectors } = HOME_TWO_DATA;
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="pt-14 sm:pt-20 lg:pt-28 pb-0 relative z-10 overflow-hidden">
      <div className="container-wrapper">
        {/* Section Header with Title & Arrow Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-normal leading-[1.2] text-brand-volt max-w-[560px] tracking-tight">
            {sectors.headline}
          </h2>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              aria-label="Previous sector"
              className="w-12 h-12 rounded-full border border-border-olive bg-surface-card hover:bg-brand-volt hover:text-surface-base hover:border-brand-volt transition-colors flex items-center justify-center text-text-secondary cursor-pointer shadow-sm"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Next sector"
              className="w-12 h-12 rounded-full border border-border-olive bg-surface-card hover:bg-brand-volt hover:text-surface-base hover:border-brand-volt transition-colors flex items-center justify-center text-text-secondary cursor-pointer shadow-sm"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Slide Track */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }}
        >
          {sectors.items.map((sector) => (
            <div
              key={sector.id}
              className="w-[85vw] sm:w-[420px] lg:w-[480px] shrink-0 snap-start rounded-[28px] overflow-hidden bg-surface-card border border-border-olive p-6 flex flex-col justify-between hover:border-brand-volt/40 transition-all duration-300 shadow-xl"
            >
              {/* Sector Photography */}
              <div className="relative aspect-[16/10] w-full rounded-[20px] overflow-hidden mb-6 bg-surface-base border border-border-olive/50">
                <Image
                  src={sector.imageSrc}
                  alt={sector.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 420px, 480px"
                />
              </div>

              {/* Sector Header: Icon & Title */}
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-surface-subtle border border-border-olive/80 p-2 flex items-center justify-center shrink-0">
                    <Image
                      src={sector.iconSrc}
                      alt=""
                      width={28}
                      height={28}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-normal text-text-primary">
                    {sector.title}
                  </h3>
                </div>

                <p className="text-text-muted text-xs sm:text-sm font-light leading-relaxed line-clamp-3">
                  {sector.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
