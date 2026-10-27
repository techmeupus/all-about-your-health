import { Clock, MapPin, Phone } from "lucide-react";
import { site } from "@/content/site";

export default function TopBar() {
  const { schedule, address, mapUrl, phone, phoneHref } = site.contact;
  const hours = schedule.map((s) => `${s.days} ${s.time}`).join(" · ");

  return (
    <div className="bg-navy-deep text-[13px] text-white/85">
      <div className="container-site flex h-10 items-center justify-between gap-6 sm:justify-end">
        <div className="flex items-center gap-6">
          <p className="flex items-center gap-2">
            <Clock aria-hidden className="size-4 text-teal-bright" />
            <span className="sr-only">Hours of operation:</span>
            {hours}
          </p>
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 transition-colors hover:text-white md:flex"
          >
            <MapPin aria-hidden className="size-4 text-teal-bright" />
            <span className="sr-only">Office address:</span>
            {address}
          </a>
        </div>

        <a
          href={phoneHref}
          className="flex items-center gap-2 font-semibold text-white transition-colors hover:text-teal-bright"
        >
          <Phone aria-hidden className="size-4 text-teal-bright" />
          <span className="hidden sm:inline font-normal text-white/70">Call us</span>
          {phone}
        </a>
      </div>
    </div>
  );
}
