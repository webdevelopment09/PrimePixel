export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.10),_transparent_28%),radial-gradient(circle_at_top_left,_rgba(15,23,42,0.07),_transparent_30%)]" />
      <div className="relative mx-auto max-w-5xl px-6 py-20 text-center">
        <p className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
          {eyebrow}
        </p>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          {description}
        </p>
      </div>
    </section>
  );
}