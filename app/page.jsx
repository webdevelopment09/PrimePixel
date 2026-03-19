import Link from "next/link";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import SectionHeading from "@/components/SectionHeading";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactCTA from "@/components/ContactCTA";
import StatsSection from "@/components/StatsSection";
import Reveal from "@/components/Reveal";
import { siteData } from "@/data/siteData";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <StatsSection />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          eyebrow="What we do"
          title="Websites that help businesses look stronger online"
          description="PrimePixel builds websites designed to improve how businesses are perceived online through cleaner presentation, stronger trust, and better positioning."
          center
        />

        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-4">
          {siteData.services.map((service) => (
            <Reveal key={service.slug} className="h-full">
              <Link
                href={`/services/${service.slug}`}
                className="flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-2xl font-semibold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {service.shortDescription}
                </p>

                <p className="mt-auto pt-5 text-sm font-semibold text-slate-900">
                  View service →
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionHeading
            eyebrow="Why PrimePixel"
            title="A website is one of the strongest trust signals a business can have"
            description="Many businesses rely only on social media, but a proper website gives them a stronger identity, better structure, and a more credible presence."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Reveal>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Better Visibility
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-slate-900">
                  Be easier to take seriously
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Give your business a proper online presence where clients can
                  understand your value clearly and professionally.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-[2rem] border border-slate-200 bg-slate-900 p-8 text-white shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                  More Trust
                </p>
                <h3 className="mt-4 text-2xl font-semibold">
                  Look premium from the first click
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  A polished website helps your company look more serious, more
                  credible, and more established in your market.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Stronger Sales Support
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-slate-900">
                  Turn attention into inquiries
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Good design and clear messaging help move people from interest to
                  contact much more smoothly.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <FAQSection />
      <ContactCTA />
    </>
  );
}