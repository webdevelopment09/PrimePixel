import { siteData } from "@/data/siteData";

export default function manifest() {
  return {
    name: siteData.companyName,
    short_name: siteData.companyName,
    description: siteData.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0f172a",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}