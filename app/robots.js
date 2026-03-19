import { siteData } from "@/data/siteData";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteData.siteUrl}/sitemap.xml`,
  };
}