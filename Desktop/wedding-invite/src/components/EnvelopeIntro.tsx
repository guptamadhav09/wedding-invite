import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

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
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          handleOpen();
        }
      }}
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
        className="envelope-content relative z-30 flex flex-col items-center justify-center transition-all duration-400 pointer-events-none"
        style={{
          opacity: opening ? 0 : 1,
          transform: opening ? "scale(0.85)" : "scale(1)",
        }}
      >
        {/* Top subtle hint */}
        <div className="envelope-label mb-6 inline-flex items-center justify-center gap-2.5 text-[#604832]">
          <span className="h-px w-5 bg-[#b89b72]" aria-hidden="true" />
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm">
            Wedding Invitation
          </span>
          <span className="h-px w-5 bg-[#b89b72]" aria-hidden="true" />
        </div>

        <div className="envelope-seal-wrap">
          <span className="envelope-seal-halo" aria-hidden="true" />
          <img
            src="/assets/PandM.webp"
            alt="P and M wax seal"
            width="1295"
            height="1215"
            fetchPriority="high"
            decoding="async"
            className="envelope-seal h-36 w-36 object-contain drop-shadow-[0_10px_16px_rgba(90,75,55,0.24)] sm:h-40 sm:w-40"
          />
        </div>

        {/* Bottom invitation text */}
        <span className="envelope-entry-cue mt-5 inline-flex flex-col items-center gap-1.5 text-[#60483a]">
          <span className="inline-flex items-center gap-2">
            <span className="font-sans text-[13px] font-semibold uppercase tracking-[0.16em] sm:text-[15px]">
              Tap to enter
            </span>
            <ArrowRight
              className="envelope-entry-cue__arrow h-3.5 w-3.5"
              aria-hidden="true"
            />
          </span>
          <span className="envelope-entry-cue__underline" aria-hidden="true" />
        </span>
      </div>
    </div>
  );
};
