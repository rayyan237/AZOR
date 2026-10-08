"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";

export function ScrollReset() {
  const pathname = usePathname();
  const lenis = useLenis();

  useLayoutEffect(() => {
    // 1. Prevent the browser from restoring the previous scroll position
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // 2. Synchronous reset for native window, document element, and body
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // 3. Command Lenis to jump to top immediately with force flag
    if (lenis) {
      lenis.scrollTo(0, { immediate: true, force: true });
    }

    // 4. Double-check on next animation frame after Next.js finishes DOM reconciliation
    const rafId = requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      if (lenis) {
        lenis.scrollTo(0, { immediate: true, force: true });
      }
    });

    return () => cancelAnimationFrame(rafId);
  }, [pathname, lenis]);

  return null;
}