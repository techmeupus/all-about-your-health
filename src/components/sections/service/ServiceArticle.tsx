import { BookOpen } from "lucide-react";
import type { Service } from "@/content/services";
import ServiceCallout from "./ServiceCallout";
import ServiceRiskFactors from "./ServiceRiskFactors";

// "Overview" tab: all article sections
export default function ServiceArticle({ service: s }: { service: Service }) {
  return (
    <article id="overview" className="scroll-mt-44">
      {s.sections.map((sec) => (
        <section
          key={sec.id}
          id={sec.id}
          className="scroll-mt-44 border-b border-line py-10 first:pt-0 last-of-type:border-0 last-of-type:pb-0 lg:py-12 lg:first:pt-0"
        >
          <h2 className="text-[26px] leading-tight font-bold tracking-[-0.015em] lg:text-[32px]">
            {sec.title}
          </h2>

          {sec.paragraphs && (
            <div className="mt-5 space-y-5 text-base leading-[1.8] text-body md:text-[17px]">
              {sec.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          )}

          {sec.intro && (
            <p className="mt-5 text-base leading-[1.8] text-body md:text-[17px]">{sec.intro}</p>
          )}
          {sec.factors && <ServiceRiskFactors factors={sec.factors} />}

          {sec.callout && <ServiceCallout text={sec.callout} />}
        </section>
      ))}

      {s.citation && (
        <p className="mt-6 flex items-center gap-2 text-[13px] text-muted">
          <BookOpen aria-hidden className="size-4" />
          Source: {s.citation}
        </p>
      )}
    </article>
  );
}
