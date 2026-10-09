// src/components/moods/MoodClosingBanner.tsx
import Image from "next/image";
import Link from "next/link";
import { MoodData, CANONICAL_MOODS } from "@/config/moods-data";

interface MoodClosingBannerProps {
  mood: MoodData;
}

export function MoodClosingBanner({ mood }: MoodClosingBannerProps) {
  const currentSlug = mood.slug.toLowerCase();
  const { banner } = mood;

  return (
    <section
      id="mood-collection-banner"
      aria-label="Mood Collection Navigator"
      className="relative w-full h-[320px] xs:h-[350px] sm:h-[380px] md:h-[420px] overflow-hidden flex items-center bg-[#04070D] text-white select-none border-t border-b border-white/10"
    >
      {/* Background Raw Editorial Assets (Desktop & Mobile) */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Image (>= sm) */}
        <div className="hidden sm:block absolute inset-0">
          <Image
            src={banner.images.desktop.src}
            alt={banner.images.desktop.alt}
            fill
            quality={95}
            priority={false}
            sizes="100vw"
            className="object-cover object-[65%_center] md:object-center select-none pointer-events-none"
          />
        </div>

        {/* Mobile Image (< sm) */}
        <div className="block sm:hidden absolute inset-0">
          <Image
            src={banner.images.mobile?.src || banner.images.desktop.src}
            alt={banner.images.mobile?.alt || banner.images.desktop.alt}
            fill
            quality={95}
            priority={false}
            sizes="100vw"
            className="object-cover object-[70%_center] select-none pointer-events-none"
          />
        </div>

        {/* Edge contrast gradient strictly to preserve narrative legibility */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#04070D]/90 via-[#04070D]/40 to-transparent pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 xs:px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-20 flex items-center justify-between">
        
        {/* Left Narrative Cluster (No Explore Link) */}
        <div className="max-w-[340px] xs:max-w-[380px] sm:max-w-[440px] flex flex-col items-start">
          {/* Eyebrow */}
          <p className="text-[10px] xs:text-[10.5px] sm:text-[11px] font-[family-name:var(--font-sans)] font-medium tracking-[0.24em] uppercase text-zinc-400 mb-2.5 sm:mb-3">
            {banner.eyebrow}
          </p>

          {/* Heading */}
          <h2 className="text-[26px] xs:text-[30px] sm:text-[34px] md:text-[38px] lg:text-[40px] font-[family-name:var(--font-serif)] font-normal tracking-[0.03em] leading-[1.05] text-white mb-3 sm:mb-4">
            {banner.titleLines.map((line, idx) => (
              <span key={idx} className="block">
                {line}
              </span>
            ))}
          </h2>

          {/* Hairline Separator */}
          <div className="w-8 h-[1px] bg-white/25 mb-3 sm:mb-4" aria-hidden="true" />

          {/* Description */}
          <p className="text-[12px] xs:text-[12.5px] sm:text-[13px] font-[family-name:var(--font-sans)] font-light leading-relaxed text-zinc-300 tracking-[0.015em] max-w-[320px]">
            {banner.description}
          </p>
        </div>

        {/* Right Moods Navigation Rail (Only 5 canonical moods with active indicator) */}
        <div className="hidden sm:flex flex-col items-start border-l border-white/20 pl-6 md:pl-8 lg:pl-10 space-y-3 md:space-y-3.5">
          {CANONICAL_MOODS.map((item) => {
            const isActive = item.slug === currentSlug;

            return (
              <Link
                key={item.slug}
                href={`/moods/${item.slug}`}
                className="group relative inline-flex items-center transition-colors duration-200 focus:outline-none"
              >
                <span
                  className={`text-[11px] xs:text-[11.5px] sm:text-[12px] font-[family-name:var(--font-sans)] tracking-[0.22em] uppercase transition-colors duration-200 ${
                    isActive
                      ? "text-white font-medium border-b border-white pb-0.5"
                      : "text-zinc-500 hover:text-zinc-300 font-light"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}