import { siteData } from "@/data/siteData";

export default function sitemap() {
  const baseUrl = siteData.siteUrl;

  return [
    {
      url: `${baseUrl}/`,
      lastModified: "2026-03-20",
    },
    {
      url: `${baseUrl}/services`,
      lastModified: "2026-03-20",
    },
    {
      url: `${baseUrl}/process`,
      lastModified: "2026-03-20",
    },
    {
      url: `${baseUrl}/about`,
      lastModified: "2026-03-20",
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: "2026-03-20",
    },
    {
      url: `${baseUrl}/services/business-websites`,
      lastModified: "2026-03-20",
    },
    {
      url: `${baseUrl}/services/landing-pages`,
      lastModified: "2026-03-20",
    },
    {
      url: `${baseUrl}/services/website-redesigns`,
      lastModified: "2026-03-20",
    },
    {
      url: `${baseUrl}/services/ongoing-support`,
      lastModified: "2026-03-20",
    },
  ];
}