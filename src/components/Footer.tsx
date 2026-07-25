import Link from "next/link";
import Container from "./Container";
import { doctor, locations, services } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-brand-100 bg-brand-950 text-brand-100">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-serif text-lg font-bold text-white">{doctor.name}</p>
          <p className="mt-1 text-sm text-brand-300">{doctor.title}</p>
          <p className="mt-4 text-sm text-brand-300">
            {doctor.practice}
            <br />
            {doctor.practiceNote}
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-400">
            Hip &amp; Knee Care
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-white">
                  {s.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-400">
            Locations
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {locations.map((loc) => (
              <li key={loc.slug}>
                <Link href={`/locations/${loc.slug}`} className="hover:text-white">
                  {loc.shortName}
                </Link>
                <div className="text-brand-400">{loc.phoneDisplay}</div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-400">
            Site
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-white">
                About Dr. Vojdani
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-white">
                Frequently Asked Questions
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact &amp; Scheduling
              </Link>
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-brand-900">
        <Container className="flex flex-col gap-2 py-6 text-xs text-brand-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {doctor.name}. All rights reserved.
          </p>
          <p>
            This website provides general educational information and does not
            constitute medical advice. Always consult Dr. Vojdani or another
            qualified physician regarding your specific condition.
          </p>
        </Container>
      </div>
    </footer>
  );
}
