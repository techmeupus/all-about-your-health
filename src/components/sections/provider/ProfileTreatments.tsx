import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { specialties } from "@/content/home";
import type { Provider } from "@/content/providers";
import { serviceHref } from "@/content/services";
import ProfileBlock from "./ProfileBlock";

// Treatments come from the specialty lists in content/home.ts
export default function ProfileTreatments({ provider: p }: { provider: Provider }) {
  const groups = specialties.items.filter((s) => p.specialties.includes(s.name));
  if (!groups.length) return null;

  return (
    <ProfileBlock id="treatments" title="Treatments">
      <div className="grid gap-5 sm:grid-cols-2">
        {groups.map((g) => (
          <div key={g.slug} className="rounded-[14px] border border-line bg-cyan-pale p-6">
            <h3 className="text-lg font-bold">{g.name}</h3>
            <ul className="mt-4 space-y-2.5">
              {g.treatments.map((t) => {
                const href = serviceHref(t);
                return (
                  <li key={t} className="flex gap-2.5 text-[15px] leading-snug text-body">
                    <span aria-hidden className="mt-[7px] size-1.5 shrink-0 rounded-full bg-teal" />
                    {href ? (
                      <Link href={href} className="font-medium text-teal underline-offset-2 hover:underline">
                        {t}
                      </Link>
                    ) : (
                      t
                    )}
                  </li>
                );
              })}
            </ul>
            <Link
              href={`/services#${g.slug}`}
              className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal hover:text-teal-bright"
            >
              Learn about {g.name.toLowerCase()}
              <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        ))}
      </div>
    </ProfileBlock>
  );
}
