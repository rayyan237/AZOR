import Link from "next/link";
import { siteConfig } from "@/config/site";
import { BeginningImages } from "./BeginningImages";

export function BeginningSection() {
  const { beginning } = siteConfig;

  return (
    <section
      id="world"
      aria-label="The Beginning"
      className="relative w-full bg-[#f5f2ed] text-[#1e242d] py-12 sm:py-16 lg:py-18 px-6 sm:px-10 lg:px-14 xl:px-20 selection:bg-[#1e242d] selection:text-white border-y border-[#e5dfd5]"
    >
      <div className="max-w-[1360px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 lg:gap-8 items-center">
          
          {/* Left Column: Narrative & Typography */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col items-start space-y-4 sm:space-y-5 max-w-md">
            {/* Eyebrow: Montserrat Medium */}
            <p className="text-[10px] sm:text-[11px] font-[family-name:var(--font-sans)] font-medium tracking-[0.26em] uppercase text-[#636e7c]">
              {beginning.eyebrow}
            </p>

            {/* Section Main Title: Cormorant Garamond Regular */}
            <h2 className="text-3xl sm:text-4xl md:text-[38px] lg:text-[42px] font-[family-name:var(--font-serif)] font-normal tracking-[0.06em] leading-[1.12] text-[#1e242d]">
              {beginning.titleLine1}
              <br />
              {beginning.titleLine2}
            </h2>

            {/* Narrative Stanza: Montserrat Regular */}
            <div className="text-[11.5px] sm:text-xs font-[family-name:var(--font-sans)] font-light leading-[1.8] text-[#505a67] space-y-0.5 pt-0.5">
              {beginning.narrative.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>

            {/* Minimal Accent Divider */}
            <div className="w-6 h-[1px] bg-[#9ca6b4] my-1" aria-hidden="true" />

            {/* CTA Button Link: Montserrat SemiBold */}
            <div className="pt-1">
              <Link
                href={beginning.cta.href}
                className="group inline-flex items-center gap-2.5 text-[10.5px] sm:text-[11px] font-[family-name:var(--font-sans)] font-semibold tracking-[0.24em] uppercase text-[#1e242d] border-b border-[#1e242d] pb-1 hover:text-[#505a67] hover:border-[#505a67] transition-colors"
              >
                <span>{beginning.cta.label}</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

          {/* Center Column: Portrait Image Pair */}
          <div className="md:col-span-6 lg:col-span-4 w-full flex justify-center lg:justify-start">
            <BeginningImages />
          </div>

          {/* Right Column: Desktop Tagline (Hidden on Mobile) */}
          <div className="hidden lg:flex lg:col-span-3 items-center justify-end gap-5">
            <div className="flex items-center text-[#8e98a4]" aria-hidden="true">
              <span className="w-7 h-[1px] bg-[#9ba7b5] block" />
              <span className="text-[10px] -ml-1">→</span>
            </div>

            <div className="flex flex-col text-[10px] font-[family-name:var(--font-sans)] tracking-[0.24em] text-[#55606e] leading-[1.7]">
              {beginning.rightTaglines.map((item, idx) => (
                <div key={idx} className="flex flex-col mb-1.5 last:mb-0">
                  <span className="font-light">{item.prefix}</span>
                  <span className="font-semibold text-[#1e242d]">{item.highlight}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Mobile Horizontal Ribbon */}
        <div className="lg:hidden mt-8 pt-5 border-t border-[#e2dcd2] flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[9.5px] sm:text-[10.5px] font-[family-name:var(--font-sans)] tracking-[0.22em] text-[#55606e]">
          {beginning.rightTaglines.map((item, idx) => (
            <div key={idx} className="inline-flex items-center gap-1.5">
              <span className="font-light">{item.prefix}</span>
              <span className="font-semibold text-[#1e242d]">{item.highlight}</span>
              {idx < beginning.rightTaglines.length - 1 && (
                <span className="text-[#a4adb8] mx-1">•</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}