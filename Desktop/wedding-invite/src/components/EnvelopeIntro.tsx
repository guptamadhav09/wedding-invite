import React, { useState } from "react";

interface EnvelopeIntroProps {
  onComplete: () => void;
}

export const EnvelopeIntro: React.FC<EnvelopeIntroProps> = ({ onComplete }) => {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
    // Doors part open smoothly and immediately transition to the next page
    setTimeout(() => {
      onComplete();
    }, 600);
  };

  return (
    <div
      onClick={handleOpen}
      role="button"
      tabIndex={0}
      aria-label="Open wedding invitation doors"
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden select-none cursor-pointer bg-[#f7f2ea]"
    >
      {/* ── Left Door Panel ── */}
      <div
        className="absolute top-0 bottom-0 left-0 w-1/2 z-20 transition-transform duration-600 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
        style={{
          background: "#e8dfd3",
          borderRight: "1px solid #d4c6b5",
          boxShadow: "inset -2px 0 10px rgba(100, 85, 70, 0.08)",
          transform: opening ? "translateX(-100%)" : "translateX(0)",
        }}
      >
        {/* Subtle decorative inner corner border on left door */}
        <div className="absolute top-8 left-8 bottom-8 right-4 border-l border-t border-b border-[#d8ccbc] opacity-50 pointer-events-none" />
      </div>

      {/* ── Right Door Panel ── */}
      <div
        className="absolute top-0 bottom-0 right-0 w-1/2 z-20 transition-transform duration-600 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
        style={{
          background: "#e8dfd3",
          borderLeft: "1px solid #d4c6b5",
          boxShadow: "inset 2px 0 10px rgba(100, 85, 70, 0.08)",
          transform: opening ? "translateX(100%)" : "translateX(0)",
        }}
      >
        {/* Subtle decorative inner corner border on right door */}
        <div className="absolute top-8 right-8 bottom-8 left-4 border-r border-t border-b border-[#d8ccbc] opacity-50 pointer-events-none" />
      </div>

      {/* ── Center Content / Monogram Seal ── */}
      <div
        className="relative z-30 flex flex-col items-center justify-center transition-all duration-400 pointer-events-none"
        style={{
          opacity: opening ? 0 : 1,
          transform: opening ? "scale(0.85)" : "scale(1)",
        }}
      >
        {/* Top subtle hint */}
        <p className="font-dm-mono text-[9px] sm:text-[10px] tracking-[4px] uppercase text-[#8c765e] font-semibold mb-6">
          Wedding Invitation
        </p>

        {/* ── Circle Emblem in a DIFFERENT BEIGE ── */}
        <div
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center relative shadow-lg transition-transform duration-300 hover:scale-105"
          style={{
            background: "#bda890", // Distinct contrasting deep caramel beige
            border: "3px solid #dfd3c3", // Light beige outer border
            boxShadow: "0 8px 25px rgba(90, 75, 55, 0.22), inset 0 2px 4px rgba(255, 255, 255, 0.3)",
          }}
        >
          {/* Inner stitched ring */}
          <div
            className="w-20 h-20 sm:w-23 sm:h-23 rounded-full flex items-center justify-center"
            style={{
              border: "1px dashed rgba(255, 255, 255, 0.4)",
            }}
          >
            {/* M&P Monogram */}
            <span
              className="font-great-vibes text-[#fffefb] select-none text-3xl sm:text-4xl"
              style={{
                textShadow: "0 1px 3px rgba(60, 45, 30, 0.35)",
              }}
            >
              P&amp;M
            </span>
          </div>
        </div>

        {/* Bottom invitation text */}
        <p className="font-dm-mono text-[9px] tracking-[3px] uppercase text-[#8c765e] font-semibold mt-6 animate-pulse">
          ✦ Tap to Enter ✦
        </p>
      </div>
    </div>
  );
};
