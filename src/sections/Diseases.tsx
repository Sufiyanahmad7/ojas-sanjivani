"use client";

import React from "react";
import { DISEASE_CATEGORIES } from "@/constants";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Activity } from "lucide-react";
import { 
  DigestionIcon, 
  JointPainIcon, 
  SkinIcon, 
  DiabetesIcon, 
  HeartIcon, 
  SexualWellnessIcon, 
  WomenIcon, 
  RespiratoryIcon 
} from "@/components/ui/Icons";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  digestion: DigestionIcon,
  "joint-pain": JointPainIcon,
  "hair-skin": SkinIcon,
  diabetes: DiabetesIcon,
  "weight-management": HeartIcon, 
  "stress-anxiety": SexualWellnessIcon, 
  "women-health": WomenIcon,
  respiratory: RespiratoryIcon,
};

export function Diseases() {
  return (
    <section id="diseases" className="py-24 bg-mint/10 border-y border-border-main/30 relative">
      <div className="custom-container space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-xl text-center md:text-left">
            <Badge variant="primary" className="py-1 px-3">Expert Care Specialties</Badge>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-main">
              Explore Treatments by Health Category
            </h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              Find customized remedies and expert counseling for chronic diseases and lifestyle disorders.
            </p>
          </div>
          <Button variant="outline" className="self-center md:self-end group bg-bg-white/80" href="#appointment">
            View All Conditions
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Diseases Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {DISEASE_CATEGORIES.map((category) => {
            const IconComponent = iconMap[category.id] || Activity;
            return (
              <Card
                key={category.id}
                variant="default"
                hoverEffect="glow"
                className="group flex flex-col justify-between p-6 bg-bg-white border border-border-main/50 cursor-pointer"
              >
                <div>
                  {/* Icon wrapper */}
                  <div className="w-12 h-12 rounded-xl bg-mint flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-bg-white transition-all duration-300">
                    <IconComponent size={24} className="transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  <h3 className="font-heading text-base font-bold text-text-main mt-5 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                </div>

                <div className="mt-8 pt-4 border-t border-border-main/30 flex items-center justify-between">
                  <span className="text-xs font-semibold text-primary/80 bg-primary/5 px-2 py-0.5 rounded">
                    {category.treatmentCount}
                  </span>
                  <span className="text-[10px] font-bold text-text-secondary group-hover:text-primary transition-colors flex items-center gap-1">
                    Book Consultation <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
