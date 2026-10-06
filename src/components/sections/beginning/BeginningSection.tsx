import Link from "next/link";
import { siteConfig } from "@/config/site";
import { BeginningImages } from "./BeginningImages";

export function BeginningSection() {
  const { beginning } = siteConfig;

  return (
    <section
      id="world"
      aria-label="The Beginning"
      /* Slim vertical padding: py-12 to py-16 max to replicate reference proportions */
      className="relative w-full bg-[#f5f2ed] text-[#1e242d] py-10 sm:py-12 md:py-14 lg:py-16 px-6 sm:px-10 lg:px-14 xl:px-20 selection:bg-[#1e242d] selection:text-white border-y border-[#e5dfd5]"
    >
      <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
        
        {/* Left Column: Narrative & Typography (Cols 1-5) */}
        <div className="lg:col-span-5 flex flex-col items-start space-y-4 sm:space-y-5 max-w-md">
          {/* Eyebrow */}
          <p className="text-[10px] sm:text-[11px] font-[family-name:var(--font-sans-clean)] tracking-[0.26em] uppercase text-[#636e7c] font-normal">
            {beginning.eyebrow}
          </p>

          {/* Section Main Title: Sharp, high-fashion transitional serif */}
          <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-[family-name:var(--font-serif-brand)] font-normal tracking-[0.06em] leading-[1.12] text-[#1e242d]">
            {beginning.titleLine1}
            <br />
            {beginning.titleLine2}
          </h2>

          {/* Narrative Stanza with subtle muted slate tone */}
          <div className="text-[11px] sm:text-xs font-[family-name:var(--font-sans-clean)] font-light leading-[1.75] text-[#505a67] space-y-0.5 pt-1">
            {beginning.narrative.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>

          {/* Minimal Accent Divider */}
          <div className="w-6 h-[1px] bg-[#9ca6b4] my-1" aria-hidden="true" />

          {/* CTA Link with Arrow */}
          <div className="pt-1">
            <Link
              href={beginning.cta.href}
              className="group inline-flex items-center gap-2.5 text-[10px] sm:text-[11px] font-[family-name:var(--font-sans-clean)] tracking-[0.24em] uppercase text-[#1e242d] font-medium border-b border-[#1e242d] pb-1 hover:text-[#505a67] hover:border-[#505a67] transition-colors"
            >
              <span>{beginning.cta.label}</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>

        {/* Center Column: Dual Imagery (Cols 6-9) */}
        <div className="lg:col-span-4 w-full flex justify-center">
          <BeginningImages />
        </div>

        {/* Right Column: Poetic Tagline Rhythm (Cols 10-12) */}
        <div className="lg:col-span-3 flex items-center justify-start lg:justify-end gap-4 sm:gap-6 pt-2 lg:pt-0">
          {/* Subtle directional connector line */}
          <div className="flex items-center text-[#7e8b9b]" aria-hidden="true">
            <span className="w-6 sm:w-8 h-[1px] bg-[#9ba7b5] block" />
            <span className="text-[11px] -ml-1">→</span>
          </div>

          {/* Stacked Minimalist Words */}
          <div className="flex flex-col text-[10px] sm:text-[10.5px] font-[family-name:var(--font-sans-clean)] tracking-[0.22em] text-[#55606e] leading-[1.65]">
            {beginning.rightTaglines.map((item, idx) => (
              <div key={idx} className="flex flex-col mb-1.5 last:mb-0">
                <span className="font-light">{item.prefix}</span>
                <span className="font-normal text-[#1e242d]">{item.highlight}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}