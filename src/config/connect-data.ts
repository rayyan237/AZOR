// src/config/connect-data.ts

export const connectData = {
  hero: {
    eyebrow: "CONNECT",
    title: "LET'S TALK.",
    prompts: [
      "Have a question about a piece?",
      "Want to know more about Azor?",
      "Or simply want to say hello?",
    ],
    image: {
      desktop: {
        src: "/images/connect/connect-hero.webp",
        alt: "Side portrait of a woman looking upward in gentle light wearing Azor diamond earrings and rings",
      },
      mobile: {
        src: "/images/connect/connect-hero-mobile.webp",
        alt: "Detail portrait of a woman wearing Azor fine jewelry",
      },
    },
  },
  channels: [
    {
      id: "instagram",
      platform: "INSTAGRAM",
      titleLines: ["FOLLOW THE", "WORLD OF AZOR."],
      description: "Behind the scenes, new pieces, moods and more.",
      actionLabel: "@AZOR",
      href: "https://instagram.com/azorjewel",
      type: "instagram" as const,
      image: {
        desktop: {
          src: "/images/connect/channel-instagram.webp",
          alt: "Crystal flower necklace resting on folded black velvet",
        },
        mobile: {
          src: "/images/connect/channel-instagram-mobile.jpg",
          alt: "Crystal flower necklace detail for mobile screens",
        },
      },
      imagePosition: "right" as const,
    },
    {
      id: "whatsapp",
      platform: "WHATSAPP",
      titleLines: ["TALK TO US", "DIRECTLY."],
      description: "We're here to help, answer your questions and guide you.",
      actionLabel: "CHAT WITH AZOR",
      href: "https://wa.me/yourwhatsappnumber",
      type: "whatsapp" as const,
      image: {
        desktop: {
          src: "/images/connect/channel-whatsapp.webp",
          alt: "Hands holding smartphone wearing delicate Azor stack rings",
        },
        mobile: {
          src: "/images/connect/channel-whatsapp-mobile.jpg",
          alt: "Hands holding smartphone ring detail on mobile",
        },
      },
      imagePosition: "left" as const,
    },
    {
      id: "email",
      platform: "EMAIL",
      titleLines: ["DROP US A LINE."],
      description: "For collaborations, press, or general inquiries.",
      actionLabel: "hello@azor.co",
      href: "mailto:hello@azor.co",
      type: "email" as const,
      image: {
        desktop: {
          src: "/images/connect/channel-email.webp",
          alt: "Azor luxury embossed card placed beside dried delicate florals",
        },
        mobile: {
          src: "/images/connect/channel-email-mobile.jpg",
          alt: "Azor luxury stationery detail on mobile",
        },
      },
      imagePosition: "right" as const,
    },
  ],
  closing: {
    eyebrow: "THE AZOR WORLD",
    title: "THIS IS AZOR.",
    description: "A signature worth wearing.",
    actions: [
      { label: "FOLLOW US", href: "https://instagram.com/azor", icon: "instagram" },
      { label: "CHAT WITH US", href: "https://wa.me/yourwhatsappnumber", icon: "whatsapp" },
    ],
    image: {
      src: "/images/connect/connect-closing-bg.webp",
      alt: "Azor teardrop diamond pendant and luxury box on velvet background",
    },
  },
};