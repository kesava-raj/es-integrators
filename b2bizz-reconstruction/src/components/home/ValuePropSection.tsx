"use client";

import React from "react";
import Image from "next/image";
import { HOME_DATA } from "@/data/home-data";

export const ValuePropSection: React.FC = () => {
  const cards = [
    {
      id: "b2b-expertise",
      iconSrc: "/icons/icon-LvrjgEFWUJmw.svg",
      title: "B2B expertise that matters",
      description: "Deep expertise in navigating B2B challenges and opportunities.",
    },
    {
      id: "end-to-end",
      iconSrc: "/icons/icon-GlhEiNlKFOg8.svg",
      title: "End-to-End consulting",
      description: "From planning to execution, we cover every step.",
    },
    {
      id: "data-driven",
      iconSrc: "/icons/icon-1MVVAon08dDj.svg",
      title: "Data-Driven decisions",
      description: "We use data and experience to drive smart business moves.",
    },
  ];

  return (
    <section className="section-padding relative z-10 overflow-hidden">
      <div className="container-wrapper space-y-10 sm:space-y-12">
        {/* Centered Heading and Subtitle matching Reference */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-h2 text-brand-volt leading-[1.3] font-normal tracking-tight">
            What makes us the right partner
          </h2>
          <p className="text-body text-text-secondary text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Choosing the right consulting partner can define the future of your business.
            <br className="hidden sm:inline" />
            At B2bizz, we don’t just advise — we collaborate, innovate, and deliver.
          </p>
        </div>

        {/* 3 Horizontal Cards Grid matching Reference layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="p-6 sm:p-8 rounded-[24px] bg-[#0E100F] border border-border-olive/60 flex flex-col justify-between space-y-6 transition-all duration-300 hover:border-brand-volt/40"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                  <Image
                    src={card.iconSrc}
                    alt={card.title}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg sm:text-[19px] font-normal text-text-primary tracking-tight">
                  {card.title}
                </h3>
              </div>

              <p className="text-sm sm:text-[15px] text-text-secondary leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Integrated Testimonial Callout Banner matching Reference */}
        <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden border border-border-olive/60 bg-[#0E100F] p-8 sm:p-12 lg:p-14 min-h-[320px] sm:min-h-[380px] flex items-center">
          {/* Authentic Ambient Photographic Blurred Background */}
          <Image
            src="/images/img-XwCo50BibsVk.jpg"
            alt="Client Testimonial Ambient Backdrop"
            fill
            className="object-cover opacity-85"
            sizes="100vw"
          />

          {/* Dark scrim to guarantee contrast */}
          <div className="absolute inset-0 bg-black/40 pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-10 max-w-5xl">
            {/* Orion Blake Avatar with Rounded Corners (20px) matching Reference */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-[100px] md:h-[100px] rounded-[20px] overflow-hidden border border-border-olive/80 shrink-0 shadow-lg">
              <Image
                src="/images/img-pfX9Sn5qRme6.jpg"
                alt="Orion Blake, COO"
                fill
                className="object-cover"
                sizes="100px"
              />
            </div>

            {/* Testimonial Quote and Attribution */}
            <div className="space-y-4">
              <blockquote className="text-base sm:text-xl md:text-2xl font-normal text-brand-volt leading-snug tracking-tight">
                “Working with B2bizz was a game-changer for our B2B strategy. Their team didn’t just offer advice — they became an extension of our leadership. Their insights, professionalism, and tailored approach helped us unlock new growth and streamline our operations.”
              </blockquote>

              <div className="text-sm sm:text-base font-normal text-text-secondary">
                <span className="text-brand-volt">Orion Blake</span>, <span className="text-text-secondary">COO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
