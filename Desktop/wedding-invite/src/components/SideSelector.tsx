import React, { useState } from "react";

export type Side = "prateek" | "mahek";

interface SideSelectorProps {
  onSelect: (side: Side) => void;
}

export const SideSelector: React.FC<SideSelectorProps> = ({ onSelect }) => {
  const [hovered, setHovered] = useState<Side | null>(null);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-background relative overflow-hidden py-16 px-4">
      {/* Background ambient lighting */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, hsl(var(--gold) / 0.18) 0%, transparent 65%)",
        }}
      />

      <div className="flex flex-col items-center mb-12 relative z-10 text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground font-sans mb-3 font-semibold">
          Welcome to the wedding celebration of
        </p>
        <h1 className="font-great-vibes text-[3.8rem] min-[750px]:text-7xl lg:text-8xl font-light tracking-wide gold-text pt-2 leading-[1.15]">
          Mahek &amp; Prateek
        </h1>
        <div className="dishoom-divider mt-6 mb-4">
          <span>✦</span>
        </div>
        <p className="text-sm sm:text-base tracking-[0.15em] text-muted-foreground leading-relaxed text-center mt-2 max-w-[340px] min-[750px]:max-w-none mx-auto font-sans">
          Who are you celebrating with today?
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 md:gap-10 px-4 md:px-6 w-full max-w-2xl relative z-10">
        {/* Prateek Card */}
        <button
          onClick={() => onSelect("prateek")}
          onMouseEnter={() => setHovered("prateek")}
          onMouseLeave={() => setHovered(null)}
          aria-label="I'm here for Prateek"
          className={`group relative flex-1 transition-all duration-500 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl border bg-white/80 p-8 md:p-10 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 ${
            hovered === "prateek"
              ? "scale-[1.03] border-gold shadow-xl"
              : "border-border/80"
          } ${hovered === "mahek" ? "opacity-60" : "opacity-100"}`}
        >
          <div className="flex flex-col items-center gap-2 relative z-10">
            <span className="text-[0.65rem] tracking-[0.3em] uppercase text-muted-foreground font-sans font-bold">
              Team Groom
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-secondary">
              Prateek
            </h2>
            <p className="text-xs text-muted-foreground font-sans tracking-wide text-center mt-1">
              Family &amp; friends of Prateek
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border-2 border-gold/40 bg-gradient-to-br from-[#f0f6f3] to-[#e8ede6] flex items-center justify-center shadow-sm group-hover:border-gold/70 group-hover:shadow-md transition-all duration-500">
              <span className="font-mea-culpa text-7xl sm:text-8xl text-secondary leading-none select-none">P</span>
            </div>
          </div>
        </button>

        {/* Mahek Card */}
        <button
          onClick={() => onSelect("mahek")}
          onMouseEnter={() => setHovered("mahek")}
          onMouseLeave={() => setHovered(null)}
          aria-label="I'm here for Mahek"
          className={`group relative flex-1 transition-all duration-500 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl border bg-white/80 p-8 md:p-10 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 ${
            hovered === "mahek"
              ? "scale-[1.03] border-gold shadow-xl"
              : "border-border/80"
          } ${hovered === "prateek" ? "opacity-60" : "opacity-100"}`}
        >
          <div className="flex flex-col items-center gap-2 relative z-10">
            <span className="text-[0.65rem] tracking-[0.3em] uppercase text-muted-foreground font-sans font-bold">
              Team Bride
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-secondary">
              Mahek
            </h2>
            <p className="text-xs text-muted-foreground font-sans tracking-wide text-center mt-1">
              Family &amp; friends of Mahek
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border-2 border-gold/40 bg-gradient-to-br from-[#f6f2ea] to-[#f0ebe0] flex items-center justify-center shadow-sm group-hover:border-gold/70 group-hover:shadow-md transition-all duration-500">
              <span className="font-mea-culpa text-7xl sm:text-8xl text-secondary leading-none select-none">M</span>
            </div>
          </div>
        </button>
      </div>
    </section>
  );
};
