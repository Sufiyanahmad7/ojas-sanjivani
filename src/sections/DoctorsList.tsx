"use client";

import React from "react";
import Image from "next/image";
import { DOCTORS } from "@/constants";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { formatINR } from "@/utils";
import { Star, ShieldCheck, Award, Calendar } from "lucide-react";

export function DoctorsList() {
  return (
    <section id="doctors" className="py-12 sm:py-14 bg-bg-white relative">
      <div className="custom-container space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <Badge variant="primary" className="py-1 px-3 bg-[#028174]/10 text-[#028174] border-transparent">Expert Practitioners</Badge>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-main">
            Consult India's Top Ayurvedic & Homeopathic Clinicians
          </h2>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            All doctors undergo rigorous multi-stage licensing checks and clinical competency evaluations.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DOCTORS.map((doctor) => (
            <Card
              key={doctor.id}
              variant="default"
              hoverEffect="glow"
              className="flex flex-col h-full bg-bg-white border border-border-main/50 overflow-hidden"
            >
              {/* Doctor Image Header */}
              <div className="relative w-full aspect-[4/3] bg-gradient-to-b from-[#028174]/5 to-[#01695F]/15 border-b border-border-main/10 flex items-center justify-center overflow-hidden">
                {/* Fallback avatar if no custom image, otherwise render Image */}
                {doctor.image && doctor.image.startsWith("/images/") ? (
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-[#028174]/10 flex items-center justify-center text-[#028174]">
                    <Award className="w-8 h-8" />
                  </div>
                )}
                
                {/* Availability Badge */}
                <div className="absolute bottom-3 left-3">
                  <Badge variant="success" className="text-[9px] font-bold py-0.5 px-2 bg-bg-white/90 backdrop-blur-sm border border-[#028174]/20 text-[#028174]">
                    {doctor.availability}
                  </Badge>
                </div>
              </div>

              {/* Card Body */}
              <CardContent className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  {/* Rating block */}
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    <span className="text-xs font-extrabold text-text-main">{doctor.rating}</span>
                    <span className="text-[10px] text-text-secondary">({doctor.reviewsCount} reviews)</span>
                  </div>

                  <h3 className="font-heading text-base font-bold text-text-main flex items-center gap-1.5">
                    {doctor.name}
                    <ShieldCheck className="w-4.5 h-4.5 text-[#028174] shrink-0" />
                  </h3>
                  
                  <span className="text-xs font-semibold text-[#028174] block">
                    {doctor.specialty}
                  </span>

                  {/* Qualifications list */}
                  <p className="text-[10px] text-text-secondary leading-relaxed line-clamp-1">
                    {doctor.qualifications.join(" • ")}
                  </p>

                  <div className="text-[10px] font-bold text-text-secondary">
                    🎓 {doctor.experience} Years Experience
                  </div>
                </div>

                <div className="pt-3 border-t border-border-main/20 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-text-secondary block">Consultation Fee</span>
                    <span className="text-base font-black text-text-main">
                      {formatINR(doctor.fee)}
                    </span>
                  </div>
                  <Button 
                    size="sm" 
                    variant="primary" 
                    href="#appointment" 
                    className="gap-1 text-xs text-white border-0 shadow-soft-sm hover:opacity-90"
                    style={{
                      background: "linear-gradient(90deg, #01695F 0%, #028174 50%, #01695F 100%)",
                    }}
                  >
                    <Calendar className="w-3.5 h-3.5" /> Book Now
                  </Button>
                </div>

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
