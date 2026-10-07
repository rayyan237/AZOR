import Image from "next/image";
import { MoodItem } from "@/config/site";

interface MoodCardProps {
  item: MoodItem;
}

export function MoodCard({ item }: MoodCardProps) {
  return (
    <div className="flex flex-col items-center w-full select-none group text-center">
      {/* Editorial Square Frame with Subtle Hairline Border */}
      <div className="relative w-full aspect-square overflow-hidden bg-[#0A0D12] border border-white/15 transition-all duration-500 ease-out group-hover:border-white/40">
        <Image
          src={item.image.src}
          alt={item.image.alt}
          fill
          sizes="(max-width: 640px) 46vw, (max-width: 1024px) 30vw, 16vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      {/* Typographic Stack Below Image */}
      <div className="flex flex-col items-center mt-3 xs:mt-3.5 sm:mt-4 space-y-1">
        {/* Mood Name */}
        <span className="text-[10px] xs:text-[10.5px] sm:text-[11px] font-[family-name:var(--font-sans)] font-semibold tracking-[0.24em] text-white uppercase leading-tight">
          {item.title}
        </span>

        {/* 3-Word Poetic Subtext */}
        <p className="text-[9px] xs:text-[9.5px] sm:text-[10px] font-[family-name:var(--font-sans)] font-light text-[#9CA3AF] tracking-[0.03em] leading-relaxed max-w-[140px] xs:max-w-[160px]">
          {item.descriptor}
        </p>
      </div>
    </div>
  );
}