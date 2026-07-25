import type { Metadata } from "next";
import Container from "@/components/Container";
import CTASection from "@/components/CTASection";
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
      <section className="bg-brand-50 py-14">
        <Container>
          <h1 className="font-serif text-4xl font-bold text-brand-950">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 max-w-2xl text-brand-800">
            Answers to common questions patients ask Dr. Vojdani about hip
            and knee replacement. For questions specific to your situation,
            please schedule a consultation.
          </p>
        </Container>
      </section>
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
