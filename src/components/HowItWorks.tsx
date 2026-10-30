const steps = [
  {
    title: "Get your wallet",
  },
  {
    title: "Hold, send and receive USDC",
  },
  {
    title: "Choose to allocate",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-16 pt-14 pb-6 sm:pt-20 sm:pb-8 md:pt-24 md:pb-10 lg:pt-28 lg:pb-12">
      <div className="mx-auto max-w-6xl xl:max-w-7xl px-4 sm:px-6">
        <div className="grid items-start gap-12 sm:gap-14 md:grid-cols-[1.35fr_1fr] lg:grid-cols-[1.55fr_1fr] md:gap-20 lg:gap-28 xl:gap-36">
          <div className="w-full max-w-2xl lg:max-w-3xl">
            <p className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-widest text-accent">
              How it works
            </p>
            <h2 className="mt-3 sm:mt-5 text-[2.5rem] sm:text-[3.35rem] md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.06] sm:leading-[1.04] md:leading-[1.03] lg:leading-[1.02]">
              Simple on the surface, careful underneath.
            </h2>
            <p className="mt-4 sm:mt-5 text-base leading-relaxed text-gray-300 sm:text-lg">
              From sign-in to a funded balance takes one flow —<br className="hidden lg:inline" /> no jargon, no assumptions.
            </p>
          </div>

          <ol className="flex flex-col space-y-7 sm:space-y-9 lg:space-y-11 md:pt-4 lg:pt-6">
            {steps.map((step, index) => (
              <li key={step.title} className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold font-mono tracking-widest text-accent">
                  0{index + 1}
                </span>
                <h3 className="mt-1 sm:mt-1.5 text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold text-white tracking-tight">
                  {step.title}
                </h3>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
