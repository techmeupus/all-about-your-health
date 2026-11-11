// Provider profiles. Shared by the home page section and the Our Providers page.
// objectPosition keeps the face in frame when the photo is cropped.

export type Provider = {
  slug: string;
  name: string;
  suffix: string; // degrees / short title shown under the name
  founder?: boolean;
  role?: string; // shown under the name on the profile page
  specialties: string[];
  photo: { src: string; objectPosition: string };
  credentials: string[];
  affiliations?: string[];
  // Profile page only
  bio?: string[]; // one string per paragraph
  education?: { heading: string; items: string[] }[];
  offices?: string[];
  facts?: string[]; // short highlights shown in the profile header
  insuranceLogos?: { src: string; alt: string; width: number; height: number }[]; // bottom of profile content
};

export const providers: Provider[] = [
  {
    slug: "rosana-rodriguez",
    name: "Rosana Rodriguez",
    suffix: "DPM, CWS",
    founder: true,
    role: "Podiatrist & Wound Care Specialist",
    specialties: ["Podiatry", "Wound Care"],
    photo: { src: "/Doctors/rosana-rodriguez.jpg", objectPosition: "0% 20%" },
    credentials: [
      "Doctor of Podiatric Medicine",
      "Fellow, American College of Foot and Ankle Surgeons",
      "Certified, American Academy of Wound Management",
      "Diplomate, American Podiatric Medical Specialties Board",
    ],
    affiliations: [
      "American Podiatric Medical Association",
      "Florida Podiatric Medical Association",
      "American College of Foot and Ankle Surgeons",
    ],
    bio: [
      "Dr. Rosana Rodriguez is a top rated podiatrist in St. Augustine and the surrounding St. Johns County area, and is board certified by the American Academy of Wound Management and by the American Podiatric Medical Specialties Board in prevention and treatment of diabetic foot wounds.",
      "She earned her undergraduate degree from the University of Puerto Rico, San Juan, and her Doctor of Podiatric Medicine degree from Ohio College of Podiatric Medicine. Dr. Rodriguez completed a rotating podiatric residency at Columbia University General Hospital in Seminole, FL, and a residency in podiatric surgery at Northside Hospital and Heart Institute in St. Petersburg, FL.",
      "She has been providing podiatric services since 1998. Dr. Rodriguez is welcoming new patients at her St. Augustine office, as well as her Palm Coast office.",
    ],
    education: [
      { heading: "Undergraduate", items: ["University of Puerto Rico, San Juan"] },
      { heading: "Medical Education", items: ["Ohio College of Podiatric Medicine, Ohio"] },
      {
        heading: "Residency Training",
        items: [
          "Columbia University General Hospital, Seminole, FL",
          "Northside Hospital and Heart Institute, St. Petersburg, FL",
        ],
      },
    ],
    offices: ["St. Augustine", "Palm Coast"],
    facts: ["In practice since 1998", "Accepting new patients"],
  },
  {
    slug: "duc-nguyen",
    name: "Duc Nguyen",
    suffix: "DPM",
    specialties: ["Podiatry"],
    role: "Board Certified Podiatrist",
    photo: { src: "/Doctors/duc-nguyen.jpg", objectPosition: "0% 30%" },
    credentials: ["Doctor of Podiatric Medicine"],
    affiliations: [
      "American Podiatric Medical Association",
      "Florida Podiatric Medical Association",
    ],
    bio: [
      "Dr. Duc Nguyen is a board certified podiatrist who started his practice, Duc Nguyen Podiatry, to bring forth his practice philosophy of providing exceptional, compassionate, and innovative care while treating patients like family. From his early childhood, Dr. Nguyen knew his life's work would be in medicine and promised his Uncle that he would use his talents to improve the lives of others.",
      "Before relocating to the Sunshine state, Dr. Nguyen completed his podiatric residency at Wyckoff Height Medical Center in Brooklyn, New York. His residency combined state-of-the-art podiatric medical training with advanced preparation in reconstructive rearfoot and ankle surgery. It was here at Wyckoff Heights where Dr. Nguyen achieved the status of Chief Resident of Podiatry and completed his board certification.",
      "Dr. Nguyen specializes in elective, reconstructive, and traumatic foot and ankle surgery, sports medicine (with a focus on sports injuries of the foot and ankle), pediatric podiatry, geriatric podiatry, and diabetic limb salvage and wound care. He is proud to provide foot care for patients of all ages from pediatric to geriatric.",
      "When not providing care for his patients, Dr. Nguyen can be found exploring Florida. His interests include fitness training and martial arts, as well as a deep love of fishing and golf. Dr. Nguyen is welcoming new patients at his St. Augustine office.",
    ],
    education: [
      { heading: "Medical Education", items: ["Kent State University College of Podiatric Medicine, OH"] },
      { heading: "Residency Training", items: ["Wyckoff Height Medical Center, Brooklyn, New York"] },
    ],
    offices: ["St. Augustine"],
    facts: ["Chief Resident of Podiatry", "Accepting new patients"],
    insuranceLogos: [
      { src: "/logo/BCBS-logo-.png", alt: "Blue Cross Blue Shield", width: 400, height: 200 },
      { src: "/logo/Medicare-logo-1536x436.png", alt: "Medicare", width: 1536, height: 436 },
    ],
  },
  {
    slug: "john-borzok",
    name: "John Borzok",
    suffix: "DPM",
    specialties: ["Podiatry"],
    photo: { src: "/Doctors/john-borzok.jpg", objectPosition: "100% 30%" },
    credentials: ["Doctor of Podiatric Medicine"],
    affiliations: [
      "American Podiatric Medical Association",
      "Florida Podiatric Medical Association",
    ],
  },
  {
    slug: "francisco-de-jesus",
    name: "Francisco De Jesus",
    suffix: "MD",
    specialties: ["Infectious Disease"],
    photo: { src: "/Doctors/francisco-de-jesus.jpg", objectPosition: "0% 30%" },
    credentials: [
      "Doctor of Medicine",
      "American College of Physicians",
      "Infectious Diseases Society of America",
    ],
  },
  {
    slug: "yesenia-justiniano",
    name: "Yesenia Justiniano",
    suffix: "MD",
    specialties: ["Wound Care", "Hyperbaric Medicine"],
    photo: { src: "/Doctors/yesenia-justiniano.jpg", objectPosition: "100% 25%" },
    credentials: [
      "Doctor of Medicine",
      "Board Certified, American College of Certified Wound Specialists",
      "Board Certified, Hyperbaric Medicine, International Board of Undersea Medicine",
    ],
  },
  {
    slug: "frank-michael-alea",
    name: "Frank Michael Alea",
    suffix: "Internal Medicine",
    specialties: ["Regenerative Medicine"],
    photo: { src: "/Doctors/frank-alea.jpg", objectPosition: "50% 18%" },
    credentials: ["Internal Medicine doctor focusing on Regenerative Medicine"],
  },
];
