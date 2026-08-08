import type { Metadata } from "next";
import Link from "next/link";
import BackgroundVideo from "@/components/BackgroundVideo";
import Container from "@/components/Container";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  HipIllustration,
  KneeIllustration,
} from "@/components/MedicalIllustrations";
import { getArticle } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Patient Education: Hip & Knee Replacement Guides",
  description:
    "Surgeon-written guides on hip and knee replacement, organized from deciding on surgery through preparation and recovery, from Dr. Sam Vojdani in Atlanta, GA.",
  alternates: { canonical: "/education" },
};

/**
 * Journey-ordered reading paths: deciding → choosing → planning →
 * preparing → recovering → long-term. Shared guides appear in both paths.
 */
const hipPath: { slug: string; stage: string }[] = [
  { slug: "hip-pain-or-back-pain-which-is-it", stage: "Understanding Your Pain" },
  { slug: "when-is-it-time-for-hip-replacement", stage: "Deciding" },
  { slug: "how-long-does-joint-replacement-last", stage: "Longevity" },
  { slug: "anterior-vs-posterior-hip-replacement", stage: "Choosing Your Approach" },
  { slug: "same-day-joint-replacement-candidacy", stage: "Planning" },
  { slug: "hip-replacement-cost-insurance-georgia", stage: "Costs & Insurance" },
  { slug: "preparing-for-joint-replacement-surgery", stage: "Preparing for Surgery" },
  { slug: "anterior-hip-replacement-recovery-timeline", stage: "Recovery" },
  { slug: "how-to-sleep-after-hip-or-knee-replacement", stage: "Recovery" },
  { slug: "signs-of-failed-knee-or-hip-replacement", stage: "Long-Term" },
];

const kneePath: { slug: string; stage: string }[] = [
  {
    slug: "bone-on-bone-knee-arthritis-options",
    stage: "Understanding Your Pain",
  },
  { slug: "when-is-it-time-for-knee-replacement", stage: "Deciding" },
  { slug: "how-long-does-joint-replacement-last", stage: "Longevity" },
  { slug: "partial-vs-total-knee-replacement", stage: "Choosing Your Surgery" },
  { slug: "robotic-knee-replacement-explained", stage: "Technology" },
  { slug: "same-day-joint-replacement-candidacy", stage: "Planning" },
  { slug: "hip-replacement-cost-insurance-georgia", stage: "Costs & Insurance" },
  { slug: "preparing-for-joint-replacement-surgery", stage: "Preparing for Surgery" },
  { slug: "knee-replacement-recovery-timeline", stage: "Recovery" },
  { slug: "how-to-sleep-after-hip-or-knee-replacement", stage: "Recovery" },
  { slug: "signs-of-failed-knee-or-hip-replacement", stage: "Long-Term" },
];

function JourneySection({
  title,
  subtitle,
  path,
  illustration,
}: {
  title: string;
  subtitle: string;
  path: { slug: string; stage: string }[];
  illustration: React.ReactNode;
}) {
  return (
    <section className="py-12">
      <Container>
        <div className="flex items-center gap-5">
          <div className="hidden h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-500 sm:flex">
            {illustration}
          </div>
          <div>
            <h2 className="font-serif text-3xl font-bold text-brand-950">{title}</h2>
            <p className="mt-1 text-brand-700">{subtitle}</p>
          </div>
        </div>
        <ol className="mt-8 space-y-4">
          {path.map((item, i) => {
            const a = getArticle(item.slug);
            if (!a) return null;
            return (
              <li key={`${title}-${item.slug}`}>
                <Link
                  href={`/education/${a.slug}`}
                  className="group flex items-start gap-4 rounded-xl border border-brand-100 p-5 transition hover:border-brand-400 hover:shadow-md"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-700 font-serif text-lg font-bold text-white">
                    {i + 1}
                  </span>
                  <span>
                    <span className="text-xs font-semibold uppercase tracking-wide text-brand-500">
                      {item.stage} · {a.readingMinutes} min read
                    </span>
                    <span className="mt-1 block font-serif text-lg font-semibold text-brand-900 group-hover:text-brand-600">
                      {a.title}
                    </span>
                    <span className="mt-1 block text-sm text-brand-700">{a.summary}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}

export default function EducationPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-950">
        <BackgroundVideo src="/video/dancing-couple.mp4" eager />
        <div
          className="absolute inset-0 bg-gradient-to-r from-brand-950/90 via-brand-950/70 to-brand-900/40"
          aria-hidden="true"
        />
        <Container className="relative py-16 lg:py-24">
          <Breadcrumbs
            variant="light"
            crumbs={[
              { name: "Home", href: "/" },
              { name: "Patient Education", href: "/education" },
            ]}
          />
          <h1 className="mt-3 font-serif text-4xl font-bold text-white sm:text-5xl">
            Patient Education Library
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-100">
            Clear, honest answers to the questions patients actually ask about
            hip and knee replacement — organized as a step-by-step path from
            deciding on surgery through preparation, recovery, and beyond.
            Every guide reflects Dr. Vojdani&rsquo;s clinical approach; your
            own plan is always individualized at consultation.
          </p>
        </Container>
      </section>

      <JourneySection
        title="Hip Replacement"
        subtitle="Your reading path from first symptoms to full recovery."
        path={hipPath}
        illustration={<HipIllustration className="h-16 w-16" />}
      />

      <div className="border-t border-brand-100" />

      <JourneySection
        title="Knee Replacement"
        subtitle="Your reading path from first symptoms to full recovery."
        path={kneePath}
        illustration={<KneeIllustration className="h-16 w-16" />}
      />

      <CTASection
        heading="Questions your situation raises?"
        subheading="Education is a starting point — a consultation with Dr. Vojdani turns general guidance into a plan built for you."
      />
    </>
  );
}
