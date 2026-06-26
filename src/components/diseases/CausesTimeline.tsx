"use client";

import React from "react";
import * as Icons from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Cause } from "@/data/diseases";

interface CausesTimelineProps {
  causes: Cause[];
}

export function CausesTimeline({ causes }: CausesTimelineProps) {
  return (
    <section id="causes" className="py-16 sm:py-20 bg-white relative">
      <div className="custom-container space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <Badge variant="success" className="py-1 px-3 bg-[#028174]/10 text-[#028174] border-transparent">
            Root Causes
          </Badge>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-main">
            What Triggers This Condition?
          </h2>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            Understanding the underlying triggers is the first step toward permanent recovery.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Conceptual Graphic */}
          <div className="lg:col-span-5 relative w-full aspect-[4/3] sm:max-w-md lg:max-w-none mx-auto bg-gradient-to-tr from-[#028174]/5 to-[#0E9F6E]/10 rounded-[24px] border border-border-main/50 overflow-hidden flex flex-col justify-center items-center p-8 text-center shadow-soft-sm">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#028174] shadow-soft-md">
              <Icons.ShieldAlert className="w-8 h-8" />
            </div>
            <h3 className="font-heading text-lg font-bold text-text-main mt-6">
              Root-Cause vs. Symptom Masking
            </h3>
            <p className="text-xs text-text-secondary mt-3 leading-relaxed max-w-xs">
              Unlike conventional medicine that suppresses symptoms, we analyze these environmental and physiological causes to restore long-term cellular balance.
            </p>
            <div className="w-full h-px bg-border-main/50 my-6" />
            <div className="flex gap-4 items-center">
              <div className="flex items-center gap-1.5 text-xs text-text-secondary font-bold">
                <Icons.CheckCircle2 className="w-4 h-4 text-[#0E9F6E]" />
                <span>Permanent Relief</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-border-main" />
              <div className="flex items-center gap-1.5 text-xs text-text-secondary font-bold">
                <Icons.CheckCircle2 className="w-4 h-4 text-[#0E9F6E]" />
                <span>Zero Recurrence</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Timeline style causes list */}
          <div className="lg:col-span-7 space-y-6 relative text-left">
            {/* Vertical timeline line */}
            <div className="absolute left-[21px] top-4 bottom-4 w-0.5 bg-border-main pointer-events-none hidden sm:block" />

            {causes.map((cause, idx) => {
              const IconComponent = (Icons as any)[cause.iconName] || Icons.HelpCircle;

              return (
                <div key={idx} className="flex gap-4 sm:gap-6 relative group">
                  {/* Timeline point indicator */}
                  <div className="w-[42px] h-[42px] rounded-full bg-white border-2 border-border-main group-hover:border-[#028174] flex items-center justify-center text-text-secondary group-hover:text-[#028174] shrink-0 transition-colors z-10 shadow-soft-sm">
                    <IconComponent className="w-4.5 h-4.5" />
                  </div>
                  
                  {/* Card Content */}
                  <Card
                    variant="default"
                    hoverEffect="lift"
                    className="flex-1 bg-white border border-border-main/50 p-5 rounded-2xl group-hover:border-[#028174]/20 transition-all"
                  >
                    <h4 className="text-xs sm:text-sm font-extrabold text-text-main group-hover:text-[#028174] transition-colors leading-none">
                      {cause.title}
                    </h4>
                    <p className="text-[10px] sm:text-xs text-text-secondary leading-relaxed mt-2">
                      {cause.description}
                    </p>
                  </Card>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
