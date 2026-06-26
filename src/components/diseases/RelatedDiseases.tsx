"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { DiseaseIllustration } from "@/components/diseases/DiseaseIllustration";
import { DISEASES_DATA } from "@/data/diseases";

interface RelatedDiseasesProps {
  relatedSlugs: string[];
}

export function RelatedDiseases({ relatedSlugs }: RelatedDiseasesProps) {
  // Resolve slugs to full disease objects
  const relatedList = relatedSlugs
    .map((slug) => DISEASES_DATA[slug])
    .filter(Boolean);

  if (relatedList.length === 0) return null;

  return (
    <section className="py-16 sm:py-20 bg-[#F5FBF8] border-y border-border-main/20 relative">
      <div className="custom-container space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <Badge variant="success" className="py-1 px-3 bg-[#028174]/10 text-[#028174] border-transparent">
            Related Conditions
          </Badge>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-main">
            You May Also Like
          </h2>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            Read about related digestive and metabolic disorders treated successfully at Ojas Sanjivani.
          </p>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
          {relatedList.map((disease) => (
            <Card
              key={disease.slug}
              variant="default"
              hoverEffect="lift"
              className="flex flex-col h-full bg-white border border-border-main/50 overflow-hidden hover:border-[#028174]/30 group"
            >
              {/* Card Image */}
              <div className="relative w-full aspect-[4/3] bg-[#F5FBF8] flex items-center justify-center border-b border-border-main/10 overflow-hidden">
                {disease.heroImage ? (
                  <DiseaseIllustration
                    imagePath={disease.heroImage}
                    alt={disease.name}
                    fill
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-[#028174]/10 flex items-center justify-center text-[#028174]">
                    <Sparkles className="w-6 h-6" />
                  </div>
                )}
              </div>

              {/* Card Content */}
              <CardContent className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-heading text-base font-bold text-text-main group-hover:text-[#028174] transition-colors leading-tight">
                    {disease.name}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-text-secondary leading-relaxed line-clamp-3">
                    {disease.overview}
                  </p>
                </div>

                <div className="pt-4 border-t border-border-main/20 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-[#0E9F6E] bg-[#0E9F6E]/5 py-1 px-3 rounded-full">
                    {disease.recovery} Recovery
                  </span>
                  
                  <Link 
                    href={`/diseases/${disease.slug}`} 
                    className="text-xs font-bold text-[#028174] hover:text-[#01695F] inline-flex items-center gap-1 group/btn transition-colors"
                  >
                    Read More 
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
