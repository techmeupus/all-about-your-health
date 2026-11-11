import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

// Office links shown at the bottom of service pages.
// To use a photo, add `image` support here and drop the file in /public.
const offices = [
  {
    name: "St. Augustine Office",
    href: "https://staugustinefootdoctor.com/st-augustine-podiatry-office/",
  },
  {
    name: "Palm Coast Office",
    href: "https://staugustinefootdoctor.com/palm-coast-podiatry-office/",
  },
];

export default function ServiceOffices() {
  return (
    <section aria-labelledby="offices-heading" className="bg-white py-16 lg:py-20">
      <div className="container-site">
        <h2 id="offices-heading" className="text-center text-2xl font-bold sm:text-3xl">
          Choose an office near you
        </h2>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2">
          {offices.map((o) => (
            <li key={o.name}>
              <Link
                href={o.href}
                className="group relative flex aspect-[16/9] items-end overflow-hidden rounded-[14px] bg-[radial-gradient(120%_120%_at_85%_0%,#0e5a8a_0%,var(--color-navy)_55%,var(--color-navy-deep)_100%)] p-6 shadow-[0_10px_30px_-20px_rgb(11_59_112/0.5)]"
              >
                <MapPin
                  aria-hidden
                  className="absolute top-6 right-6 size-20 text-white/10 transition-transform duration-500 group-hover:scale-110"
                  strokeWidth={1.25}
                />
                <span className="flex w-full items-center justify-between gap-3">
                  <span className="text-2xl font-bold text-white">{o.name}</span>
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-white transition-colors group-hover:bg-teal">
                    <ArrowRight aria-hidden className="size-4" />
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
