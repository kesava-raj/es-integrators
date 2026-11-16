"use strict";
import React from "react";
import Image from "next/image";
import { SERVICES_PAGE_DATA } from "@/data/services-data";

export function ServicesTestimonial() {
  const { testimonial } = SERVICES_PAGE_DATA;

  return (
    <section className="py-[100px] lg:py-[150px] relative z-10">
      <div className="container-wrapper">
        <div className="relative rounded-[32px] overflow-hidden p-8 sm:p-12 lg:p-16 border border-brand-volt/30 shadow-2xl bg-surface-elevated">
          {/* Backdrop Wallpaper */}
          <div className="absolute inset-0 -z-10 opacity-30 mix-blend-screen pointer-events-none">
            <Image
              src={testimonial.backdropSrc}
              alt=""
              fill
              className="object-cover"
            />
          </div>

          <div className="relative z-10 max-w-[920px]">
            {/* Stars */}
            <div className="flex items-center gap-1.5 text-brand-volt mb-8">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 fill-brand-volt text-brand-volt"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-light leading-relaxed text-text-primary mb-10">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>

            {/* Profile */}
            <div className="flex items-center gap-4 pt-6 border-t border-white/10">
              <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border border-brand-volt/40 bg-surface-dark">
                <Image
                  src={testimonial.avatarSrc}
                  alt={testimonial.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="text-lg font-normal text-text-primary">
                  {testimonial.author}
                </div>
                <div className="text-xs sm:text-sm text-text-muted font-light">
                  {testimonial.role} • {testimonial.company}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
