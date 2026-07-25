import Link from "next/link";
import Container from "@/components/Container";
import { services } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="py-24">
      <Container className="max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-500">
          Page Not Found
        </p>
        <h1 className="mt-2 font-serif text-4xl font-bold text-brand-950">
          We couldn&rsquo;t find that page
        </h1>
        <p className="mt-4 text-brand-700">
          The page may have moved. Here are some helpful places to go instead:
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="rounded-md bg-brand-700 px-5 py-2.5 font-semibold text-white hover:bg-brand-800"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="rounded-md border border-brand-200 px-5 py-2.5 font-semibold text-brand-700 hover:bg-brand-50"
          >
            Hip &amp; Knee Care
          </Link>
          <Link
            href="/education"
            className="rounded-md border border-brand-200 px-5 py-2.5 font-semibold text-brand-700 hover:bg-brand-50"
          >
            Patient Education
          </Link>
          <Link
            href="/contact"
            className="rounded-md border border-brand-200 px-5 py-2.5 font-semibold text-brand-700 hover:bg-brand-50"
          >
            Contact
          </Link>
        </div>
        <ul className="mt-10 space-y-2 text-sm">
          {services.slice(0, 3).map((s) => (
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
      </Container>
    </section>
  );
}
