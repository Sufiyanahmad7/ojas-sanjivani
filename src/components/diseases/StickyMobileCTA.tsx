"use client";

import React from "react";
import { Phone, Calendar, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface StickyMobileCTAProps {
  phone: string;
}

export function StickyMobileCTA({ phone }: StickyMobileCTAProps) {
  // Convert standard phone format into direct whatsapp link
  const cleanPhone = phone.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=Hello,%20I%20want%20to%20book%20a%20consultation%20with%20Ojas%20Sanjivani.`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-border-main/60 p-3 flex gap-2 lg:hidden shadow-[0_-8px_24px_rgba(0,0,0,0.06)] animate-fade-in">
      
      {/* Call Now button */}
      <a
        href={`tel:${phone}`}
        className="flex-1 h-11 rounded-xl bg-slate-100 hover:bg-slate-200 text-text-main font-bold text-xs flex items-center justify-center gap-1.5 transition-colors border border-border-main/50"
      >
        <Phone className="w-4 h-4 text-[#028174]" />
        <span>Call</span>
      </a>

      {/* WhatsApp button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 h-11 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
      >
        <MessageSquare className="w-4 h-4 fill-current" />
        <span>WhatsApp</span>
      </a>

      {/* Book Appointment button */}
      <a
        href="#appointment-form"
        className="flex-[2] h-11 rounded-xl text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-opacity shadow-sm"
        style={{
          background: "linear-gradient(90deg, #01695F 0%, #028174 100%)",
        }}
      >
        <Calendar className="w-4 h-4" />
        <span>Book Consultation</span>
      </a>

    </div>
  );
}
