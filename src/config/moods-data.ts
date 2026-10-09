// src/config/moods-data.ts

export interface MoodHeroData {
  slug: string;
  number: string;
  totalMoods: string;
  title: string;
  tagline: string;
  quote: string;
  description: string[];
  images: {
    desktop: {
      src: string;
      alt: string;
    };
    mobile: {
      src: string;
      alt: string;
    };
  };
  navigation: {
    prevSlug: string;
    nextSlug: string;
    currentIndex: string;
    totalIndex: string;
  };
}

export interface MoodData extends MoodHeroData {
  edit: {
    eyebrow: string;
    titleLines: string[];
    description: string[];
    image: {
      src: string;
      alt: string;
    };
  };
  piecesSection: {
    eyebrow: string;
  };
}

export const moodsData: Record<string, MoodData> = {
  // ==========================================
  // 01. SOFT
  // ==========================================
  soft: {
    slug: "soft",
    number: "01",
    totalMoods: "05",
    title: "SOFT.",
    tagline: "Delicate. Quiet. Effortless.",
    quote: "A whisper is louder than a shout.",
    description: [
      "Subtle silhouettes that rest like second skin,",
      "designed for quiet everyday grace.",
    ],
    images: {
      desktop: {
        src: "/images/moods/soft-hero.webp",
        alt: "Raw editorial portrait of a woman in soft light wearing delicate Azor minimalist fine jewelry",
      },
      mobile: {
        src: "/images/moods/soft-hero-mobile.webp",
        alt: "Detail portrait of woman wearing soft minimalist jewelry on mobile",
      },
    },
    navigation: {
      prevSlug: "timeless",
      nextSlug: "bold",
      currentIndex: "01",
      totalIndex: "05",
    },
    edit: {
      eyebrow: "THE SOFT EDIT",
      titleLines: ["GENTLE.", "WHISPERED.", "WEIGHTLESS."],
      description: [
        "Quiet lines. Airy textures. Tender presence.",
        "Pieces crafted to live gently against the skin, speaking only when needed.",
      ],
      image: {
        src: "/images/moods/soft-edit-ring.webp",
        alt: "Delicate thin gold diamond band resting on porous limestone",
      },
    },
    piecesSection: {
      eyebrow: "PIECES IN THIS MOOD",
    },
  },

  // ==========================================
  // 02. BOLD
  // ==========================================
  bold: {
    slug: "bold",
    number: "02",
    totalMoods: "05",
    title: "BOLD.",
    tagline: "Confident. Distinct. Unapologetic.",
    quote: "Presence needs no introduction.",
    description: [
      "Sculpted forms that command attention,",
      "unafraid to redefine modern luxury.",
    ],
    images: {
      desktop: {
        src: "/images/moods/bold-hero.webp",
        alt: "High-contrast editorial portrait featuring sculptural gold Azor cuffs and rings",
      },
      mobile: {
        src: "/images/moods/bold-hero-mobile.webp",
        alt: "Close crop portrait of model wearing prominent gold signet jewelry",
      },
    },
    navigation: {
      prevSlug: "soft",
      nextSlug: "romantic",
      currentIndex: "02",
      totalIndex: "05",
    },
    edit: {
      eyebrow: "THE BOLD EDIT",
      titleLines: ["STRUCTURED.", "STRIKING.", "UNWAVERING."],
      description: [
        "Heavy gold. Architectural profiles. Sharp edges.",
        "A statement collection for individuals who make an entrance before speaking a word.",
      ],
      image: {
        src: "/images/moods/bold-edit-ring.webp",
        alt: "Heavy faceted gold signet ring on matte basalt stone",
      },
    },
    piecesSection: {
      eyebrow: "PIECES IN THIS MOOD",
    },
  },

  // ==========================================
  // 03. ROMANTIC
  // ==========================================
  romantic: {
    slug: "romantic",
    number: "03",
    totalMoods: "05",
    title: "ROMANTIC.",
    tagline: "Tender. Dreamy. Personal.",
    quote: "Carrying memories close to the chest.",
    description: [
      "Floral motifs and heirloom warmth,",
      "crafted to celebrate tender connections.",
    ],
    images: {
      desktop: {
        src: "/images/moods/romantic-hero.webp",
        alt: "Warm luminous portrait of a woman wearing pearlescent drop necklace and delicate rings",
      },
      mobile: {
        src: "/images/moods/romantic-hero-mobile.webp",
        alt: "Mobile portrait of woman in natural warm glow with heirloom jewelry",
      },
    },
    navigation: {
      prevSlug: "bold",
      nextSlug: "mysterious",
      currentIndex: "03",
      totalIndex: "05",
    },
    edit: {
      eyebrow: "THE ROMANTIC EDIT",
      titleLines: ["CHERISHED.", "HEIRLOOM.", "DEVOTION."],
      description: [
        "Petal curves. Warm gold hues. Hidden inscriptions.",
        "Pieces made to hold chapters of love, devotion, and moments you never want to lose.",
      ],
      image: {
        src: "/images/moods/romantic-edit-ring.webp",
        alt: "Floral crystal ring surrounded by baby's breath florals on warm travertine",
      },
    },
    piecesSection: {
      eyebrow: "PIECES IN THIS MOOD",
    },
  },

  // ==========================================
  // 04. MYSTERIOUS
  // ==========================================
  mysterious: {
    slug: "mysterious",
    number: "04",
    totalMoods: "05",
    title: "MYSTERIOUS.",
    tagline: "Dark. Subtle. Intriguing.",
    quote: "Not everything needs to be said.",
    description: [
      "For the ones who move in silence,",
      "and leave a lasting impression.",
    ],
    images: {
      desktop: {
        src: "/images/moods/mysterious-hero.webp",
        alt: "Raw editorial portrait of a woman with hand touching her neck wearing Azor drop earrings and stack rings",
      },
      mobile: {
        src: "/images/moods/mysterious-hero-mobile.webp",
        alt: "Detail portrait of woman wearing fine jewelry on mobile",
      },
    },
    navigation: {
      prevSlug: "romantic",
      nextSlug: "timeless",
      currentIndex: "04",
      totalIndex: "05",
    },
    edit: {
      eyebrow: "THE MYSTERIOUS EDIT",
      titleLines: ["SHADOWS.", "SILHOUETTES.", "SIGNATURES."],
      description: [
        "Dark tones. Soft light. Bold details.",
        "A curation of pieces for the nights that feel like they were made for you.",
      ],
      image: {
        src: "/images/moods/mysterious-edit-ring.webp",
        alt: "Azor black gemstone solitaire ring resting on textured rugged stone",
      },
    },
    piecesSection: {
      eyebrow: "PIECES IN THIS MOOD",
    },
  },

  // ==========================================
  // 05. TIMELESS
  // ==========================================
  timeless: {
    slug: "timeless",
    number: "05",
    totalMoods: "05",
    title: "TIMELESS.",
    tagline: "Elegant. Refined. Enduring.",
    quote: "Trends change. Your signature doesn't have to.",
    description: [
      "Enduring forms passed across generations,",
      "rooted in precision craftsmanship.",
    ],
    images: {
      desktop: {
        src: "/images/moods/timeless-hero.webp",
        alt: "Clean studio portrait of a woman wearing classic round brilliant diamond solitaire necklace and solitaire ring",
      },
      mobile: {
        src: "/images/moods/timeless-hero-mobile.webp",
        alt: "Close profile of model wearing classic timeless diamond jewelry on mobile",
      },
    },
    navigation: {
      prevSlug: "mysterious",
      nextSlug: "soft",
      currentIndex: "05",
      totalIndex: "05",
    },
    edit: {
      eyebrow: "THE TIMELESS EDIT",
      titleLines: ["PURITY.", "PROPORTION.", "PERMANENCE."],
      description: [
        "Unwavering symmetry. Balanced carats. Sovereign lines.",
        "Icons created not for seasons, but for decades to come.",
      ],
      image: {
        src: "/images/moods/timeless-edit-ring.webp",
        alt: "Brilliant cut diamond engagement ring resting on cream marble plinth",
      },
    },
    piecesSection: {
      eyebrow: "PIECES IN THIS MOOD",
    },
  },
};