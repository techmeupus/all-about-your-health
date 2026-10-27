import { Plus } from "lucide-react";
import type { Service } from "@/content/services";

// FAQ accordion (native <details>, no JS) + FAQPage structured data for Google
export default function ServiceFaqs({ service: s }: { service: Service }) {
  if (!s.faqs?.length) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: s.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <section id="faqs" className="scroll-mt-44 border-t border-line pt-10 lg:pt-12">
      <h2 className="text-[26px] leading-tight font-bold tracking-[-0.015em] lg:text-[32px]">FAQs</h2>

      <div className="mt-6 space-y-3">
        {s.faqs.map((f, i) => (
          <details
            key={f.question}
            open={i === 0}
            className="group rounded-[12px] border border-line bg-white transition-colors open:border-teal/40 open:bg-cyan-pale"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-heading text-base font-semibold text-navy [&::-webkit-details-marker]:hidden">
              {f.question}
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-blue-light text-teal transition-transform duration-200 group-open:rotate-45 group-open:bg-teal group-open:text-white">
                <Plus aria-hidden className="size-4" strokeWidth={2.5} />
              </span>
            </summary>
            <p className="px-5 pb-5 text-[15px] leading-[1.75] text-body">{f.answer}</p>
          </details>
        ))}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
