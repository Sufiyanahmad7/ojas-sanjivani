"use client";

import React from "react";
import { Video, UserCheck, Truck, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export function ConsultationNetwork() {
  const cards = [
    {
      title: "Online Consultation",
      icon: Video,
      features: [
        "Available Across India",
        "Secure Video Consultation",
        "Phone Consultation",
        "Digital Prescriptions",
      ],
      description: "Connect with our certified specialists online from any state in India. Receive secure calls, digital guidelines, and advice.",
    },
    {
      title: "In-Person Consultation",
      icon: UserCheck,
      features: [
        "Experienced Doctors",
        "Ayurveda & Homeopathy Experts",
        "Expanding Clinic Network",
        "Nearest Match Routing",
      ],
      description: "Consult in-person through our growing consultation network across multiple cities. We will match you with the nearest expert.",
    },
    {
      title: "Medicine Delivery",
      icon: Truck,
      features: [
        "Authentic Preparations",
        "Direct to Your Doorstep",
        "Trackable Safe Delivery",
        "Post-Consultation Pharmacy",
      ],
      description: "High-quality, certified Ayurveda formulations and homeopathic medicines dispatched safely to your home post-session.",
    },
  ];

  return (
    <section className="py-8 sm:py-10 bg-white border-t border-border-main/20 text-left">
      <div className="custom-container max-w-5xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-4">
          <Badge variant="success" className="py-1 px-3 bg-[#028174]/10 text-[#028174] border-transparent font-bold">
            Network Coverage
          </Badge>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-main">
            Our Consultation Network
          </h2>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
            Ojas Sanjivani matches patients with qualified health consultants and verified clinic partners across major cities in India.
          </p>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <Card
                key={idx}
                hoverEffect="lift"
                className="bg-white border border-border-main/55 rounded-2xl shadow-soft-sm p-6 sm:p-8 flex flex-col justify-between"
              >
                <CardContent className="p-0 space-y-5 text-left flex-1">
                  {/* Icon Circle */}
                  <div className="w-12 h-12 rounded-xl bg-[#F5FBF8] text-[#028174] flex items-center justify-center shadow-soft-sm shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title & description */}
                  <div className="space-y-2">
                    <h3 className="font-heading text-lg font-extrabold text-text-main">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Feature Bullets */}
                  <ul className="space-y-2 pt-2 border-t border-border-main/20">
                    {card.features.map((feat, fidx) => (
                      <li key={fidx} className="flex items-center gap-2 text-xs text-text-main font-semibold">
                        <span className="w-5 h-5 rounded-full bg-[#0FAF9A]/10 text-[#0FAF9A] flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3" />
                        </span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}
