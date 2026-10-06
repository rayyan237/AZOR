import Image from "next/image";
import { siteConfig } from "@/config/site";

export function BeginningImages() {
  const { images } = siteConfig.beginning;

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5 w-full max-w-[480px] mx-auto lg:mx-0">
      {/* Frame 1: Pendant / Necklace Detail */}
      <div className="relative aspect-[4/5] sm:aspect-square w-full overflow-hidden bg-[#e8e2d8]">
        <Image
          src={images.necklace.src}
          alt={images.necklace.alt}
          fill
          sizes="(max-width: 640px) 46vw, (max-width: 1024px) 32vw, 230px"
          className="object-cover object-center select-none"
        />
      </div>

      {/* Frame 2: Hands & Rings Detail */}
      <div className="relative aspect-[4/5] sm:aspect-square w-full overflow-hidden bg-[#e8e2d8]">
        <Image
          src={images.rings.src}
          alt={images.rings.alt}
          fill
          sizes="(max-width: 640px) 46vw, (max-width: 1024px) 32vw, 230px"
          className="object-cover object-center select-none"
        />
      </div>
    </div>
  );
}