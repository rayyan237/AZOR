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
      className="relative w-full min-h-[92dvh] sm:min-h-[95dvh] lg:min-h-[100dvh] flex items-center bg-[#04070D] text-white overflow-hidden select-none border-b border-white/10"
    >
      {/* Background Raw Photography - No filters, natural tones */}
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

        {/* Minimal soft gradient on the text side only for crisp contrast */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 sm:via-black/25 to-transparent pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Narrative Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 xs:px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-20 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20">
        <div className="max-w-[480px] lg:max-w-[540px] flex flex-col items-start">
          
          {/* Eyebrow + Hairline Rule */}
          <div className="flex items-center gap-3 mb-3.5 sm:mb-4">
            <span className="text-[9.5px] xs:text-[10px] sm:text-[10.5px] font-[family-name:var(--font-sans)] font-medium tracking-[0.24em] uppercase text-zinc-300">
              {data.eyebrow}
            </span>
            <span className="w-8 sm:w-10 h-[1px] bg-white/30" aria-hidden="true" />
          </div>

          {/* Balanced Display Title */}
          <h1 className="text-[26px] xs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-[family-name:var(--font-serif)] font-normal tracking-[0.03em] leading-[1.08] text-white mb-4 sm:mb-5">
            {data.titleLines.map((line, idx) => (
              <span key={idx} className="block">
                {line}
              </span>
            ))}
          </h1>

          {/* Italic Serif Subtitles */}
          <div className="space-y-0.5 text-[13.5px] xs:text-[14px] sm:text-[15.5px] md:text-[16.5px] font-[family-name:var(--font-serif)] italic text-zinc-200 leading-snug tracking-wide">
            {data.subtitles.map((sub, idx) => (
              <p key={idx}>{sub}</p>
            ))}
          </div>

          {/* Bottom Hairline Tick */}
          <div className="w-8 h-[1px] bg-white/30 mt-4 sm:mt-5" aria-hidden="true" />

        </div>
      </div>
    </section>
  );
}