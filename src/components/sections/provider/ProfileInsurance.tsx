import Image from "next/image";
import type { Provider } from "@/content/providers";
import ProfileBlock from "./ProfileBlock";

// Insurance logos shown at the bottom of the profile content
export default function ProfileInsurance({ provider: p }: { provider: Provider }) {
  if (!p.insuranceLogos?.length) return null;

  return (
    <ProfileBlock id="insurance" title="Insurance Accepted">
      <ul className="flex flex-wrap items-center gap-6">
        {p.insuranceLogos.map((l) => (
          <li key={l.src} className="rounded-[10px] bg-white px-5 py-3 ring-1 ring-line">
            <Image src={l.src} alt={l.alt} width={l.width} height={l.height} className="h-14 w-auto object-contain" />
          </li>
        ))}
      </ul>
    </ProfileBlock>
  );
}
