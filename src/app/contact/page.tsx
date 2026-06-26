import React from "react";
import { Metadata } from "next";
import { 
  Phone, 
  MessageSquare, 
  Mail, 
  Calendar,
  Sparkles,
  ShieldAlert
} from "lucide-react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { FloatingWidgets } from "@/sections/FloatingWidgets";
import { ScrollToTopOnLoad } from "@/components/common/ScrollToTopOnLoad";
import { Badge } from "@/components/ui/Badge";
import { CONTACT_CONFIG } from "@/data/contactConfig";

// Contact Components
import { ContactHeroIllustration } from "@/components/contact/ContactHeroIllustration";
import { ContactCard } from "@/components/contact/ContactCard";
import { ContactForm } from "@/components/contact/ContactForm";
import { ConsultationHours } from "@/components/contact/ConsultationHours";
import { ConsultationNetwork } from "@/components/contact/ConsultationNetwork";
import { ServicesNationwide } from "@/components/contact/ServicesNationwide";
import { FAQAccordion } from "@/components/contact/FAQAccordion";

export const metadata: Metadata = {
  title: "Contact Ojas Sanjivani | Ayurveda & Homeopathy Consultation",
  description: "Contact Ojas Sanjivani for expert Ayurveda and Homeopathy consultations. Book appointments online, call our specialists, or connect with our growing network of doctors across India.",
  alternates: {
    canonical: "https://ojassanjivani.com/contact",
  },
  openGraph: {
    title: "Contact Ojas Sanjivani | Ayurveda & Homeopathy Consultation",
    description: "Contact Ojas Sanjivani for expert Ayurveda and Homeopathy consultations. Book appointments online, call our specialists, or connect with our growing network of doctors across India.",
    url: "https://ojassanjivani.com/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Ojas Sanjivani | Ayurveda & Homeopathy Consultation",
    description: "Contact Ojas Sanjivani for expert Ayurveda and Homeopathy consultations. Book appointments online, call our specialists, or connect with our growing network of doctors across India.",
  },
};

export default function ContactPage() {
  // Schema Structured Data for Consultation-first Platform
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Ojas Sanjivani Consultation Experts",
    "description": "Book a virtual consultation or connect with Ojas Sanjivani partner doctors across India.",
    "url": "https://ojassanjivani.com/contact"
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ojas Sanjivani",
    "url": "https://ojassanjivani.com",
    "logo": "https://ojassanjivani.com/logo/logo-horizontal.svg",
    "telephone": CONTACT_CONFIG.phone,
    "email": CONTACT_CONFIG.email,
    "sameAs": [
      "https://facebook.com/ojassanjivani",
      "https://instagram.com/ojassanjivani",
      "https://youtube.com/ojassanjivani"
    ]
  };

  return (
    <div className="min-h-screen bg-bg-white font-sans antialiased text-text-main relative">
      <ScrollToTopOnLoad />

      {/* Structured SEO Data Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* Navbar (Header) */}
      <Header />

      {/* Main Content Layout */}
      <main className="relative" style={{ paddingTop: "130px" }}>
        
        {/* 1. Hero Section */}
        <section className="relative overflow-hidden bg-radial from-[#028174]/5 via-transparent to-transparent pt-10 pb-14 sm:pb-16 text-left border-b border-border-main/20">
          
          {/* Medical pattern background overlays */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#028174_1px,transparent_1px)] [background-size:24px_24px]" />
          
          <div className="custom-container max-w-6xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Heading and copy */}
              <div className="lg:col-span-7 space-y-6">
                <Badge variant="success" className="py-1 px-3 bg-[#028174]/10 text-[#028174] border-transparent font-bold">
                  ✨ Central Consultation Hub
                </Badge>
                <h1 className="font-heading text-4xl sm:text-5xl font-black text-text-main leading-[1.1] tracking-tight">
                  Get in Touch with Our <span className="text-[#028174]">Healthcare</span> Experts
                </h1>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-xl">
                  Whether you're seeking Ayurveda or Homeopathy treatment, our experienced doctors are available to guide you through online consultations and our growing consultation network across India.
                </p>

                {/* Primary & Secondary Call to Actions */}
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto">
                  <a
                    href="#booking-form"
                    className="w-full sm:w-auto inline-flex h-12 px-6 items-center justify-center rounded-xl bg-[#028174] hover:bg-[#01695F] text-white font-extrabold text-sm shadow-soft-md transition-all duration-300"
                  >
                    Book Free Consultation
                  </a>
                  <a
                    href={`tel:${CONTACT_CONFIG.phoneRaw}`}
                    className="w-full sm:w-auto inline-flex h-12 px-6 items-center justify-center rounded-xl border border-border-main hover:border-[#028174] hover:bg-[#028174]/5 text-text-main font-extrabold text-sm transition-all duration-300"
                  >
                    Call Now
                  </a>
                </div>
              </div>

              {/* Right Column: Premium Custom Illustration */}
              <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
                <ContactHeroIllustration />
              </div>

            </div>
          </div>

          {/* Curved Bottom Divider */}
          <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none transform translate-y-[1px]">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[30px] fill-white">
              <path d="M0,0 C150,90 350,120 600,120 C850,120 1050,90 1200,0 L1200,120 L0,120 Z" />
            </svg>
          </div>
        </section>

        {/* 2. Contact Options */}
        <section className="py-8 sm:py-10 bg-white relative">
          <div className="custom-container max-w-5xl mx-auto space-y-12">
            
            {/* Header */}
            <div className="text-center max-w-xl mx-auto space-y-4">
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-text-main">
                Ways to Connect
              </h2>
              <p className="text-xs sm:text-sm text-text-secondary">
                Select your preferred way to get in touch with our healthcare panel. We are highly responsive.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <ContactCard
                icon={<Phone className="w-6 h-6" />}
                title="Call Us"
                description={CONTACT_CONFIG.phone}
                buttonText="Call Now"
                actionUrl={`tel:${CONTACT_CONFIG.phoneRaw}`}
              />

              <ContactCard
                icon={<MessageSquare className="w-6 h-6" />}
                title="WhatsApp Consultation"
                description="Chat directly with our healthcare experts."
                buttonText="Chat on WhatsApp"
                actionUrl={CONTACT_CONFIG.whatsappUrl}
                isExternal={true}
              />

              <ContactCard
                icon={<Mail className="w-6 h-6" />}
                title="Email Support"
                description={CONTACT_CONFIG.email}
                buttonText="Send Email"
                actionUrl={`mailto:${CONTACT_CONFIG.email}`}
              />

              <ContactCard
                icon={<Calendar className="w-6 h-6" />}
                title="Book Appointment"
                description="Schedule your consultation with our doctors."
                buttonText="Book Consultation"
                actionUrl="#booking-form"
              />

            </div>
          </div>
        </section>

        {/* 3. Main Consultation Booking Form Section */}
        <section id="booking-form-section" className="py-8 sm:py-10 bg-[#F5FBF8]/40 border-t border-border-main/20 relative">
          <div className="custom-container max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Side: Contact Form */}
              <div className="lg:col-span-7 h-full animate-delay-100">
                <ContactForm />
              </div>

              {/* Right Side: Consultation Hours */}
              <div className="lg:col-span-5 h-full animate-delay-200">
                <ConsultationHours />
              </div>

            </div>
          </div>
        </section>

        {/* 4. Our Consultation Network */}
        <ConsultationNetwork />

        {/* 5. Healthcare Services Across India */}
        <ServicesNationwide />

        {/* 6. Frequently Asked Questions */}
        <FAQAccordion />

        {/* 7. Final CTA Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-[#028174] to-[#0FAF9A] text-white py-10 sm:py-12 text-left">
          
          {/* Wave background shapes */}
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:20px_20px]" />

          <div className="custom-container max-w-5xl mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
              
              {/* Left text column */}
              <div className="md:col-span-7 space-y-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-[10px] sm:text-xs font-bold border border-white/10">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  Your Journey to Natural Recovery Starts Here
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-black leading-tight">
                  Begin Your Natural Healing Journey Today
                </h2>
                <p className="text-white/90 text-xs sm:text-sm leading-relaxed max-w-lg">
                  Consult experienced Ayurveda & Homeopathy doctors from the comfort of your home or connect with the nearest available healthcare expert.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                  <a
                    href="#booking-form"
                    className="w-full sm:w-auto inline-flex h-12 px-6 items-center justify-center rounded-xl bg-white text-[#028174] hover:bg-slate-100 font-extrabold text-sm shadow-soft-sm transition-all cursor-pointer"
                  >
                    Book Free Consultation
                  </a>
                  <a
                    href={CONTACT_CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex h-12 px-6 items-center justify-center rounded-xl border border-white/20 hover:border-white/50 hover:bg-white/5 text-white font-extrabold text-sm transition-all cursor-pointer"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* Right phone mockup vector column */}
              <div className="md:col-span-5 flex justify-center">
                <svg
                  viewBox="0 0 200 200"
                  className="w-48 h-48 sm:w-56 sm:h-56 object-contain filter drop-shadow-soft-lg"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="100" cy="100" r="85" fill="#FFFFFF" fillOpacity="0.08" />
                  
                  {/* Phone frame */}
                  <rect x="60" y="20" width="80" height="160" rx="14" fill="#FFFFFF" stroke="#0FAF9A" strokeWidth="2.5" />
                  {/* Screen */}
                  <rect x="65" y="32" width="70" height="136" rx="8" fill="#F8FAFC" />
                  {/* Camera hole */}
                  <circle cx="100" cy="26" r="3" fill="#0FAF9A" />
                  
                  {/* Active Doctor Avatar */}
                  <circle cx="100" cy="65" r="22" fill="#028174" />
                  <path d="M88,80 C88,72 93,68 100,68 C107,68 112,72 112,80 Z" fill="#FFFFFF" opacity="0.9" />
                  <circle cx="100" cy="58" r="7" fill="#FFFFFF" opacity="0.9" />

                  {/* Pulsing connection lines */}
                  <circle cx="100" cy="120" r="16" stroke="#0E9F6E" strokeWidth="2" strokeDasharray="3 3">
                    <animate attributeName="r" values="16;28;16" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.8;0;0.8" dur="3s" repeatCount="indefinite" />
                  </circle>
                  
                  {/* Phone receiver icon */}
                  <circle cx="100" cy="120" r="12" fill="#0E9F6E" />
                  <path d="M96,116 C96,115.5 98,114 100,116 C102,118 104,120 104,122 C104,124 102.5,125 101,124 C99,122 98,121 96,116 Z" fill="#FFFFFF" />
                  
                  {/* Small leaf stars */}
                  <path d="M40,50 Q50,50 50,40 Q50,50 60,50 Q50,50 50,60 Q50,50 40,50 Z" fill="#FF8A65" />
                  <path d="M150,140 Q155,140 155,135 Q155,140 160,140 Q155,140 155,145 Q155,140 150,140 Z" fill="#FF8A65" />
                </svg>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Widgets */}
      <FloatingWidgets />
    </div>
  );
}
