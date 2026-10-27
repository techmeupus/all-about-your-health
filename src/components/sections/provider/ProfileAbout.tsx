import type { Provider } from "@/content/providers";
import ProfileBlock from "./ProfileBlock";

export default function ProfileAbout({ provider: p }: { provider: Provider }) {
  if (!p.bio?.length) return null;
  const lastName = p.name.split(" ").at(-1);

  return (
    <ProfileBlock id="about" title={`About Dr. ${lastName}`}>
      <div className="space-y-5 text-base leading-[1.75] text-body md:text-[17px]">
        {p.bio.map((para) => (
          <p key={para.slice(0, 40)}>{para}</p>
        ))}
      </div>
    </ProfileBlock>
  );
}
