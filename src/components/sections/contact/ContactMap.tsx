import { site } from "@/content/site";

// Google Maps embed (no API key needed for the query form)
export default function ContactMap() {
  const q = encodeURIComponent(site.contact.fullAddress);
  return (
    <div className="h-full min-h-[320px] overflow-hidden rounded-[14px] border border-line bg-blue-light">
      <iframe
        title="Map showing our St. Augustine office"
        src={`https://www.google.com/maps?q=${q}&output=embed`}
        className="size-full min-h-[320px] border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
