// src/components/connect/ConnectHero.tsx
import Image from "next/image";
import { connectData } from "@/config/connect-data";

export function ConnectHero() {
  const { hero } = connectData;

  return (
    <section
      id="connect-hero"
      aria-label="Connect with Azor"
      className="relative w-full min-h-[90vh] md:min-h-screen flex items-center bg-[#04070D] text-white pt-24 pb-12 sm:pb-16 px-5 xs:px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-20 select-none overflow-hidden border-b border-white/10"
    >
      {/* Background/Side Image: Right-Aligned Hero Portrait */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-[60%] lg:w-[55%] z-0">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 55vw"
          className="object-cover object-[70%_top] sm:object-center select-none pointer-events-none"
        />
        {/* Subtle gradient vignette to blend the image seamlessly into the Obsidian canvas */}
        <div
          className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#04070D] via-[#04070D]/70 md:via-[#04070D]/40 to-transparent pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto">
        <div className="max-w-[420px] flex flex-col items-start">
          
          {/* Eyebrow */}
          <p className="text-[9px] xs:text-[9.5px] sm:text-[10px] tracking-[0.26em] uppercase text-zinc-400 font-[family-name:var(--font-sans)] font-medium mb-3 sm:mb-4">
            {hero.eyebrow}
          </p>

          {/* Heading */}
          <h1 className="text-[34px] xs:text-[40px] sm:text-[48px] md:text-[54px] lg:text-[60px] font-[family-name:var(--font-serif)] font-normal tracking-[0.03em] leading-[1.02] text-white mb-5 sm:mb-6">
            {hero.title}
          </h1>

          {/* 3-Line Italic Prompt */}
          <div className="space-y-1 sm:space-y-1.5 text-[13px] xs:text-[14px] sm:text-[15px] font-[family-name:var(--font-serif)] italic text-zinc-300">
            {hero.prompts.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>

          {/* Hairline Divider Rule */}
          <div
            className="w-8 sm:w-10 h-[1px] bg-white/30 mt-6 sm:mt-8"
            aria-hidden="true"
          />

        </div>
      </div>
    </section>
  );
}