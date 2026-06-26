"use client";

import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { Card } from "@/components/ui/Card";

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

function Counter({ value, suffix = "", duration = 1.2 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      if (start === end) return;

      const totalMiliseconds = duration * 1000;
      // Calculate a sensible step increment frequency
      const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 16);
      
      const timer = setInterval(() => {
        // Calculate dynamic step sizes to keep it running smoothly
        const step = Math.ceil(end / (totalMiliseconds / incrementTime));
        start += step;
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export function StatsSection() {
  const stats = [
    {
      value: 10000,
      suffix: "+",
      label: "Happy Patients",
      description: "Successfully treated with lasting natural relief",
    },
    {
      value: 25,
      suffix: "+",
      label: "Years Experience",
      description: "Leading natural therapies and clinical history",
    },
    {
      value: 50,
      suffix: "+",
      label: "Disease Treatments",
      description: "Specialized clinical cure protocols for chronic conditions",
    },
    {
      value: 98,
      suffix: "%",
      label: "Patient Satisfaction",
      description: "High efficacy outcomes validated by clinical recovery rates",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-primary to-primary-hover text-white relative overflow-hidden">
      {/* Background organic ring decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/5 pointer-events-none" />

      <div className="custom-container relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-2 text-center p-4">
              <div className="font-heading text-4xl sm:text-5xl font-black text-mint tracking-tight">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <h3 className="text-lg font-bold text-white tracking-wide">
                {stat.label}
              </h3>
              <p className="text-light-green/75 text-xs max-w-[200px] mx-auto leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
