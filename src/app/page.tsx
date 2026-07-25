import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import CTASection from "@/components/CTASection";
import { CategoryIllustration, GoogleStars } from "@/components/MedicalIllustrations";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { doctor, locations, services, faqs } from "@/lib/site";
import { articles } from "@/lib/articles";
import { serviceAreas } from "@/lib/areas";

export const metadata: Metadata = {
  title: "Hip & Knee Replacement Surgeon in Atlanta, GA",
  description:
    "Dr. Sam Vojdani is a board-certified, fellowship-trained orthopedic surgeon offering anterior hip replacement, knee replacement, and revision joint surgery in Midtown Atlanta and Sandy Springs, GA.",
  alternates: { canonical: "/" },
};

const credentials = [
  "Board-Certified Orthopedic Surgeon",
  "Columbia University Adult Reconstruction Fellowship",
  "Alpha Omega Alpha Honor Society",
  "Castle Connolly Top Doctor",
];

const whyChoose = [
  "Board-Certified Orthopedic Surgeon",
  "Fellowship-Trained",
  "Exclusive Hip & Knee Care",
  "Minimally Invasive Anterior Hip Replacement",
  "Quadriceps-Sparing Knee Replacement",
  "Robotic & Computer-Assisted Surgery",
  "Same-Day Outpatient Joint Replacement",
  "Complex Revision & Second-Opinion Care",
  "Minimal Opioid Protocols",
  "Castle Connolly Top Doctor",
  "Team-Based Recovery with Coordinated PT",
  "Convenient Office Locations",
];

export default function HomePage() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-50 to-white">
        <Container className="grid gap-10 py-14 lg:grid-cols-2 lg:items-center lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
              Hip &amp; Knee Replacement · Atlanta, Georgia
            </p>
            <h1 className="mt-3 font-serif text-4xl font-bold leading-tight text-brand-950 sm:text-5xl">
              Expert Hip &amp; Knee Replacement Surgery with Dr. Sam Vojdani
            </h1>
            <p className="mt-5 text-lg text-brand-800">
              Board-certified and fellowship-trained, Dr. Vojdani specializes in
              anterior hip replacement, muscle-sparing knee replacement, and
              technology-assisted joint replacement.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={doctor.schedulingPhoneHref}
                className="rounded-md bg-brand-700 px-6 py-3 text-center font-semibold text-white hover:bg-brand-800"
              >
                Call {doctor.schedulingPhoneDisplay}
              </a>
              <Link
                href="/contact"
                className="rounded-md border border-brand-700 px-6 py-3 text-center font-semibold text-brand-700 hover:bg-brand-50"
              >
                Request an Appointment
              </Link>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-3 text-sm text-brand-800">
              {credentials.map((c) => (
                <li key={c} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="mx-auto w-full max-w-sm">
            <div className="overflow-hidden rounded-2xl border border-brand-100 shadow-lg">
              <Image
                src={doctor.headshot}
                alt="Dr. Sam Vojdani, MD, orthopedic surgeon in Atlanta, Georgia"
                width={800}
                height={704}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
            <p className="mt-3 text-center text-sm text-brand-600">
              {doctor.name} — {doctor.title}
            </p>
            <a
              href={doctor.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto mt-3 flex w-fit items-center gap-2 rounded-full border border-brand-100 bg-white px-4 py-2 shadow-sm transition hover:shadow-md"
            >
              <GoogleStars />
              <span className="text-sm font-semibold text-brand-900">
                {doctor.googleRating} on Google
              </span>
              <span className="text-xs text-brand-500 underline">See reviews</span>
            </a>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <h2 className="font-serif text-3xl font-bold text-brand-950">
            Is It Time to Consider Hip or Knee Replacement?
          </h2>
          <p className="mt-3 max-w-3xl text-brand-700">
            Joint pain doesn&rsquo;t need to control your life. Even if surgery
            isn&rsquo;t needed, schedule time to speak with Dr. Vojdani so you
            can work together and find the best path to get you back to being
            you.
          </p>
        </Container>
      </section>

      <section className="bg-brand-950 py-16 text-white">
        <Container>
          <h2 className="font-serif text-3xl font-bold">Why Patients Choose Dr. Vojdani</h2>
          <ul className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {whyChoose.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <svg
                  viewBox="0 0 20 20"
                  className="mt-1 h-5 w-5 shrink-0 text-brand-300"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm3.7-9.3a1 1 0 0 0-1.4-1.4L9 10.6 7.7 9.3a1 1 0 0 0-1.4 1.4l2 2a1 1 0 0 0 1.4 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-serif text-lg font-semibold text-brand-100">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-y border-brand-100 bg-brand-50/50 py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <GoogleStars className="justify-center" />
            <h2 className="mt-3 font-serif text-3xl font-bold text-brand-950">
              Rated 5 Stars Across Google Reviews
            </h2>
            <p className="mt-4 text-brand-700">
              Patient trust is earned one recovery at a time. See what has been
              said by real patients, just like you.
            </p>
            <div className="mt-8">
              <TestimonialCarousel />
            </div>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={doctor.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-brand-700 px-6 py-3 font-semibold text-white hover:bg-brand-800"
              >
                Read Our Google Reviews
              </a>
              <Link
                href="/about"
                className="rounded-md border border-brand-700 px-6 py-3 font-semibold text-brand-700 hover:bg-brand-50"
              >
                Meet Dr. Vojdani
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="flex items-end justify-between">
            <h2 className="font-serif text-3xl font-bold text-brand-950">
              Hip &amp; Knee Procedures
            </h2>
            <Link href="/services" className="text-sm font-semibold text-brand-600 hover:underline">
              View all services →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group rounded-xl border border-brand-100 p-6 transition hover:border-brand-400 hover:shadow-md"
              >
                <h3 className="font-serif text-lg font-semibold text-brand-900 group-hover:text-brand-600">
                  {s.name}
                </h3>
                <p className="mt-2 text-sm text-brand-700">{s.summary}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-50 py-16">
        <Container>
          <h2 className="font-serif text-3xl font-bold text-brand-950">
            Two Locations Serving Metro Atlanta
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {locations.map((loc) => (
              <div key={loc.slug} className="rounded-xl border border-brand-100 bg-white p-6">
                <h3 className="font-serif text-xl font-semibold text-brand-900">
                  {loc.shortName}
                </h3>
                <p className="mt-2 text-brand-700">
                  {loc.addressLine1}
                  {loc.addressLine2 && <>, {loc.addressLine2}</>}
                  <br />
                  {loc.city}, {loc.state} {loc.zip}
                </p>
                <a href={loc.phoneHref} className="mt-2 inline-block font-semibold text-brand-600">
                  {loc.phoneDisplay}
                </a>
                <div className="mt-4">
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="text-sm font-semibold text-brand-600 hover:underline"
                  >
                    Directions &amp; details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-500">
              Proudly serving patients across Georgia and surrounding areas
            </h3>
            <ul className="mt-3 flex flex-wrap gap-x-2 gap-y-2 text-sm">
              {serviceAreas.map((a, i) => (
                <li key={a.slug} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true" className="text-brand-300">·</span>}
                  <Link
                    href={`/service-areas/${a.slug}`}
                    className="text-brand-600 hover:underline"
                  >
                    {a.city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-brand-50 py-16">
        <Container>
          <div className="flex items-end justify-between">
            <h2 className="font-serif text-3xl font-bold text-brand-950">
              Patient Education Library
            </h2>
            <Link href="/education" className="text-sm font-semibold text-brand-600 hover:underline">
              Browse all guides →
            </Link>
          </div>
          <p className="mt-3 max-w-3xl text-brand-700">
            Honest, surgeon-written answers to the questions patients actually
            ask — recovery timelines, choosing between procedures, costs, and
            when surgery is (and isn&rsquo;t) the right call.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.slice(0, 6).map((a) => (
              <Link
                key={a.slug}
                href={`/education/${a.slug}`}
                className="group flex gap-4 rounded-xl border border-brand-100 bg-white p-5 transition hover:border-brand-400 hover:shadow-md"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-500">
                  <CategoryIllustration category={a.category} className="h-11 w-11" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-semibold leading-snug text-brand-900 group-hover:text-brand-600">
                    {a.title}
                  </h3>
                  <p className="mt-1 text-xs text-brand-500">
                    {a.readingMinutes} min read
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <h2 className="font-serif text-3xl font-bold text-brand-950">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 space-y-6">
            {faqs.slice(0, 3).map((f) => (
              <div key={f.question} className="border-b border-brand-100 pb-6">
                <h3 className="font-serif text-lg font-semibold text-brand-900">
                  {f.question}
                </h3>
                <p className="mt-2 text-brand-700">{f.answer}</p>
              </div>
            ))}
          </div>
          <Link href="/faq" className="mt-6 inline-block text-sm font-semibold text-brand-600 hover:underline">
            Read the full FAQ →
          </Link>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
