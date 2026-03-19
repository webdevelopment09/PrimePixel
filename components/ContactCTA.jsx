import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="overflow-hidden rounded-[2rem] bg-slate-900 px-8 py-14 text-white md:px-14">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Ready to elevate your business?
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
              Let’s build a website your clients will trust
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              PrimePixel creates modern, professional websites that help businesses
              stand out, look credible, and convert more visitors into real
              opportunities.
            </p>
          </div>

          <div className="flex lg:justify-end">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
            >
              Contact PrimePixel
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}