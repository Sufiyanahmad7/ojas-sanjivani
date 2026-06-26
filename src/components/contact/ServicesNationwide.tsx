"use client";

import React from "react";
import { 
  Video, 
  Users, 
  Truck, 
  HeartHandshake, 
  Activity, 
  Cpu, 
  MapPin 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export function ServicesNationwide() {
  const services = [
    {
      title: "Online Consultations Nationwide",
      description: "Consult qualified Ayurveda and Homeopathy experts from any state in India via secure call.",
      icon: Video,
    },
    {
      title: "Expert Doctor Network",
      description: "Access a certified network of senior doctors with decades of cumulative clinical experience.",
      icon: Users,
    },
    {
      title: "Home Medicine Delivery",
      description: "Get genuine, quality-tested wellness medicines delivered straight to your home post-consultation.",
      icon: Truck,
    },
    {
      title: "Personalized Treatment Plans",
      description: "Receive customized root-cause treatment charts, diet plans, and lifestyle recommendations.",
      icon: HeartHandshake,
    },
    {
      title: "Follow-up Consultations",
      description: "Easy digital monitoring and regular check-ins to optimize your dosage and progress.",
      icon: Activity,
    },
    {
      title: "AI Health Assistant",
      description: "Get instant wellness screening, Prakriti analysis, and symptom guides powered by our platform.",
      icon: Cpu,
    },
  ];

  return (
    <section className="py-8 sm:py-10 bg-[#F5FBF8] border-y border-border-main/20 text-left">
      <div className="custom-container max-w-5xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-4">
          <Badge variant="success" className="py-1 px-3 bg-[#028174]/10 text-[#028174] border-transparent font-bold">
            Nationwide Coverage
          </Badge>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-main">
            Healthcare Services Across India
          </h2>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
            Connecting patients with traditional holistic healing and modern diagnostic guidance, anywhere in India.
          </p>
        </div>

        {/* Layout Grid: Cards on left, decorative Map on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Side: Services grid (6 cards) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((serv, idx) => {
              const Icon = serv.icon;
              return (
                <Card
                  key={idx}
                  hoverEffect="lift"
                  className="bg-white border border-border-main/55 p-5 rounded-xl shadow-soft-sm flex gap-3.5 items-start"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#F5FBF8] text-[#028174] flex items-center justify-center shrink-0 shadow-soft-sm">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs sm:text-sm font-extrabold text-text-main leading-tight">
                      {serv.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-text-secondary leading-relaxed">
                      {serv.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Right Side: Decorative India Vector Map */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-4 bg-white border border-border-main/55 rounded-2xl shadow-soft-lg aspect-square max-w-[380px] mx-auto w-full">
            <span className="text-[9px] font-bold text-text-secondary uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-[#028174]" />
              Interactive Consultation Grid
            </span>

            <svg
              viewBox="0 0 300 300"
              className="w-full h-full max-h-[280px]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Radial background aura */}
              <circle cx="150" cy="150" r="100" fill="#028174" fillOpacity="0.03" />

              {/* Dotted abstract map representation of India contour */}
              <g opacity="0.45" fill="#028174">
                {/* North */}
                <circle cx="140" cy="50" r="3" />
                <circle cx="150" cy="40" r="3.5" />
                <circle cx="160" cy="50" r="3" />
                <circle cx="150" cy="60" r="4" />
                
                {/* Central / Plains */}
                <circle cx="120" cy="90" r="3" />
                <circle cx="140" cy="85" r="3.5" />
                <circle cx="160" cy="95" r="4.5" />
                <circle cx="180" cy="90" r="3" />
                
                {/* West / Gujarat */}
                <circle cx="85" cy="115" r="4" />
                <circle cx="100" cy="120" r="3.5" />
                <circle cx="115" cy="130" r="4.5" />
                
                {/* Central East */}
                <circle cx="190" cy="110" r="3" />
                <circle cx="210" cy="120" r="3" />
                <circle cx="225" cy="115" r="3.5" />
                <circle cx="240" cy="120" r="3" />
                
                {/* Deccan / South */}
                <circle cx="130" cy="160" r="4.5" />
                <circle cx="150" cy="165" r="4" />
                <circle cx="170" cy="160" r="3.5" />
                
                <circle cx="135" cy="190" r="4" />
                <circle cx="155" cy="195" r="4.5" />
                <circle cx="165" cy="190" r="3.5" />
                
                <circle cx="140" cy="220" r="4" />
                <circle cx="150" cy="230" r="3" />
                <circle cx="145" cy="250" r="3.5" />
              </g>

              {/* Connecting networks rings/paths */}
              <path
                d="M150,40 Q115,130 155,195 T145,250 M85,115 Q140,85 225,115 M150,165 L240,120"
                stroke="#0FAF9A"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                opacity="0.25"
              />

              {/* Active Glowing Hubs (Delhi, Mumbai, Bengaluru, Kolkata) */}
              {/* Hub 1: Delhi (North) */}
              <g>
                <circle cx="150" cy="85" r="10" fill="#028174" fillOpacity="0.15">
                  <animate attributeName="r" values="6;14;6" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="150" cy="85" r="4" fill="#028174" />
              </g>

              {/* Hub 2: Mumbai (West) */}
              <g>
                <circle cx="105" cy="155" r="10" fill="#028174" fillOpacity="0.15">
                  <animate attributeName="r" values="6;14;6" dur="3.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="105" cy="155" r="4" fill="#028174" />
              </g>

              {/* Hub 3: Bengaluru (South) */}
              <g>
                <circle cx="145" cy="210" r="10" fill="#028174" fillOpacity="0.15">
                  <animate attributeName="r" values="6;14;6" dur="4s" repeatCount="indefinite" />
                </circle>
                <circle cx="145" cy="210" r="4" fill="#028174" />
              </g>

              {/* Hub 4: Kolkata (East) */}
              <g>
                <circle cx="215" cy="135" r="10" fill="#028174" fillOpacity="0.15">
                  <animate attributeName="r" values="6;14;6" dur="2.8s" repeatCount="indefinite" />
                </circle>
                <circle cx="215" cy="135" r="4" fill="#028174" />
              </g>

              {/* Connections overlays */}
              <line x1="150" y1="85" x2="105" y2="155" stroke="#028174" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
              <line x1="105" y1="155" x2="145" y2="210" stroke="#028174" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
              <line x1="150" y1="85" x2="215" y2="135" stroke="#028174" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
              <line x1="215" y1="135" x2="145" y2="210" stroke="#028174" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />

            </svg>
          </div>

        </div>

        {/* Network Footnote Block */}
        <div className="p-5 sm:p-6 bg-white border border-border-main/55 rounded-2xl shadow-soft-sm max-w-4xl mx-auto">
          <p className="text-[11px] sm:text-xs text-text-secondary leading-relaxed text-center font-medium">
            Our healthcare experts consult patients across India through online consultations and a growing network of experienced Ayurveda and Homeopathy doctors. Once your appointment is booked, we'll connect you with the most suitable healthcare expert based on your location and medical needs.
          </p>
        </div>

      </div>
    </section>
  );
}
