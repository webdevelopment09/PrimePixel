"use client";

import { useEffect, useState } from "react";

export default function AnimatedStatCard({ value, suffix = "", label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const stepTime = Math.max(20, Math.floor(duration / value));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);

      if (start >= value) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm">
      <p className="text-4xl font-bold tracking-tight text-slate-900">
        {count}
        {suffix}
      </p>
      <p className="mt-3 text-sm leading-7 text-slate-600">{label}</p>
    </div>
  );
}