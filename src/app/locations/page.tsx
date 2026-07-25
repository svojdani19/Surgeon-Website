import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import CTASection from "@/components/CTASection";
import { locations, surgeryFacilities } from "@/lib/site";

export const metadata: Metadata = {
  title: "Office Locations | Midtown Atlanta & Sandy Springs, GA",
  description:
    "Dr. Sam Vojdani sees patients at Total Joint Specialists offices in Midtown Atlanta and Sandy Springs, Georgia. Find addresses, phone numbers, and hours.",
  alternates: { canonical: "/locations" },
};

export default function LocationsPage() {
  return (
    <>
      <section className="bg-brand-50 py-14">
        <Container>
          <h1 className="font-serif text-4xl font-bold text-brand-950">
            Office Locations
          </h1>
          <p className="mt-4 max-w-2xl text-brand-800">
            Dr. Sam Vojdani sees patients at two Total Joint Specialists
            offices in metro Atlanta. Surgery is performed at Total Joint
            Surgery Center – Atlanta, Northside Hospital Atlanta, and
            Meridian Mark Ambulatory Surgery Center.
          </p>
        </Container>
      </section>
      <section className="py-16">
        <Container className="grid gap-8 sm:grid-cols-2">
          {locations.map((loc) => (
            <div key={loc.slug} className="rounded-xl border border-brand-100 p-6">
              <h2 className="font-serif text-2xl font-semibold text-brand-900">
                {loc.shortName}
              </h2>
              <p className="mt-2 text-brand-700">
                {loc.addressLine1}
                {loc.addressLine2 && <>, {loc.addressLine2}</>}
                <br />
                {loc.city}, {loc.state} {loc.zip}
              </p>
              <a href={loc.phoneHref} className="mt-2 inline-block font-semibold text-brand-600">
                {loc.phoneDisplay}
              </a>
              <div className="mt-5">
                <Link
                  href={`/locations/${loc.slug}`}
                  className="text-sm font-semibold text-brand-600 hover:underline"
                >
                  Directions, hours &amp; details →
                </Link>
              </div>
            </div>
          ))}
        </Container>
      </section>
      <section className="bg-brand-50 py-16">
        <Container>
          <h2 className="font-serif text-3xl font-bold text-brand-950">
            Where Surgery Is Performed
          </h2>
          <p className="mt-3 max-w-2xl text-brand-700">
            Depending on your procedure and health profile, Dr. Vojdani
            performs surgery at one of three facilities — from dedicated
            same-day joint replacement surgery centers to a full-service
            hospital.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {surgeryFacilities.map((f) => (
              <div
                key={f.name}
                className="flex flex-col rounded-xl border border-brand-100 bg-white p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-500">
                  {f.type}
                </p>
                <h3 className="mt-1 font-serif text-xl font-semibold text-brand-900">
                  {f.name}
                </h3>
                <p className="mt-2 text-brand-700">
                  {f.addressLine1}
                  <br />
                  {f.city}, {f.state} {f.zip}
                </p>
                <p className="mt-3 flex-1 text-sm text-brand-700">{f.note}</p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(f.mapQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm font-semibold text-brand-600 hover:underline"
                >
                  Get directions →
                </a>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
