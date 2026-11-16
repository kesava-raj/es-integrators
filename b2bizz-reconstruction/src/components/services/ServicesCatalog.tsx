"use strict";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SERVICES_LIST, SERVICES_PAGE_DATA } from "@/data/services-data";
import { Button } from "@/components/ui/Button";

export function ServicesCatalog() {
  const { hero } = SERVICES_PAGE_DATA;

  return (
    <section className="pt-[10px] pb-0 relative z-10">
      <div className="container-wrapper">
        {/* Top Header */}
        <div className="max-w-[760px] mb-12">
          <h1 className="text-[36px] sm:text-[48px] lg:text-[60px] font-normal leading-[1.18] text-brand-volt tracking-tight mb-4">
            {hero.headline}
          </h1>
          <p className="text-text-muted text-base sm:text-lg font-light leading-relaxed">
            {hero.subtitle}
          </p>
        </div>

        {/* 5 Services Stacked Cards */}
        <div className="space-y-6">
          {SERVICES_LIST.map((service, idx) => (
            <Link
              key={service.id}
              href={`/service/${service.slug}`}
              className="group block p-6 sm:p-8 rounded-[28px] bg-surface-subtle/70 hover:bg-surface-elevated/90 border border-white/10 hover:border-brand-volt/40 backdrop-blur-md transition-all duration-300 shadow-xl overflow-hidden"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 lg:gap-8 justify-between">
                {/* Left: Thumbnail Image */}
                <div className="relative w-full md:w-[220px] h-[160px] rounded-[20px] overflow-hidden shrink-0 bg-surface-dark border border-white/5">
                  <Image
                    src={service.imageSrc}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 100vw, 220px"
                  />
                </div>

                {/* Middle: Content & Scope Tags */}
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-mono text-brand-volt mb-2">
                    0{idx + 1}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-normal text-text-primary group-hover:text-brand-volt transition-colors mb-3 leading-snug">
                    {service.title}
                  </h2>
                  <p className="text-text-muted text-sm font-light leading-relaxed mb-4 max-w-[640px]">
                    {service.subtitle}
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    {service.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[0.7rem] font-mono uppercase tracking-wider text-text-muted px-2.5 py-1 rounded-full bg-white/5 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: CTA Arrow Button */}
                <div className="shrink-0 pt-2 md:pt-0">
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-text-muted group-hover:text-brand-volt transition-colors">
                    <span>View detail</span>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:translate-x-1 transition-transform"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
