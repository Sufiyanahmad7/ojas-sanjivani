"use client";

import React from "react";
import { Check, X, ShieldAlert, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

export function BenefitsComparison() {
  const naturalBenefits = [
    { title: "Root Cause Treatment", desc: "Addresses digestive, lifestyle, and constitutional imbalances directly." },
    { title: "No Surgery or Scars", desc: "100% non-invasive, avoids surgical pain and post-op complications." },
    { title: "Minimal Side Effects", desc: "Organic herbs and mild homeopathic drops are highly biocompatible." },
    { title: "Long-term Relief", desc: "Eliminates chronic recurrence by healing the systemic susceptibility." },
    { title: "Personalized Treatment", desc: "Formulated specifically according to your body's dosha composition." },
    { title: "Holistic Wellness", desc: "Improves overall immunity, gut health, and energy levels." }
  ];

  const conventionalLimitations = [
    { title: "Temporary Symptom Relief", desc: "Suppresses local inflammation but leaves root triggers untouched." },
    { title: "Recurrence Highly Possible", desc: "Condition often returns once medications are discontinued." },
    { title: "Chemical Side Effects", desc: "Prolonged use of pain relievers/anti-inflammatory pills causes gut toxicity." },
    { title: "Surgical Risks", desc: "Operations like hemorrhoidectomy carry risks of incontinence or infection." },
    { title: "Generic One-Size-Fits-All", desc: "Same prescriptions are administered to all patients regardless of cause." },
    { title: "Systemic Exhaustion", desc: "Does not support overall digestive vitality or immune resilience." }
  ];

  return (
    <section id="benefits" className="py-16 sm:py-20 bg-white relative">
      <div className="custom-container space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <Badge variant="success" className="py-1 px-3 bg-[#028174]/10 text-[#028174] border-transparent">
            Why Choose Natural?
          </Badge>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-main">
            Why Choose Natural Healing?
          </h2>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            Compare our holistic, root-cause healing therapies with conventional surgical and chemical methods.
          </p>
        </div>

        {/* Comparison grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
          
          {/* Natural Treatment Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#028174]/10 flex items-center justify-center text-[#028174]">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-black text-[#028174]">
                Integrated Natural Treatment
              </h3>
            </div>

            <Card className="bg-[#F5FBF8] border border-[#028174]/20 p-6 sm:p-8 space-y-6 shadow-soft-md">
              {naturalBenefits.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-[#028174]/10 text-[#028174] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-extrabold text-text-main">
                      {item.title}
                    </h4>
                    <p className="text-[10px] sm:text-xs text-text-secondary mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </Card>
          </div>

          {/* Conventional Treatment Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-black text-red-500">
                Conventional Treatments
              </h3>
            </div>

            <Card className="bg-slate-50 border border-border-main p-6 sm:p-8 space-y-6 shadow-soft-sm">
              {conventionalLimitations.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-red-500/15 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-extrabold text-slate-800">
                      {item.title}
                    </h4>
                    <p className="text-[10px] sm:text-xs text-slate-500 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </Card>
          </div>

        </div>

      </div>
    </section>
  );
}
