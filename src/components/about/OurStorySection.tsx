// src/components/about/OurStorySection.tsx
import Image from "next/image";
import { aboutData } from "@/config/about-data";

export function OurStorySection() {
  const { ourStory } = aboutData;

  return (
    <section
      id="our-story"
      aria-label="Our Story - It Started With A Feeling"
      className="relative w-full bg-[#EFECE6] text-[#1B222C] border-b border-[#D5CFBF] py-16 sm:py-20 md:py-24 lg:py-28 px-6 sm:px-10 lg:px-16 xl:px-20 select-none overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* ================= LEFT COLUMN: STORY NARRATIVE (lg:col-span-5) ================= */}
        <div className="lg:col-span-5 flex flex-col items-start max-w-[420px] lg:pr-4">
          
          {/* Eyebrow + Hairline Rule */}
          <div className="flex items-center gap-3.5 mb-4 sm:mb-5">
            <span className="text-[9px] xs:text-[9.5px] sm:text-[10px] font-[family-name:var(--font-sans)] font-medium tracking-[0.24em] uppercase text-[#747B86]">
              {ourStory.eyebrow}
            </span>
            <span className="w-10 h-[1px] bg-[#1B222C]/30" aria-hidden="true" />
          </div>

          {/* Heading */}
          <h2 className="text-[28px] xs:text-[32px] sm:text-[38px] xl:text-[42px] font-[family-name:var(--font-serif)] font-normal tracking-[0.03em] leading-[1.08] text-[#1B222C] mb-6 sm:mb-8">
            {ourStory.titleLines.map((line, idx) => (
              <span key={idx} className="block">
                {line}
              </span>
            ))}
          </h2>

          {/* 3 Editorial Stanzas */}
          <div className="space-y-4 sm:space-y-5 text-[11px] xs:text-[11.5px] sm:text-[12px] font-[family-name:var(--font-sans)] font-light leading-[1.75] text-[#525A67] tracking-[0.015em]">
            {ourStory.stanzas.map((stanza, idx) => (
              <p key={idx}>{stanza}</p>
            ))}
          </div>

        </div>

        {/* ================= RIGHT COLUMN: EDITORIAL COLLAGE (lg:col-span-7) ================= */}
        <div className="lg:col-span-7 relative w-full flex items-center justify-center lg:justify-end">
          
          {/* Composition Container: Matches the proportions of the reference */}
          <div className="relative w-full max-w-[560px] sm:max-w-[620px] h-[340px] xs:h-[380px] sm:h-[430px] md:h-[460px]">
            
            {/* 1. Main Center Image: Clasping Hands (Aspect ~ 1:1.15) */}
            <div className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 w-[54%] xs:w-[52%] sm:w-[50%] aspect-[1/1.15] overflow-hidden bg-[#070D18] shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
              <Image
                src={ourStory.images.main.src}
                alt={ourStory.images.main.alt}
                fill
                sizes="(max-width: 640px) 50vw, 320px"
                className="object-cover object-center pointer-events-none select-none"
              />
            </div>

            {/* 2. Overlapping White Polaroid: Pendant Necklace */}
            <div className="absolute left-[48%] xs:left-[47%] sm:left-[46%] top-2 sm:top-4 w-[32%] xs:w-[30%] sm:w-[29%] aspect-[3/4] bg-white p-1.5 xs:p-2 sm:p-2.5 shadow-[0_16px_36px_rgba(0,0,0,0.14)] z-20">
              <div className="relative w-full h-full overflow-hidden bg-[#070D18]">
                <Image
                  src={ourStory.images.polaroid.src}
                  alt={ourStory.images.polaroid.alt}
                  fill
                  sizes="(max-width: 640px) 30vw, 180px"
                  className="object-cover object-center pointer-events-none select-none"
                />
              </div>
            </div>

            {/* 3. Far-Right Stack: Botanical Flower Illustration + Note Cardlet */}
            <div className="absolute right-0 bottom-2 sm:bottom-4 w-[24%] xs:w-[23%] sm:w-[22%] flex flex-col items-center">
              
              {/* Accurate Botanical Flower Vector */}
              <div className="w-10 sm:w-12 h-16 sm:h-20 mb-2 opacity-55 pointer-events-none">
                <svg
                  viewBox="0 0 40 70"
                  fill="none"
                  stroke="#1B222C"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-full h-full"
                >
                  {/* Stem */}
                  <path d="M20 68 C20 45, 21 28, 20 18" />
                  {/* Left Leaf */}
                  <path d="M20 48 C14 44, 13 36, 19 32 C19 38, 17 43, 20 48 Z" fill="#1B222C" fillOpacity="0.05" />
                  {/* Right Leaf */}
                  <path d="M20 36 C26 32, 27 24, 21 20 C21 26, 23 31, 20 36 Z" fill="#1B222C" fillOpacity="0.05" />
                  {/* Flower Petals */}
                  <path d="M20 18 C14 14, 14 6, 20 2 C26 6, 26 14, 20 18 Z" fill="#1B222C" fillOpacity="0.05" />
                  <path d="M16 14 C12 10, 14 4, 18 2" />
                  <path d="M24 14 C28 10, 26 4, 22 2" />
                </svg>
              </div>

              {/* Note Cardlet with Cormorant Garamond Italic */}
              <div className="w-full bg-[#E6E0D5] p-3 sm:p-3.5 shadow-[0_4px_16px_rgba(0,0,0,0.04)] border border-[#DBD3C5]/60">
                <div className="space-y-0.5 sm:space-y-1 text-left">
                  {ourStory.noteCard.lines.map((line, idx) => (
                    <p
                      key={idx}
                      className="text-[10.5px] xs:text-[11.5px] sm:text-[12.5px] font-[family-name:var(--font-serif)] italic text-[#2D3540] leading-snug tracking-wide"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}