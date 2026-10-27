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
    photo: { src: "/Doctors/duc-nguyen.jpg", objectPosition: "0% 30%" },
    credentials: ["Doctor of Podiatric Medicine"],
    affiliations: [
      "American Podiatric Medical Association",
      "Florida Podiatric Medical Association",
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
