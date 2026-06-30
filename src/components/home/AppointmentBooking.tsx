"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Calendar, Phone, ArrowRight, X, Leaf, User, Mail } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

// Zod validation schema matching all criteria
const appointmentSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full Name must be at least 2 characters" }),
  mobileNumber: z
    .string()
    .regex(/^[6-9]\d{9}$/, { message: "Please enter a valid 10-digit Indian mobile number" }),
  email: z
    .string()
    .email({ message: "Invalid email address format" })
    .optional()
    .or(z.literal("")),
  healthConcern: z
    .string()
    .min(20, { message: "Please describe your concerns in at least 20 characters" }),
  preferredConsultation: z.enum(["Online Consultation", "In-Clinic Visit", "Phone Call"]),
  preferredDate: z.string().refine(
    (val) => {
      const today = new Date().toISOString().split("T")[0];
      return val >= today;
    },
    { message: "Preferred date must be today or in the future" }
  ),
  serviceType: z.enum(["Ayurveda", "Homeopathy", "Both"]),
  whatsAppUpdates: z.boolean().default(true),
});

type AppointmentFormValues = z.infer<typeof appointmentSchema>;

export function AppointmentBooking() {
  const [showToast, setShowToast] = useState(false);
  const [successName, setSuccessName] = useState("");

  const todayString = new Date().toISOString().split("T")[0];

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<any>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      fullName: "",
      mobileNumber: "",
      email: "",
      healthConcern: "",
      preferredConsultation: "Online Consultation",
      preferredDate: todayString,
      serviceType: "Ayurveda",
      whatsAppUpdates: true,
    },
  });

  const serviceTypeWatch = watch("serviceType");
  const whatsAppWatch = watch("whatsAppUpdates");

  const onSubmit = async (data: any) => {
    // Simulate server request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSuccessName(data.fullName);
    setShowToast(true);
    reset({
      fullName: "",
      mobileNumber: "",
      email: "",
      healthConcern: "",
      preferredConsultation: "Online Consultation",
      preferredDate: todayString,
      serviceType: "Ayurveda",
      whatsAppUpdates: true,
    });
    // Auto-hide toast after 5 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };

  const benefits = [
    "Certified Doctors",
    "Personalized Treatment Plans",
    "Online & In-Clinic Consultation",
    "100% Natural Healthcare",
  ];

  return (
    <section id="appointment" className="py-6 lg:py-8 bg-[#F7FCF9] border-y border-[#DDEEEA] relative overflow-hidden scroll-mt-[108px]">
      
      {/* Decorative background blur shapes */}
      <div className="absolute top-1/4 right-[-10%] w-96 h-96 rounded-full bg-[#028174]/3 filter blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-[-10%] w-96 h-96 rounded-full bg-[#2E7D32]/3 filter blur-[100px] pointer-events-none -z-10" />

      {/* Success Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 bg-[#1E293B] text-white p-4.5 rounded-2xl shadow-xl border border-white/10 flex items-start gap-3.5 max-w-md"
          >
            <div className="w-8 h-8 rounded-full bg-[#028174] flex items-center justify-center text-white shrink-0 mt-0.5 shadow-sm">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>
            <div className="flex-1 pr-6">
              <h4 className="text-sm font-extrabold tracking-tight">Booking Requested Successfully!</h4>
              <p className="text-xs text-[#94A3B8] mt-1 leading-relaxed">
                Thank you, <span className="text-white font-bold">{successName}</span>. Our healthcare desk will contact you within 10-15 minutes to confirm details.
              </p>
            </div>
            <button
              onClick={() => setShowToast(false)}
              className="text-[#94A3B8] hover:text-white transition-colors absolute top-3.5 right-3.5"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="custom-container max-w-[1400px] mx-auto px-4">
        
        {/* Main Split-Screen Container - Optimised height for above-the-fold display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 bg-white rounded-[28px] overflow-hidden shadow-[0_20px_50px_rgba(2,129,116,0.06)] border border-[#DDEEEA] lg:h-[580px] items-stretch">

          {/* LEFT SECTION: Immersive nature-inspired lifestyle panel (45%) */}
          <motion.div
            className="lg:col-span-5 relative overflow-hidden flex flex-col justify-center p-6 sm:p-8 lg:p-10 min-h-[500px] lg:min-h-full bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1000&q=80')" 
            }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Subtle dark-to-light gradient overlay for readability & contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F2A44]/65 via-[#F7FCF9]/75 to-white/80 pointer-events-none" />

            {/* Subtle floating background decorations */}
            {/* Floating leaf 1 */}
            <div className="absolute top-8 right-8 w-5 h-5 text-[#028174]/20 blur-[0.5px] rotate-45 animate-pulse pointer-events-none">
              <Leaf className="w-full h-full fill-current" />
            </div>
            {/* Floating leaf 2 */}
            <div className="absolute bottom-24 left-8 w-6 h-6 text-[#2E7D32]/15 blur-[1px] -rotate-12 pointer-events-none">
              <Leaf className="w-full h-full fill-current" />
            </div>
            {/* Blur circle decoration */}
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-[#028174]/10 rounded-full blur-3xl pointer-events-none" />
            {/* Foreground blurred leaf at bottom-right */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 text-[#028174]/15 blur-[3px] rotate-[135deg] pointer-events-none">
              <Leaf className="w-full h-full fill-current" />
            </div>

            {/* Relative Content Area */}
            <div className="relative z-10 flex flex-col justify-center h-full gap-3">
              
              {/* Badge */}
              <div className="w-fit">
                <span className="inline-flex items-center gap-1.5 py-1 px-3 bg-[#E8F5E9]/95 text-[#028174] border border-[#028174]/15 rounded-full font-bold uppercase tracking-wider text-[9px]">
                  🌿 Book Free Consultation
                </span>
              </div>

              {/* Title - Slightly reduced size to prevent overflow */}
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-[32px] font-black text-[#1F2A44] leading-[1.15] tracking-tight">
                Schedule Your <br />
                <span className="text-[#028174]">Free Consultation</span>
              </h2>

              {/* Herbal divider */}
              <div className="flex items-center gap-2 text-[#028174]/40 my-0.5">
                <div className="h-[1.5px] w-10 bg-current rounded-full" />
                <Leaf className="w-3.5 h-3.5 fill-current opacity-90" />
                <div className="h-[1.5px] w-10 bg-current rounded-full" />
              </div>

              {/* Description */}
              <p className="text-[#64748B] text-[11px] sm:text-xs leading-[1.6] max-w-[380px]">
                Connect with certified Ayurveda and Homeopathy specialists for personalized treatment and expert guidance.
              </p>

              {/* 2-column feature list - More compact spacing */}
              <div className="grid grid-cols-2 gap-2.5 mt-1">
                {benefits.map((benefit) => (
                  <div 
                    key={benefit} 
                    className="flex items-center gap-2 bg-white/95 backdrop-blur-sm border border-[#E2E8F0] shadow-soft-sm rounded-full py-1 pl-1 pr-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft-md hover:border-[#028174]/30 w-fit"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#028174] text-white flex items-center justify-center shadow-soft-sm shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-[#1F2A44] leading-tight">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              {/* Floating Glassmorphic Contact Card - Reduced heights and paddings */}
              <div className="p-3 rounded-[16px] bg-white/95 backdrop-blur-md border border-white/60 flex items-center gap-3 shadow-soft-md max-w-[300px] mt-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft-lg hover:border-[#028174]/30 group self-start">
                <div className="w-8 h-8 rounded-full bg-[#028174] text-white flex items-center justify-center shrink-0 shadow-md transition-transform duration-300 group-hover:scale-105">
                  <Phone className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <span className="text-[9px] text-[#64748B] font-bold uppercase tracking-wider block">Prefer Booking Over Phone?</span>
                  <a href="tel:+919266714040" className="text-xs sm:text-sm font-black text-[#028174] hover:text-[#026b60] transition-colors block mt-0.5">
                    Call +91 92667 14040
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* RIGHT SECTION: Redesigned premium booking form (55%) */}
          <motion.div
            className="lg:col-span-7 bg-white p-6 sm:p-8 lg:p-8 flex flex-col justify-center h-full border-t lg:border-t-0 lg:border-l border-[#DDEEEA]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full">
              <div className="mb-4">
                <h3 className="text-lg sm:text-xl font-extrabold text-[#1F2A44] tracking-tight">
                  Book an Appointment
                </h3>
                <p className="text-xs text-[#64748B] mt-0.5 leading-relaxed">
                  Fill in your details and our healthcare team will contact you shortly.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                {/* Full Name & Mobile Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-[#1F2A44] uppercase tracking-wider block">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B] w-4 h-4" />
                      <input
                        type="text"
                        placeholder="Enter your name"
                        {...register("fullName")}
                        className={`w-full h-[48px] pl-11 pr-4 rounded-xl border bg-[#F8FAFC]/50 text-xs sm:text-sm font-medium focus:outline-none transition-all ${errors.fullName
                            ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                            : "border-[#DDEEEA] focus:border-[#028174] focus:ring-1 focus:ring-[#028174] focus:bg-white"
                          }`}
                      />
                    </div>
                    {errors.fullName && (
                      <p className="text-[10px] font-bold text-red-500 mt-0.5">{errors.fullName.message?.toString()}</p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-[#1F2A44] uppercase tracking-wider block">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-bold text-[#64748B]">
                        +91
                      </span>
                      <input
                        type="tel"
                        placeholder="9876543210"
                        {...register("mobileNumber")}
                        className={`w-full h-[48px] pl-14 pr-4 rounded-xl border bg-[#F8FAFC]/50 text-xs sm:text-sm font-semibold tracking-wide focus:outline-none transition-all ${errors.mobileNumber
                            ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                            : "border-[#DDEEEA] focus:border-[#028174] focus:ring-1 focus:ring-[#028174] focus:bg-white"
                          }`}
                      />
                    </div>
                    {errors.mobileNumber && (
                      <p className="text-[10px] font-bold text-red-500 mt-0.5">{errors.mobileNumber.message?.toString()}</p>
                    )}
                  </div>
                </div>

                {/* Email Address & Consultation Mode */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-[#1F2A44] uppercase tracking-wider block">
                      Email Address <span className="text-[#94A3B8] lowercase">(optional)</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B] w-4 h-4" />
                      <input
                        type="email"
                        placeholder="name@example.com"
                        {...register("email")}
                        className={`w-full h-[48px] pl-11 pr-4 rounded-xl border bg-[#F8FAFC]/50 text-xs sm:text-sm font-medium focus:outline-none transition-all ${errors.email
                            ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                            : "border-[#DDEEEA] focus:border-[#028174] focus:ring-1 focus:ring-[#028174] focus:bg-white"
                          }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-[10px] font-bold text-red-500 mt-0.5">{errors.email.message?.toString()}</p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-[#1F2A44] uppercase tracking-wider block">
                      Consultation Mode <span className="text-red-500">*</span>
                    </label>
                    <select
                      {...register("preferredConsultation")}
                      className={`w-full h-[48px] px-3.5 rounded-xl border bg-[#F8FAFC]/50 text-xs sm:text-sm font-medium focus:outline-none transition-all cursor-pointer ${errors.preferredConsultation
                          ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                          : "border-[#DDEEEA] focus:border-[#028174] focus:ring-1 focus:ring-[#028174] focus:bg-white"
                        }`}
                    >
                      <option value="Online Consultation">Online Consultation</option>
                      <option value="In-Clinic Visit">In-Clinic Visit</option>
                      <option value="Phone Call">Phone Call</option>
                    </select>
                    {errors.preferredConsultation && (
                      <p className="text-[10px] font-bold text-red-500 mt-0.5">
                        {errors.preferredConsultation.message?.toString()}
                      </p>
                    )}
                  </div>
                </div>

                {/* Preferred Date & Service Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-[#1F2A44] uppercase tracking-wider block">
                      Preferred Date <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        min={todayString}
                        {...register("preferredDate")}
                        className={`w-full h-[48px] px-4 rounded-xl border bg-[#F8FAFC]/50 text-xs sm:text-sm font-medium focus:outline-none transition-all cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer ${errors.preferredDate
                            ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                            : "border-[#DDEEEA] focus:border-[#028174] focus:ring-1 focus:ring-[#028174] focus:bg-white"
                          }`}
                      />
                      <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64748B] w-4 h-4 pointer-events-none" />
                    </div>
                    {errors.preferredDate && (
                      <p className="text-[10px] font-bold text-red-500 mt-0.5">{errors.preferredDate.message?.toString()}</p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-[#1F2A44] uppercase tracking-wider block">
                      Choose Medical System <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-2.5 items-center h-[48px]">
                      {["Ayurveda", "Homeopathy", "Both"].map((type) => (
                        <label 
                          key={type} 
                          className={`flex-1 h-9 rounded-full border flex items-center justify-center text-xs font-bold cursor-pointer transition-all duration-200 select-none
                            ${serviceTypeWatch === type 
                              ? "bg-[#028174] text-white border-transparent shadow-soft-sm" 
                              : "bg-[#F8FAFC]/50 text-[#1F2A44] border-[#DDEEEA] hover:bg-[#028174]/5 hover:border-[#028174]/30"
                            }
                          `}
                        >
                          <input
                            type="radio"
                            value={type}
                            {...register("serviceType")}
                            className="sr-only"
                          />
                          {type}
                        </label>
                      ))}
                    </div>
                    {errors.serviceType && (
                      <p className="text-[10px] font-bold text-red-500 mt-0.5">{errors.serviceType.message?.toString()}</p>
                    )}
                  </div>
                </div>

                {/* Health Concern Textarea */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-[#1F2A44] uppercase tracking-wider block">
                    Describe Health Concern <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    placeholder="Describe your health concern... (minimum 20 characters)"
                    rows={2}
                    {...register("healthConcern")}
                    className={`w-full p-3 rounded-xl border bg-[#F8FAFC]/50 text-xs sm:text-sm font-medium focus:outline-none transition-all ${errors.healthConcern
                        ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                        : "border-[#DDEEEA] focus:border-[#028174] focus:ring-1 focus:ring-[#028174] focus:bg-white"
                      }`}
                  />
                  {errors.healthConcern && (
                    <p className="text-[10px] font-bold text-red-500 mt-0.5">{errors.healthConcern.message?.toString()}</p>
                  )}
                </div>

                {/* WhatsApp Checkbox */}
                <div className="flex items-center select-none pt-0.5">
                  <label className="flex items-center gap-3 select-none cursor-pointer group">
                    <div className="relative flex items-center justify-center">
                      <input
                        type="checkbox"
                        id="whatsAppUpdates"
                        {...register("whatsAppUpdates")}
                        className="sr-only"
                      />
                      <div 
                        className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all duration-200
                          ${whatsAppWatch 
                            ? "bg-[#028174] border-transparent text-white shadow-soft-sm" 
                            : "border-[#DDEEEA] bg-[#F8FAFC]/50 group-hover:border-[#028174]"
                          }
                        `}
                      >
                        {whatsAppWatch && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold text-[#64748B] group-hover:text-[#1F2A44] transition-colors">
                      I agree to receive appointment updates on WhatsApp.
                    </span>
                  </label>
                </div>

                {/* Submit button */}
                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-[48px] bg-[#028174] hover:bg-[#026b60] text-white rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#028174]/15 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-75 disabled:pointer-events-none disabled:transform-none group"
                  >
                    {isSubmitting ? (
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        Book Free Consultation
                        <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
