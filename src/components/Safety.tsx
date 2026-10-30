import Image from "next/image";
import { MorphingText } from "@/components/ui/morphing-text";

const commitments = [
  "Show accurate balances, with clear sources and last-refresh information.",
  "Explain every transaction, so users always know what they're sending or receiving.",
  "Make risks visible, and never present variable returns as guaranteed.",
  "Protect what matters, with secure access, strict permissions and server-side safeguards.",
  "Verify before confirming, so no transaction is marked successful before on-chain confirmation.",
];

export default function Safety() {
  return (
    <section id="safety" className="scroll-mt-16 py-14 sm:py-20 md:py-24 lg:pt-10 lg:pb-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-8 md:grid-cols-[1.3fr_0.9fr] lg:grid-cols-[1.3fr_0.9fr] md:gap-10 lg:gap-12">
          <div className="max-w-2xl">
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

            {/* Reusable MorphingText component */}
            <div className="mt-6 sm:mt-7 max-w-xl min-h-[5.5rem] sm:min-h-[4rem] md:min-h-[3.5rem] w-full">
              <MorphingText
                texts={commitments}
                className="h-20 sm:h-16 text-left text-base sm:text-lg font-medium leading-relaxed text-white"
                morphTime={2.0}
                cooldownTime={4.0}
              />
            </div>
          </div>

          <div className="flex justify-center p-2 sm:p-4 md:justify-end lg:p-6">
            <div className="relative inline-block overflow-hidden rounded-lg">
              <Image
                src="/assets/fallingAngel.png"
                alt="Safety artwork"
                width={600}
                height={653}
                className="h-auto w-auto max-h-64 sm:max-h-72 md:max-h-80 lg:max-h-96 max-w-[260px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-[360px] object-contain"
              />
              {/* Background color opacity overlay */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-primary/35"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
