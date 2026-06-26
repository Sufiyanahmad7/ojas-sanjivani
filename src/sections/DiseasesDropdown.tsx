"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface DiseasesDropdownProps {
  onItemClick?: () => void;
}

export function DiseasesDropdown({ onItemClick }: DiseasesDropdownProps) {
  const [activeCategory, setActiveCategory] = useState<string>("Heart Disease");
  const [activeOffsetTop, setActiveOffsetTop] = useState<number>(6);
  const [submenuHeight, setSubmenuHeight] = useState<number>(240);
  const containerRef = useRef<HTMLDivElement>(null);
  const submenuRef = useRef<HTMLDivElement>(null);

  const categoriesData: Record<string, string[]> = {
    "Heart Disease": [
      "Hypertension",
      "High Cholesterol",
      "Angina",
      "Ischemic Heart Disease",
      "Heart Palpitations",
      "Cardiac Wellness",
    ],
    Neurology: [
      "Migraine",
      "Vertigo",
      "Parkinson's Disease",
      "Neuropathy",
      "Epilepsy",
      "Insomnia",
    ],
    "Sexual Problems": [
      "Erectile Dysfunction",
      "Premature Ejaculation",
      "Low Libido",
      "Performance Anxiety",
      "Infertility Support",
    ],
    "Autoimmune Disorders": [
      "Rheumatoid Arthritis",
      "Psoriasis",
      "Lupus (SLE)",
      "Celiac Disease",
      "Multiple Sclerosis",
    ],
    "Liver & Gall": [
      "Fatty Liver",
      "Jaundice",
      "Gallstones",
      "Liver Detoxification",
      "Hepatitis Support",
    ],
    "Psychological Issues": [
      "Anxiety Disorders",
      "Depression",
      "Chronic Stress",
      "Panic Attacks",
      "Mood Swings",
    ],
    "Urinary Disorders": [
      "Kidney Stones",
      "UTI (Tract Infection)",
      "Prostate Enlargement",
      "Dysuria",
      "Incontinence Support",
    ],
    "Oncology Support": [
      "Cancer Recovery Care",
      "Immunity Rebuilding",
      "Strength Restoration",
      "Nausea Relief",
    ],
    ENT: [
      "Sinusitis",
      "Tonsillitis",
      "Tinnitus",
      "Allergic Rhinitis",
      "Ear Infections",
    ],
    "Child Health": [
      "Child Immunity",
      "Loss of Appetite",
      "Hyperactivity",
      "Bedwetting Care",
      "Pediatric Cough & Cold",
    ],
    Gynecology: [
      "PCOS / PCOD",
      "Menstrual Irregularities",
      "Dysmenorrhea",
      "Leukorrhea",
      "Menopause Symptoms",
    ],
    "Respiratory Problems": [
      "Asthma",
      "Bronchitis",
      "Allergic Cough",
      "Dyspnea",
      "Chronic Sinusitis",
    ],
    "Joint & Muscle Pain": [
      "Arthritis",
      "Osteoarthritis",
      "Back Pain",
      "Cervical Pain",
      "Sciatica",
      "Frozen Shoulder",
      "Gout",
    ],
    "Hairfall & Skin": [
      "Alopecia / Hair Fall",
      "Acne & Pimples",
      "Eczema",
      "Psoriasis",
      "Dandruff Relief",
      "Anti-Aging Care",
    ],
    "Endocrine Disorders": [
      "Hypothyroidism",
      "Hyperthyroidism",
      "Diabetes Mellitus",
      "Adrenal Fatigue",
      "Hormonal Imbalance",
    ],
    "Digestive Disorders": [
      "Acidity & Gastritis",
      "IBS (Irritable Bowel)",
      "Constipation",
      "Peptic Ulcer",
      "Fatty Liver",
      "Piles & Fissures",
    ],
    "Common Diseases": [
      "Seasonal Flu",
      "Allergies",
      "Migraine Pain",
      "Cough & Cold",
      "Fever Support",
    ],
  };

  const categories = Object.keys(categoriesData);

  useEffect(() => {
    if (submenuRef.current) {
      setSubmenuHeight(submenuRef.current.offsetHeight);
    }
  }, [activeCategory]);

  const handleMouseEnter = (
    category: string,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setActiveCategory(category);
    const offset = event.currentTarget.offsetTop;
    setActiveOffsetTop(offset);
  };

  // Clamp Y-offset top to prevent right submenu overflowing container boundaries (height 510px)
  const maxTop = 510 - submenuHeight - 6;
  const targetTop = Math.max(6, Math.min(activeOffsetTop, maxTop));

  // Resolve dynamic links for active categories
  const getLinkDetails = (category: string, item: string) => {
    const slugMap: Record<string, Record<string, string>> = {
      "Heart Disease": {
        "Hypertension": "/diseases/hypertension",
        "High Cholesterol": "/diseases/high-cholesterol",
        "Angina": "/diseases/angina",
        "Ischemic Heart Disease": "/diseases/ischemic-heart-disease",
        "Heart Palpitations": "/diseases/heart-palpitations",
        "Cardiac Wellness": "/diseases/cardiac-wellness"
      },
      "Neurology": {
        "Migraine": "/diseases/migraine",
        "Vertigo": "/diseases/vertigo",
        "Parkinson's Disease": "/diseases/parkinsons-disease",
        "Neuropathy": "/diseases/neuropathy",
        "Epilepsy": "/diseases/epilepsy",
        "Insomnia": "/diseases/insomnia"
      },
      "Sexual Problems": {
        "Erectile Dysfunction": "/diseases/erectile-dysfunction",
        "Premature Ejaculation": "/diseases/premature-ejaculation",
        "Low Libido": "/diseases/low-libido",
        "Performance Anxiety": "/diseases/performance-anxiety",
        "Infertility Support": "/diseases/infertility-support"
      },
      "Autoimmune Disorders": {
        "Rheumatoid Arthritis": "/diseases/rheumatoid-arthritis",
        "Psoriasis": "/diseases/psoriasis",
        "Lupus (SLE)": "/diseases/lupus",
        "Celiac Disease": "/diseases/celiac-disease",
        "Multiple Sclerosis": "/diseases/multiple-sclerosis"
      },
      "Liver & Gall": {
        "Fatty Liver": "/diseases/fatty-liver",
        "Jaundice": "/diseases/jaundice",
        "Gallstones": "/diseases/gallstones",
        "Liver Detoxification": "/diseases/liver-detoxification",
        "Hepatitis Support": "/diseases/hepatitis-support"
      },
      "Psychological Issues": {
        "Anxiety Disorders": "/diseases/anxiety-disorders",
        "Depression": "/diseases/depression",
        "Chronic Stress": "/diseases/chronic-stress",
        "Panic Attacks": "/diseases/panic-attacks",
        "Mood Swings": "/diseases/mood-swings"
      },
      "Urinary Disorders": {
        "Kidney Stones": "/diseases/kidney-stones",
        "UTI (Tract Infection)": "/diseases/uti",
        "Prostate Enlargement": "/diseases/prostate-enlargement",
        "Dysuria": "/diseases/dysuria",
        "Incontinence Support": "/diseases/incontinence"
      },
      "Oncology Support": {
        "Cancer Recovery Care": "/diseases/cancer-recovery",
        "Immunity Rebuilding": "/diseases/immunity-rebuilding",
        "Strength Restoration": "/diseases/strength-restoration",
        "Nausea Relief": "/diseases/nausea-relief"
      },
      "ENT": {
        "Sinusitis": "/diseases/sinusitis",
        "Tonsillitis": "/diseases/tonsillitis",
        "Tinnitus": "/diseases/tinnitus",
        "Allergic Rhinitis": "/diseases/allergic-rhinitis",
        "Ear Infections": "/diseases/ear-infections"
      },
      "Child Health": {
        "Child Immunity": "/diseases/child-immunity",
        "Loss of Appetite": "/diseases/loss-of-appetite",
        "Hyperactivity": "/diseases/hyperactivity",
        "Bedwetting Care": "/diseases/bedwetting",
        "Pediatric Cough & Cold": "/diseases/pediatric-cough-cold"
      },
      "Gynecology": {
        "PCOS / PCOD": "/diseases/pcos",
        "Menstrual Irregularities": "/diseases/menstrual-irregularities",
        "Dysmenorrhea": "/diseases/dysmenorrhea",
        "Leukorrhea": "/diseases/leukorrhea",
        "Menopause Symptoms": "/diseases/menopause"
      },
      "Respiratory Problems": {
        "Asthma": "/diseases/asthma",
        "Bronchitis": "/diseases/bronchitis",
        "Allergic Cough": "/diseases/allergic-cough",
        "Dyspnea": "/diseases/dyspnea",
        "Chronic Sinusitis": "/diseases/chronic-sinusitis"
      },
      "Joint & Muscle Pain": {
        "Arthritis": "/diseases/arthritis",
        "Osteoarthritis": "/diseases/osteoarthritis",
        "Back Pain": "/diseases/back-pain",
        "Cervical Pain": "/diseases/cervical-pain",
        "Sciatica": "/diseases/sciatica",
        "Frozen Shoulder": "/diseases/frozen-shoulder",
        "Gout": "/diseases/gout"
      },
      "Hairfall & Skin": {
        "Alopecia / Hair Fall": "/diseases/hair-loss",
        "Acne & Pimples": "/diseases/acne",
        "Eczema": "/diseases/eczema",
        "Psoriasis": "/diseases/psoriasis-skin",
        "Dandruff Relief": "/diseases/dandruff",
        "Anti-Aging Care": "/diseases/anti-aging"
      },
      "Endocrine Disorders": {
        "Hypothyroidism": "/diseases/hypothyroidism",
        "Hyperthyroidism": "/diseases/hyperthyroidism",
        "Diabetes Mellitus": "/diseases/diabetes",
        "Adrenal Fatigue": "/diseases/adrenal-fatigue",
        "Hormonal Imbalance": "/diseases/hormonal-imbalance"
      },
      "Digestive Disorders": {
        "Acidity & Gastritis": "/diseases/acidity-gastritis",
        "IBS (Irritable Bowel)": "/diseases/ibs",
        "Constipation": "/diseases/constipation",
        "Peptic Ulcer": "/diseases/peptic-ulcer",
        "Fatty Liver": "/diseases/fatty-liver",
        "Piles & Fissures": "/diseases/piles-fissures"
      },
      "Common Diseases": {
        "Seasonal Flu": "/diseases/seasonal-flu",
        "Allergies": "/diseases/allergies",
        "Migraine Pain": "/diseases/migraine",
        "Cough & Cold": "/diseases/cough-cold",
        "Fever Support": "/diseases/fever"
      }
    };

    const categorySlugs = slugMap[category];
    if (categorySlugs && categorySlugs[item]) {
      return { href: categorySlugs[item], isExternal: false };
    }
    return { href: "#appointment", isExternal: true };
  };

  return (
    <div
      ref={containerRef}
      className="absolute top-full left-1/2 -translate-x-[40%] mt-2 flex bg-transparent z-[1000] text-left pointer-events-auto"
      style={{
        width: "470px", // 210px Left + 260px Right
      }}
    >
      {/* Outer shadow/border card wrapper that holds both panels */}
      <div className="flex bg-white rounded-xl shadow-lg border border-[#F3F4F6] p-0 gap-0 relative w-full h-[510px] overflow-visible">
        
        {/* Left Level Panel (210px) */}
        <div className="w-[210px] h-full border-r border-[#F3F4F6] relative p-1.5 bg-white rounded-l-xl">
          <ul className="space-y-0 p-0 m-0">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <li key={category} className="list-none">
                  <button
                    type="button"
                    onMouseEnter={(e) => handleMouseEnter(category, e)}
                    className={`w-full h-[30px] flex items-center justify-between px-2.5 py-1.5 text-sm font-medium leading-[1.2] transition-all duration-[180ms] cursor-pointer ${
                      isActive
                        ? "bg-[#028174] text-white rounded-lg"
                        : "text-[#4B5563] hover:text-[#028174] hover:bg-[#F0FDF4] rounded-none"
                    }`}
                  >
                    <span>{category}</span>
                    <ChevronRight
                      className={`w-3.5 h-3.5 shrink-0 ml-1.5 ${
                        isActive ? "text-white" : "text-[#9CA3AF]"
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right Level Panel (260px) - Cascading dynamic translateY tracking */}
        <motion.div
          ref={submenuRef}
          className="w-[260px] bg-white p-4 rounded-xl shadow-md border border-[#F3F4F6] absolute left-[210px] flex flex-col justify-between"
          style={{
            minHeight: "220px",
          }}
          animate={{
            y: targetTop,
          }}
          transition={{
            type: "spring",
            stiffness: 420,
            damping: 32,
          }}
        >
          {/* Submenu items list */}
          <div className="space-y-2.5 pt-0.5">
            <ul className="space-y-2 p-0 m-0">
              {categoriesData[activeCategory]?.map((item) => {
                const { href, isExternal } = getLinkDetails(activeCategory, item);
                return (
                  <li key={item} className="list-none">
                    {isExternal ? (
                      <a
                        href={href}
                        onClick={onItemClick}
                        className="block text-sm leading-[1.25] text-[#4B5563] hover:text-[#028174] hover:bg-[#F0FDF4] px-2.5 py-1.5 rounded-lg transition-all duration-150"
                      >
                        {item}
                      </a>
                    ) : (
                      <Link
                        href={href}
                        onClick={onItemClick}
                        className="block text-sm leading-[1.25] text-[#4B5563] hover:text-[#028174] hover:bg-[#F0FDF4] px-2.5 py-1.5 rounded-lg transition-all duration-150"
                      >
                        {item}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* View All CTA Link at the bottom */}
          <div className="pt-3 border-t border-[#F3F4F6] mt-3">
            <Link
              href={`/diseases/${activeCategory.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-")}`}
              onClick={onItemClick}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#028174] hover:text-[#01695F] transition-colors"
            >
              View All Conditions <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
