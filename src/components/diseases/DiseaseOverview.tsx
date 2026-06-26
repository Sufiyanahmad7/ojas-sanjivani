"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Clock, AlertTriangle, ShieldCheck, HelpCircle } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { DiseaseIllustration } from "./DiseaseIllustration";
import { Disease } from "@/data/diseases";

interface DiseaseOverviewProps {
  disease: Disease;
}

export function DiseaseOverview({ disease }: DiseaseOverviewProps) {
  const [activeTab, setActiveTab] = useState<"ayurveda" | "homeopathy">("ayurveda");

  const overviewMetrics = [
    { label: "Clinical Duration", value: disease.duration, icon: Clock, color: "text-[#028174] bg-[#028174]/15" },
    { label: "Complication Risk", value: disease.risk, icon: AlertTriangle, color: "text-amber-600 bg-amber-500/10" },
    { label: "Common Age Group", value: disease.commonAge, icon: HelpCircle, color: "text-indigo-600 bg-indigo-500/10" },
    { label: "Average Recovery", value: disease.recovery, icon: ShieldCheck, color: "text-[#0E9F6E] bg-[#0E9F6E]/10" }
  ];

  return (
    <section id="overview" className="py-16 sm:py-20 bg-white relative">
      <div className="custom-container space-y-12 sm:space-y-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Image / Illustration Container */}
          <div className="lg:col-span-5 relative w-full aspect-[4/3] sm:max-w-md lg:max-w-none mx-auto bg-[#F5FBF8] rounded-[24px] border border-border-main/50 overflow-hidden shadow-soft-md">
            {disease.heroImage ? (
              <DiseaseIllustration
                imagePath={disease.heroImage}
                alt={`${disease.name} Overview`}
                fill
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-[#028174]">
                <HelpCircle className="w-16 h-16 stroke-[1]" />
              </div>
            )}
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-border-main/50 text-left">
              <span className="text-[10px] font-bold text-[#028174] uppercase tracking-wider block">Clinical Fact</span>
              <p className="text-xs text-text-secondary mt-0.5 leading-relaxed">
                Early intervention prevents the need for invasive surgical procedures by 90%.
              </p>
            </div>
          </div>

          {/* RIGHT: Heading & Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            <div className="space-y-3">
              <Badge variant="success" className="py-1 px-3 bg-[#028174]/10 text-[#028174] border-transparent">
                Overview
              </Badge>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-main">
                Understanding {disease.name}
              </h2>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed pt-2">
                {disease.overview}
              </p>
            </div>

            {/* Perspective Selector Tabs */}
            <div className="space-y-4 pt-2">
              <div className="flex border-b border-border-main">
                <button
                  onClick={() => setActiveTab("ayurveda")}
                  className={`py-3 px-5 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer ${
                    activeTab === "ayurveda"
                      ? "border-[#028174] text-[#028174]"
                      : "border-transparent text-text-secondary hover:text-text-main"
                  }`}
                >
                  Ayurvedic Perspective
                </button>
                <button
                  onClick={() => setActiveTab("homeopathy")}
                  className={`py-3 px-5 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer ${
                    activeTab === "homeopathy"
                      ? "border-[#028174] text-[#028174]"
                      : "border-transparent text-text-secondary hover:text-text-main"
                  }`}
                >
                  Homeopathic Perspective
                </button>
              </div>

              <div className="min-h-[140px] bg-[#F5FBF8]/40 p-5 rounded-2xl border border-border-main/40">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="text-xs sm:text-sm text-text-secondary leading-relaxed"
                  >
                    {activeTab === "ayurveda" ? (
                      <div className="space-y-2">
                        <strong className="text-[#028174] block">Root Cause: Dosha Imbalance</strong>
                        <p>{disease.ayurvedaPerspective}</p>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <strong className="text-[#028174] block">Root Cause: Constitutional Susceptibility</strong>
                        <p>{disease.homeopathyPerspective}</p>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Bottom Key Info Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {overviewMetrics.map((metric, i) => (
                <div 
                  key={i}
                  className="p-4 bg-white border border-border-main/55 rounded-2xl shadow-soft-sm text-left flex flex-col justify-between"
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${metric.color}`}>
                    <metric.icon className="w-4.5 h-4.5" />
                  </div>
                  <div className="mt-3">
                    <span className="text-[10px] text-text-secondary font-semibold uppercase block leading-none">
                      {metric.label}
                    </span>
                    <span className="text-xs font-black text-text-main block mt-1.5 leading-none">
                      {metric.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
