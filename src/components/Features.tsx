import Image from "next/image";
import { Send, Download, Wallet as WalletIcon, Activity as ActivityIcon } from "lucide-react";

const features = [
  {
    icon: Send,
    title: "Send USDC with confidence",
    body: "Validate destination, amount and balance; preview the transaction before signing; require explicit confirmation; and show clear pending, success or failed states — never a false success.",
  },
  {
    icon: Download,
    title: "Receive with clarity",
    body: "Show your Solana address and QR code with copy and share actions, plus USDC and network instructions. Surface a clear network warning and verify the correct USDC mint.",
  },
  {
    icon: WalletIcon,
    title: "See your balance clearly",
    body: "Show your USDC balance and SOL fee balance, with balance source and last-refresh state clearly presented. Handle loading and error states gracefully.",
  },
  {
    icon: ActivityIcon,
    title: "Know your history",
    body: "List supported wallet transactions with amount, status, time and block-explorer link. No duplicates; pending or failed transactions are never shown as completed.",
  },
];

export default function Features() {
  return (
    <section id="product" className="scroll-mt-16 pt-6 pb-14 sm:pt-8 sm:pb-20 md:pt-10 md:pb-24 lg:pt-12 lg:pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-8 lg:grid-cols-[1.3fr_0.9fr] lg:gap-12">
          <div>
            <p className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-widest text-accent">
              The product
            </p>
            <h2 className="mt-3 sm:mt-5 text-[2.5rem] sm:text-[3.35rem] md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.06] sm:leading-[1.04] md:leading-[1.03] lg:leading-[1.02]">
              Everything you need to hold, send and receive USDC.
            </h2>
            <p className="mt-4 sm:mt-5 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg">
              Calm infrastructure around the money people already hold — with
              transaction states that tell the truth.
            </p>
          </div>

          <div className="flex justify-center p-2 sm:p-4 lg:justify-end lg:p-6">
            <Image
              src="/assets/Falling.png"
              alt="The product artwork"
              width={600}
              height={317}
              className="w-full max-w-sm rounded-lg object-contain opacity-75 transition-opacity hover:opacity-90 sm:max-w-md sm:opacity-80 lg:max-w-lg"
            />
          </div>
        </div>

        <div className="mt-10 sm:mt-12 md:mt-14 lg:mt-16 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="rounded-lg border border-white/10 bg-surface p-5 sm:p-6 lg:p-6 transition-all duration-300 hover:border-accent/60 hover:shadow-[0_0_12px_rgba(255,161,90,0.15)]"
              >
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 sm:mt-5 text-lg sm:text-xl lg:text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2.5 sm:mt-3 text-sm sm:text-base leading-relaxed text-gray-300">
                  {feature.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
