import Link from "next/link";
import { siteConfig } from "@/config/site";
import { BeginningImages } from "./BeginningImages";

export function BeginningSection() {
  const { beginning } = siteConfig;

  return (
    <section
      id="world"
      aria-label="The Beginning"
      className="relative w-full bg-[#f4efea] text-[#1c1d1f] py-16 sm:py-24 lg:py-32 px-6 sm:px-12 lg:px-16 xl:px-20 selection:bg-neutral-800 selection:text-white"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Editorial Narrative Column (Cols 1-5) */}
        <div className="lg:col-span-5 flex flex-col items-start space-y-6 sm:space-y-8 max-w-xl">
          {/* Eyebrow */}
          <p className="text-[10px] sm:text-[11px] font-[family-name:var(--font-sans-clean)] tracking-[0.28em] uppercase text-neutral-600 font-medium">
            {beginning.eyebrow}
          </p>

          {/* Section Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-[family-name:var(--font-serif-brand)] tracking-[0.08em] leading-[1.12] text-neutral-900">
            {beginning.titleLine1}
            <br />
            {beginning.titleLine2}
          </h2>

          {/* Narrative Stanza */}
          <div className="text-xs sm:text-sm font-[family-name:var(--font-sans-clean)] font-light leading-[1.8] text-neutral-700 space-y-1">
            <p>{beginning.narrative[0]}</p>
            <p>{beginning.narrative[1]}</p>
            <p>{beginning.narrative[2]}</p>
            <p>{beginning.narrative[3]}</p>
          </div>

          {/* Interactive CTA Link */}
          <div className="pt-2 sm:pt-4">
            <Link
              href={beginning.cta.href}
              className="group inline-flex items-center gap-3 text-[11px] font-[family-name:var(--font-sans-clean)] tracking-[0.24em] uppercase text-neutral-900 font-medium pb-1.5 border-b border-neutral-900 hover:opacity-70 transition-opacity"
            >
              <span>{beginning.cta.label}</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>

        {/* Center Dual Images Column (Cols 6-10) */}
        <div className="lg:col-span-5 w-full">
          <BeginningImages />
        </div>

        {/* Right Poetic Column (Cols 11-12) */}
        <div className="lg:col-span-2 flex items-center lg:justify-end gap-5 sm:gap-6 pt-4 lg:pt-0">
          {/* Connecting Arrow Indicator */}
          <span 
            className="w-8 sm:w-10 h-[1px] bg-neutral-400 block relative after:content-[''] after:absolute after:right-0 after:top-[-2px] after:w-1.5 after:h-1.5 after:border-t after:border-r after:border-neutral-400 after:rotate-45"
            aria-hidden="true" 
          />

          {/* Vertical Taglines */}
          <div className="flex flex-col text-[10px] sm:text-[11px] font-[family-name:var(--font-sans-clean)] font-light tracking-[0.22em] text-neutral-800 leading-[1.6]">
            {beginning.rightTaglines.map((word, idx) => (
              <span key={idx} className={idx % 2 === 1 ? "font-normal mb-1.5" : ""}>
                {word}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}