import { siteConfig } from "@/config/site";
import { MoodCard } from "./MoodCard";

export function MoodSection() {
  const { moods } = siteConfig;

  return (
    <section
      id="moods"
      aria-label="The Azor Mood"
      className="relative w-full bg-[#07090C] text-white border-b border-white/5 py-12 xs:py-14 sm:py-16 md:py-18 lg:py-20 px-5 xs:px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-20 selection:bg-white/20 selection:text-white"
    >
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header Block */}
        <div className="flex flex-col items-start space-y-1.5 xs:space-y-2 mb-8 xs:mb-10 sm:mb-12 lg:mb-14">
          <p className="text-[9.5px] xs:text-[10px] sm:text-[10.5px] font-[family-name:var(--font-sans)] font-medium tracking-[0.26em] uppercase text-[#7E8795]">
            {moods.eyebrow}
          </p>

          <h2 className="text-[26px] xs:text-[29px] sm:text-[32px] md:text-[36px] lg:text-[38px] xl:text-[40px] font-[family-name:var(--font-serif)] font-normal tracking-[0.03em] text-white leading-none">
            {moods.title}
          </h2>

          <p className="text-[11px] xs:text-[11.5px] sm:text-[12px] font-[family-name:var(--font-sans)] font-light text-[#C5CBD4] tracking-[0.02em] leading-normal pt-0.5">
            {moods.description}
          </p>
        </div>

        {/* 
          5-Item Layout:
          - Mobile (< 768px): 2 balanced columns, with item 5 centered across both columns
          - Tablet (768px - 1023px): 3 columns
          - Desktop (1024px+): 5-column single-row panoramic row matching the Archive section
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 xs:gap-x-5 sm:gap-x-6 lg:gap-x-3.5 xl:gap-x-4 gap-y-7 xs:gap-y-8 sm:gap-y-9 lg:gap-y-0 w-full items-start">
          {moods.items.map((item, index) => (
            <div
              key={item.id}
              className={
                index === moods.items.length - 1
                  ? "col-span-2 xs:col-span-2 md:col-span-1 max-w-[200px] xs:max-w-[220px] md:max-w-none mx-auto w-full"
                  : "w-full"
              }
            >
              <MoodCard item={item} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}