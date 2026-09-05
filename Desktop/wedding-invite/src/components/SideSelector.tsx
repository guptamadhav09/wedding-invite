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
        <p className="font-serif italic text-[#4a3622] text-base sm:text-2xl mb-3 sm:mb-4 font-medium tracking-wide leading-relaxed">
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
          className={`group relative w-full flex-1 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#133822]
            transition-all duration-300 rounded-lg overflow-hidden border-l-4 border-y border-r shadow-sm text-left
            ${
              hovered === "prateek"
                ? "scale-[1.01] sm:scale-[1.03] shadow-lg border-[#8eb99a] bg-[#deede2]"
                : "border-[#b2d5bd] bg-[#e6f2e9]"
            }
            ${hovered === "mahek" ? "opacity-60 scale-[0.99] sm:scale-[0.98]" : "opacity-100"}`}
        >
          <div className="relative z-10 flex items-center p-3 sm:p-4 gap-3">
            
            {/* Monogram + Text Info */}
            <div className="flex items-center gap-3 min-w-0 flex-1">
              {/* Royal Seal */}
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <div className="absolute inset-0 rounded-full bg-white/90 border border-[#b89f65]/40 shadow-xs" />
                <svg
                  viewBox="0 0 100 100"
                  className="absolute inset-0 w-full h-full text-[#b89f65] fill-none stroke-current stroke-[1.5]"
                >
                  <circle cx="50" cy="50" r="43" strokeDasharray="3 3" opacity="0.6" />
                </svg>
                <span
                  className="relative z-10 font-great-vibes text-2xl select-none"
                  style={{ color: "#133822" }}
                >
                  P
                </span>
              </div>

              {/* Text Info */}
              <div className="flex flex-col text-left min-w-0">
                <span className="text-[8px] sm:text-[10px] tracking-[0.15em] uppercase font-dm-mono font-bold text-[#2a5938] truncate">
                  Team Groom
                </span>
                <h2 className="text-lg sm:text-xl font-serif font-bold tracking-wide text-[#133822] leading-tight">
                  Prateek
                </h2>
                <p className="text-[9px] sm:text-xs font-serif italic text-[#3b6348] font-medium truncate">
                  Groom's side
                </p>
              </div>
            </div>

            <div className="shrink-0 w-8 h-8 rounded-full bg-white/80 border border-[#2a5938]/25 text-[#133822] flex items-center justify-center text-base transition-all duration-300 group-hover:bg-[#133822] group-hover:text-white">
              <span aria-hidden="true">→</span>
            </div>

          </div>
        </button>

        {/* ── CARD 2: TEAM BRIDE (Mahek) — Warm Luminous Gulabi Blush ── */}
        <button
          onClick={() => onSelect("mahek")}
          onMouseEnter={() => setHovered("mahek")}
          onMouseLeave={() => setHovered(null)}
          aria-label="Enter celebration as Bride's guest (Mahek)"
          className={`group relative w-full flex-1 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#451323]
            transition-all duration-300 rounded-lg overflow-hidden border-l-4 border-y border-r shadow-sm text-left
            ${
              hovered === "mahek"
                ? "scale-[1.01] sm:scale-[1.03] shadow-lg border-[#d9a5b3] bg-[#f7e2e7]"
                : "border-[#e0bac4] bg-[#fbebf0]"
            }
            ${hovered === "prateek" ? "opacity-60 scale-[0.99] sm:scale-[0.98]" : "opacity-100"}`}
        >
          <div className="relative z-10 flex items-center p-3 sm:p-4 gap-3">
            
            {/* Monogram + Text Info */}
            <div className="flex items-center gap-3 min-w-0 flex-1">
              {/* Royal Seal */}
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <div className="absolute inset-0 rounded-full bg-white/90 border border-[#b89f65]/40 shadow-xs" />
                <svg
                  viewBox="0 0 100 100"
                  className="absolute inset-0 w-full h-full text-[#b89f65] fill-none stroke-current stroke-[1.5]"
                >
                  <circle cx="50" cy="50" r="43" strokeDasharray="3 3" opacity="0.6" />
                </svg>
                <span
                  className="relative z-10 font-great-vibes text-2xl select-none"
                  style={{ color: "#451323" }}
                >
                  M
                </span>
              </div>

              {/* Text Info */}
              <div className="flex flex-col text-left min-w-0">
                <span className="text-[8px] sm:text-[10px] tracking-[0.15em] uppercase font-dm-mono font-bold text-[#722f42] truncate">
                  Team Bride
                </span>
                <h2 className="text-lg sm:text-xl font-serif font-bold tracking-wide text-[#451323] leading-tight">
                  Mahek
                </h2>
                <p className="text-[9px] sm:text-xs font-serif italic text-[#7a394c] font-medium truncate">
                  Bride's side
                </p>
              </div>
            </div>

            <div className="shrink-0 w-8 h-8 rounded-full bg-white/80 border border-[#722f42]/25 text-[#451323] flex items-center justify-center text-base transition-all duration-300 group-hover:bg-[#451323] group-hover:text-white">
              <span aria-hidden="true">→</span>
            </div>

          </div>
        </button>

      </div>
    </section>
  );
};
