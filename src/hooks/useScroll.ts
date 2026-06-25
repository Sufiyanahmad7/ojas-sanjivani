import { useState, useEffect } from "react";

export interface ScrollPosition {
  x: number;
  y: number;
  direction: "up" | "down" | null;
}

/**
 * Custom hook to track window scroll position and scroll direction.
 */
export function useScroll(): ScrollPosition {
  const [scrollState, setScrollState] = useState<ScrollPosition>({
    x: 0,
    y: 0,
    direction: null,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollX = window.scrollX;
      let direction: "up" | "down" | null = null;

      if (scrollY > lastScrollY) {
        direction = "down";
      } else if (scrollY < lastScrollY) {
        direction = "up";
      }

      setScrollState({
        x: scrollX,
        y: scrollY,
        direction,
      });

      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollState;
}
