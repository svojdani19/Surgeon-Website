import type { MetadataRoute } from "next";
import { siteUrl, services, locations } from "@/lib/site";
import { articles } from "@/lib/articles";
import { serviceAreas } from "@/lib/areas";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/locations",
    "/education",
    "/service-areas",
    "/faq",
    "/contact",
  ];

  const routes = [
    ...staticRoutes,
    ...services.map((s) => `/services/${s.slug}`),
    ...locations.map((l) => `/locations/${l.slug}`),
    ...articles.map((a) => `/education/${a.slug}`),
    ...serviceAreas.map((a) => `/service-areas/${a.slug}`),
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : route.startsWith("/education") ? 0.8 : 0.7,
  }));
}
