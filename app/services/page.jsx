import Link from "next/link";
import PageHero from "@/components/PageHero";
import ContactCTA from "@/components/ContactCTA";
import { siteData } from "@/data/siteData";

export const metadata = {
  title: "Services",
  description: "Professional website services by PrimePixel.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Professional website services designed for business growth"
        description="PrimePixel helps businesses build a stronger online image through premium websites, better presentation, and ongoing digital support."
      />

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          {siteData.services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="flex min-h-[260px] flex-col rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                PrimePixel Service
              </p>

              <h2 className="mt-4 text-2xl font-semibold text-slate-900">
                {service.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {service.shortDescription}
              </p>

              <div className="mt-6 space-y-3">
                {service.includes.slice(0, 3).map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <p className="mt-auto pt-6 text-sm font-semibold text-slate-900">
                Open service →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}