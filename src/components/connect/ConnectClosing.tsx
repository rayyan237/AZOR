// src/components/connect/ConnectClosing.tsx
import Image from "next/image";
import Link from "next/link";
import { connectData } from "@/config/connect-data";

export function ConnectClosing() {
  const { closing } = connectData;

  return (
    <section
      id="connect-closing"
      aria-label="This is Azor"
      className="relative w-full h-[280px] xs:h-[310px] sm:h-[350px] md:h-[380px] overflow-hidden flex items-center bg-[#04070D] text-white select-none border-t border-white/10"
    >
      {/* Background Still Photography */}
      <div className="absolute inset-0 z-0">
        <Image
          src={closing.image.src}
          alt={closing.image.alt}
          fill
          sizes="100vw"
          className="object-cover object-[70%_center] sm:object-center select-none pointer-events-none"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#04070D]/90 via-[#04070D]/50 to-transparent pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 xs:px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-20">
        <div className="max-w-[400px] flex flex-col items-start space-y-2.5 sm:space-y-3">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="text-[9px] xs:text-[9.5px] sm:text-[10px] font-[family-name:var(--font-sans)] font-medium tracking-[0.24em] uppercase text-zinc-400">
              {closing.eyebrow}
            </span>
            <span className="w-8 h-[1px] bg-white/30" aria-hidden="true" />
          </div>

          {/* Heading */}
          <h2 className="text-[26px] xs:text-[30px] sm:text-[34px] md:text-[38px] font-[family-name:var(--font-serif)] font-normal tracking-[0.04em] leading-[1.04] text-white">
            {closing.title}
          </h2>

          {/* Subtext */}
          <p className="text-[11px] xs:text-[11.5px] sm:text-[12px] font-[family-name:var(--font-sans)] font-light text-zinc-300 tracking-[0.015em]">
            {closing.description}
          </p>

          {/* Action Links */}
          <div className="flex items-center gap-4 sm:gap-6 pt-2">
            {closing.actions.map((act) => (
              <Link
                key={act.label}
                href={act.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[9px] xs:text-[9.5px] sm:text-[10px] font-[family-name:var(--font-sans)] font-medium tracking-[0.22em] uppercase text-zinc-300 hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5"
              >
                {act.label}
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}