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
      className="relative w-full bg-[#04070D] text-white border-b border-white/10 py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 px-5 xs:px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-20 select-none overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
        
        {/* ================= LEFT COLUMN: NARRATIVE (lg:col-span-5) ================= */}
        <div className="lg:col-span-5 flex flex-col items-start max-w-[420px]">
          {/* Eyebrow with hairline rule */}
          <div className="flex items-center gap-3 mb-2.5 sm:mb-3">
            <span className="text-[9px] xs:text-[9.5px] sm:text-[10px] font-[family-name:var(--font-sans)] font-medium tracking-[0.24em] uppercase text-zinc-400">
              {edit.eyebrow}
            </span>
            <span className="w-8 h-[1px] bg-white/25" aria-hidden="true" />
          </div>

          {/* Heading in Cormorant Garamond */}
          <h2 className="text-[28px] xs:text-[32px] sm:text-[36px] xl:text-[40px] font-[family-name:var(--font-serif)] font-normal tracking-[0.03em] leading-[1.05] text-white mb-3 sm:mb-4">
            {edit.titleLines.map((line, idx) => (
              <span key={idx} className="block">
                {line}
              </span>
            ))}
          </h2>

          {/* Hairline Divider */}
          <div className="w-8 h-[1px] bg-white/20 mb-3 sm:mb-4" aria-hidden="true" />

          {/* Narrative Stanzas */}
          <div className="space-y-2 text-[11px] xs:text-[11.5px] sm:text-[12px] font-[family-name:var(--font-sans)] font-light leading-[1.7] text-zinc-300 tracking-[0.015em]">
            {edit.description.map((stanza, idx) => (
              <p key={idx}>{stanza}</p>
            ))}
          </div>
        </div>

        {/* ================= RIGHT COLUMN: WIDE PHOTOGRAPHY (lg:col-span-7) ================= */}
        <div className="lg:col-span-7 relative w-full flex items-center justify-center">
          <div className="relative w-full aspect-[1.8/1] sm:aspect-[1.95/1] overflow-hidden bg-[#070D18] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
            <Image
              src={edit.image.src}
              alt={edit.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 760px"
              className="object-cover object-center pointer-events-none select-none hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
          </div>
        </div>

      </div>
    </section>
  );
}