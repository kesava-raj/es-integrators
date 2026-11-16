"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HOME_DATA } from "@/data/home-data";

export const AboutSection: React.FC = () => {
  const { aboutOverview } = HOME_DATA;

  return (
    <section className="section-padding relative z-10 overflow-hidden">
      <div className="container-wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Heading and Large Photography */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-brand-volt font-semibold">
                {aboutOverview.badge}
              </span>
              <h2 className="text-h2 text-brand-volt leading-[1.25] font-normal tracking-tight">
                {aboutOverview.title}
              </h2>
            </div>

            <div className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden border border-border-olive/60 bg-surface-card shadow-xl w-full h-[280px] sm:h-[340px] lg:h-[364px]">
              <Image
                src={aboutOverview.imageSrc}
                alt="Building the Foundation for What's Next - ESI Team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
          </div>

          {/* Right Column: Narrative, List with Dividers, and Full-Width CTA Button */}
          <div className="lg:col-span-5 lg:pt-8 flex flex-col justify-between h-full space-y-8">
            <p className="text-body text-text-secondary text-base sm:text-lg leading-relaxed">
              {aboutOverview.description}
            </p>

            {/* List with divider lines matching reference */}
            <div className="divide-y divide-border-olive/50 border-t border-b border-border-olive/50">
              {aboutOverview.bullets.map((item, idx) => (
                <div key={idx} className="py-3.5 flex items-start gap-3 text-sm sm:text-[15px] text-text-primary font-normal">
                  <span className="w-2 h-2 rounded-full bg-brand-volt shrink-0 mt-1.5" />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>

            {/* Light Volt Pill Button */}
            <div className="pt-2">
              <Link
                href={aboutOverview.cta.href}
                className="btn-primary w-full justify-center text-center py-4"
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

