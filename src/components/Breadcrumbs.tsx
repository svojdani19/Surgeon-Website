import Link from "next/link";
import { siteUrl } from "@/lib/site";

export type Crumb = { name: string; href: string };

/**
 * Visible breadcrumb trail + BreadcrumbList JSON-LD.
 * Pass crumbs including the current page as the last item (no link rendered for it).
 */
export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${siteUrl}${c.href}`,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="text-sm text-brand-600">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ol className="flex flex-wrap items-center gap-1">
        {crumbs.map((c, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <li key={c.href} className="flex items-center gap-1">
              {i > 0 && <span aria-hidden="true">›</span>}
              {isLast ? (
                <span aria-current="page" className="text-brand-800">
                  {c.name}
                </span>
              ) : (
                <Link href={c.href} className="hover:underline">
                  {c.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
