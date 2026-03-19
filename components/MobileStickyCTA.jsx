import Link from "next/link";

export default function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white/95 p-3 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-7xl gap-3">
        <Link
          href="/contact"
          className="flex-1 rounded-full bg-slate-900 px-5 py-3 text-center text-sm font-semibold text-white"
        >
          Start a Project
        </Link>

        <a
          href="https://wa.me/995555225843"
          target="_blank"
          rel="noreferrer"
          className="flex-1 rounded-full border border-slate-300 px-5 py-3 text-center text-sm font-semibold text-slate-900"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}