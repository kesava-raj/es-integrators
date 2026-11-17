"use client";

import React from "react";
import Image from "next/image";

const ENDORSEMENTS_DATA = {
  headline: "What our clients say about Emerald System Integrators",
  backdropImage: "/images/ou4oWL8RwosFygJ5hi7sUUHGb8Q.jpg",
  items: [
    {
      id: "pranwant",
      quote:
        "The website structure and easy access to relevant content made our collaboration smooth and impactful. ESI delivered exactly what was needed.",
      author: "Pranwant",
      role: "Blog Writer",
      avatarSrc: "/images/avatar-david-green.jpg",
    },
    {
      id: "amarnath",
      quote:
        "Outstanding team quality and flawless project execution. Their engineering capabilities and consulting expertise set them apart.",
      author: "Amarnath",
      role: "Freelancer",
      avatarSrc: "/images/avatar-orion-blake.jpg",
    },
    {
      id: "ravi-kumar",
      quote:
        "Timely delivery, constant communication, and high professionalism throughout the application development lifecycle.",
      author: "Ravi Kumar",
      role: "Quality Analyst",
      company: "Eco Enterprise",
      avatarSrc: "/images/avatar-michael-brown.jpg",
    },
  ],
};

export function AboutEndorsements() {
  return (
    <section className="pt-0 pb-12 sm:pb-16 lg:pb-20 relative z-10">
      <div className="container-wrapper">
        {/* Section Heading */}
        <div className="text-center max-w-[700px] mx-auto mb-10 sm:mb-12">
          <h2 className="text-[26px] sm:text-[36px] lg:text-[44px] font-normal leading-[1.2] text-brand-volt tracking-tight">
            {ENDORSEMENTS_DATA.headline}
          </h2>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ENDORSEMENTS_DATA.items.map((item, idx) => {
            const isFeatured = idx === 1;
            return (
              <div
                key={item.id}
                className={`relative rounded-[28px] p-8 flex flex-col justify-between min-h-[340px] border transition-all duration-300 shadow-xl overflow-hidden group ${
                  isFeatured
                    ? "border-brand-volt/40 bg-surface-elevated text-text-primary"
                    : "border-border-olive bg-surface-card text-text-primary hover:border-brand-volt/30"
                }`}
              >
                {/* Backdrop wallpaper on featured card */}
                {isFeatured && (
                  <div className="absolute inset-0 -z-10 opacity-30 mix-blend-screen pointer-events-none">
                    <Image
                      src={ENDORSEMENTS_DATA.backdropImage}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                {/* Quote Text */}
                <div className="relative z-10">
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
                  <p className="text-base sm:text-lg font-light leading-relaxed text-text-muted group-hover:text-text-primary transition-colors">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="relative z-10 flex items-center gap-4 mt-8 pt-6 border-t border-border-olive/50">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-border-olive shrink-0">
                    <Image
                      src={item.avatarSrc}
                      alt={item.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary tracking-wide">
                      {item.author}
                    </h4>
                    <p className="text-xs text-brand-volt font-medium">
                      {item.role} {item.company ? `• ${item.company}` : ""}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AboutEndorsements;
