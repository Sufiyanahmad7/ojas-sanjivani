"use client";

import React from "react";
import { motion } from "framer-motion";

export function ContactHeroIllustration() {
  return (
    <div className="relative w-full aspect-[4/3] flex items-center justify-center p-4">
      {/* Decorative background aura */}
      <div className="absolute inset-0 bg-radial from-[#028174]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <svg
        viewBox="0 0 500 400"
        className="w-full h-full max-h-[380px] object-contain drop-shadow-soft-lg select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="illustration-primary" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#01695F" />
            <stop offset="100%" stopColor="#028174" />
          </linearGradient>
          <linearGradient id="illustration-secondary" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0FAF9A" />
            <stop offset="100%" stopColor="#31C48D" />
          </linearGradient>
          <linearGradient id="illustration-accent" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF8A65" />
            <stop offset="100%" stopColor="#FF7043" />
          </linearGradient>
          <linearGradient id="illustration-glass" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Ambient background medical rings */}
        <circle cx="250" cy="200" r="140" stroke="#028174" strokeWidth="1" strokeDasharray="5 5" opacity="0.15" />
        <circle cx="250" cy="200" r="180" stroke="#0FAF9A" strokeWidth="1.5" strokeDasharray="3 9" opacity="0.1" />

        {/* Right Side Leaf (Ayurveda theme) */}
        <motion.path
          initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
          animate={{ opacity: 0.15, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          d="M380,80 C430,80 450,120 430,170 C410,210 370,230 350,220 C330,210 320,160 340,120 C360,80 380,80 380,80 Z"
          fill="url(#illustration-secondary)"
        />
        {/* Left Side Leaf */}
        <motion.path
          initial={{ opacity: 0, scale: 0.8, rotate: 15 }}
          animate={{ opacity: 0.12, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          d="M120,280 C80,260 70,210 90,170 C110,130 140,110 160,130 C180,150 180,200 160,240 C140,280 120,280 120,280 Z"
          fill="url(#illustration-primary)"
        />

        {/* Left side medical cross grid (spark) */}
        <g opacity="0.25">
          <line x1="80" y1="90" x2="80" y2="110" stroke="#028174" strokeWidth="3" strokeLinecap="round" />
          <line x1="70" y1="100" x2="90" y2="100" stroke="#028174" strokeWidth="3" strokeLinecap="round" />
        </g>
        <g opacity="0.3">
          <line x1="410" y1="300" x2="410" y2="320" stroke="#0FAF9A" strokeWidth="3" strokeLinecap="round" />
          <line x1="400" y1="310" x2="420" y2="310" stroke="#0FAF9A" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* Doctor Silhouette (Center Left) */}
        <motion.g
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Main Body */}
          <path
            d="M130,340 C130,290 160,270 200,270 C240,270 270,290 270,340 Z"
            fill="url(#illustration-primary)"
          />
          {/* Collar/Stethoscope details */}
          <path d="M185,270 V290 C185,300 215,300 215,290 V270" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="200" cy="305" r="7" fill="#FF8A65" />
          
          {/* Doctor Head */}
          <circle cx="200" cy="220" r="35" fill="url(#illustration-primary)" />
          
          {/* Doctor Hair / Glasses Silhouette */}
          <path d="M175,205 C175,190 185,185 200,185 C215,185 225,190 225,205 C225,210 220,215 200,215 C180,215 175,210 175,205 Z" fill="#01695F" />
        </motion.g>

        {/* Patient/Consultation Silhouette (Center Right) */}
        <motion.g
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          {/* Main Body */}
          <path
            d="M250,340 C250,300 275,285 310,285 C345,285 370,300 370,340 Z"
            fill="url(#illustration-secondary)"
            opacity="0.85"
          />
          {/* Patient Head */}
          <circle cx="310" cy="235" r="30" fill="url(#illustration-secondary)" opacity="0.85" />
        </motion.g>

        {/* Chat / Phone Bubble connecting them (Consultation Theme) */}
        <motion.g
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          {/* Dialogue Cloud */}
          <path
            d="M210,120 C210,95 240,80 275,80 C310,80 340,95 340,120 C340,138 322,150 300,156 L295,175 L280,158 C278,158 277,158 275,158 C240,158 210,142 210,120 Z"
            fill="url(#illustration-glass)"
            stroke="#028174"
            strokeWidth="2"
          />
          
          {/* Heart Beat Pulse inside chat bubble */}
          <path
            d="M245,120 H260 L266,105 L274,135 L280,115 L284,120 H305"
            stroke="#FF7043"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>

        {/* Floating Medicine Bottle (Homeopathy Theme) */}
        <motion.g
          initial={{ opacity: 0, x: 20, rotate: 10 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          transform="translate(390, 180)"
        >
          {/* Glass Bottle Body */}
          <rect x="0" y="20" width="35" height="50" rx="8" fill="url(#illustration-glass)" stroke="#0FAF9A" strokeWidth="2.5" />
          {/* Medicine Liquid */}
          <rect x="3" y="40" width="29" height="27" rx="4" fill="url(#illustration-secondary)" opacity="0.4" />
          {/* Bottle Neck */}
          <rect x="10" y="8" width="15" height="12" fill="none" stroke="#0FAF9A" strokeWidth="2" />
          {/* Cork cap */}
          <rect x="7" y="0" width="21" height="8" rx="2" fill="url(#illustration-accent)" />
          {/* Small pills */}
          <circle cx="8" cy="80" r="3" fill="#FFFFFF" stroke="#028174" strokeWidth="1" />
          <circle cx="20" cy="84" r="3" fill="#FFFFFF" stroke="#028174" strokeWidth="1" />
          <circle cx="32" cy="78" r="3" fill="#FFFFFF" stroke="#028174" strokeWidth="1" />
        </motion.g>

        {/* Floating Ayurveda Herbs / Mortar (Ayurveda Theme) */}
        <motion.g
          initial={{ opacity: 0, x: -20, rotate: -10 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          transform="translate(75, 190)"
        >
          {/* Mortar */}
          <path
            d="M10,25 C10,48 22,60 45,60 C68,60 80,48 80,25 H10 Z"
            fill="url(#illustration-glass)"
            stroke="#028174"
            strokeWidth="2.5"
          />
          {/* Pestle */}
          <line x1="30" y1="5" x2="60" y2="40" stroke="#028174" strokeWidth="8" strokeLinecap="round" />
          {/* Healing Leaves */}
          <path d="M5,10 C-5,-2 10,-8 15,2 C20,12 15,18 5,10 Z" fill="#31C48D" />
          <path d="M85,15 C95,5 82,-3 75,5 C68,13 75,21 85,15 Z" fill="#31C48D" />
        </motion.g>

        {/* Small floating sparkles/stars */}
        <circle cx="120" cy="80" r="2.5" fill="#FF8A65" />
        <circle cx="380" cy="60" r="3.5" fill="#31C48D" />
        <circle cx="430" cy="140" r="2" fill="#FF8A65" />
        <circle cx="90" cy="300" r="3" fill="#028174" />
      </svg>
    </div>
  );
}
