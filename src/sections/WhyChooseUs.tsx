"use client";

import React from "react";
import { WHY_CHOOSE_US } from "@/constants";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { 
  HeartIcon, 
  AIDoctorIcon, 
  AppointmentIcon, 
  AyurvedaIcon 
} from "@/components/ui/Icons";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  "dual-pathway": HeartIcon,
  "ai-screening": AIDoctorIcon,
  "certified-doctors": AppointmentIcon,
  "organic-purity": AyurvedaIcon,
};

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-mint/10 border-y border-border-main/30 relative">
      <div className="custom-container grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: Title & Key Narrative */}
        <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
          <Badge variant="success" className="py-1 px-3">Quality Assurance</Badge>
          
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-main leading-tight">
            Setting the Gold Standard in Holistic Medicine
          </h2>
          
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            Ojas Sanjivani represents a new era of healthcare. We combine India's richest natural healing traditions with rigorous scientific validation and seamless digital consults.
          </p>

          {/* Quick trust metrics */}
          <div className="pt-6 border-t border-border-main/30 flex flex-wrap justify-center lg:justify-start gap-8">
            <div>
              <span className="font-heading text-2xl font-black text-primary block">100%</span>
              <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider block mt-0.5">Lab-Tested Purity</span>
            </div>
            <div className="w-px h-10 bg-border-main hidden sm:block" />
            <div>
              <span className="font-heading text-2xl font-black text-primary block">15 Min</span>
              <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider block mt-0.5">Average Connection Time</span>
            </div>
          </div>
        </div>

        {/* Right Column: Value Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {WHY_CHOOSE_US.map((item) => {
            const Icon = iconMap[item.id] || HeartIcon;
            return (
              <Card
                key={item.id}
                variant="default"
                hoverEffect="lift"
                className="p-6 bg-bg-white border border-border-main/50 space-y-4"
              >
                <div className="w-10 h-10 rounded-lg bg-mint flex items-center justify-center text-primary">
                  <Icon size={20} />
                </div>
                
                <div className="space-y-1.5">
                  <h3 className="font-heading text-base font-bold text-text-main">
                    {item.title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {item.description}
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
