"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { Sparkles } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-10 sm:py-12 bg-bg-white relative">
      <div className="custom-container max-w-5xl">
        <div 
          className="relative rounded-3xl overflow-hidden p-8 sm:p-12 md:p-16 text-center shadow-soft-xl border border-primary/5"
          style={{
            background: "linear-gradient(180deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.08)), #92DE8B",
          }}
        >
          
          {/* Ambient background circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#028174]/5 pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1E293B] leading-tight">
                Your Journey Towards Better Health Starts Here
              </h2>
              <p className="text-[#1E293B]/80 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-medium">
                Connect with our certified experts today and receive a personalized natural 
                treatment plan tailored entirely to your lifestyle and health history.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center pt-2">
              <Button
                variant="primary"
                size="lg"
                href="#appointment"
                className="bg-[#028174] hover:bg-[#01695F] text-white shadow-soft-md font-bold text-xs rounded-full"
              >
                Book Free Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="#digital-assistant"
                className="border-[#028174] text-[#028174] hover:bg-[#028174]/10 font-bold text-xs flex items-center gap-2 rounded-full"
              >
                <Sparkles className="w-4 h-4 text-[#028174] shrink-0" /> Chat with Digital Health Assistant
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
