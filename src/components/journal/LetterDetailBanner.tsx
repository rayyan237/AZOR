// src/components/journal/LetterDetailBanner.tsx
import Image from "next/image";
import Link from "next/link";

export function LetterDetailBanner() {
  return (
    <section
      id="more-letters-banner"
      aria-label="More Letters and Perspectives"
      className="relative w-full h-[220px] xs:h-[240px] sm:h-[260px] md:h-[280px] overflow-hidden flex items-center bg-[#04070D] text-white select-none border-b border-white/10"
    >
      {/* Background Raw Editorial Asset */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/journal/letter-banner-dark.webp"
          alt="Dark silk fabric with Azor fine jewelry in ambient light"
          fill
          quality={95}
          sizes="100vw"
          className="object-cover object-center select-none pointer-events-none"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#04070D]/90 via-[#04070D]/50 to-transparent pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-18 2xl:px-20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 sm:gap-6">
        
        {/* Left Narrative */}
        <div className="flex flex-col items-start space-y-1 sm:space-y-1.5">
          <h2 className="text-[20px] xs:text-[22px] sm:text-[24px] md:text-[28px] font-[family-name:var(--font-serif)] font-normal tracking-[0.03em] leading-tight text-[#F8FAFC]">
            MORE STORIES,
            <br />
            MORE PERSPECTIVES.
          </h2>
          <p className="text-[12px] xs:text-[12.5px] sm:text-[13px] font-[family-name:var(--font-serif)] italic text-zinc-300 tracking-wide">
            Explore all letters from the world of Azor.
          </p>
        </div>

        {/* Right CTA Button */}
        <div>
          <Link
            href="/journal"
            className="inline-flex items-center gap-2 border border-white/40 px-5 sm:px-6 py-2.5 sm:py-3 text-[10px] xs:text-[10.5px] font-[family-name:var(--font-sans)] font-medium tracking-[0.24em] uppercase text-white hover:bg-white hover:text-[#04070D] hover:border-white transition-all duration-300 focus:outline-none"
          >
            <span>VIEW ALL LETTERS</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}