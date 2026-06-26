"use client";

import React from "react";
import { Logo } from "@/components/ui/Logo";
import { Badge } from "@/components/ui/Badge";
import { Phone, Mail, MapPin, Sparkles, Heart } from "lucide-react";

export function Footer() {
  const links = {
    clinical: [
      { label: "Online Consultation", href: "#services" },
      { label: "Find Expert Doctors", href: "#doctors" },
      { label: "Digital Symptom Checker", href: "#digital-assistant" },
      { label: "Prakriti Screening", href: "#digital-assistant" }
    ],
    specialties: [
      { label: "Digestion & Gut Health", href: "#diseases" },
      { label: "Joint & Spine Pain", href: "#diseases" },
      { label: "Hair & Skin Care", href: "#diseases" },
      { label: "Diabetes Management", href: "#diseases" }
    ],
    company: [
      { label: "About Ojas Sanjivani", href: "/about" },
      { label: "Organic Herb Sourcing", href: "#" },
      { label: "FAQs & Helpdesk", href: "/contact#faqs" },
      { label: "Contact Support", href: "/contact" }
    ]
  };

  return (
    <footer className="bg-mint/15 pt-20 pb-8 border-t border-border-main/50 relative">
      <div className="custom-container space-y-16">
        
        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Bio Column */}
          <div className="lg:col-span-4 space-y-6">
            <Logo variant="horizontal" iconSize={36} />
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed max-w-sm">
              Ojas Sanjivani is a modern, integrated healthcare platform blending the traditional roots of Ayurveda and Homeopathy with advanced diagnostic assistance.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="success" className="text-[9px] uppercase tracking-wider">GMP Certified</Badge>
              <Badge variant="primary" className="text-[9px] uppercase tracking-wider">USDA Organic</Badge>
              <Badge variant="accent" className="text-[9px] uppercase tracking-wider">ISO 9001:2015</Badge>
            </div>
          </div>

          {/* Quick Links Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:col-span-8">
            
            {/* Column 1: Clinical */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-text-main uppercase tracking-widest">Clinical Care</h4>
              <ul className="space-y-2">
                {links.clinical.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-xs text-text-secondary hover:text-primary transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Specialties */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-text-main uppercase tracking-widest">Specialties</h4>
              <ul className="space-y-2">
                {links.specialties.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-xs text-text-secondary hover:text-primary transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Company */}
            <div className="space-y-4 col-span-2 sm:col-span-1">
              <h4 className="text-xs font-bold text-text-main uppercase tracking-widest">Resources</h4>
              <ul className="space-y-2">
                {links.company.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-xs text-text-secondary hover:text-primary transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Contact Info Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-border-main/30 text-xs text-text-secondary">
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <Phone className="w-4 h-4 text-primary shrink-0" />
            <a href="tel:+919266714040" className="hover:text-primary transition-colors">+91 92667 14040</a>
          </div>
          <div className="flex items-center gap-3 justify-center">
            <Mail className="w-4 h-4 text-primary shrink-0" />
            <a href="mailto:care@ojassanjivani.com" className="hover:text-primary transition-colors">care@ojassanjivani.com</a>
          </div>
          <div className="flex items-center gap-3 justify-center sm:justify-end">
            <MapPin className="w-4 h-4 text-primary shrink-0" />
            <span>Ojas Sanjivani Towers, New Delhi, India</span>
          </div>
        </div>

        {/* Brand Copyright Row */}
        <div className="pt-8 border-t border-border-main/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-text-secondary">
          <p>© {new Date().getFullYear()} Ojas Sanjivani Healthcare Private Limited. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-primary fill-primary" /> for integrated health.
          </p>
        </div>

      </div>
    </footer>
  );
}
