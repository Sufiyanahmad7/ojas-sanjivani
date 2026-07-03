"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Play, Quote, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Testimonial } from "@/data/diseases";

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [index, setIndex] = useState(0);

  const prevStep = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextStep = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  if (!testimonials || testimonials.length === 0) return null;

  const current = testimonials[index];

  // Dynamic sanitization to replace medicine box thumbnails with clean disease/vitality illustrations
  let displayThumbnail = current.videoThumbnail;
  if (displayThumbnail && displayThumbnail.includes("product-")) {
    const diseaseLower = (current.disease || "").toLowerCase();
    if (
      diseaseLower.includes("erectile") || 
      diseaseLower.includes("ejaculation") || 
      diseaseLower.includes("libido") || 
      diseaseLower.includes("sexual") || 
      diseaseLower.includes("potency") ||
      diseaseLower.includes("vitality") ||
      diseaseLower.includes("dysfunction") ||
      diseaseLower.includes("oligospermia")
    ) {
      displayThumbnail = "/images/diseases/sexual-problems.png";
    } else if (diseaseLower.includes("diabetes") || diseaseLower.includes("sugar") || diseaseLower.includes("diabetic")) {
      displayThumbnail = "/images/diseases/diabetes.png";
    } else if (
      diseaseLower.includes("acid") || 
      diseaseLower.includes("ibs") || 
      diseaseLower.includes("stomach") || 
      diseaseLower.includes("digestion") || 
      diseaseLower.includes("piles") ||
      diseaseLower.includes("fatty liver") ||
      diseaseLower.includes("gallbladder") ||
      diseaseLower.includes("jaundice")
    ) {
      displayThumbnail = "/images/diseases/digestion.png";
    } else if (diseaseLower.includes("hair") || diseaseLower.includes("skin") || diseaseLower.includes("psoriasis") || diseaseLower.includes("alopecia")) {
      displayThumbnail = "/images/diseases/hair-skin.png";
    } else if (
      diseaseLower.includes("migraine") || 
      diseaseLower.includes("insomnia") || 
      diseaseLower.includes("vertigo") || 
      diseaseLower.includes("anxiety") || 
      diseaseLower.includes("panic") || 
      diseaseLower.includes("depressive") ||
      diseaseLower.includes("burnout") ||
      diseaseLower.includes("neuro") ||
      diseaseLower.includes("stress")
    ) {
      displayThumbnail = "/images/diseases/stress-anxiety.png";
    } else {
      displayThumbnail = "/images/hero-bg.png";
    }
  }

  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-[#F5FBF8] border-y border-border-main/20 relative overflow-hidden">
      <div className="custom-container space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-5xl mx-auto">
          <div className="space-y-4 text-left">
            <Badge variant="success" className="py-1 px-3 bg-[#028174]/10 text-[#028174] border-transparent">
              Patient Recovery Stories
            </Badge>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-main">
              Real Patient Stories
            </h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              Read how our personalized treatment protocols have restored health and relief.
            </p>
          </div>

          {/* Google Review Badge & Controls */}
          <div className="flex items-center gap-6 shrink-0 self-start md:self-end">
            <div className="p-3 bg-white border border-border-main/55 rounded-2xl flex items-center gap-2.5 shadow-soft-sm">
              <span className="text-[10px] font-black text-[#1E293B]">Google Rating</span>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <span className="text-[10px] font-bold text-text-secondary">4.9/5</span>
            </div>
            
            <div className="flex gap-2">
              <button 
                onClick={prevStep}
                className="w-10 h-10 rounded-full border border-border-main bg-white hover:border-[#028174] hover:text-[#028174] flex items-center justify-center text-text-secondary transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextStep}
                className="w-10 h-10 rounded-full border border-border-main bg-white hover:border-[#028174] hover:text-[#028174] flex items-center justify-center text-text-secondary transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Card Container */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-white border border-border-main/50 p-6 md:p-10 rounded-[24px] shadow-soft-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
                
                {/* Left Side: Video Testimonial Preview */}
                <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 border border-border-main/10 flex items-center justify-center group shadow-soft-sm">
                  {displayThumbnail ? (
                    <Image
                      src={displayThumbnail}
                      alt={current.patientName}
                      fill
                      sizes="(max-width: 1024px) 100vw, 400px"
                      className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[#028174]/10" />
                  )}
                  {/* Play Button overlay */}
                  <div className="w-14 h-14 rounded-full bg-white/95 backdrop-blur-sm text-[#028174] flex items-center justify-center shadow-lg group-hover:bg-[#028174] group-hover:text-white transition-all cursor-pointer z-10">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                  <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm py-1 px-3.5 rounded-full text-white text-[9px] font-bold">
                    ▶ Watch Video Review
                  </div>
                </div>

                {/* Right Side: Text & Info */}
                <div className="lg:col-span-7 space-y-6 relative">
                  <Quote className="absolute top-[-20px] right-0 w-16 h-16 text-[#028174]/5 pointer-events-none" />

                  {/* Header badges */}
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="success" className="bg-[#028174]/10 text-[#028174] border-transparent font-bold">
                      {current.disease}
                    </Badge>
                    <Badge variant="outline" className="text-[10px] font-bold">
                      ⏱️ Treated for: {current.duration}
                    </Badge>
                  </div>

                  <p className="text-xs sm:text-sm text-text-main italic leading-relaxed pt-2">
                    "{current.reviewText}"
                  </p>

                  <div className="pt-4 border-t border-border-main/20 flex justify-between items-center">
                    <div>
                      <h4 className="text-xs sm:text-sm font-extrabold text-text-main flex items-center gap-1.5">
                        {current.patientName}
                        <CheckCircle2 className="w-4 h-4 text-[#0E9F6E] shrink-0" />
                      </h4>
                      <span className="text-[10px] text-text-secondary">Verified Recovered Case</span>
                    </div>

                    <div className="text-right">
                      <div className="flex gap-0.5 justify-end">
                        {[...Array(current.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-500 text-amber-500" />
                        ))}
                      </div>
                      <span className="text-[9px] font-bold text-text-secondary block mt-1">
                        📍 {current.location}
                      </span>
                    </div>
                  </div>
                </div>

              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
