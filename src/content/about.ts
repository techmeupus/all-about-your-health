// About Us page copy. Edit text here without touching the section markup.

export const aboutPage = {
  seo: {
    title: "About Us",
    description:
      "All About Feet & Legs is a top podiatry group in St. Augustine, bringing the highest level of care for the lower extremities to the St. Johns County area.",
  },
  intro: "Top podiatry group in St. Augustine and St. Johns County.",
  story: {
    label: "Who we are",
    title: "Bringing the highest level of care to the lower extremities",
    image: { src: "/hero.webp", alt: "Our team of physicians and care providers in the clinic lobby" },
    paragraphs: [
      "All About Feet & Legs was formed as a Top Podiatry Group in St Augustine to bring the highest level of care for the lower extremities to the St. Johns County area.",
      "Dr. Rodriguez, Dr. Borzok, Dr. Nguyen, and their team strive daily to create an experience like no other when it comes to bringing their patients back to health.",
      "The office is equipped with the latest in technologic advancements to help heal common ailments such as plantar fasciitis, varicose veins, peripheral vascular disease, diabetic wounds, peripheral neuropathy, ingrown toenails, hammer toes, bunion deformities, and more.",
    ],
    conditions: [
      "Plantar fasciitis",
      "Varicose veins",
      "Peripheral vascular disease",
      "Diabetic wounds",
      "Peripheral neuropathy",
      "Ingrown toenails",
      "Hammer toes",
      "Bunion deformities",
    ],
  },
  insurance: {
    label: "Insurance",
    title: "We accept most major insurance plans",
    // TODO: point to the real accepted-plans page/PDF once the client supplies it
    button: { label: "Complete list of accepted plans", href: "/contact" },
    logos: [
      { name: "Medicare", src: "/logo/Medicare-logo-1536x436.png" },
      { name: "Blue Cross Blue Shield", src: "/logo/BCBS-logo-.png" },
    ],
  },
  office: {
    label: "Our office",
    title: "Check out our convenient office in St. Augustine, FL",
    intro:
      "Our office is here to better serve St. Augustine and the surrounding community. Come see us at our St. Augustine office.",
    text: "Our office is located in the heart of St. Augustine and is easy to access from nearby highways, thoroughfares, and landmarks. Come visit us today and find out why our peers consider us a Top Podiatry Group in St. Augustine.",
    addressLines: ["2005 Highway US 1", "St. Augustine, FL 32086"],
  },
};
