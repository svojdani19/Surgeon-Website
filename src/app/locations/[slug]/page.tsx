import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import CTASection from "@/components/CTASection";
import { locations, doctor, siteUrl } from "@/lib/site";

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const loc = locations.find((l) => l.slug === slug);
  if (!loc) return {};
  return {
    title: `${loc.shortName} Office | Dr. Sam Vojdani, MD`,
    description: `Visit Dr. Sam Vojdani's ${loc.shortName} office at ${loc.addressLine1}, ${loc.city}, ${loc.state} ${loc.zip} for hip and knee replacement consultations.`,
    alternates: { canonical: `/locations/${loc.slug}` },
  };
}

export default async function LocationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const loc = locations.find((l) => l.slug === slug);
  if (!loc) notFound();

  const clinicSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: loc.name,
    telephone: loc.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${loc.addressLine1}${loc.addressLine2 ? ", " + loc.addressLine2 : ""}`,
      addressLocality: loc.city,
      addressRegion: loc.state,
      postalCode: loc.zip,
      addressCountry: "US",
    },
    url: `${siteUrl}/locations/${loc.slug}`,
    physician: { "@type": "Physician", name: doctor.name },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
      />
      <section className="bg-brand-50 py-14">
        <Container>
          <Link href="/locations" className="text-sm font-semibold text-brand-600 hover:underline">
            ← All Locations
          </Link>
          <h1 className="mt-3 font-serif text-4xl font-bold text-brand-950">
            {loc.shortName} Office
          </h1>
          <p className="mt-2 text-brand-800">
            {doctor.name} — {doctor.title}
          </p>
        </Container>
      </section>
      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-xl font-semibold text-brand-900">
              Address &amp; Contact
            </h2>
            <p className="mt-3 text-brand-800">
              {loc.addressLine1}
              {loc.addressLine2 && <>, {loc.addressLine2}</>}
              <br />
              {loc.city}, {loc.state} {loc.zip}
            </p>
            <p className="mt-3">
              <a href={loc.phoneHref} className="font-semibold text-brand-600">
                {loc.phoneDisplay}
              </a>
              {loc.fax && <span className="ml-4 text-brand-700">Fax: {loc.fax}</span>}
            </p>
            <h2 className="mt-8 font-serif text-xl font-semibold text-brand-900">
              Office Hours
            </h2>
            <ul className="mt-3 space-y-1 text-brand-800">
              {loc.hours.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.mapQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-md bg-brand-700 px-5 py-3 font-semibold text-white hover:bg-brand-800"
            >
              Get Directions
            </a>
          </div>
          <div className="overflow-hidden rounded-xl border border-brand-100">
            <iframe
              title={`Map to ${loc.shortName}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(loc.mapQuery)}&output=embed`}
              className="h-full min-h-[320px] w-full"
              loading="lazy"
            />
          </div>
        </Container>
      </section>
      <CTASection
        heading={`Schedule at the ${loc.shortName} Office`}
        subheading={`Call ${loc.phoneDisplay} to book a consultation with Dr. Vojdani.`}
      />
    </>
  );
}
