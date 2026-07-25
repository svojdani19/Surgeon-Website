import type { MetadataRoute } from "next";
import { siteUrl, services, locations } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/services", "/locations", "/faq", "/contact"];

  const routes = [
    ...staticRoutes,
    ...services.map((s) => `/services/${s.slug}`),
    ...locations.map((l) => `/locations/${l.slug}`),
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
