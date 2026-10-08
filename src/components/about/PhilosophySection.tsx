// src/components/about/PhilosophySection.tsx
import { aboutData } from "@/config/about-data";

export function PhilosophySection() {
  const { philosophy } = aboutData;

  return (
    <section
      id="our-philosophy"
      aria-label="Our Philosophy - More Than Just Jewelry"
      className="relative w-full bg-[#09111E] text-white border-b border-white/10 py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 px-5 xs:px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-20 select-none overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
        
        {/* ================= LEFT COLUMN: PHILOSOPHY STATEMENT (lg:col-span-5) ================= */}
        <div className="lg:col-span-5 flex flex-col items-start max-w-[420px]">
          {/* Eyebrow with hairline rule */}
          <div className="flex items-center gap-3 mb-2.5 sm:mb-3">
            <span className="text-[9px] xs:text-[9.5px] sm:text-[10px] font-[family-name:var(--font-sans)] font-medium tracking-[0.24em] uppercase text-zinc-400">
              {philosophy.eyebrow}
            </span>
            <span className="w-8 h-[1px] bg-white/30" aria-hidden="true" />
          </div>

          {/* Heading */}
          <h2 className="text-[28px] xs:text-[32px] sm:text-[38px] xl:text-[42px] font-[family-name:var(--font-serif)] font-normal tracking-[0.03em] leading-[1.04] text-white mb-4 sm:mb-5">
            {philosophy.titleLines.map((line, idx) => (
              <span key={idx} className="block">
                {line}
              </span>
            ))}
          </h2>

          {/* Narrative Body Copy */}
          <p className="text-[11.5px] xs:text-[12px] sm:text-[12.5px] font-[family-name:var(--font-sans)] font-light leading-[1.75] text-zinc-300 tracking-[0.015em]">
            {philosophy.description}
          </p>
        </div>

        {/* ================= RIGHT SECTION: 4 PILLARS (lg:col-span-7) ================= */}
        <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-4 lg:gap-0">
          {philosophy.pillars.map((pillar, index) => (
            <div
              key={pillar.number}
              className={`flex flex-col justify-between space-y-3 sm:space-y-4 ${
                index !== 0 ? "lg:border-l lg:border-white/15 lg:pl-6 xl:pl-7" : ""
              } pr-2 sm:pr-4`}
            >
              {/* Pillar Number: Scaled Up */}
              <span className="text-[15px] xs:text-[16px] sm:text-[17px] font-[family-name:var(--font-serif)] italic text-zinc-400">
                {pillar.number}
              </span>

              {/* Pillar Title: Scaled Up */}
              <h3 className="text-[15px] xs:text-[16px] sm:text-[17px] md:text-[18px] font-[family-name:var(--font-serif)] tracking-[0.08em] font-normal text-white uppercase">
                {pillar.title}
              </h3>

              {/* Pillar Statement / Content: Scaled Up */}
              <p className="text-[11.5px] xs:text-[12px] sm:text-[12.5px] font-[family-name:var(--font-sans)] font-light leading-relaxed text-zinc-300">
                {pillar.text}
              </p>

              {/* Hairline Tick */}
              <div
                className="w-6 h-[1px] bg-white/25 pt-1"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}