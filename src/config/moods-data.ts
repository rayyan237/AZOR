// src/config/moods-data.ts

export interface MoodPieceItem {
  id: string;
  slug: string;
  title: string;
  descriptors: string[];
  image: {
    src: string;
    alt: string;
  };
}

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
    plaqueLines: string[];
  };
  piecesSection: {
    eyebrow: string;
    cta: {
      label: string;
      href: string;
    };
    pieces: MoodPieceItem[];
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
      plaqueLines: ["QUIETER TONES.", "GENTLE LIGHT.", "PURER YOU."],
    },
    piecesSection: {
      eyebrow: "PIECES IN THIS MOOD",
      cta: {
        label: "EXPLORE ALL SOFT PIECES",
        href: "/archive?mood=soft",
      },
      pieces: [
        {
          id: "the-aura",
          slug: "the-aura-studs",
          title: "THE AURA",
          descriptors: ["Barely there.", "Pure luminosity."],
          image: {
            src: "/images/archive/the-aura-studs.webp",
            alt: "Micro diamond bezel solitaire stud earrings",
          },
        },
        {
          id: "the-petal",
          slug: "the-petal-choker",
          title: "THE PETAL",
          descriptors: ["Fluid chain.", "Gentle contour."],
          image: {
            src: "/images/archive/the-petal-choker.webp",
            alt: "Delicate fine chain choker resting on satin",
          },
        },
        {
          id: "the-whisper",
          slug: "the-whisper-ring",
          title: "THE WHISPER",
          descriptors: ["Micro pave.", "Second skin."],
          image: {
            src: "/images/archive/the-whisper-ring.webp",
            alt: "Fine micro-pave eternity band on alabaster stone",
          },
        },
        {
          id: "the-lune",
          slug: "the-lune-bracelet",
          title: "THE LUNE",
          descriptors: ["Silken movement.", "Daily staple."],
          image: {
            src: "/images/archive/the-lune-bracelet.webp",
            alt: "Fine curb-chain bracelet with mini bezel crystal",
          },
        },
        {
          id: "the-serenity",
          slug: "the-serenity-ring",
          title: "THE SERENITY",
          descriptors: ["Softness in strength.", "Always."],
          image: {
            src: "/images/archive/the-serenity-ring.webp",
            alt: "Pearl and gold floral clover ring on dark stone",
          },
        },
      ],
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
      plaqueLines: ["SHARPER FORMS.", "CLEARER VISION.", "FIERCER YOU."],
    },
    piecesSection: {
      eyebrow: "PIECES IN THIS MOOD",
      cta: {
        label: "EXPLORE ALL BOLD PIECES",
        href: "/archive?mood=bold",
      },
      pieces: [
        {
          id: "the-monolith",
          slug: "the-monolith-ring",
          title: "THE MONOLITH",
          descriptors: ["Heavy silhouette.", "Solid yellow gold."],
          image: {
            src: "/images/archive/the-monolith-ring.webp",
            alt: "Substantial architectural square signet ring",
          },
        },
        {
          id: "the-vanguard",
          slug: "the-vanguard-choker",
          title: "THE VANGUARD",
          descriptors: ["Solid collar.", "Striking contour."],
          image: {
            src: "/images/archive/the-vanguard-choker.webp",
            alt: "Polished heavy gold neck torque collar",
          },
        },
        {
          id: "the-sovereign",
          slug: "the-sovereign-cuff",
          title: "THE SOVEREIGN",
          descriptors: ["Chiseled geometry.", "Defiant poise."],
          image: {
            src: "/images/archive/the-sovereign-cuff.webp",
            alt: "Wide open cuff bracelet in brushed finish gold",
          },
        },
        {
          id: "the-prism",
          slug: "the-prism-hoops",
          title: "THE PRISM",
          descriptors: ["Beveled edge.", "High reflection."],
          image: {
            src: "/images/archive/the-prism-hoops.webp",
            alt: "Thick faceted modern geometric hoop earrings",
          },
        },
        {
          id: "the-solis",
          slug: "the-solis-signet",
          title: "THE SOLIS",
          descriptors: ["Solar carving.", "Commanding presence."],
          image: {
            src: "/images/archive/the-solis-signet.webp",
            alt: "Engraved center stone signet ring on slate",
          },
        },
      ],
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
      plaqueLines: ["WARMER HEARTS.", "DEEPER BONDS.", "KINDER YOU."],
    },
    piecesSection: {
      eyebrow: "PIECES IN THIS MOOD",
      cta: {
        label: "EXPLORE ALL ROMANTIC PIECES",
        href: "/archive?mood=romantic",
      },
      pieces: [
        {
          id: "the-florence",
          slug: "the-florence-pendant",
          title: "THE FLORENCE",
          descriptors: ["Petal motif.", "Brilliant center crystal."],
          image: {
            src: "/images/archive/the-florence-pendant.webp",
            alt: "Five-petal crystal flower pendant on delicate cable chain",
          },
        },
        {
          id: "the-coeur",
          slug: "the-coeur-locket",
          title: "THE COEUR",
          descriptors: ["Vintage latch.", "Keepsake vault."],
          image: {
            src: "/images/archive/the-coeur-locket.webp",
            alt: "Hand-engraved gold heart locket resting on silk",
          },
        },
        {
          id: "the-rosier",
          slug: "the-rosier-band",
          title: "THE ROSIER",
          descriptors: ["Engraved vine.", "Warm rose tone."],
          image: {
            src: "/images/archive/the-rosier-band.webp",
            alt: "Botanical engraved floral motif wedding band",
          },
        },
        {
          id: "the-blush",
          slug: "the-blush-earrings",
          title: "THE BLUSH",
          descriptors: ["Freshwater pearl.", "Subtle drop."],
          image: {
            src: "/images/archive/the-blush-earrings.webp",
            alt: "Natural baroque pearl drop earrings in yellow gold",
          },
        },
        {
          id: "the-tender",
          slug: "the-tender-chain",
          title: "THE TENDER",
          descriptors: ["Interlocking heart.", "Enduring link."],
          image: {
            src: "/images/archive/the-tender-chain.webp",
            alt: "Fine rope chain necklace with miniature heart bead",
          },
        },
      ],
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
      plaqueLines: ["DARKER TONES.", "SOFTER LIGHT.", "BOLDER YOU."],
    },
    piecesSection: {
      eyebrow: "PIECES IN THIS MOOD",
      cta: {
        label: "EXPLORE ALL MYSTERIOUS PIECES",
        href: "/archive?mood=mysterious",
      },
      pieces: [
        {
          id: "the-noir",
          slug: "the-noir-pendant",
          title: "THE NOIR",
          descriptors: ["Mysterious. Confident.", "Unforgettable."],
          image: {
            src: "/images/archive/the-noir-pendant.webp",
            alt: "Teardrop diamond halo pendant on black silk",
          },
        },
        {
          id: "the-velvet",
          slug: "the-velvet-earrings",
          title: "THE VELVET",
          descriptors: ["Quiet luxury.", "Bold presence."],
          image: {
            src: "/images/archive/the-velvet-earrings.webp",
            alt: "Onyx and diamond halo drop earrings on velvet",
          },
        },
        {
          id: "the-obscura",
          slug: "the-obscura-ring",
          title: "THE OBSCURA",
          descriptors: ["Subtle. Sharp.", "Always."],
          image: {
            src: "/images/archive/the-obscura-ring.webp",
            alt: "Black gemstone ring on travertine pedestal",
          },
        },
        {
          id: "the-eclipse",
          slug: "the-eclipse-bracelet",
          title: "THE ECLIPSE",
          descriptors: ["Understated. Powerful.", "Timeless."],
          image: {
            src: "/images/archive/the-eclipse-bracelet.webp",
            alt: "Diamond line tennis bracelet on dark fabric",
          },
        },
        {
          id: "the-serenity",
          slug: "the-serenity-ring",
          title: "THE SERENITY",
          descriptors: ["Softness in strength.", "Always."],
          image: {
            src: "/images/archive/the-serenity-ring.webp",
            alt: "Pearl and gold floral clover ring on dark stone",
          },
        },
      ],
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
      plaqueLines: ["CLEARER CUTS.", "ENDURING FORM.", "TRUEST YOU."],
    },
    piecesSection: {
      eyebrow: "PIECES IN THIS MOOD",
      cta: {
        label: "EXPLORE ALL TIMELESS PIECES",
        href: "/archive?mood=timeless",
      },
      pieces: [
        {
          id: "the-solitaire",
          slug: "the-solitaire-ring",
          title: "THE SOLITAIRE",
          descriptors: ["Four-prong crown.", "Perfect clarity."],
          image: {
            src: "/images/archive/the-solitaire-ring.webp",
            alt: "Classic 4-prong diamond solitaire ring in white gold",
          },
        },
        {
          id: "the-eternity",
          slug: "the-eternity-band",
          title: "THE ETERNITY",
          descriptors: ["Seamless halo.", "Unbroken circle."],
          image: {
            src: "/images/archive/the-eternity-band.webp",
            alt: "Channel set round diamond eternity band",
          },
        },
        {
          id: "the-heritage",
          slug: "the-heritage-pendant",
          title: "THE HERITAGE",
          descriptors: ["Single stone drop.", "Everyday gold."],
          image: {
            src: "/images/archive/the-heritage-pendant.webp",
            alt: "Bezel set floating diamond solitaire pendant",
          },
        },
        {
          id: "the-linea",
          slug: "the-linea-tennis",
          title: "THE LINEA",
          descriptors: ["Articulated link.", "Timeless glow."],
          image: {
            src: "/images/archive/the-linea-tennis.webp",
            alt: "Diamond line tennis bracelet in 18k yellow gold",
          },
        },
        {
          id: "the-classic-hoop",
          slug: "the-classic-hoop",
          title: "THE CLASSIC HOOP",
          descriptors: ["Balanced curvature.", "Subtle click."],
          image: {
            src: "/images/archive/the-classic-hoop.webp",
            alt: "Polished medium round gold tube hoop earrings",
          },
        },
      ],
    },
  },
};