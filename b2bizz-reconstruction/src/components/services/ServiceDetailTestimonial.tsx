"use strict";
import React from "react";
import Image from "next/image";
import { ServiceItem } from "@/data/services-data";

export function ServiceDetailTestimonial({ service }: { service: ServiceItem }) {
  const { testimonial } = service;

  return (
    <section className="pt-0 pb-14 sm:pb-20 lg:pb-28 relative z-10">
      <div className="container-wrapper max-w-[1000px] mx-auto">
        <div className="p-8 sm:p-12 rounded-[32px] bg-surface-card border border-border-olive hover:border-brand-volt/40 backdrop-blur-md transition-all duration-300 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Volt Light */}
          <div className="absolute right-0 top-0 w-48 h-48 bg-brand-volt/10 blur-3xl rounded-full pointer-events-none" />

          {/* Stars */}
          <div className="flex items-center gap-1.5 text-brand-volt mb-6">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-4 h-4 fill-brand-volt text-brand-volt"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <blockquote className="text-lg sm:text-xl lg:text-2xl font-light leading-relaxed text-text-primary mb-8">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>

          <div className="flex items-center gap-4 pt-6 border-t border-border-olive/60">
            <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-brand-volt/40 bg-surface-subtle">
              <Image
                src={testimonial.avatarSrc}
                alt={testimonial.author}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="text-base font-normal text-text-primary">
                {testimonial.author}
              </div>
              <div className="text-xs sm:text-sm text-text-muted font-light">
                {testimonial.role}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
