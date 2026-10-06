import Image from "next/image";
import { siteConfig } from "@/config/site";
import { HeroScrollIndicator } from "./HeroScrollIndicator";

export function HeroSection() {
  const { hero } = siteConfig;

  return (
    <section
      aria-label="Hero Showcase"
      className="relative w-full h-screen h-[100dvh] overflow-hidden flex flex-col justify-between pt-20 sm:pt-24 md:pt-28 pb-6 sm:pb-8 lg:pb-10 px-6 sm:px-12 lg:px-20"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full md:hidden">
          <Image
            src={hero.images.mobile.src}
            alt={hero.images.mobile.alt}
            fill
            priority
            sizes="(max-width: 767px) 100vw, 0px"
            className="object-cover object-center select-none pointer-events-none"
          />
        </div>

        <div className="hidden md:block relative w-full h-full">
          <Image
            src={hero.images.desktop.src}
            alt={hero.images.desktop.alt}
            fill
            priority
            sizes="(min-width: 768px) 100vw, 0px"
            className="object-cover object-center select-none pointer-events-none"
          />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 my-auto max-w-xl sm:max-w-2xl lg:max-w-3xl flex flex-col items-start select-none">
        {/* Eyebrow: Montserrat Regular/Medium uppercase */}
        <p className="text-[9px] sm:text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-zinc-300 font-[family-name:var(--font-sans)] font-medium mb-3 sm:mb-4">
          {hero.eyebrow}
        </p>

        {/* Brand Display Title: Cormorant Garamond Regular */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[100px] xl:text-[108px] font-[family-name:var(--font-serif)] font-normal tracking-[0.12em] leading-[0.92] text-white">
          {hero.brand}
        </h1>

        {/* Tagline: Cormorant Garamond Italic Regular */}
        <p className="mt-3 sm:mt-5 text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-[family-name:var(--font-serif)] italic font-normal tracking-wide text-zinc-100">
          {hero.tagline}
        </p>

        {/* Minimal Divider */}
        <div
          className="w-8 sm:w-10 h-[1px] bg-white/40 my-4 sm:my-6"
          aria-hidden="true"
        />

        {/* Secondary Brand Statement: Montserrat Regular */}
        <div className="text-[11px] sm:text-xs md:text-[13px] font-[family-name:var(--font-sans)] font-light tracking-[0.06em] text-zinc-300 leading-relaxed space-y-0.5">
          <p>{hero.statement1}</p>
          <p>{hero.statement2}</p>
        </div>
      </div>

      {/* Hero Bottom Meta Controls */}
      <div className="relative z-10 w-full flex items-end justify-between select-none">
        <HeroScrollIndicator />

        {/* Slide Pagination Indicator: Montserrat Medium */}
        <div className="flex items-center gap-2 sm:gap-3 text-zinc-300 text-[10px] sm:text-[11px] font-[family-name:var(--font-sans)] font-medium tracking-[0.25em]">
          <span>{hero.pagination}</span>
          <span className="w-5 sm:w-7 h-[1px] bg-white/40 block" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}