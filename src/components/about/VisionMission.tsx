"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Target, Eye } from "lucide-react";

export function VisionMission() {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-bg-white to-mint/20 relative">
      <div className="custom-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Mission Card */}
          <Card 
            variant="default" 
            hoverEffect="lift"
            className="bg-white border border-border-main/50 relative overflow-hidden p-8 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 transition-transform duration-300 group-hover:scale-110">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-text-main">
                Our Mission
              </h3>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                To make authentic Ayurveda and Homeopathy accessible to every family through ethical, 
                personalized, and evidence-based healthcare.
              </p>
            </div>
            {/* Background design accents */}
            <div className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-primary/2 pointer-events-none" />
          </Card>

          {/* Vision Card */}
          <Card 
            variant="default" 
            hoverEffect="lift"
            className="bg-white border border-border-main/50 relative overflow-hidden p-8 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary-hover shrink-0 transition-transform duration-300 group-hover:scale-110">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-text-main">
                Our Vision
              </h3>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                To become India's most trusted natural healthcare platform helping millions achieve 
                healthier lives naturally.
              </p>
            </div>
            {/* Background design accents */}
            <div className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-secondary/2 pointer-events-none" />
          </Card>

        </div>
      </div>
    </section>
  );
}
