"use client";

import React, { useState } from "react";
import Image from "next/image";
import { HOME_TWO_DATA } from "@/data/home-2-data";

export function HomeTwoSectors() {
  const { sectors } = HOME_TWO_DATA;
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : sectors.items.length - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < sectors.items.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="pt-[100px] lg:pt-[150px] pb-0 relative z-10 overflow-hidden">
      <div className="container-wrapper">
        {/* Section Header with Title & Arrow Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <h2 className="text-[32px] sm:text-[38px] lg:text-[44px] font-normal leading-[1.2] text-brand-volt max-w-[560px] tracking-tight">
            {sectors.headline}
          </h2>

          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              aria-label="Previous sector"
              className="w-12 h-12 rounded-full border border-white/10 bg-white/5 hover:bg-brand-volt hover:text-canvas hover:border-brand-volt transition-colors flex items-center justify-center text-text-muted hover:text-canvas"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next sector"
              className="w-12 h-12 rounded-full border border-white/10 bg-white/5 hover:bg-brand-volt hover:text-canvas hover:border-brand-volt transition-colors flex items-center justify-center text-text-muted hover:text-canvas"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Slide Track */}
        <div className="relative -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / (typeof window !== "undefined" && window.innerWidth < 640 ? 1 : typeof window !== "undefined" && window.innerWidth < 1024 ? 1.5 : 2.2))}%)`,
            }}
          >
            {sectors.items.map((sector) => (
              <div
                key={sector.id}
                className="w-[85vw] sm:w-[480px] lg:w-[580px] shrink-0 rounded-[28px] overflow-hidden bg-surface-subtle/70 border border-white/10 p-6 flex flex-col justify-between backdrop-blur-md hover:border-brand-volt/40 transition-all duration-300 shadow-xl"
              >
                {/* Sector Photography */}
                <div className="relative aspect-[16/10] w-full rounded-[20px] overflow-hidden mb-6 bg-surface-dark border border-white/5">
                  <Image
                    src={sector.imageSrc}
                    alt={sector.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 480px, 580px"
                  />
                </div>

                {/* Sector Header: Icon & Title */}
                <div>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 p-2 flex items-center justify-center shrink-0">
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
      </div>
    </section>
  );
}
