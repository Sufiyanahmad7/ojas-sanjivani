"use client";

import React from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import * as Illustrations from "@/components/ui/Illustrations";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function ServicesOverview() {
  const cards = [
    {
      title: "Ayurveda",
      subtitle: "Natural & Complete Balance",
      desc: "Ancient natural healthcare focused on restoring balance through herbs, therapies, nutrition, and lifestyle.",
      imageSrc: "/images/ayurveda-card-v2.png",
      imageBg: "bg-[#EFECE6]", // Matching the warm wood/clay backdrop of the Ayurveda photo
      imagePosition: "object-center",
      bgClass: "bg-gradient-to-br from-[#F2FCF9] to-[#ECFDF5]/60",
      borderColor: "border-[#028174]/15 hover:border-[#028174]/40 hover:shadow-[#028174]/5",
      accentColor: "#028174",
      iconBg: "bg-white border-[#028174]/10 shadow-[#028174]/5",
      illustration: (
        <Illustrations.Ayurveda
          size={24}
          primaryColor="#028174"
          secondaryColor="#0AB68B"
          lightGreen="#E6F4F0"
          mintColor="#F2FCF9"
        />
      ),
      treatments: [
        "Sexual Wellness",
        "Panchakarma",
        "Digestive Disorders",
        "Skin Diseases",
        "Weight Management",
        "Arthritis Care",
      ],
      ctaLabel: "Explore Ayurveda",
      href: "#appointment",
    },
    {
      title: "Homeopathy",
      subtitle: "Gentle & Individualized Healing",
      desc: "Gentle individualized treatment using natural remedies that stimulate the body's own healing response.",
      imageSrc: "/images/homeopathy-card-v.png",
      imageBg: "bg-[#F4F5F6]", // Matching the cool, clean white backdrop of the Homeopathy photo
      imagePosition: "object-center",
      bgClass: "bg-gradient-to-br from-[#F5F9FF] to-[#EFF6FF]/60",
      borderColor: "border-[#2563EB]/15 hover:border-[#2563EB]/40 hover:shadow-[#2563EB]/5",
      accentColor: "#2563EB",
      iconBg: "bg-white border-[#2563EB]/10 shadow-[#2563EB]/5",
      illustration: (
        <Illustrations.Homeopathy
          size={24}
          primaryColor="#2563EB"
          secondaryColor="#3B82F6"
          lightGreen="#EBF3FF"
          mintColor="#F5F9FF"
        />
      ),
      treatments: [
        "Allergy Relief",
        "Migraine",
        "Thyroid Disorders",
        "Respiratory Care",
        "Women's Health",
        "Child Care",
      ],
      ctaLabel: "Explore Homeopathy",
      href: "#appointment",
    },
  ];

  return (
    <section id="services" className="pt-6 pb-12 sm:pt-8 sm:pb-14 bg-white relative overflow-hidden">
      {/* Background soft organic gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-[#0AB68B]/4 filter blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[450px] h-[450px] rounded-full bg-[#2563EB]/4 filter blur-[100px] pointer-events-none -z-10" />

      <div className="custom-container space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2.5">
          <Badge variant="success" className="py-1 px-3 bg-[#028174]/10 text-[#028174] border-[#028174]/20">
            Our Medical Systems
          </Badge>

          <motion.h2
            className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1E293B] tracking-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Two Paths to Wellness
          </motion.h2>

          <motion.p
            className="text-[#64748B] text-xs sm:text-sm leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Choose the healing approach that best suits your health journey. Both systems focus on identifying and treating the root cause naturally for lasting wellness.
          </motion.p>
        </div>

        {/* 2-Column Grid of Cards */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              className={`flex flex-col md:flex-row rounded-[24px] border ${card.bgClass} ${card.borderColor} overflow-hidden shadow-sm transition-all duration-500 relative group`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
            >
              {/* Left Column: Image (Desktop only side-by-side, mobile stacked) */}
              <div className={`relative w-full md:w-[170px] lg:w-[180px] h-[180px] md:h-auto min-h-[180px] shrink-0 overflow-hidden ${card.imageBg} border-b md:border-b-0 md:border-r border-[#1E293B]/5`}>
                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 180px"
                />

                {/* Floating Glassmorphic Icon Badge */}
                <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm border border-[#1E293B]/10 flex items-center justify-center shadow-sm z-10">
                  {card.illustration}
                </div>
              </div>

              {/* Right Column: Text & Content */}
              <div className="flex flex-col flex-1 p-6 sm:p-7 justify-between">
                <div>
                  {/* Header Info */}
                  <div className="space-y-1">
                    <span
                      className="text-[10px] uppercase font-bold tracking-wider"
                      style={{ color: card.accentColor }}
                    >
                      {card.subtitle}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#1E293B] tracking-tight">
                      {card.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-[#64748B] mt-2 leading-relaxed">
                    {card.desc}
                  </p>

                  {/* Separation line */}
                  <div className="h-px bg-current opacity-[0.07] my-3.5" style={{ color: card.accentColor }} />

                  {/* Checklist */}
                  <div className="space-y-2 mb-4">
                    <h4 className="text-[9px] font-bold uppercase tracking-wider text-[#1E293B]/70">
                      Key Treatments & Focus Areas
                    </h4>
                    <div className="grid grid-cols-2 gap-x-3 gap-y-1.5">
                      {card.treatments.slice(0, 6).map((treatment) => (
                        <div key={treatment} className="flex items-center gap-2">
                          <div
                            className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 opacity-90"
                            style={{ backgroundColor: `${card.accentColor}10` }}
                          >
                            <Check className="w-2.5 h-2.5 stroke-[3]" style={{ color: card.accentColor }} />
                          </div>
                          <span className="text-xs sm:text-[13px] font-semibold text-[#1E293B] leading-tight truncate">
                            {treatment}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Pinned CTA */}
                <div className="pt-1.5">
                  <Button
                    variant="outline"
                    className="w-full justify-center group/btn rounded-xl py-3.5 text-xs font-bold transition-all duration-300 border bg-white"
                    style={{
                      borderColor: `${card.accentColor}30`,
                      color: card.accentColor,
                    }}
                    href={card.href}
                    onMouseEnter={(e) => {
                      const btn = e.currentTarget;
                      btn.style.backgroundColor = card.accentColor;
                      btn.style.color = "#FFFFFF";
                      btn.style.borderColor = card.accentColor;
                    }}
                    onMouseLeave={(e) => {
                      const btn = e.currentTarget;
                      btn.style.backgroundColor = "#FFFFFF";
                      btn.style.color = card.accentColor;
                      btn.style.borderColor = `${card.accentColor}30`;
                    }}
                  >
                    {card.ctaLabel}
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
