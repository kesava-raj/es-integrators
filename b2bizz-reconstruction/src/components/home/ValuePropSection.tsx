"use client";

import React from "react";
import Image from "next/image";
import { HOME_DATA } from "@/data/home-data";

export const ValuePropSection: React.FC = () => {
  const { valueProps, testimonial } = HOME_DATA;

  return (
    <section className="section-padding relative z-10 overflow-hidden">
      <div className="container-wrapper space-y-10 sm:space-y-12">
        {/* Centered Heading and Subtitle matching Reference */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-brand-volt font-semibold">
            Why Choose ESI
          </span>
          <h2 className="text-h2 text-brand-volt leading-[1.3] font-normal tracking-tight">
            What makes us the right partner
          </h2>
          <p className="text-body text-text-secondary text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Choosing the right technology and consulting partner defines the future of your business.
            At Emerald System Integrators, we focus on customer value management, standardized processes, and tangible business performance.
          </p>
        </div>

        {/* 3 Horizontal Cards Grid matching Reference layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {valueProps.map((card) => (
            <div
              key={card.id}
              className="p-6 sm:p-8 rounded-[24px] bg-surface-card border border-border-olive/60 flex flex-col justify-between space-y-6 transition-all duration-300 hover:border-brand-volt/40 shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-border-olive/20 flex items-center justify-center shrink-0">
                  <Image
                    src={card.iconSrc}
                    alt={card.title}
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-medium text-text-primary tracking-tight">
                  {card.title}
                </h3>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Integrated Testimonial Callout Banner matching Reference */}
        <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden border border-border-olive/60 bg-surface-card p-8 sm:p-12 lg:p-14 min-h-[320px] sm:min-h-[380px] flex items-center">
          {/* Authentic Ambient Photographic Background */}
          <Image
            src={testimonial.bgImageSrc}
            alt="Client Testimonial Ambient Backdrop"
            fill
            className="object-cover opacity-85"
            sizes="100vw"
          />

          {/* Dark scrim to guarantee contrast */}
          <div className="absolute inset-0 bg-black/55 pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-10 max-w-5xl">
            {/* Avatar with Rounded Corners (20px) */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-[100px] md:h-[100px] rounded-[20px] overflow-hidden border border-border-olive/80 shrink-0 shadow-lg bg-surface-base">
              <Image
                src={testimonial.avatarSrc}
                alt={`${testimonial.author}, ${testimonial.role}`}
                fill
                className="object-cover"
                sizes="100px"
              />
            </div>

            {/* Testimonial Quote and Attribution */}
            <div className="space-y-4">
              <blockquote className="text-base sm:text-xl md:text-2xl font-normal text-white dark:text-brand-volt leading-snug tracking-tight">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="text-sm sm:text-base font-normal text-white">
                <span className="text-brand-volt font-medium">{testimonial.author}</span> — <span className="text-white/80">{testimonial.role}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropSection;
