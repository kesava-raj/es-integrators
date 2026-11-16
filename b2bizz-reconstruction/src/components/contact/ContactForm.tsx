"use client";

import React, { useState } from "react";
import { CheckCircle2, Send, Mail, MapPin, Globe, Clock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Web Application Development",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email && formData.name) {
      setSubmitted(true);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
      {/* Left Column: Interactive Inquiry Form */}
      <div className="lg:col-span-7 rounded-[32px] p-8 sm:p-12 bg-surface-card border border-border-olive shadow-2xl space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-brand-volt font-semibold">
            Start a Conversation
          </span>
          <h2 className="text-2xl sm:text-3xl font-normal text-brand-volt tracking-tight">
            Request an Enterprise Consultation
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed">
            Tell us about your organization&apos;s requirements. Our technology and consulting specialists will respond promptly.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 rounded-2xl bg-border-olive/30 border border-brand-volt/50 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
            <div className="w-12 h-12 rounded-full bg-brand-volt/20 text-brand-volt mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-medium text-text-primary">
              Thank you for reaching out!
            </h3>
            <p className="text-sm text-text-secondary max-w-md mx-auto leading-relaxed">
              We have received your inquiry. A senior specialist from Emerald System Integrators will review your details and contact you via {formData.email}.
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="text-xs font-mono uppercase tracking-wider text-brand-volt hover:underline pt-2 cursor-pointer"
            >
              Submit another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-text-muted">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. David Miller"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-surface-base border border-border-olive rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-volt transition-colors min-h-[46px]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-text-muted">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-surface-base border border-border-olive rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-volt transition-colors min-h-[46px]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-text-muted">
                  Company / Organization
                </label>
                <input
                  type="text"
                  placeholder="e.g. Enterprise Logistics Corp"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-surface-base border border-border-olive rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-volt transition-colors min-h-[46px]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-text-muted">
                  Area of Interest
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-surface-base border border-border-olive rounded-xl px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-brand-volt transition-colors min-h-[46px]"
                >
                  <option value="Web Application Development">Web Application Development</option>
                  <option value="Mobile Application Development">Mobile Application Development</option>
                  <option value="Enterprise Solutions">Enterprise Solutions & Integration</option>
                  <option value="Business Consulting">Business Consulting & Strategy</option>
                  <option value="Specialist Resourcing">Specialist Resourcing & Staffing</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-wider text-text-muted">
                How can ESI assist your organization? *
              </label>
              <textarea
                required
                rows={4}
                placeholder="Briefly describe your objectives, existing systems, or timeline..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-surface-base border border-border-olive rounded-xl p-4 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-volt transition-colors resize-none"
              />
            </div>

            <div className="pt-2">
              <Button variant="primary" type="submit" showArrow className="w-full sm:w-auto px-8 py-3.5">
                Send Consultation Request
              </Button>
            </div>
          </form>
        )}
      </div>

      {/* Right Column: Global Presence & Direct Contact Details */}
      <div className="lg:col-span-5 space-y-6">
        {/* Office Presence Card */}
        <div className="p-8 rounded-[28px] bg-surface-card border border-border-olive shadow-xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-border-olive/30 border border-border-olive flex items-center justify-center text-brand-volt">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-text-muted">
                Global Footprint
              </div>
              <h3 className="text-lg font-medium text-text-primary">
                Our Presence
              </h3>
            </div>
          </div>

          <div className="space-y-4 pt-2">
            <div className="p-4 rounded-2xl bg-surface-base border border-border-olive/70 space-y-1">
              <div className="text-xs font-mono uppercase text-brand-volt font-semibold">
                India Presence
              </div>
              <div className="text-sm font-medium text-text-primary">
                Chennai, Tamil Nadu, India
              </div>
              <div className="text-xs text-text-muted">
                Engineering & Technology Solutions Hub
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-surface-base border border-border-olive/70 space-y-1">
              <div className="text-xs font-mono uppercase text-brand-volt font-semibold">
                USA Presence
              </div>
              <div className="text-sm font-medium text-text-primary">
                Michigan, USA
              </div>
              <div className="text-xs text-text-muted">
                Consulting & Enterprise Operations Hub
              </div>
            </div>
          </div>
        </div>

        {/* Direct Communication Channels */}
        <div className="p-8 rounded-[28px] bg-surface-card border border-border-olive shadow-xl space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-border-olive/30 border border-border-olive flex items-center justify-center text-brand-volt">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-text-muted">
                Direct Channels
              </div>
              <h3 className="text-lg font-medium text-text-primary">
                Contact Directly
              </h3>
            </div>
          </div>

          <div className="space-y-3 text-sm">
            <a
              href="mailto:admin@es-integrators.com"
              className="flex items-center justify-between p-4 rounded-2xl bg-surface-base border border-border-olive hover:border-brand-volt transition-colors group"
            >
              <span className="text-text-secondary group-hover:text-brand-volt transition-colors">
                admin@es-integrators.com
              </span>
              <Send className="w-4 h-4 text-text-muted group-hover:text-brand-volt transition-colors" />
            </a>

            <a
              href="https://www.es-integrators.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-2xl bg-surface-base border border-border-olive hover:border-brand-volt transition-colors group"
            >
              <span className="text-text-secondary group-hover:text-brand-volt transition-colors">
                www.es-integrators.com
              </span>
              <Globe className="w-4 h-4 text-text-muted group-hover:text-brand-volt transition-colors" />
            </a>
          </div>
        </div>

        {/* ESI Commitment Card */}
        <div className="p-6 rounded-[24px] bg-surface-card border border-border-olive/60 flex items-start gap-4">
          <ShieldCheck className="w-5 h-5 text-brand-volt shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs sm:text-sm text-text-secondary">
            <span className="text-text-primary font-medium block">
              Customer Satisfaction First
            </span>
            Standardized business processes, constant communication, timely delivery, and dependable operations across every engagement.
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
