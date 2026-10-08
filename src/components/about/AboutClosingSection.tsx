// src/components/about/AboutClosingSection.tsx
import Image from "next/image";
import Link from "next/link";
import { aboutData } from "@/config/about-data";

export function AboutClosingSection() {
  const { closingCta } = aboutData;

  return (
    <section
      id="discover-collection"
      aria-label="Discover Our Collection"
      className="relative w-full h-[280px] xs:h-[310px] sm:h-[350px] md:h-[380px] lg:h-[400px] overflow-hidden flex items-center bg-[#04070D] text-white select-none border-b border-white/10"
    >
      {/* Background Cinematic Photography Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src={closingCta.image.src}
          alt={closingCta.image.alt}
          fill
          priority={false}
          sizes="100vw"
          className="object-cover object-[70%_center] sm:object-[65%_center] md:object-center select-none pointer-events-none"
        />
        {/* Subtle gradient vignette to ensure crisp typography contrast on left without dimming the jewelry */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#04070D]/85 via-[#04070D]/40 to-transparent pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 xs:px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-20">
        <div className="max-w-[340px] xs:max-w-[380px] sm:max-w-[440px] flex flex-col items-start space-y-3 sm:space-y-3.5">
          
          {/* Eyebrow + Hairline Rule */}
          <div className="flex items-center gap-3">
            <span className="text-[9px] xs:text-[9.5px] sm:text-[10px] font-[family-name:var(--font-sans)] font-medium tracking-[0.24em] uppercase text-zinc-300">
              {closingCta.eyebrow}
            </span>
            <span className="w-8 h-[1px] bg-white/30" aria-hidden="true" />
          </div>

          {/* Heading */}
          <h2 className="text-[26px] xs:text-[30px] sm:text-[34px] md:text-[38px] lg:text-[40px] font-[family-name:var(--font-serif)] font-normal tracking-[0.04em] leading-[1.04] text-white">
            {closingCta.titleLines.map((line, idx) => (
              <span key={idx} className="block">
                {line}
              </span>
            ))}
          </h2>

          {/* Narrative Body Description */}
          <p className="text-[11px] xs:text-[11.5px] sm:text-[12px] font-[family-name:var(--font-sans)] font-light leading-relaxed text-zinc-300 tracking-[0.015em] max-w-[320px]">
            {closingCta.description}
          </p>

          {/* Underlined CTA Link */}
          <div className="pt-2 sm:pt-3">
            <Link
              href={closingCta.cta.href}
              className="group inline-flex items-center gap-2 text-zinc-200 hover:text-white transition-colors duration-300 focus:outline-none"
            >
              <span className="text-[9.5px] xs:text-[10px] sm:text-[10.5px] font-[family-name:var(--font-sans)] font-medium tracking-[0.22em] uppercase border-b border-white/60 group-hover:border-white pb-0.5 transition-all">
                {closingCta.cta.label}
              </span>
              <span className="text-xs transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}