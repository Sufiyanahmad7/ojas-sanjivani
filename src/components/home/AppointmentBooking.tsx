"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Calendar, Phone, ArrowRight, X } from "lucide-react";
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
    <section id="appointment" className="py-12 sm:py-14 bg-mint/10 border-y border-border-main/30 relative overflow-hidden">
      {/* Subtle decorations */}
      <div className="absolute top-1/3 right-[-10%] w-96 h-96 rounded-full bg-[#028174]/4 filter blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-[-10%] w-[350px] h-[350px] rounded-full bg-[#2563EB]/3 filter blur-[90px] pointer-events-none -z-10" />

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

      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start max-w-6xl mx-auto">
          
          {/* LEFT SIDE: Narrative, Benefits & Phone CTA */}
          <motion.div 
            className="lg:col-span-5 space-y-6 text-center lg:text-left lg:sticky lg:top-28"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-3">
              <Badge variant="success" className="py-1 px-3 bg-[#028174]/10 text-[#028174] border-[#028174]/20">
                Book Free Consultation
              </Badge>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1E293B] leading-tight tracking-tight">
                Schedule Your Free Consultation
              </h2>
              <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed max-w-xl mx-auto lg:mx-0">
                Connect with certified Ayurveda and Homeopathy specialists for personalized treatment and expert guidance.
              </p>
            </div>

            {/* Benefit checklist points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5 max-w-md mx-auto lg:mx-0 text-left pt-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#028174]/10 flex items-center justify-center text-[#028174] shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-[13px] font-bold text-[#1E293B]">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Phone CTA Card */}
            <div className="p-4.5 rounded-2xl bg-white border border-[#E2E8F0] flex items-center gap-3.5 shadow-sm max-w-sm mx-auto lg:mx-0 text-left mt-6">
              <div className="w-10 h-10 rounded-full bg-[#028174]/10 flex items-center justify-center text-[#028174] shrink-0">
                <Phone className="w-4.5 h-4.5 fill-[#028174]/10" />
              </div>
              <div>
                <span className="text-[10px] text-[#64748B] font-bold uppercase tracking-wider block">Prefer booking over phone?</span>
                <a href="tel:+919266714040" className="text-sm font-extrabold text-[#1E293B] hover:text-[#028174] transition-colors block mt-0.5">
                  Call +91 92667 14040
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Redesigned Premium Form Card */}
          <motion.div 
            className="lg:col-span-7 w-full max-w-xl mx-auto"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-[24px] p-6 sm:p-8 lg:p-10 border border-[#E2E8F0] shadow-md hover:border-[#028174]/40 transition-all duration-500">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#1E293B] tracking-tight">
                  Book an Appointment
                </h3>
                <p className="text-xs text-[#64748B] mt-1.5 leading-relaxed">
                  Fill in your details and our healthcare team will contact you shortly.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    {...register("fullName")}
                    className={`w-full h-[52px] px-4 rounded-[14px] border bg-[#F8FAFC]/50 text-xs sm:text-sm font-medium focus:outline-none transition-all ${
                      errors.fullName
                        ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                        : "border-[#E2E8F0] focus:border-[#028174] focus:ring-1 focus:ring-[#028174] focus:bg-white"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-[10px] font-bold text-red-500 mt-1">{errors.fullName.message?.toString()}</p>
                  )}
                </div>

                {/* Mobile Number */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">
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
                      className={`w-full h-[52px] pl-12 pr-4 rounded-[14px] border bg-[#F8FAFC]/50 text-xs sm:text-sm font-semibold tracking-wide focus:outline-none transition-all ${
                        errors.mobileNumber
                          ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                          : "border-[#E2E8F0] focus:border-[#028174] focus:ring-1 focus:ring-[#028174] focus:bg-white"
                      }`}
                    />
                  </div>
                  {errors.mobileNumber && (
                    <p className="text-[10px] font-bold text-red-500 mt-1">{errors.mobileNumber.message?.toString()}</p>
                  )}
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">
                    Email Address <span className="text-[#94A3B8] lowercase">(optional)</span>
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    {...register("email")}
                    className={`w-full h-[52px] px-4 rounded-[14px] border bg-[#F8FAFC]/50 text-xs sm:text-sm font-medium focus:outline-none transition-all ${
                      errors.email
                        ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                        : "border-[#E2E8F0] focus:border-[#028174] focus:ring-1 focus:ring-[#028174] focus:bg-white"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[10px] font-bold text-red-500 mt-1">{errors.email.message?.toString()}</p>
                  )}
                </div>

                {/* Two-Column Inputs: Preferred Consultation & Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Preferred Consultation */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">
                      Consultation Mode <span className="text-red-500">*</span>
                    </label>
                    <select
                      {...register("preferredConsultation")}
                      className={`w-full h-[52px] px-3.5 rounded-[14px] border bg-[#F8FAFC]/50 text-xs sm:text-sm font-medium focus:outline-none transition-all cursor-pointer ${
                        errors.preferredConsultation
                          ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                          : "border-[#E2E8F0] focus:border-[#028174] focus:ring-1 focus:ring-[#028174] focus:bg-white"
                      }`}
                    >
                      <option value="Online Consultation">Online Consultation</option>
                      <option value="In-Clinic Visit">In-Clinic Visit</option>
                      <option value="Phone Call">Phone Call</option>
                    </select>
                    {errors.preferredConsultation && (
                      <p className="text-[10px] font-bold text-red-500 mt-1">
                        {errors.preferredConsultation.message?.toString()}
                      </p>
                    )}
                  </div>

                  {/* Preferred Date */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">
                      Preferred Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      min={todayString}
                      {...register("preferredDate")}
                      className={`w-full h-[52px] px-4 rounded-[14px] border bg-[#F8FAFC]/50 text-xs sm:text-sm font-medium focus:outline-none transition-all cursor-pointer ${
                        errors.preferredDate
                          ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                          : "border-[#E2E8F0] focus:border-[#028174] focus:ring-1 focus:ring-[#028174] focus:bg-white"
                      }`}
                    />
                    {errors.preferredDate && (
                      <p className="text-[10px] font-bold text-red-500 mt-1">{errors.preferredDate.message?.toString()}</p>
                    )}
                  </div>
                </div>

                {/* Service Type Radio Buttons */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">
                    Choose Medical System <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-6 items-center">
                    {["Ayurveda", "Homeopathy", "Both"].map((type) => (
                      <label key={type} className="flex items-center gap-2 cursor-pointer group">
                        <input
                          type="radio"
                          value={type}
                          {...register("serviceType")}
                          className="w-4 h-4 text-[#028174] border-[#E2E8F0] focus:ring-[#028174] cursor-pointer"
                        />
                        <span className="text-xs sm:text-sm font-medium text-[#1E293B] group-hover:text-[#028174] transition-colors">
                          {type}
                        </span>
                      </label>
                    ))}
                  </div>
                  {errors.serviceType && (
                    <p className="text-[10px] font-bold text-red-500 mt-1">{errors.serviceType.message?.toString()}</p>
                  )}
                </div>

                {/* Health Concern Textarea */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-[#64748B] uppercase tracking-wider block">
                    Describe Health Concern <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    placeholder="Describe your health concern... (minimum 20 characters)"
                    rows={4}
                    {...register("healthConcern")}
                    className={`w-full p-4 rounded-[14px] border bg-[#F8FAFC]/50 text-xs sm:text-sm font-medium focus:outline-none transition-all ${
                      errors.healthConcern
                        ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                        : "border-[#E2E8F0] focus:border-[#028174] focus:ring-1 focus:ring-[#028174] focus:bg-white"
                    }`}
                  />
                  {errors.healthConcern && (
                    <p className="text-[10px] font-bold text-red-500 mt-1">{errors.healthConcern.message?.toString()}</p>
                  )}
                </div>

                {/* WhatsApp Checkbox */}
                <div className="flex items-center gap-2.5 pt-1.5 select-none">
                  <input
                    type="checkbox"
                    id="whatsAppUpdates"
                    {...register("whatsAppUpdates")}
                    className="w-4 h-4 rounded text-[#028174] border-[#E2E8F0] focus:ring-[#028174] cursor-pointer"
                  />
                  <label htmlFor="whatsAppUpdates" className="text-[11px] font-semibold text-[#64748B] cursor-pointer hover:text-[#1E293B] transition-colors">
                    I agree to receive appointment updates on WhatsApp.
                  </label>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-[52px] bg-[#028174] hover:bg-[#026b60] text-white rounded-[14px] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#028174]/15 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-75 disabled:pointer-events-none disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
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
