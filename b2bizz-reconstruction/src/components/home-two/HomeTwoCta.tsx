"use strict";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HOME_TWO_DATA } from "@/data/home-2-data";
import { Button } from "@/components/ui/Button";

export function HomeTwoCta({ className = "" }: { className?: string }) {
  const { cta } = HOME_TWO_DATA;

  return (
    <section className={`pt-14 sm:pt-20 lg:pt-28 pb-12 sm:pb-16 relative z-10 text-center ${className}`}>
      <div className="container-wrapper max-w-[1000px] mx-auto">
        {/* Ambient Volt Glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-brand-volt/10 blur-[130px] rounded-full pointer-events-none -z-10" />

        {/* Heading */}
        <h2 className="text-[26px] sm:text-[38px] lg:text-[48px] font-normal leading-[1.2] text-brand-volt tracking-tight max-w-[800px] mx-auto mb-8">
          {cta.headline}
        </h2>

        {/* Primary CTA Button */}
        <div className="mb-14">
          <Button
            href={cta.buttonHref}
            variant="primary"
            className="rounded-full px-9 py-3.5 shadow-lg shadow-brand-volt/20"
          >
            {cta.buttonText}
          </Button>
        </div>

        {/* Awards Badges Row */}
        <div className="pt-10 border-t border-border-olive/60">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
            {cta.awards.map((award, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center gap-3 opacity-75 hover:opacity-100 transition-opacity"
              >
                <div className="h-16 flex items-center justify-center">
                  <Image
                    src={award.iconSrc}
                    alt={award.title}
                    width={40}
                    height={70}
                    className="h-14 w-auto object-contain brightness-95"
                  />
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-text-muted text-center max-w-[140px] leading-tight">
                  {award.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
