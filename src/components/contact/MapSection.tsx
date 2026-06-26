"use client";

import React from "react";
import { MapPin, Navigation } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function MapSection() {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5620295190987!2d77.04278431508216!3d28.597920382431102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1ad3f8f170e7%3A0xe54ef98cd0be5959!2sSector%2011%20Dwarka%2C%20Dwarka%2C%20New%20Delhi%2C%20Delhi%20110075!5e0!3m2!1sen!2sin!4v1656200000000!5m2!1sen!2sin";
  const externalMapUrl = "https://maps.google.com/?q=Sector+11+Dwarka+New+Delhi+India";

  return (
    <section id="map-section" className="py-16 sm:py-20 bg-[#F5FBF8] border-y border-border-main/20 text-left">
      <div className="custom-container space-y-10 max-w-5xl mx-auto">
        
        {/* Header content */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-4">
            <Badge variant="success" className="py-1 px-3 bg-[#028174]/10 text-[#028174] border-transparent">
              Clinic Location
            </Badge>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-main">
              Visit Our Clinic
            </h2>
            <p className="text-text-secondary text-sm sm:text-base max-w-lg leading-relaxed">
              Easily locate our clinic using Google Maps. Plan your journey and get directions from your current location.
            </p>
          </div>

          <Button
            onClick={() => window.open(externalMapUrl, "_blank", "noopener,noreferrer")}
            variant="primary"
            className="shrink-0 font-bold h-11 px-5 rounded-xl bg-[#028174] text-white hover:bg-[#01695F] flex items-center justify-center gap-1.5 cursor-pointer shadow-soft-sm self-start sm:self-end"
          >
            <Navigation className="w-4 h-4" />
            Open in Google Maps
          </Button>
        </div>

        {/* Map Card */}
        <Card
          hoverEffect="none"
          className="overflow-hidden border border-border-main/55 rounded-2xl shadow-soft-lg bg-white p-2"
        >
          <div className="relative w-full h-[320px] sm:h-[450px] rounded-xl overflow-hidden bg-slate-100">
            <iframe
              src={mapUrl}
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ojas Sanjivani Location Map"
            />
          </div>
        </Card>

      </div>
    </section>
  );
}
