"use client";

import React from "react";
import { Users, Award, ShieldCheck, HeartHandshake, Video, Compass, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

export function WhyChooseSection() {
  const cards = [
    {
      title: "Experienced Doctors",
      desc: "Consult highly certified practitioners with over 20 years of clinical expertise.",
      icon: Users,
    },
    {
      title: "Personalized Treatment",
      desc: "Get custom organic remedies prepared according to your biological constitution.",
      icon: HeartHandshake,
    },
    {
      title: "Online Consultation",
      desc: "Secure online video consultations and medicine dispatch anywhere in India.",
      icon: Video,
    },
    {
      title: "Authentic Medicines",
      desc: "100% natural, GMP-certified, metal-free, and clinically validated formulations.",
      icon: ShieldCheck,
    },
    {
      title: "Lifestyle & Yoga Guidance",
      desc: "Detailed diet charts, exercise guidance, and daily wellness schedules.",
      icon: Compass,
    },
    {
      title: "Continuous Monitoring",
      desc: "Weekly clinical follow-ups and diet adaptations to ensure perfect recovery.",
      icon: Sparkles,
    },
  ];

  return (
    <section id="why-choose-us" className="py-16 sm:py-20 bg-[#F5FBF8] border-y border-border-main/20 relative">
      <div className="custom-container space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <Badge variant="success" className="py-1 px-3 bg-[#028174]/10 text-[#028174] border-transparent">
            Why Ojas Sanjivani?
          </Badge>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-main">
            Natural Care You Can Trust
          </h2>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            We bridge the gap between traditional herbal wisdom and modern diagnostic validation.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
          {cards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Card 
                key={idx} 
                variant="default" 
                hoverEffect="lift"
                className="bg-white border border-border-main/50 p-6 flex flex-col justify-between space-y-4 hover:border-[#028174]/30"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F5FBF8] text-[#028174] flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-xs sm:text-sm font-extrabold text-text-main">
                    {item.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-text-secondary leading-relaxed">
                    {item.desc}
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
