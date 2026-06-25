"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Badge } from "@/components/ui/Badge";
import { Check, Calendar, Clock, Sparkles, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    category: "",
    date: "",
    slot: "morning",
    message: ""
  });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const categories = [
    { id: "digestion", label: "Digestion & Gut Health" },
    { id: "joint-pain", label: "Joint & Bone Pain" },
    { id: "hair-skin", label: "Hair & Skin Care" },
    { id: "diabetes", label: "Diabetes Management" },
    { id: "womens-health", label: "Women's Wellness" },
    { id: "other", label: "General Health / Other" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
    }, 2000);
  };

  return (
    <section id="appointment" className="py-12 sm:py-14 bg-mint/10 border-y border-border-main/30 relative">
      <div className="custom-container grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Column: Directives & Trust */}
        <div className="lg:col-span-5 space-y-8 text-center lg:text-left lg:sticky lg:top-28">
          <div className="space-y-4">
            <Badge variant="success" className="py-1 px-3">Direct Doctor Access</Badge>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-main leading-tight">
              Schedule Your Free consultation in 2 Minutes
            </h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              Fill in your health concerns. Our clinical desk will route you to the correct Ayurvedic or Homeopathic specialist.
            </p>
          </div>

          {/* Steps Timeline */}
          <div className="space-y-4 max-w-md mx-auto lg:mx-0 text-left">
            {[
              { num: "1", title: "Fill Health Form", desc: "Submit your basic details and select your health category concern." },
              { num: "2", title: "Free Diagnostic Call", desc: "Our medical officer will call you to understand symptoms & assign a specialist." },
              { num: "3", title: "Integrated Treatment Plan", desc: "Get your personalized herbs, therapeutics, and diet plan via video consultation." }
            ].map((step) => (
              <div key={step.num} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-bg-white font-heading font-black text-sm flex items-center justify-center shrink-0">
                  {step.num}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-main">{step.title}</h4>
                  <p className="text-xs text-text-secondary mt-0.5 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Call */}
          <div className="p-5 rounded-2xl bg-bg-white border border-border-main/40 flex items-center justify-between shadow-soft-sm max-w-md mx-auto lg:mx-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-mint flex items-center justify-center text-primary">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-[10px] text-text-secondary font-bold uppercase tracking-wider block">Prefer booking over phone?</span>
                <a href="tel:+919266714040" className="text-sm font-extrabold text-text-main hover:text-primary transition-colors block">
                  Call: +91 92667 14040
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form Card */}
        <div className="lg:col-span-7 w-full max-w-2xl mx-auto">
          <Card className="bg-bg-white border border-border-main/60 shadow-soft-lg overflow-hidden">
            <CardHeader className="bg-primary/5 p-6 border-b border-border-main/20">
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" /> Consult Trusted Doctors
              </CardTitle>
              <CardDescription>Get a call back from a qualified health coach in 10-15 minutes.</CardDescription>
            </CardHeader>

            <CardContent className="p-6 md:p-8">
              <AnimatePresence mode="wait">
                {formStatus === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 text-center space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-mint border border-primary/20 flex items-center justify-center text-primary mx-auto">
                      <Check className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-heading text-xl font-bold text-text-main">Appointment Requested!</h3>
                      <p className="text-sm text-text-secondary max-w-sm mx-auto leading-relaxed">
                        Thank you, <strong className="text-primary">{formData.name}</strong>. A medical coordinator will contact you at <strong>{formData.phone}</strong> within 15 minutes.
                      </p>
                    </div>
                    <Button variant="outline" className="bg-bg-white" onClick={() => setFormStatus("idle")}>
                      Schedule Another
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Name + Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        label="Patient Name"
                        name="name"
                        type="text"
                        placeholder="Dr. Partap Chauhan"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                      <Input
                        label="Mobile Number"
                        name="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>

                    {/* Email + Date */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        label="Email Address (Optional)"
                        name="email"
                        type="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                      <Input
                        label="Preferred Date"
                        name="date"
                        type="date"
                        required
                        value={formData.date}
                        onChange={handleInputChange}
                      />
                    </div>

                    {/* Concern dropdown + Time Slots */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5 text-left">
                        <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">
                          Health Concern Category
                        </label>
                        <select
                          name="category"
                          required
                          value={formData.category}
                          onChange={handleInputChange}
                          className="w-full text-xs bg-bg-white border border-border-main rounded-xl py-3 px-4 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary cursor-pointer"
                        >
                          <option value="">Select Category...</option>
                          {categories.map((c) => (
                            <option key={c.id} value={c.id}>
                              {c.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-1.5 text-left">
                        <label className="text-xs font-bold text-text-secondary uppercase tracking-wider">
                          Preferred Time Slot
                        </label>
                        <select
                          name="slot"
                          required
                          value={formData.slot}
                          onChange={handleInputChange}
                          className="w-full text-xs bg-bg-white border border-border-main rounded-xl py-3 px-4 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary cursor-pointer"
                        >
                          <option value="morning">Morning (09:00 AM - 12:00 PM)</option>
                          <option value="afternoon">Afternoon (12:00 PM - 04:00 PM)</option>
                          <option value="evening">Evening (04:00 PM - 08:00 PM)</option>
                        </select>
                      </div>
                    </div>

                    {/* Symptoms Details */}
                    <Textarea
                      label="Symptom Details / Notes"
                      name="message"
                      placeholder="Briefly describe what you are experiencing, how long you've had it, or any past medical records details..."
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                    />

                    {/* Submission button */}
                    <Button
                      type="submit"
                      variant="primary"
                      className="w-full justify-center py-3.5 shadow-soft-lg group"
                      disabled={formStatus === "submitting"}
                    >
                      {formStatus === "submitting" ? (
                        <div className="w-5 h-5 border-2 border-bg-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <span className="flex items-center gap-1.5">
                          Confirm Free Consultation <Check className="w-4 h-4" />
                        </span>
                      )}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
}
