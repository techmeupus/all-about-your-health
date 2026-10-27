import { Phone } from "lucide-react";
import { site } from "@/content/site";

// Inline "call today" box used at the end of article sections
export default function ServiceCallout({ text }: { text: string }) {
  return (
    <div className="mt-7 flex flex-col gap-4 rounded-[12px] border-l-4 border-teal bg-cyan-pale px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
      <p className="font-heading text-[17px] font-semibold text-navy">{text}</p>
      <a
        href={site.contact.phoneHref}
        className="inline-flex h-11 shrink-0 items-center gap-2 self-start rounded-[10px] bg-white px-5 text-sm font-semibold text-teal ring-1 ring-line transition-colors hover:bg-teal hover:text-white sm:self-auto"
      >
        <Phone aria-hidden className="size-4" />
        {site.contact.phone}
      </a>
    </div>
  );
}
