import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-4xl items-center px-6 py-20">
      <div className="w-full rounded-[2rem] border border-slate-200 bg-white p-10 text-center shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
          404
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
          Page not found
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
          The page you are trying to open does not exist or may have been moved.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
          >
            Back to Home
          </Link>

          <Link
            href="/contact"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900"
          >
            Contact PrimePixel
          </Link>
        </div>
      </div>
    </section>
  );
}