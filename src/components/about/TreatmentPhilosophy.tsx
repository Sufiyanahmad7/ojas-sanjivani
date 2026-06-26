"use client";

import React from "react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { 
  MessageCircle, 
  Search, 
  ClipboardList, 
  Pill, 
  CalendarCheck, 
  Heart 
} from "lucide-react";

export function TreatmentPhilosophy() {
  const steps = [
    {
      number: "01",
      icon: MessageCircle,
      title: "Consultation",
      desc: "Detailed discussion about symptoms, lifestyle, diet, and history.",
    },
    {
      number: "02",
      icon: Search,
      title: "Root Cause Diagnosis",
      desc: "Identifying underlying imbalances rather than just treating outer symptoms.",
    },
    {
      number: "03",
      icon: ClipboardList,
      title: "Personalized Plan",
      desc: "Curation of a unique treatment plan matching your body constitution.",
    },
    {
      number: "04",
      icon: Pill,
      title: "Authentic Medicines",
      desc: "Pure, natural formulations shipped directly to your doorstep.",
    },
    {
      number: "05",
      icon: CalendarCheck,
      title: "Continuous Follow-up",
      desc: "Regular checkins with your clinician to tune dosages and monitor progress.",
    },
    {
      number: "06",
      icon: Heart,
      title: "Long-term Wellness",
      desc: "Dietary guidelines and lifestyle practices for sustained vitality.",
    },
  ];

  return (
    <section id="philosophy" className="py-10 sm:py-12 bg-mint/5 relative overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/2 rounded-full pointer-events-none blur-3xl" />

      <div className="custom-container space-y-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <Badge variant="primary" className="py-1 px-3">Our Process</Badge>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-main">
            Our Treatment Philosophy
          </h2>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            We follow a structured, evidence-based approach to restore health naturally and permanently.
          </p>
        </div>

        {/* Process Flow container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-[52px] left-6 right-6 h-0.5 bg-gradient-to-r from-primary/10 via-primary/50 to-primary/10 z-0" />

          {/* Timeline steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4 relative z-10">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center space-y-4 group">
                  {/* Circle Step indicator */}
                  <div className="relative">
                    {/* Number Badge */}
                    <span className="absolute -top-2 -right-2 bg-[#028174] text-white text-[9px] font-black w-5 h-5 rounded-full flex items-center justify-center border border-white shadow-soft-sm">
                      {item.number}
                    </span>
                    <div className="w-16 h-16 rounded-full bg-white border-2 border-primary/20 group-hover:border-[#92DE8B] flex items-center justify-center text-[#028174] group-hover:bg-[#92DE8B] group-hover:text-[#1E293B] transition-all duration-300 shadow-soft-md">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Description inside card for cleaner mobile styling */}
                  <div className="space-y-2 px-1 flex-1">
                    <h3 className="font-heading text-sm sm:text-base font-extrabold text-text-main group-hover:text-[#028174] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary text-[11px] sm:text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Mobile connecting arrow indicator (visible only on mobile/tablet) */}
                  {idx < steps.length - 1 && (
                    <div className="lg:hidden text-primary/30 text-xl font-bold py-2">
                      ↓
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
