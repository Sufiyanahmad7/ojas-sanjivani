import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { FloatingWidgets } from "@/sections/FloatingWidgets";
import { ScrollToTopOnLoad } from "@/components/common/ScrollToTopOnLoad";
import { Button } from "@/components/ui/Button";

import { AppointmentForm } from "@/sections/AppointmentForm";

// Import local components for About Us
import { AboutHero } from "@/components/about/AboutHero";
import { OurStory } from "@/components/about/OurStory";
import { MeetExperts } from "@/components/about/MeetExperts";
import { TreatmentPhilosophy } from "@/components/about/TreatmentPhilosophy";

export const metadata: Metadata = {
  title: "About Us | Ojas Sanjivani - Healing Lives Naturally",
  description: "Learn about Ojas Sanjivani's mission, our team of certified Ayurvedic and Homeopathic doctors, our root-cause treatment philosophy, and our patient-first natural healthcare values.",
  openGraph: {
    title: "About Us | Ojas Sanjivani - Healing Lives Naturally",
    description: "Discover our journey, our experts, our treatment philosophy, and see inside our clinics.",
    url: "https://ojassanjivani.com/about",
    siteName: "Ojas Sanjivani",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Ojas Sanjivani - Healing Lives Naturally",
    description: "Learn about our expert doctors, natural healing journey, and patient recovery stories.",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-bg-white font-sans antialiased text-text-main relative">
      <ScrollToTopOnLoad />
      
      {/* Header component */}
      <Header />

      {/* Main content wrapper with top padding to account for sticky navbar */}
      <main className="relative pb-24 md:pb-0" style={{ paddingTop: "116px" }}>
        
        {/* Breadcrumb Navigation */}
        <div className="custom-container pt-3 pb-1">
          <nav className="flex items-center gap-2 text-[10px] sm:text-xs font-bold text-text-secondary">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-text-muted" />
            <span className="text-text-muted">About Us</span>
          </nav>
        </div>

        {/* Section 1: Hero Banner */}
        <AboutHero />

        {/* Section 2: Our Story (Story + Mission & Vision) */}
        <OurStory />

        {/* Section 3: Our Treatment Philosophy */}
        <TreatmentPhilosophy />

        {/* Section 4: Meet Our Experts */}
        <MeetExperts />

        {/* Section 5: Appointment Booking Form */}
        <AppointmentForm />

      </main>

      {/* Footer component */}
      <Footer />

      {/* Floating Action widgets */}
      <FloatingWidgets />

      {/* Mobile Sticky bottom CTA button */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/95 backdrop-blur-md border-t border-border-main/50 shadow-soft-xl flex items-center justify-between gap-4">
        <div className="text-left">
          <span className="text-[10px] text-text-secondary block font-bold leading-tight">Consult Experts</span>
          <span className="text-xs font-black text-primary">Free Pre-Screening</span>
        </div>
        <Button
          variant="primary"
          size="sm"
          href="#appointment"
          className="text-white font-bold text-[10px] h-9 px-4 rounded-full border-0 shadow-soft-sm"
          style={{
            background: "linear-gradient(90deg, #01695F 0%, #028174 50%, #01695F 100%)",
          }}
        >
          Book Consultation
        </Button>
      </div>

    </div>
  );
}
