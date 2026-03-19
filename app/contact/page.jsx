import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import ContactShowcase from "@/components/ContactShowcase";
import { siteData } from "@/data/siteData";

export const metadata = {
  title: "Contact",
  description: "Contact PrimePixel.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s talk about your website"
        description="If you want your business to look more professional and trustworthy online, PrimePixel is ready to help."
      />

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-slate-900">Get in touch</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Reach out to discuss a new website, a redesign, or a more professional
                online presentation for your business.
              </p>

              <div className="mt-8 space-y-5">
                <div>
                  <p className="text-sm font-semibold text-slate-900">Email</p>
                  <p className="mt-1 text-slate-600">{siteData.email}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">Phone</p>
                  <p className="mt-1 text-slate-600">{siteData.phone}</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-900">Location</p>
                  <p className="mt-1 text-slate-600">{siteData.location}</p>
                </div>
              </div>
            </div>

            <ContactShowcase />
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-900">Project inquiry</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Fill out the form and PrimePixel will receive your inquiry through the
              website flow.
            </p>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}