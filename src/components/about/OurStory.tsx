"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Quote, Target, Eye } from "lucide-react";

export function OurStory() {
  return (
    <section id="story" className="py-10 sm:py-12 bg-bg-white relative">
      <div className="custom-container space-y-10">
        
        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Story Image */}
          <div className="relative">
            <div className="relative w-full aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-soft-lg border border-border-main/50">
              <Image
                src="/images/ayurveda-card.png"
                alt="Ayurveda and patient interaction at Ojas Sanjivani"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
            </div>
            {/* Subtle quote overlay decoration */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 max-w-[260px] sm:max-w-[280px]">
              <Card variant="mint" className="shadow-soft-lg border-primary/10">
                <CardContent className="p-4 flex gap-3 items-start">
                  <Quote className="w-5 h-5 text-primary shrink-0 mt-1 rotate-180" />
                  <p className="text-xs font-semibold text-text-main leading-relaxed italic">
                    "True healing begins by treating the root cause, not just the symptoms."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="space-y-6 text-left">
            <div className="space-y-3">
              <Badge variant="primary" className="py-1 px-3">Our Journey</Badge>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-main">
                The Genesis of Ojas Sanjivani
              </h2>
            </div>
            
            <div className="space-y-4 text-text-secondary text-sm leading-relaxed">
              <p>
                Ojas Sanjivani was founded with a deep conviction: healthcare should heal, not just manage. 
                Seeing millions struggle with chronic diseases under temporary, symptom-focused treatments, 
                we set out to establish a platform where authentic, traditional healing meets modern medical 
                discipline.
              </p>
              <p>
                Our mission is to help people live healthier, happier lives naturally. We combine the root-cause 
                philosophy of Ayurveda with the highly customized, symptom-mapping accuracy of Homeopathy. 
                By merging these sciences, we offer a comprehensive healing alternative that targets disease 
                at its source.
              </p>
            </div>

            {/* Sub-grid for Mission & Vision to save vertical space */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-border-main/10">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <Target className="w-4.5 h-4.5" />
                  <h4 className="font-heading text-sm font-extrabold">Our Mission</h4>
                </div>
                <p className="text-text-secondary text-xs leading-relaxed">
                  To make authentic Ayurveda and Homeopathy accessible to every family through ethical, 
                  personalized, and evidence-based healthcare.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-secondary-hover">
                  <Eye className="w-4.5 h-4.5" />
                  <h4 className="font-heading text-sm font-extrabold">Our Vision</h4>
                </div>
                <p className="text-text-secondary text-xs leading-relaxed">
                  To become India's most trusted natural healthcare platform helping millions achieve 
                  healthier lives naturally.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
