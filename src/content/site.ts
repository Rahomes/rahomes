/**
 * Central site content — edit here to rebrand or update copy.
 * Modern studio UI with logo-aligned forest green accents.
 * Future: enquiry form / WhatsApp can plug into contact.* hooks.
 */

export const site = {
  brand: {
    name: "RA HOMES",
    tagline: "INTERIORS WORLD",
    fullName: "RA HOMES INTERIORS WORLD",
  },
  contact: {
    phone: "074489 79627",
    phoneHref: "tel:+917448979627",
    address: {
      line1: "No.997, Aringar Anna St",
      line2: "Dhilipan Nagar, Nadukuthagai",
      line3: "Thiruninravur, Tamil Nadu 602024",
      mapsQuery:
        "No.997 Aringar Anna St Dhilipan Nagar Nadukuthagai Thiruninravur Tamil Nadu 602024",
    },
    whatsapp: null as string | null,
    enquiryForm: false,
  },
  nav: [
    { label: "Studio", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    kicker: "Interior design · Thiruninravur",
    headline: "Homes designed for the way you live",
    support:
      "From modular kitchens to full-home interiors — planned with care, built with craft, finished for everyday comfort.",
    ctaPrimary: { label: "View Projects", href: "#work" },
    ctaSecondary: { label: "Get a Free Quote", href: "#quote" },
    slides: [
      {
        title: "Soft Modern Living",
        place: "Luxury living, Chennai",
        src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=80",
        alt: "Bright modern living room",
      },
      {
        title: "Warm Kitchen Clarity",
        place: "Kitchen design, Residence",
        src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=2400&q=80",
        alt: "Contemporary kitchen interior",
      },
      {
        title: "Quiet Bedroom Suite",
        place: "Bedroom interiors",
        src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=2400&q=80",
        alt: "Calm modern bedroom",
      },
    ],
  },
  about: {
    eyebrow: "Our Philosophy",
    title: "Designing Spaces That Inspire",
    body: "At RA HOMES INTERIORS WORLD, we bring style, sophistication, and warmth into homes that reflect the people who live in them. As a focused local studio, we build lasting relationships with clients — listening carefully from concept to completion and turning vision into a finished home.",
    attribution: "— RA HOMES INTERIORS WORLD",
    image: {
      src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80",
      alt: "Styled interior with soft light",
    },
  },
  stats: [
    { value: "150+", label: "Projects Completed" },
    { value: "8+", label: "Years Experience" },
    { value: "500+", label: "Moodboards Realized" },
    { value: "98%", label: "Client Satisfaction" },
  ],
  why: {
    eyebrow: "Differentiators",
    title: "Why Homeowners Trust RA HOMES",
    items: [
      {
        title: "Finished Homes, On Schedule",
        description:
          "Clear timelines, coordinated execution, and a handover experience designed to keep your project moving.",
      },
      {
        title: "Personalized Design Approach",
        description:
          "Every client gets a tailored concept. We reject generic templates and build unique styles for your needs.",
      },
      {
        title: "Premium Quality Materials",
        description:
          "Carefully selected finishes, hardware, and carpentry partners for interiors that look refined and last.",
      },
      {
        title: "On-Time & On-Budget Focus",
        description:
          "Structured planning across design and site work to reduce delays and financial surprises.",
      },
      {
        title: "End-to-End Management",
        description:
          "From layouts and materials to fabrication and final styling — one studio owns the full journey.",
      },
      {
        title: "Local Studio Support",
        description:
          "Based in Thiruninravur, we stay close for faster decisions, site visits, and aftercare guidance.",
      },
    ],
  },
  process: {
    eyebrow: "Our Design Process",
    title: "A Clear Path From Idea To Home",
    steps: [
      {
        number: "01",
        title: "Consultation & Discovery",
        description:
          "An in-depth dialogue mapping spatial desires, practical needs, style tastes, and starting budgets.",
      },
      {
        number: "02",
        title: "Concept Development",
        description:
          "Floor plans, material mood, lighting direction, and high-clarity visuals before any work begins.",
      },
      {
        number: "03",
        title: "Design & Execution",
        description:
          "Premium material sourcing, fabrication coordination, and supervised construction through to finish.",
      },
      {
        number: "04",
        title: "Final Reveal & Handover",
        description:
          "A polished reveal of your completed home — styled, refined, and ready for everyday living.",
      },
    ],
  },
  services: {
    eyebrow: "Services",
    title: "Our Interior Design Services",
    items: [
      {
        title: "Modular Kitchen",
        description:
          "Efficient layouts, durable finishes, and storage planned around how you cook and host.",
        image: {
          src: "https://images.unsplash.com/photo-1556912173-46c336c7fd55?auto=format&fit=crop&w=1200&q=80",
          alt: "Modern modular kitchen",
        },
      },
      {
        title: "Living & Lounge",
        description:
          "Seating, lighting, and finishes that make gathering feel effortless and elegant.",
        image: {
          src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
          alt: "Contemporary living room",
        },
      },
      {
        title: "Wardrobe",
        description:
          "Custom wardrobes with clean fronts and thoughtful internals for everyday ease.",
        image: {
          src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
          alt: "Bedroom wardrobe interior",
        },
      },
      {
        title: "TV Unit",
        description:
          "Entertainment walls with storage, display niches, and a clean living-room focal point.",
        image: {
          src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
          alt: "Living room entertainment area",
        },
      },
      {
        title: "Dining Spaces",
        description:
          "Dining settings that balance daily use with atmosphere through materials and light.",
        image: {
          src: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80",
          alt: "Elegant dining interior",
        },
      },
      {
        title: "Full Home Interiors",
        description:
          "Complete turnkey design across every room — one cohesive story from concept to styling.",
        image: {
          src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
          alt: "Spacious full home living area",
        },
      },
    ],
  },
  work: {
    eyebrow: "Selected Works",
    title: "Projects With Intention",
    projects: [
      {
        title: "Modern Penthouse Living",
        place: "Residential",
        src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
        alt: "Spacious living room",
      },
      {
        title: "Contemporary Kitchen Remodel",
        place: "Kitchen Design",
        src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80",
        alt: "Kitchen remodel",
      },
      {
        title: "Luxury Master Bedroom",
        place: "Residential",
        src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
        alt: "Master bedroom",
      },
      {
        title: "Dining For Gathering",
        place: "Dining",
        src: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1600&q=80",
        alt: "Dining room",
      },
      {
        title: "Light-Filled Lounge",
        place: "Residential",
        src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
        alt: "Lounge space",
      },
      {
        title: "Minimalist Studio Feel",
        place: "Apartment",
        src: "https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&w=1200&q=80",
        alt: "Studio apartment detail",
      },
    ],
  },
  testimonials: {
    eyebrow: "Testimonials",
    title: "What Our Clients Say",
    items: [
      {
        quote:
          "They understood our requirements clearly and delivered a warm, practical home interior on time. Communication throughout was excellent.",
        name: "Priya S.",
        meta: "Residential project",
      },
      {
        quote:
          "From kitchen to wardrobes, every detail felt considered. Material guidance and finishing quality were outstanding.",
        name: "Karthik M.",
        meta: "Full home interiors",
      },
      {
        quote:
          "Professional, flexible, and easy to work with. Our living space looks elegant without feeling overdone.",
        name: "Anitha R.",
        meta: "Living & dining",
      },
    ],
  },
  cta: {
    eyebrow: "Free quote",
    title: "Let’s design your next home chapter",
    support:
      "Share your layout, budget, and timeline — we’ll reply with clear next steps. No obligation.",
    phoneLabel: "Call the studio",
    phone: "074489 79627",
    phoneHref: "tel:+917448979627",
    secondary: { label: "See our work", href: "#work" },
    note: "Thiruninravur · Chennai outskirts",
  },
  contactSection: {
    eyebrow: "Contact",
    title: "Visit The Studio",
    support:
      "Request a free quote online, call us, or visit our studio in Thiruninravur.",
  },
  footer: {
    blurb:
      "RA HOMES INTERIORS WORLD creates thoughtful residential interiors — modular kitchens, wardrobes, living spaces, and full-home turnkey design.",
    note: "Interior design studio · Thiruninravur, Tamil Nadu",
  },
} as const;

export type SiteContent = typeof site;
