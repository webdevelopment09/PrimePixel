import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import { siteData } from "@/data/siteData";

export const metadata = {
  metadataBase: new URL(siteData.siteUrl),
  title: {
    default: `${siteData.companyName} | Professional Websites for Businesses`,
    template: `%s | ${siteData.companyName}`,
  },
  description: siteData.description,
  applicationName: siteData.companyName,
  keywords: [
    "web design",
    "website development",
    "business website",
    "primepixel",
    "next.js agency website",
    "professional websites",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteData.siteUrl,
    title: `${siteData.companyName} | Professional Websites for Businesses`,
    description: siteData.description,
    siteName: siteData.companyName,
    images: ["/primepixel-og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteData.companyName} | Professional Websites for Businesses`,
    description: siteData.description,
    images: ["/primepixel-og.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white pb-20 text-slate-900 antialiased md:pb-0">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <MobileStickyCTA />
      </body>
    </html>
  );
}