"use strict";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ABOUT_DATA } from "@/data/about-data";
import { Button } from "@/components/ui/Button";

export function AboutStory() {
  const { story } = ABOUT_DATA;

  return (
    <section className="py-[100px] lg:py-[150px] relative z-10">
      <div className="container-wrapper">
        {/* Core Narrative Statement */}
        <div className="max-w-[1080px] mb-16">
          <h2 className="text-[26px] sm:text-[34px] lg:text-[42px] font-normal leading-[1.3] text-text-primary tracking-tight">
            {story.statement}
          </h2>
        </div>

        {/* 3 Impact Stats + Consultation Action Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* 3 Stats Row on Left */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {story.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-7 rounded-[24px] bg-surface-subtle/70 border border-white/10 flex flex-col justify-between backdrop-blur-md"
              >
                <div className="text-4xl sm:text-5xl font-medium text-brand-volt mb-3 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-text-muted font-light leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Action Callout Card on Right */}
          <div className="lg:col-span-5 p-8 rounded-[28px] bg-surface-elevated/90 border border-brand-volt/30 flex flex-col justify-between relative overflow-hidden shadow-xl backdrop-blur-md">
            <div className="absolute right-0 top-0 w-32 h-32 bg-brand-volt/10 blur-3xl pointer-events-none" />

            <div className="flex items-start justify-between gap-4 mb-6 relative z-10">
              <h3 className="text-xl sm:text-2xl font-normal text-text-primary leading-snug">
                {story.ctaBanner.title}
              </h3>
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 p-2.5 flex items-center justify-center shrink-0">
                <Image
                  src={story.ctaBanner.iconSrc}
                  alt=""
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="relative z-10">
              <Button
                href={story.ctaBanner.buttonHref}
                variant="primary"
                className="w-full rounded-full py-3.5 text-center"
              >
                {story.ctaBanner.buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
