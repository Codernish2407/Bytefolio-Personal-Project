"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "absolute top-0 left-0 w-full h-full -z-10 overflow-hidden",
        className
      )}
    >
      <div className="relative w-full h-full">
        <div className="absolute inset-0 bg-background"></div>
        <div
          style={
            {
              "--beam-width": "40px",
              "--beam-color": "hsl(var(--primary) / 0.1)",
              "--beam-duration": "6s",
              "--beam-delay": "0s",
            } as React.CSSProperties
          }
          className="absolute inset-0 bg-repeat bg-[length:var(--beam-width)_var(--beam-width)] [animation:beam-move_var(--beam-duration)_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,var(--beam-color)_50%,transparent_100%)]"
        ></div>
        <div
          style={
            {
              "--beam-width": "60px",
              "--beam-color": "hsl(var(--accent) / 0.1)",
              "--beam-duration": "8s",
              "--beam-delay": "-2s",
            } as React.CSSProperties
          }
          className="absolute inset-0 bg-repeat bg-[length:var(--beam-width)_var(--beam-width)] [animation:beam-move_var(--beam-duration)_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,var(--beam-color)_50%,transparent_100%)]"
        ></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0,hsl(var(--background))_80%)]"></div>
      </div>
      <style>{`
        @keyframes beam-move {
          0% { transform: translate(0, 0) rotate(0deg); }
          100% { transform: translate(var(--beam-width), var(--beam-width)) rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
