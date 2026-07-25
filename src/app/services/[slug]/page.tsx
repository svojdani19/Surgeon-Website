import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import CTASection from "@/components/CTASection";
import { services, locations } from "@/lib/site";

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

  return (
    <>
      <section className="bg-brand-50 py-14">
        <Container>
          <Link href="/services" className="text-sm font-semibold text-brand-600 hover:underline">
            ← All Hip &amp; Knee Services
          </Link>
          <h1 className="mt-3 font-serif text-4xl font-bold text-brand-950">
            {service.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-800">{service.summary}</p>
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
            <div className="mt-6 space-y-2">
              {locations.map((loc) => (
                <a
                  key={loc.slug}
                  href={loc.phoneHref}
                  className="block rounded-md bg-brand-700 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-brand-800"
                >
                  {loc.shortName}: {loc.phoneDisplay}
                </a>
              ))}
            </div>
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
