"use client";

import React from "react";
import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";
import { 
  MessageSquare, 
  Microscope, 
  ClipboardList, 
  Pill, 
  HeartPulse, 
  Leaf 
} from "lucide-react";

// Steps Data definition
const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "Online consultation with experts about symptoms and history.",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "Root Cause Diagnosis",
    description: "Specialists identify underlying imbalances, not just symptoms.",
    icon: Microscope,
  },
  {
    number: "03",
    title: "Personalized Treatment",
    description: "Custom Ayurvedic or Homeopathic plan matching your constitution.",
    icon: ClipboardList,
  },
  {
    number: "04",
    title: "Authentic Medicines",
    description: "Pure, natural formulations delivered directly to your doorstep.",
    icon: Pill,
  },
  {
    number: "05",
    title: "Continuous Follow-up",
    description: "Regular follow-ups to tune dosages and monitor your recovery.",
    icon: HeartPulse,
  },
  {
    number: "06",
    title: "Long-term Wellness",
    description: "Sustained vitality through lifestyle guidelines and prevention.",
    icon: Leaf,
  },
];

// Motion Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
      duration: 0.5,
    },
  },
};

export function HealingJourney() {
  return (
    <section id="journey" className="py-8 sm:py-10 bg-white relative overflow-hidden border-b border-border-main/20">
      <div className="custom-container relative">
        
        {/* Section Header - Compact and tight to save vertical space */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-8">
          <Badge variant="success" className="py-0.5 px-2.5 bg-[#2E7D32]/10 text-[#2E7D32] border-[#2E7D32]/20 font-bold uppercase tracking-wider text-[9px]">
            Our Process
          </Badge>
          
          <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-[#1E293B] tracking-tight leading-tight">
            Your Healing Journey in 6 Simple Steps
          </h2>

          <p className="text-[#64748B] text-xs leading-relaxed max-w-2xl mx-auto">
            Experience personalized Ayurvedic and Homeopathic care through a structured process—from consultation to long-term wellness, all from the comfort of your home.
          </p>
        </div>

        {/* Swipe indicator for mobile/tablet */}
        <div className="lg:hidden text-center mb-3">
          <span className="text-[10px] text-primary font-bold tracking-wide bg-primary/5 px-2 py-0.5 rounded-full animate-pulse">
            Swipe to view steps &rarr;
          </span>
        </div>

        {/* Steps Container: Row on desktop with consistent gap-6, horizontal scroll carousel on mobile/tablet */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex lg:grid lg:grid-cols-6 gap-4 lg:gap-6 overflow-x-auto lg:overflow-x-visible no-scrollbar pb-6 lg:pb-2 snap-x snap-mandatory px-4 lg:px-0"
        >
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                variants={cardVariants}
                className="min-w-[250px] sm:min-w-[280px] lg:min-w-0 w-full shrink-0 snap-center lg:snap-align-none relative bg-white rounded-2xl shadow-soft-sm border border-border-main/50 p-4 flex flex-col justify-between gap-3 h-auto lg:h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-md hover:border-primary/50 group z-10"
              >
                <div className="flex flex-col gap-3">
                  {/* Top card row: Icon and Badge */}
                  <div className="flex justify-between items-center w-full">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-white shadow-soft-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="bg-primary/10 text-primary text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-primary/20 group-hover:bg-primary group-hover:text-white group-hover:border-transparent transition-colors duration-300">
                      {step.number}
                    </span>
                  </div>

                  {/* Card details */}
                  <div className="space-y-1 text-left">
                    <h3 className="font-heading text-xs sm:text-sm font-extrabold text-[#1E293B] group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-[#64748B] text-[11px] leading-relaxed line-clamp-2">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
