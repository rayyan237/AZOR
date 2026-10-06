import Image from "next/image";
import { siteConfig } from "@/config/site";
import { HeroScrollIndicator } from "./HeroScrollIndicator";

export function HeroSection() {
  const { hero } = siteConfig;

  return (
    <section
      aria-label="Hero Showcase"
      className="relative w-full min-h-screen bg-[#07090c] overflow-hidden flex flex-col justify-between pt-28 pb-10 sm:pb-12 px-6 sm:px-12 lg:px-20"
    >
      {/* Background Hero Model Image with Next.js Image Optimization */}
      <div className="absolute inset-0 z-0">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_25%] sm:object-[center_35%] lg:object-[68%_30%] select-none pointer-events-none"
          quality={85}
        />
        {/* Soft luxury lighting gradients & text readability scrims */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090c] via-transparent to-[#07090c]/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07090c] via-[#07090c]/75 sm:via-[#07090c]/40 to-transparent pointer-events-none" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 my-auto max-w-4xl flex flex-col items-start pt-12 sm:pt-16 lg:pt-20">
        {/* Eyebrow */}
        <p className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-zinc-400 font-[family-name:var(--font-sans-clean)] font-medium mb-3 sm:mb-4 select-none">
          {hero.eyebrow}
        </p>

        {/* Brand Display Title */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[102px] font-[family-name:var(--font-serif-brand)] font-normal tracking-[0.16em] leading-[0.95] text-white">
          {hero.brand}
        </h1>

        {/* Italic Calligraphic Tagline */}
        <p className="mt-3 sm:mt-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-serif-accent)] italic font-light tracking-wide text-zinc-200">
          {hero.tagline}
        </p>

        {/* Minimal Divider */}
        <div
          className="w-10 sm:w-12 h-[1px] bg-zinc-600/80 my-5 sm:my-7"
          aria-hidden="true"
        />

        {/* Secondary Brand Statement */}
        <div className="text-xs sm:text-sm font-[family-name:var(--font-sans-clean)] font-light tracking-[0.06em] text-zinc-400 space-y-1">
          <p>{hero.statement1}</p>
          <p>{hero.statement2}</p>
        </div>
      </div>

      {/* Hero Bottom Footer Meta Controls */}
      <div className="relative z-10 w-full flex items-end justify-between pt-12 select-none">
        <HeroScrollIndicator />

        {/* Counter / Slide Pagination Indicator */}
        <div className="flex items-center gap-3 text-zinc-400 text-[10px] sm:text-[11px] font-[family-name:var(--font-sans-clean)] tracking-[0.25em]">
          <span>{hero.pagination}</span>
          <span className="w-6 sm:w-8 h-[1px] bg-zinc-600 block" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}