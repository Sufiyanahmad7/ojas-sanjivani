"use client";

import React from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  ArrowRight,
  Search,
  UserCheck,
  ShieldCheck,
  Sparkles,
  MessageSquare,
  ClipboardCheck,
  Activity,
  Sliders,
  Heart
} from "lucide-react";
import { motion } from "framer-motion";

function BotanicalPhilosophyDecor() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* Soft blurred gradient circles */}
      <div className="absolute top-[15%] left-[-10%] w-[380px] h-[380px] rounded-full bg-[#028174]/5 filter blur-[110px]" />
      <div className="absolute bottom-[20%] right-[-10%] w-[420px] h-[420px] rounded-full bg-[#43A047]/5 filter blur-[130px]" />

      {/* Elegant Leaf SVG 1 floating on the top right */}
      <motion.svg
        viewBox="0 0 100 100"
        className="w-36 h-36 absolute top-[15%] right-[5%] text-[#028174] opacity-[0.06] hidden lg:block"
        animate={{ y: [0, 8, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <path fill="currentColor" d="M10,90 C30,70 40,40 90,10 C70,30 50,60 10,90 Z" />
        <path stroke="currentColor" strokeWidth="1.5" fill="none" d="M10,90 Q50,50 90,10" />
      </motion.svg>

      {/* Elegant Leaf SVG 2 floating on the bottom left */}
      <motion.svg
        viewBox="0 0 100 100"
        className="w-44 h-44 absolute bottom-[10%] left-[2%] text-[#43A047] opacity-[0.04] hidden lg:block"
        animate={{ y: [0, -10, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <path fill="currentColor" d="M90,90 C70,70 60,40 10,10 C30,30 50,60 90,90 Z" />
        <path stroke="currentColor" strokeWidth="1.5" fill="none" d="M90,90 Q50,50 10,10" />
      </motion.svg>
    </div>
  );
}

export function TreatmentPhilosophy() {
  const cards = [
    {
      title: "Root Cause Diagnosis",
      desc: "Understand the underlying reason behind the illness instead of masking symptoms.",
      icon: Search,
      gradient: "from-[#F2FCF9] to-[#ECFDF5]/20",
      borderColor: "border-[#028174]/15 hover:border-[#028174]/40 hover:shadow-[#028174]/8",
      iconBg: "bg-[#028174]/8",
      accentColor: "#028174",
    },
    {
      title: "Personalized Treatment",
      desc: "Every treatment plan is tailored according to the patient's body constitution, lifestyle, and medical history.",
      icon: UserCheck,
      gradient: "from-[#F8FFF8] to-[#E8F5E9]/15",
      borderColor: "border-[#43A047]/15 hover:border-[#43A047]/40 hover:shadow-[#43A047]/8",
      iconBg: "bg-[#43A047]/8",
      accentColor: "#43A047",
    },
    {
      title: "Natural & Safe Healing",
      desc: "Gentle Ayurvedic and Homeopathic medicines with minimal side effects.",
      icon: ShieldCheck,
      gradient: "from-[#F2FCF9] to-[#ECFDF5]/20",
      borderColor: "border-[#028174]/15 hover:border-[#028174]/40 hover:shadow-[#028174]/8",
      iconBg: "bg-[#028174]/8",
      accentColor: "#028174",
    },
    {
      title: "Long-Term Wellness",
      desc: "Focus on strengthening immunity, preventing recurrence, and improving overall quality of life.",
      icon: Sparkles,
      gradient: "from-[#F8FFF8] to-[#E8F5E9]/15",
      borderColor: "border-[#43A047]/15 hover:border-[#43A047]/40 hover:shadow-[#43A047]/8",
      iconBg: "bg-[#43A047]/8",
      accentColor: "#43A047",
    }
  ];

  const timelineSteps = [
    {
      title: "Consultation",
      desc: "Connect with expert doctor",
      icon: MessageSquare,
      num: "01"
    },
    {
      title: "Diagnosis",
      desc: "Identify biological imbalance",
      icon: ClipboardCheck,
      num: "02"
    },
    {
      title: "Personalized Treatment",
      desc: "Custom diet & herbal medicine",
      icon: Sliders,
      num: "03"
    },
    {
      title: "Recovery",
      desc: "Gentle toxin elimination",
      icon: Activity,
      num: "04"
    },
    {
      title: "Wellness",
      desc: "Strengthened long-term immunity",
      icon: Heart,
      num: "05"
    }
  ];

  return (
    <section id="philosophy" className="py-12 lg:py-16 bg-white relative overflow-hidden z-10 border-b border-border-main/20">
      <BotanicalPhilosophyDecor />

      <div className="custom-container relative z-10">

        {/* Main Grid: Left Side Copy & Right Side Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Context & Headline & CTAs */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <div className="inline-flex justify-center lg:justify-start">
              <Badge variant="success" className="py-1 px-3 bg-[#028174]/8 text-[#028174] border-[#028174]/15 font-bold uppercase tracking-wider text-xs">
                Our Philosophy
              </Badge>
            </div>

            <motion.h2
              className="font-heading text-3xl sm:text-4xl xl:text-[45px] font-extrabold text-[#1E293B] leading-[1.15] tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Healing the Root Cause, <br />
              <span className="text-[#028174]">Not Just the Symptoms</span>
            </motion.h2>

            <motion.p
              className="font-sans text-sm sm:text-base text-text-secondary leading-relaxed max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              At Ojas Sanjivani, we believe true health goes beyond temporary relief.
              Our integrated systems of Ayurveda and Homeopathy focus on identifying the deep-seated
              root cause of illness, restoring the body's natural energetic balance,
              and promoting long-term wellness rather than merely masking discomfort.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start items-center gap-4 pt-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button
                variant="primary"
                size="md"
                className="rounded-full bg-[#028174] hover:bg-[#01695F] text-white flex items-center justify-center gap-2 group px-7 h-12 text-xs font-bold transition-all duration-300 shadow-md hover:shadow-lg"
                href="#appointment"
              >
                Book Free Consultation
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <a
                href="#services"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#028174] hover:text-[#01695F] transition-all duration-300 group/link py-2 cursor-pointer select-none"
              >
                Explore Our Treatments
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: 2x2 Feature Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {cards.map((card, idx) => (
              <Card
                key={card.title}
                variant="default"
                hoverEffect="lift"
                className={`p-6 bg-gradient-to-br ${card.gradient} border ${card.borderColor} flex flex-col justify-between space-y-4`}
                animateTransition={true}
                // staggered delays
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="space-y-4">
                  {/* Icon Badge */}
                  <div className={`w-12 h-12 rounded-xl ${card.iconBg} flex items-center justify-center`} style={{ color: card.accentColor }}>
                    <card.icon className="w-6 h-6 stroke-[2]" />
                  </div>

                  {/* Title & Desc */}
                  <div className="space-y-2">
                    <h3 className="font-heading text-base sm:text-lg font-bold text-[#1E293B]">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-text-secondary leading-relaxed font-medium">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

        </div>

        {/* Process Timeline Section below */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-border-main/10 relative">

          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
            <span className="text-[#028174] text-[10px] font-extrabold uppercase tracking-wider bg-[#028174]/6 px-3 py-1 rounded-full border border-[#028174]/10">
              Our Process
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#1E293B] mt-3 tracking-tight">
              Your Journey to Natural Recovery
            </h3>
          </div>

          {/* Timeline Component */}
          <div className="relative max-w-5xl mx-auto px-4">

            {/* Horizontal Line behind items (Desktop only) */}
            <div className="absolute top-[34px] left-[10%] right-[10%] h-[3px] bg-slate-100 -z-0 rounded-full hidden md:block" />

            {/* Animated green progress fill line (Desktop only) */}
            <motion.div
              className="absolute top-[34px] left-[10%] h-[3px] bg-gradient-to-r from-[#028174] via-[#028174] to-[#43A047] -z-0 rounded-full hidden md:block"
              style={{ width: "80%" }}
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
            />

            {/* Vertical Line for Mobile only */}
            <div className="absolute left-[34px] top-6 bottom-6 w-[3px] bg-slate-100 -z-0 rounded-full md:hidden" />

            {/* Animated green progress fill line (Mobile only) */}
            <motion.div
              className="absolute left-[34px] top-6 bottom-6 w-[3px] bg-gradient-to-b from-[#028174] to-[#43A047] -z-0 rounded-full md:hidden"
              initial={{ scaleY: 0, originY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
            />

            {/* Timeline Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
              {timelineSteps.map((step, idx) => (
                <motion.div
                  key={step.title}
                  className="flex md:flex-col items-center md:text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                >

                  {/* Circular Icon Container */}
                  <div className="relative shrink-0">
                    <div className="w-14 h-14 rounded-full bg-white border-2 border-[#028174]/20 text-[#028174] flex items-center justify-center shadow-md relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#028174] group-hover:text-white group-hover:border-[#028174]">
                      <step.icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    {/* Step Number Badge */}
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#43A047] text-white text-[9px] font-bold rounded-full flex items-center justify-center shadow-sm border border-white z-20">
                      {step.num}
                    </span>
                  </div>

                  {/* Text details */}
                  <div className="ml-6 md:ml-0 md:mt-5 text-left md:text-center flex-1">
                    <h4 className="font-heading text-sm sm:text-base font-bold text-[#1E293B] group-hover:text-[#028174] transition-colors duration-300">
                      {step.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-text-secondary mt-1 font-medium leading-relaxed max-w-[160px] md:mx-auto">
                      {step.desc}
                    </p>
                  </div>

                </motion.div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
