"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { 
  Award, 
  Search, 
  Leaf, 
  HeartHandshake, 
  Video, 
  TrendingUp 
} from "lucide-react";

export function WhyChooseUs() {
  const cards = [
    {
      icon: Award,
      title: "Experienced Doctors",
      desc: "Consult highly qualified, certified Ayurvedic and Homeopathic doctors with decades of clinical experience.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Search,
      title: "Root Cause Diagnosis",
      desc: "We look beyond temporary symptoms to address the metabolic, lifestyle, and constitutional roots of your ailment.",
      color: "bg-amber-500/10 text-amber-600",
    },
    {
      icon: Leaf,
      title: "100% Natural Medicines",
      desc: "All our formulations are authentic, pure, and sourced from certified organic farms, free from toxic side effects.",
      color: "bg-emerald-500/10 text-emerald-600",
    },
    {
      icon: HeartHandshake,
      title: "Personalized Treatment",
      desc: "No general prescriptions. Your treatment plan is curated specifically to your body constitution and disease history.",
      color: "bg-rose-500/10 text-rose-600",
    },
    {
      icon: Video,
      title: "Online & In-clinic Consultation",
      desc: "Access professional healthcare anywhere in India via video call, or visit our physical clinics for physical checkups.",
      color: "bg-indigo-500/10 text-indigo-600",
    },
    {
      icon: TrendingUp,
      title: "Long-term Wellness",
      desc: "Receive customized diet plans, lifestyle routines, and continuous support to ensure you stay healthy long after the treatment.",
      color: "bg-sky-500/10 text-sky-600",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-mint/10 relative">
      <div className="custom-container space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <Badge variant="primary" className="py-1 px-3">Why Choose Us</Badge>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-main">
            Redefining Natural Healthcare
          </h2>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            We bridge the gap between traditional wisdom and modern diagnostic validation, ensuring 
            safe and effective healing.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Card 
                key={idx} 
                variant="default" 
                hoverEffect="lift"
                className="bg-white border border-border-main/50 p-6 sm:p-8 flex flex-col justify-between space-y-4 text-left"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-text-main">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
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
