import Image from "next/image";
import { archiveData } from "@/config/archive-data";
import { ArchiveScrollIndicator } from "./ArchiveScrollIndicator";

export function ArchiveHero() {
  const { hero } = archiveData;

  return (
    <section
      aria-label="Archive Hero Showcase"
      id="archive-hero"
      /* 
        Strict single-screen height lock matching the homepage hero:
        - 100vh fallback
        - 100dvh for mobile dynamic address bars
        - overflow-hidden prevents internal shifts or unwanted vertical jitter
      */
      className="relative w-full h-screen h-[100dvh] overflow-hidden flex flex-col justify-between pt-16 xs:pt-20 sm:pt-24 md:pt-26 lg:pt-28 pb-5 xs:pb-6 sm:pb-8 lg:pb-10 px-5 xs:px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-20 bg-[#09111E]"
    >
      {/* Background Image Container — Raw visual lighting without artificial darkening scrims */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Viewport Image (< 768px): Vertical crop focusing on model and jewelry */}
        <div className="relative w-full h-full md:hidden">
          <Image
            src={hero.images.mobile.src}
            alt={hero.images.mobile.alt}
            fill
            priority
            sizes="(max-width: 767px) 100vw, 0px"
            className="object-cover object-[70%_center] xs:object-[68%_center] select-none pointer-events-none"
          />
        </div>

        {/* Desktop Viewport Image (>= 768px): Wide cinematic composition */}
        <div className="hidden md:block relative w-full h-full">
          <Image
            src={hero.images.desktop.src}
            alt={hero.images.desktop.alt}
            fill
            priority
            sizes="(min-width: 768px) 100vw, 0px"
            className="object-cover object-[65%_center] lg:object-[60%_center] xl:object-center select-none pointer-events-none"
          />
        </div>
      </div>

      {/* Main Content Area: Centered vertically within the viewport */}
      <div className="relative z-10 my-auto w-full max-w-[1440px] mx-auto">
        <div className="max-w-[310px] xs:max-w-[360px] sm:max-w-[480px] md:max-w-[560px] lg:max-w-[640px] xl:max-w-[720px] flex flex-col items-start select-none">
          {/* Eyebrow: Responsive tracking & fluid type scale */}
          <p className="text-[8.5px] xs:text-[9.5px] sm:text-[10px] md:text-[10.5px] lg:text-[11px] tracking-[0.24em] xs:tracking-[0.28em] sm:tracking-[0.32em] uppercase text-zinc-300 font-[family-name:var(--font-sans)] font-medium mb-2 xs:mb-2.5 sm:mb-3.5 lg:mb-4">
            {hero.eyebrow}
          </p>

          {/* Archive Display Title: Cormorant Garamond Regular */}
          <h1 className="text-[38px] xs:text-[46px] sm:text-[58px] md:text-[66px] lg:text-[76px] xl:text-[84px] 2xl:text-[92px] font-[family-name:var(--font-serif)] font-normal tracking-[0.03em] leading-[0.98] text-white">
            {hero.titleLines.map((line, index) => (
              <span key={index} className="block">
                {line}
              </span>
            ))}
          </h1>

          {/* Minimal Divider Accent */}
          <div
            className="w-6 xs:w-8 sm:w-10 lg:w-12 h-[1px] bg-white/40 my-2.5 xs:my-3 sm:my-4 lg:my-6"
            aria-hidden="true"
          />

          {/* Secondary Brand Statement: Montserrat Light */}
          <div className="text-[10.5px] xs:text-[11.5px] sm:text-xs md:text-[12.5px] lg:text-[13px] font-[family-name:var(--font-sans)] font-light tracking-[0.05em] sm:tracking-[0.06em] text-zinc-300 leading-relaxed space-y-0.5">
            <p>{hero.statement1}</p>
            <p>{hero.statement2}</p>
          </div>
        </div>
      </div>

      {/* Hero Bottom Meta Controls: Pinned seamlessly to the bottom edge */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto flex items-end justify-between select-none">
        <ArchiveScrollIndicator />

        {/* Slide Pagination Indicator: Montserrat Medium */}
        <div className="flex items-center gap-2 sm:gap-3 text-zinc-300 text-[9px] xs:text-[10px] sm:text-[11px] font-[family-name:var(--font-sans)] font-medium tracking-[0.22em] sm:tracking-[0.25em]">
          <span>{hero.pagination}</span>
          <span
            className="w-4 xs:w-5 sm:w-7 h-[1px] bg-white/40 block"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}