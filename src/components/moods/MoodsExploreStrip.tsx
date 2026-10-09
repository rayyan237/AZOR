// src/components/moods/MoodsExploreStrip.tsx
import Image from "next/image";
import Link from "next/link";
import { moodsData, CANONICAL_MOODS } from "@/config/moods-data";

interface MoodsExploreStripProps {
  currentSlug: string;
}

export function MoodsExploreStrip({ currentSlug }: MoodsExploreStripProps) {
  const activeSlug = currentSlug.toLowerCase();

  return (
    <section
      id="other-moods-strip"
      aria-label="Other Moods You Might Like"
      className="relative w-full bg-[#F6F4F0] text-[#1B222C] border-b border-[#E3DFD7] py-10 xs:py-12 sm:py-14 md:py-16 px-5 xs:px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-20 select-none overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col space-y-6 sm:space-y-8">
        {/* Section Header (No explore link) */}
        <div className="flex flex-col items-start space-y-1 sm:space-y-1.5">
          <p className="text-[10px] xs:text-[10.5px] sm:text-[11px] font-[family-name:var(--font-sans)] font-medium tracking-[0.24em] uppercase text-[#737A84]">
            OTHER MOODS
          </p>
          <h2 className="text-[24px] xs:text-[28px] sm:text-[32px] md:text-[36px] font-[family-name:var(--font-serif)] font-normal tracking-[0.03em] leading-tight text-[#1B222C]">
            YOU MIGHT ALSO LIKE
          </h2>
        </div>

        {/* 5 Canonical Moods Grid: 2 columns on mobile, 5 columns on desktop */}
        <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 xs:gap-4 sm:gap-5 lg:gap-6">
          {CANONICAL_MOODS.map((item) => {
            const mood = moodsData[item.slug];
            const isActive = item.slug === activeSlug;

            if (!mood) return null;

            const thumbnailSrc =
              mood.thumbnail?.src ||
              mood.images?.desktop?.src ||
              "/images/placeholder-mood.webp";
            const thumbnailAlt = mood.thumbnail?.alt || mood.title;

            return (
              <Link
                key={item.slug}
                href={`/moods/${item.slug}`}
                aria-current={isActive ? "page" : undefined}
                className="group flex flex-col space-y-2.5 cursor-pointer focus:outline-none"
              >
                {/* Mood Thumbnail Image */}
                <div
                  className={`relative w-full aspect-[4/3] xs:aspect-[1.3/1] sm:aspect-[1.25/1] overflow-hidden bg-[#0D121A] border transition-all duration-300 ${
                    isActive
                      ? "border-[#1B222C] ring-1 ring-[#1B222C]"
                      : "border-[#DDD9D0] group-hover:border-[#1B222C]/40"
                  }`}
                >
                  <Image
                    src={thumbnailSrc}
                    alt={thumbnailAlt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover object-center select-none pointer-events-none group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {isActive && (
                    <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-white shadow-sm" />
                  )}
                </div>

                {/* Mood Title Label */}
                <div className="flex items-center justify-between pt-0.5">
                  <span
                    className={`text-[10px] xs:text-[10.5px] sm:text-[11px] font-[family-name:var(--font-sans)] tracking-[0.22em] uppercase transition-colors duration-200 ${
                      isActive
                        ? "text-[#1B222C] font-semibold border-b border-[#1B222C] pb-0.5"
                        : "text-[#555D68] group-hover:text-[#1B222C] font-medium"
                    }`}
                  >
                    {item.label}
                  </span>

                  {isActive && (
                    <span className="text-[9px] font-[family-name:var(--font-sans)] uppercase tracking-wider text-[#737A84]">
                      CURRENT
                    </span>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}