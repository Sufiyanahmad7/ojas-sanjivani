"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { SearchAutocomplete } from "./SearchAutocomplete";
import { DiseasesDropdown } from "./DiseasesDropdown";
import { TreatmentsDropdown } from "./TreatmentsDropdown";
import { Menu, X, ArrowRight, ChevronDown, MessageCircle } from "lucide-react";

interface NavbarProps {
  scrolled?: boolean;
}

export function Navbar({ scrolled = false }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [diseasesOpen, setDiseasesOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const [mobileDiseasesAccordion, setMobileDiseasesAccordion] = useState(false);
  const [mobileTreatmentsAccordion, setMobileTreatmentsAccordion] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "#why-choose-us" },
    { label: "Diseases", href: "#diseases", dropdown: "diseases" },
    { label: "Treatments", href: "#services", dropdown: "treatments" },
    { label: "Medicine", href: "#pharmacy" },
    { label: "Blog", href: "#stories" },
    { label: "Contact", href: "#appointment" },
  ];

  const mobileDiseases = [
    { name: "Diabetes", href: "#appointment" },
    { name: "Hypertension", href: "#appointment" },
    { name: "Obesity", href: "#appointment" },
    { name: "Thyroid", href: "#appointment" },
    { name: "Acidity", href: "#appointment" },
    { name: "IBS", href: "#appointment" },
    { name: "Arthritis", href: "#appointment" },
    { name: "PCOS", href: "#appointment" },
    { name: "Skin Problems", href: "#appointment" },
  ];

  const mobileTreatments = [
    "Panchakarma",
    "Detox Therapy",
    "Rasayana Therapy",
    "Weight Management",
    "Constitutional Treatment",
    "Acute Care",
    "Chronic Disease Management",
    "Allergy Treatment",
  ];

  return (
    <>
      <nav
        className={`w-full bg-white transition-all duration-300 ${
          scrolled
            ? "h-[72px] border-b border-[#F3F4F6] shadow-md/10"
            : "h-[90px] border-b border-[#F3F4F6]/50"
        }`}
      >
        <div className="max-w-[1400px] h-full mx-auto px-10 flex items-center justify-between relative">
          
          {/* Logo Section */}
          <div className="flex items-center">
            <a href="/" className="focus:outline-none block">
              <motion.div
                animate={{ scale: scrolled ? 0.92 : 1 }}
                transition={{ duration: 0.3 }}
                className="w-[210px] md:w-[230px] flex items-center origin-left"
              >
                <Logo variant="horizontal" iconSize={scrolled ? 34 : 38} />
              </motion.div>
            </a>
          </div>

          {/* Center Navigation Links (Hidden on Mobile/Tablet) */}
          <div className="hidden lg:flex items-center gap-[38px] pl-[70px] flex-1 justify-center">
            {navItems.map((item) => {
              if (item.dropdown === "diseases") {
                return (
                  <div
                    key={item.label}
                    className="relative py-2 cursor-pointer group"
                    onMouseEnter={() => setDiseasesOpen(true)}
                    onMouseLeave={() => setDiseasesOpen(false)}
                  >
                    <span className="flex items-center gap-1.5 text-base font-medium text-[#374151] hover:text-[#028174] transition-colors">
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${diseasesOpen ? "rotate-180 text-[#028174]" : ""}`} />
                    </span>
                    {/* Small permanent underline effect on hover */}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#028174] transition-all duration-300 group-hover:w-full" />

                    {/* Diseases Dropdown (Cascading Multi-level) */}
                    <AnimatePresence>
                      {diseasesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 15, scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-1/2 -translate-x-[40%] mt-1"
                        >
                          <DiseasesDropdown onItemClick={() => setDiseasesOpen(false)} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              if (item.dropdown === "treatments") {
                return (
                  <div
                    key={item.label}
                    className="relative py-2 cursor-pointer group"
                    onMouseEnter={() => setTreatmentsOpen(true)}
                    onMouseLeave={() => setTreatmentsOpen(false)}
                  >
                    <span className="flex items-center gap-1.5 text-base font-medium text-[#374151] hover:text-[#028174] transition-colors">
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${treatmentsOpen ? "rotate-180 text-[#028174]" : ""}`} />
                    </span>
                    {/* Small permanent underline effect on hover */}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#028174] transition-all duration-300 group-hover:w-full" />

                    {/* Treatments Dropdown (Two-column layout) */}
                    <AnimatePresence>
                      {treatmentsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 15, scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-1/2 -translate-x-[40%] mt-1"
                        >
                          <TreatmentsDropdown onItemClick={() => setTreatmentsOpen(false)} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative text-base font-medium text-[#374151] hover:text-[#028174] transition-colors py-2 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#028174] transition-all duration-300 group-hover:w-full" />
                </a>
              );
            })}
          </div>

          {/* Right Section: Search & CTA */}
          <div className="hidden lg:flex items-center gap-5 ml-4">
            <SearchAutocomplete />
            <Button
              variant="primary"
              className="h-12 px-7 rounded-full bg-[#028174] hover:bg-[#01695F] text-white font-semibold transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 flex items-center gap-2 text-xs"
              href="#appointment"
            >
              Book Free Consultation <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2.5 rounded-xl text-[#374151] hover:bg-[#F4FAF9] hover:text-[#028174] transition-all cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer (Fullscreen Overlay) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1050] bg-black/40 backdrop-blur-sm lg:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white p-6 shadow-2xl flex flex-col justify-between overflow-y-auto"
            >
              <div>
                {/* Mobile Drawer Header */}
                <div className="flex items-center justify-between border-b border-[#F3F4F6] pb-5">
                  <Logo variant="horizontal" iconSize={32} />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-xl text-[#374151] hover:bg-[#F4FAF9] hover:text-[#028174] transition-all cursor-pointer"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Mobile Search Bar inside Drawer */}
                <div className="my-6 px-1">
                  <SearchAutocomplete />
                </div>

                {/* Mobile Navigation Links */}
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => {
                    if (item.dropdown === "diseases") {
                      return (
                        <div key={item.label} className="border-b border-[#F3F4F6] pb-3">
                          <button
                            onClick={() => setMobileDiseasesAccordion(!mobileDiseasesAccordion)}
                            className="w-full flex items-center justify-between text-lg font-semibold text-[#1F2937] hover:text-[#028174] transition-colors py-2 cursor-pointer"
                          >
                            <span>{item.label}</span>
                            <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileDiseasesAccordion ? "rotate-180 text-[#028174]" : ""}`} />
                          </button>
                          
                          <AnimatePresence>
                            {mobileDiseasesAccordion && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="overflow-hidden pl-4 pr-2 mt-2 grid grid-cols-2 gap-2 bg-[#F8FFF8]/60 p-3.5 rounded-xl border border-[#E6F3F2]"
                              >
                                {mobileDiseases.map((disease) => (
                                  <a
                                    key={disease.name}
                                    href={disease.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-xs font-semibold text-[#4B5563] hover:text-[#028174] py-1.5 block"
                                  >
                                    • {disease.name}
                                  </a>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }

                    if (item.dropdown === "treatments") {
                      return (
                        <div key={item.label} className="border-b border-[#F3F4F6] pb-3">
                          <button
                            onClick={() => setMobileTreatmentsAccordion(!mobileTreatmentsAccordion)}
                            className="w-full flex items-center justify-between text-lg font-semibold text-[#1F2937] hover:text-[#028174] transition-colors py-2 cursor-pointer"
                          >
                            <span>{item.label}</span>
                            <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${mobileTreatmentsAccordion ? "rotate-180 text-[#028174]" : ""}`} />
                          </button>
                          
                          <AnimatePresence>
                            {mobileTreatmentsAccordion && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="overflow-hidden pl-4 pr-2 mt-2 grid grid-cols-2 gap-2 bg-[#F8FFF8]/60 p-3.5 rounded-xl border border-[#E6F3F2]"
                              >
                                {mobileTreatments.map((treatment) => (
                                  <a
                                    key={treatment}
                                    href="#appointment"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-xs font-semibold text-[#4B5563] hover:text-[#028174] py-1.5 block"
                                  >
                                    • {treatment}
                                  </a>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between text-lg font-semibold text-[#1F2937] hover:text-[#028174] transition-colors py-2 border-b border-[#F3F4F6] pb-3"
                      >
                        {item.label}
                      </a>
                    );
                  })}
                </nav>
              </div>

              {/* Mobile Drawer Bottom Action CTA */}
              <div className="pt-6 border-t border-[#F3F4F6] mt-8">
                <Button
                  variant="primary"
                  className="w-full h-12 justify-center rounded-full bg-[#028174] text-white font-bold text-sm shadow-md"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    window.location.href = "#appointment";
                  }}
                >
                  Book Free Consultation
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
