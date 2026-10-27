import Link from "next/link";
import { ArrowRight, Clock, MapPin, Navigation, Phone } from "lucide-react";
import type { Provider } from "@/content/providers";
import { site } from "@/content/site";

export default function ProfileSidebar({ provider: p }: { provider: Provider }) {
  const { schedule, address, mapUrl, phone, phoneHref } = site.contact;

  return (
    <aside id="locations" className="scroll-mt-44 py-10 lg:sticky lg:top-44 lg:self-start lg:py-12">
      <div className="rounded-[14px] border border-line bg-white p-6 shadow-[0_14px_40px_-24px_rgb(11_59_112/0.35)]">
        <h2 className="text-xl font-bold">Locations</h2>

        {p.offices && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {p.offices.map((o) => (
              <li
                key={o}
                className="flex items-center gap-1.5 rounded-full bg-blue-light px-3 py-1.5 text-[13px] font-semibold text-navy"
              >
                <MapPin aria-hidden className="size-3.5 text-teal" />
                {o}
              </li>
            ))}
          </ul>
        )}

        <ul className="mt-6 space-y-4 border-t border-line pt-6 text-[15px]">
          <li className="flex items-start gap-3 text-body">
            <MapPin aria-hidden className="mt-0.5 size-[18px] shrink-0 text-teal" />
            {address}
          </li>
          {schedule.map(({ days, time }) => (
            <li key={days} className="flex items-start gap-3 text-body">
              <Clock aria-hidden className="mt-0.5 size-[18px] shrink-0 text-teal" />
              <span>
                {days}: <span className="font-semibold text-navy">{time}</span>
              </span>
            </li>
          ))}
          <li>
            <a href={phoneHref} className="flex items-center gap-3 font-semibold text-navy hover:text-teal">
              <Phone aria-hidden className="size-[18px] shrink-0 text-teal" />
              {phone}
            </a>
          </li>
        </ul>

        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex h-12 items-center justify-center gap-2 rounded-[10px] bg-blue-light text-sm font-semibold text-navy transition-colors hover:bg-teal hover:text-white"
        >
          <Navigation aria-hidden className="size-4" />
          Get Directions
        </a>
      </div>

      <Link
        href="/providers"
        className="group mt-4 flex items-center justify-between rounded-[14px] border border-line bg-cyan-pale px-6 py-4 text-sm font-semibold text-navy transition-colors hover:border-teal hover:text-teal"
      >
        View All Providers
        <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </aside>
  );
}
