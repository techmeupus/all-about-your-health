import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { specialties } from "@/content/home";
import { serviceHref, type Service } from "@/content/services";

// Other treatments in the same specialty; linked when they have their own page
export default function ServiceRelated({ service: s }: { service: Service }) {
  const specialty = specialties.items.find((x) => x.name === s.specialty);
  const others = specialty?.treatments.filter((t) => t.toLowerCase() !== s.name.toLowerCase()) ?? [];
  if (!specialty || !others.length) return null;

  return (
    <section className="bg-white pb-20 lg:pb-24">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-2xl font-bold lg:text-[28px]">Other {specialty.name.toLowerCase()} treatments</h2>
          <Link
            href={`/services#${specialty.slug}`}
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-teal hover:text-teal-bright"
          >
            View all {specialty.name.toLowerCase()} services
            <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
        <ul className="mt-6 flex flex-wrap gap-2.5">
          {others.map((t) => {
            const href = serviceHref(t);
            const cls =
              "inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition-colors";
            return (
              <li key={t}>
                {href ? (
                  <Link href={href} className={`${cls} border-teal/40 bg-teal/5 text-teal hover:bg-teal hover:text-white`}>
                    {t}
                  </Link>
                ) : (
                  <span className={`${cls} border-line bg-cyan-pale text-navy`}>{t}</span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
