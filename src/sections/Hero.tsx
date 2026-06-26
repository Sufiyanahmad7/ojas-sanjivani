"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import {
  Leaf,
  ArrowRight,
  Bot,
  Check,
  Award,
  Activity,
  Users,
  User,
  Phone,
  Calendar
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function BotanicalHeroDecor() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* Soft blurred circles */}
      <div className="absolute top-[10%] left-[20%] w-[300px] h-[300px] rounded-full bg-white/10 filter blur-[90px]" />
      <div className="absolute bottom-[10%] right-[30%] w-[350px] h-[350px] rounded-full bg-white/20 filter blur-[100px]" />

      {/* Decorative leaf 1 */}
      <motion.svg
        viewBox="0 0 100 100"
        className="w-40 h-40 absolute top-4 left-[5%] text-[#028174] opacity-[0.06]"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <path fill="currentColor" d="M10,90 C30,70 40,40 90,10 C70,30 50,60 10,90 Z" />
        <path stroke="currentColor" strokeWidth="1" fill="none" d="M10,90 Q50,50 90,10" />
      </motion.svg>

      {/* Decorative leaf 2 */}
      <motion.svg
        viewBox="0 0 100 100"
        className="w-48 h-48 absolute bottom-8 left-[35%] text-[#028174] opacity-[0.04]"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <path fill="currentColor" d="M90,90 C70,70 60,40 10,10 C30,30 50,60 90,90 Z" />
        <path stroke="currentColor" strokeWidth="1" fill="none" d="M90,90 Q50,50 10,10" />
      </motion.svg>
    </div>
  );
}

export function Hero() {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitted(true);
  };

  const trustCards = [
    { icon: Award, title: "25+ Years Experience" },
    { icon: Leaf, title: "100% Natural Treatment" },
    { icon: Activity, title: "Evidence-Based Care" },
    { icon: Users, title: "Personalized Treatment Plans" },
  ];



  const processSteps = [
    { num: "①", text: "Book Consultation" },
    { num: "②", text: "Speak With Expert" },
    { num: "③", text: "Get Personalized Treatment Plan" },
  ];

  return (
    <section
      className="relative overflow-hidden w-full z-10 pt-14 pb-14 lg:pt-20 lg:pb-20 lg:h-[calc(100vh-130px)] lg:min-h-[580px] lg:max-h-[660px] flex items-center"
      style={{
        background: `
          linear-gradient(180deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.08)),
          #92DE8B
        `,
      }}
    >
      <BotanicalHeroDecor />

      <div className="custom-container relative z-10 w-full h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_30%_30%] gap-10 items-stretch w-full">

          {/* COLUMN 1: LEFT CONTENT (40% proportional width) */}
          <div className="flex flex-col text-left justify-center space-y-3">

            {/* Headline */}
            <h1 className="font-heading text-3xl sm:text-4xl xl:text-[52px] font-extrabold text-[#1E293B] leading-[1.05] tracking-tight">
              Heal Naturally with{" "}
              <span className="text-[#028174]">
                Ayurveda & Homeopathy
              </span>
            </h1>

            {/* Subheadline (Description) */}
            <p className="font-sans text-xs sm:text-[13px] text-[#1E293B]/80 leading-relaxed max-w-[500px]">
              Root-cause treatment for chronic diseases through evidence-based Ayurveda & Homeopathy. Personalized treatment plans, certified doctors, authentic medicines, and natural wellness programs.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Button
                variant="primary"
                size="md"
                className="rounded-full bg-[#028174] hover:bg-[#01695F] text-white flex items-center justify-center gap-2 group px-6 h-11 text-xs font-bold transition-all duration-300 shadow-md"
                href="#appointment"
              >
                Book Free Consultation
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="md"
                className="rounded-full bg-white/80 border-[#028174]/40 text-[#028174] hover:bg-[#028174] hover:text-white flex items-center justify-center gap-2 px-6 h-11 text-xs font-bold transition-all duration-300 border backdrop-blur-sm"
                onClick={(e) => {
                  e.preventDefault();
                  const aiBtn = document.querySelector('[aria-label="Open Wellness Assistant"]') as HTMLButtonElement;
                  if (aiBtn) aiBtn.click();
                }}
              >
                <Bot className="w-3.5 h-3.5 shrink-0" />
                Chat with Wellness Guide
              </Button>
            </div>

            {/* Trust Cards Grid (Compact 70px Height, 12px Gap, Rounded 18px) */}
            <div className="grid grid-cols-2 gap-3 max-w-[420px] pt-1">
              {trustCards.map((card, idx) => (
                <div
                  key={idx}
                  className="h-[70px] p-[14px] bg-white rounded-[18px] border border-[#E5E7EB] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2.5 group"
                >
                  <div className="w-8 h-8 rounded-full bg-[#92DE8B]/10 flex items-center justify-center shrink-0 border border-[#E5E7EB] group-hover:bg-[#028174]/10 transition-colors">
                    <card.icon className="w-4 h-4 text-[#028174]" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-[#1E293B] leading-tight">
                    {card.title}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* COLUMN 2: CENTER CONSULTATION CARD (30% width) - Centered vertically and horizontally */}
          <div className="flex items-center justify-center w-full z-10">
            <div className="w-full max-w-[360px] h-[420px] bg-white rounded-2xl border border-[#E5E7EB] p-6 shadow-2xl relative flex flex-col justify-between">

              <div>
                <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-[#028174] text-white p-2 rounded-full shadow-md z-20">
                  <Calendar className="w-4 h-4" />
                </div>

                <h3 className="font-heading text-base font-bold text-[#1E293B]">
                  Book Your Free Consultation
                </h3>
                <p className="font-sans text-[11px] text-[#64748B] mt-0.5 leading-normal">
                  Consult certified experts in just a few minutes.
                </p>

                {/* Booking Form with 48px height inputs and 16px vertical gap */}
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Patient Full Name"
                          className="w-full h-[48px] bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl pl-10 pr-3 text-xs focus:outline-none focus:border-[#028174] focus:ring-2 focus:ring-[#028174]/10 transition-all font-semibold text-[#1E293B]"
                        />
                      </div>

                      <div className="relative">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="Mobile Number"
                          className="w-full h-[48px] bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl pl-10 pr-3 text-xs focus:outline-none focus:border-[#028174] focus:ring-2 focus:ring-[#028174]/10 transition-all font-semibold text-[#1E293B]"
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="primary"
                        className="w-full h-[48px] justify-center rounded-xl bg-[#028174] hover:bg-[#01695F] text-white font-extrabold text-xs shadow-md transition-all duration-300"
                      >
                        Book Free Consultation
                      </Button>
                    </form>
                  ) : (
                    <motion.div
                      key="success"
                      className="py-6 text-center space-y-2 mt-2"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <div className="w-10 h-10 rounded-full bg-[#ECFDF5] text-[#028174] flex items-center justify-center mx-auto border border-[#A7F3D0]">
                        <Check className="w-5 h-5 stroke-[3]" />
                      </div>
                      <h4 className="text-xs font-bold text-[#1E293B]">Request Submitted!</h4>
                      <p className="text-[10px] text-[#64748B] leading-relaxed px-1">
                        Advisor will call you within 10-15 minutes on {formData.phone}.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Consultation Steps */}
              <div className="pt-3 border-t border-[#F3F4F6] mt-3 flex flex-col gap-1.5">
                {processSteps.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-left">
                    <span className="text-[10px] font-bold text-[#028174]">{step.num}</span>
                    <span className="text-[10px] font-semibold text-[#1E293B] leading-tight">
                      {step.text}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* COLUMN 3: RIGHT DOCTOR IMAGE (30% width) - Dominates Hero & Takes Complete Height */}
          <div className="relative h-[500px] lg:h-[520px] xl:h-[560px] w-full rounded-2xl overflow-hidden border border-white/25 shadow-xl bg-white flex items-end justify-center z-10 self-center">
            {/* Main Doctor Image filling the container */}
            <Image
              src="/images/doctor-hero.png"
              alt="Ayurvedic Doctor Specialist"
              fill
              priority
              className="object-cover object-bottom transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
