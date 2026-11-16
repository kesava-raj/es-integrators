"use client";

import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { HOME_DATA } from "@/data/home-data";

export const TestimonialSection: React.FC = () => {
  const { testimonial } = HOME_DATA;

  return (
    <section className="py-12 sm:py-16 relative z-10 border-b border-border-olive/40 overflow-hidden">
      <div className="container-wrapper">
        <div className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden border border-border-olive p-6 sm:p-10 lg:p-12 bg-surface-card/90 shadow-2xl">
          {/* Subtle background texture overlay */}
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <Image
              src={testimonial.bgImageSrc}
              alt="Testimonial background"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto space-y-8 text-center sm:text-left">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-border-olive/50 border border-border-olive text-brand-volt">
              <Quote className="w-6 h-6" />
            </div>

            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-display font-medium leading-relaxed text-text-primary">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-border-olive/60">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-brand-volt shrink-0">
                <Image
                  src={testimonial.avatarSrc}
                  alt={testimonial.author}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>

              <div className="text-center sm:text-left">
                <div className="text-lg font-bold font-display text-text-primary">
                  {testimonial.author}
                </div>
                <div className="text-sm text-text-secondary">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>

              <div className="sm:ml-auto flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-brand-volt text-lg">
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
