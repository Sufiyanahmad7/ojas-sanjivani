"use client";

import React from "react";
import { TRUST_INDICATORS } from "@/constants";
import { Card } from "@/components/ui/Card";

export function TrustIndicators() {
  return (
    <section className="relative pt-12 pb-6 bg-mint/15 border-y border-border-main/40">
      <div className="custom-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_INDICATORS.map((indicator, index) => (
            <Card
              key={indicator.label}
              variant="glass"
              hoverEffect="lift"
              className="p-6 text-center border border-border-main/50 relative overflow-hidden"
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#028174]/20" />
              
              <div className="text-3xl sm:text-4xl font-black text-[#028174] font-heading tracking-tight mb-1">
                {indicator.value}
              </div>
              <div className="text-sm font-bold text-text-main mb-1.5">
                {indicator.label}
              </div>
              <div className="text-xs text-text-secondary leading-relaxed">
                {indicator.description}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
