import Link from "next/link";
import { siteConfig } from "@/config/site";
import { LetterCard } from "./LetterCard";

export function LettersSection() {
  const { letters } = siteConfig;

  return (
    <section
      id="letters-archive"
      aria-label="Azor Letters"
      /* 
        Ultra-slim section height:
        Minimal vertical padding py-7 to py-11 matching reference banner proportions
      */
      className="relative w-full bg-[#E8EAEB] text-[#1B222C] border-b border-[#E2DDD3] py-7 xs:py-8 sm:py-9 md:py-10 lg:py-11 px-5 xs:px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-20 selection:bg-[#1B222C] selection:text-white"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-start justify-between gap-6 sm:gap-8 lg:gap-8 xl:gap-12">
        
        {/* Left Column: Heading, Description & Bottom-aligned CTA */}
        <div className="w-full lg:w-[36%] xl:w-[35%] shrink-0 flex flex-col justify-between self-stretch">
          <div className="flex flex-col items-start space-y-1 xs:space-y-1.5">
            {/* Main Section Title: Delicate Cormorant Garamond */}
            <h2 className="text-[20px] xs:text-[22px] sm:text-[24px] md:text-[26px] font-[family-name:var(--font-serif)] font-normal tracking-[0.03em] text-[#1B222C] leading-none">
              {letters.title}
            </h2>

            {/* Subtitle / Description: Small, restrained single/two-line text */}
            <p className="text-[10px] xs:text-[10.5px] sm:text-[11px] font-[family-name:var(--font-sans)] font-light text-[#525A67] tracking-[0.02em] leading-normal pt-0.5">
              {letters.description}
            </p>
          </div>

          {/* CTA Link pinned at the bottom on desktop */}
          <div className="pt-4 xs:pt-5 sm:pt-6 lg:pt-8 flex flex-col items-start">
            <div className="w-4 h-[1px] bg-[#1B222C]/20 mb-2" aria-hidden="true" />
            <Link
              href={letters.cta.href}
              className="group inline-flex items-center gap-1.5 text-[9px] xs:text-[9.5px] font-[family-name:var(--font-sans)] font-medium tracking-[0.22em] uppercase text-[#1B222C] border-b border-[#1B222C] pb-0.5 hover:text-[#525A67] hover:border-[#525A67] transition-colors"
            >
              <span>{letters.cta.label}</span>
              <span className="text-[10px] transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Right Column: 4 Small Rectangular Cards */}
        <div className="w-full lg:w-[64%] xl:w-[65%]">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 xs:gap-3.5 sm:gap-3 lg:gap-3.5 xl:gap-4 w-full items-start">
            {letters.items.map((item) => (
              <LetterCard key={item.id} item={item} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}