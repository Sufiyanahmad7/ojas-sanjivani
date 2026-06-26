"use client";

import React from "react";
import * as Icons from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import { Treatment } from "@/data/diseases";

interface TreatmentApproachProps {
  treatments: Treatment[];
}

export function TreatmentApproach({ treatments }: TreatmentApproachProps) {
  const steps = [
    { title: "Diagnosis", desc: "Detailed symptom & health history screening.", icon: Icons.ClipboardSignature },
    { title: "Dosha Analysis", desc: "Evaluating constitutional imbalances.", icon: Icons.Activity },
    { title: "Customized Medicine", desc: "Preparing targeted organic doses.", icon: Icons.Pill },
    { title: "Diet Plan", desc: "Tailoring glycemic & metabolic nutrition.", icon: Icons.Apple },
    { title: "Follow-Up", desc: "Tracking healing progress every week.", icon: Icons.CalendarCheck },
    { title: "Recovery", desc: "Attaining cellular balance & high vitality.", icon: Icons.Heart }
  ];

  return (
    <section id="treatment-approach" className="py-16 sm:py-20 bg-[#F5FBF8] border-y border-border-main/20 relative">
      <div className="custom-container space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <Badge variant="success" className="py-1 px-3 bg-[#028174]/10 text-[#028174] border-transparent">
            Our Approach
          </Badge>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-main">
            Our Natural Treatment Process
          </h2>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            We follow a scientific six-step methodology to cure the condition and restore optimal metabolic homeostasis.
          </p>
        </div>

        {/* Stepper Timeline (Horizontal on desktop, Vertical on mobile) */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-[5%] right-[5%] h-0.5 bg-border-main pointer-events-none hidden lg:block -translate-y-1/2" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <div key={idx} className="flex lg:flex-col items-center gap-4 lg:gap-3 text-left lg:text-center group">
                  {/* Step badge/icon */}
                  <div className="w-[50px] h-[50px] rounded-full bg-white border-2 border-border-main group-hover:border-[#028174] flex items-center justify-center text-text-secondary group-hover:text-[#028174] shrink-0 transition-colors shadow-soft-sm relative">
                    <StepIcon className="w-5 h-5" />
                    <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#028174] text-white text-[9px] font-black flex items-center justify-center">
                      {idx + 1}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xs sm:text-sm font-extrabold text-text-main group-hover:text-[#028174] transition-colors leading-tight">
                      {step.title}
                    </h4>
                    <p className="text-[9px] sm:text-[10px] text-text-secondary mt-1 leading-relaxed lg:max-w-[150px]">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Treatment Specific Cards */}
        <div className="space-y-6 pt-6">
          <div className="text-center">
            <h3 className="text-lg sm:text-xl font-bold text-text-main">
              Your Customized Treatment Plan Includes
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {treatments.map((treatment, idx) => {
              const TreatmentIcon = (Icons as any)[treatment.iconName] || Icons.Leaf;

              return (
                <Card
                  key={idx}
                  variant="default"
                  hoverEffect="glow"
                  className="bg-white border border-border-main/50 p-6 flex gap-4 text-left hover:border-[#028174]/30"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F5FBF8] text-[#028174] flex items-center justify-center shrink-0">
                    <TreatmentIcon className="w-5 h-5" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs sm:text-sm font-extrabold text-text-main">
                        {treatment.title}
                      </span>
                      <Badge variant="outline" className="text-[8px] font-bold text-[#0E9F6E] bg-[#0E9F6E]/5 border-[#0E9F6E]/20 py-0.5 px-2">
                        {treatment.type}
                      </Badge>
                    </div>
                    <p className="text-[10px] sm:text-xs text-text-secondary leading-relaxed">
                      {treatment.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
