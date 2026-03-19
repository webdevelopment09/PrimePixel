export default function TrustBar() {
  const items = [
    "Professional presentation",
    "Modern responsive design",
    "Trust-focused structure",
    "Clear call-to-actions",
  ];

  return (
    <section className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-5">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-slate-600">
          {items.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}