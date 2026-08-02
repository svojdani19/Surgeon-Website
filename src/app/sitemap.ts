import type { MetadataRoute } from "next";
import { siteUrl, siteLastReviewed, services, locations } from "@/lib/site";
import { articles } from "@/lib/articles";
import { serviceAreas } from "@/lib/areas";

export default function sitemap(): MetadataRoute.Sitemap {
  const reviewed = new Date(`${siteLastReviewed}T00:00:00Z`);
  const staticRoutes = ["", "/about", "/services", "/locations", "/education", "/service-areas", "/faq", "/contact"];

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: reviewed,
      changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : 0.8,
    })),
    ...services.map((service) => ({
      url: `${siteUrl}/services/${service.slug}`,
      lastModified: reviewed,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...locations.map((location) => ({
      url: `${siteUrl}/locations/${location.slug}`,
      lastModified: reviewed,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...articles.map((article) => ({
      url: `${siteUrl}/education/${article.slug}`,
      lastModified: new Date(`${article.lastReviewed}T00:00:00Z`),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...serviceAreas.map((area) => ({
      url: `${siteUrl}/service-areas/${area.slug}`,
      lastModified: reviewed,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
