import React, { useState } from "react";

export type Side = "prateek" | "mahek";

interface SideSelectorProps {
  onSelect: (side: Side) => void;
}

export const SideSelector: React.FC<SideSelectorProps> = ({ onSelect }) => {
  const [hovered, setHovered] = useState<Side | null>(null);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-background relative overflow-hidden py-12 px-4">
      {/* Background ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(circle at 50% 35%, hsl(var(--gold) / 0.18) 0%, transparent 65%)",
        }}
      />

      {/* Header */}
      <div className="flex flex-col items-center mb-8 sm:mb-12 relative z-10 text-center px-4 max-w-2xl">
        {/* Family invitation line - prominently visible warm bronze */}
        <p className="font-serif italic text-[#4a3622] text-base sm:text-xl md:text-2xl mb-2 font-medium tracking-wide leading-relaxed">
          The Dhingra &amp; Gupta families joyfully invite you to celebrate
        </p>

        <p className="text-xs sm:text-sm md:text-base tracking-[0.35em] uppercase text-[#6e533c] font-sans font-bold mb-2">
          The Wedding of
        </p>

        {/* Couple Names - Large & majestic in Great Vibes */}
        <h1
          className="font-great-vibes font-light tracking-wide gold-text leading-tight whitespace-nowrap select-none my-1"
          style={{ fontSize: "clamp(3.5rem, 12vw, 6.5rem)" }}
        >
          Prateek &amp; Mahek
        </h1>

        {/* Date & Venue - Large and clearly readable */}
        <p className="font-serif text-[#3b2a1a] text-base sm:text-xl md:text-2xl tracking-[0.14em] font-semibold mt-2 mb-1">
          12 December 2026 &nbsp;·&nbsp; Evara, Vasundhara
        </p>

        <div className="dishoom-divider mt-5 mb-4 scale-110 sm:scale-125">
          <span>✦</span>
        </div>

        <p className="text-sm sm:text-base md:text-lg tracking-[0.14em] text-[#4a3622] font-sans font-semibold">
          Whose side are you on?
        </p>
      </div>

      {/* Cards — side by side */}
      <div className="flex flex-row gap-3.5 sm:gap-6 px-2 w-full max-w-lg relative z-10">

        {/* ── Prateek card (plain pastel sage green) ── */}
        <button
          onClick={() => onSelect("prateek")}
          onMouseEnter={() => setHovered("prateek")}
          onMouseLeave={() => setHovered(null)}
          aria-label="I'm here for Prateek"
          className={`group relative flex-1 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary
            transition-all duration-500 rounded-2xl overflow-hidden
            ${hovered === "prateek" ? "scale-[1.03] shadow-xl" : "shadow-sm"}
            ${hovered === "mahek" ? "opacity-55 scale-[0.98]" : "opacity-100"}`}
        >
          <div
            className="absolute inset-0 transition-all duration-500"
            style={{
              backgroundColor: hovered === "prateek" ? "#cce0d6" : "#d7e6dc",
            }}
          />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#8fae9b] opacity-40" />

          <div className="relative z-10 flex flex-col items-center py-6 px-3 sm:py-10 sm:px-6 gap-2 sm:gap-4">
            <span
              className="text-[0.6rem] sm:text-[0.65rem] tracking-[0.35em] uppercase font-dm-mono font-bold"
              style={{ color: "#3d634e" }}
            >
              Team Groom
            </span>

            <div className="w-full flex items-center justify-center py-2 sm:py-4">
              <span
                className="font-mea-culpa leading-none select-none transition-transform duration-500"
                style={{
                  fontSize: "clamp(5.5rem, 19vw, 9.5rem)",
                  color: "#355e46",
                  textShadow: "0 3px 18px rgba(50,100,70,0.2)",
                  transform: hovered === "prateek" ? "scale(1.07)" : "scale(1)",
                  willChange: "transform",
                }}
              >
                P
              </span>
            </div>

            <div className="flex flex-col items-center gap-0.5">
              <h2
                className="text-lg sm:text-2xl font-serif font-medium tracking-wide"
                style={{ color: "#284a36" }}
              >
                Prateek
              </h2>
              <p
                className="text-[10px] sm:text-[11px] font-sans tracking-widest uppercase font-medium"
                style={{ color: "#4f765d" }}
              >
                Family &amp; friends
              </p>
            </div>

            <div
              className="mt-1 px-4 sm:px-6 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-dm-mono uppercase tracking-widest font-semibold transition-all duration-300"
              style={{
                border:
                  hovered === "prateek"
                    ? "1.5px solid #5a856a"
                    : "1px solid rgba(80,130,95,0.45)",
                color: hovered === "prateek" ? "#284a36" : "#3d634e",
                background:
                  hovered === "prateek"
                    ? "rgba(255,255,255,0.65)"
                    : "rgba(255,255,255,0.3)",
              }}
            >
              Enter
            </div>
          </div>
        </button>

        {/* ── Mahek card (plain pastel rose) ── */}
        <button
          onClick={() => onSelect("mahek")}
          onMouseEnter={() => setHovered("mahek")}
          onMouseLeave={() => setHovered(null)}
          aria-label="I'm here for Mahek"
          className={`group relative flex-1 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary
            transition-all duration-500 rounded-2xl overflow-hidden
            ${hovered === "mahek" ? "scale-[1.03] shadow-xl" : "shadow-sm"}
            ${hovered === "prateek" ? "opacity-55 scale-[0.98]" : "opacity-100"}`}
        >
          <div
            className="absolute inset-0 transition-all duration-500"
            style={{
              backgroundColor: hovered === "mahek" ? "#e4cfd5" : "#ebdce0",
            }}
          />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#ba939d] opacity-40" />

          <div className="relative z-10 flex flex-col items-center py-6 px-3 sm:py-10 sm:px-6 gap-2 sm:gap-4">
            <span
              className="text-[0.6rem] sm:text-[0.65rem] tracking-[0.35em] uppercase font-dm-mono font-bold"
              style={{ color: "#6a3b4a" }}
            >
              Team Bride
            </span>

            <div className="w-full flex items-center justify-center py-2 sm:py-4">
              <span
                className="font-mea-culpa leading-none select-none transition-transform duration-500"
                style={{
                  fontSize: "clamp(5.5rem, 19vw, 9.5rem)",
                  color: "#633140",
                  textShadow: "0 3px 18px rgba(130,60,80,0.2)",
                  transform: hovered === "mahek" ? "scale(1.07)" : "scale(1)",
                  willChange: "transform",
                }}
              >
                M
              </span>
            </div>

            <div className="flex flex-col items-center gap-0.5">
              <h2
                className="text-lg sm:text-2xl font-serif font-medium tracking-wide"
                style={{ color: "#4f2230" }}
              >
                Mahek
              </h2>
              <p
                className="text-[10px] sm:text-[11px] font-sans tracking-widest uppercase font-medium"
                style={{ color: "#824f60" }}
              >
                Family &amp; friends
              </p>
            </div>

            <div
              className="mt-1 px-4 sm:px-6 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-dm-mono uppercase tracking-widest font-semibold transition-all duration-300"
              style={{
                border:
                  hovered === "mahek"
                    ? "1.5px solid #996273"
                    : "1px solid rgba(140,80,100,0.45)",
                color: hovered === "mahek" ? "#4f2230" : "#6a3b4a",
                background:
                  hovered === "mahek"
                    ? "rgba(255,255,255,0.65)"
                    : "rgba(255,255,255,0.3)",
              }}
            >
              Enter
            </div>
          </div>
        </button>
      </div>
    </section>
  );
};
