"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { siteConfig } from "@/config/site";
import { MoodCard } from "./MoodCard";

export function MoodSection() {
  const { moods } = siteConfig;
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [translateX, setTranslateX] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const updateMeasurements = useCallback(() => {
    const isMobileView = window.innerWidth < 1024;
    setIsMobile(isMobileView);

    if (!isMobileView || !sectionRef.current || !trackRef.current) {
      setTranslateX(0);
      return;
    }

    const rect = sectionRef.current.getBoundingClientRect();
    const sectionHeight = sectionRef.current.offsetHeight;
    const windowHeight = window.innerHeight;

    const scrollableDistance = sectionHeight - windowHeight;
    if (scrollableDistance <= 0) return;

    const scrolled = -rect.top;
    const progress = Math.min(Math.max(scrolled / scrollableDistance, 0), 1);

    const totalTrackWidth = trackRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;
    const maxScroll = Math.max(0, totalTrackWidth - viewportWidth + 32);

    setTranslateX(-(progress * maxScroll));
  }, []);

  useEffect(() => {
    updateMeasurements();

    const onScroll = () => {
      requestAnimationFrame(updateMeasurements);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateMeasurements);

    const timer = setTimeout(updateMeasurements, 300);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateMeasurements);
      clearTimeout(timer);
    };
  }, [updateMeasurements]);

  return (
    <section
      id="moods"
      ref={sectionRef}
      aria-label="The Azor Mood"
      /* Slim banner height on desktop matching prior sections, extended down-scroll runway on mobile */
      className={`relative w-full bg-[#07090C] text-white border-b border-white/5 selection:bg-white/20 selection:text-white ${
        isMobile
          ? "h-[450vh]"
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
        {/* Header Block: Left-Aligned Without CTA Link */}
        <div className="flex flex-col items-start space-y-1 mb-5 xs:mb-6 sm:mb-8 lg:mb-10 w-full max-w-[1440px] mx-auto">
          {/* Eyebrow */}
          <p className="text-[9px] xs:text-[9.5px] sm:text-[10px] font-[family-name:var(--font-sans)] font-medium tracking-[0.26em] uppercase text-[#7E8795]">
            {moods.eyebrow}
          </p>

          {/* Section Main Title */}
          <h2 className="text-[22px] xs:text-[25px] sm:text-[28px] md:text-[30px] lg:text-[32px] xl:text-[34px] font-[family-name:var(--font-serif)] font-normal tracking-[0.03em] text-white leading-none pt-0.5">
            {moods.title}
          </h2>

          {/* Subtitle / Description */}
          <p className="text-[10.5px] xs:text-[11px] sm:text-[11.5px] font-[family-name:var(--font-sans)] font-light text-[#C5CBD4] tracking-[0.02em] leading-normal pt-0.5">
            {moods.description}
          </p>
        </div>

        {/* 
          6-Card Mood Showcase:
          - Desktop (lg+): 6-column static grid matching the compact section proportions
          - Mobile (< lg): Down-scroll driven horizontal track
        */}
        {isMobile ? (
          <div className="relative w-full overflow-visible">
            <div
              ref={trackRef}
              className="flex gap-4 sm:gap-5 will-change-transform"
              style={{
                transform: `translate3d(${translateX}px, 0, 0)`,
              }}
            >
              {moods.items.map((item) => (
                <div
                  key={item.id}
                  className="w-[62vw] xs:w-[52vw] sm:w-[38vw] shrink-0"
                >
                  <MoodCard item={item} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-6 gap-3 lg:gap-3.5 xl:gap-4 w-full">
            {moods.items.map((item) => (
              <div key={item.id} className="w-full">
                <MoodCard item={item} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}