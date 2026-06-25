"use client";

import React, { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function SearchAutocomplete() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const suggestions = [
    { name: "Diabetes Care", category: "Lifestyle" },
    { name: "IBS & Gut Health", category: "Digestive" },
    { name: "Acidity Treatment", category: "Digestive" },
    { name: "Arthritis Relief", category: "Joint Care" },
    { name: "PCOS Treatment", category: "Women's Health" },
    { name: "Thyroid Management", category: "Lifestyle" },
    { name: "Hair & Skin Care", category: "Wellness" },
    { name: "Hypertension Control", category: "Lifestyle" },
  ];

  const filtered = query
    ? suggestions.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      )
    : suggestions;

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative w-[260px]">
      {/* Search Input Container */}
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-[#9CA3AF] pointer-events-none" />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="Search disease or treatment..."
          className="w-full h-11 pl-10 pr-9 bg-white border border-[#E5E7EB] rounded-full text-xs font-medium text-[#1F2937] placeholder-[#9CA3AF] transition-all duration-300 focus:outline-none focus:border-[#028174] focus:ring-4 focus:ring-[#028174]/10"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full text-[#9CA3AF] hover:text-[#1F2937] hover:bg-[#F3F4F6] transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Autocomplete Suggestions Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-[#F3F4F6] max-h-64 overflow-y-auto z-50 p-2"
          >
            {filtered.length > 0 ? (
              <ul className="space-y-0.5 p-0 m-0">
                {filtered.map((item) => (
                  <li key={item.name}>
                    <a
                      href="#appointment"
                      onClick={() => {
                        setQuery(item.name);
                        setIsOpen(false);
                      }}
                      className="flex items-center justify-between px-3.5 py-2.5 rounded-lg hover:bg-[#F4FAF9] transition-colors text-left"
                    >
                      <span className="text-xs font-semibold text-[#1F2937] hover:text-[#028174]">
                        {item.name}
                      </span>
                      <span className="text-[9px] font-bold text-[#028174] bg-[#E6F3F2] px-2 py-0.5 rounded-full uppercase tracking-wider">
                        {item.category}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="py-6 text-center text-[11px] text-[#9CA3AF] font-medium">
                No matching conditions found.
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
