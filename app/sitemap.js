import { siteData } from "@/data/siteData";

export default function sitemap() {
  const baseUrl = siteData.siteUrl;

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/process`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services/business-websites`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services/landing-pages`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services/website-redesigns`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services/ongoing-support`,
      lastModified: new Date(),
    },
  ];
}