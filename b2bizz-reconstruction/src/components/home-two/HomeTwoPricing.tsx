"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HOME_TWO_DATA } from "@/data/home-2-data";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function HomeTwoPricing() {
  const { pricing } = HOME_TWO_DATA;
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="pt-0 pb-[100px] lg:pb-[150px] relative z-10">
      <div className="container-wrapper">
        {/* Section Heading */}
        <div className="text-center max-w-[700px] mx-auto mb-10">
          <h2 className="text-[32px] sm:text-[38px] lg:text-[44px] font-normal leading-[1.2] text-brand-volt tracking-tight mb-8">
            {pricing.headline}
          </h2>

          {/* Monthly / Yearly Toggle */}
          <div className="inline-flex items-center gap-3 p-1.5 rounded-full bg-surface-subtle border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                !isYearly
                  ? "bg-brand-volt text-canvas shadow-md"
                  : "text-text-muted hover:text-text-primary"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${
                isYearly
                  ? "bg-brand-volt text-canvas shadow-md"
                  : "text-text-muted hover:text-text-primary"
              }`}
            >
              <span>Yearly</span>
              <span className="text-[0.65rem] font-mono px-2 py-0.5 rounded-full bg-white/20 text-canvas font-semibold uppercase">
                {pricing.discountBadge}
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricing.plans.map((plan) => {
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-[32px] p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 shadow-2xl overflow-hidden ${
                  isPopular
                    ? "bg-surface-elevated/90 border-2 border-brand-volt/60 shadow-brand-volt/10"
                    : "bg-surface-subtle/70 border border-white/10 hover:border-brand-volt/30"
                }`}
              >
                {/* Popular Pill Badge */}
                {isPopular && (
                  <div className="absolute top-6 right-6">
                    <Badge variant="volt">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <div>
                  {/* Plan Name */}
                  <div className="text-xl font-normal text-text-primary mb-4">
                    {plan.name}
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl sm:text-5xl font-medium text-brand-volt tracking-tight">
                      ${price.toLocaleString()}
                    </span>
                    <span className="text-sm text-text-muted font-light">
                      /month
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-text-muted font-light leading-relaxed mb-8 pb-8 border-b border-white/10">
                    {plan.description}
                  </p>

                  {/* CTA Button */}
                  <div className="mb-8">
                    <Button
                      href={plan.ctaHref}
                      variant={isPopular ? "primary" : "secondary"}
                      className="w-full rounded-full py-3.5"
                    >
                      {plan.ctaText}
                    </Button>
                  </div>

                  {/* Features List */}
                  <div className="space-y-4">
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-brand-volt/10 border border-brand-volt/30 flex items-center justify-center shrink-0 mt-0.5">
                          <Image
                            src={pricing.checkIconSrc}
                            alt=""
                            width={12}
                            height={12}
                            className="w-3 h-3 object-contain invert opacity-80"
                          />
                        </div>
                        <span className="text-xs sm:text-sm text-text-muted font-light leading-snug">
                          {feature}
                        </span>
                      </div>
                    ))}
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
