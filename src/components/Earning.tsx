import Image from "next/image";

const disclosures = [
  {
    title: "Your money stays yours",
    body: "Auto-Earn starts at 0%. Nothing moves until you enable it.",
  },
  {
    title: "Know where returns come from",
    body: "See the lending market, current rate and last update. Rates can change.",
  },
  {
    title: "Keep money ready to spend",
    body: "Set a minimum balance that Kenfi won't move into earning.",
  },
  {
    title: "Stay in control",
    body: "Approve every transfer and pause Auto-Earn whenever you want.",
  },
  {
    title: "Transparency at every step",
    body: "See the risks, earning conditions and withdrawal details before putting your money to work.",
  },
  {
    title: "Withdraw when you need to",
    body: "Request a withdrawal to move funds back to your spendable balance. Timing depends on the lending market.",
  },
];

export default function Earning() {
  return (
    <section id="earning" className="scroll-mt-16 pt-10 pb-14 sm:pt-14 sm:pb-20 md:pt-16 md:pb-24 lg:pt-12 lg:pb-6">
      <div className="mx-auto max-w-6xl lg:max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 lg:gap-20 xl:gap-24">
          <div className="grid items-center gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-1 lg:gap-0">
            <div>
              <p className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-widest text-accent">
                Auto-Earn
              </p>
              <h2 className="mt-3 sm:mt-5 text-[2.5rem] sm:text-[3.35rem] md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.06] sm:leading-[1.04] md:leading-[1.03] lg:leading-[1.02]">
                Your money. <br className="hidden md:inline" />Your call.
              </h2>
              <div className="mt-4 sm:mt-5 max-w-xl lg:max-w-2xl space-y-4 text-base leading-relaxed text-gray-300 sm:text-lg">
                <p>
                  Not every dollar needs to sit idle. Choose how much USDC you want to put to work and how much to keep ready to spend.
                </p>
                {/* <p>
                  You decide when earning starts and how much moves.
                </p> */}
              </div>
            </div>

            <div className="mt-2 sm:mt-3 md:mt-0 lg:mt-6 flex justify-center md:justify-end lg:justify-start lg:translate-x-16">
              <div className="relative inline-block overflow-hidden rounded-lg">
                <Image
                  src="/assets/face.png"
                  alt="Face artwork"
                  width={600}
                  height={900}
                  className="h-auto w-auto max-h-80 sm:max-h-96 md:max-h-80 lg:max-h-[430px] max-w-[240px] sm:max-w-[280px] md:max-w-[240px] lg:max-w-[310px] object-contain"
                />
                {/* Background color opacity overlay */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-primary/35"
                />
              </div>
            </div>
          </div>

          <div className="p-0 pt-3 sm:pt-4 md:pt-8 lg:pt-12 xl:pt-14">
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white">
              A little more clarity. A lot more control.
            </h3>
            <ul className="mt-5 sm:mt-6 list-disc space-y-4 pl-5 marker:text-accent sm:space-y-5 lg:space-y-6">
              {disclosures.map((item) => (
                <li key={item.title} className="pl-1">
                  <p className="text-sm sm:text-base lg:text-lg font-medium text-white">{item.title}</p>
                  <p className="mt-1 text-xs sm:text-sm lg:text-base leading-relaxed text-gray-300">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
