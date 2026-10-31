import { ShimmerButton } from "@/components/ui/shimmer-button";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden pt-20 pb-16 sm:pt-28 sm:pb-24 lg:pt-28 lg:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-14 sm:-right-6 md:right-0 top-0 h-full min-h-[100dvh] md:min-h-0">
          <img
            src="/assets/Angel.png"
            alt=""
            className="h-full min-h-[100dvh] w-auto max-w-none object-cover sm:min-h-full sm:max-w-none md:min-h-0 md:max-w-[55vw] md:object-contain lg:max-w-[55vw] opacity-35 sm:opacity-40 md:opacity-50 lg:opacity-100 transition-opacity"
          />
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-6">
        <div className="max-w-2xl md:max-w-2xl lg:max-w-3xl md:translate-x-0 lg:-translate-x-12">
          {/* <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-gray-300">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            USDC on Solana
          </span> */}

          <h1 className="mt-6 text-[3.35rem] sm:text-[4.5rem] md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight text-white leading-[1.02] sm:leading-[1.01] md:leading-[0.98] lg:leading-[0.96]">
            Calm money for <span className="text-accent">stablecoins</span>
          </h1>

          <p className="mt-5 sm:mt-6 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg md:text-xl lg:text-xl">
            Kinfi helps you hold, send and receive USDC on Solana, then choose
            how much eligible balance to allocate to a clearly disclosed
            earning strategy.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col gap-3.5 sm:flex-row sm:gap-4">
            {/* <a
              href="#top"
              className="inline-flex w-[50vw] sm:w-[50vw] md:w-auto lg:w-auto items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-primary transition-opacity hover:opacity-90 sm:px-8 sm:py-3.5 sm:text-base lg:px-8 lg:py-3.5 lg:text-base whitespace-nowrap"
            >
              Open your wallet
            </a> */}
            <ShimmerButton
              href="#how-it-works"
              shimmerColor="rgba(255, 161, 90, 0.35)"
              duration={1.5}
              className="w-[50vw] sm:w-[50vw] md:w-auto lg:w-auto min-w-fit rounded-full border border-white/15 px-5 py-3.5 sm:px-7 sm:py-4 md:px-8 md:py-4 lg:px-6 lg:py-3 text-sm sm:text-base md:text-lg lg:text-base font-bold tracking-wide text-white whitespace-nowrap transition-colors duration-300 hover:border-accent/40"
            >
              See how it works
            </ShimmerButton>
          </div>

          <p className="mt-6 text-xs sm:text-sm text-gray-400">
            Not a bank. Not a trading terminal. A calm place for your USDC.
          </p>
        </div>
      </div>
    </section>
  );
}
