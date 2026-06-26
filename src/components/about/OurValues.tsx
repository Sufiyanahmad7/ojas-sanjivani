"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { 
  Heart, 
  ShieldCheck, 
  Scale, 
  HeartHandshake 
} from "lucide-react";

export function OurValues() {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      desc: "We listen with empathy and treat every patient with warmth, kindness, and understanding.",
      color: "bg-rose-500/10 text-rose-600",
    },
    {
      icon: ShieldCheck,
      title: "Authenticity",
      desc: "We practice pure Ayurveda and Homeopathy, staying true to traditional medical texts and ethical guidelines.",
      color: "bg-emerald-500/10 text-emerald-600",
    },
    {
      icon: Scale,
      title: "Integrity",
      desc: "Honesty and transparency govern our fees, prescriptions, consultations, and doctor evaluation standards.",
      color: "bg-amber-500/10 text-amber-600",
    },
    {
      icon: HeartHandshake,
      title: "Patient First",
      desc: "Our primary objective is long-term wellness. Prescriptions are made strictly according to medical necessity.",
      color: "bg-primary/10 text-primary",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-bg-white relative">
      <div className="custom-container space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <Badge variant="primary" className="py-1 px-3">Our Values</Badge>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-main">
            Pillars of Our Care
          </h2>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            Our practices are rooted in these core principles to guarantee patients receive 
            the highest quality natural treatments.
          </p>
        </div>

        {/* Values Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <Card 
                key={idx} 
                variant="default" 
                hoverEffect="lift"
                className="bg-white border border-border-main/50 p-6 sm:p-8 flex flex-col justify-between space-y-4 text-left"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${val.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-text-main">
                    {val.title}
                  </h3>
                  <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                    {val.desc}
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
