"use client";

import React, { useState } from "react";
import { PATIENT_STORIES } from "@/constants";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Quote, Sparkles, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function PatientStories() {
  const [selectedCondition, setSelectedCondition] = useState<string>("All");

  const categories = ["All", "Digestive", "Joint Pain", "Skin Care", "Diabetes", "Thyroid"];

  const filteredStories = selectedCondition === "All"
    ? PATIENT_STORIES
    : PATIENT_STORIES.filter(story => {
      const text = (story.treatmentReceived + " " + story.reviewText).toLowerCase();
      if (selectedCondition === "Digestive") return text.includes("acid") || text.includes("ibs") || text.includes("digestion");
      if (selectedCondition === "Joint Pain") return text.includes("joint") || text.includes("arthritis") || text.includes("back pain");
      if (selectedCondition === "Diabetes") return text.includes("diabetes") || text.includes("sugar");
      if (selectedCondition === "Skin Care") return text.includes("skin") || text.includes("acne") || text.includes("hair");
      if (selectedCondition === "Thyroid") return text.includes("thyroid");
      return false;
    });

  return (
    <section id="stories" className="py-12 sm:py-14 bg-mint/10 border-y border-border-main/30 relative">
      <div className="custom-container space-y-12">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <Badge variant="success" className="py-1 px-3 bg-[#028174]/10 text-[#028174] border-transparent">Patient Testimonials</Badge>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-main">
            Real Stories of Healing & Recovery
          </h2>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            Discover how integrated Ayurvedic and Homeopathic regimens have transformed health conditions for thousands.
          </p>
        </div>

        {/* Condition Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-xl mx-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCondition(category)}
              className={`text-xs px-4 py-2 rounded-full border transition-all cursor-pointer font-bold ${selectedCondition === category
                  ? "text-bg-white border-transparent shadow-soft-sm hover:opacity-90"
                  : "bg-bg-white text-text-secondary border-border-main hover:border-[#028174]/40 hover:text-[#028174]"
                }`}
              style={selectedCondition === category ? {
                background: "linear-gradient(90deg, #01695F 0%, #028174 100%)",
              } : undefined}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filteredStories.map((story) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                layout
              >
                <Card
                  variant="default"
                  hoverEffect="lift"
                  className="flex flex-col justify-between h-full bg-bg-white border border-border-main/50 p-6 relative overflow-hidden"
                >
                  <Quote className="absolute top-4 right-4 w-12 h-12 text-[#028174]/5 pointer-events-none" />

                  <div className="space-y-4 text-left">
                    {/* Header: Badges */}
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="success" className="text-[9px] uppercase tracking-wider font-bold bg-[#028174]/10 text-[#028174] border-transparent">
                        {story.treatmentReceived}
                      </Badge>
                      <Badge variant="outline" className="text-[9px] font-bold">
                        ⏱️ Recovery: {story.duration}
                      </Badge>
                    </div>

                    {/* Testimonial Quote */}
                    <p className="text-xs text-text-main italic leading-relaxed">
                      "{story.reviewText}"
                    </p>
                  </div>

                  {/* Patient Info Footer */}
                  <div className="mt-8 pt-4 border-t border-border-main/20 flex items-center justify-between">
                    <div className="text-left">
                      <h4 className="text-xs font-extrabold text-text-main flex items-center gap-1">
                        {story.patientName}
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#028174] shrink-0" />
                      </h4>
                      <span className="text-[10px] text-text-secondary">Verified Recovered Case</span>
                    </div>

                    <span className="text-[9px] font-bold text-[#028174]/80 bg-[#028174]/5 px-2 py-0.5 rounded flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#028174] animate-pulse" /> {story.location}
                    </span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
