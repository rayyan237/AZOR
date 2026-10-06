import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function PhilosophySection() {
  const { philosophy } = siteConfig;

  return (
    <section
      id="about"
      aria-label="Our Philosophy"
      className="relative w-full bg-[#080B10] text-white overflow-hidden py-14 sm:py-18 md:py-20 lg:py-24 xl:py-28 px-6 sm:px-10 lg:px-14 xl:px-20 border-b border-white/5"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center min-h-[480px] lg:min-h-[540px]">
        
        {/* Left Column: Typographic Narrative (Cols 1-6) */}
        <div className="lg:col-span-6 flex flex-col items-start space-y-5 sm:space-y-6 max-w-xl z-10">
          {/* Eyebrow */}
          <p className="text-[10px] sm:text-[11px] font-[family-name:var(--font-sans)] font-medium tracking-[0.28em] uppercase text-zinc-400 select-none">
            {philosophy.eyebrow}
          </p>

          {/* Section Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[56px] font-[family-name:var(--font-serif)] font-normal tracking-[0.04em] leading-[1.08] text-white">
            {philosophy.titleLines.map((line, index) => (
              <span key={index} className="block">
                {line}
              </span>
            ))}
          </h2>

          {/* Narrative Stanza */}
          <div className="text-xs sm:text-[13px] md:text-sm font-[family-name:var(--font-sans)] font-light leading-[1.8] text-zinc-300 space-y-0.5 pt-1">
            {philosophy.narrative.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>

          {/* CTA Link */}
          <div className="pt-2 sm:pt-4">
            <Link
              href={philosophy.cta.href}
              className="group inline-flex items-center gap-2.5 text-[10.5px] sm:text-[11px] font-[family-name:var(--font-sans)] font-semibold tracking-[0.24em] uppercase text-white border-b border-white/70 pb-1 hover:text-zinc-300 hover:border-zinc-300 transition-colors"
            >
              <span>{philosophy.cta.label}</span>
              <span className="text-xs transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Right Column: Natural Portrait Photography (Cols 7-12) */}
        <div className="lg:col-span-6 w-full h-[340px] sm:h-[420px] md:h-[480px] lg:h-[540px] xl:h-[580px] relative overflow-hidden">
          <Image
            src={philosophy.image.src}
            alt={philosophy.image.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 700px"
            className="object-cover object-[center_35%] sm:object-[center_30%] lg:object-center select-none"
          />
        </div>

      </div>
    </section>
  );
}