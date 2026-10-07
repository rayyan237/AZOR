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
  descriptorLines: [string, string];
  image: {
    src: string;
    alt: string;
  };
}

export interface LetterItem {
  id: string;
  tag: string;
  title: string;
  href: string;
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
          src: "/images/archive-01.webp",
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
    eyebrow: "THE AZOR MOOD",
    title: "WHAT ARE YOU FEELING?",
    description: "Different moods. Different pieces. Same you.",
    items: [
      {
        id: "01",
        title: "SOFT",
        descriptorLines: ["Delicate. Quiet.", "Effortless."],
        image: {
          src: "/images/mood-soft.webp",
          alt: "Soft mood white flower petals",
        },
      },
      {
        id: "02",
        title: "BOLD",
        descriptorLines: ["Confident. Distinct.", "Unapologetic."],
        image: {
          src: "/images/mood-bold.webp",
          alt: "Bold mood elegant woman silhouette with sunglasses",
        },
      },
      {
        id: "03",
        title: "ROMANTIC",
        descriptorLines: ["Tender. Dreamy.", "Personal."],
        image: {
          src: "/images/mood-romantic.webp",
          alt: "Romantic mood deep red rose petals",
        },
      },
      {
        id: "04",
        title: "MYSTERIOUS",
        descriptorLines: ["Dark. Subtle.", "Intriguing."],
        image: {
          src: "/images/mood-mysterious.webp",
          alt: "Mysterious mood evocative close-up gaze",
        },
      },
      {
        id: "05",
        title: "TIMELESS",
        descriptorLines: ["Elegant. Refined.", "Enduring."],
        image: {
          src: "/images/mood-timeless.webp",
          alt: "Timeless mood night skyline architecture with moon",
        },
      },
    ] as MoodItem[],
  },
  azorGirl: {
    eyebrow: "05 / THE AZOR GIRL",
    titleLines: ["AZOR LIVES", "OUTSIDE THIS SCREEN."],
    narrative: [
      "Real people. Real moments.",
      "Your stories are what make this brand",
      "what it is.",
    ],
    cta: {
      label: "FOLLOW THE JOURNEY",
      href: "#connect",
    },
    instagram: {
      label: "FOLLOW US",
      sublabel: "ON INSTAGRAM",
      href: "https://instagram.com/azorjewelry",
    },
    mosaic: [
      {
        src: "/images/girl-01.webp",
        alt: "Azor diamond drop earring on model close-up",
      },
      {
        src: "/images/girl-02.webp",
        alt: "Model wearing sunglasses with diamond earrings",
      },
      {
        src: "/images/girl-03.webp",
        alt: "Atmospheric editorial city architecture towers",
      },
      {
        src: "/images/girl-04.webp",
        alt: "Fine jewelry layered necklace on model",
      },
      {
        src: "/images/girl-05.webp",
        alt: "Editorial model portrait in evening sunglasses",
      },
      {
        src: "/images/girl-06.webp",
        alt: "Editorial woman walking down city street wearing Azor",
      },
    ],
  },
  letters: {
    title: "AZOR LETTERS",
    description: "Thoughts, stories and little notes from the world of Azor.",
    cta: {
      label: "READ ALL",
      href: "#letters",
    },
    items: [
      {
        id: "01",
        tag: "LETTER 01",
        title: "On becoming unforgettable.",
        href: "#letter-01",
        image: {
          src: "/images/letter-01.webp",
          alt: "Editorial woman in silhouette wearing Azor jewelry",
        },
      },
      {
        id: "02",
        tag: "LETTER 02",
        title: "Why we believe everyday deserves something beautiful.",
        href: "#letter-02",
        image: {
          src: "/images/letter-02.webp",
          alt: "White floral botanical close up",
        },
      },
      {
        id: "03",
        tag: "LETTER 03",
        title: "For the girls who wear black.",
        href: "#letter-03",
        image: {
          src: "/images/letter-03.webp",
          alt: "Moody architectural skyline at dusk",
        },
      },
      {
        id: "04",
        tag: "LETTER 04",
        title: "The art of keeping things simple.",
        href: "#letter-04",
        image: {
          src: "/images/letter-04.webp",
          alt: "Fine gold necklace laid on neutral folded fabric",
        },
      },
    ] as LetterItem[],
  },
  closing: {
    eyebrow: "THIS IS MORE THAN JEWELRY.",
    title: "THIS IS AZOR.",
    description: "Find the piece that feels like you.",
    actions: {
      instagram: {
        label: "FOLLOW US",
        href: "https://instagram.com/azorjewelry",
      },
      whatsapp: {
        label: "CHAT WITH US",
        href: "https://wa.me/1234567890",
      },
    },
    images: {
      desktop: {
        src: "/images/closing-desktop.webp",
        alt: "Model wearing Azor pendant necklace and delicate ring against natural dark fabric",
      },
      mobile: {
        src: "/images/closing-mobile.webp",
        alt: "Model wearing Azor pendant necklace vertical detail",
      },
    },
  },
  footer: {
    brand: "AZOR.",
    tagline: "A signature worth wearing.",
    copyright: "© 2026 AZOR. All rights reserved.",
    links: [
      { label: "INDEX", href: "#" },
      { label: "ARCHIVE", href: "#archive" },
      { label: "THE MOOD", href: "#moods" },
      { label: "LETTERS", href: "#letters-archive" },
      { label: "ABOUT", href: "#philosophy" },
      { label: "PRIVACY", href: "#privacy" },
    ],
    socials: [
      { platform: "instagram", href: "https://instagram.com/azorjewelry" },
      { platform: "whatsapp", href: "https://wa.me/1234567890" },
    ],
  },
};
