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
          <div className="lg:col-span-5 relative w-full sm:max-w-md lg:max-w-none mx-auto bg-gradient-to-br from-white to-[#F0FAF7] rounded-[24px] border border-border-main/50 p-8 text-left shadow-soft-lg flex flex-col justify-between overflow-hidden">
            {/* Background glowing soft green orb */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#028174]/5 filter blur-2xl pointer-events-none" />
            
            <div className="space-y-4 relative z-10">
              <Badge variant="success" className="py-1 px-3 bg-[#028174]/8 text-[#028174] border-[#028174]/15 uppercase tracking-wider text-[9px] font-extrabold">
                Our Healing Core
              </Badge>
              
              <h3 className="font-heading text-xl sm:text-2xl font-black text-text-main leading-tight">
                Root-Cause vs.<br />
                <span className="text-[#028174]">Symptom Masking</span>
              </h3>
              
              <p className="text-xs sm:text-[13px] text-text-secondary leading-relaxed font-medium">
                Unlike conventional medicine that suppresses symptoms, we analyze these environmental and physiological causes to restore long-term cellular balance.
              </p>
            </div>

            {/* Contrast Comparison Grid */}
            <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-border-main/50 relative z-10">
              <div className="space-y-1.5">
                <span className="text-[10px] font-extrabold text-red-500 uppercase tracking-wider">
                  Symptom Masking
                </span>
                <p className="text-[11px] text-text-secondary leading-normal font-bold">
                  • Temporary relief<br />
                  • Chemical dependency<br />
                  • Ignored triggers
                </p>
              </div>
              
              <div className="space-y-1.5 border-l border-border-main/50 pl-4">
                <span className="text-[10px] font-extrabold text-[#028174] uppercase tracking-wider">
                  Root-Cause Relief
                </span>
                <p className="text-[11px] text-[#028174] leading-normal font-bold">
                  • Cellular healing<br />
                  • Permanent relief<br />
                  • Personalized care
                </p>
              </div>
            </div>

            {/* Bottom highlights */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-8 pt-5 border-t border-border-main/50 relative z-10">
              <div className="flex items-center gap-1.5 text-xs text-text-secondary font-extrabold">
                <Icons.CheckCircle2 className="w-4 h-4 text-[#0E9F6E]" />
                <span>Permanent Relief</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
              <div className="flex items-center gap-1.5 text-xs text-text-secondary font-extrabold">
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
