export default function ContactShowcase() {
  return (
    <div className="rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-700 p-8 text-white shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
        PrimePixel Standard
      </p>

      <h3 className="mt-4 text-3xl font-bold tracking-tight">
        Clean, modern, trustworthy
      </h3>

      <p className="mt-5 text-base leading-8 text-slate-300">
        A strong contact page should not feel empty. It should reinforce the quality of
        your brand while making it easy for people to reach out.
      </p>

      <div className="mt-8 space-y-4">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
          Fast inquiry flow
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
          Professional presentation
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
          Clear next step for clients
        </div>
      </div>
    </div>
  );
}