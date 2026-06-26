"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, CheckCircle2, Phone, Bot, Award, Users, Check } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Disease } from "@/data/diseases";

interface DiseaseHeroProps {
  disease: Disease;
}

export function DiseaseHero({ disease }: DiseaseHeroProps) {
  const isCategory = disease.isCategory;
  const headline = isCategory 
    ? "Natural Heart Disease Treatment with Ayurveda & Homeopathy"
    : `Treat ${disease.name} Naturally`;
  const subtitle = isCategory
    ? "Personalized natural treatment for heart-related conditions focusing on long-term wellness, improved circulation, and overall cardiovascular health."
    : disease.tagline;

  const trustBadges = isCategory
    ? ["Certified Doctors", "Online Consultation", "Authentic Medicines", "Safe Treatment"]
    : ["Certified Doctors", "Safe Medicines", "Online Consultation", "NABH Standards"];

  return (
    <section className="relative min-h-[520px] lg:min-h-[580px] flex items-start bg-gradient-to-b from-[#F5FBF8] via-[#F5FBF8]/80 to-white pt-8 pb-12 overflow-hidden">
      {/* Decorative leafy backgrounds/patterns */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#028174]/4 rounded-full filter blur-[80px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-[-10%] w-[350px] h-[350px] bg-[#0E9F6E]/3 rounded-full filter blur-[70px] pointer-events-none -z-10" />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none -z-10" />

      <div className="custom-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE: Narrative & CTAs */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-text-secondary select-none">
              <Link href="/" className="hover:text-[#028174] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-text-muted shrink-0" />
              <Link href="/#diseases" className="hover:text-[#028174] transition-colors">
                Diseases
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-text-muted shrink-0" />
              <span className="text-text-muted truncate max-w-[150px] sm:max-w-none">{disease.name}</span>
            </nav>

            {/* Badges and Heading */}
            <div className="space-y-2 sm:space-y-3">
              <Badge 
                variant="success" 
                className="py-1 px-3.5 bg-[#028174]/10 text-[#028174] border-[#028174]/20 animate-pulse text-xs"
              >
                {isCategory ? "Cardiovascular Care" : "Ayurveda & Homeopathy Care"}
              </Badge>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-text-main leading-tight tracking-tight">
                {isCategory ? (
                  <>
                    Natural <span className="bg-gradient-to-r from-[#01695F] to-[#028174] bg-clip-text text-transparent">Heart Disease</span> Treatment
                  </>
                ) : (
                  <>
                    Treat <span className="bg-gradient-to-r from-[#01695F] to-[#028174] bg-clip-text text-transparent">{disease.name}</span> Naturally
                  </>
                )}
              </h1>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed max-w-2xl">
                {subtitle}
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-lg">
              {[
                { label: isCategory ? "Cardiac Patients Treated" : "Patients Treated", value: disease.patientsTreated, icon: Users },
                { label: "Years Experience", value: disease.yearsExperience, icon: Award },
                { label: isCategory ? "Patient Satisfaction" : "Satisfaction Rate", value: disease.patientSatisfaction, icon: CheckCircle2 }
              ].map((stat, i) => (
                <div 
                  key={i} 
                  className="p-3 sm:p-4 rounded-2xl bg-white border border-border-main/55 shadow-soft-sm flex flex-col justify-between hover:shadow-soft-md transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-lg sm:text-xl font-black text-[#028174]">
                      {stat.value}
                    </span>
                    <stat.icon className="w-4 h-4 text-[#0E9F6E]" />
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-semibold text-text-secondary mt-1.5 leading-tight block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md sm:max-w-none">
              <Button 
                variant="primary" 
                href="#appointment-form"
                className="h-12 text-sm text-white font-bold border-0 px-8 hover:opacity-90 flex items-center justify-center gap-2"
                style={{
                  background: "linear-gradient(90deg, #01695F 0%, #028174 50%, #01695F 100%)",
                }}
              >
                {isCategory ? "Book Consultation" : "Book Free Consultation"}
              </Button>
              <Button 
                variant="outline" 
                href="/#assistant" 
                className="h-12 text-sm font-bold text-[#028174] border-[#028174]/30 hover:bg-[#028174]/5 bg-white/80"
              >
                <Bot className="w-4.5 h-4.5 mr-2" /> {isCategory ? "Talk to AI Doctor" : "Talk to AI Assistant"}
              </Button>
            </div>

            {/* Trust Badges List */}
            <div className="pt-4 border-t border-border-main/30">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                {trustBadges.map((badge, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-xs text-text-secondary font-bold">
                    <Check className="w-4 h-4 text-[#0E9F6E] stroke-[3.5]" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Dynamic Illustration */}
          <div className="lg:col-span-5 relative w-full aspect-square sm:max-w-md lg:max-w-none mx-auto flex items-center justify-center">
            {/* Visual background rings */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#028174]/5 to-[#0E9F6E]/10 rounded-full animate-spin-slow pointer-events-none" />
            <div className="absolute w-[85%] h-[85%] border-2 border-dashed border-[#028174]/15 rounded-full pointer-events-none" />

            {/* Card Containing Illustration */}
            <div className="relative w-[90%] h-[90%] bg-white rounded-[32px] p-6 shadow-soft-xl border border-border-main/50 overflow-hidden flex flex-col justify-center items-center">
              {disease.doctor.image ? (
                <div className="relative w-full h-[85%] rounded-[24px] overflow-hidden bg-[#F5FBF8]">
                  <Image 
                    src={disease.doctor.image} 
                    alt={disease.doctor.name} 
                    fill 
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-contain p-4 mix-blend-multiply" 
                    priority
                  />
                </div>
              ) : (
                <div className="relative w-full h-[85%] rounded-[24px] bg-[#F5FBF8] flex items-center justify-center text-[#028174]">
                  <Award className="w-24 h-24 stroke-[1]" />
                </div>
              )}
              {/* Doctor Tag */}
              <div className="absolute bottom-4 left-6 right-6 p-3 bg-white/95 backdrop-blur-sm rounded-2xl border border-border-main/60 shadow-soft-sm flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-full overflow-hidden bg-[#028174]/10 shrink-0">
                  <Image 
                    src={disease.doctor.image} 
                    alt={disease.doctor.name} 
                    fill 
                    sizes="44px"
                    className="object-cover object-top" 
                  />
                </div>
                <div className="text-left min-w-0">
                  <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider block">Specialist Assigned</span>
                  <span className="text-xs font-black text-text-main block truncate">{disease.doctor.name}</span>
                </div>
                <Badge variant="success" className="ml-auto text-[9px] py-0.5 px-2 shrink-0 bg-[#0E9F6E]/10 text-[#0E9F6E] border-transparent">
                  {disease.doctor.experience} Yrs Exp
                </Badge>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
