export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: "instagram" | "whatsapp";
  label: string;
  url: string;
}

export const siteConfig = {
  name: "AZOR",
  title: "AZOR — A Digital Jewelry House",
  description:
    "AZOR is a contemporary digital jewelry house. Explore our signature collection, bespoke archives, and timeless craftsmanship.",
  url: "https://azorjewelry.com",
  ogImage: "https://azorjewelry.com/og.jpg",
  keywords: [
    "Azor",
    "Digital Jewelry House",
    "Luxury Fine Jewelry",
    "Bespoke Jewelry",
    "Signature Collection",
  ],
  navItems: [
    { label: "WORLD", href: "#world" },
    { label: "ARCHIVE", href: "#archive" },
    { label: "SIGNATURE", href: "#signature" },
    { label: "LETTERS", href: "#letters" },
    { label: "ABOUT", href: "#about" },
    { label: "CONNECT", href: "#connect" },
  ] as NavItem[],
  socials: [
    {
      platform: "instagram",
      label: "Instagram",
      url: "https://instagram.com/azorjewelry",
    },
    {
      platform: "whatsapp",
      label: "WhatsApp",
      url: "https://wa.me/1234567890",
    },
  ] as SocialLink[],
  hero: {
    eyebrow: "A DIGITAL JEWELRY HOUSE",
    brand: "AZOR",
    tagline: "A signature worth wearing.",
    statement1: "More than jewelry.",
    statement2: "It's a feeling.",
    ctaScroll: "SCROLL TO EXPLORE",
    pagination: "01 / 11",
    images: {
      desktop: {
        src: "/images/hero-desktop.webp",
        alt: "Fine jewelry portrait showcasing signature rings and earrings by Azor on desktop",
      },
      mobile: {
        src: "/images/hero-mobile.webp",
        alt: "Fine jewelry vertical portrait showcasing signature rings and earrings by Azor on mobile",
      },
    },
  },
  beginning: {
    eyebrow: "01 / THE BEGINNING",
    titleLine1: "IT STARTS",
    titleLine2: "WITH A DETAIL.",
    narrative: [
      "A small piece.",
      "A quiet moment.",
      "Something that doesn't just complete you,",
      "but becomes a part of your story.",
    ],
    cta: {
      label: "DISCOVER AZOR",
      href: "#signature",
    },
    images: {
      necklace: {
        src: "/images/beginning-necklace.webp",
        alt: "Close-up detail of handcrafted four-petal diamond pendant necklace by Azor",
      },
      rings: {
        src: "/images/beginning-rings.webp",
        alt: "Close-up view of delicate diamond bands and fine rings on elegant hands by Azor",
      },
    },
    rightTaglines: [
      "SOMETHING",
      "SMALL.",
      "SOMETHING",
      "PERSONAL.",
      "SOMETHING",
      "YOURS.",
    ],
  },
};