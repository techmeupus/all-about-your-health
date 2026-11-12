import { Clock, Mail, MapPin, Phone, Printer } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { site } from "@/content/site";

export default function ContactInfo() {
  const { fullAddress, phone, phoneHref, fax, email, schedule, mapUrl } = site.contact;
  const rows = [
    { key: "address", Icon: MapPin, label: "Address", node: <a href={mapUrl} className="hover:text-teal">{fullAddress}</a> },
    { key: "phone", Icon: Phone, label: "Phone", node: <a href={phoneHref} className="font-semibold text-navy hover:text-teal">{phone}</a> },
    { key: "fax", Icon: Printer, label: "Fax", node: <span>{fax}</span> },
    { key: "email", Icon: Mail, label: "Email", node: <a href={`mailto:${email}`} className="hover:text-teal">{email}</a> },
    ...schedule.map(({ days, time }) => ({
      key: `hours-${days}`,
      Icon: Clock,
      label: "Hours",
      node: <span>{days}: {time}</span>,
    })),
  ];

  return (
    <div>
      <SectionLabel>Contact us</SectionLabel>
      <h2 className="mt-6 text-[30px] leading-[1.15] font-bold tracking-[-0.015em] sm:text-4xl">Get in touch</h2>
      <h3 className="mt-5 text-xl font-bold">St. Augustine, FL</h3>
      <ul className="mt-5 space-y-4">
        {rows.map(({ key, Icon, label, node }) => (
          <li key={key} className="flex items-start gap-4 text-base text-body">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal">
              <Icon aria-hidden className="size-[18px]" strokeWidth={1.75} />
            </span>
            <span className="pt-2">
              <span className="sr-only">{label}: </span>
              {node}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
