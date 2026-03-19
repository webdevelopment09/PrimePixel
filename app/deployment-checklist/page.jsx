import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Deployment Checklist",
  description: "PrimePixel deployment and launch checklist.",
};

const items = [
  "Replace localhost URL in siteData.js with your real domain",
  "Set a real WhatsApp number",
  "Set real social media links",
  "Replace placeholder phone number and email if needed",
  "Upload real portfolio and service images",
  "Check all service and portfolio pages",
  "Test contact form with real Resend configuration",
  "Verify CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL in .env.local",
  "Deploy to Vercel",
  "Connect custom domain",
  "Change metadataBase to your live domain",
  "Add real favicon and app icons",
  "Test mobile layout on multiple screen sizes",
  "Open legal pages and check links",
  "Test sitemap and robots routes after deployment",
];

export default function DeploymentChecklistPage() {
  return (
    <>
      <PageHero
        eyebrow="Launch"
        title="Deployment Checklist"
        description="Use this checklist before taking PrimePixel live for clients."
      />

      <section className="mx-auto max-w-4xl px-6 pb-20">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-sm font-medium text-slate-700">✓ {item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}