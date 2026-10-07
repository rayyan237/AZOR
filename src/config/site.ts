export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: "instagram" | "whatsapp";
  label: string;
  url: string;
}

export interface ArchiveItem {
  id: string;
  title: string;
  image: {
    src: string;
    alt: string;
  };
  href: string;
}

export interface MoodItem {
  id: string;
  title: string;
  image: {
    src: string;
    alt: string;
  };
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
        src: "/images/beginning-necklace.jpg",
        alt: "Close-up detail of handcrafted four-petal diamond pendant necklace by Azor",
      },
      rings: {
        src: "/images/beginning-rings.jpg",
        alt: "Close-up view of delicate diamond bands and fine rings on elegant hands by Azor",
      },
    },
    rightTaglines: [
      { prefix: "SOMETHING", highlight: "SMALL." },
      { prefix: "SOMETHING", highlight: "PERSONAL." },
      { prefix: "SOMETHING", highlight: "YOURS." },
    ],
  },
  philosophy: {
    eyebrow: "02 / OUR PHILOSOPHY",
    titleLines: ["JEWELRY", "SHOULD FEEL", "PERSONAL."],
    narrative: [
      "Not just for special occasions.",
      "But for your everyday moments,",
      "the in-betweens, and everything",
      "that makes you, you.",
    ],
    cta: {
      label: "THE AZOR PHILOSOPHY",
      href: "#about",
    },
    images: {
      desktop: {
        src: "/images/philosophy-desktop.webp",
        alt: "Azor philosophy portrait featuring fine jewelry on dark editorial background",
      },
      mobile: {
        src: "/images/philosophy-mobile.webp",
        alt: "Azor philosophy vertical portrait showcasing signature jewelry on mobile",
      },
    },
  },
  archive: {
    title: "THE AZOR ARCHIVE",
    subtitle: "PIECES WITH A STORY.",
    description: "Explore the pieces that make up the world of Azor.",
    cta: {
      label: "EXPLORE ALL",
      href: "#signature",
    },
    items: [
      {
        id: "001",
        title: "THE SIGNATURE",
        image: {
          src: "/images/archive-01.jpeg",
          alt: "The Signature four-petal pendant necklace by Azor",
        },
        href: "#archive-01",
      },
      {
        id: "002",
        title: "THE AFTERGLOW",
        image: {
          src: "/images/archive-02.webp",
          alt: "The Afterglow diamond drop earring worn on model by Azor",
        },
        href: "#archive-02",
      },
      {
        id: "003",
        title: "THE NOIR",
        image: {
          src: "/images/archive-03.webp",
          alt: "The Noir black gemstone ring by Azor",
        },
        href: "#archive-03",
      },
      {
        id: "004",
        title: "THE PETAL",
        image: {
          src: "/images/archive-04.webp",
          alt: "The Petal floral sculptural ring by Azor",
        },
        href: "#archive-04",
      },
      {
        id: "005",
        title: "THE LUNE",
        image: {
          src: "/images/archive-05.webp",
          alt: "The Lune crescent moon pendant necklace by Azor",
        },
        href: "#archive-05",
      },
    ] as ArchiveItem[],
  },
  moods: {
    eyebrow: "04 / THE AZOR MOOD",
    title: "WHAT ARE YOU FEELING?",
    description: "Different moods. Different pieces. Same you.",
    items: [
      {
        id: "01",
        title: "SOFT",
        image: {
          src: "/images/mood-soft.webp",
          alt: "Soft mood delicate botanical flower",
        },
      },
      {
        id: "02",
        title: "BOLD",
        image: {
          src: "/images/mood-bold.webp",
          alt: "Bold mood high-fashion silhouette",
        },
      },
      {
        id: "03",
        title: "ROMANTIC",
        image: {
          src: "/images/mood-romantic.webp",
          alt: "Romantic mood moon over rippling waters",
        },
      },
      {
        id: "04",
        title: "MYSTERIOUS",
        image: {
          src: "/images/mood-mysterious.webp",
          alt: "Mysterious mood intimate close-up gaze",
        },
      },
      {
        id: "05",
        title: "TIMELESS",
        image: {
          src: "/images/mood-timeless.webp",
          alt: "Timeless mood night skyline architecture",
        },
      },
      {
        id: "06",
        title: "UNAPOLOGETIC",
        image: {
          src: "/images/mood-unapologetic.webp",
          alt: "Unapologetic mood dramatic staircase editorial portrait",
        },
      },
    ] as MoodItem[],
  },
};
