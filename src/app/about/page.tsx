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
  "Orthopedic Fellowship: Adult Reconstruction, Columbia University, New York",
  "Categorical Residency: Orthopedic Surgery, Stony Brook University Hospital, New York",
  "Doctor of Medicine, Medical College of Georgia, Georgia Regents University",
  "Biology & Biomedical Engineering, Georgia Institute of Technology",
];

const distinctions = [
  "Alpha Omega Alpha Honor Society",
  "Gold Humanism Honor Society",
  "Humanitarian Committee, American Association of Hip & Knee Surgeons",
  "Member, American Academy of Orthopaedic Surgery",
  "Georgia Orthopedic Society",
  "Castle Connolly Top Doctor",
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
                Dr. Sam Vojdani is a board-certified and fellowship-trained
                orthopedic surgeon with a clinical focus on the replacement of
                hip and knee joints. He specializes in minimally invasive
                anterior approach hip replacement, quadriceps-sparing knee
                replacement, robotic and computer-assisted surgical techniques,
                and outpatient joint replacement services. His expertise also
                spans partial knee replacement, multi-modal pain control
                treatments, complex replacement and revision surgery, and
                non-surgical arthritis care.
              </p>
              <p>
                Dr. Vojdani approaches patient care as a partnership between
                himself, the patient, and the broader care team. He is
                motivated by seeing patients return to the activities they
                love after a successful procedure, and is committed to
                advancing the success rate for patients undergoing joint
                replacement surgery.
              </p>
              <p>
                An Atlanta native, Dr. Vojdani was born and raised in Peachtree
                Corners, Georgia. Outside of practice, he enjoys spending time
                with his family, traveling, and culinary experiences.
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
