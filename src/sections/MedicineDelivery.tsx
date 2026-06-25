"use client";

import React from "react";
import { MEDICINE_PRODUCTS } from "@/constants";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { formatINR } from "@/utils";
import { ShoppingCart, Star, Sparkles } from "lucide-react";

export function MedicineDelivery() {
  return (
    <section id="pharmacy" className="py-24 bg-bg-white relative">
      <div className="custom-container space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-xl text-center md:text-left">
            <Badge variant="primary" className="py-1 px-3">Sanjivani Pharmacy</Badge>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-text-main">
              Premium Lab-Tested Herbal Formulations
            </h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              100% authentic, GMP-certified medicines delivered directly to your doorstep with clinical prescription support.
            </p>
          </div>
          <Button variant="outline" className="self-center md:self-end group bg-bg-white/80" href="#appointment">
            Browse Online Store
            <ShoppingCart className="w-4 h-4 ml-1.5 transition-transform group-hover:scale-110" />
          </Button>
        </div>

        {/* Medicines Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MEDICINE_PRODUCTS.map((medicine) => (
            <Card
              key={medicine.id}
              variant="default"
              hoverEffect="lift"
              className="flex flex-col h-full bg-bg-white border border-border-main/50 overflow-hidden"
            >
              {/* Product Header Container */}
              <div className="relative w-full aspect-[4/3] bg-mint/15 flex items-center justify-center p-6 border-b border-border-main/10 overflow-hidden">
                {/* Simulated product placeholder box with leaf logo */}
                <div className="w-20 h-24 bg-bg-white rounded-xl shadow-soft-sm border border-border-main/40 flex flex-col justify-between p-3.5 relative">
                  <div className="flex justify-between items-start">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent-emerald animate-pulse" />
                    <Sparkles className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <div className="text-center font-heading text-[8px] font-black text-primary uppercase tracking-widest leading-none">
                    OJAS <br /> CARE
                  </div>
                  <div className="h-1 w-full bg-primary/20 rounded-full" />
                </div>

                {/* Tag Overlay */}
                {medicine.tag && (
                  <div className="absolute top-3 left-3">
                    <Badge variant="success" className="text-[8px] font-bold py-0.5 px-2 bg-bg-white/95 backdrop-blur-sm border border-primary/10">
                      {medicine.tag}
                    </Badge>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <CardContent className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-bold text-text-secondary uppercase tracking-wider block">
                      {medicine.category}
                    </span>
                    <div className="flex items-center gap-0.5">
                      <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      <span className="text-[10px] font-bold text-text-main">{medicine.rating}</span>
                    </div>
                  </div>

                  <h3 className="font-heading text-sm font-bold text-text-main leading-snug">
                    {medicine.name}
                  </h3>
                  
                  <p className="text-[10px] text-text-secondary leading-relaxed line-clamp-2">
                    {medicine.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-border-main/20 flex items-center justify-between">
                  <div className="text-left">
                    <span className="text-[9px] text-text-secondary block">Price</span>
                    <span className="text-base font-black text-text-main">
                      {formatINR(medicine.price)}
                    </span>
                  </div>
                  
                  <Button size="sm" variant="primary" className="p-2 h-9 w-9 rounded-xl justify-center shrink-0">
                    <ShoppingCart className="w-4 h-4" />
                  </Button>
                </div>

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
