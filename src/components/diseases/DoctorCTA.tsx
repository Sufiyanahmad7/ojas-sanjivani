"use client";

import React from "react";
import Image from "next/image";
import { Phone, Calendar, Star, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Doctor } from "@/data/diseases";

interface DoctorCTAProps {
  doctor: Doctor;
}

export function DoctorCTA({ doctor }: DoctorCTAProps) {
  return (
    <section className="py-16 sm:py-20 bg-white relative">
      <div className="custom-container">
        
        {/* Banner with brand gradient background */}
        <div 
          className="relative max-w-5xl mx-auto rounded-[32px] overflow-hidden text-white p-8 md:p-12 shadow-soft-xl border border-white/10"
          style={{
            background: "linear-gradient(135deg, #015049 0%, #028174 50%, #015049 100%)",
          }}
        >
          {/* Subtle design rings */}
          <div className="absolute top-[-20%] right-[-10%] w-[350px] h-[350px] bg-white/5 rounded-full pointer-events-none" />
          <div className="absolute bottom-[-15%] left-[-10%] w-[250px] h-[250px] bg-white/5 rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
            
            {/* Left Column: Doctor Profile Card */}
            <div className="lg:col-span-5 w-full max-w-sm mx-auto">
              <Card className="bg-white text-text-main p-6 rounded-2xl border-0 shadow-soft-lg flex flex-col items-center text-center">
                {/* Doctor Avatar */}
                <div className="relative w-28 h-28 rounded-full overflow-hidden bg-[#F5FBF8] border-4 border-[#0E9F6E]/10 shrink-0">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    sizes="112px"
                    className="object-cover object-top"
                  />
                </div>
                
                {/* Info */}
                <div className="mt-4 space-y-1.5">
                  <h3 className="font-heading text-base font-extrabold flex items-center justify-center gap-1.5">
                    {doctor.name}
                    <ShieldCheck className="w-4.5 h-4.5 text-[#028174] shrink-0" />
                  </h3>
                  <span className="text-[10px] sm:text-xs font-bold text-[#0E9F6E] uppercase tracking-wider block">
                    {doctor.specialization}
                  </span>
                  <span className="text-[10px] text-text-secondary block font-semibold leading-none">
                    {doctor.qualification}
                  </span>
                  
                  {/* Rating & Exp */}
                  <div className="flex items-center justify-center gap-4 pt-2.5">
                    <div className="flex items-center gap-0.5">
                      <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      <span className="text-xs font-bold text-text-main">4.9</span>
                    </div>
                    <div className="w-px h-3.5 bg-border-main" />
                    <span className="text-[10px] font-bold text-text-secondary">
                      🎓 {doctor.experience} Yrs Exp
                    </span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Column: CTA details */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="text-xs font-black uppercase tracking-wider bg-white/15 px-3 py-1 rounded-full text-[#CFF7F3]">
                Direct Doctor Access
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
                Consult With Our Clinical Specialist
              </h2>
              <p className="text-[#CFF7F3] text-xs sm:text-sm leading-relaxed max-w-xl">
                {doctor.description} Schedule a free diagnostic call today to receive a personalized Ayurvedic or Homeopathic prescription.
              </p>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                <Button 
                  variant="primary" 
                  href="#appointment-form"
                  className="h-12 px-8 text-sm font-bold text-[#028174] bg-white border-0 hover:bg-slate-50 shadow-soft-sm flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4.5 h-4.5" /> Book Consultation
                </Button>
                <Button 
                  variant="outline" 
                  href={`tel:${doctor.phone}`}
                  className="h-12 px-8 text-sm font-bold text-white border-white/30 hover:bg-white/10 bg-transparent flex items-center justify-center gap-2"
                >
                  <Phone className="w-4.5 h-4.5" /> Call: {doctor.phone.replace(/(\+91)(\d{5})(\d{5})/, "$1 $2 $3")}
                </Button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
