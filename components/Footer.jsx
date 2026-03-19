import Link from "next/link";
import { siteData } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold text-slate-900">{siteData.companyName}</h3>
            <p className="mt-3 max-w-md text-sm leading-7 text-slate-600">
              {siteData.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {siteData.socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">
              Navigation
            </h4>
            <div className="mt-4 flex flex-col gap-3">
              {siteData.navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-600 hover:text-slate-900"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900">
              Resources
            </h4>
            <div className="mt-4 flex flex-col gap-3">
              {siteData.footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-600 hover:text-slate-900"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-6 space-y-2 text-sm text-slate-600">
              <p>{siteData.email}</p>
              <p>{siteData.phone}</p>
              <p>{siteData.location}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {siteData.companyName}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/legal/privacy-policy" className="hover:text-slate-900">
              Privacy
            </Link>
            <Link href="/legal/terms-of-service" className="hover:text-slate-900">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}