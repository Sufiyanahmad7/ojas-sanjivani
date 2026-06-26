"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  Clock, 
  Edit3, 
  MessageCircle,
  Video
} from "lucide-react";
import { Button } from "@/components/ui/Button";

// Zod validation schema
const consultationFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Full name must be at least 2 letters" })
    .max(50, { message: "Name cannot exceed 50 characters" }),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, { message: "Please enter a valid 10-digit Indian mobile number" }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address" })
    .optional()
    .or(z.literal("")),
  city: z
    .string()
    .min(2, { message: "City name must be at least 2 letters" })
    .max(40, { message: "City cannot exceed 40 characters" }),
  state: z
    .string()
    .min(2, { message: "State must be at least 2 letters" })
    .max(40, { message: "State cannot exceed 40 characters" }),
  concern: z
    .string()
    .min(20, { message: "Please describe your concern in at least 20 characters" })
    .max(500, { message: "Concern cannot exceed 500 characters" }),
  consultationType: z.enum(["Video Consultation", "Phone Consultation", "In-person Consultation"]),
  preferredDate: z.string().optional().or(z.literal("")),
  preferredTime: z.string().optional().or(z.literal("")),
  message: z.string().max(500).optional().or(z.literal("")),
});

type ConsultationFormValues = z.infer<typeof consultationFormSchema>;

export function ContactForm() {
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ConsultationFormValues>({
    resolver: zodResolver(consultationFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      city: "",
      state: "",
      concern: "",
      consultationType: "Video Consultation",
      preferredDate: "",
      preferredTime: "",
      message: "",
    },
  });

  const onSubmit = async (data: ConsultationFormValues) => {
    setIsPending(true);
    setSubmitError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Consultation form submitted successfully:", data);
      setIsSuccess(true);
      reset();
    } catch (err) {
      setSubmitError("Failed to submit form. Please check your internet connection.");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div id="booking-form" className="bg-white border border-border-main/55 rounded-2xl shadow-soft-lg p-4 sm:p-5 relative overflow-hidden h-full flex flex-col justify-start scroll-mt-28">
      
      {/* Header */}
      <div className="mb-3 text-left">
        <h3 className="font-heading text-base sm:text-lg font-extrabold text-text-main flex items-center gap-1.5">
          <span className="w-2 h-5 rounded bg-[#028174] inline-block" />
          Book Your Consultation
        </h3>
        <p className="text-[11px] sm:text-xs text-text-secondary mt-0.5">
          Fill your details below. We will match you with the nearest expert or configure your virtual consultation.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            key="success-message"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="py-8 text-center space-y-3"
          >
            <div className="w-12 h-12 bg-[#0E9F6E]/10 text-[#0E9F6E] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-heading text-base font-extrabold text-text-main">
              Thank you!
            </h4>
            <p className="text-xs text-text-secondary max-w-xs mx-auto leading-relaxed">
              Our healthcare team will contact you shortly to confirm your booking and schedule your session.
            </p>
            <div className="pt-2">
              <Button
                onClick={() => setIsSuccess(false)}
                variant="primary"
                size="sm"
                className="cursor-pointer text-xs"
              >
                Book Another Consultation
              </Button>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="contact-form"
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-3 text-left"
            noValidate
          >
            {submitError && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg flex items-center gap-2 text-xs">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{submitError}</span>
              </div>
            )}

            {/* Row 1: Full Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Full Name */}
              <div className="space-y-0.5">
                <label htmlFor="name" className="text-[11px] font-bold text-text-main block">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-text-secondary/80" />
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    disabled={isPending}
                    {...register("name")}
                    className={`w-full h-10 pl-9 pr-3 rounded-lg border text-xs bg-slate-50/30 outline-hidden transition-all focus:bg-white focus:border-[#028174] focus:ring-2 focus:ring-[#028174]/10 ${
                      errors.name ? "border-red-400 focus:border-red-500 focus:ring-red-500/20" : "border-border-main"
                    }`}
                    aria-invalid={errors.name ? "true" : "false"}
                  />
                </div>
                {errors.name && (
                  <p className="text-[10px] text-red-500 flex items-center gap-1 mt-0.5 font-medium">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div className="space-y-0.5">
                <label htmlFor="phone" className="text-[11px] font-bold text-text-main block">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-text-secondary/80" />
                  <input
                    id="phone"
                    type="tel"
                    placeholder="9876543210"
                    disabled={isPending}
                    {...register("phone")}
                    className={`w-full h-10 pl-9 pr-3 rounded-lg border text-xs bg-slate-50/30 outline-hidden transition-all focus:bg-white focus:border-[#028174] focus:ring-2 focus:ring-[#028174]/10 ${
                      errors.phone ? "border-red-400 focus:border-red-500 focus:ring-red-500/20" : "border-border-main"
                    }`}
                    aria-invalid={errors.phone ? "true" : "false"}
                  />
                </div>
                {errors.phone && (
                  <p className="text-[10px] text-red-500 flex items-center gap-1 mt-0.5 font-medium">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            {/* Row 2: Email & City & State */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Email */}
              <div className="space-y-0.5">
                <label htmlFor="email" className="text-[11px] font-bold text-text-main block">
                  Email Address <span className="text-text-secondary font-normal">(Opt)</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-text-secondary/80" />
                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    disabled={isPending}
                    {...register("email")}
                    className={`w-full h-10 pl-9 pr-3 rounded-lg border text-xs bg-slate-50/30 outline-hidden transition-all focus:bg-white focus:border-[#028174] focus:ring-2 focus:ring-[#028174]/10 ${
                      errors.email ? "border-red-400 focus:border-red-500 focus:ring-red-500/20" : "border-border-main"
                    }`}
                    aria-invalid={errors.email ? "true" : "false"}
                  />
                </div>
                {errors.email && (
                  <p className="text-[10px] text-red-500 flex items-center gap-1 mt-0.5 font-medium">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* City */}
              <div className="space-y-0.5">
                <label htmlFor="city" className="text-[11px] font-bold text-text-main block">
                  City <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-text-secondary/80" />
                  <input
                    id="city"
                    type="text"
                    placeholder="Delhi"
                    disabled={isPending}
                    {...register("city")}
                    className={`w-full h-10 pl-9 pr-3 rounded-lg border text-xs bg-slate-50/30 outline-hidden transition-all focus:bg-white focus:border-[#028174] focus:ring-2 focus:ring-[#028174]/10 ${
                      errors.city ? "border-red-400 focus:border-red-500 focus:ring-red-500/20" : "border-border-main"
                    }`}
                    aria-invalid={errors.city ? "true" : "false"}
                  />
                </div>
                {errors.city && (
                  <p className="text-[10px] text-red-500 flex items-center gap-1 mt-0.5 font-medium">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    {errors.city.message}
                  </p>
                )}
              </div>

              {/* State */}
              <div className="space-y-0.5">
                <label htmlFor="state" className="text-[11px] font-bold text-text-main block">
                  State <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-text-secondary/80" />
                  <input
                    id="state"
                    type="text"
                    placeholder="Delhi"
                    disabled={isPending}
                    {...register("state")}
                    className={`w-full h-10 pl-9 pr-3 rounded-lg border text-xs bg-slate-50/30 outline-hidden transition-all focus:bg-white focus:border-[#028174] focus:ring-2 focus:ring-[#028174]/10 ${
                      errors.state ? "border-red-400 focus:border-red-500 focus:ring-red-500/20" : "border-border-main"
                    }`}
                    aria-invalid={errors.state ? "true" : "false"}
                  />
                </div>
                {errors.state && (
                  <p className="text-[10px] text-red-500 flex items-center gap-1 mt-0.5 font-medium">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    {errors.state.message}
                  </p>
                )}
              </div>
            </div>

            {/* Row 3: Preferred Consultation & Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Consultation Type */}
              <div className="space-y-0.5">
                <label htmlFor="consultationType" className="text-[11px] font-bold text-text-main block">
                  Consultation Mode <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Video className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-text-secondary/80" />
                  <select
                    id="consultationType"
                    disabled={isPending}
                    {...register("consultationType")}
                    className="w-full h-10 pl-9 pr-8 rounded-lg border border-border-main focus:border-[#028174] focus:ring-2 focus:ring-[#028174]/10 text-xs bg-slate-50/30 outline-hidden focus:bg-white appearance-none cursor-pointer font-medium"
                  >
                    <option value="Video Consultation">Video</option>
                    <option value="Phone Consultation">Phone</option>
                    <option value="In-person Consultation">In-Person</option>
                  </select>
                  <div className="absolute inset-y-0 right-2.5 flex items-center pointer-events-none text-text-secondary">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Preferred Date */}
              <div className="space-y-0.5">
                <label htmlFor="preferredDate" className="text-[11px] font-bold text-text-main block">
                  Preferred Date <span className="text-text-secondary font-normal">(Opt)</span>
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-text-secondary/80" />
                  <input
                    id="preferredDate"
                    type="date"
                    disabled={isPending}
                    {...register("preferredDate")}
                    className="w-full h-10 pl-9 pr-2 rounded-lg border border-border-main focus:border-[#028174] focus:ring-2 focus:ring-[#028174]/10 text-xs bg-slate-50/30 outline-hidden focus:bg-white"
                  />
                </div>
              </div>

              {/* Preferred Time */}
              <div className="space-y-0.5">
                <label htmlFor="preferredTime" className="text-[11px] font-bold text-text-main block">
                  Preferred Time <span className="text-text-secondary font-normal">(Opt)</span>
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-text-secondary/80" />
                  <input
                    id="preferredTime"
                    type="time"
                    disabled={isPending}
                    {...register("preferredTime")}
                    className="w-full h-10 pl-9 pr-2 rounded-lg border border-border-main focus:border-[#028174] focus:ring-2 focus:ring-[#028174]/10 text-xs bg-slate-50/30 outline-hidden focus:bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Row 4: Health Concern & Message (Side-by-side) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Health Concern */}
              <div className="space-y-0.5">
                <label htmlFor="concern" className="text-[11px] font-bold text-text-main block">
                  Health Concern <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Edit3 className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-text-secondary/80" />
                  <input
                    id="concern"
                    type="text"
                    placeholder="Symptom & duration (min 20 chars)"
                    disabled={isPending}
                    {...register("concern")}
                    className={`w-full h-10 pl-9 pr-3 rounded-lg border text-xs bg-slate-50/30 outline-hidden transition-all focus:bg-white focus:border-[#028174] focus:ring-2 focus:ring-[#028174]/10 ${
                      errors.concern ? "border-red-400 focus:border-red-500 focus:ring-red-500/20" : "border-border-main"
                    }`}
                    aria-invalid={errors.concern ? "true" : "false"}
                  />
                </div>
                {errors.concern && (
                  <p className="text-[10px] text-red-500 flex items-center gap-1 mt-0.5 font-medium">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    {errors.concern.message}
                  </p>
                )}
              </div>

              {/* Message Area */}
              <div className="space-y-0.5">
                <label htmlFor="message" className="text-[11px] font-bold text-text-main block">
                  Additional Notes <span className="text-text-secondary font-normal">(Optional)</span>
                </label>
                <div className="relative">
                  <MessageCircle className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-text-secondary/80" />
                  <input
                    id="message"
                    type="text"
                    placeholder="Medical history, references..."
                    disabled={isPending}
                    {...register("message")}
                    className="w-full h-10 pl-9 pr-3 rounded-lg border border-border-main focus:border-[#028174] focus:ring-2 focus:ring-[#028174]/10 text-xs bg-slate-50/30 outline-hidden transition-all focus:bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <Button
                type="submit"
                disabled={isPending}
                className="w-full h-10 rounded-lg bg-[#028174] hover:bg-[#01695F] text-white font-extrabold flex items-center justify-center gap-2 cursor-pointer shadow-soft-md transition-all duration-300 text-xs"
              >
                {isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    Book Free Consultation
                  </>
                )}
              </Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
