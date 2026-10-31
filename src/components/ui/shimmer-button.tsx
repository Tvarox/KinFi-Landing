"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export interface ShimmerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerWidth?: string;
  duration?: number;
  className?: string;
  id?: string;
  href?: string;
  children: React.ReactNode;
}

export const ShimmerButton = ({
  children,
  shimmerColor = "rgba(255, 255, 255, 0.15)",
  shimmerWidth = "200%",
  duration = 1.5,
  className,
  id,
  href,
  ...props
}: ShimmerButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const sharedClasses = cn(
    "group relative inline-flex items-center justify-center overflow-hidden cursor-pointer",
    className
  );

  const content = (
    <>
      {/* Button content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>

      {/* Shimmer sweep highlight on hover */}
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-y-0 -left-full",
          isHovered ? "animate-shimmer-sweep" : "opacity-0"
        )}
        style={{
          width: shimmerWidth,
          background: `linear-gradient(105deg, transparent 20%, ${shimmerColor} 50%, transparent 80%)`,
          animationDuration: `${duration}s`,
        }}
      />
    </>
  );

  const handlers = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  };

  if (href) {
    return (
      <a href={href} id={id} className={sharedClasses} {...handlers}>
        {content}
      </a>
    );
  }

  return (
    <button id={id} className={sharedClasses} {...handlers} {...props}>
      {content}
    </button>
  );
};

export default ShimmerButton;

