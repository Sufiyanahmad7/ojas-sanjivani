"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";
import { CheckCircle2, Leaf } from "lucide-react";

export function AboutHero() {
  const highlights = [
    "25+ Years of Clinical Experience",
    "Certified Ayurveda & Homeopathy Doctors",
    "Personalized Root-Cause Treatment",
    "10,000+ Happy Patients",
    "Natural & Safe Medicines",
    "Online & In-Clinic Consultations",
  ];

  const trustStrip = [
    "25+ Years Experience",
    "Certified Doctors",
    "10,000+ Happy Patients",
    "100% Natural Treatment",
    "Evidence-Based Care",
  ];

  // Floating card animation configurations
  const floatAnimation = (delay = 0) => ({
    y: [-4, 4],
    transition: {
      duration: 3.5,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut" as const,
      delay,
    },
  });

  return (
    <section 
      className="relative overflow-hidden py-4 sm:py-6 lg:py-8 border-b border-white/10"
      style={{
        background: "linear-gradient(90deg, #01695F 0%, #028174 50%, #01695F 100%)",
      }}
    >
      
      {/* Botanical Leaf Patterns Backdrop (low opacity 3-5%) */}
      <div className="absolute top-10 left-4 opacity-[0.04] text-white pointer-events-none select-none">
        <svg width="180" height="180" viewBox="0 0 100 100" fill="currentColor">
          <path d="M10,90 Q90,90 90,10 Q10,10 10,90 Z" />
          <path d="M10,90 Q50,50 90,10" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>
      <div className="absolute bottom-10 right-4 opacity-[0.04] text-white pointer-events-none select-none rotate-180">
        <svg width="200" height="200" viewBox="0 0 100 100" fill="currentColor">
          <path d="M10,90 Q90,90 90,10 Q10,10 10,90 Z" />
          <path d="M10,90 Q50,50 90,10" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 opacity-[0.02] text-white pointer-events-none select-none">
        <Leaf className="w-80 h-80" />
      </div>

      <div className="custom-container relative z-10 space-y-6 sm:space-y-8">
        
        {/* Main 60/40 Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (60% equivalent: lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-4 text-left">
            <div className="space-y-2">
              {/* Green Pill Badge */}
              <Badge variant="success" className="py-0.5 px-2 bg-white/10 text-[#CFF7F3] border border-white/20 font-black text-[10px] inline-flex items-center gap-1 rounded-full">
                🌿 ABOUT OJAS SANJIVANI
              </Badge>
              
              <h1 className="font-heading text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-white leading-snug">
                Healing Through the Timeless Wisdom of{" "}
                <span className="text-[#CFF7F3] block sm:inline">Ayurveda</span> &{" "}
                <span className="text-white block sm:inline">Homeopathy</span>
              </h1>
              
              <p className="text-white/80 text-xs sm:text-[13px] leading-normal lg:leading-relaxed">
                At Ojas Sanjivani, we believe that true healing begins by identifying and treating 
                the root cause rather than simply managing symptoms. Our healthcare approach combines 
                the ancient science of Ayurveda, which restores balance through natural herbs, diet, 
                lifestyle, and detoxification, with the gentle, individualized principles of Homeopathy, 
                which stimulates the body's own healing response. Together, these complementary systems 
                enable us to provide safe, personalized, and holistic treatment plans for chronic and 
                lifestyle-related diseases. Every consultation is guided by experienced doctors who focus 
                on long-term wellness, disease prevention, and improving your overall quality of life 
                through natural healthcare.
              </p>
            </div>

            {/* 2-Column Trust Highlights - tight layout */}
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10">
              {highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#CFF7F3] shrink-0" />
                  <span className="text-[11px] sm:text-xs font-semibold text-white leading-none">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                variant="secondary"
                size="md"
                href="#appointment"
                className="bg-white text-[#028174] hover:bg-[#CFF7F3] shadow-soft-sm font-bold text-xs px-5 h-10"
              >
                Book Free Consultation
              </Button>
              <Button
                variant="outline"
                size="md"
                href="#philosophy"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-bold text-xs px-5 h-10"
              >
                Our Healthcare Philosophy
              </Button>
            </div>
          </div>

          {/* Right Column (40% equivalent: lg:col-span-5) */}
          <div className="lg:col-span-5 relative flex justify-center items-center mt-4 lg:mt-0">
            {/* Main Collage wrapper - height scaled down to prevent scrolling */}
            <div className="relative w-full max-w-[340px] lg:max-w-[380px] h-[280px] sm:h-[320px] lg:h-[340px]">
              
              {/* Doctor-Hero Card in Foreground */}
              <div className="absolute right-0 top-0 w-[65%] h-[88%] rounded-2xl overflow-hidden shadow-soft-lg border border-white/10 bg-white rotate-2 transition-transform duration-500 hover:rotate-0 hover:scale-[1.02] z-25">
                <Image
                  src="/images/doctor-hero.png"
                  alt="Modern consultation room"
                  fill
                  className="object-cover object-top"
                  sizes="300px"
                />
              </div>

              {/* Bottom Left Card (Ayurveda Consultation/Card Image) in Background */}
              <div className="absolute left-0 bottom-2 w-[55%] h-[55%] rounded-2xl overflow-hidden shadow-soft-xl border-4 border-white bg-white -rotate-3 transition-transform duration-500 hover:rotate-0 hover:scale-[1.02] z-10">
                <Image
                  src="/images/ayurveda-card.png"
                  alt="Ayurvedic medicine and consultation"
                  fill
                  className="object-cover"
                  sizes="250px"
                />
              </div>

              {/* Top Left/Center Card (Homeopathy/Card Image) in Midground */}
              <div className="absolute left-[10%] top-2 w-[48%] h-[46%] rounded-2xl overflow-hidden shadow-soft-xl border-4 border-white bg-white rotate-6 transition-transform duration-500 hover:rotate-0 hover:scale-[1.02] z-15">
                <Image
                  src="/images/homeopathy-card.png"
                  alt="Homeopathic natural remedies"
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>

              {/* Floating Card A: Ayurveda */}
              <motion.div 
                animate={floatAnimation(0)}
                className="absolute -top-3 -left-3 z-30"
              >
                <div className="bg-white/95 backdrop-blur-sm border border-primary/10 rounded-lg py-1 px-2.5 shadow-soft-md flex items-center gap-1">
                  <span className="text-[10px]">🌿</span>
                  <div className="text-left leading-none">
                    <span className="text-[8px] font-black text-primary uppercase block">Ayurveda</span>
                    <span className="text-[7px] font-bold text-text-secondary">Herbal Healing</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card B: Homeopathy */}
              <motion.div 
                animate={floatAnimation(1)}
                className="absolute top-1/2 -right-4 -translate-y-1/2 z-30"
              >
                <div className="bg-white/95 backdrop-blur-sm border border-secondary/15 rounded-lg py-1 px-2.5 shadow-soft-md flex items-center gap-1">
                  <span className="text-[10px]">💊</span>
                  <div className="text-left leading-none">
                    <span className="text-[8px] font-black text-secondary-hover uppercase block">Homeopathy</span>
                    <span className="text-[7px] font-bold text-text-secondary">Gentle Care</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card C: Holistic Wellness */}
              <motion.div 
                animate={floatAnimation(1.8)}
                className="absolute -bottom-3 left-1/3 z-30"
              >
                <div className="bg-white/95 backdrop-blur-sm border border-rose-500/10 rounded-lg py-1 px-2.5 shadow-soft-md flex items-center gap-1">
                  <span className="text-[10px] text-rose-500">❤️</span>
                  <div className="text-left leading-none">
                    <span className="text-[8px] font-black text-text-main block">Holistic Wellness</span>
                    <span className="text-[7px] font-bold text-text-secondary">Treat Root Cause</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

        </div>

        {/* Bottom Trust Strip - very compact padding */}
        <div className="bg-white rounded-xl shadow-soft-sm border border-border-main/40 p-3">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:items-center lg:justify-between gap-3 text-center">
            {trustStrip.map((item, idx) => (
              <React.Fragment key={idx}>
                <div className="flex-1 min-w-[100px]">
                  <span className="text-[11px] sm:text-xs font-extrabold text-text-main block sm:inline-block">
                    {item}
                  </span>
                </div>
                {/* Horizontal spacer dividers (visible on desktop only) */}
                {idx < trustStrip.length - 1 && (
                  <span className="hidden lg:inline text-border-main/50 font-light pointer-events-none">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
