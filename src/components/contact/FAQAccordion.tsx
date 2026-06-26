"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { CONTACT_CONFIG } from "@/data/contactConfig";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const contactFaqs: FAQItem[] = [
    {
      question: "How do online consultations work?",
      answer: "Once you book a slot, you'll receive a confirmation and a secure call link (or phone coordinator check-in). Our experienced doctor will consult you via high-definition video or phone call to review your symptoms, diet, and lifestyle, subsequently sharing a comprehensive digital prescription.",
    },
    {
      question: "Can I choose between Ayurveda and Homeopathy?",
      answer: "Yes, you can specify your preference during booking. Ojas Sanjivani's unique model integrates both natural sciences, and we will align the protocol that is safest and most effective for your specific chronic condition.",
    },
    {
      question: "Will medicines be delivered to my home?",
      answer: "Yes. All prescribed Ayurvedic herbal formulations and homeopathic constitutional medicines are packed securely under GMP guidelines and shipped directly to your home address anywhere in India.",
    },
    {
      question: "Do you have doctors available in my city?",
      answer: "We have an extensive network of experienced consultation partners and doctors across major cities in India. Based on your pin code, we will match and route you to the nearest partner specialist if you prefer an in-person consultation.",
    },
    {
      question: "How are follow-up consultations conducted?",
      answer: "Follow-up sessions can be scheduled easily via our helpline or WhatsApp. They are typically conducted online to save you travel time, but you can also visit your matched network doctor for physical checkups.",
    },
    {
      question: "How do I book an appointment?",
      answer: `You can fill out our 'Book Your Consultation' form on this page, click the WhatsApp button to chat live with our support team, or call our centralized helpline directly at ${CONTACT_CONFIG.phone}.`,
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": contactFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faqs" className="py-8 sm:py-10 bg-white relative">
      {/* Inject FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="custom-container max-w-4xl space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <Badge variant="success" className="py-1 px-3 bg-[#028174]/10 text-[#028174] border-transparent font-bold">
            FAQ Section
          </Badge>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-main">
            Frequently Asked Questions
          </h2>
          <p className="text-text-secondary text-sm max-w-xl mx-auto leading-relaxed">
            Find expert answers about virtual appointments, prescriptions, delivery, and doctor matching.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4 text-left">
          {contactFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Card
                key={index}
                variant="default"
                hoverEffect="none"
                className={`border border-border-main/55 transition-all duration-300 overflow-hidden ${
                  isOpen ? "bg-[#F5FBF8]/40 border-[#028174]/20 shadow-soft-sm" : "bg-white"
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none cursor-pointer group"
                  aria-expanded={isOpen ? "true" : "false"}
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
