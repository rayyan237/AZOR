// src/components/sections/philosophy/PhilosophySection.tsx
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function PhilosophySection() {
  const { philosophy } = siteConfig;

  return (
    <section
      id="about"
      aria-label="Our Philosophy"
      /* Slim panoramic banner height matching the Beginning section */
      className="relative w-full min-h-[420px] sm:min-h-[460px] md:min-h-[480px] lg:min-h-[500px] xl:min-h-[520px] overflow-hidden flex items-center py-12 sm:py-14 md:py-16 lg:py-20 px-6 sm:px-10 lg:px-14 xl:px-18 border-b border-white/5"
    >
      {/* Background Image Container (No darkening filters or overlays) */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Viewport Image (< 768px): Vertical crop */}
        <div className="relative w-full h-full md:hidden">
          <Image
            src={philosophy.images.mobile.src}
            alt={philosophy.images.mobile.alt}
            fill
            sizes="(max-width: 767px) 100vw, 0px"
            className="object-cover object-[75%_center] select-none pointer-events-none"
          />
        </div>

        {/* Desktop Viewport Image (>= 768px): Full-bleed horizontal portrait */}
        <div className="hidden md:block relative w-full h-full">
          <Image
            src={philosophy.images.desktop.src}
            alt={philosophy.images.desktop.alt}
            fill
            sizes="(min-width: 768px) 100vw, 0px"
            className="object-cover object-[right_center] lg:object-[85%_center] select-none pointer-events-none"
          />
        </div>
      </div>

      {/* Content Container (Constrained & aligned to match the grid of BeginningSection) */}
      <div className="relative z-10 w-full max-w-[1380px] mx-auto">
        <div className="max-w-[440px] sm:max-w-[480px] lg:max-w-[500px] flex flex-col items-start space-y-4 sm:space-y-5">
          {/* Eyebrow: 02 / OUR PHILOSOPHY */}
          <p className="text-[10px] sm:text-[11px] font-[family-name:var(--font-sans)] font-medium tracking-[0.28em] uppercase text-zinc-400 select-none">
            {philosophy.eyebrow}
          </p>

          {/* Section Main Title: Cormorant Garamond stacked */}
          <h2 className="text-[34px] sm:text-[42px] md:text-[48px] lg:text-[50px] xl:text-[54px] font-[family-name:var(--font-serif)] font-normal tracking-[0.03em] leading-[1.08] text-white">
            {philosophy.titleLines.map((line, index) => (
              <span key={index} className="block">
                {line}
              </span>
            ))}
          </h2>

          {/* Narrative Stanza */}
          <div className="text-[12px] sm:text-[12.5px] md:text-[13px] font-[family-name:var(--font-sans)] font-light leading-[1.8] text-zinc-300 space-y-0.5 pt-1">
            {philosophy.narrative.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>

          {/* Minimal Accent Rule above CTA */}
          <div className="w-7 h-[1px] bg-white/30 mt-2 mb-1" aria-hidden="true" />

          {/* CTA Link */}
          <div className="pt-0.5">
            <Link
              href={philosophy.cta.href}
              className="group inline-flex items-center gap-2.5 text-[10.5px] sm:text-[11px] font-[family-name:var(--font-sans)] font-semibold tracking-[0.24em] uppercase text-white border-b border-white pb-1 hover:text-zinc-300 hover:border-zinc-300 transition-colors"
            >
              <span>{philosophy.cta.label}</span>
              <span className="text-xs transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}