import Image from "next/image";
import { MoodItem } from "@/config/site";

interface MoodCardProps {
  item: MoodItem;
}

export function MoodCard({ item }: MoodCardProps) {
  return (
    <div className="flex flex-col items-center w-full select-none group text-center">
      {/* 4:5 Portrait Frame with Subtle Hairline Border */}
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#070D18] border border-white/15 transition-all duration-500 ease-out group-hover:border-white/35 shadow-[0_6px_24px_rgba(0,0,0,0.35)]">
        <Image
          src={item.image.src}
          alt={item.image.alt}
          fill
          sizes="(max-width: 640px) 46vw, (max-width: 1024px) 30vw, 20vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      {/* Typographic Stack Below Image */}
      <div className="flex flex-col items-center mt-3 xs:mt-3.5 sm:mt-4 space-y-1">
        {/* Mood Name */}
        <span className="text-[9.5px] xs:text-[10px] sm:text-[10.5px] font-[family-name:var(--font-sans)] font-semibold tracking-[0.24em] text-[#F8FAFC] uppercase leading-none">
          {item.title}
        </span>

        {/* Two-Line Subtext Stack */}
        <div className="text-[8.5px] xs:text-[9px] sm:text-[9.5px] font-[family-name:var(--font-sans)] font-light text-[#8E99A8] tracking-[0.025em] leading-[1.4] pt-0.5">
          <p>{item.descriptorLines[0]}</p>
          <p>{item.descriptorLines[1]}</p>
        </div>
      </div>
    </div>
  );
}