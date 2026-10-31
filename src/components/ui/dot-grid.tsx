"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface DotGridProps {
  dotSize?: number;
  gap?: number;
  color?: string;
  animate?: boolean;
  fade?: boolean;
  className?: string;
  id?: string;
}

export const DotGrid = ({
  dotSize = 1,
  gap = 24,
  color = "rgba(255, 255, 255, 0.12)",
  animate = true,
  fade = true,
  className,
  id,
}: DotGridProps) => {
  const style: React.CSSProperties = {
    backgroundImage: `radial-gradient(${color} ${dotSize}px, transparent ${dotSize}px)`,
    backgroundSize: `${gap}px ${gap}px`,
    ...(fade && {
      maskImage:
        "radial-gradient(ellipse at center, black 30%, transparent 75%)",
      WebkitMaskImage:
        "radial-gradient(ellipse at center, black 30%, transparent 75%)",
    }),
  };

  return (
    <div
      id={id}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      <div
        className={cn(
          "absolute -inset-[50px]",
          animate && "animate-dot-drift"
        )}
        style={style}
      />
    </div>
  );
};

export default DotGrid;

