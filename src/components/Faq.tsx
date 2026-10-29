"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is the yield guaranteed?",
    answer:
      "No. Kinfi never implies that yield is guaranteed. Earning strategies are not bank deposits and are not insured; they can lose value or become temporarily illiquid. Any displayed figure is sourced, timestamped and may be variable or estimated.",
  },
  {
    question: "What happens if a transaction fails?",
    answer:
      "The app shows clear pending, success or failed states and never displays success before chain confirmation. Failed transactions are not listed in activity as completed, and retries are handled safely.",
  },
  {
    question: "Which network and USDC does Kinfi use?",
    answer:
      "Kinfi operates on Solana, and the official USDC mint address, token decimals and network are verified on every environment. The token symbol alone is never trusted.",
  },
  {
    question: "Who controls the funds?",
    answer:
      "Users control their Solana wallet keys through the embedded wallet. Transaction signing authority is separated from backend orchestration and constrained per action.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<Record<number, boolean>>({});

  const toggle = (i: number) =>
    setOpen((prev) => ({ ...prev, [i]: !prev[i] }));

  return (
    <section id="faq" className="scroll-mt-16 py-14 sm:py-20 md:py-24 lg:pt-20 lg:pb-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-accent">
              FAQ
            </p>
            <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold tracking-tight text-white">
              Questions, answered plainly.
            </h2>
            <p className="mt-3 sm:mt-6 text-base sm:text-lg leading-relaxed text-gray-300">
              Everything you need to know before you hold, send or allocate your
              USDC on Solana.
            </p>
          </div>

          <div className="divide-y divide-white/10 rounded-lg border border-white/10 bg-surface">
            {faqs.map((faq, i) => {
              const isOpen = !!open[i];
              return (
                <div key={faq.question} className="p-5 sm:p-6 md:p-8 lg:p-8">
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 sm:gap-6 text-left text-base sm:text-lg lg:text-lg font-semibold text-white"
                  >
                    <span>{faq.question}</span>
                    <span
                      className={`text-xl sm:text-2xl text-accent transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-gray-300">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
