"use client";

import React, { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Why choose Ayurveda?",
      answer: "Ayurveda is a time-tested science that treats the whole person (body, mind, and spirit) rather than just masking symptoms. It utilizes natural herbs, customized diets, and lifestyle modifications to restore your body's inherent intelligence and natural balance.",
    },
    {
      question: "Is Homeopathy safe?",
      answer: "Yes, Homeopathy is extremely safe, non-toxic, and free from harmful side effects. It uses highly diluted natural substances to trigger the body's self-healing systems, making it highly effective and suitable for all age groups, including infants and senior citizens.",
    },
    {
      question: "Do you provide online consultations?",
      answer: "Absolutely! We provide high-quality video and audio consultations with certified Ayurvedic and Homeopathic doctors across India. After consultation, your customized treatment prescription and natural medicines are dispatched directly to your doorstep.",
    },
    {
      question: "How long does treatment take?",
      answer: "Since natural treatments focus on curing the root cause rather than temporary relief, chronic conditions usually take 3 to 6 months to show deep-rooted, long-lasting recovery. Acute ailments can recover much quicker.",
    },
    {
      question: "Are medicines delivered across India?",
      answer: "Yes, we dispatch authentic, quality-checked medicines to over 20,000 pin codes across India. Dispatch and shipping tracking details are automatically shared via WhatsApp/SMS once your order leaves our pharmacy.",
    },
    {
      question: "Can chronic diseases be treated naturally?",
      answer: "Yes. Chronic ailments like diabetes management, hypertension, joint pain/arthritis, thyroid imbalances, skin disorders, and IBS respond exceptionally well to integrated, evidence-based Ayurvedic and Homeopathic treatments.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 bg-bg-white relative">
      <div className="custom-container max-w-4xl space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <Badge variant="primary" className="py-1 px-3">Help Center</Badge>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-main">
            Frequently Asked Questions
          </h2>
          <p className="text-text-secondary text-sm max-w-xl mx-auto leading-relaxed">
            Have questions about our doctors, medicines, or treatment plans? Find your answers here.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <Card
                key={index}
                variant="default"
                hoverEffect="none"
                className={`border border-border-main/50 transition-all duration-300 overflow-hidden ${
                  isOpen ? "bg-mint/5 border-primary/20 shadow-soft-sm" : "bg-bg-white"
                }`}
              >
                {/* Trigger Header */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none cursor-pointer group"
                >
                  <span className="flex items-start gap-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 mt-0.5 transition-colors ${isOpen ? "text-primary" : "text-text-secondary group-hover:text-primary"}`} />
                    <span className="text-sm font-extrabold text-text-main group-hover:text-primary transition-colors">
                      {item.question}
                    </span>
                  </span>
                  
                  <span className="ml-4 shrink-0 p-1 rounded-lg hover:bg-mint/35 text-text-secondary transition-colors">
                    {isOpen ? <Minus className="w-4 h-4 text-primary" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {/* Collapsible Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="p-5 sm:p-6 pt-0 border-t border-border-main/10 text-xs sm:text-sm text-text-secondary leading-relaxed pl-11">
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
