"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What happens to my money when I turn on Auto-Earn?",
    answer:
      "You choose how much USDC goes towards earning. The rest stays spendable, including your minimum balance.",
  },
  {
    question: "Can Kenfi move my money without my approval?",
    answer:
      "No. Auto-Earn is off by default, and every transfer needs your approval. You can pause it or withdraw funds anytime, subject to availability.",
  },
  {
    question: "Where does the yield come from?",
    answer:
      "Your funds go into a lending protocol. Kenfi shows the rate, its source and timestamp. Rates can change, and returns aren't guaranteed.",
  },
  {
    question: "What if I need money that's currently earning?",
    answer:
      "Request a withdrawal to move funds back to your spendable balance. Availability depends on the lending protocol.",
  },
  {
    question: "How do I know my balance is accurate?",
    answer:
      "Kenfi checks balances against the Solana blockchain. Transactions are marked complete only after on-chain confirmation.",
  },
  {
    question: "Can I use Kenfi to pay international contractors?",
    answer:
      "That's coming in a future version. Planned features include payment links, invoices, recurring transfers and team payouts.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<Record<number, boolean>>({});

  const toggle = (i: number) =>
    setOpen((prev) => ({ ...prev, [i]: !prev[i] }));

  return (
    <section id="faq" className="scroll-mt-16 py-14 sm:py-20 md:py-24 lg:pt-10 lg:pb-28">
      <div className="mx-auto max-w-6xl lg:max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20 xl:gap-24">
          <div className="lg:sticky lg:top-24 lg:self-start">
            {/* <p className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-widest text-accent">
              FAQ
            </p> */}
            <h2 className="mt-3 sm:mt-5 text-[2.5rem] sm:text-[3.35rem] md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-accent leading-[1.06] sm:leading-[1.04] md:leading-[1.03] lg:leading-[1.02]">
              FAQ
            </h2>
            <p className="mt-4 sm:mt-5 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg">
              Everything you need to know before you hold, send or allocate your
              USDC on Solana.
            </p>
          </div>

          <div className="divide-y divide-white/10 rounded-lg border border-white/10 bg-surface">
            {faqs.map((faq, i) => {
              const isOpen = !!open[i];
              return (
                <div key={faq.question} className="p-4 sm:p-5 md:p-5 lg:p-5">
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 sm:gap-6 text-left text-base sm:text-lg lg:text-lg font-semibold text-white"
                  >
                    <span>{faq.question}</span>
                    <span
                      className={`text-xl sm:text-2xl text-accent transition-transform duration-300 ${isOpen ? "rotate-45" : ""
                        }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                  >
                    <div className="overflow-hidden">
                      <p className="mt-2.5 sm:mt-3 text-sm sm:text-base leading-relaxed text-gray-300">
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
