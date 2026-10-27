// Home page copy. Edit text here without touching the section markup.

export const hero = {
  eyebrow: "Comprehensive care. Expert treatment. Better tomorrows.",
  titleLines: ["Your Health.", "Our Priority."],
  description:
    "From podiatry to wound care, hyperbaric medicine, regenerative medicine and infectious disease — we provide comprehensive, multispecialty care for your whole health.",
  cta: { label: "Request an Appointment", href: "/contact" },
  image: {
    src: "/hero.webp",
    alt: "Our team of physicians and care providers in the clinic lobby",
  },
};

export const about = {
  label: "About Us",
  title: "We strive to bring top notch care to the community.",
  image: {
    src: "/Doctors/rosana-rodriguez.jpg",
    alt: "Dr. Rosana Rodriguez, founder of All About Your Health",
  },
  // Card on the image; times come from site.contact.schedule
  scheduleTitle: "Hours of Operation",
  // Shown above the button. Icons: see Icons map in About.tsx
  highlights: [
    { icon: "calendar", label: "Online Appointment" },
    { icon: "clock", label: "Timely Treatment" },
    { icon: "footprints", label: "Podiatry Visit" },
  ],
  team: {
    text: "Specialists in wound care, veins and the lower extremities",
    link: { label: "Meet our providers", href: "/providers" },
    // Avatars come from content/providers.ts (everyone except the founder)
  },
  quote:
    "My team and I utilize the most current and effective technologies in diagnosing and treating the conditions of the Legs, Ankles, and Feet. We are here to help you with Wound Care, Veins, and all ailments of the lower extremities. We hope to continue to earn the trust of the community as one of the top rated podiatrists in our area.",
  author: { name: "Dr. Rosana Rodriguez", role: "Founder" },
  cta: { label: "Book an Appointment", href: "/contact" },
};

export const specialties = {
  label: "Our Specialties",
  title: "Comprehensive care for every step of your health",
  description: "We offer a wide range of treatments across our specialties.",
  // Number of treatments shown on each card; the rest are behind "View all"
  previewCount: 5,
  // icon: see Icons map in Specialties.tsx. Add `image: "/specialties/podiatry.jpg"` to replace the icon panel with a photo.
  items: [
    {
      slug: "podiatry",
      name: "Podiatry",
      icon: "footprints",
      image: undefined as string | undefined,
      treatments: [
        "MIS (Minimally Invasive Surgery)",
        "Vein & Vascular Care",
        "ToeFX",
        "Nail Avulsion",
        "Diabetic Nail",
        "Plantar Fasciitis",
        "Achilles Tendonitis",
        "Morton Neuroma",
        "Lymphedema",
        "Neuropathy",
      ],
    },
    {
      slug: "wound-care",
      name: "Wound Care",
      icon: "bandage",
      image: undefined as string | undefined,
      treatments: [
        "Diabetic Foot Ulcers",
        "Radiation Burns",
        "Recalcitrant Wounds",
        "Auto Immune Skin Conditions",
        "Bed Sores",
      ],
    },
    {
      slug: "hyperbaric",
      name: "Hyperbaric Medicine",
      icon: "gauge",
      image: undefined as string | undefined,
      // TODO: confirm with client (placeholder list from the design mockup)
      treatments: [
        "Non-healing Wounds",
        "Radiation Tissue Injury",
        "Chronic Infections",
        "Sports Injuries",
        "Post-Surgical Healing",
      ],
    },
    {
      slug: "regenerative-medicine",
      name: "Regenerative Medicine",
      icon: "dna",
      image: undefined as string | undefined,
      treatments: [
        "Hair Regeneration",
        "Skin Rejuvenation",
        "Longevity (Anti-Aging)",
        "Biohacking",
        "Cosmetics",
        "Biologics Orthopedic Therapies",
        "Erectile Dysfunction",
        "Female Incontinence",
        "Autoimmune & Inflammatory Health",
        "Hormone & Metabolic Health",
      ],
    },
    {
      slug: "infectious-disease",
      name: "Infectious Disease",
      icon: "microscope",
      image: undefined as string | undefined,
      // TODO: confirm with client (placeholder list from the design mockup)
      treatments: [
        "Skin & Soft Tissue Infections",
        "Respiratory Infections",
        "Bone & Joint Infections",
        "Genitourinary Infections",
        "HIV/AIDS",
      ],
    },
  ],
};

export const providersSection = {
  label: "Meet Our Providers",
  titleLines: ["Experienced. Dedicated.", "Here for You."],
  description:
    "Our podiatrists and physicians bring specialized training and a patient-first approach to every treatment plan.",
  cta: { label: "Meet Our Providers", href: "/providers" },
};

export const ctaBanner = {
  title: "Your Health. Our Priority.",
  description:
    "Schedule an appointment today and take the first step toward better health and mobility.",
  cta: { label: "Request an Appointment", href: "/contact" },
};
