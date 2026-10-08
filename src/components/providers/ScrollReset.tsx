"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";

export function ScrollReset() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    // 1. Force Lenis virtual scroller to coordinate 0 immediately
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }

    // 2. Native window reset fallback
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, lenis]);

  return null;
}