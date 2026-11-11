// Service (condition / treatment) pages. One entry per page at /services/[slug].
// Section ids become the "On this page" links.

export type ServiceSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  intro?: string; // shown above `factors` / `bullets`
  bullets?: string[]; // simple bulleted list shown after `intro`
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
  {
    slug: "achilles-tendonitis",
    name: "Achilles Tendonitis",
    specialty: "Podiatry",
    tagline: "Achilles tendonitis treatment in St. Augustine",
    summary:
      "An overuse injury of the tendon that connects your calf muscles to your heel bone. We diagnose it early and treat it so you can get back to walking, running and playing.",
    seo: {
      title: "Achilles Tendonitis Treatment in St. Augustine",
      description:
        "Pain at the back of the leg or above the heel? Achilles tendonitis is common in runners and weekend athletes. Call our St. Augustine podiatry team to schedule an evaluation.",
    },
    heroImage: "/servicesimg/Achilles%20tendon%20inflammation%20illustration.png",
    facts: [
      { label: "Main symptom", value: "Aching at the back of the leg or above the heel" },
      { label: "Most common in", value: "Runners & weekend athletes" },
      { label: "Higher risk", value: "Men, and with increasing age" },
    ],
    sidebar: {
      title: "Pain in the back of your heel?",
      text: "Our podiatry team can find the cause and build a treatment plan around you.",
    },
    sections: [
      {
        id: "about-condition",
        title: "Overview",
        paragraphs: [
          "Achilles tendonitis (uh-KILL-eez) is an overuse injury of the Achilles tendon, the band of tissue that connects calf muscles at the back of the lower leg to your heel bone.",
          "Achilles tendonitis most commonly occurs in runners who have suddenly increased the intensity or duration of their runs. It's also common in middle-aged people who play sports, such as tennis or basketball, only on the weekends.",
          "Most cases of Achilles tendonitis can be treated with relatively simple, at-home care under your doctor's supervision. Self-care strategies are usually necessary to prevent recurring episodes. More-serious cases of Achilles tendonitis can lead to tendon tears (ruptures) that may require surgical repair.",
        ],
      },
      {
        id: "symptoms",
        title: "Symptoms",
        paragraphs: [
          "The pain associated with Achilles tendonitis typically begins as a mild ache in the back of the leg or above the heel after running or other sports activity. Episodes of more-severe pain may occur after prolonged running, stair climbing or sprinting.",
          "You might also experience tenderness or stiffness, especially in the morning, which usually improves with mild activity.",
        ],
      },
      {
        id: "when-to-see-a-doctor",
        title: "When to see a doctor",
        paragraphs: [
          "If you experience persistent pain around the Achilles tendon, call your doctor. Seek immediate medical attention if the pain or disability is severe. You may have a torn (ruptured) Achilles tendon. This tendon is used when you walk, run, jump or push up on your toes.",
        ],
        callout: "Looking for help with Achilles tendonitis in St. Augustine? Call today.",
      },
      {
        id: "causes",
        title: "Causes",
        paragraphs: [
          "Achilles tendonitis is caused by repetitive or intense strain on the Achilles tendon, the band of tissue that connects your calf muscles to your heel bone. This tendon is used when you walk, run, jump or push up on your toes.",
          "The structure of the Achilles tendon weakens with age, which can make it more susceptible to injury, particularly in people who participate in sports only on the weekends or who have suddenly increased the intensity of their training programs.",
        ],
      },
      {
        id: "risk-factors",
        title: "Risk factors",
        intro: "A number of factors may increase your risk of Achilles tendonitis, including:",
        factors: [
          {
            icon: "sex",
            term: "Your sex",
            text: "Achilles tendonitis occurs most commonly in men.",
          },
          {
            icon: "age",
            term: "Age",
            text: "Achilles tendonitis is more common as you age.",
          },
          {
            icon: "foot",
            term: "Physical problems",
            text: "A naturally flat arch in your foot can put more strain on the Achilles tendon. Obesity and tight calf muscles also can increase tendon strain.",
          },
          {
            icon: "exercise",
            term: "Training choices",
            text: "Running in worn-out shoes can increase your risk of Achilles tendonitis. Tendon pain occurs more frequently in cold weather than in warm weather, and running on hilly terrain also can predispose you to Achilles injury.",
          },
          {
            icon: "medical",
            term: "Medical conditions",
            text: "People who have psoriasis or high blood pressure are at higher risk of developing Achilles tendonitis.",
          },
          {
            icon: "meds",
            term: "Medications",
            text: "Certain types of antibiotics, called fluoroquinolones, have been associated with higher rates of Achilles tendonitis.",
          },
        ],
      },
      {
        id: "complications",
        title: "Complications",
        paragraphs: [
          "Achilles tendonitis can weaken the tendon, making it more vulnerable to a tear (rupture), a painful injury that usually requires surgical repair.",
        ],
      },
      {
        id: "prevention",
        title: "Prevention",
        intro:
          "While it may not be possible to prevent Achilles tendonitis, you can take measures to reduce your risk:",
        factors: [
          {
            icon: "exercise",
            term: "Increase your activity level gradually",
            text: "If you're just beginning an exercise regimen, start slowly and gradually increase the duration and intensity of the training.",
          },
          {
            icon: "rest",
            term: "Take it easy",
            text: "Avoid activities that place excessive stress on your tendons, such as hill running. If you participate in a strenuous activity, warm up first by exercising at a slower pace. If you notice pain during a particular exercise, stop and rest.",
          },
          {
            icon: "foot",
            term: "Choose your shoes carefully",
            text: "The shoes you wear while exercising should provide adequate cushioning for your heel and should have a firm arch support to help reduce the tension in the Achilles tendon. Replace your worn-out shoes. If your shoes are in good condition but don't support your feet, try arch supports in both shoes.",
          },
          {
            icon: "strength",
            term: "Stretch daily",
            text: "Take the time to stretch your calf muscles and Achilles tendon in the morning, before exercise and after exercise to maintain flexibility. This is especially important to avoid a recurrence of Achilles tendonitis.",
          },
          {
            icon: "strength",
            term: "Strengthen your calf muscles",
            text: "Strong calf muscles enable the calf and Achilles tendon to better handle the stresses they encounter with activity and exercise.",
          },
          {
            icon: "exercise",
            term: "Cross-train",
            text: "Alternate high-impact activities, such as running and jumping, with low-impact activities, such as cycling and swimming.",
          },
        ],
      },
    ],
    treatmentOptions: {
      intro:
        "There are many treatment options that help heal an inflamed Achilles tendon. When treating the tendon it is imperative to determine the severity of injury and possible tear prior to beginning treatment. Your physician may require MRI, and or ultrasound imaging in office to determine the severity of the injury to the tendon. Once severity has been established your physician will discuss with you some of the following options.",
      items: [
        "Conservative stretching therapy",
        "R.I.C.E method (Rest, Ice, Compression, Elevation)",
        "Immobilizing Ambulating Boot or Cam Walker",
        "Anti Inflammatory Injection (This treatment is limited depending on the tendon tear severity due to increased risk of further tear associated with overuse of steroid injection)",
        "Tenolysis of the Achilles tendon",
        "Surgical Resection of the Achilles tendon (This is a last resort for most physicians however can be the most effective in treating major tears of the tendon)",
      ],
    },
    citation: "Mayo Clinic – Achilles Tendonitis",
    providerSlug: "rosana-rodriguez",
  },
  {
    slug: "mortons-neuroma",
    name: "Mortons Neuroma",
    specialty: "Podiatry",
    tagline: "Morton's neuroma treatment in St. Augustine",
    summary:
      "A thickening of the nerve between the toes that causes burning, tingling and the feeling of a pebble in your shoe. Early diagnosis often means you can avoid surgery.",
    seo: {
      title: "Morton's Neuroma Treatment in St. Augustine",
      description:
        "Tingling, burning or pain in the ball of your foot? Morton's neuroma is a thickening of nerve tissue between the toes. Call our St. Augustine podiatry team for diagnosis and treatment.",
    },
    heroImage: "/servicesimg/Mortons-Neuroma-stock.jpeg",
    facts: [
      { label: "Main symptom", value: "Burning, tingling or pain in the ball of the foot" },
      { label: "Location", value: "Between the third and fourth toes" },
      { label: "Higher risk", value: "Tight shoes, high heels & foot deformities" },
    ],
    sidebar: {
      title: "Pain in the ball of your foot?",
      text: "Our podiatry team can diagnose a neuroma early and build a treatment plan around you.",
    },
    sections: [
      {
        id: "about-condition",
        title: "What Is a Neuroma?",
        paragraphs: [
          "A neuroma is a thickening of nerve tissue that may develop in various parts of the body. The most common neuroma in the foot is a Morton's neuroma, which occurs between the third and fourth toes. It is sometimes referred to as an intermetatarsal neuroma. Intermetatarsal describes its location in the ball of the foot between the metatarsal bones. Neuromas may also occur in other locations in the foot.",
          "The thickening of the nerve that defines a neuroma is the result of compression and irritation of the nerve. This compression creates enlargement of the nerve, causing the symptoms of Morton's neuroma and eventually leading to permanent nerve damage.",
        ],
        callout: "Looking for neuroma treatment in St. Augustine? We can help.",
      },
      {
        id: "causes",
        title: "Causes of Morton's Neuroma",
        paragraphs: [
          "Anything that causes compression or irritation of the nerve can lead to the development of a neuroma. One of the most common offenders is wearing shoes that have a tapered toe box or high-heeled shoes that cause the toes to be forced into the toe box. People with certain foot deformities (bunions, hammertoes, flatfeet or more flexible feet) are at higher risk for developing a neuroma. Other potential causes are activities that involve repetitive irritation to the ball of the foot, such as running or court sports. An injury or other type of trauma to the area may also lead to a neuroma.",
        ],
      },
      {
        id: "symptoms",
        title: "Symptoms of Morton's Neuroma",
        intro:
          "If you have a Morton's neuroma, you may have one or more of these symptoms where the nerve damage is occurring:",
        bullets: [
          "Tingling, burning or numbness",
          "Pain",
          "A feeling that something is inside the ball of the foot",
          "A feeling that there is something in the shoe or a sock is bunched up",
        ],
      },
      {
        id: "progression",
        title: "Progression of Symptoms",
        intro: "The progression of a Morton's neuroma often follows this pattern:",
        bullets: [
          "The symptoms begin gradually. At first, they occur only occasionally when wearing narrow-toed shoes or performing certain aggravating activities.",
          "The symptoms may go away temporarily by removing the shoe, massaging the foot or avoiding aggravating shoes or activities.",
          "Over time, the symptoms progressively worsen and may persist for several days or weeks.",
          "The symptoms become more intense as the neuroma enlarges and the temporary changes in the nerve become permanent.",
        ],
      },
      {
        id: "diagnosis",
        title: "Diagnosis of Morton's Neuroma",
        paragraphs: [
          "To arrive at a diagnosis, the foot and ankle surgeon will obtain a thorough history of your symptoms and examine your foot. During the physical examination, the doctor attempts to reproduce your symptoms by manipulating your foot. Other tests or imaging studies may be performed.",
          "The best time to see your foot and ankle surgeon is early in the development of symptoms. Early diagnosis of a Morton's neuroma greatly lessens the need for more invasive treatments and may help you avoid surgery.",
        ],
      },
    ],
    treatmentOptions: {
      intro:
        "In developing a treatment plan, Dr. Rodriguez will first determine how long you have had the neuroma and will evaluate its stage of development. Treatment approaches vary according to the severity of the problem. For mild to moderate neuromas, treatment options may include:",
      items: [
        "Padding. Padding techniques provide support for the metatarsal arch, thereby lessening the pressure on the nerve and decreasing the compression when walking.",
        "Icing. Placing an icepack on the affected area helps reduce swelling.",
        "Orthotic devices. Custom orthotic devices provided by your foot and ankle surgeon provide the support needed to reduce pressure and compression on the nerve.",
        "Activity modifications. Activities that put repetitive pressure on the neuroma should be avoided until the condition improves.",
        "Shoe modifications. Wear shoes with a wide toe box and avoid narrow-toed shoes or shoes with high heels.",
        "Medications. Oral nonsteroidal anti-inflammatory drugs (NSAIDs), such as ibuprofen, may be recommended to reduce pain and inflammation.",
        "Injection therapy. Treatment may include injections of cortisone, local anesthetics or other agents.",
      ],
    },
    citation: "American College of Foot & Ankle Physicians",
    providerSlug: "rosana-rodriguez",
  },
];

// Link for a treatment name if it has its own page, otherwise undefined
export function serviceHref(name: string) {
  const s = services.find((x) => x.name.toLowerCase() === name.toLowerCase());
  return s ? `/services/${s.slug}` : undefined;
}
