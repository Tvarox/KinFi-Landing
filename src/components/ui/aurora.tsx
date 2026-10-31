"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface AuroraProps {
  colors?: string[];
  speed?: number;
  blur?: number;
  className?: string;
  id?: string;
}

export const Aurora = ({
  colors = ["#FFA15A20", "#E8803A18", "#D9770614"],
  speed = 10,
  blur = 120,
  className,
  id,
}: AuroraProps) => {
  const c1 = colors[0] || "#FFA15A20";
  const c2 = colors[1] || "#E8803A18";
  const c3 = colors[2] || "#D9770614";

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
        className="absolute inset-0"
        style={{
          filter: `blur(${blur}px)`,
          mixBlendMode: "screen",
        }}
      >
        {/* Aurora Layer 1 */}
        <div
          className="absolute -top-[30%] -left-[10%] h-[160%] w-[70%] rounded-full opacity-70 animate-aurora-1"
          style={{
            background: `radial-gradient(ellipse at center, ${c1} 0%, transparent 70%)`,
            animationDuration: `${speed}s`,
          }}
        />

        {/* Aurora Layer 2 */}
        <div
          className="absolute -bottom-[40%] right-[5%] h-[170%] w-[65%] rounded-full opacity-60 animate-aurora-2"
          style={{
            background: `radial-gradient(ellipse at center, ${c2} 0%, transparent 70%)`,
            animationDuration: `${speed * 1.3}s`,
          }}
        />

        {/* Aurora Layer 3 */}
        <div
          className="absolute top-[10%] left-[25%] h-[120%] w-[55%] rounded-full opacity-50 animate-aurora-3"
          style={{
            background: `radial-gradient(ellipse at center, ${c3} 0%, transparent 65%)`,
            animationDuration: `${speed * 1.6}s`,
          }}
        />
      </div>
    </div>
  );
};

export default Aurora;

