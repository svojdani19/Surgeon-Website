import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CategoryIllustration } from "@/components/MedicalIllustrations";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Patient Education: Hip & Knee Replacement Guides",
  description:
    "Surgeon-written guides on hip and knee replacement — recovery timelines, anterior vs posterior approaches, partial vs total knee, costs, and candidacy, from Dr. Sam Vojdani in Atlanta, GA.",
  alternates: { canonical: "/education" },
};

const categories = ["Deciding", "Hip", "Knee", "Recovery"] as const;

export default function EducationPage() {
  return (
    <>
      <section className="bg-brand-50 py-14">
        <Container>
          <Breadcrumbs
            crumbs={[
              { name: "Home", href: "/" },
              { name: "Patient Education", href: "/education" },
            ]}
          />
          <h1 className="mt-3 font-serif text-4xl font-bold text-brand-950">
            Patient Education Library
          </h1>
          <p className="mt-4 max-w-2xl text-brand-800">
            Clear, honest answers to the questions patients actually ask about
            hip and knee replacement — written from the perspective of a
            fellowship-trained joint replacement surgeon. Every guide reflects
            Dr. Vojdani&rsquo;s clinical approach; your own plan is always
            individualized at consultation.
          </p>
        </Container>
      </section>

      {categories.map((cat) => {
        const list = articles.filter((a) => a.category === cat);
        if (list.length === 0) return null;
        const label =
          cat === "Deciding"
            ? "Deciding on Surgery"
            : cat === "Recovery"
              ? "Recovery & Preparation"
              : `${cat} Replacement`;
        return (
          <section key={cat} className="py-10 first-of-type:pt-16 last-of-type:pb-16">
            <Container>
              <h2 className="font-serif text-2xl font-bold text-brand-950">{label}</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/education/${a.slug}`}
                    className="group flex flex-col rounded-xl border border-brand-100 p-6 transition hover:border-brand-400 hover:shadow-md"
                  >
                    <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-lg bg-brand-50 text-brand-500 transition group-hover:text-brand-600">
                      <CategoryIllustration category={a.category} className="h-16 w-16" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-brand-500">
                      {a.category} · {a.readingMinutes} min read
                    </span>
                    <h3 className="mt-2 font-serif text-lg font-semibold text-brand-900 group-hover:text-brand-600">
                      {a.title}
                    </h3>
                    <p className="mt-2 text-sm text-brand-700">{a.summary}</p>
                  </Link>
                ))}
              </div>
            </Container>
          </section>
        );
      })}

      <CTASection
        heading="Questions your situation raises?"
        subheading="Education is a starting point — a consultation with Dr. Vojdani turns general guidance into a plan built for you."
      />
    </>
  );
}
