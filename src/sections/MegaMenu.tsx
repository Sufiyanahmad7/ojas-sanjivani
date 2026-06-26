"use client";

import React from "react";
import Link from "next/link";
import { Activity, Bone, Heart, Shield } from "lucide-react";

interface MegaMenuProps {
  onItemClick?: () => void;
}

export function MegaMenu({ onItemClick }: MegaMenuProps) {
  const categories = [
    {
      title: "Lifestyle Diseases",
      icon: Activity,
      items: [
        { name: "Diabetes", href: "/diseases/diabetes", isExternal: false },
        { name: "Hypertension", href: "/diseases/hypertension", isExternal: false },
        { name: "Obesity", href: "#appointment", isExternal: true },
        { name: "Thyroid", href: "#appointment", isExternal: true },
        { name: "Fatty Liver", href: "#appointment", isExternal: true },
      ],
    },
    {
      title: "Digestive Disorders",
      icon: Shield,
      items: [
        { name: "Acidity", href: "#appointment", isExternal: true },
        { name: "IBS", href: "#appointment", isExternal: true },
        { name: "Constipation", href: "#appointment", isExternal: true },
        { name: "Ulcer", href: "#appointment", isExternal: true },
        { name: "Piles", href: "/diseases/piles", isExternal: false },
      ],
    },
    {
      title: "Joint Care",
      icon: Bone,
      items: [
        { name: "Arthritis", href: "/diseases/arthritis", isExternal: false },
        { name: "Back Pain", href: "#appointment", isExternal: true },
        { name: "Sciatica", href: "#appointment", isExternal: true },
        { name: "Osteoporosis", href: "#appointment", isExternal: true },
        { name: "Gout", href: "#appointment", isExternal: true },
      ],
    },
    {
      title: "Women & Child",
      icon: Heart,
      items: [
        { name: "PCOS", href: "#appointment", isExternal: true },
        { name: "Infertility", href: "#appointment", isExternal: true },
        { name: "Pregnancy Care", href: "#appointment", isExternal: true },
        { name: "Child Immunity", href: "#appointment", isExternal: true },
        { name: "Skin Problems", href: "#appointment", isExternal: true },
      ],
    },
  ];

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[950px] bg-white rounded-2xl p-10 shadow-xl border border-[#F3F4F6] grid grid-cols-4 gap-8 z-50 text-left">
      {categories.map((category) => {
        const IconComponent = category.icon;
        return (
          <div key={category.title} className="space-y-4">
            {/* Category Header */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#E6F3F2] flex items-center justify-center text-[#028174]">
                <IconComponent className="w-4 h-4" />
              </div>
              <h4 className="font-heading text-sm font-extrabold text-[#1F2937]">
                {category.title}
              </h4>
            </div>

            {/* Items List */}
            <ul className="space-y-1.5 pl-0">
              {category.items.map((item) => (
                <li key={item.name}>
                  {item.isExternal ? (
                    <a
                      href={item.href}
                      onClick={onItemClick}
                      className="block text-xs font-medium text-[#4B5563] hover:text-[#028174] hover:bg-[#F4FAF9] px-3 py-2 rounded-lg transition-all duration-200"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={onItemClick}
                      className="block text-xs font-medium text-[#4B5563] hover:text-[#028174] hover:bg-[#F4FAF9] px-3 py-2 rounded-lg transition-all duration-200"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
