import { CircleCheck } from "lucide-react";
import type { Service } from "@/content/services";

// "Treatment Options" tab; renders only when the service has treatmentOptions
export default function ServiceTreatments({ service: s }: { service: Service }) {
  const t = s.treatmentOptions;
  if (!t?.items.length) return null;

  return (
    <section id="treatment-options" className="scroll-mt-44 border-t border-line pt-10 lg:pt-12">
      <h2 className="text-[26px] leading-tight font-bold tracking-[-0.015em] lg:text-[32px]">
        Treatment Options
      </h2>
      {t.intro && <p className="mt-5 text-base leading-[1.8] text-body md:text-[17px]">{t.intro}</p>}
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {t.items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 rounded-[12px] border border-line bg-cyan-pale px-5 py-4 text-[15px] font-medium text-navy"
          >
            <CircleCheck aria-hidden className="mt-0.5 size-5 shrink-0 text-teal" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
