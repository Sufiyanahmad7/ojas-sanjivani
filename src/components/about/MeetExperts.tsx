"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Star, ShieldCheck, Languages, GraduationCap } from "lucide-react";

export function MeetExperts() {
  const doctors = [
    {
      name: "Dr. Sanjeev Bhaskar",
      specialty: "Senior Ayurvedic Physician",
      qualifications: "BAMS (University of Delhi), MD (Ayurveda - Kayachikitsa)",
      experience: "18+ Years Experience",
      languages: ["English", "Hindi"],
      image: "/images/dr_sanjeev_bhaskar.png",
      rating: "4.9",
    },
    {
      name: "Dr. Ananya Roy",
      specialty: "Homeopathic Consultant",
      qualifications: "BHMS (NIH Kolkata), MD (Homeopathy - Repertory)",
      experience: "14+ Years Experience",
      languages: ["English", "Hindi", "Bengali"],
      image: "/images/dr_ananya_roy.png",
      rating: "4.8",
    },
    {
      name: "Dr. Madhavan Pillai",
      specialty: "Panchakarma & Spine Specialist",
      qualifications: "BAMS (Kerala Ayurveda Academy), MD (Panchakarma)",
      experience: "22+ Years Experience",
      languages: ["English", "Malayalam", "Tamil"],
      image: "/images/dr_madhavan_pillai.png",
      rating: "4.95",
    },
  ];

  return (
    <section id="doctors" className="py-10 sm:py-12 bg-bg-white relative">
      <div className="custom-container space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <Badge variant="primary" className="py-1 px-3">Expert Practitioners</Badge>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-main">
            Meet Our Natural Healthcare Experts
          </h2>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            All our doctors are fully certified, registered, and undergo rigorous evaluations 
            to provide safe, high-efficacy natural medical consultation.
          </p>
        </div>

        {/* Doctor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {doctors.map((doc, idx) => (
            <Card 
              key={idx} 
              variant="default" 
              hoverEffect="glow"
              className="flex flex-col h-full bg-white border border-border-main/50 overflow-hidden"
            >
              {/* Image Header with Availability / Specialty overlay */}
              <div className="relative w-full aspect-[4/3] bg-gradient-to-b from-mint to-light-green/20 border-b border-border-main/10 flex items-end justify-center overflow-hidden">
                <Image
                  src={doc.image}
                  alt={doc.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm py-0.5 px-2 rounded-full border border-amber-500/10 shadow-soft-sm">
                  <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                  <span className="text-[10px] font-black text-text-main">{doc.rating}</span>
                </div>
              </div>

              {/* Card Body */}
              <CardContent className="p-6 flex-1 flex flex-col justify-between space-y-5 text-left">
                <div className="space-y-3">
                  <div className="space-y-1">
                    <h3 className="font-heading text-lg font-bold text-text-main flex items-center gap-1.5">
                      {doc.name}
                      <ShieldCheck className="w-5 h-5 text-[#028174] shrink-0" />
                    </h3>
                    <span className="text-xs font-bold text-[#028174] block uppercase tracking-wider">
                      {doc.specialty}
                    </span>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-border-main/10 text-xs text-text-secondary">
                    {/* Qualifications */}
                    <div className="flex items-start gap-2">
                      <GraduationCap className="w-4 h-4 text-text-secondary shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{doc.qualifications}</span>
                    </div>

                    {/* Experience */}
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-[#028174]">🎓</span>
                      <span className="font-semibold text-text-main">{doc.experience}</span>
                    </div>

                    {/* Languages */}
                    <div className="flex items-center gap-2 pt-1">
                      <Languages className="w-4 h-4 text-text-secondary shrink-0" />
                      <div className="flex flex-wrap gap-1">
                        {doc.languages.map((lang, lIdx) => (
                          <span 
                            key={lIdx} 
                            className="bg-[#028174]/10 text-[#028174] text-[10px] font-bold px-1.5 py-0.5 rounded-md"
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <Button 
                    variant="primary" 
                    href="#appointment" 
                    className="w-full text-xs font-bold text-white py-2.5 rounded-full flex items-center justify-center gap-2 border-0 shadow-soft-sm hover:shadow-soft-md transition-all duration-200"
                    style={{
                      background: "linear-gradient(90deg, #01695F 0%, #028174 50%, #01695F 100%)",
                    }}
                  >
                    Book Consultation
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
