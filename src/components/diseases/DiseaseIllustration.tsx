"use client";

import React from "react";
import Image from "next/image";

interface DiseaseIllustrationProps {
  imagePath: string;
  alt: string;
  className?: string;
  fill?: boolean;
}

export function DiseaseIllustration({
  imagePath,
  alt,
  className = "",
  fill = true,
}: DiseaseIllustrationProps) {
  const isSvg = imagePath.startsWith("svg:");

  if (!isSvg) {
    if (fill) {
      return (
        <Image
          src={imagePath}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 500px"
          className={`object-contain p-6 mix-blend-multiply ${className}`}
          priority
        />
      );
    } else {
      return (
        <Image
          src={imagePath}
          alt={alt}
          width={500}
          height={375}
          className={`object-contain p-6 mix-blend-multiply ${className}`}
        />
      );
    }
  }

  // Extract the illustration key
  const svgKey = imagePath.replace("svg:", "");

  // Render high-quality, styled vector medical illustrations
  return (
    <div className={`w-full h-full flex items-center justify-center p-4 bg-transparent select-none ${className}`}>
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full max-h-[85%] object-contain"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="primary-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#01695F" />
            <stop offset="100%" stopColor="#028174" />
          </linearGradient>
          <linearGradient id="secondary-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0E9F6E" />
            <stop offset="100%" stopColor="#31C48D" />
          </linearGradient>
          <linearGradient id="accent-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF8A65" />
            <stop offset="100%" stopColor="#FF7043" />
          </linearGradient>
          <radialGradient id="glow-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#028174" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#028174" stopOpacity="0" />
          </radialGradient>
          <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#028174" floodOpacity="0.12" />
          </filter>
        </defs>

        {/* Common Background Glow */}
        <circle cx="100" cy="100" r="85" fill="url(#glow-grad)" />

        {/* 1. Urinary System Illustration */}
        {svgKey === "urinary" && (
          <g filter="url(#shadow)">
            {/* Background Medical Shield */}
            <path
              d="M100,20 C130,20 155,35 155,65 C155,115 110,165 100,175 C90,165 45,115 45,65 C45,35 70,20 100,20 Z"
              fill="#FFFFFF"
              stroke="#028174"
              strokeWidth="2.5"
              opacity="0.95"
            />
            {/* Outline rings */}
            <circle cx="100" cy="95" r="45" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="3 3" />
            
            {/* Kidneys */}
            {/* Left Kidney */}
            <path
              d="M75,70 C60,75 58,95 68,110 C74,118 84,115 84,103 C84,93 82,82 75,70 Z"
              fill="url(#primary-grad)"
              stroke="#01695F"
              strokeWidth="1.5"
            />
            <path
              d="M72,70 C65,71 63,85 70,95"
              stroke="#81C784"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.6"
            />
            {/* Left Adrenal gland */}
            <path d="M72,66 C75,60 82,65 80,70 Z" fill="url(#accent-grad)" />

            {/* Right Kidney */}
            <path
              d="M125,70 C140,75 142,95 132,110 C126,118 116,115 116,103 C116,93 118,82 125,70 Z"
              fill="url(#primary-grad)"
              stroke="#01695F"
              strokeWidth="1.5"
            />
            <path
              d="M128,70 C135,71 137,85 130,95"
              stroke="#81C784"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.6"
            />
            {/* Right Adrenal gland */}
            <path d="M128,66 C125,60 118,65 120,70 Z" fill="url(#accent-grad)" />

            {/* Ureters */}
            <path
              d="M80,103 C83,118 90,128 94,142"
              fill="none"
              stroke="#31C48D"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M120,103 C117,118 110,128 106,142"
              fill="none"
              stroke="#31C48D"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Bladder */}
            <path
              d="M100,136 C110,136 116,142 114,152 C112,159 107,162 100,162 C93,162 88,159 86,152 C84,142 90,136 100,136 Z"
              fill="url(#secondary-grad)"
              stroke="#0E9F6E"
              strokeWidth="1.5"
            />
            <path
              d="M96,142 Q100,140 104,142"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.7"
            />

            {/* Health cross element */}
            <path d="M100,40 L100,52 M94,46 L106,46" stroke="#0E9F6E" strokeWidth="2.5" strokeLinecap="round" />
          </g>
        )}

        {/* 2. Pediatrics / Child Health Illustration */}
        {svgKey === "child-health" && (
          <g filter="url(#shadow)">
            {/* Shield and Circle Frame */}
            <circle cx="100" cy="100" r="68" fill="#FFFFFF" stroke="#31C48D" strokeWidth="2.5" />
            
            {/* Smiling Child Silhouette */}
            {/* Head */}
            <circle cx="100" cy="85" r="26" fill="url(#primary-grad)" />
            {/* Smiling Eyes */}
            <path d="M91,82 Q95,79 97,82" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
            <path d="M103,82 Q105,79 109,82" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
            {/* Smile */}
            <path d="M93,92 Q100,99 107,92" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
            
            {/* Child's Shoulders / Body */}
            <path
              d="M62,142 C62,126 78,118 100,118 C122,118 138,126 138,142 C138,146 135,148 130,148 L70,148 C65,148 62,146 62,142 Z"
              fill="url(#secondary-grad)"
            />

            {/* Dynamic Leaves/Wings of Care */}
            <path
              d="M50,90 Q40,110 55,120 Q65,110 50,90 Z"
              fill="#FF8A65"
              opacity="0.8"
            />
            <path
              d="M150,90 Q160,110 145,120 Q135,110 150,90 Z"
              fill="#FF8A65"
              opacity="0.8"
            />

            {/* Sparkles / Immunity Aura */}
            <path d="M100,42 L100,48 M97,45 L103,45" stroke="#FF7043" strokeWidth="2" strokeLinecap="round" />
            <path d="M60,65 L60,71 M57,68 L63,68" stroke="#0E9F6E" strokeWidth="2" strokeLinecap="round" />
            <path d="M140,65 L140,71 M137,68 L143,68" stroke="#0E9F6E" strokeWidth="2" strokeLinecap="round" />
          </g>
        )}

        {/* 3. Thyroid / Endocrine Illustration */}
        {svgKey === "endocrine" && (
          <g filter="url(#shadow)">
            {/* Background Medical Plate */}
            <rect x="40" y="30" width="120" height="140" rx="20" fill="#FFFFFF" stroke="#028174" strokeWidth="2.5" />
            
            {/* Trachea & Neck Contour */}
            <path
              d="M100,40 L100,150"
              stroke="#E2E8F0"
              strokeWidth="10"
              strokeLinecap="round"
              opacity="0.8"
            />
            {/* Trachea Rings */}
            <line x1="92" y1="50" x2="108" y2="50" stroke="#CBD5E1" strokeWidth="2" />
            <line x1="92" y1="60" x2="108" y2="60" stroke="#CBD5E1" strokeWidth="2" />
            <line x1="92" y1="70" x2="108" y2="70" stroke="#CBD5E1" strokeWidth="2" />
            <line x1="92" y1="120" x2="108" y2="120" stroke="#CBD5E1" strokeWidth="2" />
            <line x1="92" y1="130" x2="108" y2="130" stroke="#CBD5E1" strokeWidth="2" />

            {/* Thyroid Gland (Butterfly Shape) */}
            <path
              d="M74,84 C62,70 56,92 64,110 C70,122 84,118 88,106 C90,102 94,94 100,98 C106,94 110,102 112,106 C116,118 130,122 136,110 C144,92 138,70 126,84 C118,92 114,94 100,92 C86,94 82,92 74,84 Z"
              fill="url(#primary-grad)"
              stroke="#01695F"
              strokeWidth="2"
            />
            {/* Thyroid Isthmus/Details */}
            <path
              d="M86,88 Q100,82 114,88"
              fill="none"
              stroke="#81C784"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.6"
            />
            <circle cx="78" cy="98" r="3" fill="#31C48D" opacity="0.8" />
            <circle cx="122" cy="98" r="3" fill="#31C48D" opacity="0.8" />

            {/* Hormonal Balance Sparkles */}
            <path d="M100,56 Q100,70 100,74" fill="none" stroke="#FF7043" strokeWidth="1.5" strokeDasharray="2 2" />
            <circle cx="100" cy="52" r="3" fill="#FF7043" />
            <circle cx="56" cy="60" r="4" fill="#0E9F6E" opacity="0.15" />
            <circle cx="144" cy="140" r="6" fill="#028174" opacity="0.1" />
          </g>
        )}

        {/* 4. Oncology Support / Immune Cell Illustration */}
        {svgKey === "oncology" && (
          <g filter="url(#shadow)">
            {/* Defensive Shield Shape */}
            <path
              d="M100,22 C138,22 166,38 166,74 C166,128 114,168 100,178 C86,168 34,128 34,74 C34,38 62,22 100,22 Z"
              fill="#FFFFFF"
              stroke="#0E9F6E"
              strokeWidth="2.5"
            />
            <path
              d="M100,28 C132,28 158,42 158,74 C158,122 112,158 100,168 C88,158 42,122 42,74 C42,42 68,28 100,28 Z"
              fill="url(#glow-grad)"
              opacity="0.4"
            />

            {/* Glowing Healthy Cells */}
            {/* Center Main Lymphocyte Cell */}
            <g transform="translate(100, 95)">
              <circle cx="0" cy="0" r="28" fill="url(#primary-grad)" stroke="#01695F" strokeWidth="1.5" />
              <circle cx="-6" cy="-6" r="10" fill="url(#secondary-grad)" opacity="0.8" />
              <circle cx="10" cy="8" r="4" fill="#FFFFFF" opacity="0.4" />
              {/* Cell receptors */}
              <line x1="0" y1="-28" x2="0" y2="-32" stroke="#01695F" strokeWidth="2" strokeLinecap="round" />
              <line x1="0" y1="28" x2="0" y2="32" stroke="#01695F" strokeWidth="2" strokeLinecap="round" />
              <line x1="-28" y1="0" x2="-32" y2="0" stroke="#01695F" strokeWidth="2" strokeLinecap="round" />
              <line x1="28" y1="0" x2="32" y2="0" stroke="#01695F" strokeWidth="2" strokeLinecap="round" />
            </g>

            {/* Secondary Supporting Cells */}
            <circle cx="60" cy="65" r="12" fill="url(#secondary-grad)" stroke="#0E9F6E" strokeWidth="1" />
            <circle cx="140" cy="125" r="14" fill="url(#secondary-grad)" stroke="#0E9F6E" strokeWidth="1" />
            <circle cx="142" cy="60" r="10" fill="url(#primary-grad)" opacity="0.8" />
            <circle cx="58" cy="125" r="8" fill="#FF8A65" opacity="0.75" />

            {/* Cross symbol of health care */}
            <path d="M100,38 L100,48 M95,43 L105,43" stroke="#FF7043" strokeWidth="3.5" strokeLinecap="round" />
          </g>
        )}

        {/* 5. ENT (Ear, Nose, Throat) Illustration */}
        {svgKey === "ent" && (
          <g filter="url(#shadow)">
            {/* Hexagon Frame */}
            <path
              d="M100,22 L164,58 L164,130 L100,166 L36,130 L36,58 Z"
              fill="#FFFFFF"
              stroke="#028174"
              strokeWidth="2.5"
            />
            {/* Diagnostic rings */}
            <circle cx="100" cy="94" r="50" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4" />

            {/* Stylized ENT pathways */}
            {/* Nasal Pathway */}
            <path
              d="M60,84 C60,65 92,60 100,74 C104,80 114,84 125,84"
              fill="none"
              stroke="url(#secondary-grad)"
              strokeWidth="5"
              strokeLinecap="round"
            />
            {/* Ear pathway */}
            <path
              d="M140,84 C128,84 120,94 100,94"
              fill="none"
              stroke="url(#primary-grad)"
              strokeWidth="5"
              strokeLinecap="round"
            />
            {/* Throat pathway */}
            <path
              d="M100,74 C100,94 100,124 100,146"
              fill="none"
              stroke="url(#primary-grad)"
              strokeWidth="6"
              strokeLinecap="round"
            />

            {/* Sinus highlight points */}
            <circle cx="80" cy="66" r="4" fill="#FF8A65" />
            <circle cx="104" cy="60" r="4" fill="#FF8A65" />
            <circle cx="100" cy="115" r="5" fill="#31C48D" />

            {/* Pulse soundwave representing Hearing/Tinnitus */}
            <path
              d="M146,84 C152,80 152,88 158,84"
              fill="none"
              stroke="#028174"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M144,78 C152,72 152,96 160,90"
              fill="none"
              stroke="#31C48D"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.7"
            />
          </g>
        )}
      </svg>
    </div>
  );
}
