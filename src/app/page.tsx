import React from "react";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { TrustIndicators } from "@/sections/TrustIndicators";
import { TreatmentPhilosophy } from "@/sections/TreatmentPhilosophy";
import { ServicesOverview } from "@/sections/ServicesOverview";
import { Diseases } from "@/sections/Diseases";
import { DigitalAssistantCallout } from "@/sections/DigitalAssistantCallout";
import { WhyChooseUs } from "@/sections/WhyChooseUs";
import { DoctorsList } from "@/sections/DoctorsList";
import { PatientStories } from "@/sections/PatientStories";
import { MedicineDelivery } from "@/sections/MedicineDelivery";
import { AppointmentBooking } from "@/components/home/AppointmentBooking";
import { FAQs } from "@/sections/FAQs";
import { Footer } from "@/sections/Footer";
import { FloatingWidgets } from "@/sections/FloatingWidgets";
import { ScrollToTopOnLoad } from "@/components/common/ScrollToTopOnLoad";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-white font-sans antialiased text-text-main relative">
      <ScrollToTopOnLoad />
      {/* Sticky Header (Announcement Bar + Main Navbar) */}
      <Header />

      {/* Main Content Layout with top padding to prevent content from hiding behind the sticky header */}
      <main className="relative" style={{ paddingTop: "130px" }}>
        {/* 3. Hero Banner */}
        <Hero />

        {/* 4. Trust Indicators */}
        <TrustIndicators />

        {/* Our Treatment Philosophy */}
        <TreatmentPhilosophy />

        {/* 5. Ayurveda & Homeopathy Cards (Services Overview) */}
        <ServicesOverview />

        {/* 6. Disease Categories */}
        <Diseases />

        {/* 7. Digital Health Assistant Section */}
        <DigitalAssistantCallout />

        {/* 8. Why Choose Ojas Sanjivani */}
        <WhyChooseUs />

        {/* 9. Doctor Profiles */}
        <DoctorsList />

        {/* 10. Patient Stories */}
        <PatientStories />

        {/* 11. Online Medicine Delivery */}
        <MedicineDelivery />

        {/* 12. Appointment Form */}
        <AppointmentBooking />

        {/* 13. FAQs */}
        <FAQs />
      </main>

      {/* 14. Footer */}
      <Footer />

      {/* 15. Floating Action Widgets (Digital assistant + official WhatsApp) */}
      <FloatingWidgets />
    </div>
  );
}
