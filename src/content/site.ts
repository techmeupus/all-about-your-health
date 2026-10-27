// Site-wide content shared by the header and footer.

export const site = {
  name: "All About Your Health",
  logo: {
    src: "/logo/cropped-all-about-your-health-1-2048x793.png",
    width: 2048,
    height: 793,
  },
  nav: [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Our Providers", href: "/providers" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact", href: "/contact" },
  ],
  contact: {
    schedule: [{ days: "Mon – Fri", time: "8:30am – 5:00pm" }],
    address: "2005 Highway US 1",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=2005+Highway+US+1",
    phone: "904-823-3301",
    phoneHref: "tel:+19048233301",
  },
  cta: { label: "Request an Appointment", href: "/contact" },
  footer: {
    // Icons: see Icons map in Footer.tsx
    features: [
      {
        icon: "microscope",
        title: "Advanced Technology",
        text: "Current, effective technologies for diagnosis and treatment.",
      },
      {
        icon: "users",
        title: "Multidisciplinary Team",
        text: "Podiatrists and physicians working together for your health.",
      },
      {
        icon: "heart",
        title: "Compassionate Care",
        text: "Personalized treatment plans for every patient.",
      },
      {
        icon: "pin",
        title: "Convenient Location",
        text: "Visit us at 2005 Highway US 1.",
      },
    ],
    ctaTitle: ["Your Health.", "Our Priority."],
    tagline:
      "Comprehensive, multispecialty care for your whole health: podiatry, wound care, hyperbaric, regenerative medicine and infectious disease.",
    quickLinks: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Our Providers", href: "/providers" },
      { label: "Blogs", href: "/blogs" },
      { label: "Contact", href: "/contact" },
    ],
  },
};
