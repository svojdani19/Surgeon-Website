import type { Metadata } from "next";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import Container from "@/components/Container";
import { doctor } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Dr. Sam Vojdani | Orthopedic Surgeon in Atlanta, GA",
  description:
    "Dr. Sam Vojdani is a board-certified, fellowship-trained orthopedic surgeon specializing in hip and knee joint replacement, trained at Columbia University and Stony Brook University Hospital.",
  alternates: { canonical: "/about" },
};

const education = [
  "American Board of Orthopedic Surgery Certification",
  "Fellowship: Frank E. Stinchfield Adult Reconstruction Fellowship, Columbia University, New York",
  "Residency: Orthopedic Surgery, Stony Brook University Hospital, New York (Chief Resident)",
  "Doctor of Medicine, Medical College of Georgia (graduated top of class)",
  "Biology & Biomedical Engineering, Georgia Institute of Technology (Stamps President's Scholar, highest honors)",
];

const distinctions = [
  "Castle Connolly Top Doctor (2024–2026)",
  "Alpha Omega Alpha Honor Society",
  "Gold Humanism Award",
  "Most Outstanding Research Award, Residency",
  "Top 1% in Patient Satisfaction, Care & Likelihood to Recommend",
  "Humanitarian Committee, American Association of Hip & Knee Surgeons",
  "Member, American Academy of Orthopaedic Surgery",
  "Georgia Orthopedic Society",
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-50 py-14">
        <Container className="grid gap-10 lg:grid-cols-[280px_1fr] lg:items-start">
          <div className="mx-auto w-full max-w-xs lg:mx-0">
            <div className="overflow-hidden rounded-2xl border border-brand-100 shadow-lg">
              <Image
                src={doctor.headshot}
                alt="Dr. Sam Vojdani, MD"
                width={800}
                height={704}
                sizes="(max-width: 1024px) 80vw, 280px"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
              About Your Surgeon
            </p>
            <h1 className="mt-2 font-serif text-4xl font-bold text-brand-950">
              {doctor.name}
            </h1>
            <p className="mt-1 text-lg text-brand-700">{doctor.title}</p>
            <div className="mt-6 space-y-4 text-brand-800">
              <p>
                Sam Vojdani, MD is a board-certified and fellowship-trained
                orthopedic surgeon specializing in hip and knee joint
                replacement. He is an Atlanta native, born and raised in
                Peachtree Corners and graduating from Duluth High School. He
                attended Georgia Institute of Technology as a Stamps
                President&rsquo;s Scholar, a top scholarship, and graduated
                with degrees in biomedical engineering and biology with
                highest honors. He was recognized as the number one graduating
                student in the College of Sciences, alongside numerous other
                accolades.
              </p>
              <p>
                Dr. Vojdani pursued medical training at the Medical College of
                Georgia, graduating at the top of his class. He earned Alpha
                Omega Alpha honors, acknowledging the top 10 percent of
                national medical students. He also received the Gold Humanism
                Award, representing the highest standards in patient
                interaction. He then completed his orthopedic surgery
                residency training at Stony Brook University Hospital in New
                York, where he was named chief resident in his final year and
                received the award for most outstanding research.
              </p>
              <p>
                Following residency, Dr. Vojdani was accepted to the
                prestigious Frank E. Stinchfield Adult Reconstruction
                Fellowship at Columbia University in New York City. Before
                joining Total Joint Specialists, he held a faculty position at
                Emory University, where he was recognized among the top 1
                percent of physicians in patient satisfaction, care, and
                likelihood to recommend.
              </p>
              <p>
                His practice is guided by individualized decision-making,
                whether treatment involves nonsurgical care or surgery. When
                surgery is needed, he focuses on minimally invasive anterior
                hip replacement, robotic-assisted knee replacement, partial
                and total knee replacement, revision surgery, and outpatient
                recovery pathways.
              </p>
              <p>
                Dr. Vojdani continues to contribute to the field through
                peer-reviewed publications, presentations, research review,
                and clinical education. Outside medicine, he enjoys Atlanta
                sports, travel, food, and time with his wife and children.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="grid gap-12 sm:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl font-bold text-brand-950">
              Education &amp; Training
            </h2>
            <ul className="mt-4 space-y-3 text-brand-800">
              {education.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-2xl font-bold text-brand-950">
              Distinctions &amp; Affiliations
            </h2>
            <ul className="mt-4 space-y-3 text-brand-800">
              {distinctions.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-brand-50 py-16">
        <Container>
          <h2 className="font-serif text-2xl font-bold text-brand-950">
            Hospital &amp; Surgery Center Affiliations
          </h2>
          <ul className="mt-4 grid gap-3 text-brand-800 sm:grid-cols-3">
            <li className="rounded-lg border border-brand-100 bg-white p-4">
              Total Joint Surgery Center – Atlanta
            </li>
            <li className="rounded-lg border border-brand-100 bg-white p-4">
              Northside Hospital Atlanta
            </li>
            <li className="rounded-lg border border-brand-100 bg-white p-4">
              Meridian Mark Ambulatory Surgery Center
            </li>
          </ul>
        </Container>
      </section>

      <CTASection
        heading="Schedule a Consultation with Dr. Vojdani"
        subheading="See Dr. Vojdani in Midtown Atlanta or Sandy Springs for a comprehensive evaluation of your hip or knee pain."
      />
    </>
  );
}
