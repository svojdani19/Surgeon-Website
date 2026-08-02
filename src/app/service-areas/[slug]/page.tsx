import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { serviceAreas, getArea } from "@/lib/areas";
import { doctor, locations, services, siteUrl } from "@/lib/site";
import { articles } from "@/lib/articles";

export function generateStaticParams() {
  return serviceAreas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  return {
    title: `Hip & Knee Replacement in ${area.city}, GA`,
    description: area.metaDescription,
    alternates: { canonical: `/service-areas/${area.slug}` },
    openGraph: {
      type: "website",
      title: `Hip & Knee Replacement in ${area.city}, GA`,
      description: area.metaDescription,
      url: `${siteUrl}/service-areas/${area.slug}`,
    },
  };
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  const office = locations.find((l) => l.slug === area.nearestOffice)!;
  const featuredArticles = articles.slice(0, 3);

  return (
    <>
      <section className="bg-brand-50 py-14">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_400px] lg:items-center">
          <div>
            <Breadcrumbs
              crumbs={[
                { name: "Home", href: "/" },
                { name: "Areas We Serve", href: "/service-areas" },
                { name: area.city, href: `/service-areas/${area.slug}` },
              ]}
            />
            <h1 className="mt-3 font-serif text-4xl font-bold text-brand-950">
              Hip &amp; Knee Replacement for {area.city}
            </h1>
            <p className="mt-2 text-brand-700">
              {doctor.name} · Board-Certified, Fellowship-Trained Joint
              Replacement Surgeon
            </p>
          </div>
          <div className="relative h-52 w-full overflow-hidden rounded-2xl shadow-lg lg:h-60">
            <Image
              src="/images/atlanta-skyline-green.jpg"
              alt="Aerial view of the Atlanta skyline surrounded by greenery"
              fill
              sizes="(max-width: 1024px) 90vw, 400px"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_1fr]">
          <div className="max-w-3xl space-y-4 text-brand-800">
            {area.intro.map((p, i) => (
              <p key={i} className="leading-relaxed">
                {p}
              </p>
            ))}
            <h2 className="pt-4 font-serif text-2xl font-bold text-brand-950">
              Getting Here from {area.city}
            </h2>
            <p className="leading-relaxed">{area.driveNote}</p>
            <h2 className="pt-4 font-serif text-2xl font-bold text-brand-950">
              Local to {area.city}
            </h2>
            <p className="leading-relaxed">{area.localNote}</p>

            <h2 className="pt-4 font-serif text-2xl font-bold text-brand-950">
              Procedures We Offer
            </h2>
            <ul className="grid gap-2 sm:grid-cols-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-brand-600 hover:underline"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-6">
            <div className="rounded-xl border border-brand-100 bg-brand-50/60 p-6">
              <h2 className="font-serif text-lg font-semibold text-brand-900">
                Your Nearest Office
              </h2>
              <p className="mt-2 text-sm font-semibold text-brand-800">
                {area.nearestOfficeLabel}
              </p>
              <p className="mt-3 text-sm text-brand-700">
                {office.addressLine1}
                {office.addressLine2 && <>, {office.addressLine2}</>}
                <br />
                {office.city}, {office.state} {office.zip}
              </p>
              <a
                href={office.phoneHref}
                className="mt-3 inline-block rounded-md bg-brand-700 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-800"
              >
                Call {office.phoneDisplay}
              </a>
              <div className="mt-3">
                <Link
                  href={`/locations/${office.slug}`}
                  className="text-sm font-semibold text-brand-600 hover:underline"
                >
                  Office details &amp; directions →
                </Link>
              </div>
            </div>
            <div className="rounded-xl border border-brand-100 p-6">
              <h2 className="font-serif text-lg font-semibold text-brand-900">
                Patient Guides
              </h2>
              <ul className="mt-3 space-y-3">
                {featuredArticles.map((a) => (
                  <li key={a.slug}>
                    <Link
                      href={`/education/${a.slug}`}
                      className="text-sm font-semibold text-brand-800 hover:text-brand-600"
                    >
                      {a.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Container>
      </section>

      <CTASection
        heading={`Serving ${area.city} from Right Next Door`}
        subheading={`Call ${doctor.schedulingPhoneDisplay} to schedule a consultation with Dr. Vojdani.`}
      />
    </>
  );
}
