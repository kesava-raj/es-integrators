import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES_LIST } from "@/data/services-data";
import { ServiceDetailHero } from "@/components/services/ServiceDetailHero";
import { ServiceDetailApproach } from "@/components/services/ServiceDetailApproach";
import { HomeTwoPricing } from "@/components/home-two/HomeTwoPricing";
import { ServiceDetailTestimonial } from "@/components/services/ServiceDetailTestimonial";
import { ServiceDetailOtherServices } from "@/components/services/ServiceDetailOtherServices";
import { CtaBanner } from "@/components/shared/CtaBanner";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES_LIST.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_LIST.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: `${service.title} | Emerald System Integrators (ESI)`,
    description: service.subtitle,
  };
}


export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES_LIST.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-canvas text-text-primary bg-noise relative overflow-hidden">
      {/* 1. Hero Breadcrumb, Heading, Subtitle & Featured Photo */}
      <ServiceDetailHero service={service} />

      {/* 2. Core Capabilities, Approach Statement & 4-Point Deliverables */}
      <ServiceDetailApproach service={service} />

      {/* 3. Consulting Pricing Plans & Dynamic Billing Toggle */}
      <HomeTwoPricing />

      {/* 4. Dedicated Client Endorsement Testimonial */}
      <ServiceDetailTestimonial service={service} />

      {/* 5. Cross-Sell Recommendations: Other Services */}
      <ServiceDetailOtherServices currentSlug={service.slug} />

      {/* 6. Pre-Footer Conversion CTA Banner */}
      <section className="section-padding relative z-10">
        <div className="container-wrapper">
          <CtaBanner />
        </div>
      </section>
    </div>
  );
}
