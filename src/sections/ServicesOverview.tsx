"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import * as Illustrations from "@/components/ui/Illustrations";
import { ArrowRight, Sparkles } from "lucide-react";

export function ServicesOverview() {
  const serviceItems = [
    {
      title: "Ayurvedic Treatment Plans",
      tag: "Natural & Root-Cause",
      tagVariant: "success" as const,
      desc: "Balancing your Kapha, Vata, and Pitta doshas. Custom diet charts, lifestyle therapy, and traceable herbal medicines to address underlying conditions.",
      Illustration: Illustrations.Ayurveda,
      ctaLabel: "Get Ayurvedic Plan",
      href: "#appointment",
    },
    {
      title: "Homeopathic Therapeutics",
      tag: "Gentle & Side-Effect Free",
      tagVariant: "primary" as const,
      desc: "Tailored micro-dose formulations designed to naturally stimulate your body's immune defenses and restore long-term cellular balance.",
      Illustration: Illustrations.Homeopathy,
      ctaLabel: "Consult Homeopath",
      href: "#appointment",
    },
    {
      title: "AI-Powered Health Screening",
      tag: "Instant & Intelligent",
      tagVariant: "accent" as const,
      desc: "An intelligent diagnostic assistant that pre-screens symptoms, predicts Prakriti, and matches you with the ideal specialist in real-time.",
      Illustration: Illustrations.AIHealthAssistant,
      ctaLabel: "Analyze Symptoms Now",
      href: "#ai-assistant",
    }
  ];

  return (
    <section id="services" className="py-24 bg-bg-white relative">
      {/* Background organic shape */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-mint/30 rounded-full filter blur-3xl pointer-events-none -z-10" />

      <div className="custom-container space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <Badge variant="success" className="py-1 px-3">Our Medical Paradigms</Badge>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-main">
            Integrated Healing Tailored For You
          </h2>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            We blend ancient wellness wisdom with contemporary medical validation, offering a holistic healthcare journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {serviceItems.map((item, index) => (
            <Card
              key={item.title}
              variant="default"
              hoverEffect="lift"
              className="flex flex-col h-full bg-bg-white border border-border-main/50"
            >
              {/* Image / Illustration Container */}
              <div className="flex-1 flex items-center justify-center p-8 bg-mint/10 border-b border-border-main/10 rounded-t-2xl relative overflow-hidden">
                <item.Illustration size={160} />
                {index === 2 && (
                  <div className="absolute top-4 right-4 bg-bg-white p-2 rounded-full border border-border-main/30 shadow-soft-sm">
                    <Sparkles className="w-4 h-4 text-primary animate-spin-slow" />
                  </div>
                )}
              </div>

              {/* Card Body */}
              <CardHeader className="space-y-3 pb-4">
                <div className="flex justify-start">
                  <Badge variant={item.tagVariant} className="text-[10px] font-bold uppercase tracking-wider py-0.5 px-2.5">
                    {item.tag}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed text-text-secondary">
                  {item.desc}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0 mt-auto pb-8">
                <Button variant={index === 2 ? "primary" : "outline"} className="w-full justify-center group" href={item.href}>
                  {item.ctaLabel}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
