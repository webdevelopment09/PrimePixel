import { notFound } from "next/navigation";
import ContactCTA from "@/components/ContactCTA";
import { siteData } from "@/data/siteData";

export function generateStaticParams() {
  return siteData.services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = siteData.services.find((item) => item.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = siteData.services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <div className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
              PrimePixel Service
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              {service.title}
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {service.description}
            </p>
          </div>

          <div className="rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-700 p-8 text-white shadow-sm md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Included
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight">
              What this service covers
            </h2>

            <div className="mt-8 space-y-4">
              {service.includes.map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm font-medium text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}