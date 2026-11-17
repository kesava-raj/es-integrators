import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CASE_STUDIES } from "@/data/case-studies-data";
import { CaseStudyDetailHero } from "@/components/case-studies/CaseStudyDetailHero";
import { CaseStudyDetailChallenge } from "@/components/case-studies/CaseStudyDetailChallenge";
import { CaseStudyDetailResults } from "@/components/case-studies/CaseStudyDetailResults";
import { CtaBanner } from "@/components/shared/CtaBanner";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = CASE_STUDIES.find((s) => s.slug === slug);
  if (!study) return {};

  return {
    title: `${study.title} | Emerald System Integrators (ESI)`,
    description: study.overview,
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = CASE_STUDIES.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="bg-canvas text-text-primary bg-noise relative overflow-hidden">
      {/* 1. Hero with Breadcrumb, Metadata Strip & Featured Visual */}
      <CaseStudyDetailHero study={study} />

      {/* 2. Challenge & Solution Architecture Narrative */}
      <CaseStudyDetailChallenge study={study} />

      {/* 3. Quantitative Results, Testimonial & Next Project Link */}
      <CaseStudyDetailResults study={study} />

      {/* 4. Pre-Footer Call to Action Banner */}
      <section className="pt-8 sm:pt-12 lg:pt-16 pb-8 sm:pb-12 relative z-10">
        <div className="container-wrapper">
          <CtaBanner />
        </div>
      </section>
    </div>
  );
}
