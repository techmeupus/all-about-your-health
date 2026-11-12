"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { site } from "@/content/site";

const field =
  "h-12 w-full rounded-[10px] border border-line bg-cyan-pale px-4 text-[15px] text-navy placeholder:text-muted focus:border-teal focus:bg-white focus:outline-2 focus:outline-teal/30";

// There is no server on the static host, so submitting opens the visitor's email app
// with the request pre-filled and addressed to the office. Swap handleSubmit for a
// fetch() to a form service (Formspree, etc.) if a hosted endpoint is added later.
export default function AppointmentForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = [
      `Name: ${d.get("name")}`,
      `Email: ${d.get("email")}`,
      `Phone: ${d.get("phone")}`,
      "",
      `${d.get("message") ?? ""}`,
    ].join("\n");
    const subject = "Appointment request";
    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[14px] border border-line bg-white p-6 shadow-[0_14px_40px_-24px_rgb(11_59_112/0.35)] sm:p-8"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-4">
          <label className="block">
            <span className="sr-only">Name</span>
            <input name="name" required autoComplete="name" placeholder="Name" className={field} />
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="sr-only">Email</span>
              <input name="email" type="email" required autoComplete="email" placeholder="Email" className={field} />
            </label>
            <label className="block">
              <span className="sr-only">Phone number</span>
              <input name="phone" type="tel" required autoComplete="tel" placeholder="Phone Number" className={field} />
            </label>
          </div>
        </div>
        <label className="block">
          <span className="sr-only">Your message</span>
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            className={`${field} h-full min-h-32 resize-y py-3`}
          />
        </label>
      </div>

      <div className="mt-6 flex flex-col items-center gap-3">
        <button
          type="submit"
          className="inline-flex h-12 items-center justify-center gap-2.5 rounded-[10px] bg-teal px-8 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgb(0_156_154/0.55)] transition-colors hover:bg-teal-bright focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
        >
          <Send aria-hidden className="size-4" />
          Send appointment request
        </button>
        {sent && (
          <p role="status" className="text-center text-sm text-body">
            Your email app should open with your request. If it doesn&apos;t, call us at{" "}
            <a href={site.contact.phoneHref} className="font-semibold text-teal">{site.contact.phone}</a>.
          </p>
        )}
      </div>
    </form>
  );
}
