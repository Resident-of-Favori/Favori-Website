"use client";

import { useState } from "react";

interface FAQ {
  q: string;
  a: string;
}

export function FAQContent({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="rounded-2xl border border-charcoal/10 bg-white overflow-hidden transition-shadow duration-300 hover:shadow-md"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full items-center justify-between px-6 py-5 text-left"
            aria-expanded={openIndex === i}
          >
            <h2 className="text-base font-semibold text-charcoal pr-4">
              {faq.q}
            </h2>
            <span
              className={`flex-shrink-0 text-xl text-coral transition-transform duration-300 ${
                openIndex === i ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>
          <div
            className={`grid transition-all duration-300 ${
              openIndex === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <p className="px-6 pb-5 text-charcoal-light leading-relaxed">
                {faq.a}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
