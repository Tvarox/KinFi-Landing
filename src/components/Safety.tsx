const commitments = [
  "Show balances accurately, with clear source and last-refresh state.",
  "Explain every transaction the user makes or receives.",
  "Make risks visible and never imply that yield is guaranteed.",
  "Keep secrets server-side and enforce least privilege, rate limiting and dependency scanning.",
  "Never display success before chain confirmation; retry safely and reconcile pending transactions.",
];

export default function Safety() {
  return (
    <section id="safety" className="scroll-mt-16 py-14 sm:py-20 md:py-24 lg:pt-20 lg:pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl lg:max-w-3xl">
          <p className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-widest text-accent">
            Safety
          </p>
          <h2 className="mt-3 sm:mt-5 text-[2.5rem] sm:text-[3.35rem] md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.06] sm:leading-[1.04] md:leading-[1.03] lg:leading-[1.02]">
            Trust before features.
          </h2>
          <p className="mt-4 sm:mt-5 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg">
            Before adding capability, we hold ourselves to a floor of honesty:
            balances must be accurate, transactions explained, and risks made
            visible.
          </p>
        </div>

        <ul className="mt-8 sm:mt-10 md:mt-12 lg:mt-12 grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {commitments.map((item) => (
            <li
              key={item}
              className="flex gap-3 sm:gap-4 rounded-lg border border-white/10 bg-surface p-5 sm:p-6 lg:p-6 sm:last:col-span-2 lg:last:col-span-2 transition-colors hover:border-white/20"
            >
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
              <p className="text-sm sm:text-base leading-relaxed text-gray-300">{item}</p>
            </li>
          ))}
        </ul>

        <p className="mt-8 sm:mt-10 text-xs sm:text-sm text-gray-400">
          Kinfi V1 launches as a wallet. Auto-Earn is a separate gated release,
          not a requirement for the first public build.
        </p>
      </div>
    </section>
  );
}
