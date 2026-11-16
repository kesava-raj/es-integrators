"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HOME_DATA } from "@/data/home-data";

export const AboutSection: React.FC = () => {
  const { aboutOverview } = HOME_DATA;

  const bullets = [
    "Communicate value clearly and quickly",
    "Solutions aligned with your business goals",
    "Frameworks built for long-term success",
    "Working with you, not just for you",
  ];

  return (
    <section className="section-padding relative z-10 overflow-hidden">
      <div className="container-wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Heading and Large Photography */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-8">
            <h2 className="text-h2 text-brand-volt leading-[1.3] font-normal tracking-tight">
              Informed strategy, Operational
              <br className="hidden sm:inline" />
              strength, and sustainable results.
            </h2>

            <div className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden border border-border-olive/60 bg-[#0E100F] shadow-xl w-full h-[280px] sm:h-[340px] lg:h-[364px]">
              <Image
                src="/images/about-team.jpg"
                alt="Informed B2B Strategy & Operational Strength"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
          </div>

          {/* Right Column: Narrative, List with Dividers, and Full-Width CTA Button */}
          <div className="lg:col-span-5 lg:pt-4 flex flex-col justify-between h-full space-y-8">
            <p className="text-body text-text-secondary text-base sm:text-lg leading-relaxed">
              We specialize in empowering B2B companies with results-driven consulting solutions tailored to modern business challenges.
            </p>

            {/* List with divider lines matching reference */}
            <div className="divide-y divide-border-olive/50 border-t border-b border-border-olive/50">
              {bullets.map((item, idx) => (
                <div key={idx} className="py-3.5 flex items-center gap-3 text-sm sm:text-[15px] text-text-primary font-normal">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-volt shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Light Volt Pill Button */}
            <div className="pt-2">
              <Link
                href={aboutOverview.cta.href}
                className="inline-flex items-center justify-center w-full py-3.5 sm:py-4 px-8 rounded-full bg-brand-volt text-canvas font-medium text-base hover:bg-brand-volt-light transition-all duration-300 hover:scale-[1.01] shadow-[0_0_20px_-4px_rgba(243,255,201,0.25)] text-center"
              >
                {aboutOverview.cta.text}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
