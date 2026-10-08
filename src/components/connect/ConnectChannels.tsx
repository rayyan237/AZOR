// src/components/connect/ConnectChannels.tsx
import Image from "next/image";
import Link from "next/link";
import { connectData } from "@/config/connect-data";

// Simple inline SVG Icons matching the reference design
function ChannelIcon({ type }: { type: string }) {
  if (type === "instagram") {
    return (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    );
  }
  if (type === "whatsapp") {
    return (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    );
  }
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

export function ConnectChannels() {
  const { channels } = connectData;

  return (
    <section
      id="connect-channels"
      aria-label="Direct Contact Channels"
      className="relative w-full bg-[#04070D] text-white py-12 sm:py-16 md:py-20 px-5 xs:px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-20 select-none"
    >
      <div className="max-w-[1440px] mx-auto space-y-6 sm:space-y-8">
        {channels.map((channel) => {
          const isImageRight = channel.imagePosition === "right";

          return (
            <div
              key={channel.id}
              className="relative w-full border border-white/10 bg-[#070D18]/50 overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[220px] sm:min-h-[250px] md:min-h-[280px] items-stretch transition-colors duration-300 hover:border-white/20"
            >
              {/* Text Side (Takes 6 or 7 cols) */}
              <div
                className={`md:col-span-6 lg:col-span-5 flex flex-col justify-center p-6 xs:p-8 sm:p-10 lg:p-12 z-10 ${
                  isImageRight ? "md:order-1" : "md:order-2"
                }`}
              >
                {/* Eyebrow */}
                <p className="text-[8.5px] xs:text-[9px] sm:text-[9.5px] tracking-[0.24em] uppercase text-zinc-400 font-[family-name:var(--font-sans)] font-medium mb-2.5">
                  {channel.platform}
                </p>

                {/* Title */}
                <h2 className="text-[22px] xs:text-[25px] sm:text-[28px] lg:text-[30px] font-[family-name:var(--font-serif)] font-normal tracking-[0.03em] leading-[1.08] text-white mb-2 sm:mb-2.5">
                  {channel.titleLines.map((line, idx) => (
                    <span key={idx} className="block">
                      {line}
                    </span>
                  ))}
                </h2>

                {/* Description */}
                <p className="text-[11px] xs:text-[11.5px] sm:text-[12px] font-[family-name:var(--font-sans)] font-light text-zinc-400 mb-5 sm:mb-6 max-w-[340px]">
                  {channel.description}
                </p>

                {/* CTA Link */}
                <div>
                  <Link
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 text-white/90 hover:text-white transition-colors duration-200"
                  >
                    <ChannelIcon type={channel.type} />
                    <span className="text-[10px] xs:text-[10.5px] tracking-[0.2em] uppercase font-[family-name:var(--font-sans)] font-medium">
                      {channel.actionLabel}
                    </span>
                    <span className="text-xs transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>

              {/* Image Side (Takes 6 or 7 cols) */}
              <div
                className={`relative w-full h-[200px] md:h-full md:col-span-6 lg:col-span-7 overflow-hidden ${
                  isImageRight ? "md:order-2" : "md:order-1"
                }`}
              >
                <Image
                  src={channel.image.src}
                  alt={channel.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 55vw"
                  className="object-cover object-center select-none pointer-events-none hover:scale-105 transition-transform duration-700"
                />
                {/* Subtle vignette gradient towards text */}
                <div
                  className={`absolute inset-0 hidden md:block bg-gradient-to-${
                    isImageRight ? "r" : "l"
                  } from-[#070D18]/90 via-[#070D18]/30 to-transparent pointer-events-none`}
                  aria-hidden="true"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}