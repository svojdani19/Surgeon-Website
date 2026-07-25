import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import CTASection from "@/components/CTASection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CategoryIllustration } from "@/components/MedicalIllustrations";
import { articles, getArticle } from "@/lib/articles";
import { services, doctor, siteUrl } from "@/lib/site";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical: `/education/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.metaTitle,
      description: article.metaDescription,
      url: `${siteUrl}/education/${article.slug}`,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = article.relatedArticles
    .map((s) => getArticle(s))
    .filter(Boolean);
  const relatedSvcs = article.relatedServices
    .map((s) => services.find((x) => x.slug === s))
    .filter(Boolean);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    headline: article.title,
    description: article.metaDescription,
    url: `${siteUrl}/education/${article.slug}`,
    author: {
      "@type": "Physician",
      name: doctor.name,
      url: `${siteUrl}/about`,
      medicalSpecialty: "Orthopedic",
    },
    reviewedBy: {
      "@type": "Physician",
      name: doctor.name,
      url: `${siteUrl}/about`,
    },
    lastReviewed: article.lastReviewed,
    dateModified: article.lastReviewed,
    publisher: {
      "@type": "Organization",
      name: `${doctor.name} — ${doctor.practice}`,
      url: siteUrl,
    },
    mainEntityOfPage: `${siteUrl}/education/${article.slug}`,
  };

  const faqSchema =
    article.faqs && article.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: article.faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <section className="bg-brand-50 py-12">
        <Container>
          <Breadcrumbs
            crumbs={[
              { name: "Home", href: "/" },
              { name: "Patient Education", href: "/education" },
              { name: article.title, href: `/education/${article.slug}` },
            ]}
          />
          <div className="mt-6 flex items-start gap-6">
            <div className="hidden h-24 w-24 shrink-0 items-center justify-center rounded-xl bg-white text-brand-500 shadow-sm sm:flex">
              <CategoryIllustration category={article.category} className="h-20 w-20" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-500">
                {article.category} · {article.readingMinutes} min read
              </p>
              <h1 className="mt-2 max-w-3xl font-serif text-4xl font-bold leading-tight text-brand-950">
                {article.title}
              </h1>
            </div>
          </div>
          <p className="mt-4 max-w-3xl text-lg text-brand-800">{article.summary}</p>
          <div className="mt-6 flex items-center gap-3">
            <Image
              src={doctor.headshot}
              alt={doctor.name}
              width={44}
              height={44}
              className="h-11 w-11 rounded-full object-cover"
            />
            <div className="text-sm">
              <p className="font-semibold text-brand-900">
                Medically reviewed by{" "}
                <Link href="/about" className="underline hover:text-brand-600">
                  {doctor.name}
                </Link>
              </p>
              <p className="text-brand-600">
                Board-Certified Orthopedic Surgeon · Hip &amp; Knee Replacement
              </p>
              <p className="text-brand-500">
                Last reviewed:{" "}
                {new Date(article.lastReviewed + "T12:00:00Z").toLocaleDateString(
                  "en-US",
                  { month: "long", year: "numeric" }
                )}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,2fr)_1fr]">
          <article className="max-w-3xl">
            {article.sections.map((s) => (
              <div key={s.heading} className="mb-10">
                <h2 className="font-serif text-2xl font-bold text-brand-950">
                  {s.heading}
                </h2>
                {s.paragraphs.map((p, i) => (
                  <p key={i} className="mt-4 leading-relaxed text-brand-800">
                    {p}
                  </p>
                ))}
              </div>
            ))}

            {article.faqs && article.faqs.length > 0 && (
              <div className="mt-12 border-t border-brand-100 pt-8">
                <h2 className="font-serif text-2xl font-bold text-brand-950">
                  Common Questions
                </h2>
                <div className="mt-4 space-y-6">
                  {article.faqs.map((f) => (
                    <div key={f.question}>
                      <h3 className="font-semibold text-brand-900">{f.question}</h3>
                      <p className="mt-1 text-brand-800">{f.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <p className="mt-12 rounded-lg bg-brand-50 p-4 text-sm text-brand-700">
              This guide provides general educational information and is not a
              substitute for individualized medical advice. Treatment decisions
              should always be made in consultation with your surgeon based on
              your specific anatomy, imaging, and health history.
            </p>
          </article>

          <aside className="space-y-8">
            {relatedSvcs.length > 0 && (
              <div className="rounded-xl border border-brand-100 bg-brand-50/60 p-6">
                <h2 className="font-serif text-lg font-semibold text-brand-900">
                  Related Services
                </h2>
                <ul className="mt-3 space-y-2 text-sm">
                  {relatedSvcs.map((s) => (
                    <li key={s!.slug}>
                      <Link
                        href={`/services/${s!.slug}`}
                        className="font-semibold text-brand-600 hover:underline"
                      >
                        {s!.name} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {related.length > 0 && (
              <div className="rounded-xl border border-brand-100 p-6">
                <h2 className="font-serif text-lg font-semibold text-brand-900">
                  Keep Reading
                </h2>
                <ul className="mt-3 space-y-4">
                  {related.map((a) => (
                    <li key={a!.slug}>
                      <Link
                        href={`/education/${a!.slug}`}
                        className="text-sm font-semibold text-brand-800 hover:text-brand-600"
                      >
                        {a!.title}
                      </Link>
                      <p className="mt-1 text-xs text-brand-600">
                        {a!.readingMinutes} min read
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </Container>
      </section>

      <CTASection
        heading="Discuss your hip or knee with Dr. Vojdani"
        subheading="A consultation turns general guidance into an individualized plan — including honest advice when surgery isn't the right next step."
      />
    </>
  );
}
