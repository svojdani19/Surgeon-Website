import { siteUrl, doctor, services, locations } from "@/lib/site";
import { articles } from "@/lib/articles";
import { serviceAreas } from "@/lib/areas";

export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# ${doctor.name} — Hip & Knee Replacement in Georgia`,
    "",
    `> ${doctor.name} is a board-certified, Columbia-fellowship-trained orthopedic surgeon practicing at Total Joint Specialists in Midtown Atlanta and Sandy Springs, Georgia. He specializes exclusively in hip and knee replacement: minimally invasive anterior hip replacement, quadriceps-sparing and robotic-assisted knee replacement, partial knee replacement, same-day outpatient joint replacement, and complex revision reconstruction. Rated 5.0 stars across both Google listings. Appointments: ${doctor.schedulingPhoneDisplay}.`,
    "",
    "## Core Pages",
    `- [Home](${siteUrl}/): Overview, credentials, and patient reviews`,
    `- [About Dr. Vojdani](${siteUrl}/about): Full biography, education, training, and distinctions`,
    `- [Contact & Scheduling](${siteUrl}/contact): Phone, addresses, and office hours`,
    "",
    "## Procedures",
    ...services.map(
      (s) => `- [${s.name}](${siteUrl}/services/${s.slug}): ${s.summary}`
    ),
    "",
    "## Patient Education Guides",
    ...articles.map(
      (a) => `- [${a.title}](${siteUrl}/education/${a.slug}): ${a.summary}`
    ),
    "",
    "## Office Locations",
    ...locations.map(
      (l) =>
        `- [${l.shortName}](${siteUrl}/locations/${l.slug}): ${l.addressLine1}${l.addressLine2 ? ", " + l.addressLine2 : ""}, ${l.city}, ${l.state} ${l.zip} — ${l.phoneDisplay}`
    ),
    "",
    "## Areas Served",
    ...serviceAreas.map(
      (a) => `- [${a.city}](${siteUrl}/service-areas/${a.slug})`
    ),
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
