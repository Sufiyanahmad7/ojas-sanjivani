"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import * as Icons from "@/components/ui/Icons";
import * as Illustrations from "@/components/ui/Illustrations";
import { 
  Copy, 
  Check, 
  Palette, 
  Type, 
  Grid, 
  Sparkles, 
  Code,
  Heart
} from "lucide-react";

export default function DesignSystemPage() {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [activeBg, setActiveBg] = useState<"white" | "mint" | "light-green" | "dark-green">("white");

  const bgClasses = {
    white: "bg-bg-white border border-border-main/40",
    mint: "bg-mint border border-primary/5",
    "light-green": "bg-light-green/45 border border-primary/10",
    "dark-green": "bg-primary text-bg-white border border-primary-hover",
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(null), 2000);
  };

  // Raw SVG codes for copying
  const svgCodes = {
    iconOnly: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="44" stroke="#2E7D32" stroke-width="3.5" stroke-linecap="round" stroke-dasharray="210 40" />
  <circle cx="50" cy="50" r="38" stroke="#43A047" stroke-width="1.5" stroke-opacity="0.25" stroke-dasharray="5 5" />
  <path d="M20 32 C 32 18, 68 18, 80 32" stroke="#43A047" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="4 6" />
  <path d="M50 14 C 68 30, 68 62, 50 86 C 32 62, 32 30, 50 14 Z" fill="#43A047" />
  <path d="M46 32 H54 V44 H66 V52 H54 V64 H46 V52 H34 V44 H46 Z" fill="#FFFFFF" />
  <circle cx="50" cy="38.5" r="3.5" fill="#2E7D32" />
  <path d="M50 43.5 C44 43.5, 39 41.5, 36 38.5 C41 42.5, 46 45, 50 45 C54 45, 59 42.5, 64 38.5 C61 41.5, 56 43.5, 50 43.5 Z" fill="#2E7D32" />
  <path d="M48.5 43.5 V62 H51.5 V43.5 Z" fill="#2E7D32" />
  <path d="M42 62 C 46 59.5, 54 59.5, 58 62" stroke="#2E7D32" stroke-width="2.5" stroke-linecap="round" />
</svg>`,
    horizontal: `<svg viewBox="0 0 320 80" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(10, 10) scale(0.6)">
    <circle cx="50" cy="50" r="44" stroke="#2E7D32" stroke-width="3.5" stroke-linecap="round" stroke-dasharray="210 40" />
    <circle cx="50" cy="50" r="38" stroke="#43A047" stroke-width="1.5" stroke-opacity="0.25" stroke-dasharray="5 5" />
    <path d="M20 32 C 32 18, 68 18, 80 32" stroke="#43A047" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="4 6" />
    <path d="M50 14 C 68 30, 68 62, 50 86 C 32 62, 32 30, 50 14 Z" fill="#43A047" />
    <path d="M46 32 H54 V44 H66 V52 H54 V64 H46 V52 H34 V44 H46 Z" fill="#FFFFFF" />
    <circle cx="50" cy="38.5" r="3.5" fill="#2E7D32" />
    <path d="M50 43.5 C44 43.5, 39 41.5, 36 38.5 C41 42.5, 46 45, 50 45 C54 45, 59 42.5, 64 38.5 C61 41.5, 56 43.5, 50 43.5 Z" fill="#2E7D32" />
    <path d="M48.5 43.5 V62 H51.5 V43.5 Z" fill="#2E7D32" />
    <path d="M42 62 C 46 59.5, 54 59.5, 58 62" stroke="#2E7D32" stroke-width="2.5" stroke-linecap="round" />
  </g>
  <text x="82" y="40" font-family="Poppins, sans-serif" font-size="24" font-weight="800" fill="#2E7D32" letter-spacing="0.05em">OJAS</text>
  <text x="146" y="40" font-family="Poppins, sans-serif" font-size="24" font-weight="300" fill="#43A047" letter-spacing="0.05em">SANJIVANI</text>
  <text x="83" y="56" font-family="Inter, sans-serif" font-size="8" font-weight="700" fill="#6B7280" letter-spacing="0.25em">NATURAL HEALTHCARE</text>
</svg>`,
    vertical: `<svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(60, 10) scale(0.8)">
    <circle cx="50" cy="50" r="44" stroke="#2E7D32" stroke-width="3.5" stroke-linecap="round" stroke-dasharray="210 40" />
    <circle cx="50" cy="50" r="38" stroke="#43A047" stroke-width="1.5" stroke-opacity="0.25" stroke-dasharray="5 5" />
    <path d="M20 32 C 32 18, 68 18, 80 32" stroke="#43A047" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="4 6" />
    <path d="M50 14 C 68 30, 68 62, 50 86 C 32 62, 32 30, 50 14 Z" fill="#43A047" />
    <path d="M46 32 H54 V44 H66 V52 H54 V64 H46 V52 H34 V44 H46 Z" fill="#FFFFFF" />
    <circle cx="50" cy="38.5" r="3.5" fill="#2E7D32" />
    <path d="M50 43.5 C44 43.5, 39 41.5, 36 38.5 C41 42.5, 46 45, 50 45 C54 45, 59 42.5, 64 38.5 C61 41.5, 56 43.5, 50 43.5 Z" fill="#2E7D32" />
    <path d="M48.5 43.5 V62 H51.5 V43.5 Z" fill="#2E7D32" />
    <path d="M42 62 C 46 59.5, 54 59.5, 58 62" stroke="#2E7D32" stroke-width="2.5" stroke-linecap="round" />
  </g>
  <text x="100" y="110" font-family="Poppins, sans-serif" font-size="18" font-weight="800" fill="#2E7D32" text-anchor="middle" letter-spacing="0.08em">OJAS</text>
  <text x="100" y="130" font-family="Poppins, sans-serif" font-size="16" font-weight="300" fill="#43A047" text-anchor="middle" letter-spacing="0.08em">SANJIVANI</text>
  <text x="100" y="145" font-family="Inter, sans-serif" font-size="7" font-weight="700" fill="#6B7280" text-anchor="middle" letter-spacing="0.2em">NATURAL HEALTHCARE</text>
</svg>`,
    favicon: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="44" stroke="#2E7D32" stroke-width="4.5" stroke-linecap="round" stroke-dasharray="210 40" />
  <path d="M50 14 C 68 30, 68 62, 50 86 C 32 62, 32 30, 50 14 Z" fill="#43A047" />
  <path d="M46 32 H54 V44 H66 V52 H54 V64 H46 V52 H34 V44 H46 Z" fill="#FFFFFF" />
  <circle cx="50" cy="38.5" r="4" fill="#2E7D32" />
  <path d="M50 43.5 C44 43.5, 39 41.5, 36 38.5 C41 42.5, 46 45, 50 45 C54 45, 59 42.5, 64 38.5 C61 41.5, 56 43.5, 50 43.5 Z" fill="#2E7D32" />
  <path d="M48.5 43.5 V62 H51.5 V43.5 Z" fill="#2E7D32" />
</svg>`
  };

  const paletteColors = [
    { name: "Primary Green", hex: "#2E7D32", desc: "15% Primary Action Color (Vitality, Healing)", text: "text-[#FFFFFF]" },
    { name: "Secondary Green", hex: "#43A047", desc: "Secondary Highlight & Hover (Freshness, Nature)", text: "text-[#FFFFFF]" },
    { name: "Light Green", hex: "#E8F5E9", desc: "Accent backgrounds & card bases", text: "text-primary" },
    { name: "Mint White", hex: "#F8FFF8", desc: "Clean body contrast, secondary background", text: "text-primary" },
    { name: "Base White", hex: "#FFFFFF", desc: "80% Core Layout Color (Cleanliness, Spaces)", text: "text-text-main" },
    { name: "Text Main", hex: "#1F2937", desc: "Main typography contrast", text: "text-bg-white" },
    { name: "Text Secondary", hex: "#6B7280", desc: "Body copies and structural labels", text: "text-bg-white" },
    { name: "Border Main", hex: "#E5E7EB", desc: "Soft dividing lines and card outlines", text: "text-text-main" }
  ];

  const accentColors = [
    { name: "Ayurvedic Amber", hex: "#D97706", usage: "Herb details & Ayurvedic badges" },
    { name: "Clinical Emerald", hex: "#059669", usage: "Homeopathic drops & doctor statuses" },
    { name: "Pharmacy Rose", hex: "#E11D48", usage: "Delivery indicators & emergency notices" },
    { name: "Digital sky blue", hex: "#0EA5E9", usage: "Digital diagnostic assistant triggers" }
  ];

  const brandIcons = [
    { Component: Icons.AyurvedaIcon, name: "Ayurveda" },
    { Component: Icons.HomeopathyIcon, name: "Homeopathy" },
    { Component: Icons.DigitalDoctorIcon, name: "Digital Doctor" },
    { Component: Icons.OnlineConsultationIcon, name: "Online Consultation" },
    { Component: Icons.MedicineDeliveryIcon, name: "Medicine Delivery" },
    { Component: Icons.HeartIcon, name: "Heart" },
    { Component: Icons.DiabetesIcon, name: "Diabetes" },
    { Component: Icons.ThyroidIcon, name: "Thyroid" },
    { Component: Icons.LiverIcon, name: "Liver" },
    { Component: Icons.KidneyIcon, name: "Kidney" },
    { Component: Icons.HairIcon, name: "Hair" },
    { Component: Icons.SkinIcon, name: "Skin" },
    { Component: Icons.WomenIcon, name: "Women's Health" },
    { Component: Icons.ChildIcon, name: "Child Care" },
    { Component: Icons.RespiratoryIcon, name: "Respiratory" },
    { Component: Icons.JointPainIcon, name: "Joint Pain" },
    { Component: Icons.DigestionIcon, name: "Digestion" },
    { Component: Icons.SexualWellnessIcon, name: "Sexual Wellness" },
    { Component: Icons.AppointmentIcon, name: "Appointment" },
    { Component: Icons.VideoCallIcon, name: "Video Call" }
  ];

  const brandIllustrations = [
    { Component: Illustrations.DigitalHealthAssistant, name: "Digital Health Assistant" },
    { Component: Illustrations.OnlineDoctorConsultation, name: "Online Doctor Consultation" },
    { Component: Illustrations.Ayurveda, name: "Ayurveda" },
    { Component: Illustrations.Homeopathy, name: "Homeopathy" },
    { Component: Illustrations.MedicineDelivery, name: "Medicine Delivery" },
    { Component: Illustrations.HealthReports, name: "Health Reports" },
    { Component: Illustrations.DoctorConsultation, name: "Doctor Consultation" },
    { Component: Illustrations.VideoConsultation, name: "Video Consultation" },
    { Component: Illustrations.AppointmentBooking, name: "Appointment Booking" },
    { Component: Illustrations.Wellness, name: "Wellness" },
    { Component: Illustrations.HerbalTreatment, name: "Herbal Treatment" }
  ];

  return (
    <div className="min-h-screen bg-mint/30 pb-20">
      {/* Top Banner */}
      <div className="bg-primary text-bg-white py-3.5 px-4 text-center text-xs font-semibold tracking-widest uppercase">
        ⚡ Ojas Sanjivani — Premium Brand Identity Design System
      </div>

      <header className="custom-container py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-border-main/50 bg-bg-white/40 backdrop-blur-md rounded-b-3xl">
        <div>
          <Logo iconSize={48} />
          <p className="text-text-secondary text-sm mt-3 max-w-xl font-medium">
            A luxury, nature-inspired, and professional healthcare design system blending ancient Ayurveda with modern clinical excellence.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="success" className="py-1 px-3 text-xs">Next.js 16</Badge>
          <Badge variant="primary" className="py-1 px-3 text-xs">Tailwind CSS v4</Badge>
          <Badge variant="accent" className="py-1 px-3 text-xs">Framer Motion</Badge>
        </div>
      </header>

      <main className="custom-container mt-12 grid grid-cols-1 gap-10">
        
        {/* Section 1: Interactive Logo Preview Panel */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="font-heading text-2xl font-extrabold text-text-main flex items-center gap-2">
                <Sparkles className="text-primary w-6 h-6" /> Brand Logo Deliverables
              </h2>
              <p className="text-sm text-text-secondary">Fully flat, minimal vector formats designed for app icons, headers, and print.</p>
            </div>
            
            {/* Background Changer */}
            <div className="flex items-center gap-2 bg-bg-white p-1 rounded-full border border-border-main/60 shadow-soft-sm self-start">
              <span className="text-xs font-bold text-text-secondary px-2.5">Background:</span>
              {(["white", "mint", "light-green", "dark-green"] as const).map((bg) => (
                <button
                  key={bg}
                  onClick={() => setActiveBg(bg)}
                  className={`h-7 px-3 text-xs font-bold rounded-full transition-all cursor-pointer capitalize ${
                    activeBg === bg 
                      ? "bg-primary text-bg-white shadow-soft-sm" 
                      : "text-text-secondary hover:text-primary hover:bg-mint"
                  }`}
                >
                  {bg.replace("-", " ")}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1. Horizontal Logo */}
            <Card hoverEffect="glow" className="flex flex-col h-full">
              <CardHeader className="pb-3 border-b border-border-main/20">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base font-bold">1. Horizontal Logo</CardTitle>
                  <Badge variant="outline">Website Header</Badge>
                </div>
                <CardDescription>Icon on left + Brand Typography</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col items-center justify-center p-8">
                <div className={`p-6 rounded-2xl w-full flex items-center justify-center transition-all duration-300 ${bgClasses[activeBg]}`}>
                  <Logo variant="horizontal" iconSize={40} className={activeBg === "dark-green" ? "brightness-0 invert" : ""} />
                </div>
                
                <div className="flex gap-2 w-full mt-6">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 text-xs gap-1.5"
                    onClick={() => copyToClipboard(svgCodes.horizontal, "horizontal")}
                  >
                    {copiedText === "horizontal" ? <Check className="w-3.5 h-3.5 text-accent-emerald" /> : <Copy className="w-3.5 h-3.5" />}
                    Copy SVG Code
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* 2. Vertical Logo */}
            <Card hoverEffect="glow" className="flex flex-col h-full">
              <CardHeader className="pb-3 border-b border-border-main/20">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base font-bold">2. Vertical Logo</CardTitle>
                  <Badge variant="outline">Footer / App</Badge>
                </div>
                <CardDescription>Centered Icon + Stacked Text</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col items-center justify-center p-8">
                <div className={`p-6 rounded-2xl w-full flex items-center justify-center transition-all duration-300 ${bgClasses[activeBg]}`}>
                  <Logo variant="vertical" iconSize={48} className={activeBg === "dark-green" ? "brightness-0 invert" : ""} />
                </div>
                
                <div className="flex gap-2 w-full mt-6">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 text-xs gap-1.5"
                    onClick={() => copyToClipboard(svgCodes.vertical, "vertical")}
                  >
                    {copiedText === "vertical" ? <Check className="w-3.5 h-3.5 text-accent-emerald" /> : <Copy className="w-3.5 h-3.5" />}
                    Copy SVG Code
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* 3. Icon Only */}
            <Card hoverEffect="glow" className="flex flex-col h-full">
              <CardHeader className="pb-3 border-b border-border-main/20">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base font-bold">3. Icon Only</CardTitle>
                  <Badge variant="outline">Avatar / App Icon</Badge>
                </div>
                <CardDescription>Core brand mark symbol</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col items-center justify-center p-8">
                <div className={`p-6 rounded-2xl w-full flex items-center justify-center transition-all duration-300 ${bgClasses[activeBg]}`}>
                  <Logo variant="icon" iconSize={64} className={activeBg === "dark-green" ? "brightness-0 invert" : ""} />
                </div>
                
                <div className="flex gap-2 w-full mt-6">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 text-xs gap-1.5"
                    onClick={() => copyToClipboard(svgCodes.iconOnly, "iconOnly")}
                  >
                    {copiedText === "iconOnly" ? <Check className="w-3.5 h-3.5 text-accent-emerald" /> : <Copy className="w-3.5 h-3.5" />}
                    Copy SVG Code
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* 4. Favicon */}
            <Card hoverEffect="glow" className="flex flex-col h-full">
              <CardHeader className="pb-3 border-b border-border-main/20">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base font-bold">4. Favicon Version</CardTitle>
                  <Badge variant="outline">Browser Tab</Badge>
                </div>
                <CardDescription>Optimized for 16px / 32px resolutions</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col items-center justify-center p-8">
                <div className={`p-6 rounded-2xl w-full flex items-center justify-center transition-all duration-300 ${bgClasses[activeBg]}`}>
                  <div className="bg-bg-white p-3 rounded-lg shadow-soft-sm border border-border-main/30 flex items-center justify-center">
                    <Logo variant="icon" iconSize={20} />
                  </div>
                </div>
                
                <div className="flex gap-2 w-full mt-6">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 text-xs gap-1.5"
                    onClick={() => copyToClipboard(svgCodes.favicon, "favicon")}
                  >
                    {copiedText === "favicon" ? <Check className="w-3.5 h-3.5 text-accent-emerald" /> : <Copy className="w-3.5 h-3.5" />}
                    Copy SVG Code
                  </Button>
                </div>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* Section 2: Color Palette */}
        <section className="space-y-6">
          <div>
            <h2 className="font-heading text-2xl font-extrabold text-text-main flex items-center gap-2">
              <Palette className="text-primary w-6 h-6" /> Color Palette Details
            </h2>
            <p className="text-sm text-text-secondary">Harmonious nature-inspired healthcare tones conforming to the 80% / 15% / 5% rule.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {paletteColors.map((color) => (
              <div 
                key={color.name}
                className="bg-bg-white p-5 rounded-2xl border border-border-main/60 shadow-soft-sm flex flex-col justify-between space-y-4"
              >
                <div 
                  className="w-full h-24 rounded-xl border border-border-main/20 flex items-end p-3"
                  style={{ backgroundColor: color.hex }}
                >
                  <span className={`font-mono text-xs font-bold ${color.text} bg-black/10 px-2 py-0.5 rounded backdrop-blur-sm`}>
                    {color.hex}
                  </span>
                </div>
                <div>
                  <h4 className="font-heading text-sm font-bold text-text-main">{color.name}</h4>
                  <p className="text-xs text-text-secondary mt-1">{color.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Accent colors */}
          <div className="bg-bg-white p-6 rounded-3xl border border-border-main/40 shadow-soft-sm">
            <h4 className="font-heading text-sm font-bold text-text-main mb-4">Core accents (The 5%)</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {accentColors.map((accent) => (
                <div key={accent.name} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full border border-border-main/20 shrink-0" style={{ backgroundColor: accent.hex }} />
                  <div>
                    <h5 className="text-xs font-bold text-text-main">{accent.name}</h5>
                    <span className="text-[10px] text-text-secondary">{accent.usage}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Reusable Premium Outline Icons */}
        <section className="space-y-6">
          <div>
            <h2 className="font-heading text-2xl font-extrabold text-text-main flex items-center gap-2">
              <Grid className="text-primary w-6 h-6" /> Premium Healthcare Icon Pack (20 Icons)
            </h2>
            <p className="text-sm text-text-secondary">Consistent stroke weight outline icons with brand green highlights.</p>
          </div>

          <div className="bg-bg-white p-8 rounded-3xl border border-border-main/40 shadow-soft-md">
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-6">
              {brandIcons.map(({ Component, name }) => (
                <div 
                  key={name}
                  className="flex flex-col items-center justify-center p-4 rounded-2xl hover:bg-mint/40 border border-transparent hover:border-primary/10 transition-all duration-300 group"
                >
                  <div className="text-text-secondary group-hover:text-primary transition-colors duration-300">
                    <Component size={32} />
                  </div>
                  <span className="text-[10px] font-bold text-center text-text-secondary mt-3 group-hover:text-text-main line-clamp-1">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Consistent Brand Illustrations */}
        <section className="space-y-6">
          <div>
            <h2 className="font-heading text-2xl font-extrabold text-text-main flex items-center gap-2">
              <Sparkles className="text-primary w-6 h-6" /> Premium Vector Illustration Set (11 Illustrations)
            </h2>
            <p className="text-sm text-text-secondary">Consistent, modern flat design illustrations in an organic white and green clinical aesthetic.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {brandIllustrations.map(({ Component, name }) => (
              <Card key={name} hoverEffect="lift" className="flex flex-col h-full bg-bg-white border border-border-main/50">
                <div className="flex-1 flex items-center justify-center p-6 bg-mint/10 border-b border-border-main/10 rounded-t-2xl">
                  <Component size={140} />
                </div>
                <div className="p-4 text-center">
                  <span className="text-xs font-bold text-text-main block">
                    {name}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Section 5: Typography, Borders, and Radii */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Typography */}
          <div className="bg-bg-white p-8 rounded-3xl border border-border-main/40 shadow-soft-sm space-y-6">
            <h3 className="font-heading text-xl font-extrabold text-text-main flex items-center gap-2 border-b border-border-main/20 pb-4">
              <Type className="text-primary w-5 h-5" /> Typography Rules
            </h3>
            
            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-text-secondary uppercase">Headings — Poppins</span>
                <h1 className="font-heading text-3xl font-extrabold text-primary mt-1">
                  Ojas Sanjivani Care
                </h1>
                <p className="text-xs text-text-secondary mt-1">Poppins Bold/Extrabold for clinical, modern headings.</p>
              </div>

              <div className="pt-4 border-t border-border-main/10">
                <span className="text-[10px] font-bold tracking-widest text-text-secondary uppercase">Body Text — Inter</span>
                <p className="font-sans text-sm text-text-main leading-relaxed mt-1">
                  Experience the synergy of Ayurveda, Homeopathy, and digital consultations at Ojas Sanjivani. Connect with qualified doctors and order authentic medicines online.
                </p>
                <p className="text-xs text-text-secondary mt-1">Inter Regular/Medium for easily readable medical literature and descriptions.</p>
              </div>
            </div>
          </div>

          {/* Spacing & Borders */}
          <div className="bg-bg-white p-8 rounded-3xl border border-border-main/40 shadow-soft-sm space-y-6">
            <h3 className="font-heading text-xl font-extrabold text-text-main flex items-center gap-2 border-b border-border-main/20 pb-4">
              <Code className="text-primary w-5 h-5" /> Radii & Border tokens
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-border-main/60 p-5 rounded-xl flex flex-col justify-between h-28">
                <span className="text-xs font-bold text-text-secondary">Card Radius (20px)</span>
                <span className="font-mono text-xs text-primary font-bold">rounded-xl</span>
              </div>
              <div className="border border-border-main/60 p-5 rounded-2xl flex flex-col justify-between h-28">
                <span className="text-xs font-bold text-text-secondary">Large Container (24px)</span>
                <span className="font-mono text-xs text-primary font-bold">rounded-2xl</span>
              </div>
              <div className="border border-border-main/60 p-5 rounded-full flex flex-col justify-between h-28 col-span-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-text-secondary">Action Pill buttons</span>
                  <div className="bg-primary text-bg-white text-[10px] font-bold px-3 py-1 rounded-full">Sample Button</div>
                </div>
                <span className="font-mono text-xs text-primary font-bold">rounded-full</span>
              </div>
            </div>
          </div>

        </section>

      </main>

      {/* Brand Footer */}
      <footer className="custom-container mt-20 pt-8 border-t border-border-main/40 text-center">
        <p className="text-xs text-text-secondary flex items-center justify-center gap-1.5 font-medium">
          Created with <Heart className="w-3.5 h-3.5 text-primary fill-primary" /> for Ojas Sanjivani Healthcare.
        </p>
      </footer>
    </div>
  );
}
