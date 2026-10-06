import Image from "next/image";
import { siteConfig } from "@/config/site";

export function BeginningImages() {
  const { images } = siteConfig.beginning;

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-4 lg:gap-5 w-full max-w-[500px] mx-auto lg:mx-0">
      {/* Frame 1: Pendant / Necklace Detail */}
      <div className="relative w-1/2 aspect-[4/5] sm:aspect-[3/4] max-h-[380px] lg:max-h-[410px] overflow-hidden bg-[#E2DED7] shadow-[0_4px_25px_rgba(0,0,0,0.06)]">
        <Image
          src={images.necklace.src}
          alt={images.necklace.alt}
          fill
          sizes="(max-width: 640px) 44vw, (max-width: 1024px) 30vw, 240px"
          className="object-cover object-center select-none"
        />
      </div>

      {/* Frame 2: Hands & Fine Rings Detail */}
      <div className="relative w-1/2 aspect-[4/5] sm:aspect-[3/4] max-h-[380px] lg:max-h-[410px] overflow-hidden bg-[#E2DED7] shadow-[0_4px_25px_rgba(0,0,0,0.06)]">
        <Image
          src={images.rings.src}
          alt={images.rings.alt}
          fill
          sizes="(max-width: 640px) 44vw, (max-width: 1024px) 30vw, 240px"
          className="object-cover object-center select-none"
        />
      </div>
    </div>
  );
}