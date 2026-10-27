import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import type { Provider } from "@/content/providers";
import { site } from "@/content/site";

export default function ProfileCta({ provider: p }: { provider: Provider }) {
  const lastName = p.name.split(" ").at(-1);

  return (
    <section className="pb-20 lg:pb-28">
      <div className="container-site">
        <div className="flex flex-col gap-6 rounded-[14px] bg-blue-light px-6 py-10 ring-1 ring-line sm:px-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Ready to Get Started?</h2>
            <p className="mt-2 text-body">
              Schedule an appointment with Dr. {lastName} or one of our specialists.
            </p>
          </div>
          <Button href={site.cta.href} size="lg" variant="navy" className="shrink-0">
            Request Appointment
            <ArrowRight
              aria-hidden
              className="size-[18px] transition-transform duration-200 group-hover:translate-x-1"
            />
          </Button>
        </div>
      </div>
    </section>
  );
}
