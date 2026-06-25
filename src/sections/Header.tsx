"use client";

import React from "react";
import { AnnouncementBar } from "./AnnouncementBar";
import { Navbar } from "./Navbar";
import { useScroll } from "@/hooks/useScroll";

export function Header() {
  const { y } = useScroll();
  const scrolled = y > 20;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] w-full flex flex-col transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-[#028174]/5"
          : "bg-white"
      }`}
    >
      {/* 1. Announcement Bar (Visible & Sticky) */}
      <AnnouncementBar />

      {/* 2. Redesigned Navbar */}
      <Navbar scrolled={scrolled} />
    </header>
  );
}
