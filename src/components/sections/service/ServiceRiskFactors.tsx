import { Activity, Briefcase, CalendarClock, Footprints, Scale } from "lucide-react";
import type { ServiceSection } from "@/content/services";

const Icons = {
  age: CalendarClock,
  exercise: Activity,
  foot: Footprints,
  weight: Scale,
  work: Briefcase,
};

export default function ServiceRiskFactors({ factors }: { factors: NonNullable<ServiceSection["factors"]> }) {
  return (
    <ul className="mt-6 grid gap-4 sm:grid-cols-2">
      {factors.map(({ icon, term, text }) => {
        const Icon = Icons[icon as keyof typeof Icons] ?? Activity;
        return (
          <li
            key={term}
            className="flex gap-4 rounded-[12px] border border-line bg-white p-5 transition-colors hover:border-teal/40 sm:last:odd:col-span-2"
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
              <Icon aria-hidden className="size-5" strokeWidth={1.75} />
            </span>
            <div>
              <h3 className="text-base font-bold">{term}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-body">{text}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
