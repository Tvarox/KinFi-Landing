"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { TextReveal } from "@/components/ui/text-reveal";

const features = [
  {
    title: "Send",
    body: "Preview every transfer, verify the details and sign only when you're ready. Follow its progress until the transaction is confirmed.",
  },
  {
    title: "Receive",
    body: "Share your Solana address or QR code to receive USDC. Clear network instructions help ensure your funds reach the right wallet.",
  },
  {
    title: "Balance",
    body: "See your USDC holdings and SOL fee balance in one place, with clear information about when your balances were last updated.",
  },
  {
    title: "History",
    body: "Keep track of every transfer with its amount, timestamp and status. Open any transaction to verify its details on-chain.",
  },
];

export default function Features() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once entrance reveal finishes, clear transition delays so hover responds instantly
          setTimeout(() => setAnimationDone(true), 1200);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="product" className="scroll-mt-16 pt-6 pb-16 sm:pt-8 sm:pb-20 md:pt-10 md:pb-24 lg:pt-12 lg:pb-24">
      {/* Upper part: preserved at max-w-6xl */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-[1.3fr_0.9fr] lg:gap-10">
          <div>
            <p className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-widest text-accent">
              The product
            </p>
            <TextReveal
              as="h2"
              text="Everything you need to hold, send and receive USDC."
              className="mt-3 sm:mt-4 text-[2.5rem] sm:text-[3.35rem] md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.06] sm:leading-[1.04] md:leading-[1.03] lg:leading-[1.02]"
            />
            <p className="mt-3 sm:mt-4 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg">
              Calm infrastructure around the money people already hold with
              transaction states that tell the truth.
            </p>
          </div>

          <div className="flex justify-center p-2 sm:p-4 lg:justify-end lg:p-6">
            <Image
              src="/assets/falling.png"
              alt="The product artwork"
              width={600}
              height={317}
              className="w-full max-w-sm rounded-lg object-contain opacity-75 sm:max-w-md sm:opacity-80 lg:max-w-lg"
            />
          </div>
        </div>
      </div>

      {/* 4 Paragraphs section: expanded to FAQ width (lg:max-w-7xl) with reduced top gap */}
      <div className="mx-auto max-w-6xl lg:max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={gridRef}
          className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8 xl:gap-12"
        >
          {features.map((feature, index) => {
            const headingDelay = `${index * 160}ms`;
            const bodyDelay = `${index * 160 + 130}ms`;

            return (
              <div key={feature.title} className="group flex flex-col cursor-pointer">
                <h3
                  className="font-heading text-2xl sm:text-3xl lg:text-[1.75rem] xl:text-3xl font-bold tracking-tight text-white transition-all duration-700 ease-out group-hover:text-accent group-hover:duration-300"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(18px)",
                    transitionDelay: animationDone ? "0ms" : headingDelay,
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  className="mt-2.5 sm:mt-3 text-sm sm:text-base leading-relaxed text-gray-300 transition-all duration-700 ease-out"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(18px)",
                    transitionDelay: animationDone ? "0ms" : bodyDelay,
                  }}
                >
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
