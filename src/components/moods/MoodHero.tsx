// src/components/moods/MoodHero.tsx
import Image from "next/image";
import Link from "next/link";
import { MoodHeroData } from "@/config/moods-data";

interface MoodHeroProps {
  mood: MoodHeroData;
}

export function MoodHero({ mood }: MoodHeroProps) {
  return (
    <section
      id="mood-hero"
      aria-label={`${mood.title} Mood Hero`}
      className="relative w-full h-[100svh] min-h-[560px] max-h-[100dvh] bg-[#04070D] text-white select-none overflow-hidden"
    >
      {/* 
        Full-Bleed Raw Background Photography
        - Zero artificial darkening filters
        - Zero gradient overlays
        - Priority LCP delivery with responsive breakpoint crops
      */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Screen Asset (>= sm) */}
        <div className="hidden sm:block absolute inset-0">
          <Image
            src={mood.images.desktop.src}
            alt={mood.images.desktop.alt}
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-[70%_center] lg:object-[68%_center] xl:object-center select-none pointer-events-none"
          />
        </div>

        {/* Mobile Screen Asset (< sm) */}
        <div className="block sm:hidden absolute inset-0">
          <Image
            src={mood.images.mobile?.src || mood.images.desktop.src}
            alt={mood.images.mobile?.alt || mood.images.desktop.alt}
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-[72%_top] select-none pointer-events-none"
          />
        </div>
      </div>

      {/* Main Structural Frame: Grid rows lock everything within 100dvh */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto h-full grid grid-rows-[auto_1fr_auto] px-5 xs:px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-20 pt-20 xs:pt-24 sm:pt-28 pb-6 xs:pb-8 sm:pb-10">
        
        {/* Row 1: Navbar Clearance Spacer */}
        <div className="w-full h-2" aria-hidden="true" />

        {/* Row 2: Narrative Center Cluster (Centered vertically in available space) */}
        <div className="flex flex-col justify-center max-w-[340px] xs:max-w-[390px] sm:max-w-[460px] lg:max-w-[500px]">
          
          {/* Eyebrow: MOOD / 04 */}
          <div className="flex items-center gap-2.5 sm:gap-3 mb-2 xs:mb-2.5 sm:mb-3">
            <span className="text-[9px] xs:text-[9.5px] sm:text-[10px] font-[family-name:var(--font-sans)] font-medium tracking-[0.24em] uppercase text-zinc-300">
              MOOD / {mood.number}
            </span>
            <span className="w-8 h-[1px] bg-white/35" aria-hidden="true" />
          </div>

          {/* Display Heading */}
          <h1 className="text-[34px] xs:text-[40px] sm:text-[48px] md:text-[54px] lg:text-[62px] xl:text-[66px] font-[family-name:var(--font-serif)] font-normal tracking-[0.03em] leading-[1.02] text-white mb-2 sm:mb-2.5">
            {mood.title}
          </h1>

          {/* Subheading: Enlarged Italic Serif Quote */}
          <p className="text-[20px] xs:text-[23px] sm:text-[26px] md:text-[30px] lg:text-[33px] font-[family-name:var(--font-serif)] italic text-zinc-200 leading-[1.12] tracking-wide mb-3 xs:mb-3.5 sm:mb-4">
            {mood.quote}
          </p>

          {/* Upper Hairline Rule */}
          <div
            className="w-7 sm:w-8 h-[1px] bg-white/30 mb-3 xs:mb-3.5 sm:mb-4"
            aria-hidden="true"
          />

          {/* Body Narrative Stanza */}
          <div className="space-y-0.5 text-[10.5px] xs:text-[11px] sm:text-[12px] font-[family-name:var(--font-sans)] font-light leading-relaxed text-zinc-300/95 tracking-[0.015em] mb-3 xs:mb-3.5 sm:mb-4">
            {mood.description.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>

          {/* Terminal Hairline Rule */}
          <div
            className="w-7 sm:w-8 h-[1px] bg-white/30"
            aria-hidden="true"
          />

        </div>

        {/* Row 3: Bottom-Right Index Navigation */}
        <div className="flex justify-end items-end w-full">
          <div className="flex flex-col items-end gap-1.5 sm:gap-2">
            {/* Index: e.g. 04 / 05 */}
            <span className="text-[10px] xs:text-[10.5px] sm:text-[11px] font-[family-name:var(--font-serif)] italic tracking-[0.16em] text-zinc-300">
              {mood.navigation.currentIndex} / {mood.navigation.totalIndex}
            </span>

            {/* Directional Arrows with generous hit areas */}
            <div className="flex items-center gap-4 sm:gap-5">
              <Link
                href={`/moods/${mood.navigation.prevSlug}`}
                aria-label="Previous mood"
                className="p-1 -m-1 text-sm sm:text-base text-zinc-400 hover:text-white transition-colors duration-200 focus:outline-none"
              >
                ←
              </Link>
              <Link
                href={`/moods/${mood.navigation.nextSlug}`}
                aria-label="Next mood"
                className="p-1 -m-1 text-sm sm:text-base text-zinc-400 hover:text-white transition-colors duration-200 focus:outline-none"
              >
                →
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}