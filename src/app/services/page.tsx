import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import CTASection from "@/components/CTASection";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hip & Knee Replacement Services in Atlanta, GA",
  description:
    "Dr. Sam Vojdani offers anterior hip replacement, total and partial knee replacement, robotic-assisted surgery, outpatient joint replacement, and revision surgery in Atlanta, GA.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-brand-50 py-14">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
            Hip &amp; Knee Care
          </p>
          <h1 className="mt-2 font-serif text-4xl font-bold text-brand-950">
            Hip &amp; Knee Replacement Services
          </h1>
          <p className="mt-4 max-w-2xl text-brand-800">
            Dr. Sam Vojdani offers a full range of surgical and non-surgical
            options for hip and knee arthritis, from minimally invasive
            anterior hip replacement to complex revision reconstruction,
            at Total Joint Specialists in Midtown Atlanta and Sandy Springs.
          </p>
        </Container>
      </section>
      <section className="py-16">
        <Container className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group rounded-xl border border-brand-100 p-6 transition hover:border-brand-400 hover:shadow-md"
            >
              <h2 className="font-serif text-xl font-semibold text-brand-900 group-hover:text-brand-600">
                {s.name}
              </h2>
              <p className="mt-3 text-sm text-brand-700">{s.summary}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-brand-600">
                Learn more →
              </span>
            </Link>
          ))}
        </Container>
      </section>
      <CTASection />
    </>
  );
}
