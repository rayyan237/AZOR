import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArchiveCard } from "./ArchiveCard";

export function ArchiveSection() {
  const { archive } = siteConfig;

  return (
    <section
      id="archive"
      aria-label="The Azor Archive"
      /* Exact bone/alabaster canvas with restrained vertical padding matching reference */
      className="relative w-full bg-[#EFECE6] text-[#1B222C] py-8 xs:py-10 sm:py-12 md:py-14 lg:py-16 px-5 xs:px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-20 border-b border-[#E2DDD3] selection:bg-[#1B222C] selection:text-white"
    >
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header Block: Refined editorial font sizes & clean hierarchy */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-6 mb-5 xs:mb-6 sm:mb-8 lg:mb-10">
          <div className="flex flex-col items-start space-y-1">
            {/* Main Section Title: Cormorant Garamond in accurate restrained scale */}
            <h2 className="text-[22px] xs:text-[25px] sm:text-[28px] md:text-[30px] lg:text-[32px] xl:text-[34px] font-[family-name:var(--font-serif)] font-normal tracking-[0.03em] text-[#1B222C] leading-none">
              {archive.title}
            </h2>

            {/* Eyebrow: Tiny uppercase sans with generous letter-spacing */}
            <p className="text-[9px] xs:text-[9.5px] sm:text-[10px] font-[family-name:var(--font-sans)] font-medium tracking-[0.24em] uppercase text-[#6E7684] pt-0.5">
              {archive.subtitle}
            </p>

            {/* Narrative Description: Small, delicate editorial text */}
            <p className="text-[10.5px] xs:text-[11px] sm:text-[11.5px] font-[family-name:var(--font-sans)] font-light text-[#525A67] tracking-[0.02em] leading-normal pt-0.5">
              {archive.description}
            </p>
          </div>

          {/* Right Action: EXPLORE ALL */}
          <div className="self-start sm:self-end pt-1 sm:pt-0">
            <Link
              href={archive.cta.href}
              className="group inline-flex items-center gap-2 text-[9px] xs:text-[9.5px] sm:text-[10px] font-[family-name:var(--font-sans)] font-medium tracking-[0.24em] uppercase text-[#1B222C] border-b border-[#1B222C] pb-0.5 hover:text-[#525A67] hover:border-[#525A67] transition-colors"
            >
              <span>{archive.cta.label}</span>
              <span className="text-[11px] transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* 
          5-Card Showcase:
          - Desktop (lg/xl/2xl): Exactly 5 square cards with tight, uniform gaps
          - Mobile & Tablet (< lg): Smooth edge-to-edge swipe rail with touch momentum
        */}
        <div className="relative -mx-5 xs:-mx-6 sm:-mx-8 md:-mx-10 lg:mx-0">
          <div className="flex lg:grid lg:grid-cols-5 gap-2.5 xs:gap-3 sm:gap-3.5 lg:gap-3 xl:gap-3.5 overflow-x-auto lg:overflow-x-visible px-5 xs:px-6 sm:px-8 md:px-10 lg:px-0 pb-2 lg:pb-0 scroll-smooth snap-x snap-mandatory touch-pan-x [-webkit-overflow-scrolling:touch] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {archive.items.map((item) => (
              <div
                key={item.id}
                className="w-[58vw] xs:w-[48vw] sm:w-[32vw] md:w-[24vw] lg:w-auto snap-start shrink-0 lg:shrink"
              >
                <ArchiveCard item={item} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}