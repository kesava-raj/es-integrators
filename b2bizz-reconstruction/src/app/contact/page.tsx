import React from "react";
import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { ServicesFaq } from "@/components/services/ServicesFaq";

export const metadata: Metadata = {
  title: "Contact Us | Emerald System Integrators (ESI)",
  description:
    "Get in touch with Emerald System Integrators. Connect with our engineering and consulting specialists in Chennai, India, and Michigan, USA.",
};

export default function ContactPage() {
  return (
    <div className="bg-canvas text-text-primary bg-noise relative overflow-hidden">
      {/* 1. Header with clear padding */}
      <section className="page-header-spacing pb-8 relative z-10">
        <div className="container-wrapper">
          <div className="max-w-[820px] mb-10 space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-border-olive/40 border border-border-olive text-brand-volt text-xs font-mono uppercase tracking-wider">
              Get in Touch
            </span>
            <h1 className="text-[36px] sm:text-[48px] lg:text-[60px] font-normal leading-[1.15] text-brand-volt tracking-tight">
              Contact Emerald System Integrators
            </h1>
            <p className="text-text-secondary text-base sm:text-lg lg:text-[1.125rem] font-light leading-relaxed max-w-[640px]">
              We partner with businesses to simplify technological complexity, strengthen operations, and engineer digital transformation. Let&apos;s discuss your organization&apos;s next initiative.
            </p>
          </div>

          {/* 2. Interactive Consultation Form + Global Presence Hubs */}
          <ContactForm />
        </div>
      </section>

      {/* 3. Frequently Asked Questions */}
      <ServicesFaq />
    </div>
  );
}
