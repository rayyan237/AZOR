// src/components/hero/HeroSection.tsx
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { HeroScrollIndicator } from "./HeroScrollIndicator";

export function HeroSection() {
  const { hero } = siteConfig;

  return (
    <section
      aria-label="Hero Showcase"
      /* 
        Locks exact viewport height across all devices:
        - 100vh fallback
        - 100dvh handles dynamic mobile browser address bars without overflow
        - overflow-hidden prevents internal elements from forcing a page scroll
      */
      className="relative w-full h-screen h-[100dvh] overflow-hidden flex flex-col justify-between pt-20 sm:pt-24 md:pt-28 pb-6 sm:pb-8 lg:pb-10 px-6 sm:px-12 lg:px-20"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_center] sm:object-[60%_center] lg:object-center select-none pointer-events-none"
          quality={90}
        />

        {/* Minimal soft gradient on the left edge only for text contrast */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Main Content Area: Centered vertically within the viewport */}
      <div className="relative z-10 my-auto max-w-xl sm:max-w-2xl lg:max-w-3xl flex flex-col items-start select-none">
        {/* Eyebrow */}
        <p className="text-[9px] sm:text-[11px] tracking-[0.28em] uppercase text-zinc-300 font-[family-name:var(--font-sans-clean)] font-medium mb-2 sm:mb-3">
          {hero.eyebrow}
        </p>

        {/* Brand Display Title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] xl:text-[96px] font-[family-name:var(--font-serif-brand)] font-normal tracking-[0.16em] leading-[0.92] text-white">
          {hero.brand}
        </h1>

        {/* Italic Calligraphic Tagline */}
        <p className="mt-2 sm:mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-serif-accent)] italic font-light tracking-wide text-zinc-100">
          {hero.tagline}
        </p>

        {/* Minimal Divider */}
        <div
          className="w-8 sm:w-12 h-[1px] bg-white/40 my-3 sm:my-5"
          aria-hidden="true"
        />

        {/* Secondary Brand Statement */}
        <div className="text-[11px] sm:text-xs md:text-sm font-[family-name:var(--font-sans-clean)] font-light tracking-[0.06em] text-zinc-300 leading-relaxed space-y-0.5">
          <p>{hero.statement1}</p>
          <p>{hero.statement2}</p>
        </div>
      </div>

      {/* Hero Bottom Meta Controls */}
      <div className="relative z-10 w-full flex items-end justify-between select-none">
        <HeroScrollIndicator />

        {/* Slide Pagination Indicator */}
        <div className="flex items-center gap-2 sm:gap-3 text-zinc-300 text-[10px] sm:text-[11px] font-[family-name:var(--font-sans-clean)] tracking-[0.25em]">
          <span>{hero.pagination}</span>
          <span className="w-5 sm:w-7 h-[1px] bg-white/40 block" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}