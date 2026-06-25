"use client";

import React from "react";

export function AnnouncementBar() {
  const announcementText =
    "Consult Certified Ayurveda & Homeopathy Experts from the Comfort of Your Home • AI Health Assistant • Online Consultations • Authentic Medicines • Wellness Programs • Book Your Appointment Today • Call +91 97665 48692";

  return (
    <div
      role="region"
      aria-label="Latest Healthcare Announcements"
      className="w-full h-9 md:h-10 text-white flex items-center justify-between px-6 select-none z-50 relative overflow-hidden font-sans border-b border-white/10"
      style={{
        background: "linear-gradient(90deg, #01695F 0%, #028174 50%, #01695F 100%)",
      }}
    >
      {/* Left Side: Scrolling Announcement Container */}
      <div className="flex-1 overflow-hidden h-full flex items-center relative mr-5">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16">
          {/* First loop of text */}
          <span className="text-xs md:text-sm font-medium tracking-wide">
            {announcementText}
          </span>
          {/* Second loop of text for seamless looping */}
          <span className="text-xs md:text-sm font-medium tracking-wide" aria-hidden="true">
            {announcementText}
          </span>
        </div>
      </div>

      {/* Right Side: Fixed Action CTAs (Desktop / Tablet / Mobile) */}
      <div className="flex items-center gap-5 shrink-0 h-full text-xs md:text-sm">
        {/* Book Appointment CTA Button (Hidden on Mobile) */}
        <a
          href="#appointment"
          className="hidden sm:inline-flex items-center justify-center font-semibold rounded-full bg-white text-[#028174] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap text-xs py-1 px-4 md:py-1.5 md:px-5"
          style={{
            lineHeight: "1",
          }}
        >
          Book Appointment <span className="ml-1.5">→</span>
        </a>

        {/* Divider (Hidden on Mobile) */}
        <span className="hidden sm:inline-block w-px h-3.5 bg-white/25" />

        {/* Phone Link (Responsive: Number on Desktop, "Call Now" on Mobile) */}
        <a
          href="tel:+919766548692"
          className="font-semibold text-white hover:text-[#CFF7F3] transition-colors duration-200 flex items-center gap-1.5 whitespace-nowrap"
        >
          {/* Desktop/Tablet view */}
          <span className="hidden md:inline">📞 +91 97665 48692</span>
          {/* Mobile/Tablet small view */}
          <span className="md:hidden">📞 Call Now</span>
        </a>
      </div>
    </div>
  );
}
