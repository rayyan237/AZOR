// src/components/journal/JournalHero.tsx
import Image from "next/image";
import { JournalHeroData } from "@/config/journal-data";

interface JournalHeroProps {
  data: JournalHeroData;
}

export function JournalHero({ data }: JournalHeroProps) {
  return (
    <section
      id="journal-hero"
      aria-label="Azor Letters Hero"
      className="relative w-full min-h-[92dvh] sm:min-h-[95dvh] lg:min-h-[100dvh] flex items-center bg-[#F7F5F1] text-[#171D26] overflow-hidden select-none border-b border-[#E3DFD7]"
    >
      {/* Background Photography (Desktop & Mobile) */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Image */}
        <div className="hidden sm:block absolute inset-0">
          <Image
            src={data.images.desktop.src}
            alt={data.images.desktop.alt}
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-[70%_center] md:object-[68%_center] lg:object-[65%_center] select-none pointer-events-none"
          />
        </div>

        {/* Mobile Image */}
        <div className="block sm:hidden absolute inset-0">
          <Image
            src={data.images.mobile?.src || data.images.desktop.src}
            alt={data.images.mobile?.alt || data.images.desktop.alt}
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-[75%_center] select-none pointer-events-none"
          />
        </div>

        {/* Soft Sunlit Gradient Scrim for crisp text readability */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#F7F5F1]/95 via-[#F7F5F1]/75 sm:via-[#F7F5F1]/55 md:via-[#F7F5F1]/30 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* Subtle mobile top fade for transparent header legibility */}
        <div
          className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#F7F5F1]/80 to-transparent sm:hidden pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Narrative Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 xs:px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-20 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20">
        <div className="max-w-[560px] lg:max-w-[620px] flex flex-col items-start">
          
          {/* Eyebrow + Hairline Rule */}
          <div className="flex items-center gap-3 mb-4 sm:mb-5">
            <span className="text-[10px] xs:text-[10.5px] sm:text-[11px] font-[family-name:var(--font-sans)] font-medium tracking-[0.26em] uppercase text-[#717882]">
              {data.eyebrow}
            </span>
            <span className="w-10 sm:w-12 h-[1px] bg-[#171D26]/25" aria-hidden="true" />
          </div>

          {/* Main Title Lines */}
          <h1 className="text-[32px] xs:text-[36px] sm:text-[44px] md:text-[50px] lg:text-[56px] xl:text-[58px] font-[family-name:var(--font-serif)] font-normal tracking-[0.02em] leading-[1.04] text-[#171D26] mb-5 sm:mb-6">
            {data.titleLines.map((line, idx) => (
              <span key={idx} className="block">
                {line}
              </span>
            ))}
          </h1>

          {/* Italic Serif Subtitles */}
          <div className="space-y-0.5 text-[15px] xs:text-[16px] sm:text-[18px] md:text-[19px] font-[family-name:var(--font-serif)] italic text-[#444C57] leading-snug tracking-wide">
            {data.subtitles.map((sub, idx) => (
              <p key={idx}>{sub}</p>
            ))}
          </div>

          {/* Bottom Hairline Tick */}
          <div className="w-9 h-[1px] bg-[#171D26]/30 mt-5 sm:mt-6" aria-hidden="true" />

        </div>
      </div>
    </section>
  );
}