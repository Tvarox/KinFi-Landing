"use client";

import React, { useEffect, useState, useMemo } from "react";

interface PagePreloaderProps {
  /** Variant of the curtain reveal: defaults to "pixel" */
  variant?: "pixel" | "curtain" | "stairs";
  /** Number of grid columns for pixel variant */
  columns?: number;
  /** Number of grid rows for pixel variant */
  rows?: number;
  /** Time in ms to hold the preloader before reveal begins */
  holdDuration?: number;
  /** Time in ms for the exit stagger cascade */
  staggerDuration?: number;
  /** Individual tile transition duration in ms */
  tileDuration?: number;
  /** Tile background color (matches dark Renaissance background) */
  tileColor?: string;
  /** Callback fired when transition completely finishes and unmounts */
  onComplete?: () => void;
  /** Additional classes */
  className?: string;
}

// Deterministic Pseudo-Random Number Generator (LCG) for reproducible tile order
function generateDeterministicOrder(total: number, seed = 42): number[] {
  const indices = Array.from({ length: total }, (_, i) => i);
  let s = seed;
  const random = () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };

  for (let i = total - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    const temp = indices[i];
    indices[i] = indices[j];
    indices[j] = temp;
  }

  // Create lookup table: for each index i, what is its stagger order (0 to total-1)
  const order = new Array<number>(total);
  for (let rank = 0; rank < total; rank++) {
    order[indices[rank]] = rank;
  }
  return order;
}

export function PagePreloader({
  variant = "pixel",
  columns = 10,
  rows = 10,
  holdDuration = 350,
  staggerDuration = 950,
  tileDuration = 450,
  tileColor = "#131416",
  onComplete,
  className = "",
}: PagePreloaderProps) {
  const [isExiting, setIsExiting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const totalTiles = columns * rows;

  // Compute deterministic order once (identical on both server and client)
  const tileOrder = useMemo(() => {
    return generateDeterministicOrder(totalTiles, 1337);
  }, [totalTiles]);

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (mediaQuery.matches) {
        setIsFinished(true);
        onComplete?.();
        return;
      }
    }

    // Lock background scroll during preloader hold & reveal
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // 1. Hold timer before exit begins
    const holdTimer = setTimeout(() => {
      setIsExiting(true);
    }, holdDuration);

    // 2. Full completion timer
    const totalTime = holdDuration + staggerDuration + tileDuration + 60;
    const finishTimer = setTimeout(() => {
      setIsFinished(true);
      document.body.style.overflow = originalOverflow;
      onComplete?.();
    }, totalTime);

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(finishTimer);
      document.body.style.overflow = originalOverflow;
    };
  }, [holdDuration, staggerDuration, tileDuration, onComplete]);

  // If complete, unmount completely
  if (isFinished) {
    return null;
  }

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed inset-0 z-[9999] bg-transparent select-none overflow-hidden ${isExiting ? "pointer-events-none" : "pointer-events-auto"
        } ${className}`}
    >
      <span className="sr-only">Loading</span>

      {variant === "pixel" && (
        <div
          aria-hidden="true"
          className="w-full h-full grid"
          style={{
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`,
          }}
        >
          {Array.from({ length: totalTiles }).map((_, index) => {
            const rank = tileOrder[index] ?? 0;
            const delay = (rank / totalTiles) * staggerDuration;

            return (
              <div
                key={index}
                style={{
                  backgroundColor: tileColor,
                  transitionProperty: "opacity, transform",
                  transitionDuration: `${tileDuration}ms`,
                  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                  transitionDelay: isExiting ? `${delay}ms` : "0ms",
                  opacity: isExiting ? 0 : 1,
                  transform: isExiting ? "scale(0.96)" : "scale(1.002)",
                }}
                className="w-full h-full"
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

