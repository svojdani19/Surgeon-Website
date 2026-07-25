import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BackgroundVideo from "@/components/BackgroundVideo";
import Container from "@/components/Container";
import CTASection from "@/components/CTASection";
import { services, serviceImage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hip & Knee Replacement Services in Atlanta, GA",
  description:
    "Dr. Sam Vojdani offers anterior hip replacement, total and partial knee replacement, robotic-assisted surgery, outpatient joint replacement, and revision surgery in Atlanta, GA.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-950">
        <BackgroundVideo src="/video/beach-couple.mp4" eager />
        <div
          className="absolute inset-0 bg-gradient-to-r from-brand-950/90 via-brand-950/70 to-brand-900/40"
          aria-hidden="true"
        />
        <Container className="relative py-20 lg:py-28">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-300">
            Hip &amp; Knee Care
          </p>
          <h1 className="mt-2 font-serif text-4xl font-bold text-white sm:text-5xl">
            Hip &amp; Knee Replacement Services
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-100">
            Dr. Sam Vojdani offers a full range of surgical and non-surgical
            options for hip and knee arthritis, from injections to minimally
            invasive anterior hip replacement and complex revision
            reconstruction. Schedule an appointment to see how we can help you.
          </p>
        </Container>
      </section>
      <section className="py-16">
        <Container className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const img = serviceImage(s.slug);
            return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group overflow-hidden rounded-xl border border-brand-100 transition hover:border-brand-400 hover:shadow-md"
              >
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h2 className="font-serif text-xl font-semibold text-brand-900 group-hover:text-brand-600">
                    {s.name}
                  </h2>
                  <p className="mt-3 text-sm text-brand-700">{s.summary}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-brand-600">
                    Learn more →
                  </span>
                </div>
              </Link>
            );
          })}
        </Container>
      </section>
      <CTASection />
    </>
  );
}
