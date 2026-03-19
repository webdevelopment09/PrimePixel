export default function SectionHeading({ eyebrow, title, description, center = false }) {
  return (
    <div className={center ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-slate-600 leading-8">
          {description}
        </p>
      )}
    </div>
  );
}