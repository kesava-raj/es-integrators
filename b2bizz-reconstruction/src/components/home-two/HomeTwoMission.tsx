"use strict";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HOME_TWO_DATA } from "@/data/home-2-data";
import { Button } from "@/components/ui/Button";

export function HomeTwoMission() {
  const { mission } = HOME_TWO_DATA;

  return (
    <section className="pt-[100px] lg:pt-[150px] pb-0 relative z-10 text-center">
      <div className="container-wrapper max-w-[960px] mx-auto">
        {/* Main Heading */}
        <h2 className="text-[32px] sm:text-[40px] lg:text-[44px] font-normal leading-[1.22] text-brand-volt tracking-tight mb-8 max-w-[800px] mx-auto">
          {mission.headline}
        </h2>

        {/* Narrative Paragraphs */}
        <div className="space-y-4 max-w-[780px] mx-auto text-text-muted text-base sm:text-lg font-light leading-relaxed mb-10">
          <p>{mission.statement}</p>
          <p>{mission.description}</p>
        </div>

        {/* Strategic Stats */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-12">
          {mission.stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-5 py-3 rounded-full bg-surface-subtle/70 border border-white/10 backdrop-blur-sm"
            >
              <span className="text-xl sm:text-2xl font-medium text-brand-volt">{stat.value}</span>
              <span className="text-xs sm:text-sm text-text-muted font-light">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Sub-label and Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 border-t border-white/10 max-w-[600px] mx-auto">
          <span className="text-xs sm:text-sm text-text-muted font-light">
            Customer satisfaction comes first across every engagement.
          </span>
          <Button href={mission.cta.href} variant="secondary" className="rounded-full px-5 py-2 flex items-center gap-2">
            <span>{mission.cta.text}</span>
            <Image
              src="/icons/lF4qvKFOOsAkrC72wGno0l1d2kg.svg"
              alt="Arrow"
              width={16}
              height={16}
              className="w-4 h-4 invert opacity-75"
            />
          </Button>
        </div>
      </div>
    </section>
  );
}
