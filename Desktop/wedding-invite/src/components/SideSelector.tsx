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
        className="absolute inset-0 pointer-events-none opacity-35"
        style={{ background: "radial-gradient(circle at 50% 40%, hsl(var(--gold) / 0.15) 0%, transparent 65%)" }}
      />

      {/* Header — names shown once */}
      <div className="flex flex-col items-center mb-8 relative z-10 text-center">
        <p className="text-[10px] tracking-[0.45em] uppercase text-muted-foreground font-sans mb-3 font-semibold">
          Welcome to the celebration of
        </p>
        <h1
          className="font-great-vibes font-light tracking-wide gold-text leading-tight whitespace-nowrap"
          style={{ fontSize: "clamp(2.6rem, 10vw, 5.5rem)" }}
        >
          Mahek &amp; Prateek
        </h1>
        <div className="dishoom-divider mt-5 mb-3">
          <span>✦</span>
        </div>
        <p className="text-xs sm:text-sm tracking-[0.12em] text-muted-foreground mt-1 font-sans">
          Whose side are you on?
        </p>
      </div>

      {/* Cards — always side by side */}
      <div className="flex flex-row gap-3 sm:gap-6 px-2 w-full max-w-lg relative z-10">

        {/* ── Prateek card (sage green) ── */}
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
              background: hovered === "prateek"
                ? "linear-gradient(155deg, #b8d0c4 0%, #a0c0b0 45%, #ccbca0 100%)"
                : "linear-gradient(155deg, #c4d8cc 0%, #aec8bc 55%, #d4c8a8 100%)",
            }}
          />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#7a9e88] to-transparent opacity-70" />

          <div className="relative z-10 flex flex-col items-center py-6 px-3 sm:py-10 sm:px-6 gap-2 sm:gap-4">
            <span className="text-[0.55rem] sm:text-[0.6rem] tracking-[0.35em] uppercase font-dm-mono font-bold" style={{ color: "#4e7862" }}>
              Team Groom
            </span>

            <div className="w-full flex items-center justify-center py-3 sm:py-6">
              <span
                className="font-mea-culpa leading-none select-none transition-transform duration-500"
                style={{
                  fontSize: "clamp(5rem, 18vw, 9rem)",
                  color: "#3d6850",
                  textShadow: "0 3px 18px rgba(60,120,80,0.18)",
                  transform: hovered === "prateek" ? "scale(1.07)" : "scale(1)",
                  willChange: "transform",
                }}
              >
                P
              </span>
            </div>

            <div className="flex flex-col items-center gap-0.5">
              <h2 className="text-base sm:text-2xl font-serif font-light tracking-wide" style={{ color: "#335842" }}>
                Prateek
              </h2>
              <p className="text-[9px] sm:text-[11px] font-sans tracking-widest uppercase" style={{ color: "#6a9478" }}>
                Family &amp; friends
              </p>
            </div>

            <div
              className="mt-1 px-3 sm:px-5 py-1 sm:py-1.5 rounded-full text-[9px] sm:text-xs font-dm-mono uppercase tracking-widest transition-all duration-300"
              style={{
                border: hovered === "prateek" ? "1px solid #7a9e88" : "1px solid rgba(110,160,130,0.35)",
                color: hovered === "prateek" ? "#3d6850" : "rgba(70,110,85,0.45)",
                background: hovered === "prateek" ? "rgba(255,255,255,0.4)" : "transparent",
              }}
            >
              Enter
            </div>
          </div>
        </button>

        {/* ── Mahek card (dusty rose) ── */}
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
              background: hovered === "mahek"
                ? "linear-gradient(155deg, #c8a4ac 0%, #b89098 45%, #ccb898 100%)"
                : "linear-gradient(155deg, #d0b0b8 0%, #c0a0a8 55%, #d4c0a4 100%)",
            }}
          />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#b08898] to-transparent opacity-70" />

          <div className="relative z-10 flex flex-col items-center py-6 px-3 sm:py-10 sm:px-6 gap-2 sm:gap-4">
            <span className="text-[0.55rem] sm:text-[0.6rem] tracking-[0.35em] uppercase font-dm-mono font-bold" style={{ color: "#7a4858" }}>
              Team Bride
            </span>

            <div className="w-full flex items-center justify-center py-3 sm:py-6">
              <span
                className="font-mea-culpa leading-none select-none transition-transform duration-500"
                style={{
                  fontSize: "clamp(5rem, 18vw, 9rem)",
                  color: "#6a3848",
                  textShadow: "0 3px 18px rgba(150,70,90,0.18)",
                  transform: hovered === "mahek" ? "scale(1.07)" : "scale(1)",
                  willChange: "transform",
                }}
              >
                M
              </span>
            </div>

            <div className="flex flex-col items-center gap-0.5">
              <h2 className="text-base sm:text-2xl font-serif font-light tracking-wide" style={{ color: "#5a2838" }}>
                Mahek
              </h2>
              <p className="text-[9px] sm:text-[11px] font-sans tracking-widest uppercase" style={{ color: "#a07080" }}>
                Family &amp; friends
              </p>
            </div>

            <div
              className="mt-1 px-3 sm:px-5 py-1 sm:py-1.5 rounded-full text-[9px] sm:text-xs font-dm-mono uppercase tracking-widest transition-all duration-300"
              style={{
                border: hovered === "mahek" ? "1px solid #b08898" : "1px solid rgba(160,110,120,0.35)",
                color: hovered === "mahek" ? "#6a3848" : "rgba(110,60,70,0.45)",
                background: hovered === "mahek" ? "rgba(255,255,255,0.4)" : "transparent",
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
