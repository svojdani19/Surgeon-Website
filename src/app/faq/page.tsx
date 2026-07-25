import type { Metadata } from "next";
import Container from "@/components/Container";
import CTASection from "@/components/CTASection";
import PhotoHero from "@/components/PhotoHero";
import { faqs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Hip & Knee Replacement",
  description:
    "Answers to common questions about hip and knee replacement, anterior hip surgery, partial knee replacement, and recovery from Dr. Sam Vojdani in Atlanta, GA.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PhotoHero
        image="/images/consultation.jpg"
        imageAlt="Patient receiving a consultation from a medical professional"
        eyebrow="Patient Questions"
        title="Frequently Asked Questions"
      >
        <p className="mt-4 max-w-2xl text-lg text-brand-100">
          Answers to common questions patients ask Dr. Vojdani about hip
          and knee replacement. For questions specific to your situation,
          please schedule a consultation.
        </p>
      </PhotoHero>
      <section className="py-16">
        <Container className="space-y-8">
          {faqs.map((f) => (
            <div key={f.question} className="border-b border-brand-100 pb-8">
              <h2 className="font-serif text-xl font-semibold text-brand-900">
                {f.question}
              </h2>
              <p className="mt-3 text-brand-800">{f.answer}</p>
            </div>
          ))}
        </Container>
      </section>
      <CTASection />
    </>
  );
}
