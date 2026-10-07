import Image from "next/image";
import { MoodItem } from "@/config/site";

interface MoodCardProps {
  item: MoodItem;
}

export function MoodCard({ item }: MoodCardProps) {
  return (
    <div className="flex flex-col items-center w-full select-none group">
      {/* Portrait Image Frame */}
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#0A0D12] border border-white/10 transition-transform duration-500 ease-out group-hover:scale-[1.02]">
        <Image
          src={item.image.src}
          alt={item.image.alt}
          fill
          sizes="(max-width: 640px) 60vw, (max-width: 1024px) 30vw, 16vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      {/* Mood Title Below Card */}
      <span className="text-[9px] xs:text-[9.5px] sm:text-[10px] lg:text-[10.5px] font-[family-name:var(--font-sans)] font-medium tracking-[0.24em] text-white/90 uppercase mt-3 sm:mt-3.5 text-center">
        {item.title}
      </span>
    </div>
  );
}