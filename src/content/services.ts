// Service (condition / treatment) pages. One entry per page at /services/[slug].
// Section ids become the "On this page" links.

export type ServiceSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  intro?: string; // shown above `factors`
  factors?: { icon: string; term: string; text: string }[]; // icons: see Icons map in ServiceRiskFactors.tsx
  callout?: string; // call-to-action box at the end of the section
};

export type Service = {
  slug: string;
  name: string;
  specialty: string; // must match a name in content/home.ts specialties
  tagline: string;
  summary: string;
  seo: { title: string; description: string };
  heroImage?: string; // optional banner photo, e.g. "/services/plantar-fasciitis.jpg"
  facts: { label: string; value: string }[];
  sidebar: { title: string; text: string }; // appointment card next to the article
  sections: ServiceSection[]; // "Overview" tab
  treatmentOptions?: { intro?: string; items: string[] }; // "Treatment Options" tab, hidden until filled in
  faqs?: { question: string; answer: string }[];
  citation?: string;
  providerSlug: string; // listed first under "Find a Doctor"
};

export const services: Service[] = [
  {
    slug: "plantar-fasciitis",
    name: "Plantar Fasciitis",
    specialty: "Podiatry",
    tagline: "Heel pain treatment in St. Augustine",
    summary:
      "One of the most common causes of heel pain. We diagnose and treat the inflammation behind it so you can take your first steps each morning without pain.",
    seo: {
      title: "Plantar Fasciitis Treatment in St. Augustine",
      description:
        "Stabbing heel pain with your first steps in the morning? Plantar fasciitis is one of the most common causes of heel pain in St. Augustine. Call today to evaluate your heel pain.",
    },
    facts: [
      { label: "Main symptom", value: "Stabbing heel pain with first steps" },
      { label: "Most common age", value: "40 to 60" },
      { label: "Higher risk", value: "Runners & people on their feet" },
    ],
    sidebar: {
      title: "Struggling with heel pain?",
      text: "Our podiatry team can find the cause and build a treatment plan around you.",
    },
    sections: [
      {
        id: "about-condition",
        title: "Overview",
        paragraphs: [
          "Plantar fasciitis (PLAN-tur fas-e-I-tis) is one of the most common causes of heel pain in St. Augustine. It involves inflammation of a thick band of tissue that runs across the bottom of your foot and connects your heel bone to your toes (plantar fascia).",
          "Plantar fasciitis commonly causes stabbing pain that usually occurs with your first steps in the morning. As you get up and move, the pain normally decreases, but it might return after long periods of standing or when you stand up after sitting.",
          "Plantar fasciitis is more common in runners. People who are overweight and those who wear shoes with inadequate support also have an increased risk of plantar fasciitis.",
        ],
        callout: "Call today to evaluate your heel pain.",
      },
      {
        id: "symptoms",
        title: "Symptoms",
        paragraphs: [
          "Plantar fasciitis typically causes a stabbing pain in the bottom of your foot near the heel. The pain is usually the worst with the first few steps after awakening, although it can also be triggered by long periods of standing or when you get up after sitting. The pain is usually worse after exercise, not during it.",
        ],
      },
      {
        id: "causes",
        title: "Causes",
        paragraphs: [
          "Your plantar fascia is in the shape of a bowstring, supporting the arch of your foot and absorbing shock when you walk. If tension and stress on this bowstring become too great, small tears can occur in the fascia. Repeated stretching and tearing can irritate or inflame the fascia, although the cause remains unclear in many cases of plantar fasciitis.",
        ],
      },
      {
        id: "risk-factors",
        title: "Risk factors",
        intro:
          "Even though plantar fasciitis can develop without an obvious cause, some factors can increase your risk of developing this condition. They include:",
        factors: [
          {
            icon: "age",
            term: "Age",
            text: "Plantar fasciitis is most common between the ages of 40 and 60.",
          },
          {
            icon: "exercise",
            term: "Certain types of exercise",
            text: "Activities that place a lot of stress on your heel and attached tissue, such as long-distance running, ballet dancing and aerobic dance, can contribute to the onset of plantar fasciitis.",
          },
          {
            icon: "foot",
            term: "Foot mechanics",
            text: "Flat feet, a high arch or even an abnormal pattern of walking can affect the way weight is distributed when you're standing and can put added stress on the plantar fascia.",
          },
          {
            icon: "weight",
            term: "Obesity",
            text: "Excess pounds put extra stress on your plantar fascia.",
          },
          {
            icon: "work",
            term: "Occupations that keep you on your feet",
            text: "Factory workers, teachers and others who spend most of their work hours walking or standing on hard surfaces can damage the plantar fascia.",
          },
        ],
      },
      {
        id: "complications",
        title: "Complications",
        paragraphs: [
          "Ignoring plantar fasciitis may result in chronic heel pain that hinders your regular activities. Changing the way you walk as a way to relieve plantar fasciitis pain might lead to foot, knee, hip or back problems.",
        ],
        callout:
          "For more info and help with heel pain and plantar fasciitis in St. Augustine, call today.",
      },
    ],
    // TODO: add treatmentOptions once the client supplies them
    faqs: [
      {
        question: "What are the symptoms of plantar fasciitis?",
        answer:
          "Plantar fasciitis typically causes a stabbing pain in the bottom of your foot near the heel. The pain is usually the worst with the first few steps after awakening, although it can also be triggered by long periods of standing or when you get up after sitting. The pain is usually worse after exercise, not during it.",
      },
      {
        question: "What causes plantar fasciitis?",
        answer:
          "Your plantar fascia supports the arch of your foot and absorbs shock when you walk. If tension and stress on it become too great, small tears can occur in the fascia. Repeated stretching and tearing can irritate or inflame the fascia, although the cause remains unclear in many cases.",
      },
      {
        question: "Who is most at risk?",
        answer:
          "Plantar fasciitis is most common between the ages of 40 and 60, and in runners. People who are overweight, who wear shoes with inadequate support, who have flat feet or a high arch, or who spend most of their day standing on hard surfaces also have an increased risk.",
      },
      {
        question: "What happens if plantar fasciitis is left untreated?",
        answer:
          "Ignoring plantar fasciitis may result in chronic heel pain that hinders your regular activities. Changing the way you walk to relieve the pain might lead to foot, knee, hip or back problems.",
      },
    ],
    citation: "Mayo Clinic – Plantar Fasciitis",
    providerSlug: "rosana-rodriguez",
  },
];

// Link for a treatment name if it has its own page, otherwise undefined
export function serviceHref(name: string) {
  const s = services.find((x) => x.name.toLowerCase() === name.toLowerCase());
  return s ? `/services/${s.slug}` : undefined;
}
