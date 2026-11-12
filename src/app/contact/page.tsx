import type { Metadata } from "next";
import AppointmentForm from "@/components/sections/contact/AppointmentForm";
import ContactHero from "@/components/sections/contact/ContactHero";
import ContactInfo from "@/components/sections/contact/ContactInfo";
import ContactMap from "@/components/sections/contact/ContactMap";
import CtaBanner from "@/components/sections/home/CtaBanner";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `Contact | ${site.name}`,
  description: `Request an appointment or contact ${site.name} in St. Augustine, FL. Call ${site.contact.phone}.`,
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />

      <section className="bg-white py-14 lg:py-20">
        <div className="container-site">
          <h2 className="mb-8 text-[28px] leading-tight font-bold tracking-[-0.015em] sm:text-4xl">
            Request an appointment below
          </h2>
          <AppointmentForm />
        </div>
      </section>

      <section className="bg-white pb-16 lg:pb-24">
        <div className="container-site grid gap-10 lg:grid-cols-2 lg:gap-14">
          <ContactInfo />
          <ContactMap />
        </div>
      </section>

      <div className="bg-blue-light pt-20 lg:pt-28">
        <CtaBanner />
      </div>
    </main>
  );
}
