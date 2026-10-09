// src/components/moods/MoodEditorialSection.tsx
import Image from "next/image";
import { MoodData } from "@/config/moods-data";

interface MoodEditorialSectionProps {
  mood: MoodData;
}

export function MoodEditorialSection({ mood }: MoodEditorialSectionProps) {
  const { edit } = mood;

  return (
    <section
      id="mood-editorial"
      aria-label={edit.eyebrow}
      className="relative w-full bg-[#09111E] text-white border-b border-white/10 py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 px-5 xs:px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-20 select-none overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
        
        {/* ================= LEFT COLUMN: NARRATIVE (lg:col-span-5) ================= */}
        <div className="lg:col-span-5 flex flex-col items-start max-w-[460px]">
          {/* Eyebrow: Apple HIG Footnote / Subhead uppercase */}
          <div className="flex items-center gap-3 mb-3 sm:mb-3.5">
            <span className="text-[11px] xs:text-[11.5px] sm:text-[12px] font-[family-name:var(--font-sans)] font-medium tracking-[0.24em] uppercase text-zinc-400">
              {edit.eyebrow}
            </span>
            <span className="w-8 h-[1px] bg-white/30" aria-hidden="true" />
          </div>

          {/* Heading: Apple Title 1 / Large Title scale in Cormorant */}
          <h2 className="text-[32px] xs:text-[36px] sm:text-[42px] xl:text-[48px] font-[family-name:var(--font-serif)] font-normal tracking-[0.02em] leading-[1.06] text-white mb-4 sm:mb-5">
            {edit.titleLines.map((line, idx) => (
              <span key={idx} className="block">
                {line}
              </span>
            ))}
          </h2>

          {/* Hairline Divider */}
          <div className="w-10 h-[1px] bg-white/25 mb-4 sm:mb-5" aria-hidden="true" />

          {/* Body Stanzas: Apple Body standard (14px - 15px) */}
          <div className="space-y-2.5 text-[13px] xs:text-[13.5px] sm:text-[14.5px] font-[family-name:var(--font-sans)] font-light leading-[1.7] text-zinc-300 tracking-[0.015em]">
            {edit.description.map((stanza, idx) => (
              <p key={idx}>{stanza}</p>
            ))}
          </div>
        </div>

        {/* ================= RIGHT COLUMN: WIDE PHOTOGRAPHY (lg:col-span-7) ================= */}
        <div className="lg:col-span-7 relative w-full flex items-center justify-center">
          <div className="relative w-full aspect-[1.8/1] sm:aspect-[1.95/1] overflow-hidden bg-[#04070D] border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
            <Image
              src={edit.image.src}
              alt={edit.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 780px"
              className="object-cover object-center pointer-events-none select-none hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
          </div>
        </div>

      </div>
    </section>
  );
}