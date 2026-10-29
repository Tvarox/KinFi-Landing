import Image from "next/image";

const disclosures = [
  {
    title: "Not a bank deposit",
    body: "Earning strategies are not bank deposits and are not insured. They can lose value or become temporarily illiquid.",
  },
  {
    title: "Rate source and freshness",
    body: "The rate source, timestamp and protocol or market are displayed. The figure may be variable or estimated.",
  },
  {
    title: "Opt-in by default",
    body: "Allocation defaults to 0% until the user enables earning. No funds move based solely on a client-side slider.",
  },
  {
    title: "Safety rails",
    body: "Policy limits, server-side intent validation, transaction simulation, allowlists, idempotency, rate limits and audit logs.",
  },
  {
    title: "Exit options",
    body: "Pause controls and clear recovery paths are provided. No instant withdrawal is promised unless verified for the market.",
  },
];

export default function Earning() {
  return (
    <section id="earning" className="scroll-mt-16 pt-10 pb-14 sm:pt-14 sm:pb-20 md:pt-16 md:pb-24 lg:pt-20 lg:pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="grid items-center gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-1 lg:gap-0">
            <div>
              <p className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-widest text-accent">
                Auto-Earn
              </p>
              <h2 className="mt-3 sm:mt-5 text-[2.5rem] sm:text-[3.35rem] md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.06] sm:leading-[1.04] md:leading-[1.03] lg:leading-[1.02]">
                Earning is always your choice.
              </h2>
              <p className="mt-4 sm:mt-5 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg">
                Kinfi helps you keep funds spendable and decide whether to put
                eligible balance into an earning strategy. Every strategy is
                clearly disclosed before any allocation, and you stay in control of
                what moves and when.
              </p>
            </div>

            <div className="mt-2 sm:mt-3 md:mt-0 lg:mt-6 flex justify-center md:justify-end lg:justify-start">
              <Image
                src="/assets/bank.png"
                alt="Bank"
                width={600}
                height={400}
                className="w-full max-w-sm rounded-lg sm:max-w-md md:max-w-sm lg:max-w-md"
              />
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-surface p-5 sm:p-8 lg:p-8">
            <h3 className="text-base sm:text-lg lg:text-lg font-semibold text-white">
              What earning means, disclosed
            </h3>
            <ul className="mt-5 sm:mt-6 space-y-4 sm:space-y-5">
              {disclosures.map((item) => (
                <li key={item.title} className="flex gap-3 sm:gap-4">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <div>
                    <p className="text-sm sm:text-base font-medium text-white">{item.title}</p>
                    <p className="mt-1 text-xs sm:text-sm leading-relaxed text-gray-300">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
