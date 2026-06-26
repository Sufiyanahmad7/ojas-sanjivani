"use client";

import React from "react";
import * as Icons from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Symptom } from "@/data/diseases";

interface SymptomsGridProps {
  symptoms: Symptom[];
}

export function SymptomsGrid({ symptoms }: SymptomsGridProps) {
  return (
    <section id="symptoms" className="py-16 sm:py-20 bg-[#F5FBF8] border-y border-border-main/20 relative">
      <div className="custom-container space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <Badge variant="success" className="py-1 px-3 bg-[#028174]/10 text-[#028174] border-transparent">
            Symptom Checker
          </Badge>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-main">
            Common Symptoms
          </h2>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            Recognize the early warning signs to consult our experts at the right time.
          </p>
        </div>

        {/* Symptoms Responsive Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {symptoms.map((symptom, idx) => {
            // Dynamically resolve Lucide Icon
            const IconComponent = (Icons as any)[symptom.iconName] || Icons.HelpCircle;

            return (
              <Card
                key={idx}
                variant="default"
                hoverEffect="lift"
                className="bg-white border border-border-main/50 p-5 flex flex-col justify-between space-y-4 text-left group hover:border-[#028174]/30"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F5FBF8] flex items-center justify-center text-[#028174] shrink-0 transition-colors group-hover:bg-[#028174]/10">
                  <IconComponent className="w-5 h-5" />
                </div>

                <div className="space-y-1.5 flex-1">
                  <h3 className="font-heading text-xs sm:text-sm font-extrabold text-text-main group-hover:text-[#028174] transition-colors">
                    {symptom.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-text-secondary leading-relaxed">
                    {symptom.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}
