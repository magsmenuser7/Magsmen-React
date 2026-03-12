import teluguFoodsLogo from "../../assets/logos/Telugu-foods.jpg";
import tenalidoublehorselogo from "/assets/works/tenali-double-horse.jpg"

import telugufoods from "/assets/works/telugu-foods.mp4"
import suryacolorsvideo from "/assets/works/surya-colors-video.mp4"
import tdhrishikavideo from "/assets/works/tdh-rishika.mp4"
import tenalidoublehorsevideo from "/assets/works/tenali-double-horse.mp4"
import triplexvideo from "/assets/works/triplex-video.mp4"
import vsbvideo from "/assets/works/vsbgroup.mp4"
import zavainevideo from "/assets/works/zavaine-video.mp4"
import bhramaratownships from "public/assets/works/bhramara.png"




import chickengarammeat from "/assets/works/chicken-garam-meat.png"
import suryacolorsthree from "/assets/works/surya-color-three.png"
import tenalidoubleproducts from "/assets/works/tenali-double-products.png"
import triplexone from "/assets/works/triplex-one.png"
import vsb from "/assets/works/VSB.png"
import vsbtwo from "/assets/works/vsb-two.png"
import zavaineone from "/assets/works/zavaine-one.png"
import levelupkhammam from "/assets/levelupkhammam.jpg"
import levelupone from "../../public/assets/lvluphd.jpeg"


// import tdhrishika from "/assets/works/tdh-garalu.png"










export type CaseStudy = {
  slug: string;
  category: string;
  title: string;
  tag: string;
  description: string;

  client: string;
  industry: string;
  services: string[];
  timeline: string;
  outcome: string;

  challengeIntro: string;
  challengeHighlight: string;
  stakes: string;

  strategy: {
    type?: string;
    title: string;
    description: string;
    tools?: string[];
    coreInsight?: string;
    strategicPivot?: string;
    brandPromise?: string;
    pillars?: {
      title: string;
      description: string;
    }[];
  }[];

  work?: {
  title: string;
  sections: {
    type: string;
    heading: string;
    hero?: {
      image?: string;
      image1?:string;
      image2?:string;
      image3?:string;
      image4?:string;
      caption: string;
      cta?: string;
    };
    logo?: {
      image: string;
      image1?:string;
      image2?:string;
      image3?:string;
      image4?:string;
      brandName: string;
      caption: string;
    };
    colorPalette?: {
      colors: string[];
      label: string;
    };
    typography?: {
      primary: string;
      secondary: string;
      caption: string;
    };
    cards?: {
      title: string;
      description: string;
    }[];
    innovation?: string;
    pillars?: {
      title: string;
      description: string;
    }[];
    tools?: string[];
    coreInsight?: string;
    strategicPivot?: string;
    brandPromise?: string;
    heroCaption?: string;
    ctaLabel?: string;
    url?: string;
    highlights?: {
      title: string;
      description: string;
    }[];
    film?: {
      title: string;
      description: string;
      video?: string;      // OR iframe URL
      poster?: string;     // thumbnail
      result: string;
    };
    collateral?: {
      heading: string;
      items: string[];
    };
  }[];
};

  impact: {
  title: string;
  subtitle: string;
  blocks: {
    heading: string;
    items: string[];
  }[];
};

  moreWork: {
  title: string;
  items: {
    slug: string;
    category: string;
    emoji: string;
    title: string;
    description: string;
    video?:string;
  }[];
};

  brandElements?: {
  title: string;
  sections: {
    type: string;
    heading: string;
    heroCaption?: string;
    logo?: {
      monogram: string;
      brandName: string;
      caption: string;
    };
    colorPalette?: {
      colors: string[];
      label: string;
    };
    typography?: {
      primary: string;
      secondary: string;
      caption: string;
    };
    ctaLabel?: string;
    stats?: {
      title: string;
      description: string;
    }[];
    innovation?: string;
    cards?: {
      title: string;
      description: string;
    }[];
  }[];
};

  

  results: string[];

  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
};



const VIDEOS_BY_SLUG: Record<string, string> = {
  suryacolorsvideo: suryacolorsvideo,
  tenalidoublehorsevideo: tenalidoublehorsevideo,
  triplexvideo: triplexvideo,
  telugufoods: telugufoods,
  rishika: tdhrishikavideo,
  vsbgroup: vsbvideo,
  zavaine: zavainevideo,
};


export const caseStudies: CaseStudy[] = [
  {
    slug: "telugu-foods",
    category: "Food & FMCG",
    title: "Telugu Foods",
    tag: "Brand Growth & Market Expansion",
    description:
      "Built a strong digital-first food brand by driving awareness, engagement, and B2B growth through an integrated marketing strategy.",

    client: "Telugu Foods",
    industry: "Food & FMCG",
    services: [
      "Digital & Social Media Strategy",
      "Brand Campaign Planning",
      "Influencer & Viral Marketing",
      "B2B Event & Show Planning",
      "Annual Brand Planning",
      "E-commerce & PAN-India Growth Strategy",
    ],
    timeline: "Ongoing Brand & Growth Engagement",
    outcome: "Built a strong digital-first food brand by driving awareness, engagement, and B2B growth through an integrated marketing strategy.",

    challengeIntro:
      "Telugu Foods faced low brand visibility and sales pressure in a crowded food market. The brand lacked a clear digital and social media strategy, and its B2B business was underperforming despite strong product potential.",
    challengeHighlight:
      "Main Insight: Consistent digital engagement and community-driven communication are critical for food brands to scale in competitive markets.",
    stakes:
      "Reason Identified: Absence of a structured digital strategy and limited B2B engagement restricted brand growth and recall.",

  strategy: [
  {
    type: "discovery",
    title: "Discovery",
    description:
      "We assessed the brand’s digital presence, customer interactions, B2B touchpoints, and market positioning to identify growth gaps.",
    tools: [
      "Digital Audit",
      "Audience Mapping",
      "Content Gap Analysis",
      "B2B Funnel Review",
      "Market Expansion Study",
    ],
  },
  {
    type: "foundation",
    title: "Strategy & Direction",
    description:
      "We designed a comprehensive digital-first strategy supported by influencer marketing, events, and structured annual planning.",
    coreInsight:
      "Food brands grow faster when they build daily relevance through conversation, not just campaigns.",
    strategicPivot:
      "From inconsistent promotions to a structured, always-on digital and engagement-led brand approach.",
    brandPromise:
      "To stay culturally relevant, accessible, and trusted across both consumers and trade partners.",
  },
  {
  type: "visual",
  title: "Digital & Experience Philosophy",
  description:
    "The brand experience was designed to be engaging, conversational, and scalable across platforms.",
  pillars: [
    {
      title: "Color Strategy",
      description:
        "Community-driven and culturally rooted.",
    },
    {
      title: "Influencer Strategy:",
      description:
        "Credible, regional, and high-engagement",
    },
    {
      title: "B2B Experience:",
      description:
        "Relationship-led through shows, events, and direct engagement",
    },
  ],
}
],
work: {
  title: "The Work",
  sections: [
    {
      type: "branding", 
      heading: "Logo & Brand Identity",
      logo: {
        image: "../assets/logos/Telugu-foods.jpg",
        image1:"../assets/logos/chicken-garam-meat.png",
        brandName: "Telugu Foods",
        caption:
          "Created and executed a comprehensive digital and social media plan, led influencer and viral campaigns, planned and executed B2B shows and events, developed annual brand plans, and rolled out a PAN-India e-commerce-led growth strategy.",
      },
      colorPalette: {
        colors: ["#da1f26", "#ebc560", "#cbdb2a", "#e6e8e7"],
        label: "Brand color system",
      },
      typography: {
        primary: "DM Sans Bold",
        secondary: "Inter Regular",
        caption: "Type hierarchy and font pairings",
      },
    },

    {
      type: "packaging", 
      heading: "Packaging System",

      hero: {
        image: "../assets/logos/Telugu-foods.jpg",
        caption:
          "Complete packaging system across 12 SKUs unified visual language with product specific color coding",
        cta: "Product Range",
      },

      cards: [
        {
          title: "Shelf Impact",
          description:
            "Implemented a PAN-India digital, social, and B2B strategy that significantly improved brand visibility, engagement, and sales.",
        },
        // {
        //   title: "Sustainability Story",
        //   description:
        //     "100% recyclable materials with transparent sourcing information",
        // },
      ],

      innovation:
        "Key Innovation: QR codes linking to farmer video stories connecting consumers directly to source, building trust through radical transparency.",
    },
    {
  type: "website",
  heading: "Digital Experience",

  hero: {
    image: "../assets/works/chicken-garam-meat.png",
    image1: "../assets/works/telugu-tomato.png",
    caption:
      " ",
  },

  highlights: [
    {
      title: "Mobile Experience",
      description:
        "Mobile-first design with 78% improvement in conversion rate",
    },
    {
      title: "Product Pages",
      description:
        "Enhanced product storytelling with video, sourcing details, and reviews",
    },
  ],
},
{
  type: "campaign",
  heading: "Brand Film & Campaign",

  film: {
  title: "From Soil to Soul",
  description:
    "",
  result:
    "",
  video: telugufoods,     // OR iframe URL
  poster: "/assets/films/from-soil-to-soul.jpg",   
},

  collateral: {
    heading: "Marketing Collateral",
    items: [
      "Social Media Templates",
      "Retail POS Materials",
      "Trade Presentation Deck",
      "Brand Guidelines",
    ],
  },
}

  ],
},

impact: {
  title: "Final Positioning",
  subtitle:
    "A culturally relevant, digitally strong food brand with growing national presence and strong trade relationships.",

  blocks: [
    {
      heading: "Brand Impact:",
      items: [
        "Market positioning increased by 16x",
        "Social conversations increased by 22x",
        "Engagement increased by 159x",
        "Improved B2B sales through events and trade engagement",
        "Stronger national presence via digital and e-commerce channels",
      ],
    },
    // {
    //   heading: "Business Impact",
    //   items: [
    //     "31% sales growth in first quarter post-launch (vs. 8% category average)",
    //     "Expanded into 8 new markets within 6 months — Delhi NCR, Mumbai, Pune, Bengaluru",
    //     "Average order value increased 23% through improved product storytelling and premiumization",
    //   ],
    // },
    // {
    //   heading: "Market Position",
    //   items: [
    //     "Achieved category leadership in organic snacks segment in South India (23% market share)",
    //     "Transitioned from regional to national contender with distribution in 450+ premium retail outlets",
    //     "Featured in “Top 10 Food Brands to Watch” by Economic Times and Business Standard",
    //   ],
    // },
    // {
    //   heading: "Operational Efficiency",
    //   items: [
    //     "Reduced SKU complexity by 35% through strategic portfolio rationalization",
    //     "Streamlined go-to-market with unified brand architecture—cutting marketing costs by 18%",
    //     "Improved retailer satisfaction score from 6.8 to 9.1 through clearer brand positioning and merchandising support",
    //   ],
    // },
  ],
},

moreWork: {
  title: "More Work",
  items: [
    {
      
      slug: "suryacolorsvideo",
      category: "Fintech",
      emoji: "🏦",
      title: "SecurePay: Redefining Trust in Digital Banking",
      video:suryacolorsvideo,
      description:
        "Building brand credibility for a challenger digital bank in a skeptical market",
    },
    {
      slug: "tenalidoublehorsevideo",
      category: "Health & Wellness",
      emoji: "🏃",
      title: "FlexFit: From Gym to Lifestyle Movement",
      video: tenalidoublehorsevideo,
      description:
        "Transforming a fitness chain into a cultural brand for millennials",
    },
    {
      slug: "triplexvideo",
      category: "Real Estate",
      emoji: "🏠",
      title: "UrbanNest: Premium Living Redefined",
      video: triplexvideo,
      description:
        "Positioning a luxury real estate brand for ultra-high-net-worth individuals",
    },
  ],
},



    results: [
      "25% increase in brand awareness",
      "159x engagement growth",
      "22x increase in social conversations",
      "Pan-India market expansion",
    ],

    testimonial: {
      quote:
        "Magsmen helped us transform Telugu Foods into a digitally powerful brand, driving conversations, engagement, and real business growth across markets",
      author: "Nikitha Muvva",
      role: "Business Analyst",
    },
  },
  {
    slug: "surya-colors",
    category: " Paints & Coatings / Manufacturing",
    title: "Surya Colors",
    tag: "Brand Stability & Market Expansion",
    description: "Stabilised and scaled a regional paints brand through a structured digital and brand-led growth strategy.",
    
    client: "Surya Colors",
    industry: "Paints & Coatings / Manufacturing",
    services: [
      "Brand Strategy",
      "Digital & Social Media Strategy",
      "Influencer & Viral Marketing",
      "Market Entry Strategy",
      "Product Portfolio Expansion Support",
      "PAN-India Growth Planning",
    ],
    timeline: "10 Months",
    outcome: "Brand & Growth Engagement",
    
    challengeIntro: "Surya Colors faced low brand awareness and inconsistent engagement in a highly competitive market. The absence of a defined digital and brand strategy resulted in weak product visibility, low engagement, and limited market confidence.",
    challengeHighlight: "Main Insight: Brand stability comes from consistent visibility, engagement, and availability across markets.",
    stakes: "Reason Identified: Lack of a structured digital presence and phased growth strategy weakened brand recall and customer loyalty.",
    
      strategy: [
  {
    type: "discovery",
    title: "Discovery",
    description:
      "We reviewed the brand’s market presence, digital footprint, product portfolio, and expansion readiness.",
    tools: [
      "Brand Audit",
      "Digital Gap Analysis",
      "Portfolio Review",
      "Market Opportunity Mapping",
      "Expansion Readiness",
    ],
  },
  {
    type: "foundation",
    title: "Strategy & Direction",
    description:
      "We built a comprehensive digital and brand strategy focused on awareness, engagement, and expansion.",
    coreInsight:
      "Consistent digital engagement and product visibility are critical to building trust in competitive categories.",
    strategicPivot:
      "From fragmented brand presence to a structured, growth-oriented digital and brand system.",
    brandPromise:
      "To offer reliable, accessible, and growing paint solutions across markets.",
  },
 
],
work: {
  title: "The Work",
  sections: [
    {
      type: "branding", 
      heading: "Logo & Brand Identity",
      logo: {
        image: "../assets/logos/magsmen-homepage-clients-colors-168x168.png",
        brandName: "NatureCraft",
        caption:
          "Created social media presence from the ground up, executed a digital engagement plan, implemented influencer and viral campaigns, supported product line expansion, and designed multiple market entry strategies including PAN-India reach through e-commerce.",
      },
      colorPalette: {
        colors: ["#dd4538"],
        label: "Brand color system",
      },
      typography: {
        primary: "DM Sans Bold",
        secondary: "Inter Regular",
        caption: "Type hierarchy and font pairings",
      },
    },


        {
  type: "website",
  heading: "Digital Experience",

  hero: {
    image: suryacolorsthree,
    image1: "../assets/works/telugu-tomato.png",
    caption:
      "",
  },

  highlights: [
    {
      title: "Mobile Experience",
      description:
        "Mobile-first design with 78% improvement in conversion rate",
    },
    {
      title: "Product Pages",
      description:
        "Enhanced product storytelling with video, sourcing details, and reviews",
    },
  ],
},

    
{
  type: "campaign",
  heading: "Brand Film & Campaign",

  film: {
    title: "From Soil to Soul",
    description:
      "A 90-second documentary-style brand film celebrating real farmers, real processes, and the messy beauty of organic food production. No actors, no scripting—just authentic stories that build trust and emotional connection.",
    result:
      "Result: 2.4M views, 86% completion rate, featured by Campaign India as “authenticity-first marketing done right.”",
  video: suryacolorsvideo,     // OR iframe URL
  poster: "/assets/films/from-soil-to-soul.jpg",   // thumbnail
  },

  collateral: {
    heading: "Marketing Collateral",
   items: [
      "Social Media Templates",
      "Retail POS Materials",
      "Trade Presentation Deck",
     "Brand Guidelines",
    ],
 },
}

  ],
},

impact: {
  title: "Final Positioning",
  subtitle:
    "A stable, growth-ready paints brand with expanding product depth and multi-market presence.",

  blocks: [
    {
      heading: "Brand Impact:",
      items: [
        "Achieved 150% growth in social media engagement",
        "Expanded product portfolio with a 9x increase in SKUs",
        "Successfully entered the Mangalore market",
        "Executed 3 successful market entry strategies",
        "Improved customer loyalty through consistent digital engagement",
        "Enabled PAN-India visibility through digital and e-commerce channels",
      ],
    },
    
  ],
},

moreWork: {
  title: "More Work",
  items: [
    {
      slug: "securepay",
      category: "Fintech",
      emoji: "🏦",
      title: "SecurePay: Redefining Trust in Digital Banking",
      video:tenalidoublehorsevideo,
      description:
        "Building brand credibility for a challenger digital bank in a skeptical market",
    },
    {
      slug: "flexfit",
      category: "Health & Wellness",
      emoji: "🏃",
      title: "FlexFit: From Gym to Lifestyle Movement",
      video:triplexvideo,
      description:
        "Transforming a fitness chain into a cultural brand for millennials",
    },
    {
      slug: "urbannest",
      category: "Real Estate",
      emoji: "🏠",
      title: "UrbanNest: Premium Living Redefined",
      video:vsbvideo,
      description:
        "Positioning a luxury real estate brand for ultra-high-net-worth individuals",
    },
  ],
},



    results: [
      "25% increase in brand awareness",
      "159x engagement growth",
      "22x increase in social conversations",
      "Pan-India market expansion",
    ],

    testimonial: {
      quote:
        "Magsmen helped us build stability and growth through a clear digital and brand strategy that translated into real market expansion.",
      author: "Managing Director",
      role: "Surya Colors",
    },
  },
  {
    slug: "tenali-double-horse",
    category: " FMCG (Staples, traditional foods, packaged foods, multi-SKU portfolio)",
    title: "Tenali Double Horse (TDH Group)",
    tag: "Brand repositioning, Portfolio/Brand architecture redesign, Expansion readiness (collabs, global presence, acquisitions)",
    description:
      "  Re-architected TDH from a “single-roof, hero-product-led” brand into a future-ready Group plus vertical system, then repositioned communication to a women-centric modern household brand, unlocking scale, partnerships, and ROI-efficient growth.",

    client: " Tenali Double Horse (TDH Group)",
    industry: " FMCG (Staples, traditional foods, packaged foods, multi-SKU portfolio)",
    services: [
      "Brand Strategy",
      "Brand Positioning",
      "Brand Architecture",
      "Digital Strategy (briefing plus execution alignment for key moments)",
      "GTM / Market Entry (collaboration enablement plus global event readiness)",
      "Campaigns / Content (select initiatives, brand moments, Global Events, visibility briefs)",
    ],
    timeline: " Not specified (multi-phase engagement across architecture, repositioning, CSR, collabs, and launch support)",
    outcome: "Created a category-led vertical structure plus brand foundation layer that improved internal clarity, sharpened consumer relevance, and made growth initiatives repeatable (lower effort per ROI via clearer targeting, modular narratives, and scalable playbooks).",

    challengeIntro:
      "TDH had all products under one umbrella, causing consumers to associate the brand primarily with hero products, limiting discoverability of other SKUs and restricting category-level growth. Additionally, despite legacy strength, the brand lacked a defined niche audience lens to modernize communication without losing trust.",
    challengeHighlight:
      "Main Insight (Sharp strategic truth). A legacy FMCG brand doesn’t scale on heritage alone, scale happens when the portfolio is structured like a system and communication is anchored to a clear, ownable user (not “everyone”).",
    stakes:
      "Reason Identified (Why the problem existed).“One-roof” branding blurred category roles and reinforced only hero-product memory structures. Lack of defined audience-led narrative meant the brand couldn’t intentionally growrelevance with modern household decision-makers. Expansion moments (collabs, events, acquisitions) required a repeatable framework,not one-off execution",

      strategy: [
  {
    type: "discovery",
    title: "Discovery",
    description:
      "Studied TDH’s portfolio reality, category dynamics, and consumer decision context to isolate where growth was being blocked and what could become a scalable identity system.",
    tools: [
      "Audit",
      "Category Mapping",
      "Audience Lens",
      "Gap Analysis",
      "Opportunity Mining",
    ],
  },
  {
    type: "foundation",
    title: " Strategy & Direction",
    description:
      "Shifted TDH from product-led familiarity to category-led clarity, while evolving brand voice to win the modern household without breaking legacy trust.",
    coreInsight:
      "The household purchase decision is emotionally anchored in trust, but repeated buying is driven by relevance plus clarity at the shelf and in the mind.",
    strategicPivot:
      "From: “Everything under TDH, known for hero products” To: “TDH Group with distinct verticals, category-first navigation, modern women-centric household relevance”",
    brandPromise:
      " Traditional trust, structured for modern living, clear categories, dependable quality, and a brand that actively invests back into community wellbeing.",
  },

],
work: {
  title: "The Work",
  sections: [
    {
      type: "branding", 
      heading: "Logo & Brand Identity",
      logo: {
        image: tenalidoublehorselogo,
        brandName: "NatureCraft",
        caption:
          "Developed a complete brand and packaging system, executed a national content and influencer strategy, and launched the brand across India with a culturally inclusive campaign.",
      },
      colorPalette: {
        colors: ["#ec2026", "#848689", "#111111"],
        label: "Brand color system",
      },
      typography: {
        primary: "DM Sans Bold",
        secondary: "Inter Regular",
        caption: "Type hierarchy and font pairings",
      },
    },

            {
  type: "website",
  heading: "Digital Experience",

  hero: {
    image: tenalidoubleproducts,
    image1: "../assets/works/telugu-tomato.png",
    caption:
      "",
  },

  highlights: [
    {
      title: "Mobile Experience",
      description:
        "Mobile-first design with 78% improvement in conversion rate",
    },
    {
      title: "Product Pages",
      description:
        "Enhanced product storytelling with video, sourcing details, and reviews",
    },
  ],
},

    
{
  type: "campaign",
  heading: "Brand Film & Campaign",

  film: {
    title: "Millet Marvels Launch Enablement",
    description:
      "Strategic intent: Translate millet demand momentum into a credible brand expansion story inside the TDH ecosystem",
    result:
      "Why it mattered: Made new category growth feel like a planned evolution (not a random addition), strengthening expansion readiness and long-term portfolio value",
  video: tenalidoublehorsevideo,     // OR iframe URL
  poster: "/assets/films/from-soil-to-soul.jpg",   // thumbnail
  },

  collateral: {
    heading: "Marketing Collateral",
   items: [
      "Social Media Templates",
      "Retail POS Materials",
      "Trade Presentation Deck",
     "Brand Guidelines",
    ],
 },
}

  ],
},


impact: {
  title: "Final Positioning",
  subtitle:
    "TDH now stands as a future-ready FMCG group brand, rooted in traditional trust, organized by category-led verticals, modernized for the women-led household decision, and amplified by a purpose layer that scales credibility with every consumer purchase.",

  blocks: [
    {
      heading: "Brand Impact:",
      items: [
        "Perception shift: From “hero-product-known traditional brand” → to a structured group brand with modern household relevance.",
        "Clarity: Clear vertical/category logic improved consumer navigation and internal decision-making.",
        "Relevance: Women-centric positioning improved message fit with the household decision-maker.",
      ],
    },
    
  ],
},

moreWork: {
  title: "More Work",
  items: [
    {
      slug: "securepay",
      category: "Fintech",
      emoji: "🏦",
      title: "SecurePay: Redefining Trust in Digital Banking",
      // video:tenalidoublehorsevideo,
      description:
        "Building brand credibility for a challenger digital bank in a skeptical market",
    },
    {
      slug: "flexfit",
      category: "Health & Wellness",
      emoji: "🏃",
      title: "FlexFit: From Gym to Lifestyle Movement",
      // video:xxxvideo,
      description:
        "Transforming a fitness chain into a cultural brand for millennials",
    },
    {
      slug: "urbannest",
      category: "Real Estate",
      emoji: "🏠",
      title: "UrbanNest: Premium Living Redefined",
      // video:vsbvideo,
      description:
        "Positioning a luxury real estate brand for ultra-high-net-worth individuals",
    },
  ],
},



    results: [
      "25% increase in brand awareness",
      "159x engagement growth",
      "22x increase in social conversations",
      "Pan-India market expansion",
    ],

    testimonial: {
      quote:
        "Magsmen helped us launch Tenali Double Horse (TDH) – Pulses & Dals as a truly national brand with clarity, emotion, and scale.",
      author: "Krishna Prasad.N.V",
      role: "General Manager",
    },
  },
  {
    slug: "triplex",
    category: "FMCG – Home Care (Detergents)",
    title: "Triplex",
    tag: "Digital Brand Building & Market Expansion",
    description:
      "Built Triplex’s digital-first presence, transforming a strong regional detergent brand into a high-engagement, multi-market digital player.",

    client: "Triplex",
    industry: "FMCG – Home Care (Detergents)",
    services: [
      "Digital Brand Strategy",
      "Digital Brand Positioning",
      "Content & Campaign Strategy",
      "Social Media Management",
      "Influencer Marketing",
      "Reputation Management",

    ],
    timeline: "Ongoing Digital Strategy & Execution",
    outcome: "18% Increase in Customer Inquiries",

    challengeIntro:
      "Triplex, a leading detergent brand in the Telugu states, lacked a strong and consistent digital and social media presence. Despite market leadership offline, the brand needed clearer digital positioning, stronger engagement, and active reputation management to sustain competitiveness and scale.",
    challengeHighlight:
      "Main Insight: Market leadership offline does not automatically translate to digital relevance.Triplex needed a structured, content-led digital system to build recall, trust, and engagement consistently.",
    stakes:
      "",

      strategy: [
  {
    type: "discovery",
    title: "Discovery",
    description:
      "What we decoded:",
    tools: [
      "Digital Audit",
      "Audience Behaviour Mapping",
      "Competitive Benchmarking",
      "Platform Opportunity Analysis",
    ],
  },
  {
    type: "foundation",
    title: "Strategy & Direction",
    description:
      "",
    coreInsight:
      "Home-care brands win digitally when they combine utility, trust, and cultural relevance.",
    strategicPivot:
      "Position Triplex as a dependable, high performance detergent brand with strong regional connect and modern digital presence.",
    brandPromise:
      "A detergent brand that understands household needs and delivers visible results online and offline.",
  },

],
work: {
  title: "The Work",
  sections: [
    {
      type: "branding", 
      heading: "Logo & Brand Identity",
      logo: {
        image: "../assets/Triplex.jpg",
        brandName: "NatureCraft",
        caption:
          "Primary logo lockup with monogram designed for versatility across packaging and digital",
      },
      colorPalette: {
        colors: ["#2278c0", "#f20085", "#c3dc9b", "#e3b681"],
        label: "Brand color system",
      },
      typography: {
        primary: "DM Sans Bold",
        secondary: "Inter Regular",
        caption: "Type hierarchy and font pairings",
      },
    },


            {
  type: "website",
  heading: "Digital Experience",

  hero: {
    image: triplexone,
    image1: "../assets/works/telugu-tomato.png",
    caption:
      "",
  },

  highlights: [
    {
      title: "Mobile Experience",
      description:
        "Mobile-first design with 78% improvement in conversion rate",
    },
    {
      title: "Product Pages",
      description:
        "Enhanced product storytelling with video, sourcing details, and reviews",
    },
  ],
},

    

    
{
  type: "campaign",
  heading: "Brand Film & Campaign",

  film: {
    title: "",
    description:
      "",
    video:triplexvideo,
    result:
      "",
  },

  collateral: {
    heading: "Marketing Collateral",
    items: [
      "Social Media Templates",
      "Retail POS Materials",
      "Trade Presentation Deck",
      "Brand Guidelines",
    ],
  },
}

  ],
},

impact: {
  title: "Final Positioning",
  subtitle:
    "A trusted regional detergent brand with a strong, scalable digital presence.",

  blocks: [
    {
      heading: "Business & Brand Results:",
      items: [
        "Increased social media engagement by 315x",
        "Successfully launched Triplex into the Tamil Nadu market",
        "Promoted 17 new product launches digitally, boosting awareness and sales",
        "Established Triplex as a strong regional FMCG brand in the digital space",
      ],
    },
    
  ],
},

moreWork: {
  title: "More Work",
  items: [
    {
      slug: "securepay",
      category: "Fintech",
      emoji: "🏦",
      title: "SecurePay: Redefining Trust in Digital Banking",
      description:
        "Building brand credibility for a challenger digital bank in a skeptical market",
    },
    {
      slug: "flexfit",
      category: "Health & Wellness",
      emoji: "🏃",
      title: "FlexFit: From Gym to Lifestyle Movement",
      description:
        "Transforming a fitness chain into a cultural brand for millennials",
    },
    {
      slug: "urbannest",
      category: "Real Estate",
      emoji: "🏠",
      title: "UrbanNest: Premium Living Redefined",
      description:
        "Positioning a luxury real estate brand for ultra-high-net-worth individuals",
    },
  ],
},



    results: [
      "25% increase in brand awareness",
      "159x engagement growth",
      "22x increase in social conversations",
      "Pan-India market expansion",
    ],

    testimonial: {
      quote: "We have been associated with Magsmen for the last two years. They helped our brand Triplex, a pioneer in the detergent market from the last 30 years enter into the digital space and proposed us a digital strategy.",
      author: "Manickavel",
      role: "Chairman & Managing Director",
    },
  },
  {
    slug: "vsb-group",
    category: "Natural Stone Exports Granite & Quartz",
    title: "VSB GROUP",
    tag: "End-to-End Brand Revamp & Global Market Positioning",
    description:
      "Transformed VSB Group into a globally consistent yet locally adaptable export brand across 45 international markets.",

    client: "VSB GROUP",
    industry: "Natural Stone Exports Granite & Quartz",
    services: [
      "Brand Strategy & Rebranding",
      "Brand Architecture Development",
      "Visual Identity Design",
      "Brand Stationery & Collateral",
      "Digital Presence & Strategy",
      "Portfolio Design",
      "Event & Expo Brand Strategy",

    ],
    timeline: "Brand Rebranding & Expansion Phase",
    outcome: "Transformed VSB Group into a globally consistent yet locally adaptable export brand across 45 international markets",

    challengeIntro:
      "VSB Group, one of South India’s leading granite and quartz exporters, had strong operational scale but lacked a cohesive and modern brand presence. The brand needed a complete overhaul—online and offline—along with a clear brand architecture and market-specific positioning for the 45 countries it exports to.",
    challengeHighlight:
      "To build a strong, scalable global brand system with clear brand architecture, distinct company level positioning, and tailored communication for international markets.",
    stakes:
      "Main Insight: Global scale without brand structure leads to diluted perception.VSB Group required a unified master brand system that could adapt to diverse international markets while maintaining consistency.",

      strategy: [
  {
    type: "discovery",
    title: "Discovery",
    description:
      "What we decoded:",
    tools: [
      "Brand Audit",
      "Group Structure Mapping",
      "Market & Country Analysis",
      "Competitive Benchmarking",
      "Stakeholder Vision Alignment",
    ],
  },
  {
    type: "foundation",
    title: "Strategy & Direction",
    description:
      "We redefined Telugu Foods' brand purpose and positioning to resonate with modern consumers while honoring its heritage...",
    coreInsight:
      "Global B2B buyers value credibility, clarity, and consistency customized for their local context.",
    strategicPivot:
      "Create a strong parent brand supported by clearly positioned sub brands, with flexible communication tailored for each export market.",
    brandPromise:
      " World-class stone solutions delivered with trust, scale, and global expertise.",
  },
  {
  type: "visual",
  title: "Visual",
  description:
    "Master brand identity system for VSB Group, Sub-brand identity alignment within the group, Global-ready brand stationery and corporate collaterals, Export-focused portfolio and presentation systems, Event and expo branding for India and Germany",
  
}
],
work: {
  title: "The Work",
  sections: [
    {
      type: "branding", 
      heading: "Logo & Brand Identity",
      logo: {
        image: vsb,
        brandName: "NatureCraft",
        caption:
          "Primary logo lockup with monogram designed for versatility across packaging and digital",
      },
      colorPalette: {
        colors: ["#3f9cd6", "#111111"],
        label: "Brand color system",
      },
      typography: {
        primary: "DM Sans Bold",
        secondary: "Inter Regular",
        caption: "Type hierarchy and font pairings",
      },
    },

    {
      type: "packaging", 
      heading: "Packaging System",

      hero: {
        caption:
          "Complete packaging system across 12 SKUs—unified visual language with product-specific color coding",
        cta: "Product Range",
      },

      cards: [
        {
          title: "Shelf Impact",
          description:
            "Before/after shelf presence comparison — 350% improvement in standout",
        },
        {
          title: "Sustainability Story",
          description:
            "100% recyclable materials with transparent sourcing information",
        },
      ],

      innovation:
        "Key Innovation: QR codes linking to farmer video stories connecting consumers directly to source, building trust through radical transparency.",
    },
    {
  type: "website",
  heading: "Digital Experience",

  hero: {
    image: vsbtwo,
    caption:
      "",
  },

  highlights: [
    {
      title: "Mobile Experience",
      description:
        "Mobile-first design with 78% improvement in conversion rate",
    },
    {
      title: "Product Pages",
      description:
        "Enhanced product storytelling with video, sourcing details, and reviews",
    },
  ],
},
{
  type: "campaign",
  heading: "Brand Film & Campaign",

  film: {
    title: "",
    video:vsbvideo,
    description:
      "",
    result:
      "",
  },

  collateral: {
    heading: "Marketing Collateral",
    items: [
      "Social Media Templates",
      "Retail POS Materials",
      "Trade Presentation Deck",
      "Brand Guidelines",
    ],
  },
}

  ],
},

impact: {
  title: "Final Positioning",
  subtitle:
    "A globally trusted stone export group with locally tailored market presence.",

  blocks: [
    {
      heading: "Business & Brand Results:",
      items: [
        "Established a unique and consistent global brand identity",
        "Enabled country-specific positioning across 45 markets",
        "Improved digital visibility and B2B credibility",
        "Expanded reach through international expos in India and Germany",
        "Drove stronger B2B inquiries and partnerships",
      ],
    },
    
  ],
},

moreWork: {
  title: "More Work",
  items: [
    {
      slug: "securepay",
      category: "Fintech",
      emoji: "🏦",
      title: "SecurePay: Redefining Trust in Digital Banking",
      description:
        "Building brand credibility for a challenger digital bank in a skeptical market",
    },
    {
      slug: "flexfit",
      category: "Health & Wellness",
      emoji: "🏃",
      title: "FlexFit: From Gym to Lifestyle Movement",
      description:
        "Transforming a fitness chain into a cultural brand for millennials",
    },
    {
      slug: "urbannest",
      category: "Real Estate",
      emoji: "🏠",
      title: "UrbanNest: Premium Living Redefined",
      description:
        "Positioning a luxury real estate brand for ultra-high-net-worth individuals",
    },
  ],
},



    results: [
      "25% increase in brand awareness",
      "159x engagement growth",
      "22x increase in social conversations",
      "Pan-India market expansion",
    ],

    testimonial: {
      quote:
        "Thanks to Magsmen. They've introduced the concept of brand architecture and a whole new strategy for VSB. Starting with corporate Rebranding, we've experienced a new phase for VSB group with their impeccable initiatives on branding and also tailored strategy on Linked which have tripled our followers",
      author: "Kranthi Kiran",
      role: "International Business Manager",
    },
  },

  {
    slug: "zavaine",
    category: "FMCG Home Care (Detergents)",
    title: "Zavaine",
    tag: "Brand Creation, Market Entry & Digital Growth",
    description:
      "Built India’s first detergent tablet brand from scratch and positioned it as a modern, eco-friendly alternative in the home-care category.",

    client: "Zavaine",
    industry: "FMCG Home Care (Detergents)",
    services: [
      "Digital & Social Media Strategy",
      "Brand Campaign Planning",
      "Influencer & Viral Marketing",
      "B2B Event & Show Planning",
      "Annual Brand Planning",
      "E-commerce & PAN-India Growth Strategy",
    ],
    timeline: "Brand Launch & Scale Phase",
    outcome: "Built India’s first detergent tablet brand from scratch and positioned it as a modern, eco-friendly alternative in the home-care category.",

    challengeIntro:
      "Zavaine, India’s first detergent tablet and a sister brand of Triplex, needed to establish credibility, awareness, and sales in a highly competitive detergent market. As the first brand consultants to market the product in India, the challenge was to create the brand identity, positioning, and go-to-market strategy from the ground up.",
    challengeHighlight:
      "To launch and scale Zavaine as a differentiated detergent brand focused on convenience, performance, and sustainability driving awareness, adoption, and sales.",
    stakes:
      "Main Insight: Innovation alone doesn’t sell education, trust, and usability drive adoption.As a new product format, detergent tablets required strong storytelling and demonstration to build consumer confidence.",

  strategy: [
  {
    type: "discovery",
    title: "Discovery",
    description:
      "What we decoded:",
    tools: [
      "Category Gap Analysis",
      "Consumer Convenience Insights",
      "Competitive Benchmarking",
      "B2B Funnel Review",
      "Product Education Requirements",
    ],
  },
  {
    type: "foundation",
    title: "Strategy & Direction",
    description:
      "We designed a comprehensive digital-first strategy supported by influencer marketing, events, and structured annual planning.",
    coreInsight:
      " Modern consumers seek time-saving, clutter-free, and eco-conscious solutions without compromising wash performance.",
    strategicPivot:
      "Position Zavaine as a smart, next-generation detergent for urban, convenience-driven households.",
    brandPromise:
      " Powerful cleaning made simple, compact, and sustainable.",
  },

],
work: {
  title: "The Work",
  sections: [
    {
      type: "branding", 
      heading: "Logo & Brand Identity",
      logo: {
        image: "../assets/Zavaiine.jpg",
        brandName: "Zavaine",
        caption:
          "Built Zavaine’s brand identity and narrative from scratch. Positioned the product as high-quality, convenient, and eco-friendly. Executed a digital-first launch strategy. Designed a social media engagement system to educate and convert users. Launched and scaled sales through Amazon and Flipkart. Created a budget-efficient roadmap to maximize ROI.",
      },
      colorPalette: {
        colors: ["#16c9f1","#FFFFFF"],
        label: "Brand color system",
      },
      typography: {
        primary: "DM Sans Bold",
        secondary: "Inter Regular",
        caption: "Type hierarchy and font pairings",
      },
    },



                {
  type: "website",
  heading: "Digital Experience",

  hero: {
    image: zavaineone,
    caption:
      "",
  },

  highlights: [
    {
      title: "Mobile Experience",
      description:
        "Mobile-first design with 78% improvement in conversion rate",
    },
    {
      title: "Product Pages",
      description:
        "Enhanced product storytelling with video, sourcing details, and reviews",
    },
  ],
},


   
{
  type: "campaign",
  heading: "Brand Film & Campaign",

  film: {
  title: "From Soil to Soul",
  description:
    "",
  result:
    "",
  video:zavainevideo,     // OR iframe URL
  // poster: "/assets/films/from-soil-to-soul.jpg",   // thumbnail
},

  collateral: {
    heading: "Marketing Collateral",
    items: [
      "Social Media Templates",
      "Retail POS Materials",
      "Trade Presentation Deck",
      "Brand Guidelines",
    ],
  },
}

  ],
},

impact: {
  title: "Final Positioning",
  subtitle:
    "India’s first detergent tablet brand designed for modern, eco-conscious living.",

  blocks: [
    {
      heading: "Business & Brand Results:",
      items: [
        "Increased engagement by 15x",
        "Improved brand recall by 217x",
        "Achieved 124,299 sales in the first 3 months via e-commerce",
        "Expanded presence into 3 new markets",
        "Established Zavaine as a credible innovation-led detergent brand",
      ],
    },
   
  ],
},

moreWork: {
  title: "More Work",
  items: [
    {
      slug: "securepay",
      category: "Fintech",
      emoji: "🏦",
      title: "SecurePay: Redefining Trust in Digital Banking",
      description:
        "Building brand credibility for a challenger digital bank in a skeptical market",
    },
    {
      slug: "flexfit",
      category: "Health & Wellness",
      emoji: "🏃",
      title: "FlexFit: From Gym to Lifestyle Movement",
      description:
        "Transforming a fitness chain into a cultural brand for millennials",
    },
    {
      slug: "urbannest",
      category: "Real Estate",
      emoji: "🏠",
      title: "UrbanNest: Premium Living Redefined",
      description:
        "Positioning a luxury real estate brand for ultra-high-net-worth individuals",
    },
  ],
},



    results: [
      "25% increase in brand awareness",
      "159x engagement growth",
      "22x increase in social conversations",
      "Pan-India market expansion",
    ],

    testimonial: {
      quote:
        "Magsmen helped us transform Telugu Foods into a digitally powerful brand, driving conversations, engagement, and real business growth across markets",
      author: "Manoj Kumar",
      role: "Zavaine Brand Head",
    },
  },
   {
    slug: "chakrasiddh",
    category: " Holistic Healthcare, Siddha Vaidyam, Preventive and Integrative Wellness",
    title: "Chakrasiddh Clinic",
    tag: " Brand authority building, Reputation amplification, Global stage readiness (UNESCO and international seminars), Demand growth through brand systems",
    description:
      "Converted Chakrasiddh from a celebrity-known clinic into an authority-led, globally presentable healthcare brand by codifying 36-generation legacy into a documentary-led content system, institutional pitch narratives, award-ready documentation, and a performance-managed vendor ecosystem.",

    client: "Chakrasiddh Clinic",
    industry: " Holistic Healthcare, Siddha Vaidyam, Preventive and Integrative Wellness",
    services: [
      "Digital & Social Media Strategy",
      "Brand Campaign Planning",
      "Influencer & Viral Marketing",
      "B2B Event & Show Planning",
      "Annual Brand Planning",
      "E-commerce & PAN-India Growth Strategy",
    ],
    timeline: "Not specified (multi-phase engagement across narrative, decks, vendors, and growth operations)",
    outcome: "Built an “authority stack” (story, proof, decks, content engine, vendor governance, conversion scripts) that reduced dependence on constant paid pushes and improved ROI efficiency through credibility-driven demand.",

    challengeIntro:
      "Chakrasiddh had strong credibility and celebrity visibility, but its deeper proof (36 generations of Siddha knowledge, founder’s impact, holistic philosophy) was not structured into scalable narratives for national media, global platforms, and consistent patient acquisition.",
    challengeHighlight:
      "Main Insight (Sharp strategic truth) In healthcare, trust scales only when legacy is converted into structured proof repeatable storytelling, and consistent front-line communication.",
    stakes:
      "Reason Identified (Why the problem existed) Generational expertise was known, but not packaged into a credible public narrative system. Global and institutional stages require structured decks, proof points, and outcomes, not reputation alone Growth efforts were vendor-driven without tight governance, creating inconsistency across content and conversion Call center and discovery conversations needed a clearer education-led script based on patient personality types",

  strategy: [
  {
    type: "discovery",
    title: "Discovery",
    description:
      "Mapped founder legacy, patient motivations, and growth constraints to translate deep expertise into public credibility plus conversion-ready communication. What We Did:",
    tools: [
      "Audit",
      "Category Mapping",
      "Audience Lens",
      "Gap Analysis",
      "Opportunity Mining",
      
    ],
  },
  {
    type: "foundation",
    title: "Strategy & Direction",
    description:
      "We designed a comprehensive digital-first strategy supported by influencer marketing, events, and structured annual planning.",
    coreInsight:
      "  Founder credibility becomes a growth engine only when it is documented, narrativized, and operationalized across content, PR, and patient conversations.",
    strategicPivot:
      "From: Reputation concentrated among celebrities and public figures. To: Authority brand with structured proof, education-led positioning, and global-stage",
    brandPromise:
      " A holistic healing system rooted in 36 generations of Siddha knowledge, delivered with integrity, education, and measurable wellbeing intent.",
  },

],
work: {
  title: "The Work",
  sections: [
    {
      type: "branding", 
      heading: "Logo & Brand Identity",
      logo: {
        image: "../assets/logos/chakrasiddh.png",
        brandName: "Chakrasiddh",
        caption:
          "What was actually built and executed Documentary narrative system: Proposed and developed a documentary concept to highlight Sindhuja garu’s contribution and intent, with scripting strategically structured for long-form credibility and short-form social (reels) extraction. Global-stage pitch decks: Built a complete pitch deck for platforms such as UNESCO and international seminars, aligning story, impact, and clarity to institutional expectations. Award authority dossier: Supported Sindhuja garu’s Padma Shri application by documenting and strategically rewriting her full body of work to date, ensuring relevance, proof sequencing, and credibility framing. Vendor ecosystem buildout: Onboarded and coordinated high-quality vendors to expand reach regionally, nationally, and globally, including PR firms, digital marketing firms, and interior designers. Performance governance: Consistently monitored digital marketing execution, provided feedback loops, and strengthened call center scripting and measurement discipline. Conversion enablement: Briefed teams on patient personality types, discovery challenges, and how to educate patients on holistic wellbeing using Chakrasiddh’s philosophy",
      },
      colorPalette: {
        colors: ["#C47A4A", "#8FA57C", "#111111", "#F6F1E8"],
        label: "Brand color system",
      },
      typography: {
        primary: "DM Sans Bold",
        secondary: "Inter Regular",
        caption: "Type hierarchy and font pairings",
      },
    },

   
{
  type: "campaign",
  heading: "Brand Film & Campaign",

  film: {
  title: "Documentary-led Authority Engine",
  description:
    "Strategic intent: Build credibility at scale through founder story, lineage, and impact, then repurpose into a reels-first system for sustained attention",
  result:
    "Why it mattered: Shifted growth from transactional marketing to trust compounding, improving long-term ROI efficiency",
  video: "/assets/films/from-soil-to-soul.mp4",     // OR iframe URL
  poster: "/assets/films/from-soil-to-soul.jpg",   // thumbnail
},

  collateral: {
    heading: "Marketing Collateral",
    items: [
      "Social Media Templates",
      "Retail POS Materials",
      "Trade Presentation Deck",
      "Brand Guidelines",
    ],
  },
}

  ],
},

impact: {
  title: "Final Positioning",
  subtitle:
    "Chakrasiddh Clinic stands today as an authority-led holistic healthcare brand, translating 36 generations of Siddha knowledge into modern credibility systems that scale trust, reduce marketing effort per ROI, and enable regional-to-global presence.",

  blocks: [
    {
      heading: "Brand Impact",
      items: [
        "Stronger authority positioning beyond celebrity circles, anchored to lineage, contribution, and institutional-grade storytelling",
        "Increased clarity of founder narrative and public legitimacy through documentary and structured decks",
        "Improved consistency across digital presence and patient-facing communications through governance and scripting",
      ],
    },
    {
      heading: "Business Impact",
      items: [
        "Digital growth improved by approximately 10X compared to earlier performance (as per your reporting).",
        "Improved lead handling through call center script refinement and monitoring",
        "Expanded readiness for national and global exposure through decks, PR ecosystem, and documented proof assets",
      ],

    },
    
  ],
},

moreWork: {
  title: "More Work",
  items: [
    {
      slug: "securepay",
      category: "Fintech",
      emoji: "🏦",
      title: "SecurePay: Redefining Trust in Digital Banking",
      description:
        "Building brand credibility for a challenger digital bank in a skeptical market",
    },
    {
      slug: "flexfit",
      category: "Health & Wellness",
      emoji: "🏃",
      title: "FlexFit: From Gym to Lifestyle Movement",
      description:
        "Transforming a fitness chain into a cultural brand for millennials",
    },
    {
      slug: "urbannest",
      category: "Real Estate",
      emoji: "🏠",
      title: "UrbanNest: Premium Living Redefined",
      description:
        "Positioning a luxury real estate brand for ultra-high-net-worth individuals",
    },
  ],
},



    results: [
      "25% increase in brand awareness",
      "159x engagement growth",
      "22x increase in social conversations",
      "Pan-India market expansion",
    ],

    testimonial: {
      quote:
        "Magsmen helped us transform Telugu Foods into a digitally powerful brand, driving conversations, engagement, and real business growth across markets",
      author: "Dr. Sidhamma",
      role: "Founder, Chakrasiddh`",
    },
  },
   {
    slug: "lvl-up",
    category: "Fashion Retail",
    title: "Lvl-Up",
    tag: " Brand identity, Launch, Brand positioning, Scale readiness (store system that can expand to new cities).",
    description:
      "Converted a “premium-only fashion store” idea into an aspirational retail brand and store system that attracts both premium and mass shoppers, enabling faster traction, repeat purchases, and scalable expansion with lower long-term marketing effort per ROI.",

    client: " LVL UP (Khammam)",
    industry: "Fashion Retail",
    services: [
      "Brand Name",
      "Brand Logo and Visual identity",
      "Brand Strategy",
      "Brand Positioning",
      "Brand Architecture (brand character, brand system)",
      "Visual Identity / Brand Guidelines",
      "GTM / Market Entry",
      "Campaigns / Content (creative executions, in-store assets)",
      "Operational Enablement (staff brand training, vendor management)",
    ],
    timeline: "Pre-launch to store establishment, Launch window referenced as August–November 2024",
    outcome: "De-risked the business model through market validation and built a repeatable brand plus in-store operating system (positioning, guidelines, staff training, vendor execution) that improved discovery, retention, and expansion readiness.",

    challengeIntro:
      "The client wanted a premium luxury fashion store in Khammam from scratch, but market signals indicated that a premium-only positioning would constrain footfall and slow growth due to limited premium audience density.",
    challengeHighlight:
      "Main Insight (Sharp strategic truth) In Tier-2 markets, exclusivity is often created by “aspirational access,” not by premium exclusion, brands grow faster when they let the broader audience enter while still protecting premium cues.",
    stakes:
      "Reason Identified (Why the problem existed) - Premium audience availability in Khammam was not strong enough to sustain a premium-only store. A luxury-only model risked low footfall, slower inventory turns, and higher marketing dependency. The client needed a positioning that could scale without constant discounting or heavy ad spend",

  strategy: [
  {
    type: "discovery",
    title: "Discovery",
    description:
      "Validated premium audience presence and mapped the local purchase behavior to design a positioning that preserves exclusivity while maximizing the addressable market. What We Did:",
    tools: [
      "Audit",
      "Category Mapping",
      "Audience Lens",
      "Gap Analysis",
      "Opportunity Mining",
      
    ],
  },
  {
    type: "foundation",
    title: "Strategy & Direction",
    description:
      "We designed a comprehensive digital-first strategy supported by influencer marketing, events, and structured annual planning.",
    coreInsight:
      " Common audience footprints contribute to perceived exclusivity when the brand system signals elevation, progression, and premium experience.",
    strategicPivot:
      "From: Premium-only luxury store for a narrow audience To: Aspirational store brand that serves premium plus mass shoppers, without losing premium cues",
    brandPromise:
      " A step-up fashion destination that helps shoppers elevate their style and self-image, designed to feel premium while remaining accessible.",
  },
  {
  type: "visual",
  title: "Visual / Brand Philosophy",
  description:
    "Developed a modern, progress-led identity system aligned to the name and positioning, ensuring consistency across store touchpoints and communications.",
  // pillars: [
  //   {
  //     title: "Premium store interiors reflecting brand exclusivity and style",
  //     description:
  //       "Community-driven and culturally rooted.",
  //   },
  //   {
  //     title: "Influencer Strategy:",
  //     description:
  //       "Credible, regional, and high-engagement",
  //   },
  //   {
  //     title: "B2B Experience:",
  //     description:
  //       "Relationship-led through shows, events, and direct engagement",
  //   },
  // ],
}
],
work: {
  title: "The Work",
  sections: [
    {
      type: "branding", 
      heading: "Logo & Brand Identity",
      logo: {
        image: "../assets/logo.webp",
        image1:"/assets/works/chicken-garam-meat.png",
        brandName: "Telugu Foods",
        caption:
          "Developed the LVLUP brand identity and narrative. Designed stores with luxurious, interactive, and personalized elements.Trained staff to reinforce the exclusive and aspirational atmosphere.Crafted an experience-driven retail strategy to engage consumers and drive loyalty",
      },
      colorPalette: {
        colors: ["#241f21", "#26ade3", "#ef5b96", "#f9fafb"],
        label: "Brand color system",
      },
      typography: {
        primary: "DM Sans Bold",
        secondary: "Inter Regular",
        caption: "Type hierarchy and font pairings",
      },
    },

    {
      type: "packaging", 
      heading: "Packaging System",

      hero: {
        image: "../assets/logos/Telugu-foods.jpg",
        caption:
          "Complete packaging system across 12 SKUs—unified visual language with product-specific color coding",
        cta: "Product Range",
      },

      cards: [
        {
          title: "Shelf Impact",
          description:
            "Implemented a PAN-India digital, social, and B2B strategy that significantly improved brand visibility, engagement, and sales.",
        },
        // {
        //   title: "Sustainability Story",
        //   description:
        //     "100% recyclable materials with transparent sourcing information",
        // },
      ],

      innovation:
        "Key Innovation: QR codes linking to farmer video stories—connecting consumers directly to source, building trust through radical transparency.",
    },
    {
  type: "website",
  heading: "Digital Experience",

  hero: {
    image: levelupone,
    caption:
      "Homepage redesign—storytelling-first architecture with immersive product discovery",
  },

  highlights: [
    {
      title: "Mobile Experience",
      description:
        "Mobile-first design with 78% improvement in conversion rate",
    },
    {
      title: "Product Pages",
      description:
        "Enhanced product storytelling with video, sourcing details, and reviews",
    },
  ],
},
{
  type: "campaign",
  heading: "Brand Film & Campaign",

  film: {
  title: "Launch System: Aspirational Retail Entry",
  description:
    "Strategic intent: Achieve faster adoption in Khammam by widening the funnel without diluting premium perception.",
  result:
    "Why it mattered: Reduced dependency on continuous promotional spends by making the store discoverable, memorable, and repeatable through experience-led branding",
  video: "/assets/films/from-soil-to-soul.mp4",     // OR iframe URL
  poster: "/assets/films/from-soil-to-soul.jpg",   // thumbnail
},

  collateral: {
    heading: "Marketing Collateral",
    items: [
      "Social Media Templates",
      "Retail POS Materials",
      "Trade Presentation Deck",
      "Brand Guidelines",
    ],
  },
}

  ],
},

impact: {
  title: "Final Positioning",
  subtitle:
    "LVL UP is positioned as Khammam’s aspirational fashion destination, premium in experience, accessible in entry, built to convert broad footfall into repeat purchase behavior and enable city-to-city expansion with lower long-term marketing effort.",

  blocks: [
    {
      heading: "Brand Impact",
      items: [
        "Improved local recognition within Khammam, progressing toward “landmark” status",
        "Stronger premium perception without excluding the broader audience",
        "Consistent brand delivery through guidelines and staff behavior training",
        
      ],
    },
    {
      heading: "Business Impact",
      items: [
        "First 3 months (August–November 2024): Strong initial traction with steady sales growth",
        "Post 3 months: Footfall increased by approximately 30% compared with the first 3 months",
        "Within first anniversary: Approximately 40% of customers made more than one purchase since opening",
        "Expansion: A second store opened in Bheemavaram within 2 months.",
      ],
    },
    // {
    //   heading: "Market Position",
    //   items: [
    //     "Achieved category leadership in organic snacks segment in South India (23% market share)",
    //     "Transitioned from regional to national contender with distribution in 450+ premium retail outlets",
    //     "Featured in “Top 10 Food Brands to Watch” by Economic Times and Business Standard",
    //   ],
    // },
    // {
    //   heading: "Operational Efficiency",
    //   items: [
    //     "Reduced SKU complexity by 35% through strategic portfolio rationalization",
    //     "Streamlined go-to-market with unified brand architecture—cutting marketing costs by 18%",
    //     "Improved retailer satisfaction score from 6.8 to 9.1 through clearer brand positioning and merchandising support",
    //   ],
    // },
  ],
},

moreWork: {
  title: "More Work",
  items: [
    {
      slug: "securepay",
      category: "Fintech",
      emoji: "🏦",
      title: "SecurePay: Redefining Trust in Digital Banking",
      description:
        "Building brand credibility for a challenger digital bank in a skeptical market",
    },
    {
      slug: "flexfit",
      category: "Health & Wellness",
      emoji: "🏃",
      title: "FlexFit: From Gym to Lifestyle Movement",
      description:
        "Transforming a fitness chain into a cultural brand for millennials",
    },
    {
      slug: "urbannest",
      category: "Real Estate",
      emoji: "🏠",
      title: "UrbanNest: Premium Living Redefined",
      description:
        "Positioning a luxury real estate brand for ultra-high-net-worth individuals",
    },
  ],
},



    results: [
      "25% increase in brand awareness",
      "159x engagement growth",
      "22x increase in social conversations",
      "Pan-India market expansion",
    ],

    testimonial: {
      quote:
        "Magsmen helped us transform into a digitally powerful brand, driving conversations, engagement, and real business growth across markets",
      author: "Ashok Kumar",
      role: "Marketing Head, LVLUP",
    },
  },
   {
    slug: "sri-santh-sadananda-ngo",
    category: "Non-Profit / Social Impact",
    title: "SRI SANTH SADANANDA NGO",
    tag: "Brand Creation & Professionalization",
    description:
      "Built a credible, emotionally resonant, and professional brand identity for Sri Santh Sadananda, positioning it as a trusted organization for impact-driven philanthropy.",

    client: "SRI SANTH SADANANDA NGO",
    industry: "Non-Profit / Social Impact",
    services: [
      "Digital & Social Media Strategy",
      "Brand Campaign Planning",
      "Influencer & Viral Marketing",
      "B2B Event & Show Planning",
      "Annual Brand Planning",
      "E-commerce & PAN-India Growth Strategy",
    ],
    timeline: "Brand Launch Phase",
    outcome: "Built a credible, emotionally resonant, and professional brand identity for Sri Santh Sadananda, positioning it as a trusted organization for impact-driven philanthropy.",

    challengeIntro:
      "The NGO, previously known as “Sri Santh Sadhanandha,” needed a refreshed identity that could resonate with the public, volunteers, and stakeholders. The challenge was to clearly communicate its mission, volunteerism, and values while projecting trust, transparency, and compassion.",
    challengeHighlight:
      "To create a professional, credible, and emotionally engaging brand that amplifies the NGO’s mission and increases visibility, engagement, and trust.",
    stakes:
      "Main Insight: A strong NGO brand needs to balance emotional appeal with professional credibility. Without clear identity and positioning, visibility and engagement remain limited.",

  strategy: [
  {
    type: "discovery",
    title: "Discovery",
    description:
      "What we decoded:",
    tools: [
      "Legacy brand perception",
      "Stakeholder & Volunteer Insights",
      "Sector Benchmarking & Communication Gaps",
      
    ],
  },
  {
    type: "foundation",
    title: "Strategy & Direction",
    description:
      "We designed a comprehensive digital-first strategy supported by influencer marketing, events, and structured annual planning.",
    coreInsight:
      "Clarity, trust, and emotional resonance drive engagement for social impact organizations.",
    strategicPivot:
      "Create a distinct, professional, and hopeful identity while highlighting the NGO’s core mission and volunteer-driven impact.",
    brandPromise:
      " A trusted, transparent, and compassionate organization driving measurable social impact.",
  },
  {
  type: "visual",
  title: "Digital",
  description:
    "Logo, color palette, and visual elements reflecting trust, hope, and professionalism. Website and e-commerce design integrated with donation and communication workflows. Collaterals for volunteers, stakeholders, and campaigns standardized to reflect brand values",
  // pillars: [
  //   {
  //     title: "Color Strategy",
  //     description:
  //       "Community-driven and culturally rooted.",
  //   },
  //   {
  //     title: "Influencer Strategy:",
  //     description:
  //       "Credible, regional, and high-engagement",
  //   },
  //   {
  //     title: "B2B Experience:",
  //     description:
  //       "Relationship-led through shows, events, and direct engagement",
  //   },
  // ],
}
],
work: {
  title: "The Work",
  sections: [
    {
      type: "branding", 
      heading: "Logo & Brand Identity",
      logo: {
        image: "../assets/sadananda-compressed.png",
        brandName: "Sri Santh Sadananda NGO",
        caption:
          "Developed new brand name and tagline. Designed distinctive visual identity (logo, colors, typography). Built e-commerce-enabled website for donations and communication. Positioned the NGO as the go-to choice for impact-driven philanthropy.Executed a strategic launch plan to increase awareness and credibility",
      },
      colorPalette: {
        colors: ["#f06727", "#f9fafb", "#f9fafb", "#f9fafb"],
        label: "Brand color system",
      },
      typography: {
        primary: "DM Sans Bold",
        secondary: "Inter Regular",
        caption: "Type hierarchy and font pairings",
      },
    },

    

  ],
},

impact: {
  title: "Final Positioning",
  subtitle:
    "A professional, credible, and compassionate NGO driving transparent and meaningful social impact.",

  blocks: [
    {
      heading: "Business & Brand Results:",
      items: [
        "Provided a clear, professional identity for the NGO",
        "Increased visibility and stakeholder engagement",
        "Positioned Sri Santh Sadananda as a trusted and credible organization in its sector",
        
      ],
    },
    
  ],
},

moreWork: {
  title: "More Work",
  items: [
    {
      slug: "securepay",
      category: "Fintech",
      emoji: "🏦",
      title: "SecurePay: Redefining Trust in Digital Banking",
      description:
        "Building brand credibility for a challenger digital bank in a skeptical market",
    },
    {
      slug: "flexfit",
      category: "Health & Wellness",
      emoji: "🏃",
      title: "FlexFit: From Gym to Lifestyle Movement",
      description:
        "Transforming a fitness chain into a cultural brand for millennials",
    },
    {
      slug: "urbannest",
      category: "Real Estate",
      emoji: "🏠",
      title: "UrbanNest: Premium Living Redefined",
      description:
        "Positioning a luxury real estate brand for ultra-high-net-worth individuals",
    },
  ],
},



    results: [
      "25% increase in brand awareness",
      "159x engagement growth",
      "22x increase in social conversations",
      "Pan-India market expansion",
    ],

    testimonial: {
      quote:
        "Magsmen helped us create a professional and credible brand identity that truly reflects our mission and values, boosting our visibility and engagement significantly.",
      author: "Santhosh Kumar",
      role: "Founder, SRI SANTH SADANANDA NGO",
    },
  },
   {
    slug: "sri-bhramara-townships",
    category: "Real Estate – Andhra Pradesh",
    title: "SRI BHRAMARA TOWNSHIPS",
    tag: "Brand Positioning & Market Leadership",
    description:
      "Positioned Sri Bhramara as a leading real estate player in Andhra Pradesh, creating a distinctive brand identity aligned with rapid urban development.",

    client: "SRI BHRAMARA TOWNSHIPS",
    industry: "Real Estate – Andhra Pradesh",
    services: [
      "Brand Strategy & Architecture",
      "Visual Identity & Design",
      "Brand Communication Framework",
      "Market Positioning & Messaging",
      "Project-Specific Positioning",
    ],
    timeline: "Brand Strategy & Positioning Phase",
    outcome: "Positioned Sri Bhramara as a leading real estate player in Andhra Pradesh, creating a distinctive brand identity aligned with rapid urban development.",

    challengeIntro:
      "Sri Bhramara faced challenges in differentiating its brand amidst rapid urban growth and increasing competition, particularly with Amaravati emerging as the new capital. Consistency in brand communication and project credibility were critical gaps.",
    challengeHighlight:
      "To create a distinct, credible, and aspirational brand identity that reinforces market leadership and leverages regional opportunities for growth.",
    stakes:
      "Main Insight: Rapid growth without clear brand structure and communication leads to diluted market perception. Sri Bhramara needed a cohesive brand system to stand out and assert credibility in the evolving Andhra Pradesh real estate market.",

  strategy: [
  {
    type: "discovery",
    title: "Discovery",
    description:
      "What we decoded:",
    tools: [
      "Project Portfolio & Group Structure",
      "Competitor Benchmarking & Market Gaps",
      "Regional Development Opportunities (Amaravati)",
      "Stakeholder Expectations & Aspirations",
    ],
  },
  {
    type: "foundation",
    title: "Strategy & Direction",
    description:
      "We designed a comprehensive digital-first strategy supported by influencer marketing, events, and structured annual planning.",
    coreInsight:
      "Real estate brands succeed when they project credibility, trend leadership, and aspirational value consistently across all projects..",
    strategicPivot:
      "Develop a group brand architecture and distinct visual identity to enhance recognition and convey leadership in the sector.",
    brandPromise:
      " Delivering trusted, innovative, and trendsetting real estate solutions in Andhra Pradesh.",
  },
  {
  type: "visual",
  title: "Digital & Experience Philosophy",
  description:
    "Distinctive logo and brand aesthetics reflecting leadership and trust. Cohesive visual system applied across project signage, marketing collatera ls, and digital platforms. Communication templates for sales and investor presentations aligned with brand positioning",
  // pillars: [
  //   {
  //     title: "Color Strategy",
  //     description:
  //       "Community-driven and culturally rooted.",
  //   },
  //   {
  //     title: "Influencer Strategy:",
  //     description:
  //       "Credible, regional, and high-engagement",
  //   },
  //   {
  //     title: "B2B Experience:",
  //     description:
  //       "Relationship-led through shows, events, and direct engagement",
  //   },
  // ],
}
],
work: {
  title: "The Work",
  sections: [
    {
      type: "branding", 
      heading: "Logo & Brand Identity",
      logo: {
        image: "../assets/works/bhramara.png",
        brandName: "Telugu Foods",
        caption:
          "Developed new brand name and tagline. Designed distinctive visual identity (logo, colors, typography). Built e-commerce-enabled website for donations and communication. Positioned the NGO as the go-to choice for impact-driven philanthropy. Executed a strategic launch plan to increase awareness and credibility",
      },
      colorPalette: {
        colors: ["#eeb21c", "#fecf45", "#f9fafb", "#f9fafb"],
        label: "Brand color system",
      },
      // typography: {
      //   primary: "DM Sans Bold",
      //   secondary: "Inter Regular",
      //   caption: "Type hierarchy and font pairings",
      // },
    },

    {
      type: "packaging", 
      heading: "Packaging System",

      hero: {
        image: "../assets/logos/Telugu-foods.jpg",
        caption:
          "Complete packaging system across 12 SKUs—unified visual language with product-specific color coding",
        cta: "Product Range",
      },

      cards: [
        {
          title: "Shelf Impact",
          description:
            "Implemented a PAN-India digital, social, and B2B strategy that significantly improved brand visibility, engagement, and sales.",
        },
        {
          title: "Sustainability Story",
          description:
            "100% recyclable materials with transparent sourcing information",
        },
      ],

      innovation:
        "Key Innovation: QR codes linking to farmer video stories—connecting consumers directly to source, building trust through radical transparency.",
    },
//     {
//   type: "website",
//   heading: "Website & Digital Experience",

//   hero: {
//     image: "../assets/logos/Screenshot 2026-01-08 at 4.17.20 PM.png",
//     caption:
//       "Homepage redesign—storytelling-first architecture with immersive product discovery",
//   },

//   highlights: [
//     {
//       title: "Mobile Experience",
//       description:
//         "Mobile-first design with 78% improvement in conversion rate",
//     },
//     {
//       title: "Product Pages",
//       description:
//         "Enhanced product storytelling with video, sourcing details, and reviews",
//     },
//   ],
// },
{
  type: "campaign",
  heading: "Brand Film & Campaign",

  film: {
  title: "From Soil to Soul",
  description:
    "",
  result:
    "",
  video: "/assets/films/from-soil-to-soul.mp4",     // OR iframe URL
  poster: "/assets/films/from-soil-to-soul.jpg",   // thumbnail
},

  collateral: {
    heading: "Marketing Collateral",
    items: [
      "Social Media Templates",
      "Retail POS Materials",
      "Trade Presentation Deck",
      "Brand Guidelines",
    ],
  },
}

  ],
},

impact: {
  title: "Final Positioning",
  subtitle:
    "A credible and trendsetting real estate brand leading Andhra Pradesh’s urban development landscape.",

  blocks: [
    {
      heading: "Business & Brand Results:",
      items: [
        "Positioned Sri Bhramara as a leading player in Andhra Pradesh real estate",
        "Created a strong, differentiated brand identity",
        "Enhanced credibility across projects and campaigns",
        "Leveraged regional opportunities for growth and market dominance",
      ],
    },
    
  ],
},

moreWork: {
  title: "More Work",
  items: [
    {
      slug: "securepay",
      category: "Fintech",
      emoji: "🏦",
      title: "SecurePay: Redefining Trust in Digital Banking",
      description:
        "Building brand credibility for a challenger digital bank in a skeptical market",
    },
    {
      slug: "flexfit",
      category: "Health & Wellness",
      emoji: "🏃",
      title: "FlexFit: From Gym to Lifestyle Movement",
      description:
        "Transforming a fitness chain into a cultural brand for millennials",
    },
    {
      slug: "urbannest",
      category: "Real Estate",
      emoji: "🏠",
      title: "UrbanNest: Premium Living Redefined",
      description:
        "Positioning a luxury real estate brand for ultra-high-net-worth individuals",
    },
  ],
},



    results: [
      "25% increase in brand awareness",
      "159x engagement growth",
      "22x increase in social conversations",
      "Pan-India market expansion",
    ],

    testimonial: {
      quote:
        "The education and insight Magsmen provided for our brand's identity, placement, and modifications were beyond what any consultimg firm offered us. They are the true problem-solvers in consulting, effortlessly addressimg our challanges and transformimg our brand  ",
      author: "SRI BHRAMARA TOWNSHIPS PVT.LTD",
      role: "",
    },
  },
 
  {
    slug: "suma-filmy-arts",
    category: "Film & Entertainment",
    title: "SUMA FILMY ARTS",
    tag: " Brand Repositioning",
    description:
      "Repositioned a traditional production house into a clear platform for emerging creative talent.",

    client: "SUMA FILMY ARTS",
    industry: "Film & Entertainment",
    services: [
      "Brand Strategy",
      "Brand Positioning",
      "Narrative & Messaging Framework",
      "Visual Identity Redesign",
      "Platform Consistency",

    ],
    timeline: "Brand Repositioning Phase",
    outcome: "Created a clear purpose-led positioning that made the brand relevant to new creators and future projects.",

    challengeIntro:
      "Suma Filmy Arts had strong recognition due to Suma Kanakala, but lacked clarity in what it stood for. It was perceived as a legacy banner, not a distinct, future-facing production house.",
    challengeHighlight:
      "Main Insight: Awareness without positioning limits long-term relevance.The brand relied on personal equity but had not clearly defined its role or value in today’s content landscape.",
    stakes:
      "",

      strategy: [
  {
    type: "discovery",
    title: "Discovery",
    description:
      "We evaluated how the brand could stand independently while continuing to benefit from Suma’s credibility.",
    tools: [
      "Audit",
      "Legacy Decode",
      "Industry Mapping",
      "Purpose Mining",
      "Audience Lens",
    ],
  },
  {
    type: "foundation",
    title: "Strategy & Direction",
    description:
      "We repositioned Suma Filmy Arts as an independent brand, supported by legacy but led by a clear purpose.",
    coreInsight:
      "Emerging creators need structured support and a credible platform to enter the industry.",
    strategicPivot:
      "From a celebrity-associated banner to a platform focused on supporting first-time directors, writers, and talent.",
    brandPromise:
      "To support new creative voices and contribute to the next generation of content.",
  },

],
work: {
  title: "The Work",
  sections: [
    {
      type: "branding", 
      heading: "Logo & Brand Identity",
      logo: {
        image: "../assets/suma-filmy-arts.png",
        brandName: "SumaFilmyArts",
        caption:
          "We clarified the brand narrative, and brought consistency across platforms to reflect its focus on emerging talent.",
      },
      colorPalette: {
        colors: ["#f76407", "#f9fafb", "#f9fafb", "#f9fafb"],
        label: "Brand color system",
      },
      typography: {
        primary: "DM Sans Bold",
        secondary: "Inter Regular",
        caption: "Type hierarchy and font pairings",
      },
    },


//             {
//   type: "website",
//   heading: "Digital Experience",

//   hero: {
//     image: triplexone,
//     image1: "../assets/works/telugu-tomato.png",
//     caption:
//       "",
//   },
//    
//   highlights: [
//     {
//       title: "Mobile Experience",
//       description:
//         "Mobile-first design with 78% improvement in conversion rate",
//     },
//     {
//       title: "Product Pages",
//       description:
//         "Enhanced product storytelling with video, sourcing details, and reviews",
//     },
//   ],
// },

    

    
{
  type: "campaign",
  heading: "Brand Film & Campaign",

  film: {
    title: "",
    description:
      "",
    video:triplexvideo,
    result:
      "",
  },

  collateral: {
    heading: "Marketing Collateral",
    items: [
      "Social Media Templates",
      "Retail POS Materials",
      "Trade Presentation Deck",
      "Brand Guidelines",
    ],
  },
}

  ],
},

impact: {
  title: "Final Positioning",
  subtitle:
    "A production house focused on enabling the next generation of creative talent.",

  blocks: [
    {
      heading: "Brand Impact:",
      items: [
        "Clear and articulated brand positioning",
        "Improved relevance among emerging creators",
        "A modern identity aligned with current industry needs",
      ],
    },
    
  ],
},

moreWork: {
  title: "More Work",
  items: [
    {
      slug: "securepay",
      category: "Fintech",
      emoji: "🏦",
      title: "SecurePay: Redefining Trust in Digital Banking",
      description:
        "Building brand credibility for a challenger digital bank in a skeptical market",
    },
    {
      slug: "flexfit",
      category: "Health & Wellness",
      emoji: "🏃",
      title: "FlexFit: From Gym to Lifestyle Movement",
      description:
        "Transforming a fitness chain into a cultural brand for millennials",
    },
    {
      slug: "urbannest",
      category: "Real Estate",
      emoji: "🏠",
      title: "UrbanNest: Premium Living Redefined",
      description:
        "Positioning a luxury real estate brand for ultra-high-net-worth individuals",
    },
  ],
},



    results: [
      "25% increase in brand awareness",
      "159x engagement growth",
      "22x increase in social conversations",
      "Pan-India market expansion",
    ],

    testimonial: {
      quote: "Suma Filmy Arts finally reflects what we’ve always believed in- supporting new talent with conviction and clarity.",
      author: "Suma Kanakala",
      role: "Chairman & Managing Director",
    },
  },

  {
    slug: "mr-constructions",
    category: "Real Estate & Construction",
    title: "MR Construction",
    tag: " Brand Repositioning & Experience Transformation",
    description:
      "Built a trust-led, experience-driven brand system that allowed MR Construction to lead beyond price, visibility, and celebrity endorsement.",

    client: "MR Construction",
    industry: "Real Estate & Construction",
    services: [
      "Brand Strategy",
      "Brand Positioning",
      "Customer Experience Design",
      "Brand Architecture",
      "Sales & Site Narrative Framework",

    ],
    timeline: "Brand Repositioning Phase",
    outcome: "Repositioned a local construction brand into a market-leading real estate brand by redesigning customer experience and brand perception in a Tier 3 market.",

    challengeIntro:
      "MR Construction aspired to be the leading brand in its city. However, in a Tier 3 real estate market marked by low trust and high volatility, reputation alone was not enough. Despite having Brahmanandam Garu as a brand ambassador, the brand experience did not match the promise, creating a disconnect between identity and customer perception.",
    challengeHighlight:
      "Main Insight: In real estate, trust is built through experience before transactions.",
    stakes:
      "Reason Identified: The brand focused on visibility and endorsement but lacked a structured, consistent customer journey that reinforced confidence.",

      strategy: [
  {
    type: "discovery",
    title: "Discovery",
    description:
      "We studied how customers actually interacted with the brand across sites, sales conversations, and walk-throughs.",
    tools: [
      "Site Immersion",
      "Sales Pitch Review",
      "Walk-through Mapping",
      "Customer Journey Audit",
      "Trust Gaps",
    ],
  },
  {
    type: "foundation",
    title: "Strategy & Direction",
    description:
      "We shifted the brand from promotion-led to experience-led.",
    coreInsight:
      "Before selling homes, the brand had to feel like one.",
    strategicPivot:
      "From celebrity-dependent branding to a customer-experience-led brand system.",
    brandPromise:
      "To deliver clarity, warmth, and reliability at every customer interaction.",
  },
  {
  type: "visual",
  title: "Visual & Experience Philosophy",
  description:
    "The brand experience was designed to feel premium, reassuring, and aspirational across all physical and communication touchpoints.",
  pillars: [
    {
      title: "Storytelling & Presentation",
      description:
        "Elevated and consistent",
    },
    {
      title: "On-site Experience",
      description:
        "Structured, welcoming, and transparent",
    },
    {
      title: "Sales Language",
      description:
        "Clear, confident, trust-focused",
    },
  ],
}

],
work: {
  title: "The Work",
  sections: [
    {
      type: "branding", 
      heading: "Logo & Brand Identity",
      logo: {
        image: "../assets/magsen-our-partner-mvr-logo-168x168.png",
        brandName: "NatureCraft",
        caption:
          "We elevated first impressions across sites, refined storytelling and presentation, redesigned brochures and walk-through narratives, and aligned site teams to consistently communicate the brand promise.",
      },
      colorPalette: {
        colors: ["#b31f24", "#726d6c", "#010101", "#272727"],
        label: "Brand color system",
      },
      typography: {
        primary: "DM Sans Bold",
        secondary: "Inter Regular",
        caption: "Type hierarchy and font pairings",
      },
    },


//             {
//   type: "website",
//   heading: "Digital Experience",

//   hero: {
//     image: triplexone,
//     image1: "../assets/works/telugu-tomato.png",
//     caption:
//       "",
//   },

//   highlights: [
//     {
//       title: "Mobile Experience",
//       description:
//         "Mobile-first design with 78% improvement in conversion rate",
//     },
//     {
//       title: "Product Pages",
//       description:
//         "Enhanced product storytelling with video, sourcing details, and reviews",
//     },
//   ],
// },

    

    
{
  type: "campaign",
  heading: "Brand Film & Campaign",

  film: {
    title: "",
    description:
      "",
    video:triplexvideo,
    result:
      "",
  },

  collateral: {
    heading: "Marketing Collateral",
    items: [
      "Social Media Templates",
      "Retail POS Materials",
      "Trade Presentation Deck",
      "Brand Guidelines",
    ],
  },
}

  ],
},

impact: {
  title: "Final Positioning",
  subtitle:
    "A dependable, premium real estate brand built on experience, not just endorsement.",

  blocks: [
    {
      heading: "Brand Impact:",
      items: [
        "Stronger perception of trust and professionalism",
        "Improved customer confidence during site visits",
        "Clear differentiation in a crowded Tier 3 market",
      ],
    },
    
  ],
},

moreWork: {
  title: "More Work",
  items: [
    {
      slug: "securepay",
      category: "Fintech",
      emoji: "🏦",
      title: "SecurePay: Redefining Trust in Digital Banking",
      description:
        "Building brand credibility for a challenger digital bank in a skeptical market",
    },
    {
      slug: "flexfit",
      category: "Health & Wellness",
      emoji: "🏃",
      title: "FlexFit: From Gym to Lifestyle Movement",
      description:
        "Transforming a fitness chain into a cultural brand for millennials",
    },
    {
      slug: "urbannest",
      category: "Real Estate",
      emoji: "🏠",
      title: "UrbanNest: Premium Living Redefined",
      description:
        "Positioning a luxury real estate brand for ultra-high-net-worth individuals",
    },
  ],
},



    results: [
      "25% increase in brand awareness",
      "159x engagement growth",
      "22x increase in social conversations",
      "Pan-India market expansion",
    ],

    testimonial: {
      quote: "Magsmen helped us move beyond advertising and build a brand people can trust when it matters most.",
      author: "MR Construction",
      role: "Chairman & Managing Director",
    },
  },

   {
    slug: "swargaseema",
    category: "Real Estate & Construction",
    title: "Swargaseema",
    tag: " Brand Repositioning & Group Structuring",
    description:
      "Repositioned from a standalone real estate player to a structured group brand with clear verticals and future readiness.",

    client: "Swargaseema",
    industry: "Real Estate & Construction",
    services: [
      "Brand Strategy",
      "Brand Architecture",
      "Customer Journey Mapping",
      "Sub-brand Positioning",
      "Communication & Touchpoint Alignment",

    ],
    timeline: "Brand Repositioning Phase",
    outcome: " Implemented a group brand architecture to create clarity, trust, and headroom for expansion.",

    challengeIntro:
      "Main Insight: Brand clarity and architecture are critical for trust and scalability.",
    challengeHighlight:
      "Reason Identified: Expansion into multiple verticals without a structured system created inconsistency and customer uncertainty.",
    stakes:
      "",

      strategy: [
  {
    type: "discovery",
    title: "Discovery",
    description:
      "We analyzed customer touchpoints, buying behavior, and mapped personas by age, intent, and engagement to uncover micro-gaps eroding trust.",
    tools: [
      "Persona Mapping",
      "Touchpoint Audit",
      "Journey Analysis",
      "Trust Gap Identification",
      "Expansion Readiness",
    ],
  },
  {
    type: "foundation",
    title: "Strategy & Direction",
    description:
      "We created a structured group brand strategy that aligned all offerings under a coherent parent brand.",
    coreInsight:
      "Customers perceive clarity and trust when offerings are logically structured and consistently communicated.",
    strategicPivot:
      "From a standalone offering to a multi-vertical, parent-led brand architecture.",
    brandPromise:
      "To deliver clarity, trust, and future-ready solutions across all real estate ventures.",
  },
//   {
//   type: "visual",
//   title: "Visual & Experience Philosophy",
//   description:
//     "The brand experience was designed to feel premium, reassuring, and aspirational across all physical and communication touchpoints.",
//   pillars: [
//     {
//       title: "Storytelling & Presentation",
//       description:
//         "Elevated and consistent",
//     },
//     {
//       title: "On-site Experience",
//       description:
//         "Structured, welcoming, and transparent",
//     },
//     {
//       title: "Sales Language",
//       description:
//         "Clear, confident, trust-focused",
//     },
//   ],
// }

],
work: {
  title: "The Work",
  sections: [
    {
      type: "branding", 
      heading: "Logo & Brand Identity",
      logo: {
        image: "../assets/swargaseema-logo-official.png",
        brandName: "swargaseema",
        caption:
          "Implemented a formal group brand architecture, positioned Swargaseema Sandalwood and Swarga Seema Constructions as verticals, and aligned all communication touchpoints to reflect clarity and trust.",
      },
      colorPalette: {
        colors: ["#d2a41e", "#f3d42a", "#f9fafb", "#f9fafb"],
        label: "Brand color system",
      },
      typography: {
        primary: "DM Sans Bold",
        secondary: "Inter Regular",
        caption: "Type hierarchy and font pairings",
      },
    },


//             {
//   type: "website",
//   heading: "Digital Experience",

//   hero: {
//     image: triplexone,
//     image1: "../assets/works/telugu-tomato.png",
//     caption:
//       "",
//   },

//   highlights: [
//     {
//       title: "Mobile Experience",
//       description:
//         "Mobile-first design with 78% improvement in conversion rate",
//     },
//     {
//       title: "Product Pages",
//       description:
//         "Enhanced product storytelling with video, sourcing details, and reviews",
//     },
//   ],
// },

    

    
{
  type: "campaign",
  heading: "Brand Film & Campaign",

  film: {
    title: "",
    description:
      "",
    video:triplexvideo,
    result:
      "",
  },

  collateral: {
    heading: "Marketing Collateral",
    items: [
      "Social Media Templates",
      "Retail POS Materials",
      "Trade Presentation Deck",
      "Brand Guidelines",
    ],
  },
}

  ],
},

impact: {
  title: "Final Positioning",
  subtitle:
    "A structured, future-ready real estate group with clear verticals and consistent brand clarity.",

  blocks: [
    {
      heading: "Brand Impact:",
      items: [
        "Clear differentiation and hierarchy across business units",
        "Enhanced customer trust and confidence",
        "Foundation for scalable expansion into new verticals",
      ],
    },
    
  ],
},

moreWork: {
  title: "More Work",
  items: [
    {
      slug: "securepay",
      category: "Fintech",
      emoji: "🏦",
      title: "SecurePay: Redefining Trust in Digital Banking",
      description:
        "Building brand credibility for a challenger digital bank in a skeptical market",
    },
    {
      slug: "flexfit",
      category: "Health & Wellness",
      emoji: "🏃",
      title: "FlexFit: From Gym to Lifestyle Movement",
      description:
        "Transforming a fitness chain into a cultural brand for millennials",
    },
    {
      slug: "urbannest",
      category: "Real Estate",
      emoji: "🏠",
      title: "UrbanNest: Premium Living Redefined",
      description:
        "Positioning a luxury real estate brand for ultra-high-net-worth individuals",
    },
  ],
},



    results: [
      "25% increase in brand awareness",
      "159x engagement growth",
      "22x increase in social conversations",
      "Pan-India market expansion",
    ],

    testimonial: {
      quote: "Swargaseema is now understood as a unified group brand with clear offerings, making it easier for customers to trust and engage.",
      author: "swargaseema",
      role: "Chairman & Managing Director",
    },
  },

   {
    slug: "cargill",
    category: "Agribusiness / Aquaculture",
    title: "CARGILL",
    tag: " Brand Awareness & Market Leadership",
    description:
      "Developed a comprehensive rural brand strategy to establish Cargill as a market leader in vannamei feed.",

    client: "CARGILL",
    industry: "Agribusiness / Aquaculture",
    services: [
      "Brand Strategy",
      "Rural Market Segmentation",
      "Location Targeting",
      "Customer Journey Mapping",
      "Event & Promotion Planning",
      "Marketing Campaign Design",

    ],
    timeline: "Rural Market Strategy Phase",
    outcome: " Implemented location-specific targeting and a consistent brand identity to increase sales and presence in key rural markets.",

    challengeIntro:
      "Main Insight: Rural and localized markets respond strongly to clear, consistent brand positioning combined with targeted engagement.",
    challengeHighlight:
      "Reason Identified: Fragmented presence and inconsistent messaging reduced brand trust and recognition in high-demand areas.",
    stakes:
      "",

      strategy: [
  {
    type: "discovery",
    title: "Discovery",
    description:
      "We analyzed rural market dynamics, customer behavior, and competitor presence to understand gaps in awareness and trust.",
    tools: [
      "Market Audit",
      "Consumer Insights",
      "Location Analysis",
      "Competitor Benchmarking",
      "Demand Mapping",
    ],
  },
  {
    type: "foundation",
    title: "Strategy & Direction",
    description:
      "We created a comprehensive rural brand strategy with consistent identity, targeted campaigns, and localized engagement.",
    coreInsight:
      "Consistency and local relevance build trust and preference in rural markets.",
    strategicPivot:
      "From ad-hoc regional campaigns to a structured, location-targeted brand approach.",
    brandPromise:
      "To deliver reliability, quality, and leadership in vannamei feed to every key market.",
  },
//   {
//   type: "visual",
//   title: "Visual & Experience Philosophy",
//   description:
//     "The brand experience was designed to feel premium, reassuring, and aspirational across all physical and communication touchpoints.",
//   pillars: [
//     {
//       title: "Storytelling & Presentation",
//       description:
//         "Elevated and consistent",
//     },
//     {
//       title: "On-site Experience",
//       description:
//         "Structured, welcoming, and transparent",
//     },
//     {
//       title: "Sales Language",
//       description:
//         "Clear, confident, trust-focused",
//     },
//   ],
// }

],
work: {
  title: "The Work",
  sections: [
    {
      type: "branding", 
      heading: "Logo & Brand Identity",
      logo: {
        image: "../assets/works/cargil.png",
        brandName: "NatureCraft",
        caption:
          "Implemented a formal group brand architecture, positioned Swargaseema Sandalwood and Swarga Seema Constructions as verticals, and aligned all communication touchpoints to reflect clarity and trust.",
      },
      colorPalette: {
        colors: ["#02812e", "#171413", "#f9fafb", "#f9fafb"],
        label: "Brand color system",
      },
      typography: {
        primary: "DM Sans Bold",
        secondary: "Inter Regular",
        caption: "Type hierarchy and font pairings",
      },
    },


//             {
//   type: "website",
//   heading: "Digital Experience",

//   hero: {
//     image: triplexone,
//     image1: "../assets/works/telugu-tomato.png",
//     caption:
//       "",
//   },

//   highlights: [
//     {
//       title: "Mobile Experience",
//       description:
//         "Mobile-first design with 78% improvement in conversion rate",
//     },
//     {
//       title: "Product Pages",
//       description:
//         "Enhanced product storytelling with video, sourcing details, and reviews",
//     },
//   ],
// },

    

    
{
  type: "campaign",
  heading: "Brand Film & Campaign",

  film: {
    title: "",
    description:
      "",
    video:triplexvideo,
    result:
      "",
  },

  collateral: {
    heading: "Marketing Collateral",
    items: [
      "Social Media Templates",
      "Retail POS Materials",
      "Trade Presentation Deck",
      "Brand Guidelines",
    ],
  },
}

  ],
},

impact: {
  title: "Final Positioning",
  subtitle:
    "A trusted, market-leading vannamei feed brand with a strong presence in rural and high-demand markets.",

  blocks: [
    {
      heading: "Brand Impact:",
      items: [
        "Established Cargill as a recognized leader in vannamei feed",
        "Improved brand trust and awareness in key rural markets",
        "Boosted sales through targeted campaigns and presence-driven engagement",
      ],
    },
    
  ],
},

moreWork: {
  title: "More Work",
  items: [
    {
      slug: "securepay",
      category: "Fintech",
      emoji: "🏦",
      title: "SecurePay: Redefining Trust in Digital Banking",
      description:
        "Building brand credibility for a challenger digital bank in a skeptical market",
    },
    {
      slug: "flexfit",
      category: "Health & Wellness",
      emoji: "🏃",
      title: "FlexFit: From Gym to Lifestyle Movement",
      description:
        "Transforming a fitness chain into a cultural brand for millennials",
    },
    {
      slug: "urbannest",
      category: "Real Estate",
      emoji: "🏠",
      title: "UrbanNest: Premium Living Redefined",
      description:
        "Positioning a luxury real estate brand for ultra-high-net-worth individuals",
    },
  ],
},



    results: [
      "25% increase in brand awareness",
      "159x engagement growth",
      "22x increase in social conversations",
      "Pan-India market expansion",
    ],

    testimonial: {
      quote: "The strategy helped us strengthen our brand presence and customer trust in rural markets, driving measurable growth in key segments.",
      author: "CARGILL",
      role: "Chairman & Managing Director",
    },
  },
   {
    slug: "pronted",
    category: "Ed-tech / Education Technology",
    title: "PRONTED",
    tag: "  Brand Repositioning & Market Differentiation",
    description:
      "Repositioned Pronted as a key educational partner by redefining its brand identity and market presence.",

    client: "CARGILL",
    industry: "Ed-tech / Education Technology",
    services: [
      "Brand Repositioning",
      "Messaging Framework",
      "Marketing Campaign Design",
      "Stakeholder Communication Strategy",
      "Holistic Brand Audit",

    ],
    timeline: " Brand Repositioning Phase",
    outcome: "  Created a clear, differentiated brand positioning that increased engagement, recognition, and adoption in schools and the broader education ecosystem.",

    challengeIntro:
      "Pronted struggled to stand out in a competitive education technology market. Its unique value proposition was not clearly communicated, resulting in stagnation in market growth and engagement.",
    challengeHighlight:
      "Main Insight: Clear positioning and consistent communication are critical for adoption and trust in the education sector.",
    stakes:
      "Reason Identified: The brand’s messaging and engagement strategy were fragmented and failed to convey its educational impact.",

      strategy: [
  {
    type: "discovery",
    title: "Discovery",
    description:
      "We evaluated market dynamics, customer needs, and competitive positioning to uncover gaps in perception and engagement.",
    tools: [
      "Market Analysis",
      "Persona Mapping",
      "Touchpoint Audit",
      "Engagement Gap Identification",
      "Competitor Benchmarking",
    ],
  },
  {
    type: "foundation",
    title: "Strategy & Direction",
    description:
      "We redefined Pronted’s brand positioning to focus on its role as a technology partner in education and implemented innovative marketing and messaging strategies.",
    coreInsight:
      "Schools respond to brands that demonstrate clear educational value and consistency in communication.",
    strategicPivot:
      "From a generic Ed-tech presence to a differentiated, value-driven partner for schools.",
    brandPromise:
      "To empower schools and educators with technology solutions that nurture the next generation.",
  },
  {
  type: "visual",
  title: "Visual & Experience Philosophy",
  description:
    "Brand identity and communication were overhauled to reflect Pronted’s educational purpose, innovation, and reliability.",
  pillars: [
    {
      title: "Identity",
      description:
        "Modern, credible, and education-focused",
    },
    {
      title: "Campaigns",
      description:
        "Innovative and targeted",
    },
    {
      title: "Engagement",
      description:
        "Holistic touchpoints with schools and stakeholders",
    },
  ],
}

],
work: {
  title: "The Work",
  sections: [
    {
      type: "branding", 
      heading: "Logo & Brand Identity",
      logo: {
        image: "../assets/works/Pronted Logomain copy.png",
        brandName: "NatureCraft",
        caption:
          "Redefined brand identity, implemented targeted campaigns, updated messaging, and aligned all touchpoints to communicate Pronted’s educational impact consistently.",
      },
      colorPalette: {
        colors: ["#0024cb", "#f6b01c", "#24c3c7", "#ec4417"],
        label: "Brand color system",
      },
      typography: {
        primary: "DM Sans Bold",
        secondary: "Inter Regular",
        caption: "Type hierarchy and font pairings",
      },
    },


//             {
//   type: "website",
//   heading: "Digital Experience",

//   hero: {
//     image: triplexone,
//     image1: "../assets/works/telugu-tomato.png",
//     caption:
//       "",
//   },

//   highlights: [
//     {
//       title: "Mobile Experience",
//       description:
//         "Mobile-first design with 78% improvement in conversion rate",
//     },
//     {
//       title: "Product Pages",
//       description:
//         "Enhanced product storytelling with video, sourcing details, and reviews",
//     },
//   ],
// },

    

    
{
  type: "campaign",
  heading: "Brand Film & Campaign",

  film: {
    title: "",
    description:
      "",
    video:triplexvideo,
    result:
      "",
  },

  collateral: {
    heading: "Marketing Collateral",
    items: [
      "Social Media Templates",
      "Retail POS Materials",
      "Trade Presentation Deck",
      "Brand Guidelines",
    ],
  },
}

  ],
},

impact: {
  title: "Final Positioning",
  subtitle:
    "A differentiated Ed-tech brand recognized as a trusted technology partner for schools nurturing the next generation.",

  blocks: [
    {
      heading: "Brand Impact:",
      items: [
        "Improved brand recognition and credibility in the education sector",
        "Increased engagement with schools and stakeholders",
        "Stronger differentiation from competitors, enabling growth",
      ],
    },
    
  ],
},

moreWork: {
  title: "More Work",
  items: [
    {
      slug: "securepay",
      category: "Fintech",
      emoji: "🏦",
      title: "SecurePay: Redefining Trust in Digital Banking",
      description:
        "Building brand credibility for a challenger digital bank in a skeptical market",
    },
    {
      slug: "flexfit",
      category: "Health & Wellness",
      emoji: "🏃",
      title: "FlexFit: From Gym to Lifestyle Movement",
      description:
        "Transforming a fitness chain into a cultural brand for millennials",
    },
    {
      slug: "urbannest",
      category: "Real Estate",
      emoji: "🏠",
      title: "UrbanNest: Premium Living Redefined",
      description:
        "Positioning a luxury real estate brand for ultra-high-net-worth individuals",
    },
  ],
},



    results: [
      "25% increase in brand awareness",
      "159x engagement growth",
      "22x increase in social conversations",
      "Pan-India market expansion",
    ],

    testimonial: {
      quote: "The repositioning helped us clearly communicate our value to schools, enhancing engagement and establishing Pronted as a key partner in education.",
      author: "pronted",
      role: "Chairman & Managing Director",
    },
  },

   {
    slug: "cargill",
    category: "Agribusiness / Aquaculture",
    title: "CARGILL",
    tag: " Brand Awareness & Market Leadership",
    description:
      "Developed a comprehensive rural brand strategy to establish Cargill as a market leader in vannamei feed.",

    client: "CARGILL",
    industry: "Agribusiness / Aquaculture",
    services: [
      "Brand Strategy",
      "Rural Market Segmentation",
      "Location Targeting",
      "Customer Journey Mapping",
      "Event & Promotion Planning",
      "Marketing Campaign Design",

    ],
    timeline: "Rural Market Strategy Phase",
    outcome: " Implemented location-specific targeting and a consistent brand identity to increase sales and presence in key rural markets.",

    challengeIntro:
      "Main Insight: Rural and localized markets respond strongly to clear, consistent brand positioning combined with targeted engagement.",
    challengeHighlight:
      "Reason Identified: Fragmented presence and inconsistent messaging reduced brand trust and recognition in high-demand areas.",
    stakes:
      "",

      strategy: [
  {
    type: "discovery",
    title: "Discovery",
    description:
      "We analyzed rural market dynamics, customer behavior, and competitor presence to understand gaps in awareness and trust.",
    tools: [
      "Market Audit",
      "Consumer Insights",
      "Location Analysis",
      "Competitor Benchmarking",
      "Demand Mapping",
    ],
  },
  {
    type: "foundation",
    title: "Strategy & Direction",
    description:
      "We created a comprehensive rural brand strategy with consistent identity, targeted campaigns, and localized engagement.",
    coreInsight:
      "Consistency and local relevance build trust and preference in rural markets.",
    strategicPivot:
      "From ad-hoc regional campaigns to a structured, location-targeted brand approach.",
    brandPromise:
      "To deliver reliability, quality, and leadership in vannamei feed to every key market.",
  },
//   {
//   type: "visual",
//   title: "Visual & Experience Philosophy",
//   description:
//     "The brand experience was designed to feel premium, reassuring, and aspirational across all physical and communication touchpoints.",
//   pillars: [
//     {
//       title: "Storytelling & Presentation",
//       description:
//         "Elevated and consistent",
//     },
//     {
//       title: "On-site Experience",
//       description:
//         "Structured, welcoming, and transparent",
//     },
//     {
//       title: "Sales Language",
//       description:
//         "Clear, confident, trust-focused",
//     },
//   ],
// }

],
work: {
  title: "The Work",
  sections: [
    {
      type: "branding", 
      heading: "Logo & Brand Identity",
      logo: {
        image: "../assets/Triplex.jpg",
        brandName: "NatureCraft",
        caption:
          "Implemented a formal group brand architecture, positioned Swargaseema Sandalwood and Swarga Seema Constructions as verticals, and aligned all communication touchpoints to reflect clarity and trust.",
      },
      colorPalette: {
        colors: ["#2278c0", "#f20085", "#c3dc9b", "#e3b681"],
        label: "Brand color system",
      },
      typography: {
        primary: "DM Sans Bold",
        secondary: "Inter Regular",
        caption: "Type hierarchy and font pairings",
      },
    },


//             {
//   type: "website",
//   heading: "Digital Experience",

//   hero: {
//     image: triplexone,
//     image1: "../assets/works/telugu-tomato.png",
//     caption:
//       "",
//   },

//   highlights: [
//     {
//       title: "Mobile Experience",
//       description:
//         "Mobile-first design with 78% improvement in conversion rate",
//     },
//     {
//       title: "Product Pages",
//       description:
//         "Enhanced product storytelling with video, sourcing details, and reviews",
//     },
//   ],
// },

    

    
{
  type: "campaign",
  heading: "Brand Film & Campaign",

  film: {
    title: "",
    description:
      "",
    video:triplexvideo,
    result:
      "",
  },

  collateral: {
    heading: "Marketing Collateral",
    items: [
      "Social Media Templates",
      "Retail POS Materials",
      "Trade Presentation Deck",
      "Brand Guidelines",
    ],
  },
}

  ],
},

impact: {
  title: "Final Positioning",
  subtitle:
    "A trusted, market-leading vannamei feed brand with a strong presence in rural and high-demand markets.",

  blocks: [
    {
      heading: "Brand Impact:",
      items: [
        "Established Cargill as a recognized leader in vannamei feed",
        "Improved brand trust and awareness in key rural markets",
        "Boosted sales through targeted campaigns and presence-driven engagement",
      ],
    },
    
  ],
},

moreWork: {
  title: "More Work",
  items: [
    {
      slug: "securepay",
      category: "Fintech",
      emoji: "🏦",
      title: "SecurePay: Redefining Trust in Digital Banking",
      description:
        "Building brand credibility for a challenger digital bank in a skeptical market",
    },
    {
      slug: "flexfit",
      category: "Health & Wellness",
      emoji: "🏃",
      title: "FlexFit: From Gym to Lifestyle Movement",
      description:
        "Transforming a fitness chain into a cultural brand for millennials",
    },
    {
      slug: "urbannest",
      category: "Real Estate",
      emoji: "🏠",
      title: "UrbanNest: Premium Living Redefined",
      description:
        "Positioning a luxury real estate brand for ultra-high-net-worth individuals",
    },
  ],
},



    results: [
      "25% increase in brand awareness",
      "159x engagement growth",
      "22x increase in social conversations",
      "Pan-India market expansion",
    ],

    testimonial: {
      quote: "The strategy helped us strengthen our brand presence and customer trust in rural markets, driving measurable growth in key segments.",
      author: "CARGILL",
      role: "Chairman & Managing Director",
    },
  },

];