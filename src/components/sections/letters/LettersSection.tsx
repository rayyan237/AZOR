import Link from "next/link";
import { siteConfig } from "@/config/site";
import { LetterCard } from "./LetterCard";

export function LettersSection() {
  const { letters } = siteConfig;

  return (
    <section
      id="letters-archive"
      aria-label="Azor Letters"
      /* Slim editorial banner height matching Beginning, Archive, and Azor Girl */
      className="relative w-full bg-[#EFECE6] text-[#1B222C] border-b border-[#E2DDD3] py-10 xs:py-12 sm:py-14 md:py-16 lg:py-18 xl:py-20 px-5 xs:px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-20 selection:bg-[#1B222C] selection:text-white"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-start justify-between gap-8 sm:gap-10 lg:gap-10 xl:gap-14">
        
        {/* Left Column: Heading, Description & CTA */}
        <div className="w-full lg:w-[28%] xl:w-[26%] shrink-0 flex flex-col justify-between self-stretch">
          <div className="flex flex-col items-start space-y-2 xs:space-y-2.5">
            {/* Main Section Title: Cormorant Garamond */}
            <h2 className="text-[24px] xs:text-[27px] sm:text-[30px] md:text-[32px] lg:text-[34px] font-[family-name:var(--font-serif)] font-normal tracking-[0.03em] text-[#1B222C] leading-none">
              {letters.title}
            </h2>

            {/* Subtitle / Description */}
            <p className="text-[11px] xs:text-[11.5px] sm:text-[12px] font-[family-name:var(--font-sans)] font-light text-[#525A67] tracking-[0.02em] leading-relaxed max-w-[280px]">
              {letters.description}
            </p>
          </div>

          {/* CTA Link pinned at the bottom on desktop */}
          <div className="pt-6 lg:pt-8 flex flex-col items-start">
            <div className="w-5 h-[1px] bg-[#1B222C]/20 mb-2.5" aria-hidden="true" />
            <Link
              href={letters.cta.href}
              className="group inline-flex items-center gap-2 text-[9.5px] xs:text-[10px] sm:text-[10.5px] font-[family-name:var(--font-sans)] font-semibold tracking-[0.24em] uppercase text-[#1B222C] border-b border-[#1B222C] pb-0.5 hover:text-[#525A67] hover:border-[#525A67] transition-colors"
            >
              <span>{letters.cta.label}</span>
              <span className="text-[11px] transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Right Column: 4 Letter Cards */}
        <div className="w-full lg:w-[72%] xl:w-[74%]">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 xs:gap-4 sm:gap-3.5 lg:gap-4 xl:gap-5 w-full items-start">
            {letters.items.map((item) => (
              <LetterCard key={item.id} item={item} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}