import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(15,23,42,0.08),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.12),_transparent_30%),linear-gradient(to_bottom,_rgba(248,250,252,0.8),_rgba(255,255,255,1))]" />
      <div className="absolute -left-20 top-24 h-72 w-72 rounded-full bg-slate-200/70 blur-3xl" />
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-100 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
              PrimePixel
            </p>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl leading-tight">
              Professional websites that help businesses look more trustworthy and win more clients
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              We build modern websites for businesses that want stronger visibility,
              better presentation, and a more credible online presence.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Book a Free Consultation
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-900"
              >
                Explore Services
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
                Premium design
              </div>
              <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
                Built for trust
              </div>
              <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
                Mobile responsive
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-200/60">
              <div className="rounded-[1.75rem] bg-slate-950 p-6 text-white">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-white/90" />
                  <span className="h-3 w-3 rounded-full bg-white/50" />
                  <span className="h-3 w-3 rounded-full bg-white/25" />
                </div>

                <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                        PrimePixel Standard
                      </p>
                      <h3 className="mt-2 text-2xl font-bold">
                        Modern, premium, trustworthy
                      </h3>
                    </div>
                    <div className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/80">
                      Agency quality
                    </div>
                  </div>

                  <div className="mt-8 grid gap-4">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                      <p className="font-semibold">Stronger first impression</p>
                      <p className="mt-2 text-sm leading-7 text-slate-300">
                        Make your business look more serious from the first click.
                      </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                        <p className="font-semibold">Trust</p>
                        <p className="mt-2 text-sm text-slate-300">
                          Help clients feel confident choosing you.
                        </p>
                      </div>

                      <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                        <p className="font-semibold">Clarity</p>
                        <p className="mt-2 text-sm text-slate-300">
                          Present services clearly and professionally.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-3xl bg-gradient-to-r from-blue-500/20 to-white/10 p-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                        Goal
                      </p>
                      <p className="mt-2 text-sm leading-7 text-slate-300">
                        Turn online visitors into real business inquiries.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -right-6 top-10 rounded-3xl border border-slate-200 bg-white px-4 py-3 shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                Premium
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-900">Business image</p>
            </div>

            <div className="absolute -left-6 bottom-10 rounded-3xl border border-slate-200 bg-white px-4 py-3 shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                Results
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-900">More inquiries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}