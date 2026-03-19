import { siteData } from "@/data/siteData";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hello PrimePixel, I am interested in a website for my business."
  );

  return (
    <a
      href={`https://wa.me/${siteData.whatsapp}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white shadow-xl transition hover:scale-[1.02] hover:bg-green-600"
    >
      <span className="inline-block h-2.5 w-2.5 rounded-full bg-white" />
      WhatsApp
    </a>
  );
}