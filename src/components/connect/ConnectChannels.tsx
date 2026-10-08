// src/components/connect/ConnectChannels.tsx
import Image from "next/image";
import Link from "next/link";
import { connectData } from "@/config/connect-data";

/**
 * Official Brand Icons & High-Def SVG Glyph Vectors
 */
function OfficialChannelIcon({ type }: { type: "instagram" | "whatsapp" | "email" }) {
  if (type === "instagram") {
    return (
      <svg
        className="w-5 h-5 sm:w-[22px] sm:h-[22px] shrink-0 fill-none stroke-current"
        viewBox="0 0 24 24"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="20" height="20" rx="5.5" ry="5.5" />
        <circle cx="12" cy="12" r="4.2" />
        <circle cx="17.6" cy="6.4" r="0.8" fill="currentColor" />
      </svg>
    );
  }

  if (type === "whatsapp") {
    return (
      <svg
        className="w-5 h-5 sm:w-[22px] sm:h-[22px] shrink-0 fill-current"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.9C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.69 12.05 3.69C14.25 3.69 16.32 4.55 17.87 6.11C19.42 7.66 20.27 9.73 20.27 11.92C20.26 16.46 16.58 20.15 12.04 20.15ZM16.56 14.41C16.31 14.29 15.1 13.69 14.88 13.61C14.65 13.53 14.49 13.49 14.32 13.73C14.16 13.98 13.69 14.53 13.54 14.69C13.4 14.86 13.25 14.88 13 14.76C12.75 14.63 11.95 14.37 11 13.52C10.26 12.86 9.76 12.05 9.61 11.8C9.47 11.56 9.6 11.42 9.72 11.3C9.83 11.19 9.97 11.01 10.09 10.87C10.21 10.73 10.26 10.63 10.34 10.46C10.42 10.3 10.38 10.15 10.32 10.03C10.26 9.91 9.76 8.68 9.56 8.18C9.36 7.69 9.15 7.76 9 7.75C8.86 7.74 8.7 7.74 8.53 7.74C8.37 7.74 8.1 7.8 7.87 8.05C7.65 8.3 7.02 8.89 7.02 10.09C7.02 11.29 7.9 12.44 8.02 12.61C8.14 12.77 9.74 15.25 12.2 16.31C12.79 16.56 13.24 16.71 13.6 16.82C14.19 17.01 14.73 16.98 15.16 16.92C15.64 16.85 16.63 16.32 16.84 15.73C17.04 15.14 17.04 14.63 16.98 14.53C16.92 14.43 16.81 14.37 16.56 14.41Z" />
      </svg>
    );
  }

  return (
    <svg
      className="w-5 h-5 sm:w-[22px] sm:h-[22px] shrink-0 fill-none stroke-current"
      viewBox="0 0 24 24"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

export function ConnectChannels() {
  const { channels } = connectData;

  return (
    <section
      id="connect-channels"
      aria-label="Direct Contact Channels"
      className="relative w-full bg-[#04070D] text-white py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 px-5 xs:px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-20 select-none"
    >
      <div className="max-w-[1440px] mx-auto space-y-6 sm:space-y-8 md:space-y-10">
        {channels.map((channel) => {
          // WhatsApp text is anchored on the right, Instagram and Email on the left
          const isTextRight = channel.imagePosition === "left";

          return (
            <div
              key={channel.id}
              className="group relative w-full h-[280px] xs:h-[300px] sm:h-[340px] md:h-[380px] lg:h-[400px] border border-white/10 overflow-hidden flex items-center transition-colors duration-500 hover:border-white/25"
            >
              {/* 
                Full-Bleed Raw Background Photography
                - Zero artificial darkening filters or overlays
                - Desktop Image (>= sm)
                - Mobile Image (< sm)
              */}
              <div className="absolute inset-0 z-0">
                {/* Desktop Screen Photography */}
                <div className="hidden sm:block absolute inset-0">
                  <Image
                    src={channel.image.desktop.src}
                    alt={channel.image.desktop.alt}
                    fill
                    quality={95}
                    sizes="(max-width: 1440px) 100vw, 1440px"
                    className="object-cover object-center select-none pointer-events-none transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </div>

                {/* Mobile Screen Photography */}
                <div className="block sm:hidden absolute inset-0">
                  <Image
                    src={channel.image.mobile?.src || channel.image.desktop.src}
                    alt={channel.image.mobile?.alt || channel.image.desktop.alt}
                    fill
                    quality={95}
                    sizes="100vw"
                    className="object-cover object-center select-none pointer-events-none transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </div>
              </div>

              {/* Text & CTA Overlay: Alternates Left / Right on Desktop */}
              <div
                className={`relative z-10 w-full flex ${
                  isTextRight ? "justify-start md:justify-end" : "justify-start"
                } px-6 xs:px-8 sm:px-12 md:px-14 lg:px-16`}
              >
                <div className="max-w-[340px] xs:max-w-[380px] sm:max-w-[430px] flex flex-col items-start text-left">
                  
                  {/* Platform Eyebrow */}
                  <p className="text-[9px] xs:text-[9.5px] sm:text-[10px] tracking-[0.26em] uppercase text-zinc-300 font-[family-name:var(--font-sans)] font-medium mb-2.5 sm:mb-3">
                    {channel.platform}
                  </p>

                  {/* Title */}
                  <h2 className="text-[24px] xs:text-[28px] sm:text-[32px] md:text-[36px] font-[family-name:var(--font-serif)] font-normal tracking-[0.03em] leading-[1.06] text-white mb-2.5 sm:mb-3">
                    {channel.titleLines.map((line, idx) => (
                      <span key={idx} className="block">
                        {line}
                      </span>
                    ))}
                  </h2>

                  {/* Description */}
                  <p className="text-[11.5px] xs:text-[12px] sm:text-[12.5px] font-[family-name:var(--font-sans)] font-light leading-relaxed text-zinc-300/90 mb-6 sm:mb-7">
                    {channel.description}
                  </p>

                  {/* Large Prominent CTA Link with Official Icon & Spaced Arrow */}
                  <div>
                    <Link
                      href={channel.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/cta inline-flex items-center gap-3 sm:gap-3.5 text-white/95 hover:text-white transition-colors duration-300 focus:outline-none"
                    >
                      <OfficialChannelIcon type={channel.type} />
                      <span className="text-[12px] xs:text-[13px] sm:text-[14px] tracking-[0.18em] uppercase font-[family-name:var(--font-sans)] font-medium">
                        {channel.actionLabel}
                      </span>
                      {/* Spaced arrow matching reference */}
                      <span className="text-base sm:text-lg tracking-normal transition-transform duration-300 group-hover/cta:translate-x-1.5 font-light">
                        →
                      </span>
                    </Link>
                  </div>

                </div>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}