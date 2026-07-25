import type { Metadata } from "next";
import Container from "@/components/Container";
import PhotoHero from "@/components/PhotoHero";
import { doctor, locations } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Schedule an Appointment",
  description:
    "Schedule a consultation with Dr. Sam Vojdani at Total Joint Specialists in Midtown Atlanta or Sandy Springs, GA.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PhotoHero
        image="/images/contact-welcome.jpg"
        imageAlt="Doctor warmly shaking hands with a smiling patient during a consultation"
        eyebrow="Get In Touch"
        title="Contact & Scheduling"
      >
        <p className="mt-4 max-w-2xl text-lg text-brand-100">
          To schedule a consultation with {doctor.name}, call the{" "}
          {doctor.practice} scheduling line or contact either office location
          directly.
        </p>
      </PhotoHero>
      <section className="py-16">
        <Container>

        <div className="mt-8 rounded-xl border border-brand-100 bg-brand-50/60 p-6">
          <h2 className="font-serif text-lg font-semibold text-brand-900">
            Schedule an Appointment
          </h2>
          <a
            href={doctor.schedulingPhoneHref}
            className="mt-3 inline-block rounded-md bg-brand-700 px-6 py-3 font-semibold text-white hover:bg-brand-800"
          >
            Call {doctor.schedulingPhoneDisplay}
          </a>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {locations.map((loc) => (
            <div key={loc.slug} className="rounded-xl border border-brand-100 p-6">
              <h2 className="font-serif text-xl font-semibold text-brand-900">
                {loc.shortName}
              </h2>
              <p className="mt-2 text-brand-700">
                {loc.addressLine1}
                {loc.addressLine2 && <>, {loc.addressLine2}</>}
                <br />
                {loc.city}, {loc.state} {loc.zip}
              </p>
              <p className="mt-2">
                <a href={loc.phoneHref} className="font-semibold text-brand-600">
                  {loc.phoneDisplay}
                </a>
                {loc.fax && <span className="ml-3 text-brand-700">Fax: {loc.fax}</span>}
              </p>
              <ul className="mt-4 space-y-1 text-sm text-brand-700">
                {loc.hours.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        </Container>
      </section>
    </>
  );
}
