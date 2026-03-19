"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { siteData } from "@/data/siteData";

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const testimonials = siteData.testimonials;

  function prevSlide() {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }

  function nextSlide() {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }

  const item = testimonials[index];

  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <SectionHeading
          eyebrow="Testimonials"
          title="The kind of impression PrimePixel aims to create"
          description="A premium website should make your business feel trustworthy, polished, and ready for serious clients."
          center
        />

        <div className="mt-12 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <div className="mb-6 flex gap-1">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-900" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-900" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-900" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-900" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-900" />
          </div>

          <p className="text-lg leading-9 text-slate-600 md:text-xl">
            “{item.quote}”
          </p>

          <div className="mt-8">
            <p className="font-semibold text-slate-900">{item.name}</p>
            <p className="text-sm text-slate-500">{item.company}</p>
          </div>

          <div className="mt-8 flex gap-3">
            <button
              type="button"
              onClick={prevSlide}
              className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold text-slate-900"
            >
              Prev
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}