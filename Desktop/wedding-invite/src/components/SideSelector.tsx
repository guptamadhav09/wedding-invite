import React, { useState } from "react";

export type Side = "prateek" | "mahek";

interface SideSelectorProps {
  onSelect: (side: Side) => void;
}

export const SideSelector: React.FC<SideSelectorProps> = ({ onSelect }) => {
  const [hovered, setHovered] = useState<Side | null>(null);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#faf7f2] relative overflow-hidden py-8 sm:py-16 px-4">
      {/* Soft warm luxury ambient background glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, hsl(var(--gold) / 0.18) 0%, transparent 65%)",
        }}
      />

      {/* ── Sacred Auspicious Invocation ── */}
      <div className="flex items-center gap-3 mb-3 sm:mb-5 relative z-10">
        <span className="text-gold text-sm sm:text-base">✦</span>
        <p className="font-tiro text-sm sm:text-base tracking-[0.3em] text-[#8a6828] font-semibold select-none">
          ॥ श्री गणेशाय नमः ॥
        </p>
        <span className="text-gold text-sm sm:text-base">✦</span>
      </div>

      {/* ── Header ── */}
      <div className="flex flex-col items-center mb-9 sm:mb-12 relative z-10 text-center px-4 max-w-3xl">
        {/* Family invitation line */}
        <p className="font-serif italic text-[#4a3622] text-lg sm:text-3xl md:text-4xl mb-4 sm:mb-6 font-medium tracking-wide leading-relaxed max-w-4xl">
          The Dhingra &amp; Gupta families joyfully invite you to celebrate
        </p>

        <p className="text-xs sm:text-sm tracking-[0.32em] uppercase text-[#7d654c] font-sans font-bold mb-3 sm:mb-4">
          The Wedding Celebration Of
        </p>

        {/* First slide: Prateek & Mahek */}
        <h1
          className="font-serif text-[#2d1f14] font-bold leading-tight flex items-baseline justify-center whitespace-nowrap select-none drop-shadow-2xs text-4xl sm:text-6xl md:text-7xl my-1 sm:my-2"
        >
          <span>Prateek</span>
          <span className="font-great-vibes text-gold font-normal px-3 sm:px-4 text-[1.1em] align-baseline">
            &amp;
          </span>
          <span>Mahek</span>
        </h1>

        {/* Date & Venue */}
        <p className="font-serif text-[#3b2a1a] text-sm sm:text-lg md:text-xl tracking-[0.14em] font-semibold mt-3 sm:mt-4 mb-1 sm:mb-2">
          12 December 2026 &nbsp;·&nbsp; Evara, Vasundhara
        </p>

        <div className="dishoom-divider my-4 sm:my-6 scale-100">
          <span>✦</span>
        </div>

        <p className="text-sm sm:text-base tracking-[0.16em] uppercase text-[#614b35] font-sans font-semibold">
          Whose side are you celebrating with?
        </p>
      </div>

      {/* ── Side choices ── */}
      <div className="flex flex-row gap-4 sm:gap-6 px-1 w-full max-w-3xl justify-center relative z-10">

        {/* ── CARD 1: TEAM GROOM (Prateek) — Warm Luminous Pista Sage ── */}
        <button
          onClick={() => onSelect("prateek")}
          onMouseEnter={() => setHovered("prateek")}
          onMouseLeave={() => setHovered(null)}
          aria-label="Enter celebration as Groom's guest (Prateek)"
          className={`group relative w-full flex-1 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#8a6b4d]
            transition-all duration-300 rounded-lg overflow-hidden border shadow-sm text-left
            ${
              hovered === "prateek"
                ? "scale-[1.01] sm:scale-[1.03] shadow-md border-[#d8c3a8] bg-[#eee1cf]"
                : "border-[#e4d4be] bg-[#f5eee3]"
            }
            ${hovered === "mahek" ? "opacity-60 scale-[0.99] sm:scale-[0.98]" : "opacity-100"}`}
        >
          <div className="relative z-10 flex items-center p-2 sm:p-4 gap-2 sm:gap-3">
            
            {/* Monogram + Text Info */}
            <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
              {/* Simple side marker */}
              <img
                src="/assets/boy-icon.png"
                alt=""
                className="w-20 h-20 sm:w-28 sm:h-28 shrink-0 object-contain transition-transform duration-300 group-hover:scale-105"
              />

              {/* Text Info */}
              <div className="flex flex-col text-left min-w-0">
                <span className="text-[8px] sm:text-[10px] tracking-[0.15em] uppercase font-dm-mono font-bold text-[#765a3d] truncate">
                  Team Groom
                </span>
                <h2 className="text-lg sm:text-xl font-serif font-bold tracking-wide text-[#432f22] leading-tight">
                  Prateek
                </h2>
                <p className="text-[9px] sm:text-xs font-serif italic text-[#876d54] font-medium truncate">
                  Groom's side
                </p>
              </div>
            </div>

          </div>
        </button>

        {/* ── CARD 2: TEAM BRIDE (Mahek) — Warm Luminous Gulabi Blush ── */}
        <button
          onClick={() => onSelect("mahek")}
          onMouseEnter={() => setHovered("mahek")}
          onMouseLeave={() => setHovered(null)}
          aria-label="Enter celebration as Bride's guest (Mahek)"
          className={`group relative w-full flex-1 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#8a6b4d]
            transition-all duration-300 rounded-lg overflow-hidden border shadow-sm text-left
            ${
              hovered === "mahek"
                ? "scale-[1.01] sm:scale-[1.03] shadow-md border-[#d8c3a8] bg-[#eee1cf]"
                : "border-[#e4d4be] bg-[#f5eee3]"
            }
            ${hovered === "prateek" ? "opacity-60 scale-[0.99] sm:scale-[0.98]" : "opacity-100"}`}
        >
          <div className="relative z-10 flex items-center p-2 sm:p-4 gap-2 sm:gap-3">
            
            {/* Monogram + Text Info */}
            <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
              {/* Simple side marker */}
              <img
                src="/assets/girl-icon.png"
                alt=""
                className="w-20 h-20 sm:w-28 sm:h-28 shrink-0 object-contain transition-transform duration-300 group-hover:scale-105"
              />

              {/* Text Info */}
              <div className="flex flex-col text-left min-w-0">
                <span className="text-[8px] sm:text-[10px] tracking-[0.15em] uppercase font-dm-mono font-bold text-[#765a3d] truncate">
                  Team Bride
                </span>
                <h2 className="text-lg sm:text-xl font-serif font-bold tracking-wide text-[#432f22] leading-tight">
                  Mahek
                </h2>
                <p className="text-[9px] sm:text-xs font-serif italic text-[#876d54] font-medium truncate">
                  Bride's side
                </p>
              </div>
            </div>

          </div>
        </button>

      </div>
    </section>
  );
};
