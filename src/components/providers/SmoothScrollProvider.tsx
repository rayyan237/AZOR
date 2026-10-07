"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import Lenis from "lenis";

interface SmoothScrollContextType {
  lenis: Lenis | null;
  setScrollFriction: (friction: "normal" | "damped" | "pinned") => void;
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({
  lenis: null,
  setScrollFriction: () => {},
});

export const useLenis = () => useContext(SmoothScrollContext);

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.35, // Deliberate luxury inertia
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.25,
      infinite: false,
    });

    lenisRef.current = lenis;
    setLenisInstance(lenis);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const setScrollFriction = (friction: "normal" | "damped" | "pinned") => {
    if (!lenisRef.current) return;

    if (friction === "pinned") {
      // Damped velocity for controlled inspection inside horizontal showcases
      lenisRef.current.options.wheelMultiplier = 0.65;
      lenisRef.current.options.touchMultiplier = 0.85;
    } else if (friction === "damped") {
      // Gentle cushion during transition boundaries
      lenisRef.current.options.wheelMultiplier = 0.8;
      lenisRef.current.options.touchMultiplier = 1.0;
    } else {
      // Standard luxury glide across editorial vertical banners
      lenisRef.current.options.wheelMultiplier = 0.95;
      lenisRef.current.options.touchMultiplier = 1.25;
    }
  };

  return (
    <SmoothScrollContext.Provider
      value={{ lenis: lenisInstance, setScrollFriction }}
    >
      {children}
    </SmoothScrollContext.Provider>
  );
}