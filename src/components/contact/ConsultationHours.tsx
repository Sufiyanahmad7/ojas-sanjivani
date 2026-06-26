"use client";

import React from "react";
import { Clock, Phone, Mail, MessageSquare, AlertCircle, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { CONTACT_CONFIG } from "@/data/contactConfig";

export function ConsultationHours() {
  const socialLinks = [
    {
      name: "WhatsApp",
      icon: (props: any) => <MessageSquare {...props} />,
      url: CONTACT_CONFIG.whatsappUrl,
      color: "text-[#25D366] hover:bg-[#25D366]/10",
    },
    {
      name: "Instagram",
      icon: (props: any) => (
        <svg className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
      url: "https://instagram.com/ojassanjivani",
      color: "text-[#E1306C] hover:bg-[#E1306C]/10",
    },
    {
      name: "Facebook",
      icon: (props: any) => (
        <svg className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
      url: "https://facebook.com/ojassanjivani",
      color: "text-[#1877F2] hover:bg-[#1877F2]/10",
    },
    {
      name: "YouTube",
      icon: (props: any) => (
        <svg className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
          <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" />
        </svg>
      ),
      url: "https://youtube.com/ojassanjivani",
      color: "text-[#FF0000] hover:bg-[#FF0000]/10",
    },
  ];

  return (
    <Card
      hoverEffect="none"
      className="bg-white border border-border-main/55 rounded-2xl shadow-soft-lg p-4 sm:p-5 h-full flex flex-col justify-between"
    >
      <CardContent className="p-0 space-y-4 text-left">
        
        {/* Title */}
        <div>
          <span className="text-[10px] font-black text-[#028174] uppercase tracking-wider block">Office Hours</span>
          <h3 className="font-heading text-lg sm:text-xl font-black text-text-main mt-0.5">
            Consultation Hours
          </h3>
          <p className="text-xs text-text-secondary">
            Ayurveda & Homeopathy Expert Support
          </p>
        </div>

        {/* Operating schedule blocks */}
        <div className="space-y-4 pt-2">
          {/* Weekday Hours */}
          <div className="flex gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#F5FBF8] text-[#028174] flex items-center justify-center shrink-0">
              <Clock className="w-4.5 h-4.5" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-text-secondary block">
                {CONTACT_CONFIG.hoursWeekday}
              </span>
              <span className="text-xs sm:text-sm text-text-main font-extrabold leading-relaxed">
                {CONTACT_CONFIG.hoursWeekdayDetail}
              </span>
            </div>
          </div>

          {/* Sunday / Appt detail */}
          <div className="flex gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#F5FBF8] text-[#028174] flex items-center justify-center shrink-0">
              <Calendar className="w-4.5 h-4.5" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-text-secondary block">Appointments</span>
              <span className="text-xs sm:text-sm text-text-main font-medium leading-relaxed">
                {CONTACT_CONFIG.hoursSundayDetail}
              </span>
            </div>
          </div>

          {/* Callbacks */}
          <div className="flex gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#F5FBF8] text-[#028174] flex items-center justify-center shrink-0">
              <AlertCircle className="w-4.5 h-4.5 text-amber-500" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-text-secondary block">Emergency Cases</span>
              <span className="text-xs sm:text-sm text-text-secondary font-medium leading-relaxed block max-w-[280px]">
                {CONTACT_CONFIG.emergencyDetail}
              </span>
            </div>
          </div>
        </div>

        {/* Central contact information */}
        <div className="border-t border-border-main/40 pt-4 space-y-3">
          <span className="text-[10px] font-bold text-text-secondary block uppercase tracking-wide">
            Central Helplines
          </span>
          <div className="flex flex-col gap-2">
            <a
              href={`tel:${CONTACT_CONFIG.phoneRaw}`}
              className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-text-main hover:text-[#028174] transition-colors"
            >
              <Phone className="w-4.5 h-4.5 text-[#028174]" />
              {CONTACT_CONFIG.phone}
            </a>
            <a
              href={`mailto:${CONTACT_CONFIG.email}`}
              className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-text-main hover:text-[#028174] transition-colors"
            >
              <Mail className="w-4.5 h-4.5 text-[#028174]" />
              {CONTACT_CONFIG.email}
            </a>
          </div>
        </div>

      </CardContent>

      {/* Footer social icons & actions */}
      <div className="pt-6 border-t border-border-main/40 mt-6 flex items-center justify-between gap-4">
        <span className="text-[10px] font-bold text-text-secondary">Follow Our Social Channels</span>
        <div className="flex items-center gap-2">
          {socialLinks.map((social, i) => {
            const Icon = social.icon;
            return (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                title={social.name}
                className={`w-9 h-9 rounded-lg border border-border-main flex items-center justify-center transition-all duration-300 ${social.color}`}
              >
                <Icon className="w-4.5 h-4.5" />
              </a>
            );
          })}
        </div>
      </div>
    </Card>
  );
}
