// src/components/about/OurStorySection.tsx
import Image from "next/image";
import { aboutData } from "@/config/about-data";

export function OurStorySection() {
  const { ourStory } = aboutData;

  return (
    <section
      id="our-story"
      aria-label="Our Story - It Started With A Feeling"
      className="relative w-full bg-[#EFECE6] text-[#1B222C] border-b border-[#D5CFBF] py-14 xs:py-16 sm:py-20 md:py-24 lg:py-28 px-5 xs:px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-20 select-none overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-14 items-center">
        
        {/* ================= LEFT COLUMN: STORY NARRATIVE (lg:col-span-5) ================= */}
        <div className="lg:col-span-5 flex flex-col items-start space-y-4 sm:space-y-5 max-w-[480px]">
          
          {/* Eyebrow with Hairline Tick */}
          <div className="flex items-center gap-3">
            <span className="text-[9px] xs:text-[9.5px] sm:text-[10px] font-[family-name:var(--font-sans)] font-medium tracking-[0.26em] uppercase text-[#747B86]">
              {ourStory.eyebrow}
            </span>
            <span className="w-8 h-[1px] bg-[#1B222C]/25" aria-hidden="true" />
          </div>

          {/* Display Title: Cormorant Garamond */}
          <h2 className="text-[30px] xs:text-[36px] sm:text-[42px] lg:text-[44px] xl:text-[48px] font-[family-name:var(--font-serif)] font-normal tracking-[0.03em] leading-[1.04] text-[#1B222C]">
            {ourStory.titleLines.map((line, idx) => (
              <span key={idx} className="block">
                {line}
              </span>
            ))}
          </h2>

          {/* Stanzas with Balanced Spacing */}
          <div className="space-y-3.5 sm:space-y-4 pt-1 sm:pt-2">
            {ourStory.stanzas.map((stanza, idx) => (
              <p
                key={idx}
                className="text-[11.5px] xs:text-[12px] sm:text-[12.5px] font-[family-name:var(--font-sans)] font-light leading-[1.75] text-[#525A67] tracking-[0.015em]"
              >
                {stanza}
              </p>
            ))}
          </div>

        </div>

        {/* ================= RIGHT COLUMN: EDITORIAL COLLAGE (lg:col-span-7) ================= */}
        <div className="lg:col-span-7 relative w-full flex items-center justify-center lg:justify-end">
          
          {/* Collage Wrapper with Scaled Dimensions */}
          <div className="relative w-full max-w-[460px] sm:max-w-[520px] lg:max-w-[560px] h-[340px] xs:h-[390px] sm:h-[430px] md:h-[460px]">
            
            {/* 1. Large Main Photo (Hands with Rings) */}
            <div className="absolute left-0 bottom-0 top-4 sm:top-6 w-[70%] sm:w-[68%] overflow-hidden bg-[#070D18] shadow-[0_12px_36px_rgba(0,0,0,0.12)]">
              <Image
                src={ourStory.images.main.src}
                alt={ourStory.images.main.alt}
                fill
                sizes="(max-width: 640px) 70vw, 360px"
                className="object-cover object-center pointer-events-none select-none hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* 2. Floating Framed Polaroid Photo (Necklace Pendant) */}
            <div className="absolute right-[8%] sm:right-[14%] top-0 w-[42%] sm:w-[40%] aspect-[4/5] bg-white p-1.5 sm:p-2 shadow-[0_16px_40px_rgba(0,0,0,0.16)] z-20 transition-transform duration-500 hover:-translate-y-1">
              <div className="relative w-full h-full overflow-hidden bg-[#070D18]">
                <Image
                  src={ourStory.images.polaroid.src}
                  alt={ourStory.images.polaroid.alt}
                  fill
                  sizes="(max-width: 640px) 42vw, 220px"
                  className="object-cover object-center pointer-events-none select-none"
                />
              </div>
            </div>

            {/* 3. Minimal Botanical Floral Line Art */}
            <div className="absolute right-0 top-3 sm:top-5 w-10 xs:w-12 sm:w-14 h-16 xs:h-20 sm:h-24 pointer-events-none opacity-40 z-10">
              <svg
                viewBox="0 0 48 80"
                fill="none"
                stroke="currentColor"
                className="w-full h-full text-[#1B222C]"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Stem */}
                <path d="M24 76C24 50 26 30 22 18" />
                {/* Petals */}
                <path d="M22 18C18 10 26 6 22 2C18 6 26 10 22 18Z" />
                <path d="M16 12C12 8 18 4 16 1C14 4 20 8 16 12Z" />
                <path d="M28 14C32 10 26 6 28 3C30 6 24 10 28 14Z" />
                {/* Leaves */}
                <path d="M24 54C17 50 16 42 24 40C24 46 21 51 24 54Z" />
                <path d="M25 36C32 32 33 24 25 22C25 28 28 33 25 36Z" />
              </svg>
            </div>

            {/* 4. Warm Oatmeal Note Cardlet */}
            <div className="absolute right-0 bottom-2 sm:bottom-4 w-[34%] sm:w-[32%] bg-[#E7E2D8] p-3 sm:p-4 shadow-[0_8px_24px_rgba(0,0,0,0.06)] z-10 border border-[#DCD5C8]">
              <div className="space-y-0.5 sm:space-y-1">
                {ourStory.noteCard.lines.map((line, idx) => (
                  <p
                    key={idx}
                    className="text-[12px] xs:text-[13px] sm:text-[14px] font-[family-name:var(--font-serif)] italic text-[#2D3540] leading-tight"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}