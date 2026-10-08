import Image from "next/image";
import { ArchivePieceDetail } from "@/config/archive-pieces";

interface ProductShowcaseSectionProps {
  piece: ArchivePieceDetail;
}

export function ProductShowcaseSection({ piece }: ProductShowcaseSectionProps) {
  // Use product details with fallback
  const details = piece.details || [
    { label: "MATERIAL", value: "925 Sterling Silver" },
    { label: "FINISH", value: "Rhodium Plated" },
    { label: "STONE", value: "Cubic Zirconia" },
    { label: "LENGTH / FIT", value: '16" + 2" Extender' },
    { label: "WEIGHT", value: "~ 3.2 g" },
  ];

  // Use product care instructions with fallback
  const careInstructions = piece.care || [
    "Keep away from water, perfume and harsh chemicals.",
    "Store in a soft pouch.",
    "Clean with a soft, dry cloth.",
  ];

  return (
    <section
      aria-label="Piece Aesthetics and Details"
      className="relative w-full bg-[#EFECE6] text-[#1B222C] border-b border-[#D5CFBF] py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 px-5 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 select-none"
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
        
        {/* ================= LEFT COLUMN: THE MOOD (lg:col-span-3) ================= */}
        <div className="lg:col-span-3 flex flex-col items-start space-y-3 sm:space-y-4">
          <p className="text-[9px] xs:text-[9.5px] sm:text-[10px] font-[family-name:var(--font-sans)] font-medium tracking-[0.26em] uppercase text-[#747B86]">
            THE MOOD
          </p>

          <h2 className="text-[26px] xs:text-[30px] sm:text-[34px] xl:text-[38px] font-[family-name:var(--font-serif)] font-normal tracking-[0.03em] leading-[1.08] text-[#1B222C]">
            {piece.mood.titleLines.map((word, idx) => (
              <span key={idx} className="block">
                {word}
              </span>
            ))}
          </h2>

          <div className="w-8 h-[1px] bg-[#1B222C]/25 my-1" aria-hidden="true" />

          <p className="text-[11px] xs:text-[11.5px] sm:text-[12px] font-[family-name:var(--font-sans)] font-light leading-[1.75] text-[#525A67] tracking-[0.02em] max-w-[280px]">
            {piece.mood.description}
          </p>
        </div>

        {/* ================= CENTER COLUMN: GALLERY (lg:col-span-6) ================= */}
        <div className="lg:col-span-6 w-full flex flex-col sm:flex-row gap-2.5 xs:gap-3 sm:gap-3.5 h-[420px] xs:h-[460px] sm:h-[400px] md:h-[440px] lg:h-[420px] xl:h-[460px]">
          
          {/* Main Large Image */}
          <div className="relative w-full sm:w-[70%] h-[72%] sm:h-full overflow-hidden bg-[#070D18] shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
            <Image
              src={piece.gallery.main.src}
              alt={piece.gallery.main.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
              className="object-cover object-center pointer-events-none select-none hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* 3 Vertically Stacked Thumbnails */}
          <div className="flex sm:flex-col gap-2.5 xs:gap-3 sm:gap-3.5 w-full sm:w-[30%] h-[28%] sm:h-full">
            {piece.gallery.thumbnails.slice(0, 3).map((thumb, index) => (
              <div
                key={index}
                className="relative flex-1 w-full h-full overflow-hidden bg-[#070D18] shadow-[0_2px_10px_rgba(0,0,0,0.06)]"
              >
                <Image
                  src={thumb.src}
                  alt={thumb.alt}
                  fill
                  sizes="(max-width: 640px) 33vw, 140px"
                  className="object-cover object-center pointer-events-none select-none hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

        </div>

        {/* ================= RIGHT COLUMN: DETAILS & CARE (lg:col-span-3) ================= */}
        <div className="lg:col-span-3 flex flex-col space-y-6 lg:border-l lg:border-[#1B222C]/15 lg:pl-6 xl:pl-8 pt-4 lg:pt-0">
          
          {/* Details / Product Specs */}
          <div className="space-y-3.5">
            <p className="text-[9px] xs:text-[9.5px] font-[family-name:var(--font-sans)] font-medium tracking-[0.24em] uppercase text-[#747B86]">
              DETAILS
            </p>

            <div className="space-y-3">
              {details.map((item, idx) => (
                <div key={idx} className="flex flex-col text-left">
                  <span className="text-[8.5px] font-[family-name:var(--font-sans)] font-medium tracking-[0.2em] text-[#747B86] uppercase leading-tight">
                    {item.label}
                  </span>
                  <span className="text-[11px] font-[family-name:var(--font-sans)] font-normal text-[#1B222C] tracking-[0.02em] mt-0.5 leading-tight">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Care Instructions */}
          <div className="space-y-3 pt-3 border-t border-[#1B222C]/10">
            <p className="text-[9px] xs:text-[9.5px] font-[family-name:var(--font-sans)] font-medium tracking-[0.24em] uppercase text-[#747B86]">
              CARE
            </p>

            <div className="space-y-2.5">
              {/* Care Item 1 */}
              <div className="flex items-start gap-2.5">
                <svg
                  className="w-3.5 h-3.5 text-[#525A67] shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <span className="text-[10px] font-[family-name:var(--font-sans)] font-light text-[#525A67] leading-snug">
                  {careInstructions[0]}
                </span>
              </div>

              {/* Care Item 2 */}
              <div className="flex items-start gap-2.5">
                <svg
                  className="w-3.5 h-3.5 text-[#525A67] shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
                <span className="text-[10px] font-[family-name:var(--font-sans)] font-light text-[#525A67] leading-snug">
                  {careInstructions[1]}
                </span>
              </div>

              {/* Care Item 3 */}
              <div className="flex items-start gap-2.5">
                <svg
                  className="w-3.5 h-3.5 text-[#525A67] shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
                <span className="text-[10px] font-[family-name:var(--font-sans)] font-light text-[#525A67] leading-snug">
                  {careInstructions[2]}
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}