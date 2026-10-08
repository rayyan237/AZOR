// src/components/connect/ConnectChannels.tsx
import Image from "next/image";
import Link from "next/link";
import { connectData } from "@/config/connect-data";

function ChannelIcon({ type }: { type: string }) {
  if (type === "instagram") {
    return (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    );
  }
  if (type === "whatsapp") {
    return (
      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    );
  }
  return (
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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
      className="relative w-full bg-[#04070D] text-white py-10 xs:py-12 sm:py-16 md:py-20 px-5 xs:px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-20 select-none"
    >
      <div className="max-w-[1440px] mx-auto space-y-6 sm:space-y-8 md:space-y-10">
        {channels.map((channel) => {
          // In the design, WhatsApp text is anchored on the right, Instagram and Email on the left
          const isTextRight = channel.imagePosition === "left";

          return (
            <div
              key={channel.id}
              className="group relative w-full h-[260px] xs:h-[280px] sm:h-[320px] md:h-[360px] lg:h-[380px] border border-white/10 overflow-hidden flex items-center transition-colors duration-500 hover:border-white/25"
            >
              {/* 
                Full-Bleed Raw Background Photography
                - Zero darken filters
                - Zero color/gradient overlays
              */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={channel.image.src}
                  alt={channel.image.alt}
                  fill
                  quality={95}
                  sizes="(max-width: 1440px) 100vw, 1440px"
                  className="object-cover object-center select-none pointer-events-none transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>

              {/* Text Overlay Box: Alternates Left / Right on Desktop, Natural Flow on Mobile */}
              <div
                className={`relative z-10 w-full flex ${
                  isTextRight ? "justify-start md:justify-end" : "justify-start"
                } px-6 xs:px-8 sm:px-12 md:px-14 lg:px-16`}
              >
                <div className="max-w-[320px] xs:max-w-[360px] sm:max-w-[400px] flex flex-col items-start text-left">
                  
                  {/* Platform Eyebrow */}
                  <p className="text-[8.5px] xs:text-[9px] sm:text-[9.5px] tracking-[0.26em] uppercase text-zinc-300 font-[family-name:var(--font-sans)] font-medium mb-2 sm:mb-2.5">
                    {channel.platform}
                  </p>

                  {/* Title */}
                  <h2 className="text-[22px] xs:text-[25px] sm:text-[28px] md:text-[32px] font-[family-name:var(--font-serif)] font-normal tracking-[0.03em] leading-[1.06] text-white mb-2 sm:mb-2.5">
                    {channel.titleLines.map((line, idx) => (
                      <span key={idx} className="block">
                        {line}
                      </span>
                    ))}
                  </h2>

                  {/* Description */}
                  <p className="text-[11px] xs:text-[11.5px] sm:text-[12px] font-[family-name:var(--font-sans)] font-light leading-relaxed text-zinc-300/90 mb-5 sm:mb-6">
                    {channel.description}
                  </p>

                  {/* Interactive CTA Link */}
                  <div>
                    <Link
                      href={channel.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-2.5 text-zinc-200 hover:text-white transition-colors duration-300 focus:outline-none"
                    >
                      <ChannelIcon type={channel.type} />
                      <span className="text-[9.5px] xs:text-[10px] sm:text-[10.5px] tracking-[0.2em] uppercase font-[family-name:var(--font-sans)] font-medium border-b border-white/40 group-hover/btn:border-white pb-0.5 transition-colors">
                        {channel.actionLabel}
                      </span>
                      <span className="text-xs transition-transform duration-300 group-hover/btn:translate-x-1">
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