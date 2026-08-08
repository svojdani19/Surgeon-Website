import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  services,
  serviceImage,
  doctor,
  siteUrl,
  procedureDetails,
} from "@/lib/site";
import { articles } from "@/lib/articles";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      type: "website",
      title: `${service.name} in Atlanta, GA`,
      description: service.metaDescription,
      url: `${siteUrl}/services/${service.slug}`,
      images: [{ url: serviceImage(service.slug).src, alt: serviceImage(service.slug).alt }],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const relatedArticles = articles
    .filter((a) => a.relatedServices.includes(service.slug))
    .slice(0, 3);

  const procedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.name,
    description: service.summary,
    url: `${siteUrl}/services/${service.slug}`,
    procedureType: "https://schema.org/SurgicalProcedure",
    bodyLocation: service.slug.includes("hip")
      ? "Hip"
      : service.slug.includes("knee")
        ? "Knee"
        : "Hip and Knee",
    performer: {
      "@type": "Physician",
      "@id": `${siteUrl}/#physician`,
      name: doctor.name,
    },
    // Substantive procedure detail where we have it, so the markup describes
    // the operation rather than just naming it.
    ...(procedureDetails[service.slug] ?? {}),
    mainEntityOfPage: `${siteUrl}/services/${service.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureSchema) }}
      />
      <section className="bg-brand-50 py-14">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_400px] lg:items-center">
          <div>
            <Breadcrumbs
              crumbs={[
                { name: "Home", href: "/" },
                { name: "Hip & Knee Care", href: "/services" },
                { name: service.shortName, href: `/services/${service.slug}` },
              ]}
            />
            <h1 className="mt-3 font-serif text-4xl font-bold text-brand-950">
              {service.name}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-brand-800">{service.summary}</p>
          </div>
          <div className="relative h-56 w-full overflow-hidden rounded-2xl shadow-lg lg:h-64">
            <Image
              src={serviceImage(service.slug).src}
              alt={serviceImage(service.slug).alt}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 400px"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-4 text-brand-800">
            {service.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <aside className="rounded-xl border border-brand-100 bg-brand-50/60 p-6">
            <h2 className="font-serif text-lg font-semibold text-brand-900">
              At a Glance
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-brand-800">
              {service.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a
                href={doctor.schedulingPhoneHref}
                className="block rounded-md bg-brand-700 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-brand-800"
              >
                Call {doctor.schedulingPhoneDisplay}
              </a>
            </div>
            {relatedArticles.length > 0 && (
              <div className="mt-8 border-t border-brand-100 pt-6">
                <h2 className="font-serif text-lg font-semibold text-brand-900">
                  Patient Guides
                </h2>
                <ul className="mt-3 space-y-3">
                  {relatedArticles.map((a) => (
                    <li key={a.slug}>
                      <Link
                        href={`/education/${a.slug}`}
                        className="text-sm font-semibold text-brand-600 hover:underline"
                      >
                        {a.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </Container>
      </section>

      <CTASection
        heading={`Ask Dr. Vojdani About ${service.shortName}`}
        subheading="Every treatment plan starts with a thorough evaluation of your anatomy, imaging, and goals."
      />
    </>
  );
}
