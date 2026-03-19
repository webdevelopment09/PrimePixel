export default function LoadingCard() {
  return (
    <div className="animate-pulse rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
      <div className="h-4 w-24 rounded-full bg-slate-200" />
      <div className="mt-5 h-8 w-2/3 rounded-2xl bg-slate-200" />
      <div className="mt-4 h-4 w-full rounded-full bg-slate-200" />
      <div className="mt-3 h-4 w-5/6 rounded-full bg-slate-200" />
      <div className="mt-8 h-12 w-32 rounded-full bg-slate-200" />
    </div>
  );
}