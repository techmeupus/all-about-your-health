import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProfileAbout from "@/components/sections/provider/ProfileAbout";
import ProfileCredentials from "@/components/sections/provider/ProfileCredentials";
import ProfileCta from "@/components/sections/provider/ProfileCta";
import ProfileEducation from "@/components/sections/provider/ProfileEducation";
import ProfileHeader from "@/components/sections/provider/ProfileHeader";
import ProfileSidebar from "@/components/sections/provider/ProfileSidebar";
import StickyTabs from "@/components/ui/StickyTabs";
import ProfileTreatments from "@/components/sections/provider/ProfileTreatments";
import { specialties } from "@/content/home";
import { providers } from "@/content/providers";
import { site } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return providers.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = providers.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: `Dr. ${p.name}, ${p.suffix} | ${site.name}`,
    description: p.bio?.[0] ?? `${p.specialties.join(", ")} at ${site.name}.`,
  };
}

export default async function ProviderPage({ params }: Props) {
  const { slug } = await params;
  const provider = providers.find((p) => p.slug === slug);
  if (!provider) notFound();

  const hasTreatments = specialties.items.some((s) => provider.specialties.includes(s.name));
  const tabs = [
    provider.bio?.length && { id: "about", label: "About" },
    hasTreatments && { id: "treatments", label: "Treatments" },
    { id: "credentials", label: "Credentials" },
    provider.education?.length && { id: "education", label: "Education" },
    { id: "locations", label: "Locations" },
  ].filter(Boolean) as { id: string; label: string }[];

  return (
    <main>
      <ProfileHeader provider={provider} />
      <StickyTabs tabs={tabs} label="Profile sections" />

      <div className="container-site grid gap-x-12 lg:grid-cols-[1fr_340px]">
        <div>
          <ProfileAbout provider={provider} />
          <ProfileTreatments provider={provider} />
          <ProfileCredentials provider={provider} />
          <ProfileEducation provider={provider} />
        </div>
        <ProfileSidebar provider={provider} />
      </div>

      <ProfileCta provider={provider} />
    </main>
  );
}
