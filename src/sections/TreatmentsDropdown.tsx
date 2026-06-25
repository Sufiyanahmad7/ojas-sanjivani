"use client";

import React from "react";
import { Sparkles, Activity } from "lucide-react";

interface TreatmentsDropdownProps {
  onItemClick?: () => void;
}

export function TreatmentsDropdown({ onItemClick }: TreatmentsDropdownProps) {
  const ayurvedaTreatments = [
    "Panchakarma",
    "Detox Therapy",
    "Rasayana Therapy",
    "Weight Management",
    "Immunity Booster",
    "Digestive Care",
    "Stress Management",
    "Lifestyle Correction",
  ];

  const homeopathyTreatments = [
    "Constitutional Treatment",
    "Acute Care",
    "Chronic Disease Management",
    "Allergy Treatment",
    "Skin Disorders",
    "Child Care",
    "Women's Health",
    "Mental Wellness",
  ];

  return (
    <div className="absolute top-full left-1/2 -translate-x-[40%] mt-2 w-[500px] bg-white rounded-2xl p-6 shadow-2xl border border-[#F3F4F6] grid grid-cols-2 gap-6 z-[1000] text-left">
      {/* Ayurveda Column (Left) */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-[#028174] border-b border-[#F4FAF9] pb-3">
          <Sparkles className="w-4 h-4 text-[#028174]" />
          <h4 className="font-heading text-xs font-extrabold uppercase tracking-widest text-[#028174]">
            Ayurveda
          </h4>
        </div>
        <ul className="space-y-1.5 pl-0 m-0">
          {ayurvedaTreatments.map((treatment) => (
            <li key={treatment}>
              <a
                href="#appointment"
                onClick={onItemClick}
                className="block text-xs font-medium text-[#4B5563] hover:text-[#028174] hover:bg-[#F4FAF9] px-3.5 py-2.5 rounded-xl transition-all duration-150"
              >
                {treatment}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Homeopathy Column (Right) */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-[#028174] border-b border-[#F4FAF9] pb-3">
          <Activity className="w-4 h-4 text-[#028174]" />
          <h4 className="font-heading text-xs font-extrabold uppercase tracking-widest text-[#028174]">
            Homeopathy
          </h4>
        </div>
        <ul className="space-y-1.5 pl-0 m-0">
          {homeopathyTreatments.map((treatment) => (
            <li key={treatment}>
              <a
                href="#appointment"
                onClick={onItemClick}
                className="block text-xs font-medium text-[#4B5563] hover:text-[#028174] hover:bg-[#F4FAF9] px-3.5 py-2.5 rounded-xl transition-all duration-150"
              >
                {treatment}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
