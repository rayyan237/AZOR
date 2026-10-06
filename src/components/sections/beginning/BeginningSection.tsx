import Link from "next/link";
import { siteConfig } from "@/config/site";
import { BeginningImages } from "./BeginningImages";

export function BeginningSection() {
  const { beginning } = siteConfig;

  return (
    <section
      id="world"
      aria-label="The Beginning"
      /* Exact background bone/sand color from reference design */
      className="relative w-full bg-[#EFECE6] text-[#19202A] py-12 sm:py-14 md:py-16 lg:py-20 px-6 sm:px-10 lg:px-14 xl:px-18 selection:bg-[#19202A] selection:text-white border-y border-[#E4DFD6]"
    >
      <div className="max-w-[1380px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-center">
          
          {/* Left Column: Narrative & Typography (Cols 1-5) */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-4 sm:space-y-5 max-w-[430px]">
            {/* Eyebrow: 01 / THE BEGINNING */}
            <p className="text-[10px] sm:text-[11px] font-[family-name:var(--font-sans)] font-medium tracking-[0.28em] uppercase text-[#6E7582]">
              {beginning.eyebrow}
            </p>

            {/* Section Main Title: Cormorant Garamond with exact font scale */}
            <h2 className="text-[34px] sm:text-[42px] md:text-[48px] lg:text-[50px] xl:text-[54px] font-[family-name:var(--font-serif)] font-normal tracking-[0.03em] leading-[1.08] text-[#19202A]">
              {beginning.titleLine1}
              <br />
              {beginning.titleLine2}
            </h2>

            {/* Narrative Stanza */}
            <div className="text-[12px] sm:text-[12.5px] md:text-[13px] font-[family-name:var(--font-sans)] font-light leading-[1.8] text-[#555C68] space-y-0.5 pt-1">
              {beginning.narrative.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>

            {/* Short Divider Line above CTA */}
            <div className="w-7 h-[1px] bg-[#B0B6BF] mt-2 mb-1" aria-hidden="true" />

            {/* CTA Button Link */}
            <div className="pt-0.5">
              <Link
                href={beginning.cta.href}
                className="group inline-flex items-center gap-2.5 text-[10.5px] sm:text-[11px] font-[family-name:var(--font-sans)] font-semibold tracking-[0.24em] uppercase text-[#19202A] border-b border-[#19202A] pb-1 hover:text-[#555C68] hover:border-[#555C68] transition-colors"
              >
                <span>{beginning.cta.label}</span>
                <span className="text-xs transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

          {/* Center Column: Portrait Dual Image Spread (Cols 6-9) */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-start">
            <BeginningImages />
          </div>

          {/* Right Column: Desktop Tagline (Cols 10-12, Hidden on Mobile) */}
          <div className="hidden lg:flex lg:col-span-2 items-center justify-start gap-4 xl:gap-5 pl-2">
            {/* Fine Stem Arrow */}
            <div className="flex items-center text-[#959DAA]" aria-hidden="true">
              <span className="w-8 xl:w-10 h-[1px] bg-[#A4ACB8] block" />
              <span className="text-[11px] -ml-1">→</span>
            </div>

            {/* Vertical Stacked Couplets */}
            <div className="flex flex-col text-[10px] xl:text-[10.5px] font-[family-name:var(--font-sans)] tracking-[0.26em] text-[#616874] leading-[1.65]">
              {beginning.rightTaglines.map((item, idx) => (
                <div key={idx} className="flex flex-col mb-2 last:mb-0">
                  <span className="font-light">{item.prefix}</span>
                  <span className="font-medium text-[#19202A]">{item.highlight}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Mobile Integrated Tagline Strip */}
        <div className="lg:hidden mt-8 pt-5 border-t border-[#DED9D0] flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[9.5px] sm:text-[10px] font-[family-name:var(--font-sans)] tracking-[0.22em] text-[#616874]">
          {beginning.rightTaglines.map((item, idx) => (
            <div key={idx} className="inline-flex items-center gap-1.5">
              <span className="font-light">{item.prefix}</span>
              <span className="font-semibold text-[#19202A]">{item.highlight}</span>
              {idx < beginning.rightTaglines.length - 1 && (
                <span className="text-[#A4ACB8] mx-1">•</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}