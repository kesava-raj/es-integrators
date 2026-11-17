"use strict";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ABOUT_DATA } from "@/data/about-data";
import { Button } from "@/components/ui/Button";

export function AboutHero() {
  const { hero } = ABOUT_DATA;

  return (
    <section className="page-header-spacing pb-0 relative z-10 overflow-hidden">
      <div className="container-wrapper">
        {/* Top Header Block */}
        <div className="max-w-[840px] mb-12 space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-border-olive/40 border border-border-olive text-brand-volt text-xs font-mono uppercase tracking-wider">
            {hero.badge}
          </span>
          <h1 className="text-[36px] sm:text-[48px] lg:text-[60px] font-normal leading-[1.15] text-brand-volt tracking-tight">
            {hero.headline}
          </h1>
          <p className="text-text-secondary text-base sm:text-lg lg:text-[1.125rem] font-light leading-relaxed max-w-[680px]">
            {hero.subtitle}
          </p>
          <div className="pt-2">
            <Button href={hero.cta.href} variant="primary" className="rounded-full px-8 py-3.5">
              {hero.cta.text}
            </Button>
          </div>
        </div>


        {/* 3-Photo Collage Row */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 mb-12 items-stretch">
          <div className="sm:col-span-4 relative aspect-[4/3] sm:aspect-auto sm:h-[380px] lg:h-[415px] rounded-[24px] overflow-hidden bg-surface-subtle border border-border-olive shadow-xl">
            <Image
              src={hero.collage[0].src}
              alt={hero.collage[0].alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 33vw"
              priority
            />
          </div>
          <div className="sm:col-span-5 relative aspect-[4/3] sm:aspect-auto sm:h-[380px] lg:h-[415px] rounded-[24px] overflow-hidden bg-surface-subtle border border-border-olive shadow-xl">
            <Image
              src={hero.collage[1].src}
              alt={hero.collage[1].alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 42vw"
              priority
            />
          </div>
          <div className="sm:col-span-3 relative aspect-[4/3] sm:aspect-auto sm:h-[380px] lg:h-[415px] rounded-[24px] overflow-hidden bg-surface-subtle border border-border-olive shadow-xl">
            <Image
              src={hero.collage[2].src}
              alt={hero.collage[2].alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 25vw"
              priority
            />
          </div>
        </div>

        {/* Sector Ticker / Divider Strip */}
        <div className="py-6 border-y border-border-olive flex flex-col md:flex-row md:items-center justify-between gap-4">
          <span className="text-xs font-mono uppercase tracking-wider text-text-muted shrink-0">
            {hero.sectorsLabel}
          </span>
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm font-light text-text-primary">
            {hero.sectors.map((sector, idx) => (
              <React.Fragment key={idx}>
                <span className="hover:text-brand-volt transition-colors cursor-default">
                  {sector}
                </span>
                {idx < hero.sectors.length - 1 && (
                  <span className="text-border-olive">/</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
