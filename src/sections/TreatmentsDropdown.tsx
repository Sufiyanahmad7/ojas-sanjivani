"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";

interface TreatmentsDropdownProps {
  onItemClick?: () => void;
}

interface TreatmentItem {
  title: string;
  description: string;
  image: string;
  href: string;
}

export function TreatmentsDropdown({ onItemClick }: TreatmentsDropdownProps) {
  const [activeTab, setActiveTab] = useState<"ayurveda" | "homeopathy">("ayurveda");

  const ayurvedaTreatments: TreatmentItem[] = [
    {
      title: "Erectile Dysfunction (ED)",
      description: "Natural Ayurvedic treatment for erectile dysfunction and improved sexual performance.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80&fit=crop",
      href: "/diseases/erectile-dysfunction",
    },
    {
      title: "Premature Ejaculation",
      description: "Improve timing, confidence and sexual wellness through personalized Ayurveda.",
      image: "https://images.unsplash.com/photo-1590086782957-93c06ef21604?w=600&q=80&fit=crop",
      href: "/diseases/premature-ejaculation",
    },
    {
      title: "Low Libido",
      description: "Restore vitality, hormonal balance and energy naturally.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80&fit=crop",
      href: "/diseases/low-libido",
    },
    {
      title: "Low Sperm Count",
      description: "Improve sperm count, motility and reproductive health naturally.",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&q=80&fit=crop",
      href: "/diseases/infertility-support",
    },
    {
      title: "Male Infertility",
      description: "Personalized Ayurvedic fertility care for long-term reproductive wellness.",
      image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600&q=80&fit=crop",
      href: "/diseases/infertility-support",
    },
    {
      title: "Penis Size & Performance Concerns",
      description: "Private consultation and holistic treatment plans for men's sexual wellness.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80&fit=crop",
      href: "/diseases/performance-anxiety",
    },
  ];

  const homeopathyTreatments: TreatmentItem[] = [
    {
      title: "Child Health",
      description: "Immunity, growth, digestion and respiratory care.",
      image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=600&q=80&fit=crop",
      href: "/contact#booking-form",
    },
    {
      title: "Women's Health",
      description: "PCOD, hormonal imbalance, menstrual disorders and menopause.",
      image: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=600&q=80&fit=crop",
      href: "/contact#booking-form",
    },
    {
      title: "Skin Disorders",
      description: "Natural treatment for chronic skin conditions like eczema and psoriasis.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80&fit=crop",
      href: "/contact#booking-form",
    },
    {
      title: "Hair Problems",
      description: "Hair fall, dandruff, alopecia and premature greying.",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80&fit=crop",
      href: "/contact#booking-form",
    },
    {
      title: "Respiratory Disorders",
      description: "Asthma, sinusitis, allergies and bronchitis.",
      image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=600&q=80&fit=crop",
      href: "/contact#booking-form",
    },
    {
      title: "Diabetes, Thyroid & Hypertension",
      description: "Long-term homeopathic support for lifestyle disorders.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80&fit=crop",
      href: "/diseases/hypertension",
    },
    {
      title: "Arthritis & Joint Pain",
      description: "Arthritis, spondylitis, back pain and chronic inflammation.",
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&q=80&fit=crop",
      href: "/diseases/arthritis",
    },
    {
      title: "Digestive Disorders",
      description: "Acidity, IBS, constipation and gut health.",
      image: "https://images.unsplash.com/photo-1614113489855-66422ad300a4?w=600&q=80&fit=crop",
      href: "/contact#booking-form",
    },
    {
      title: "Kidney Disorders",
      description: "Kidney stones, urinary disorders and renal health.",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80&fit=crop",
      href: "/diseases/kidney-stones",
    },
    {
      title: "Mental Wellness",
      description: "Stress, depression, anxiety and sleep disorders.",
      image: "https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?w=600&q=80&fit=crop",
      href: "/diseases/insomnia",
    },
    {
      title: "Neurological Disorders",
      description: "Migraine, neuropathy, Parkinson's support and neuralgia.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80&fit=crop",
      href: "/diseases/migraine",
    },
    {
      title: "Viral & Immunity Support",
      description: "Recurring infections and immunity enhancement.",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80&fit=crop",
      href: "/contact#booking-form",
    },
    {
      title: "Acute Conditions",
      description: "Supportive care for fever, vomiting, diarrhoea and seasonal illnesses.",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&q=80&fit=crop",
      href: "/contact#booking-form",
    },
  ];

  const currentTreatments = activeTab === "ayurveda" ? ayurvedaTreatments : homeopathyTreatments;

  return (
    <div className="absolute top-full left-1/2 -translate-x-[42%] lg:-translate-x-[45%] mt-2 w-[1150px] max-w-[92vw] bg-white rounded-3xl p-5 shadow-2xl border border-[#F3F4F6] z-[1000] text-left flex flex-col justify-between">
      
      {/* Tabs Header */}
      <div className="flex justify-center gap-4 mb-5 border-b border-border-main/20 pb-3">
        <button
          onClick={() => setActiveTab("ayurveda")}
          onMouseEnter={() => setActiveTab("ayurveda")}
          className={`px-5 py-2 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 cursor-pointer ${
            activeTab === "ayurveda"
              ? "bg-[#028174] text-white shadow-md shadow-[#028174]/20"
              : "bg-white text-text-main border border-[#028174]/30 hover:border-[#028174]"
          }`}
        >
          🌿 Ayurveda
        </button>
        <button
          onClick={() => setActiveTab("homeopathy")}
          onMouseEnter={() => setActiveTab("homeopathy")}
          className={`px-5 py-2 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 cursor-pointer ${
            activeTab === "homeopathy"
              ? "bg-[#028174] text-white shadow-md shadow-[#028174]/20"
              : "bg-white text-text-main border border-[#028174]/30 hover:border-[#028174]"
          }`}
        >
          🌼 Homeopathy
        </button>
      </div>

      {/* Grid of Treatments */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-[380px] overflow-y-auto pr-1 scroll-smooth custom-scrollbar"
          >
            {currentTreatments.map((treatment, index) => (
              <Link
                key={`${treatment.title}-${index}`}
                href={treatment.href}
                onClick={onItemClick}
                className="group bg-white rounded-xl overflow-hidden border border-[#F3F4F6] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col hover:-translate-y-0.5 cursor-pointer"
              >
                {/* 3:2 aspect-ratio image container */}
                <div className="relative w-full aspect-[3/2] overflow-hidden bg-slate-100 shrink-0">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#028174]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Card body */}
                <div className="p-3 flex flex-col flex-grow text-left">
                  <h5 className="font-heading text-xs font-extrabold text-text-main group-hover:text-[#028174] transition-colors leading-snug flex items-center justify-between gap-1">
                    <span className="line-clamp-1">{treatment.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 text-text-secondary group-hover:text-[#028174]" />
                  </h5>
                  <p className="text-[10px] sm:text-[11px] text-text-secondary mt-1 line-clamp-2 leading-relaxed flex-grow">
                    {treatment.description}
                  </p>
                </div>
              </Link>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom CTA */}
      <div className="border-t border-border-main/20 pt-3 mt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="text-left max-w-2xl">
          <span className="text-[10px] font-bold text-[#028174] uppercase tracking-wider block">Can't find your condition?</span>
          <p className="text-[11px] text-text-secondary mt-0.5 leading-relaxed">
            Our experienced Ayurveda & Homeopathy doctors will guide you to the right treatment after understanding your symptoms.
          </p>
        </div>
        <Link
          href="/contact#booking-form"
          onClick={onItemClick}
          className="inline-flex h-8 px-4 items-center justify-center rounded-lg bg-[#028174] hover:bg-[#01695F] text-white font-extrabold text-xs transition-colors gap-1.5 shadow-soft-sm shrink-0"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          Book Free Consultation
        </Link>
      </div>

    </div>
  );
}
