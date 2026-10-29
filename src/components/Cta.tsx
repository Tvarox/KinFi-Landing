export default function Cta() {
  return (
    <section id="cta" className="scroll-mt-16 py-14 sm:py-20 md:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          Take control of your <span className="text-accent">USDC</span>.
        </h2>
        <a
          href="#top"
          className="mt-8 sm:mt-10 inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-accent px-6 py-3 sm:px-8 sm:py-3.5 text-sm sm:text-base font-semibold text-primary transition-opacity hover:opacity-90"
        >
          Open your wallet
        </a>
      </div>
    </section>
  );
}
