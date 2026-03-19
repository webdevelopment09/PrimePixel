"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { siteData } from "@/data/siteData";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading
        eyebrow="FAQ"
        title="Common questions"
        description="A few important things businesses often want to know before starting a website project."
        center
      />

      <div className="mt-12 space-y-4">
        {siteData.faqs.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={item.question}
              className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-lg font-semibold text-slate-900">
                  {item.question}
                </span>
                <span className="text-2xl font-light text-slate-500">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen && (
                <div className="border-t border-slate-200 px-6 py-5">
                  <p className="text-sm leading-7 text-slate-600">{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}