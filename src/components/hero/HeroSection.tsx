// src/components/hero/HeroSection.tsx
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { HeroScrollIndicator } from "./HeroScrollIndicator";

export function HeroSection() {
  const { hero } = siteConfig;

  return (
    <section
      aria-label="Hero Showcase"
      /* Fixed responsive height tiers matching industry editorial standards */
      className="relative w-full h-[100svh] min-h-[640px] max-h-[780px] sm:h-[780px] sm:max-h-[860px] md:h-[840px] lg:h-[900px] xl:h-[940px] 2xl:h-[980px] overflow-hidden flex flex-col justify-between pt-24 sm:pt-28 pb-8 sm:pb-12 px-6 sm:px-12 lg:px-20"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          sizes="100vw"
          /* Preserves the native blue lighting and composition */
          className="object-cover object-[65%_center] sm:object-[60%_center] lg:object-center select-none pointer-events-none"
          quality={90}
        />

        {/* 
          Ultra-light text contrast gradient:
          Soft horizontal falloff on the left only so text is crisp without shifting image colors to black.
        */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-transparent pointer-events-none" 
          aria-hidden="true"
        />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 my-auto max-w-2xl sm:max-w-3xl flex flex-col items-start pt-8 sm:pt-14">
        {/* Eyebrow */}
        <p className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-zinc-300 font-[family-name:var(--font-sans-clean)] font-medium mb-3 sm:mb-4 select-none">
          {hero.eyebrow}
        </p>

        {/* Brand Display Title */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-[family-name:var(--font-serif-brand)] font-normal tracking-[0.16em] leading-[0.95] text-white">
          {hero.brand}
        </h1>

        {/* Italic Calligraphic Tagline */}
        <p className="mt-3 sm:mt-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-serif-accent)] italic font-light tracking-wide text-zinc-100">
          {hero.tagline}
        </p>

        {/* Minimal Divider */}
        <div
          className="w-10 sm:w-12 h-[1px] bg-white/40 my-5 sm:my-7"
          aria-hidden="true"
        />

        {/* Secondary Brand Statement */}
        <div className="text-xs sm:text-sm font-[family-name:var(--font-sans-clean)] font-light tracking-[0.06em] text-zinc-300 space-y-1">
          <p>{hero.statement1}</p>
          <p>{hero.statement2}</p>
        </div>
      </div>

      {/* Hero Bottom Footer Meta Controls */}
      <div className="relative z-10 w-full flex items-end justify-between select-none">
        <HeroScrollIndicator />

        {/* Slide Pagination Indicator */}
        <div className="flex items-center gap-3 text-zinc-300 text-[10px] sm:text-[11px] font-[family-name:var(--font-sans-clean)] tracking-[0.25em]">
          <span>{hero.pagination}</span>
          <span className="w-6 sm:w-8 h-[1px] bg-white/40 block" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}