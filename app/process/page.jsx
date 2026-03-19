import SectionHeading from "@/components/SectionHeading";
import ContactCTA from "@/components/ContactCTA";
import { siteData } from "@/data/siteData";

export const metadata = {
  title: "Process | PrimePixel",
  description: "How PrimePixel builds professional websites.",
};

export default function ProcessPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          eyebrow="Process"
          title="A clear and professional process"
          description="PrimePixel uses a structured workflow so every website project feels organized, transparent, and focused on results."
          center
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {siteData.process.map((item) => (
            <div
              key={item.step}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Step {item.step}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}