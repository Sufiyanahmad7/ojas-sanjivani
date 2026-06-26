"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Testimonials() {
  const testimonials = [
    {
      name: "Ramesh Iyer",
      disease: "Chronic Acid Reflux (GERD)",
      text: "I had suffered from GERD for over 8 years. Allopathic medicines only gave temporary relief. Dr. Sanjeev's Ayurvedic protocol and diet corrections worked wonders. Within 4 months, my reflux is completely gone, and my digestion is great.",
      rating: 5,
      doctor: "Dr. Sanjeev Bhaskar",
    },
    {
      name: "Sunita Verma",
      disease: "Thyroid Imbalance",
      text: "Managing my thyroid level was a struggle. Traditional medications kept fluctuating. Dr. Priya's personalized Ayurvedic care and natural remedies restored my energy levels and balanced my reports in 6 months.",
      rating: 5,
      doctor: "Dr. Priya Deshmukh",
    },
    {
      name: "Karan Malhotra",
      disease: "Chronic Arthritis",
      text: "The joint stiffness in my hands was getting worse daily. Dr. Ananya's gentle homeopathic drops and anti-inflammatory advice have drastically reduced the swelling and pain. I can enjoy gardening again without discomfort.",
      rating: 5,
      doctor: "Dr. Ananya Roy",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 sm:py-20 bg-bg-white relative">
      <div className="custom-container space-y-12 sm:space-y-16 max-w-4xl">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <Badge variant="primary" className="py-1 px-3">Patient Testimonials</Badge>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-main">
            Real Stories of Natural Recovery
          </h2>
          <p className="text-text-secondary text-sm max-w-xl mx-auto leading-relaxed">
            Read how our integrated natural healthcare protocols helped patients achieve lasting relief 
            from chronic ailments.
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card 
                variant="mint" 
                hoverEffect="none"
                className="bg-mint border border-primary/10 p-8 sm:p-12 relative overflow-hidden"
              >
                <Quote className="absolute right-8 top-8 w-24 h-24 text-primary/5 pointer-events-none select-none" />

                <CardContent className="p-0 space-y-6 text-left">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>

                  {/* Feedback Text */}
                  <blockquote className="text-lg sm:text-xl font-medium text-text-main leading-relaxed italic">
                    "{testimonials[activeIndex].text}"
                  </blockquote>

                  {/* Patient Info */}
                  <div className="pt-4 border-t border-primary/10 flex items-center justify-between">
                    <div>
                      <cite className="not-italic font-heading text-base font-extrabold text-text-main block">
                        {testimonials[activeIndex].name}
                      </cite>
                      <span className="text-xs font-semibold text-primary">
                        Treated for {testimonials[activeIndex].disease}
                      </span>
                    </div>
                    <div className="text-right hidden sm:block">
                      <span className="text-[10px] text-text-secondary block">Consulting Doctor</span>
                      <span className="text-xs font-bold text-text-main">
                        {testimonials[activeIndex].doctor}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8 px-2">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === activeIndex ? "bg-primary w-6" : "bg-primary/20 hover:bg-primary/45"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrow Buttons */}
            <div className="flex gap-3">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-border-main hover:border-primary hover:text-primary flex items-center justify-center transition-colors bg-white cursor-pointer shadow-soft-sm"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border border-border-main hover:border-primary hover:text-primary flex items-center justify-center transition-colors bg-white cursor-pointer shadow-soft-sm"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
