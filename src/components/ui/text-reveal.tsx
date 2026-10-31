"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface TextRevealProps {
  text: string;
  splitBy?: "word" | "character" | "line";
  className?: string;
  id?: string;
  as?: "h1" | "h2" | "h3" | "p" | "div" | "span";
}

export const TextReveal = ({
  text,
  splitBy = "word",
  className,
  id,
  as: Component = "h2",
}: TextRevealProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start revealing when the top of the element enters at 85% of viewport
      // Complete revealing when it reaches 35% of viewport
      const startY = windowHeight * 0.85;
      const endY = windowHeight * 0.35;

      const current = startY - rect.top;
      const total = startY - endY;

      if (total <= 0) return;
      const p = Math.max(0, Math.min(1, current / total));
      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Split text into tokens
  let tokens: string[] = [];
  if (splitBy === "character") {
    tokens = text.split("");
  } else if (splitBy === "line") {
    tokens = text.split("\n");
  } else {
    // default: word
    tokens = text.split(" ");
  }

  const tokenCount = tokens.length;

  return (
    <Component
      ref={containerRef as any}
      id={id}
      className={cn("relative leading-tight", className)}
    >
      {tokens.map((token, index) => {
        // Calculate progressive reveal range for this token
        const start = index / tokenCount;
        const end = (index + 1) / tokenCount;
        const tokenProgress = Math.max(0, Math.min(1, (progress - start) / (end - start)));
        // Interpolate opacity from 0.2 (muted) to 1.0 (fully lit)
        const opacity = 0.2 + 0.8 * tokenProgress;

        return (
          <span
            key={index}
            className="inline-block transition-opacity duration-75"
            style={{ opacity }}
          >
            {token}
            {splitBy === "word" && index < tokenCount - 1 && "\u00A0"}
          </span>
        );
      })}
    </Component>
  );
};

export default TextReveal;

