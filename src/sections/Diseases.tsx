"use client";

import React from "react";
import { DISEASE_CATEGORIES } from "@/constants";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const imageMap: Record<string, string> = {
  digestion: "/images/diseases/digestion.png",
  "joint-pain": "/images/diseases/joint-pain.png",
  "hair-skin": "/images/diseases/hair-skin.png",
  diabetes: "/images/diseases/diabetes.png",
  "weight-management": "/images/diseases/weight-management.png",
  "stress-anxiety": "/images/diseases/stress-anxiety.png",
  "women-health": "/images/diseases/women-health.png",
  respiratory: "/images/diseases/respiratory.png",
};

export function Diseases() {
  return (
    <section id="diseases" className="py-12 sm:py-14 bg-mint/10 border-y border-border-main/30 relative">
      <div className="custom-container space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <Badge variant="primary" className="py-1 px-3">
              Expert Care Specialties
            </Badge>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1E293B] tracking-tight">
              Explore Treatments by Health Category
            </h2>
            <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed">
              Find customized remedies and expert counseling for chronic diseases and lifestyle disorders.
            </p>
          </div>
          <Button variant="outline" className="self-center md:self-end group bg-white border-[#028174]/20 text-[#028174] hover:bg-[#028174] hover:text-white" href="#appointment">
            View All Conditions
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Diseases Grid/Carousel Container */}
        {/* On mobile: horizontal scrollable carousel with snap-scrolling. On desktop: 4-column grid. */}
        <div className="flex md:grid md:grid-cols-3 lg:grid-cols-4 gap-6 overflow-x-auto md:overflow-visible no-scrollbar snap-x snap-mandatory pb-4 -mx-4 px-4 md:mx-0 md:px-0">
          {DISEASE_CATEGORIES.map((category) => {
            const categoryImage = imageMap[category.id] || "/images/diseases/digestion.png";
            return (
              <Link 
                href={`#appointment`} 
                key={category.id}
                className="snap-center shrink-0 w-[270px] sm:w-[300px] md:w-auto block group"
              >
                <Card
                  variant="default"
                  hoverEffect="glow"
                  className="h-full flex flex-col justify-between p-4 bg-white border border-[#E2E8F0]/80 rounded-[20px] transition-all duration-300 shadow-soft-sm overflow-hidden"
                >
                  <div className="space-y-4">
                    {/* Visual Image Container */}
                    <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#F1F5F9] shadow-inner-sm">
                      <Image
                        src={categoryImage}
                        alt={category.name}
                        fill
                        sizes="(max-width: 768px) 300px, 250px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        priority={category.id === "digestion"}
                      />
                      {/* Gradient overlay for premium feel */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />
                    </div>

                    {/* Text Title */}
                    <h3 className="font-heading text-base font-extrabold text-[#1E293B] group-hover:text-[#028174] transition-colors leading-tight px-1">
                      {category.name}
                    </h3>
                  </div>

                  {/* Metadata and Book Call CTA */}
                  <div className="mt-5 pt-3 border-t border-[#F1F5F9] flex items-center justify-between px-1">
                    <span className="text-[10px] font-bold text-[#028174] bg-[#028174]/10 px-2 py-0.5 rounded-full">
                      {category.treatmentCount}
                    </span>
                    <span className="text-[10px] font-bold text-[#64748B] group-hover:text-[#028174] transition-colors flex items-center gap-1">
                      Book Consult <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
