"use client";

import React from "react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ShieldCheck, Award, ThumbsUp, CheckCircle } from "lucide-react";

export function Certifications() {
  const certifications = [
    {
      icon: Award,
      title: "Certified Ayurveda Experts",
      description: "All practitioners hold verified BAMS/MD medical registration certificates.",
    },
    {
      icon: ShieldCheck,
      title: "Certified Homeopathy Experts",
      description: "Homeopathic specialists with BHMS/MD degrees registered under State Boards.",
    },
    {
      icon: CheckCircle,
      title: "Quality Healthcare Standards",
      description: "Rigorous clinical audits, authentic sourcing, and standard diagnostic protocols.",
    },
    {
      icon: ThumbsUp,
      title: "Trusted by Thousands",
      description: "Over 10,000+ patients treated successfully across India for chronic illnesses.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-bg-white border-t border-b border-border-main/20 relative">
      <div className="custom-container space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <Badge variant="primary" className="py-1 px-3">Trust & Accreditations</Badge>
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-text-main">
            Our Quality Standards
          </h2>
        </div>

        {/* Badges Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, idx) => {
            const Icon = cert.icon;
            return (
              <Card 
                key={idx} 
                variant="default"
                hoverEffect="none"
                className="bg-mint/30 border border-primary/5 p-6 flex flex-col items-center text-center space-y-3"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-heading text-sm font-extrabold text-text-main">
                    {cert.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-text-secondary leading-relaxed">
                    {cert.description}
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
