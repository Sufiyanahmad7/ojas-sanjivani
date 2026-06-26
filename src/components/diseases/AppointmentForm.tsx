"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Calendar, Phone, ArrowRight, X } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

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
  disease: z.string().min(1, { message: "Please select a disease" }),
  preferredConsultation: z.enum(["Online Consultation", "In-Clinic Visit", "Phone Call"]),
  preferredDate: z.string().refine(
    (val) => {
      const today = new Date().toISOString().split("T")[0];
      return val >= today;
    },
    { message: "Preferred date must be today or in the future" }
  ),
  message: z.string().min(10, { message: "Please enter a brief message (min 10 characters)" }),
  agreeToPolicy: z.boolean().refine((val) => val === true, {
    message: "You must agree to the Privacy Policy",
  }),
});

type AppointmentFormValues = z.infer<typeof appointmentSchema>;

interface AppointmentFormProps {
  diseaseName: string;
}

export function AppointmentForm({ diseaseName }: AppointmentFormProps) {
  const [showToast, setShowToast] = useState(false);
  const [successName, setSuccessName] = useState("");

  const todayString = new Date().toISOString().split("T")[0];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      fullName: "",
      mobileNumber: "",
      email: "",
      disease: diseaseName,
      preferredConsultation: "Online Consultation",
      preferredDate: todayString,
      message: "",
      agreeToPolicy: true,
    },
  });

  const onSubmit = async (data: AppointmentFormValues) => {
    // Simulate server request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSuccessName(data.fullName);
    setShowToast(true);
    reset({
      fullName: "",
      mobileNumber: "",
      email: "",
      disease: diseaseName,
      preferredConsultation: "Online Consultation",
      preferredDate: todayString,
      message: "",
      agreeToPolicy: true,
    });
    // Auto-hide toast after 5 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };

  const benefits = [
    "Free Initial Consultation",
    "Personalized Treatment Plan",
    "Expert Certified Doctors",
    "100% Secure & Confidential Information",
  ];

  return (
    <section id="appointment-form" className="py-16 sm:py-20 bg-white border-t border-border-main/20 scroll-mt-[108px] relative overflow-hidden text-left">
      <div className="absolute top-1/3 right-[-10%] w-96 h-96 rounded-full bg-[#028174]/4 filter blur-[100px] pointer-events-none -z-10" />
      
      {/* Success Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white p-5 rounded-2xl shadow-2xl border border-white/10 flex items-start gap-4 max-w-md"
          >
            <div className="w-8 h-8 rounded-full bg-[#0E9F6E] flex items-center justify-center text-white shrink-0 mt-0.5 shadow-sm">
              <Check className="w-4 h-4 stroke-[3]" />
            </div>
            <div className="flex-1 pr-6 text-left">
              <h4 className="text-sm font-extrabold tracking-tight">Booking Requested Successfully!</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Thank you, <span className="text-white font-bold">{successName}</span>. Our healthcare desk will contact you within 15 minutes to confirm details.
              </p>
            </div>
            <button
              onClick={() => setShowToast(false)}
              className="text-slate-400 hover:text-white transition-colors absolute top-3.5 right-3.5 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="custom-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          
          {/* LEFT SIDE: Benefits list */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <Badge variant="success" className="py-1 px-3 bg-[#028174]/10 text-[#028174] border-transparent">
                Direct Appointment
              </Badge>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-main leading-tight tracking-tight">
                Schedule Your Consultation
              </h2>
              <p className="text-text-secondary text-xs sm:text-sm leading-relaxed max-w-lg">
                Enter your details to request a call with our senior Ayurveda and Homeopathy panel.
              </p>
            </div>

            {/* Checklist */}
            <div className="space-y-4 pt-2">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#028174]/10 flex items-center justify-center text-[#028174] shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-[13px] font-bold text-text-main">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom Call Card */}
            <div className="p-4 bg-[#F5FBF8] border border-[#028174]/15 rounded-2xl flex items-center gap-3.5 shadow-soft-sm max-w-sm">
              <div className="w-10 h-10 rounded-full bg-[#028174]/10 flex items-center justify-center text-[#028174] shrink-0">
                <Phone className="w-4.5 h-4.5" />
              </div>
              <div>
                <span className="text-[10px] text-text-secondary font-bold uppercase tracking-wider block">Quick Phone Booking</span>
                <a href="tel:+919766548692" className="text-sm font-extrabold text-text-main hover:text-[#028174] transition-colors block mt-0.5">
                  Call +91 97665 48692
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Inline Form Card */}
          <div className="lg:col-span-7 w-full max-w-xl mx-auto">
            <Card className="bg-white rounded-[24px] p-5 sm:p-8 border border-border-main/60 shadow-soft-lg hover:border-[#028174]/30 transition-all duration-500">
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-extrabold text-text-main tracking-tight">
                  Book Free Consultation
                </h3>
                <p className="text-[10px] sm:text-xs text-text-secondary mt-1 leading-relaxed">
                  Provide your diagnostic info below to start your healing journey.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                
                {/* Full Name & Mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-text-secondary uppercase tracking-wider block">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      {...register("fullName")}
                      className={`w-full h-11 px-4 rounded-xl border bg-[#F8FAFC]/50 text-xs sm:text-sm font-medium focus:outline-none transition-all ${
                        errors.fullName
                          ? "border-red-500 focus:ring-1 focus:ring-red-500"
                          : "border-border-main focus:border-[#028174] focus:ring-1 focus:ring-[#028174] focus:bg-white"
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[10px] font-bold text-red-500 mt-1">{errors.fullName.message}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-text-secondary uppercase tracking-wider block">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-bold text-text-secondary">
                        +91
                      </span>
                      <input
                        type="tel"
                        placeholder="9876543210"
                        {...register("mobileNumber")}
                        className={`w-full h-11 pl-12 pr-4 rounded-xl border bg-[#F8FAFC]/50 text-xs sm:text-sm font-semibold tracking-wide focus:outline-none transition-all ${
                          errors.mobileNumber
                            ? "border-red-500 focus:ring-1 focus:ring-red-500"
                            : "border-border-main focus:border-[#028174] focus:ring-1 focus:ring-[#028174] focus:bg-white"
                        }`}
                      />
                    </div>
                    {errors.mobileNumber && (
                      <p className="text-[10px] font-bold text-red-500 mt-1">{errors.mobileNumber.message}</p>
                    )}
                  </div>
                </div>

                {/* Email & Disease */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-text-secondary uppercase tracking-wider block">
                      Email Address <span className="text-text-muted lowercase">(optional)</span>
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      {...register("email")}
                      className={`w-full h-11 px-4 rounded-xl border bg-[#F8FAFC]/50 text-xs sm:text-sm font-medium focus:outline-none transition-all ${
                        errors.email
                          ? "border-red-500 focus:ring-1 focus:ring-red-500"
                          : "border-border-main focus:border-[#028174] focus:ring-1 focus:ring-[#028174] focus:bg-white"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[10px] font-bold text-red-500 mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-text-secondary uppercase tracking-wider block">
                      Selected Condition <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      readOnly
                      {...register("disease")}
                      className="w-full h-11 px-4 rounded-xl border border-border-main bg-slate-50 text-xs sm:text-sm font-bold text-text-main focus:outline-none cursor-default"
                    />
                    {errors.disease && (
                      <p className="text-[10px] font-bold text-red-500 mt-1">{errors.disease.message}</p>
                    )}
                  </div>
                </div>

                {/* Consultation Mode & Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-text-secondary uppercase tracking-wider block">
                      Preferred Mode <span className="text-red-500">*</span>
                    </label>
                    <select
                      {...register("preferredConsultation")}
                      className="w-full h-11 px-3 rounded-xl border border-border-main bg-[#F8FAFC]/50 text-xs sm:text-sm font-semibold focus:outline-none cursor-pointer"
                    >
                      <option value="Online Consultation">Online Consultation</option>
                      <option value="In-Clinic Visit">In-Clinic Visit</option>
                      <option value="Phone Call">Phone Call</option>
                    </select>
                    {errors.preferredConsultation && (
                      <p className="text-[10px] font-bold text-red-500 mt-1">{errors.preferredConsultation.message}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-text-secondary uppercase tracking-wider block">
                      Preferred Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      min={todayString}
                      {...register("preferredDate")}
                      className="w-full h-11 px-4 rounded-xl border border-border-main bg-[#F8FAFC]/50 text-xs sm:text-sm font-semibold focus:outline-none cursor-pointer"
                    />
                    {errors.preferredDate && (
                      <p className="text-[10px] font-bold text-red-500 mt-1">{errors.preferredDate.message}</p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-text-secondary uppercase tracking-wider block">
                    Message / Symptoms Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    placeholder="Briefly describe your symptoms or case history (minimum 10 characters)..."
                    rows={3}
                    {...register("message")}
                    className={`w-full p-4 rounded-xl border bg-[#F8FAFC]/50 text-xs sm:text-sm font-medium focus:outline-none transition-all ${
                      errors.message
                        ? "border-red-500 focus:ring-1 focus:ring-red-500"
                        : "border-border-main focus:border-[#028174] focus:ring-1 focus:ring-[#028174] focus:bg-white"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[10px] font-bold text-red-500 mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Privacy Checkbox */}
                <div className="space-y-1.5">
                  <div className="flex items-start gap-2 select-none">
                    <input
                      type="checkbox"
                      id="agreeToPolicy"
                      {...register("agreeToPolicy")}
                      className="w-4 h-4 rounded text-[#028174] border-border-main focus:ring-[#028174] cursor-pointer mt-0.5"
                    />
                    <label htmlFor="agreeToPolicy" className="text-[11px] font-semibold text-text-secondary cursor-pointer hover:text-text-main transition-colors leading-tight">
                      I agree to the Ojas Sanjivani Privacy Policy and consent to being contacted.
                    </label>
                  </div>
                  {errors.agreeToPolicy && (
                    <p className="text-[10px] font-bold text-red-500">{errors.agreeToPolicy.message}</p>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    variant="primary"
                    className="w-full h-11 text-xs sm:text-sm font-bold text-white border-0 hover:opacity-90 flex items-center justify-center gap-2"
                    style={{
                      background: "linear-gradient(90deg, #01695F 0%, #028174 50%, #01695F 100%)",
                    }}
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        Book Free Consultation 
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </div>

              </form>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}
