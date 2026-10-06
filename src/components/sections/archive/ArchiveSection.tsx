"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArchiveCard } from "./ArchiveCard";

export function ArchiveSection() {
  const { archive } = siteConfig;
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate how far down the section has scrolled
      const totalScrollableDistance = sectionHeight - windowHeight;
      if (totalScrollableDistance <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.min(
        Math.max(currentScroll / totalScrollableDistance, 0),
        1
      );
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  // Compute maximum horizontal translation on mobile
  const maxTranslate = 100 * (archive.items.length - 1.25);
  const translateX = -(scrollProgress * maxTranslate);

  return (
    <section
      id="archive"
      ref={sectionRef}
      aria-label="The Azor Archive"
      /*
        On mobile (< lg): Height is expanded to h-[260vh] to provide scroll depth for the sticky horizontal conversion.
        On desktop (lg+): Restrained compact banner height py-12 to py-16.
      */
      className={`relative w-full bg-[#EFECE6] text-[#1B222C] border-b border-[#E2DDD3] selection:bg-[#1B222C] selection:text-white ${
        isMobile ? "h-[250vh]" : "py-10 sm:py-12 md:py-14 lg:py-16"
      }`}
    >
      <div
        className={`${
          isMobile
            ? "sticky top-0 h-screen flex flex-col justify-center overflow-hidden px-5 xs:px-6 sm:px-8 py-6"
            : "max-w-[1440px] mx-auto px-5 xs:px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-20"
        }`}
      >
        {/* Header Block */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-6 mb-5 xs:mb-6 sm:mb-8 lg:mb-10 w-full max-w-[1440px] mx-auto">
          <div className="flex flex-col items-start space-y-1">
            {/* Main Section Title */}
            <h2 className="text-[22px] xs:text-[25px] sm:text-[28px] md:text-[30px] lg:text-[32px] xl:text-[34px] font-[family-name:var(--font-serif)] font-normal tracking-[0.03em] text-[#1B222C] leading-none">
              {archive.title}
            </h2>

            {/* Eyebrow: Darker charcoal tone matching design */}
            <p className="text-[9px] xs:text-[9.5px] sm:text-[10px] font-[family-name:var(--font-sans)] font-semibold tracking-[0.24em] uppercase text-[#2B3441] pt-0.5">
              {archive.subtitle}
            </p>

            {/* Narrative Description */}
            <p className="text-[10.5px] xs:text-[11px] sm:text-[11.5px] font-[family-name:var(--font-sans)] font-light text-[#525A67] tracking-[0.02em] leading-normal pt-0.5">
              {archive.description}
            </p>
          </div>

          {/* Right Action: EXPLORE ALL */}
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

        {/* 
          Cards Container:
          - Desktop (lg+): Static 5-card grid
          - Mobile (< lg): Down-scroll driven horizontal track
        */}
        {isMobile ? (
          <div className="relative w-full overflow-visible">
            <div
              ref={trackRef}
              className="flex gap-4 will-change-transform transition-transform duration-75 ease-out"
              style={{
                transform: `translateX(${translateX}px)`,
              }}
            >
              {archive.items.map((item) => (
                <div
                  key={item.id}
                  className="w-[68vw] xs:w-[58vw] sm:w-[42vw] shrink-0"
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