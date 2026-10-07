import Image from "next/image";
import { archiveData } from "@/config/archive-data";

export function ArchiveHero() {
  const { hero } = archiveData;

  return (
    <section
      aria-label="The Azor Archive"
      /* 
        Full-bleed panoramic hero:
        Maintains generous editorial scale across all breakpoints
      */
      className="relative w-full h-[78vh] xs:h-[82vh] sm:h-[85vh] lg:h-[88vh] xl:h-[90vh] min-h-[540px] xs:min-h-[580px] sm:min-h-[620px] overflow-hidden flex items-center bg-[#09111E] select-none border-b border-white/5"
    >
      {/* 
        Full Background Image Layer:
        - Strictly raw natural exposure
        - Zero artificial darkening filters or CSS overlay masks
      */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Viewport Image (< 768px) */}
        <div className="relative w-full h-full md:hidden">
          <Image
            src={hero.images.mobile?.src || hero.images.desktop.src}
            alt={hero.images.mobile?.alt || hero.images.desktop.alt}
            fill
            priority
            sizes="(max-width: 767px) 100vw, 0px"
            className="object-cover object-[72%_center] xs:object-[70%_center] pointer-events-none select-none"
          />
        </div>

        {/* Desktop & Tablet Viewport Image (>= 768px) */}
        <div className="hidden md:block relative w-full h-full">
          <Image
            src={hero.images.desktop.src}
            alt={hero.images.desktop.alt}
            fill
            priority
            sizes="(min-width: 768px) 100vw, 0px"
            className="object-cover object-[68%_center] lg:object-[64%_center] xl:object-center pointer-events-none select-none"
          />
        </div>
      </div>

      {/* Content Container (Layered above the background image) */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 xs:px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-20 pt-16 xs:pt-20 sm:pt-24 lg:pt-0">
        <div className="max-w-[290px] xs:max-w-[340px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[540px] flex flex-col items-start space-y-2 xs:space-y-2.5 sm:space-y-3">
          
          {/* Eyebrow */}
          <p className="text-[9px] xs:text-[9.5px] sm:text-[10px] lg:text-[10.5px] font-[family-name:var(--font-sans)] font-medium tracking-[0.26em] uppercase text-[#738294] leading-tight">
            {hero.eyebrow}
          </p>

          {/* Display Title: Cormorant Garamond */}
          <h1 className="text-[32px] xs:text-[38px] sm:text-[46px] md:text-[52px] lg:text-[58px] xl:text-[62px] font-[family-name:var(--font-serif)] font-normal tracking-[0.03em] leading-[1.05] text-[#F8FAFC]">
            {hero.titleLines.map((line, index) => (
              <span key={index} className="block">
                {line}
              </span>
            ))}
          </h1>

          {/* Narrative Subtext */}
          <p className="text-[11px] xs:text-[11.5px] sm:text-[12px] lg:text-[12.5px] font-[family-name:var(--font-sans)] font-light text-[#94A3B8] tracking-[0.025em] leading-relaxed max-w-[320px] xs:max-w-[360px] sm:max-w-none pt-0.5">
            {hero.description}
          </p>

          {/* Minimalist Editorial Hairline Accent */}
          <div className="w-6 xs:w-7 sm:w-8 h-[1px] bg-white/20 mt-3 sm:mt-4" aria-hidden="true" />

        </div>
      </div>
    </section>
  );
}