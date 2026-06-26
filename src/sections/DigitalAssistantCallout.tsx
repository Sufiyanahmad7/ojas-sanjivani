"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Sparkles, ArrowRight, Brain, Send, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function DigitalAssistantCallout() {
  const [symptomInput, setSymptomInput] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [evaluationStep, setEvaluationStep] = useState<"idle" | "evaluating" | "result">("idle");

  const commonSymptoms = [
    "Acid Reflux & Bloating",
    "Knee Joint Stiffness",
    "Hair Fall & Dry Scalp",
    "Anxiety & Poor Sleep"
  ];

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
    setSymptomInput(`I am experiencing ${tag.toLowerCase()}.`);
  };

  const handleEvaluate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!symptomInput.trim()) return;
    
    setEvaluationStep("evaluating");
    setTimeout(() => {
      setEvaluationStep("result");
    }, 2500);
  };

  const resetForm = () => {
    setSymptomInput("");
    setSelectedTag(null);
    setEvaluationStep("idle");
  };

  return (
    <section id="digital-assistant" className="py-12 sm:py-14 bg-bg-white relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="custom-container grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: Interactive Chat Simulation Card */}
        <div className="lg:col-span-6 w-full max-w-lg mx-auto">
          <Card variant="glass" className="border border-border-main/60 shadow-soft-lg overflow-hidden">
            {/* Header simulation */}
            <div className="bg-primary/5 p-4 border-b border-border-main/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Brain className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-text-main block">Sanjivani Wellness Guide</span>
                  <span className="text-[10px] text-accent-emerald font-semibold block">● Online & Free</span>
                </div>
              </div>
              <Badge variant="success" className="text-[9px]">Symptom Checker</Badge>
            </div>

            <CardContent className="p-6 space-y-6">
              <AnimatePresence mode="wait">
                {evaluationStep === "idle" && (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6"
                  >
                    <p className="text-xs text-text-secondary leading-relaxed bg-mint p-3 rounded-xl border border-primary/5">
                      "Namaste! Describe your symptoms, digestion, or concerns below. I will recommend the best therapeutic approach."
                    </p>

                    {/* Predefined Quick Tags */}
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider block">Common symptoms:</span>
                      <div className="flex flex-wrap gap-2">
                        {commonSymptoms.map((symptom) => (
                          <button
                            key={symptom}
                            type="button"
                            onClick={() => handleTagClick(symptom)}
                            className={`text-xs px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
                              selectedTag === symptom
                                ? "bg-primary text-bg-white border-primary shadow-soft-sm font-semibold"
                                : "bg-bg-white text-text-secondary border-border-main hover:border-primary/40 hover:text-primary"
                            }`}
                          >
                            {symptom}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Submit Form */}
                    <form onSubmit={handleEvaluate} className="space-y-3">
                      <div className="relative">
                        <input
                          type="text"
                          value={symptomInput}
                          onChange={(e) => setSymptomInput(e.target.value)}
                          placeholder="Type your symptoms (e.g. skin itching after eating)"
                          className="w-full text-xs bg-bg-white border border-border-main rounded-xl py-3 pl-4 pr-12 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                          required
                        />
                        <button
                          type="submit"
                          className="absolute right-2 top-2 p-1.5 rounded-lg bg-primary text-bg-white hover:bg-primary-hover transition-colors cursor-pointer"
                        >
                          <Send className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}

                {evaluationStep === "evaluating" && (
                  <motion.div
                    key="evaluating"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 flex flex-col items-center justify-center space-y-4"
                  >
                    <div className="w-12 h-12 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
                    <div className="text-center">
                      <h4 className="text-sm font-bold text-text-main">Analyzing Symptoms</h4>
                      <p className="text-[10px] text-text-secondary mt-1">Cross-referencing Ayurvedic Prakriti & Homeopathic Repertory...</p>
                    </div>
                  </motion.div>
                )}

                {evaluationStep === "result" && (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="space-y-6"
                  >
                    <div className="bg-mint p-4 rounded-xl border border-primary/10 space-y-3">
                      <div className="flex items-center gap-2 text-primary">
                        <Check className="w-4 h-4" />
                        <h4 className="text-xs font-bold uppercase tracking-wider">Analysis Complete</h4>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="text-xs font-semibold text-text-main">
                          Suggested Focus: <span className="text-primary">Gastrointestinal Balance (Pitta/Vata)</span>
                        </div>
                        <p className="text-[11px] text-text-secondary leading-relaxed">
                          Your symptoms suggest a Pitta dosha aggravation affecting gut digestion. We recommend consulting an Ayurvedic physician specializing in Kayachikitsa.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button variant="primary" size="sm" className="flex-1 justify-center" href="#appointment">
                        Book Doctor Consultation
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 justify-center bg-bg-white" onClick={resetForm}>
                        Start Over
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Copy & Details */}
        <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
          <Badge variant="accent" className="py-1 px-3">Sanjivani Diagnostics Guide</Badge>
          
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-main leading-tight">
            Consult the Sanjivani Wellness Guide in Seconds
          </h2>
          
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            Our clinical reasoning model evaluates your symptoms, estimates your biological constitution (Dosha Prakriti), and guides you to the correct practitioner.
          </p>

          <div className="space-y-4 pt-4">
            {[
              { title: "Personalized Prakriti Assessment", desc: "Understand your mind-body blueprint and baseline biological tendencies." },
              { title: "Specialist Physician Matching", desc: "Instantly pair with doctor specialties matching your specific symptom conditions." },
              { title: "100% Confidential & Secure", desc: "Your medical inputs are private and used strictly for clinical analysis." }
            ].map(({ title, desc }) => (
              <div key={title} className="flex gap-3 text-left">
                <div className="w-5 h-5 rounded-full bg-mint flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <Sparkles className="w-3 h-3" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-main">{title}</h4>
                  <p className="text-xs text-text-secondary mt-0.5 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
