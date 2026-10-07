import Link from "next/link";
import { siteConfig } from "@/config/site";
import { BeginningImages } from "./BeginningImages";

export function BeginningSection() {
  const { beginning } = siteConfig;

  return (
    <section
      id="world"
      aria-label="The Beginning"
      /* Warm alabaster canvas with matching subtle structural borders */
      className="relative w-full bg-[#E8EAEB] text-[#1D232C] py-12 sm:py-14 md:py-16 lg:py-20 px-6 sm:px-10 lg:px-14 xl:px-18 selection:bg-[#1D232C] selection:text-white border-y border-[#E2DDD3]"
    >
      <div className="max-w-[1380px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-center">
          
          {/* Left Column: Narrative & Typography (Cols 1-5) */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-4 sm:space-y-5 max-w-[430px]">
            {/* Eyebrow: 01 / THE BEGINNING */}
            <p className="text-[10px] sm:text-[11px] font-[family-name:var(--font-sans)] font-medium tracking-[0.28em] uppercase text-[#747B86]">
              {beginning.eyebrow}
            </p>

            {/* Section Main Title: Cormorant Garamond in sampled deep midnight slate */}
            <h2 className="text-[34px] sm:text-[42px] md:text-[48px] lg:text-[50px] xl:text-[54px] font-[family-name:var(--font-serif)] font-normal tracking-[0.03em] leading-[1.08] text-[#1D232C]">
              {beginning.titleLine1}
              <br />
              {beginning.titleLine2}
            </h2>

            {/* Narrative Stanza in exact charcoal slate */}
            <div className="text-[12px] sm:text-[12.5px] md:text-[13px] font-[family-name:var(--font-sans)] font-light leading-[1.8] text-[#4E5562] space-y-0.5 pt-1">
              {beginning.narrative.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>

            {/* Short Divider Line above CTA */}
            <div className="w-7 h-[1px] bg-[#B4BAC3] mt-2 mb-1" aria-hidden="true" />

            {/* CTA Button Link */}
            <div className="pt-0.5">
              <Link
                href={beginning.cta.href}
                className="group inline-flex items-center gap-2.5 text-[10.5px] sm:text-[11px] font-[family-name:var(--font-sans)] font-semibold tracking-[0.24em] uppercase text-[#1D232C] border-b border-[#1D232C] pb-1 hover:text-[#4E5562] hover:border-[#4E5562] transition-colors"
              >
                <span>{beginning.cta.label}</span>
                <span className="text-xs transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

          {/* Center Column: Portrait Dual Image Spread (Cols 6-10) */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-start">
            <BeginningImages />
          </div>

          {/* Right Column: Desktop Tagline (Cols 11-12, Hidden on Mobile) */}
          <div className="hidden lg:flex lg:col-span-2 items-center justify-start gap-4 xl:gap-5 pl-2">
            {/* Fine Stem Arrow */}
            <div className="flex items-center text-[#9CA3AF]" aria-hidden="true">
              <span className="w-8 xl:w-10 h-[1px] bg-[#9CA3AF] block" />
              <span className="text-[11px] -ml-1">→</span>
            </div>

            {/* Vertical Stacked Couplets */}
            <div className="flex flex-col text-[10px] xl:text-[10.5px] font-[family-name:var(--font-sans)] tracking-[0.26em] leading-[1.65]">
              {beginning.rightTaglines.map((item, idx) => (
                <div key={idx} className="flex flex-col mb-2 last:mb-0">
                  <span className="font-light text-[#747B86]">{item.prefix}</span>
                  <span className="font-medium text-[#1D232C]">{item.highlight}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Mobile Integrated Tagline Strip */}
        <div className="lg:hidden mt-8 pt-5 border-t border-[#DED9D0] flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[9.5px] sm:text-[10px] font-[family-name:var(--font-sans)] tracking-[0.22em]">
          {beginning.rightTaglines.map((item, idx) => (
            <div key={idx} className="inline-flex items-center gap-1.5">
              <span className="font-light text-[#747B86]">{item.prefix}</span>
              <span className="font-semibold text-[#1D232C]">{item.highlight}</span>
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