import { GraduationCap } from "lucide-react";
import type { Provider } from "@/content/providers";
import ProfileBlock from "./ProfileBlock";

// Vertical timeline of education & training
export default function ProfileEducation({ provider: p }: { provider: Provider }) {
  if (!p.education?.length) return null;

  return (
    <ProfileBlock id="education" title="Education & Training">
      <ol className="relative space-y-8 border-l-2 border-line pl-8">
        {p.education.map((e) => (
          <li key={e.heading} className="relative">
            <span className="absolute top-0 -left-[49px] flex size-8 items-center justify-center rounded-full border-2 border-white bg-teal text-white shadow-sm">
              <GraduationCap aria-hidden className="size-4" />
            </span>
            <h3 className="eyebrow text-teal">{e.heading}</h3>
            <ul className="mt-2 space-y-1.5">
              {e.items.map((i) => (
                <li key={i} className="font-heading text-[17px] font-semibold text-navy">
                  {i}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </ProfileBlock>
  );
}
