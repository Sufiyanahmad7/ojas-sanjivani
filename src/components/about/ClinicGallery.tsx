"use client";

import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";

export function ClinicGallery() {
  const galleryItems = [
    {
      title: "Clinic Reception",
      category: "Patient Care",
      image: "/images/doctor-hero.png",
    },
    {
      title: "Ayurveda Therapy Room",
      category: "Treatments",
      image: "/images/ayurveda-card.png",
    },
    {
      title: "Homeopathy Pharmacy",
      category: "Medicines",
      image: "/images/homeopathy-card.png",
    },
    {
      title: "Consultation Suite",
      category: "Diagnostics",
      image: "/images/dr_sanjeev_bhaskar.png",
    },
    {
      title: "Doctor Interaction Room",
      category: "Patient Care",
      image: "/images/dr_ananya_roy.png",
    },
    {
      title: "Patient Counselling Center",
      category: "Wellness",
      image: "/images/dr_madhavan_pillai.png",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-mint/5 relative">
      <div className="custom-container space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <Badge variant="primary" className="py-1 px-3">Our Facilities</Badge>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-main">
            Inside Ojas Sanjivani Clinics
          </h2>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            Take a look at our clinical workspaces, wellness treatment areas, and authentic pharmacies 
            designed to deliver a hygienic, healing environment.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryItems.map((item, idx) => (
            <div 
              key={idx} 
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft-md group border border-border-main/50 cursor-pointer bg-white"
            >
              {/* Image with hover scale zoom */}
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
              </div>

              {/* Black/Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90 transition-opacity duration-300 flex flex-col justify-end p-5 text-left" />

              {/* Text info */}
              <div className="absolute bottom-5 left-5 right-5 text-left space-y-1 z-10">
                <span className="text-[10px] font-black text-primary bg-mint px-2 py-0.5 rounded-full uppercase tracking-wider">
                  {item.category}
                </span>
                <h3 className="font-heading text-base font-bold text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
