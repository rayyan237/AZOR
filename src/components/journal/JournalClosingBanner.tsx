// src/components/journal/JournalClosingBanner.tsx
import Image from "next/image";
import Link from "next/link";
import { JournalBannerData } from "@/config/journal-data";

interface JournalClosingBannerProps {
  data: JournalBannerData;
}

export function JournalClosingBanner({ data }: JournalClosingBannerProps) {
  return (
    <section
      id="journal-banner"
      aria-label="Journal Philosophy Banner"
      className="relative w-full h-[320px] xs:h-[350px] sm:h-[380px] md:h-[420px] overflow-hidden flex items-center bg-[#04070D] text-white select-none border-t border-b border-white/10"
    >
      {/* Background Raw Editorial Asset */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Image */}
        <div className="hidden sm:block absolute inset-0">
          <Image
            src={data.images.desktop.src}
            alt={data.images.desktop.alt}
            fill
            quality={95}
            priority={false}
            sizes="100vw"
            className="object-cover object-[75%_center] md:object-center select-none pointer-events-none"
          />
        </div>

        {/* Mobile Image */}
        <div className="block sm:hidden absolute inset-0">
          <Image
            src={data.images.mobile?.src || data.images.desktop.src}
            alt={data.images.mobile?.alt || data.images.desktop.alt}
            fill
            quality={95}
            priority={false}
            sizes="100vw"
            className="object-cover object-[80%_center] select-none pointer-events-none"
          />
        </div>

        {/* Text legibility edge gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#04070D]/95 via-[#04070D]/55 sm:via-[#04070D]/40 to-transparent pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Narrative Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 xs:px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-20 flex items-center">
        <div className="max-w-[340px] xs:max-w-[380px] sm:max-w-[440px] flex flex-col items-start">
          
          {/* Top Hairline Tick */}
          <div className="w-8 h-[1px] bg-white/30 mb-4 sm:mb-5" aria-hidden="true" />

          {/* Heading */}
          <h2 className="text-[24px] xs:text-[28px] sm:text-[32px] md:text-[36px] font-[family-name:var(--font-serif)] font-normal tracking-[0.03em] leading-[1.08] text-white mb-3 sm:mb-4">
            {data.titleLines.map((line, idx) => (
              <span key={idx} className="block">
                {line}
              </span>
            ))}
          </h2>

          {/* Subtitle */}
          <p className="text-[12px] xs:text-[12.5px] sm:text-[13px] font-[family-name:var(--font-sans)] font-light leading-relaxed text-zinc-300 tracking-[0.015em] mb-5 sm:mb-6 max-w-[360px]">
            {data.description}
          </p>

          {/* CTA Link */}
          <Link
            href={data.ctaHref}
            className="group inline-flex items-center gap-2 text-[10px] xs:text-[10.5px] sm:text-[11px] font-[family-name:var(--font-sans)] font-medium tracking-[0.24em] uppercase text-white hover:text-zinc-300 transition-colors focus:outline-none"
          >
            <span>{data.ctaText}</span>
            <span
              className="transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </Link>

        </div>
      </div>
    </section>
  );
}