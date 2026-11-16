"use strict";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HOME_TWO_DATA } from "@/data/home-2-data";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function HomeTwoHero() {
  const { hero } = HOME_TWO_DATA;
  const { featuredCaseStudy } = hero;

  return (
    <section className="relative pt-[10px] pb-0 lg:pb-0 z-10">
      <div className="container-wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center min-h-[750px] lg:min-h-[820px]">
          {/* Left Column: Heading, Subtitle, CTA & Partner Logos */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="text-[36px] sm:text-[46px] lg:text-[60px] font-normal leading-[1.18] text-brand-volt tracking-tight mb-6">
              {hero.headline}
            </h1>
            <p className="text-text-muted text-base sm:text-lg lg:text-[1.125rem] leading-relaxed max-w-[540px] mb-8 font-light">
              {hero.subtitle}
            </p>

            <div className="mb-12">
              <Button href={hero.cta.href} variant="primary" className="rounded-full px-8 py-3.5">
                {hero.cta.text}
              </Button>
            </div>

            {/* Featured B2B Clients Row */}
            <div className="pt-6 border-t border-white/10 max-w-[560px]">
              <div className="text-[0.75rem] uppercase tracking-wider text-text-muted mb-4 font-mono font-medium">
                {hero.featuredClientsLabel}
              </div>
              <div className="flex flex-wrap items-center gap-6 sm:gap-8 opacity-75 hover:opacity-100 transition-opacity">
                {hero.clientLogos.map((logo, index) => (
                  <div key={index} className="h-6 flex items-center">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width}
                      height={logo.height}
                      className="h-5 sm:h-6 w-auto object-contain brightness-90 hover:brightness-100 transition-all"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Featured Case Study Preview Card */}
          <div className="lg:col-span-5 relative">
            {/* Ambient Volt Glow */}
            <div className="absolute -inset-4 bg-brand-volt/10 blur-[100px] rounded-full pointer-events-none -z-10" />

            <Link
              href={featuredCaseStudy.href}
              className="group block relative bg-surface-subtle/80 hover:bg-surface-elevated/90 border border-white/10 hover:border-brand-volt/40 rounded-[32px] p-6 lg:p-7 backdrop-blur-md transition-all duration-300 shadow-2xl overflow-hidden"
            >
              {/* Header: Badge & Category */}
              <div className="flex items-center justify-between gap-4 mb-5">
                <Badge variant="volt">
                  {featuredCaseStudy.badge}
                </Badge>
                <span className="text-xs font-mono uppercase tracking-wider text-text-muted px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  {featuredCaseStudy.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-normal text-text-primary group-hover:text-brand-volt transition-colors mb-5">
                {featuredCaseStudy.title}
              </h3>

              {/* Case Study Photography */}
              <div className="relative aspect-[4/3] rounded-[20px] overflow-hidden mb-6 bg-surface-dark border border-white/5">
                <Image
                  src={featuredCaseStudy.imageSrc}
                  alt={featuredCaseStudy.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 768px) 100vw, 480px"
                  priority
                />
              </div>

              {/* Dual Stat Metrics */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                {featuredCaseStudy.metrics.map((metric, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-2xl sm:text-3xl font-medium text-brand-volt leading-none mb-1">
                      {metric.value}
                    </span>
                    <span className="text-xs sm:text-sm text-text-muted font-light leading-snug">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
