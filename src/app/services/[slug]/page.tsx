import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CtaBanner from "@/components/sections/home/CtaBanner";
import ServiceArticle from "@/components/sections/service/ServiceArticle";
import ServiceFaqs from "@/components/sections/service/ServiceFaqs";
import ServiceHero from "@/components/sections/service/ServiceHero";
import ServiceRelated from "@/components/sections/service/ServiceRelated";
import ServiceSidebar from "@/components/sections/service/ServiceSidebar";
import ServiceTreatments from "@/components/sections/service/ServiceTreatments";
import StickyTabs from "@/components/ui/StickyTabs";
import { providers } from "@/content/providers";
import { services } from "@/content/services";
import { site } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: `${s.seo.title} | ${site.name}`,
    description: s.seo.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const hasDoctors = providers.some((p) => p.specialties.includes(service.specialty));
  const tabs = [
    { id: "overview", label: "Overview" },
    service.treatmentOptions?.items.length && { id: "treatment-options", label: "Treatment Options" },
    hasDoctors && { id: "find-a-doctor", label: "Find a Doctor" },
    service.faqs?.length && { id: "faqs", label: "FAQs" },
  ].filter(Boolean) as { id: string; label: string }[];

  return (
    <main>
      <ServiceHero service={service} />
      <StickyTabs tabs={tabs} label="Page sections" />

      <div className="container-site grid gap-12 py-14 lg:grid-cols-[1fr_340px] lg:gap-14 lg:py-16">
        <div className="min-w-0 space-y-12">
          <ServiceArticle service={service} />
          <ServiceTreatments service={service} />
          <ServiceFaqs service={service} />
        </div>
        <ServiceSidebar service={service} />
      </div>

      <ServiceRelated service={service} />
      <div className="bg-blue-light pt-20 lg:pt-28">
        <CtaBanner />
      </div>
    </main>
  );
}
