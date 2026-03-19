import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Terms of Service",
  description: "Terms of Service for PrimePixel.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="These terms describe the general use of the PrimePixel website."
      />

      <section className="mx-auto max-w-4xl px-6 pb-20">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <div className="space-y-8 text-sm leading-8 text-slate-600">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">Website Use</h2>
              <p className="mt-3">
                This website is provided for informational and business inquiry purposes.
                Visitors may browse the site and contact PrimePixel regarding services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-slate-900">No Guarantee</h2>
              <p className="mt-3">
                Information on this website is presented in good faith, but project
                scope, pricing, timelines, and deliverables should be confirmed directly
                with PrimePixel before any agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-slate-900">Intellectual Property</h2>
              <p className="mt-3">
                Website text, branding, layouts, and presentation elements created for
                PrimePixel may not be copied or reused without permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-slate-900">Contact</h2>
              <p className="mt-3">
                For any questions regarding these terms, please use the contact page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}