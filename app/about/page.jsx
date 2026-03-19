import SectionHeading from "@/components/SectionHeading";
import ContactCTA from "@/components/ContactCTA";

export const metadata = {
  title: "About | PrimePixel",
  description: "About PrimePixel.",
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-6 py-20">
        <SectionHeading
          eyebrow="About"
          title="PrimePixel exists to make businesses look more professional online"
          description="We help businesses strengthen their digital presence through websites that communicate quality, trust, and credibility."
          center
        />

        <div className="mt-12 rounded-[2rem] border border-slate-200 bg-white p-8 md:p-10 shadow-sm">
          <p className="text-base leading-8 text-slate-600">
            PrimePixel is focused on building websites that help businesses present
            themselves in a more serious, premium, and trustworthy way online.
          </p>

          <p className="mt-6 text-base leading-8 text-slate-600">
            A strong website is often the first major impression a client gets. That is
            why we care about clean design, clear messaging, responsive layouts, and a
            structure that supports business growth.
          </p>

          <p className="mt-6 text-base leading-8 text-slate-600">
            Whether the goal is to launch a new website, redesign an old one, or simply
            improve how a company appears online, PrimePixel aims to create digital
            experiences that feel polished and effective.
          </p>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}