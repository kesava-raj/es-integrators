import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Emerald System Integrators (ESI)",
  description:
    "Privacy Policy and data governance commitments of Emerald System Integrators (ESI). Learn how we protect enterprise and client information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-canvas text-text-primary bg-noise relative overflow-hidden">
      <section className="page-header-spacing pb-20 relative z-10">
        <div className="container-wrapper max-w-4xl">
          {/* Back link */}
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-text-muted hover:text-brand-volt transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Header */}
          <div className="space-y-4 pb-8 border-b border-border-olive/60 mb-12">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-border-olive/40 border border-border-olive text-brand-volt text-xs font-mono uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              Data Governance & Compliance
            </span>
            <h1 className="text-[34px] sm:text-[46px] lg:text-[54px] font-normal leading-[1.18] text-brand-volt tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-text-muted text-sm font-mono">
              Last updated: February 2026 • Emerald System Integrators (ESI)
            </p>
          </div>

          {/* Legal Content Body */}
          <div className="space-y-10 text-text-secondary leading-relaxed text-base sm:text-lg font-light">
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-normal text-text-primary tracking-tight">
                1. Introduction & Company Overview
              </h2>
              <p>
                Emerald System Integrators (&ldquo;ESI&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is a technology and consulting partner helping businesses prepare for present and future challenges through technology solutions, specialist resourcing, and business consulting.
              </p>
              <p>
                This Privacy Policy describes how we collect, process, store, and safeguard corporate and personal information gathered through our website (<a href="https://www.es-integrators.com/" className="text-brand-volt hover:underline">https://www.es-integrators.com/</a>) and related client engagement channels.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-normal text-text-primary tracking-tight">
                2. Information We Collect
              </h2>
              <p>
                We only collect information necessary to fulfill business engagements, evaluate consultation requests, and communicate effectively with current and prospective clients:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base text-text-primary">
                <li>
                  <strong>Contact Information:</strong> Full name, professional work email address, company name, telephone number, and communication preferences.
                </li>
                <li>
                  <strong>Project Requirements:</strong> Scope outlines, service requirements (web application development, mobile applications, enterprise solutions, or business consulting), and operational timelines provided via our consultation forms.
                </li>
                <li>
                  <strong>Technical Telemetry:</strong> Anonymized browser information, device specifications, and interaction data used solely to optimize website performance and responsiveness.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-normal text-text-primary tracking-tight">
                3. Purpose and Use of Data
              </h2>
              <p>
                ESI uses the information collected strictly for legitimate business objectives:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-base text-text-primary">
                <li>Providing customized technology proposals and responding to enterprise inquiries.</li>
                <li>Executing contracts, managing project deliverables, and supporting application lifecycles.</li>
                <li>Delivering relevant technology insights, updates, and customer value management reports.</li>
                <li>Maintaining standardized business processes, data integrity, and compliance requirements.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-normal text-text-primary tracking-tight">
                4. Confidentiality & Security Standards
              </h2>
              <p>
                Customer satisfaction and security are our foremost commitments. We implement standardized security controls, TLS encryption protocols, and role-based access restrictions to protect proprietary corporate information from unauthorized access, alteration, or disclosure.
              </p>
              <p>
                We do not sell, rent, or trade client information to third-party marketing brokers under any circumstances.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-normal text-text-primary tracking-tight">
                5. Cross-Border Operations
              </h2>
              <p>
                Emerald System Integrators operates across global hubs, including Chennai, Tamil Nadu, India, and Michigan, USA. Information shared with ESI may be accessed by authorized team members across these locations under strict non-disclosure obligations and standardized security controls.
              </p>
            </section>

            <section className="space-y-4 p-8 rounded-2xl bg-surface-card border border-border-olive">
              <h2 className="text-xl font-medium text-brand-volt">
                6. Contact Information & Governance Inquiries
              </h2>
              <p className="text-sm text-text-secondary">
                For questions regarding this Privacy Policy, your data preferences, or corporate compliance, please contact our administrative team:
              </p>
              <div className="space-y-2 text-sm text-text-primary pt-2">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-brand-volt" />
                  <a href="mailto:admin@es-integrators.com" className="hover:text-brand-volt transition-colors">
                    admin@es-integrators.com
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-brand-volt shrink-0 mt-0.5" />
                  <span>Chennai, Tamil Nadu, India • Michigan, USA</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
