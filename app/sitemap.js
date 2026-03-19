import { siteData } from "@/data/siteData";

export default function sitemap() {
  const staticPages = [
    "",
    "/about",
    "/contact",
    "/services",
    "/process",
    "/legal/privacy-policy",
    "/legal/terms-of-service",
    "/deployment-checklist",
  ];

  const staticEntries = staticPages.map((path) => ({
    url: `${siteData.siteUrl}${path}`,
    lastModified: new Date(),
  }));

  const serviceEntries = siteData.services.map((service) => ({
    url: `${siteData.siteUrl}/services/${service.slug}`,
    lastModified: new Date(),
  }));

  return [...staticEntries, ...serviceEntries];
}