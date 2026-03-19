import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for PrimePixel.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="This page explains how PrimePixel handles contact information submitted through the website."
      />

      <section className="mx-auto max-w-4xl px-6 pb-20">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <div className="space-y-8 text-sm leading-8 text-slate-600">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">Information We Collect</h2>
              <p className="mt-3">
                PrimePixel may collect information you submit through the contact form,
                such as your name, business name, email address, and project details.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-slate-900">How We Use It</h2>
              <p className="mt-3">
                This information is used only to review inquiries, reply to potential
                clients, and discuss website projects or related services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-slate-900">Sharing of Information</h2>
              <p className="mt-3">
                PrimePixel does not sell submitted personal information. Information is
                only used for business communication and service-related purposes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-slate-900">Contact</h2>
              <p className="mt-3">
                If you have questions about this policy, contact PrimePixel through the
                website contact page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}