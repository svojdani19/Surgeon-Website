import type { Metadata, Viewport } from "next";
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
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": "/feed.xml" },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Sam Vojdani, MD",
    title: "Sam Vojdani, MD | Hip & Knee Replacement Surgeon in Atlanta, GA",
    description:
      "Board-certified, fellowship-trained orthopedic surgeon specializing in hip and knee replacement in Atlanta, Georgia.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#1c3a5c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${siteUrl}/#physician`,
    name: doctor.name,
    honorificSuffix: "MD",
    image: `${siteUrl}${doctor.headshot}`,
    url: siteUrl,
    // Entity links to authoritative third-party profiles (E-E-A-T)
    sameAs: [
      "https://www.healthgrades.com/physician/dr-sam-vojdani-xylp2pt",
      "https://doctor.webmd.com/doctor/saman-vojdani-6b7b261b-b965-4031-8ff4-384f4fd2a611-overview",
      "https://providers.sharecare.com/doctor/dr-sam-vojdani-xylp2pt",
      "https://health.usnews.com/doctors/sam-vojdani-2630262",
      "https://www.vitals.com/doctors/1zjc70/saman-vojdani",
      "https://providers.northside.com/provider/sam-vojdani/2605298",
      "https://www.totaljointspecialists.com/provider/sam-vojdani-md",
      "https://www.totaljointspecialist.com/surgeons/sam-vojdani",
    ],
    medicalSpecialty: "Orthopedic",
    description:
      "Board-certified, fellowship-trained orthopedic surgeon specializing in hip and knee joint replacement in Atlanta, Georgia.",
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Columbia University (Frank E. Stinchfield Adult Reconstruction Fellowship)",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Stony Brook University Hospital (Orthopedic Surgery Residency)",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Medical College of Georgia (Doctor of Medicine)",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Georgia Institute of Technology (Biology & Biomedical Engineering)",
      },
    ],
    award: [
      "Castle Connolly Top Doctor",
      "Alpha Omega Alpha Honor Society",
      "Gold Humanism Honor Society",
    ],
    memberOf: [
      { "@type": "MedicalOrganization", name: doctor.practice },
      {
        "@type": "Organization",
        name: "American Academy of Orthopaedic Surgeons",
      },
      {
        "@type": "Organization",
        name: "American Association of Hip & Knee Surgeons",
      },
      { "@type": "Organization", name: "Georgia Orthopedic Society" },
    ],
    worksFor: {
      "@type": "MedicalOrganization",
      name: doctor.practice,
    },
    telephone: doctor.phoneDisplay,
    areaServed: {
      "@type": "State",
      name: "Georgia",
    },
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

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: "Sam Vojdani, MD — Hip & Knee Replacement",
    url: siteUrl,
    publisher: { "@id": `${siteUrl}/#physician` },
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-brand-700 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
