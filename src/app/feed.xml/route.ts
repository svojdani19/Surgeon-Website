import { siteUrl, doctor } from "@/lib/site";
import { articles } from "@/lib/articles";

export const dynamic = "force-static";

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function GET() {
  const items = articles
    .map(
      (a) => `    <item>
      <title>${esc(a.title)}</title>
      <link>${siteUrl}/education/${a.slug}</link>
      <guid isPermaLink="true">${siteUrl}/education/${a.slug}</guid>
      <description>${esc(a.summary)}</description>
      <category>${esc(a.category)}</category>
    </item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${esc(`${doctor.name} — Hip & Knee Replacement Patient Education`)}</title>
    <link>${siteUrl}/education</link>
    <description>Surgeon-written guides on hip and knee replacement from ${esc(doctor.name)}, Atlanta, Georgia.</description>
    <language>en-us</language>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
