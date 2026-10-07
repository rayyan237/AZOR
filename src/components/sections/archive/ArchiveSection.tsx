"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { useLenis } from "@/components/providers/SmoothScrollProvider";
import { ArchiveCard } from "./ArchiveCard";

export function ArchiveSection() {
  const { archive } = siteConfig;
  const { lenis } = useLenis();

  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [translateX, setTranslateX] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Targets for lerp interpolation
  const targetXRef = useRef(0);
  const currentXRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);

  const computeLayout = useCallback(() => {
    const isMobileView = window.innerWidth < 1024;
    setIsMobile(isMobileView);

    if (!isMobileView || !sectionRef.current || !trackRef.current) {
      targetXRef.current = 0;
      currentXRef.current = 0;
      setTranslateX(0);
      return;
    }

    const rect = sectionRef.current.getBoundingClientRect();
    const sectionHeight = sectionRef.current.offsetHeight;
    const windowHeight = window.innerHeight;

    const scrollableDistance = sectionHeight - windowHeight;
    if (scrollableDistance <= 0) return;

    // Buffer zones: 8% on entry and 8% on exit for soft transitions
    const rawProgress = -rect.top / scrollableDistance;
    const progress = Math.min(Math.max(rawProgress, 0), 1);

    // Ease-in-out smooth progression curve
    const smoothProgress =
      progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

    const totalTrackWidth = trackRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;
    const maxScroll = Math.max(0, totalTrackWidth - viewportWidth + 36);

    targetXRef.current = -(smoothProgress * maxScroll);
  }, []);

  // Smooth lerp loop running on RAF for silky 60/120fps motion
  useEffect(() => {
    if (!isMobile) return;

    const lerpLoop = () => {
      // 0.09 lerp factor creates soft, high-luxury inertia
      currentXRef.current += (targetXRef.current - currentXRef.current) * 0.09;

      if (Math.abs(targetXRef.current - currentXRef.current) > 0.1) {
        setTranslateX(currentXRef.current);
      }
      rafIdRef.current = requestAnimationFrame(lerpLoop);
    };

    rafIdRef.current = requestAnimationFrame(lerpLoop);

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [isMobile]);

  useEffect(() => {
    computeLayout();

    if (lenis) {
      lenis.on("scroll", computeLayout);
    } else {
      window.addEventListener("scroll", computeLayout, { passive: true });
    }

    window.addEventListener("resize", computeLayout);
    const timer = setTimeout(computeLayout, 300);

    return () => {
      if (lenis) {
        lenis.off("scroll", computeLayout);
      } else {
        window.removeEventListener("scroll", computeLayout);
      }
      window.removeEventListener("resize", computeLayout);
      clearTimeout(timer);
    };
  }, [lenis, computeLayout]);

  return (
    <section
      id="archive"
      ref={sectionRef}
      aria-label="The Azor Archive"
      /* Increased runway to h-[460vh] on mobile to give gradual transition distance */
      className={`relative w-full bg-[#EFECE6] text-[#1B222C] border-b border-[#E2DDD3] selection:bg-[#1B222C] selection:text-white ${
        isMobile
          ? "h-[460vh]"
          : "py-10 sm:py-12 md:py-14 lg:py-16 px-5 xs:px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-20"
      }`}
    >
      <div
        className={`${
          isMobile
            ? "sticky top-0 h-screen h-[100dvh] flex flex-col justify-center overflow-hidden px-5 xs:px-6 sm:px-8"
            : "max-w-[1440px] mx-auto"
        }`}
      >
        {/* Header Block */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-6 mb-5 xs:mb-6 sm:mb-8 lg:mb-10 w-full max-w-[1440px] mx-auto">
          <div className="flex flex-col items-start space-y-1">
            <h2 className="text-[22px] xs:text-[25px] sm:text-[28px] md:text-[30px] lg:text-[32px] xl:text-[34px] font-[family-name:var(--font-serif)] font-normal tracking-[0.03em] text-[#1B222C] leading-none">
              {archive.title}
            </h2>

            <p className="text-[9px] xs:text-[9.5px] sm:text-[10px] font-[family-name:var(--font-sans)] font-semibold tracking-[0.24em] uppercase text-[#2B3441] pt-0.5">
              {archive.subtitle}
            </p>

            <p className="text-[10.5px] xs:text-[11px] sm:text-[11.5px] font-[family-name:var(--font-sans)] font-light text-[#525A67] tracking-[0.02em] leading-normal pt-0.5">
              {archive.description}
            </p>
          </div>

          <div className="self-start sm:self-end pt-1 sm:pt-0">
            <Link
              href={archive.cta.href}
              className="group inline-flex items-center gap-2 text-[9px] xs:text-[9.5px] sm:text-[10px] font-[family-name:var(--font-sans)] font-medium tracking-[0.24em] uppercase text-[#1B222C] border-b border-[#1B222C] pb-0.5 hover:text-[#525A67] hover:border-[#525A67] transition-colors"
            >
              <span>{archive.cta.label}</span>
              <span className="text-[11px] transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Product Cards Track with smooth translate3d */}
        {isMobile ? (
          <div className="relative w-full overflow-visible">
            <div
              ref={trackRef}
              className="flex gap-4 sm:gap-5 will-change-transform"
              style={{
                transform: `translate3d(${translateX}px, 0, 0)`,
              }}
            >
              {archive.items.map((item) => (
                <div
                  key={item.id}
                  className="w-[76vw] xs:w-[70vw] sm:w-[50vw] shrink-0"
                >
                  <ArchiveCard item={item} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-5 gap-3 lg:gap-3.5 xl:gap-4 w-full">
            {archive.items.map((item) => (
              <div key={item.id} className="w-full">
                <ArchiveCard item={item} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}