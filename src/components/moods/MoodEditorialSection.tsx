// src/components/moods/MoodEditorialSection.tsx
import Image from "next/image";
import { MoodData } from "@/config/moods-data";

interface MoodEditorialSectionProps {
  mood: MoodData;
}

export function MoodEditorialSection({ mood }: MoodEditorialSectionProps) {
  const { edit } = mood;
  const plaqueLines = edit.plaqueLines || [
    "DARKER TONES.",
    "SOFTER LIGHT.",
    "BOLDER YOU.",
  ];

  return (
    <section
      id="mood-editorial"
      aria-label={edit.eyebrow}
      className="relative w-full bg-[#F6F4F0] text-[#1B222C] border-b border-[#E3DFD7] py-10 xs:py-12 sm:py-14 md:py-16 lg:py-18 px-5 xs:px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-20 select-none overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-stretch">
        
        {/* ================= LEFT COLUMN: NARRATIVE (lg:col-span-4) ================= */}
        <div className="lg:col-span-4 flex flex-col justify-center items-start max-w-[380px] py-1">
          {/* Eyebrow */}
          <p className="text-[10px] xs:text-[10.5px] sm:text-[11px] font-[family-name:var(--font-sans)] font-medium tracking-[0.24em] uppercase text-[#737A84] mb-3 sm:mb-4">
            {edit.eyebrow}
          </p>

          {/* Heading in Cormorant Garamond */}
          <h2 className="text-[30px] xs:text-[34px] sm:text-[38px] xl:text-[42px] font-[family-name:var(--font-serif)] font-normal tracking-[0.02em] leading-[1.04] text-[#1B222C] mb-4 sm:mb-5">
            {edit.titleLines.map((line, idx) => (
              <span key={idx} className="block">
                {line}
              </span>
            ))}
          </h2>

          {/* Hairline Horizontal Rule */}
          <div className="w-10 h-[1px] bg-[#1B222C]/25 mb-4 sm:mb-5" aria-hidden="true" />

          {/* Narrative Stanzas */}
          <div className="space-y-1.5 text-[12px] xs:text-[12.5px] sm:text-[13px] font-[family-name:var(--font-sans)] font-light leading-[1.65] text-[#555D68] tracking-[0.01em]">
            {edit.description.map((stanza, idx) => (
              <p key={idx}>{stanza}</p>
            ))}
          </div>
        </div>

        {/* ================= CENTER COLUMN: WIDE PHOTOGRAPHY (lg:col-span-5 xl:col-span-6) ================= */}
        <div className="lg:col-span-5 xl:col-span-6 flex items-center justify-center">
          <div className="relative w-full aspect-[2/1] sm:aspect-[2.1/1] overflow-hidden bg-[#0D121A] border border-[#DDD9D0] shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
            <Image
              src={edit.image.src}
              alt={edit.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 700px"
              className="object-cover object-center select-none pointer-events-none hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
          </div>
        </div>

        {/* ================= RIGHT COLUMN: CLEAN BOLD SANS TEXT (lg:col-span-3 xl:col-span-2) ================= */}
        <div className="lg:col-span-3 xl:col-span-2 flex items-center lg:border-l lg:border-[#CBC6BC] lg:pl-6 xl:pl-8 py-4 lg:py-0">
          <div className="w-full flex flex-col items-center justify-center lg:items-start text-center lg:text-left space-y-3.5 sm:space-y-4">
            {plaqueLines.map((line, idx) => (
              <p
                key={idx}
                className="text-[10px] xs:text-[10.5px] sm:text-[11px] font-[family-name:var(--font-sans)] font-medium tracking-[0.24em] uppercase text-[#474F5A] leading-relaxed"
              >
                {line}
              </p>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}