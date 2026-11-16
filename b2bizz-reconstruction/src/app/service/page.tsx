import React from "react";
import type { Metadata } from "next";
import { ServicesCatalog } from "@/components/services/ServicesCatalog";
import { ServicesMetrics } from "@/components/services/ServicesMetrics";
import { ServicesTestimonial } from "@/components/services/ServicesTestimonial";
import { ServicesFaq } from "@/components/services/ServicesFaq";
import { CtaBanner } from "@/components/shared/CtaBanner";

export const metadata: Metadata = {
  title: "Integrated Solutions & Services | Emerald System Integrators (ESI)",
  description:
    "Integrated technology solutions including custom web applications, mobile development, enterprise systems architecture, and business consulting.",
};


export default function ServicesPage() {
  return (
    <div className="bg-canvas text-text-primary bg-noise relative overflow-hidden">
      {/* 1. Services Catalog Index (Hero & 5 Comprehensive Service Cards) */}
      <ServicesCatalog />

      {/* 2. Impact Metrics Strip (4X, 5, 100%, 20+) */}
      <ServicesMetrics />

      {/* 3. Featured Client Testimonial Spotlight Banner */}
      <ServicesTestimonial />

      {/* 4. Frequently Asked Questions with Visual Image & Collapsible Accordion */}
      <ServicesFaq />

      {/* 5. Pre-footer Conversion Banner */}
      <section className="section-padding relative z-10">
        <div className="container-wrapper">
          <CtaBanner />
        </div>
      </section>
    </div>
  );
}
