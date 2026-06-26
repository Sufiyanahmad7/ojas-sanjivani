"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { FAQ } from "@/data/diseases";

interface FAQAccordionProps {
  faqs: FAQ[];
  diseaseName: string;
}

export function FAQAccordion({ faqs, diseaseName }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate schema structured data for SEO (FAQPage)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faqs" className="py-16 sm:py-20 bg-white relative">
      {/* Inject FAQPage Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="custom-container max-w-4xl space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <Badge variant="success" className="py-1 px-3 bg-[#028174]/10 text-[#028174] border-transparent">
            FAQ Section
          </Badge>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-main">
            Frequently Asked Questions
          </h2>
          <p className="text-text-secondary text-sm max-w-xl mx-auto leading-relaxed">
            Find expert answers to common queries regarding natural treatments for {diseaseName}.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Card
                key={index}
                variant="default"
                className={`border border-border-main/50 transition-all duration-300 overflow-hidden ${
                  isOpen ? "bg-[#F5FBF8]/40 border-[#028174]/20 shadow-soft-sm" : "bg-bg-white"
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none cursor-pointer group"
                >
                  <span className="flex items-start gap-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 mt-0.5 transition-colors ${isOpen ? "text-[#028174]" : "text-text-secondary group-hover:text-[#028174]"}`} />
                    <span className="text-xs sm:text-sm font-extrabold text-text-main group-hover:text-[#028174] transition-colors">
                      {faq.question}
                    </span>
                  </span>
                  
                  <span className="ml-4 shrink-0 p-1 rounded-lg hover:bg-[#F5FBF8] text-text-secondary transition-colors">
                    {isOpen ? <Minus className="w-4 h-4 text-[#028174]" /> : <Plus className="w-4 h-4" />}
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
                      <div className="p-5 md:p-6 pt-0 border-t border-border-main/10 text-xs sm:text-sm text-text-secondary leading-relaxed pl-11">
                        {faq.answer}
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
