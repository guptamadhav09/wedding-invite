import React from "react";
import type { Side } from "./SideSelector";

interface WeddingFooterProps {
  variant?: string;
  side?: Side;
}

export const WeddingFooter: React.FC<WeddingFooterProps> = ({ side = "mahek" }) => {
  return (
    <footer className="py-20 px-4 bg-background border-t border-primary/15 text-center relative overflow-hidden">
      {/* Decorative Gold Geometric SVG Divider */}
      <div className="max-w-xs mx-auto mb-8">
        <svg
          viewBox="0 0 200 20"
          className="w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0"
            y1="10"
            x2="80"
            y2="10"
            stroke="hsl(38, 58%, 52%)"
            strokeWidth="0.5"
            opacity="0.5"
          />
          <circle
            cx="90"
            cy="10"
            r="3"
            fill="none"
            stroke="hsl(38, 58%, 52%)"
            strokeWidth="0.8"
            opacity="0.6"
          />
          <circle
            cx="100"
            cy="10"
            r="5"
            fill="none"
            stroke="hsl(38, 58%, 52%)"
            strokeWidth="0.8"
            opacity="0.8"
          />
          <circle
            cx="110"
            cy="10"
            r="3"
            fill="none"
            stroke="hsl(38, 58%, 52%)"
            strokeWidth="0.8"
            opacity="0.6"
          />
          <line
            x1="120"
            y1="10"
            x2="200"
            y2="10"
            stroke="hsl(38, 58%, 52%)"
            strokeWidth="0.5"
            opacity="0.5"
          />
        </svg>
      </div>

      <div className="space-y-3">
        <h3 className="font-great-vibes text-4xl sm:text-5xl gold-text">
          {side === "prateek" ? "Prateek" : "Mahek"} &amp; {side === "prateek" ? "Mahek" : "Prateek"}
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground tracking-[0.25em] uppercase font-sans font-semibold">
          Evara, Vasundhara · Delhi NCR
        </p>
        <p className="font-serif italic text-secondary text-sm sm:text-base pt-2">
          With love, gratitude, and warm blessings from both families
        </p>
      </div>
    </footer>
  );
};
