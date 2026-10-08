// src/components/about/OurStorySection.tsx
import Image from "next/image";
import { aboutData } from "@/config/about-data";

export function OurStorySection() {
  const { ourStory } = aboutData;

  return (
    <section
      id="our-story"
      aria-label="Our Story - It Started With A Feeling"
      className="relative w-full bg-[#EFECE6] text-[#1B222C] border-b border-[#D5CFBF] py-8 xs:py-10 sm:py-12 md:py-14 lg:py-16 px-5 xs:px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-20 select-none overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-center">
        
        {/* ================= LEFT COLUMN: STORY NARRATIVE (lg:col-span-5) ================= */}
        <div className="lg:col-span-5 flex flex-col items-start max-w-[420px]">
          
          {/* Eyebrow with hairline rule */}
          <div className="flex items-center gap-3 mb-2.5 sm:mb-3">
            <span className="text-[9px] xs:text-[9.5px] sm:text-[10px] font-[family-name:var(--font-sans)] font-medium tracking-[0.24em] uppercase text-[#747B86]">
              {ourStory.eyebrow}
            </span>
            <span className="w-8 h-[1px] bg-[#1B222C]/25" aria-hidden="true" />
          </div>

          {/* Heading */}
          <h2 className="text-[26px] xs:text-[30px] sm:text-[34px] xl:text-[38px] font-[family-name:var(--font-serif)] font-normal tracking-[0.03em] leading-[1.08] text-[#1B222C] mb-4 sm:mb-5">
            {ourStory.titleLines.map((line, idx) => (
              <span key={idx} className="block">
                {line}
              </span>
            ))}
          </h2>

          {/* 3 Narrative Stanzas */}
          <div className="space-y-3 sm:space-y-3.5 text-[11px] xs:text-[11.5px] font-[family-name:var(--font-sans)] font-light leading-[1.7] text-[#525A67] tracking-[0.015em]">
            {ourStory.stanzas.map((stanza, idx) => (
              <p key={idx}>{stanza}</p>
            ))}
          </div>

        </div>

        {/* ================= RIGHT COLUMN: EDITORIAL COLLAGE (lg:col-span-7) ================= */}
        <div className="lg:col-span-7 relative w-full flex items-center justify-center lg:justify-end">
          
          {/* 
            Proportional Collage Frame
          */}
          <div className="relative w-full max-w-[560px] sm:max-w-[640px] lg:max-w-[680px] h-[270px] xs:h-[300px] sm:h-[330px] md:h-[350px] flex items-center">
            
            {/* 1. Main Center Image: Clasped Hands (Increased scale ~ 64% width, landscape ~ 1.25 : 1) */}
            <div className="relative w-[65%] sm:w-[63%] aspect-[1.25/1] overflow-hidden bg-[#070D18] shadow-[0_4px_24px_rgba(0,0,0,0.08)] shrink-0 z-10">
              <Image
                src={ourStory.images.main.src}
                alt={ourStory.images.main.alt}
                fill
                sizes="(max-width: 640px) 65vw, 420px"
                className="object-cover object-center pointer-events-none select-none"
              />
            </div>

            {/* 2. Overlapping Polaroid Photo (Pendant Necklace): Thin white border, crisp shadow */}
            <div className="absolute left-[56%] sm:left-[54%] top-1 sm:top-0 w-[27%] sm:w-[26%] aspect-[3.2/4] bg-white p-1 sm:p-1.5 shadow-[0_12px_28px_rgba(0,0,0,0.12)] z-30">
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

            {/* 3. Small Note Cardlet + Flower Illustration: Attached directly right of polaroid */}
            <div className="absolute left-[78%] sm:left-[76%] top-[14%] sm:top-[12%] w-[22%] sm:w-[22%] z-20 flex flex-col items-center">
              
              {/* Botanical Sketch: Wildflower with climbing leaves */}
              <div className="w-8 xs:w-9 sm:w-10 h-16 xs:h-18 sm:h-20 -mb-1 opacity-60 pointer-events-none">
                <svg
                  viewBox="0 0 45 80"
                  fill="none"
                  stroke="#1B222C"
                  strokeWidth="1.15"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-full h-full"
                >
                  {/* Stem */}
                  <path d="M22 78 C23 58, 20 40, 22 22" />
                  
                  {/* Climbing leaves */}
                  <path d="M21 62 C15 60, 13 54, 18 50 C20 54, 21 58, 21 62 Z" />
                  <path d="M22 52 C28 50, 30 44, 25 40 C23 44, 22 48, 22 52 Z" />
                  <path d="M21 42 C16 40, 15 34, 19 30 C20 34, 21 38, 21 42 Z" />
                  <path d="M22 32 C27 30, 28 25, 24 22" />

                  {/* Blossom Petals */}
                  <path d="M22 22 C18 20, 14 14, 16 8 C18 13, 20 18, 22 22 Z" />
                  <path d="M22 22 C21 16, 22 10, 24 4 C25 10, 24 16, 22 22 Z" />
                  <path d="M22 22 C25 18, 30 14, 32 8 C30 13, 26 18, 22 22 Z" />
                  <path d="M16 8 C19 4, 22 4, 24 4 C27 4, 30 6, 32 8" />
                  
                  {/* Inner Stamen */}
                  <path d="M21 17 L20 13" />
                  <path d="M23 17 L24 13" />
                </svg>
              </div>

              {/* Note Cardlet: Soft square, warm oatmeal tone */}
              <div className="w-full aspect-square bg-[#E5DFD4] p-2.5 xs:p-3 sm:p-3.5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-[#D8D0C2] flex flex-col justify-center">
                <div className="space-y-0.5 text-left">
                  {ourStory.noteCard.lines.map((line, idx) => (
                    <p
                      key={idx}
                      className="text-[10px] xs:text-[10.5px] sm:text-[11.5px] font-[family-name:var(--font-serif)] italic text-[#2D3540] leading-snug"
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