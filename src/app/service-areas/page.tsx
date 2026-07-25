import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { serviceAreas } from "@/lib/areas";

export const metadata: Metadata = {
  title: "Areas We Serve: Hip & Knee Replacement Across Metro Atlanta",
  description:
    "Dr. Sam Vojdani provides hip and knee replacement for patients across metro Atlanta — Buckhead, Sandy Springs, Dunwoody, Alpharetta, Roswell, Johns Creek, East Cobb, and beyond.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-950">
        <Image
          src="/images/atlanta-skyline-green.jpg"
          alt="Aerial view of the Atlanta skyline surrounded by greenery"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-brand-950/90 via-brand-950/70 to-brand-900/40"
          aria-hidden="true"
        />
        <Container className="relative py-16 lg:py-24">
          <Breadcrumbs
            variant="light"
            crumbs={[
              { name: "Home", href: "/" },
              { name: "Areas We Serve", href: "/service-areas" },
            ]}
          />
          <h1 className="mt-3 font-serif text-4xl font-bold text-white sm:text-5xl">
            Hip &amp; Knee Replacement Across Metro Atlanta
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-100">
            With offices in Midtown Atlanta and Sandy Springs — and surgery at
            Total Joint Surgery Center – Atlanta, Northside Hospital Atlanta,
            and Meridian Mark Ambulatory Surgery Center — Dr. Vojdani cares for
            patients from every corner of the metro. Find your area below for
            directions and local details.
          </p>
        </Container>
      </section>
      <section className="py-16">
        <Container className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceAreas.map((a) => (
            <Link
              key={a.slug}
              href={`/service-areas/${a.slug}`}
              className="group rounded-xl border border-brand-100 p-6 transition hover:border-brand-400 hover:shadow-md"
            >
              <h2 className="font-serif text-xl font-semibold text-brand-900 group-hover:text-brand-600">
                {a.city}
              </h2>
              <p className="mt-2 text-sm text-brand-700">{a.driveNote}</p>
              <span className="mt-3 inline-block text-sm font-semibold text-brand-600">
                Hip &amp; knee care for {a.city} →
              </span>
            </Link>
          ))}
        </Container>
      </section>
      <CTASection />
    </>
  );
}
