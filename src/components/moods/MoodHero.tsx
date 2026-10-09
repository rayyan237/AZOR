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
      className="relative w-full h-[100dvh] min-h-[640px] flex items-center bg-[#04070D] text-white select-none overflow-hidden"
    >
      {/* 
        Full-Bleed Raw Background Photography
        - No artificial darkening filters
        - No gradient masks
        - Separate Desktop (>= sm) & Mobile (< sm) assets
      */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Screen Asset */}
        <div className="hidden sm:block absolute inset-0">
          <Image
            src={mood.images.desktop.src}
            alt={mood.images.desktop.alt}
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-[70%_center] lg:object-[65%_center] xl:object-center select-none pointer-events-none"
          />
        </div>

        {/* Mobile Screen Asset */}
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

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto h-full flex flex-col justify-between px-5 xs:px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-20 pt-28 sm:pt-32 pb-8 sm:pb-12">
        
        {/* Left Editorial Narrative Cluster */}
        <div className="my-auto max-w-[340px] xs:max-w-[380px] sm:max-w-[440px] flex flex-col items-start">
          
          {/* Eyebrow with hairline rule */}
          <div className="flex items-center gap-3 mb-3 sm:mb-4">
            <span className="text-[9px] xs:text-[9.5px] sm:text-[10px] font-[family-name:var(--font-sans)] font-medium tracking-[0.26em] uppercase text-zinc-300">
              MOOD / {mood.number}
            </span>
            <span className="w-8 h-[1px] bg-white/30" aria-hidden="true" />
          </div>

          {/* Display Heading */}
          <h1 className="text-[38px] xs:text-[44px] sm:text-[52px] md:text-[58px] lg:text-[64px] font-[family-name:var(--font-serif)] font-normal tracking-[0.03em] leading-[1.02] text-white mb-3 sm:mb-3.5">
            {mood.title}
          </h1>

          {/* Italic Serif Quote Tagline */}
          <p className="text-[17px] xs:text-[19px] sm:text-[21px] md:text-[23px] font-[family-name:var(--font-serif)] italic text-zinc-200 leading-snug mb-4 sm:mb-5">
            {mood.quote}
          </p>

          {/* Upper Hairline Rule */}
          <div
            className="w-7 sm:w-8 h-[1px] bg-white/30 mb-4 sm:mb-5"
            aria-hidden="true"
          />

          {/* Body Stanza */}
          <div className="space-y-0.5 text-[11px] xs:text-[11.5px] sm:text-[12px] font-[family-name:var(--font-sans)] font-light leading-relaxed text-zinc-300 tracking-[0.015em] mb-4 sm:mb-5">
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

        {/* Bottom-Right Navigation & Paging Controls */}
        <div className="self-end flex flex-col items-end gap-2.5">
          {/* Index Display: e.g. 01 / 06 */}
          <span className="text-[10px] xs:text-[10.5px] sm:text-[11px] font-[family-name:var(--font-serif)] italic tracking-[0.16em] text-zinc-300">
            {mood.navigation.currentIndex} / {mood.navigation.totalIndex}
          </span>

          {/* Directional Paging Arrows */}
          <div className="flex items-center gap-5">
            <Link
              href={`/moods/${mood.navigation.prevSlug}`}
              aria-label="Previous mood"
              className="text-xs sm:text-sm text-zinc-400 hover:text-white transition-colors duration-200"
            >
              ←
            </Link>
            <Link
              href={`/moods/${mood.navigation.nextSlug}`}
              aria-label="Next mood"
              className="text-xs sm:text-sm text-zinc-400 hover:text-white transition-colors duration-200"
            >
              →
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}