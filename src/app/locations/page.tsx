import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import CTASection from "@/components/CTASection";
import { locations } from "@/lib/site";

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
            offices in metro Atlanta. Surgery is performed at Northside
            Hospital Atlanta, Emory Johns Creek Hospital, and Total Joint
            Surgery Center – Cumming.
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
      <CTASection />
    </>
  );
}
