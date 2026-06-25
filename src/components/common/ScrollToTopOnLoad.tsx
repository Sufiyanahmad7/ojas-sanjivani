"use client";

import { useEffect } from "react";

export function ScrollToTopOnLoad() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // 1. Force scroll restoration to manual to prevent browser from jumping to previous scroll location
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }

      // 2. Clear any hash fragment (e.g. #appointment) from the URL immediately on initial load/refresh
      // so that the browser does not trigger scroll-to-element-id behavior.
      if (window.location.hash) {
        window.history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search
        );
      }

      // 3. Perform an instant scroll to top
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as any });
    }
  }, []);

  return null;
}
