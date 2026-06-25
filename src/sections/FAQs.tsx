"use client";

import React, { useState } from "react";
import { FAQS } from "@/constants";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-24 bg-bg-white relative">
      <div className="custom-container max-w-4xl space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <Badge variant="primary" className="py-1 px-3">Common Questions</Badge>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-main">
            Frequently Asked Questions
          </h2>
          <p className="text-text-secondary text-sm max-w-xl mx-auto leading-relaxed">
            Find details on consultations, medicine authentication, custom dosages, and integrated treatments.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-4">
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <Card
                key={item.id}
                variant="default"
                className={`border border-border-main/50 transition-all duration-300 overflow-hidden ${
                  isOpen ? "bg-mint/5 border-primary/20 shadow-soft-sm" : "bg-bg-white"
                }`}
              >
                {/* Trigger button header */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none cursor-pointer group"
                >
                  <span className="flex items-start gap-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 mt-0.5 transition-colors ${isOpen ? "text-primary" : "text-text-secondary group-hover:text-primary"}`} />
                    <span className="text-xs sm:text-sm font-extrabold text-text-main group-hover:text-primary transition-colors">
                      {item.question}
                    </span>
                  </span>
                  
                  <span className="ml-4 shrink-0 p-1 rounded-lg hover:bg-mint/35 text-text-secondary transition-colors">
                    {isOpen ? <Minus className="w-4 h-4 text-primary" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {/* Collapsible Answer Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="p-5 md:p-6 pt-0 border-t border-border-main/10 text-xs sm:text-sm text-text-secondary leading-relaxed pl-11">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
