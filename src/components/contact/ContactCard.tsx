"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  actionUrl: string;
  isExternal?: boolean;
}

export function ContactCard({
  icon,
  title,
  description,
  buttonText,
  actionUrl,
  isExternal = false,
}: ContactCardProps) {
  const handleClick = () => {
    if (actionUrl.startsWith("#")) {
      const element = document.getElementById(actionUrl.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.open(actionUrl, isExternal ? "_blank" : "_self", "noopener,noreferrer");
    }
  };

  return (
    <Card
      hoverEffect="lift"
      className="bg-white border border-border-main/55 rounded-2xl shadow-soft-sm p-6 flex flex-col justify-between items-center text-center h-full group"
    >
      <CardContent className="p-0 flex flex-col items-center space-y-4 flex-1 w-full">
        {/* Icon Circle */}
        <div className="w-14 h-14 rounded-full bg-[#F5FBF8] text-[#028174] flex items-center justify-center group-hover:bg-[#028174] group-hover:text-white transition-all duration-300 shadow-soft-sm">
          {icon}
        </div>
        
        {/* Title & Description */}
        <div className="space-y-1.5 flex-1">
          <h3 className="font-heading text-base font-extrabold text-text-main group-hover:text-[#028174] transition-colors duration-300">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed max-w-[240px] mx-auto">
            {description}
          </p>
        </div>
      </CardContent>

      {/* Button wrapper */}
      <div className="pt-5 w-full">
        <Button
          onClick={handleClick}
          variant="outline"
          className="w-full text-xs font-bold py-2.5 rounded-xl border border-border-main hover:border-[#028174] hover:bg-[#028174]/5 hover:text-[#028174] transition-all cursor-pointer shadow-soft-sm flex items-center justify-center gap-1.5"
        >
          {buttonText}
        </Button>
      </div>
    </Card>
  );
}
