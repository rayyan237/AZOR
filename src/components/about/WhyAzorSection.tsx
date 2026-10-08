// src/components/about/WhyAzorSection.tsx
import Image from "next/image";
import { aboutData } from "@/config/about-data";

export function WhyAzorSection() {
  const { whyAzor } = aboutData;

  return (
    <section
      id="why-azor"
      aria-label="Why Azor - A Different Kind of Brand"
      className="relative w-full bg-[#EFECE6] text-[#1B222C] border-b border-[#D5CFBF] py-8 xs:py-10 sm:py-12 md:py-14 lg:py-16 px-5 xs:px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-20 select-none overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-10 items-center">
        
        {/* ================= LEFT COLUMN: NARRATIVE (lg:col-span-4) ================= */}
        <div className="lg:col-span-4 flex flex-col items-start max-w-[380px]">
          {/* Eyebrow with hairline rule */}
          <div className="flex items-center gap-3 mb-2.5 sm:mb-3">
            <span className="text-[9px] xs:text-[9.5px] sm:text-[10px] font-[family-name:var(--font-sans)] font-medium tracking-[0.24em] uppercase text-[#747B86]">
              {whyAzor.eyebrow}
            </span>
            <span className="w-8 h-[1px] bg-[#1B222C]/25" aria-hidden="true" />
          </div>

          {/* Heading */}
          <h2 className="text-[26px] xs:text-[30px] sm:text-[34px] xl:text-[38px] font-[family-name:var(--font-serif)] font-normal tracking-[0.03em] leading-[1.08] text-[#1B222C] mb-4 sm:mb-5">
            {whyAzor.titleLines.map((line, idx) => (
              <span key={idx} className="block">
                {line}
              </span>
            ))}
          </h2>

          {/* Stanzas */}
          <div className="space-y-3.5 sm:space-y-4 text-[11px] xs:text-[11.5px] font-[family-name:var(--font-sans)] font-light leading-[1.7] text-[#525A67] tracking-[0.015em]">
            {whyAzor.stanzas.map((stanza, idx) => (
              <p key={idx} className="whitespace-pre-line">
                {stanza}
              </p>
            ))}
          </div>
        </div>

        {/* ================= CENTER COLUMN: WIDE STILL PHOTOGRAPHY (lg:col-span-5) ================= */}
        <div className="lg:col-span-5 relative w-full flex items-center justify-center">
          <div className="relative w-full aspect-[1.75/1] sm:aspect-[1.8/1] overflow-hidden bg-[#070D18] shadow-[0_6px_28px_rgba(0,0,0,0.08)]">
            <Image
              src={whyAzor.image.src}
              alt={whyAzor.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 540px"
              className="object-cover object-center pointer-events-none select-none hover:scale-[1.02] transition-transform duration-700 ease-out"
            />
          </div>
        </div>

        {/* ================= RIGHT COLUMN: ITALIC SERIF EPIGRAM (lg:col-span-3) ================= */}
        <div className="lg:col-span-3 flex flex-col items-start justify-center pt-2 lg:pt-0 lg:pl-4 xl:pl-6">
          <div className="flex flex-col items-start space-y-3 sm:space-y-4">
            <div className="space-y-0.5 text-left">
              {whyAzor.epigram.lines.map((line, idx) => (
                <p
                  key={idx}
                  className="text-[18px] xs:text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] font-[family-name:var(--font-serif)] italic text-[#2D3540] leading-[1.12] tracking-wide"
                >
                  {line}
                </p>
              ))}
            </div>

            {/* Left-aligned subtle hairline tick */}
            <div
              className="w-8 h-[1px] bg-[#1B222C]/30 pt-0.5"
              aria-hidden="true"
            />
          </div>
        </div>

      </div>
    </section>
  );
}