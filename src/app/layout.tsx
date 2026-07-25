import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteUrl, doctor, locations } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sam Vojdani, MD | Hip & Knee Replacement Surgeon in Atlanta, GA",
    template: "%s | Sam Vojdani, MD",
  },
  description:
    "Dr. Sam Vojdani is a board-certified, fellowship-trained orthopedic surgeon specializing in hip and knee replacement at Total Joint Specialists in Midtown Atlanta and Sandy Springs, Georgia.",
  keywords: [
    "hip replacement Atlanta",
    "knee replacement Atlanta",
    "hip replacement Georgia",
    "knee replacement Georgia",
    "anterior hip replacement Atlanta",
    "orthopedic surgeon Sandy Springs",
    "orthopedic surgeon Midtown Atlanta",
    "Sam Vojdani MD",
    "Total Joint Specialists",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Sam Vojdani, MD",
    title: "Sam Vojdani, MD | Hip & Knee Replacement Surgeon in Atlanta, GA",
    description:
      "Board-certified, fellowship-trained orthopedic surgeon specializing in hip and knee replacement in Atlanta, Georgia.",
    images: [{ url: doctor.headshot }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctor.name,
    image: `${siteUrl}${doctor.headshot}`,
    url: siteUrl,
    medicalSpecialty: "Orthopedic",
    availableService: [
      "Hip Replacement",
      "Knee Replacement",
      "Anterior Hip Replacement",
      "Robotic-Assisted Joint Replacement",
      "Revision Joint Replacement",
    ],
    memberOf: {
      "@type": "MedicalOrganization",
      name: doctor.practice,
    },
    worksFor: {
      "@type": "MedicalOrganization",
      name: doctor.practice,
    },
    telephone: doctor.phoneDisplay,
    location: locations.map((loc) => ({
      "@type": "MedicalClinic",
      name: loc.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: `${loc.addressLine1}${loc.addressLine2 ? ", " + loc.addressLine2 : ""}`,
        addressLocality: loc.city,
        addressRegion: loc.state,
        postalCode: loc.zip,
        addressCountry: "US",
      },
      telephone: loc.phoneDisplay,
    })),
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
