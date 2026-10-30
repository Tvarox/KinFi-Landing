"use client";

import { useCallback, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const DEFAULT_MORPH_TIME = 1.0;
const DEFAULT_COOLDOWN_TIME = 3.0;

// Smooth hermite curve (smoothstep) for gentle start and deceleration into final clarity
const smoothStep = (t: number) => {
  const clamped = Math.max(0, Math.min(1, t));
  return clamped * clamped * (3 - 2 * clamped);
};

const useMorphingText = (
  texts: string[],
  morphTime = DEFAULT_MORPH_TIME,
  cooldownTime = DEFAULT_COOLDOWN_TIME,
) => {
  const textIndexRef = useRef(0);
  const morphRef = useRef(0);
  const cooldownRef = useRef(cooldownTime);
  const timeRef = useRef(new Date());

  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);

  const setStyles = useCallback((rawFraction: number) => {
    if (!text1Ref.current || !text2Ref.current) return;

    const fraction = smoothStep(rawFraction);

    // Incoming text (text2): gradually clarifies from 4px blur down to 0, opacity 0 -> 100%
    const inBlur = (1 - fraction) * 4;
    text2Ref.current.style.filter = inBlur > 0.05 ? `blur(${inBlur.toFixed(2)}px)` : "none";
    text2Ref.current.style.opacity = `${(fraction * 100).toFixed(1)}%`;

    // Outgoing text (text1): gradually dissolves into 4px blur, opacity 100% -> 0
    const outBlur = fraction * 4;
    text1Ref.current.style.filter = outBlur > 0.05 ? `blur(${outBlur.toFixed(2)}px)` : "none";
    text1Ref.current.style.opacity = `${((1 - fraction) * 100).toFixed(1)}%`;
  }, []);

  const doCooldown = useCallback(() => {
    morphRef.current = 0;

    if (!text1Ref.current || !text2Ref.current) return;

    text2Ref.current.style.filter = "none";
    text2Ref.current.style.opacity = "0%";

    text1Ref.current.style.filter = "none";
    text1Ref.current.style.opacity = "100%";
  }, []);

  const doMorph = useCallback(() => {
    const fraction = morphRef.current / morphTime;

    if (fraction >= 1) {
      setStyles(1);

      // Smooth handoff: text1 takes over the fully revealed text
      textIndexRef.current = (textIndexRef.current + 1) % texts.length;
      if (text1Ref.current && text2Ref.current) {
        text1Ref.current.textContent = texts[textIndexRef.current % texts.length];
        text1Ref.current.style.filter = "none";
        text1Ref.current.style.opacity = "100%";

        text2Ref.current.textContent =
          texts[(textIndexRef.current + 1) % texts.length];
        text2Ref.current.style.filter = "none";
        text2Ref.current.style.opacity = "0%";
      }

      cooldownRef.current = cooldownTime;
      morphRef.current = 0;
      return;
    }

    setStyles(fraction);
  }, [texts, morphTime, cooldownTime, setStyles]);

  const tick = useCallback(() => {
    const newTime = new Date();
    const dt = (newTime.getTime() - timeRef.current.getTime()) / 1000;
    timeRef.current = newTime;

    if (cooldownRef.current > 0) {
      cooldownRef.current -= dt;
      doCooldown();
    } else {
      morphRef.current += dt;
      doMorph();
    }
  }, [doMorph, doCooldown]);

  useEffect(() => {
    if (text1Ref.current && text2Ref.current && texts.length > 0) {
      text1Ref.current.textContent = texts[textIndexRef.current % texts.length];
      text1Ref.current.style.filter = "none";
      text1Ref.current.style.opacity = "100%";

      text2Ref.current.textContent =
        texts[(textIndexRef.current + 1) % texts.length];
      text2Ref.current.style.filter = "none";
      text2Ref.current.style.opacity = "0%";
    }

    let animationId: number;
    const animate = () => {
      tick();
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [texts, tick]);

  return { text1Ref, text2Ref };
};

export interface MorphingTextProps {
  texts: string[];
  className?: string;
  morphTime?: number;
  cooldownTime?: number;
}

export const MorphingText = ({
  texts,
  className,
  morphTime = DEFAULT_MORPH_TIME,
  cooldownTime = DEFAULT_COOLDOWN_TIME,
}: MorphingTextProps) => {
  const { text1Ref, text2Ref } = useMorphingText(texts, morphTime, cooldownTime);

  return (
    <div
      className={cn(
        "relative w-full select-none",
        className ||
        "mx-auto h-16 max-w-screen-md text-center font-sans text-4xl font-bold text-white md:h-24 md:text-6xl",
      )}
    >
      <span
        ref={text1Ref}
        className="absolute inset-x-0 top-0 inline-block w-full will-change-[filter,opacity]"
      />
      <span
        ref={text2Ref}
        className="absolute inset-x-0 top-0 inline-block w-full will-change-[filter,opacity]"
      />

      <svg id="filters" className="fixed h-0 w-0 pointer-events-none opacity-0" aria-hidden="true">
        <defs>
          <filter id="threshold">
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default MorphingText;
