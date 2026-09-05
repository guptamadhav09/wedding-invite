import React, { useState, useEffect, useRef } from "react";

interface EnvelopeIntroProps {
  onComplete: () => void;
}

type Stage = "sealed" | "opening" | "card_presented" | "entering";

export const EnvelopeIntro: React.FC<EnvelopeIntroProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<Stage>("sealed");
  const autoAdvanceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current);
    };
  }, []);

  const handleOpen = () => {
    if (stage === "sealed") {
      // 1. Begin unsealing & flap opening
      setStage("opening");

      // 2. Card emerges and presents itself as the hero centerpiece
      setTimeout(() => {
        setStage("card_presented");
      }, 700);

      // 3. Auto-advance smoothly after 4 seconds of viewing if user doesn't click
      autoAdvanceRef.current = setTimeout(() => {
        handleEnter();
      }, 4500);
    } else if (stage === "card_presented") {
      handleEnter();
    }
  };

  const handleEnter = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current);
    if (stage === "entering") return;

    setStage("entering");
    setTimeout(() => {
      onComplete();
    }, 650);
  };

  const handleSkip = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current);
    onComplete();
  };

  const isOpened = stage !== "sealed";
  const isCardUp = stage === "card_presented" || stage === "entering";

  return (
    <div
      onClick={handleOpen}
      role="button"
      tabIndex={0}
      aria-label="Wedding Invitation Envelope"
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-between py-8 px-4 overflow-hidden select-none cursor-pointer"
      style={{
        background: "radial-gradient(ellipse at 50% 30%, #f7f0f3 0%, #ebe0e5 55%, #dfd0d6 100%)",
        opacity: stage === "entering" ? 0 : 1,
        transition: "opacity 650ms cubic-bezier(0.4, 0, 0.2, 1)",
        pointerEvents: stage === "entering" ? "none" : "auto",
      }}
    >
      {/* ── Top Bar: Brand & Skip Button ── */}
      <div className="w-full max-w-lg flex items-center justify-between z-50">
        <span className="font-dm-mono text-[9px] tracking-[4px] uppercase text-[#88677a] font-semibold">
          ✦ Mahek &amp; Prateek
        </span>
        <button
          onClick={handleSkip}
          className="text-[10px] tracking-[2px] uppercase font-dm-mono text-[#88677a] hover:text-[#5a364b] px-3.5 py-1.5 rounded-full border border-[#88677a]/25 hover:border-[#88677a]/60 bg-white/40 backdrop-blur-xs transition-all shadow-2xs"
        >
          Skip to Invite ✕
        </button>
      </div>

      {/* ── Ambient Soft Glow Orbs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-72 h-72 rounded-full blur-3xl opacity-40 -top-10 -left-10"
          style={{ background: "#e8c9d6" }}
        />
        <div
          className="absolute w-80 h-80 rounded-full blur-3xl opacity-30 -bottom-10 -right-10"
          style={{ background: "#c5d9ce" }}
        />
      </div>

      {/* ── ENVELOPE & INVITATION CARD CONTAINER ── */}
      <div
        className="relative my-auto flex items-center justify-center"
        style={{
          width: "min(90vw, 380px)",
          height: "min(60vw, 245px)",
          perspective: "1200px",
        }}
      >
        {/* ── INVITATION CARD (EMERGES UPWARD & BECOMES CENTERPIECE) ── */}
        <div
          className="absolute inset-x-2 z-30 transition-all pointer-events-auto"
          style={{
            bottom: 6,
            transform: isCardUp
              ? "translateY(-72px) scale(1.06)"
              : isOpened
              ? "translateY(-20px) scale(0.98)"
              : "translateY(0) scale(0.95)",
            opacity: isOpened ? 1 : 0,
            transitionDuration: isCardUp ? "900ms" : "400ms",
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            boxShadow: isCardUp
              ? "0 28px 60px -15px rgba(90, 50, 70, 0.28), 0 0 0 1px rgba(212, 185, 145, 0.5)"
              : "none",
          }}
        >
          <div
            className="rounded-2xl p-6 sm:p-7 text-center border border-[#dfc8a8]/60 overflow-hidden relative"
            style={{
              background: "linear-gradient(165deg, #fffefa 0%, #faf4ea 55%, #f6ece0 100%)",
            }}
          >
            {/* Delicate gold leaf corner borders */}
            <div className="absolute top-2 left-2 text-[#cbb085]/40 text-xs">✤</div>
            <div className="absolute top-2 right-2 text-[#cbb085]/40 text-xs">✤</div>
            <div className="absolute bottom-2 left-2 text-[#cbb085]/40 text-xs">✤</div>
            <div className="absolute bottom-2 right-2 text-[#cbb085]/40 text-xs">✤</div>

            {/* Namaste / Blessings header */}
            <p className="font-dm-mono text-[8px] tracking-[4px] uppercase text-[#967d5e] font-bold mb-1.5">
              With Joy, Love &amp; Blessings
            </p>

            <h2
              className="font-great-vibes text-[#462335] leading-none mb-1 select-none gold-text"
              style={{ fontSize: "clamp(2.1rem, 8vw, 2.9rem)" }}
            >
              Mahek &amp; Prateek
            </h2>

            <div className="flex items-center justify-center gap-2 my-2.5">
              <div className="w-10 h-px bg-[#cbb085]/50" />
              <span className="text-gold text-[10px]">✦</span>
              <div className="w-10 h-px bg-[#cbb085]/50" />
            </div>

            <p className="font-serif italic text-xs sm:text-sm text-[#664b58] leading-relaxed mb-3">
              invite you to celebrate their wedding celebrations with family &amp; friends
            </p>

            {/* Date and Venue Pill */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#f2e7d3]/70 border border-[#dfc8a8] mb-4">
              <span className="font-dm-mono text-[8.5px] sm:text-[9.5px] tracking-[2px] uppercase font-bold text-[#7d5b35]">
                11–12 December 2025 · Evara, Vasundhara
              </span>
            </div>

            {/* Glowing CTA Button */}
            <div className="mt-1">
              <button
                onClick={handleEnter}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-dm-mono uppercase tracking-[2px] font-bold text-white shadow-md hover:shadow-lg transition-all transform hover:scale-103 cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, #a87948 0%, #855b33 100%)",
                }}
              >
                <span>Step Inside</span>
                <span className="text-gold-light text-sm">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* ── ENVELOPE SLEEVE / POCKET (BACKGROUND CASING) ── */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl transition-all duration-700"
          style={{
            background: "linear-gradient(150deg, #c49ba9 0%, #b58998 50%, #9e7382 100%)",
            boxShadow: "0 20px 50px rgba(90, 45, 65, 0.2), 0 1px 3px rgba(0,0,0,0.1)",
            transform: isCardUp ? "scale(0.96) translateY(28px)" : "scale(1) translateY(0)",
            opacity: isCardUp ? 0.55 : 1,
            zIndex: 10,
          }}
        >
          {/* Inner liner (visible inside the pocket) */}
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: "linear-gradient(180deg, #f5eddf 0%, #ebe1d1 100%)",
            }}
          />

          {/* SVG POCKET FOLDS (Vector clean edges, zero 3D clipping) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 380 245"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="pocketGradLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c094a3" />
                <stop offset="100%" stopColor="#a37685" />
              </linearGradient>
              <linearGradient id="pocketGradRight" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#c094a3" />
                <stop offset="100%" stopColor="#a37685" />
              </linearGradient>
              <linearGradient id="pocketGradBottom" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor="#b48797" />
                <stop offset="100%" stopColor="#966c7b" />
              </linearGradient>
            </defs>

            {/* Left side fold */}
            <polygon points="0,0 190,135 0,245" fill="url(#pocketGradLeft)" opacity="0.95" />

            {/* Right side fold */}
            <polygon points="380,0 190,135 380,245" fill="url(#pocketGradRight)" opacity="0.95" />

            {/* Bottom triangular fold */}
            <polygon points="0,245 190,122 380,245" fill="url(#pocketGradBottom)" />

            {/* Elegant gold foil trim line along the bottom fold */}
            <line
              x1="0"
              y1="245"
              x2="190"
              y2="122"
              stroke="#e8d2b0"
              strokeWidth="0.8"
              opacity="0.45"
            />
            <line
              x1="380"
              y1="245"
              x2="190"
              y2="122"
              stroke="#e8d2b0"
              strokeWidth="0.8"
              opacity="0.45"
            />
          </svg>
        </div>

        {/* ── TOP TRIANGULAR FLAP (3D HINGED FOLD) ── */}
        <div
          className="absolute top-0 left-0 right-0 origin-top transition-transform"
          style={{
            height: "135px",
            transformStyle: "preserve-3d",
            transform: isOpened ? "rotateX(-180deg)" : "rotateX(0deg)",
            transitionDuration: "750ms",
            transitionTimingFunction: "cubic-bezier(0.33, 1, 0.68, 1)",
            zIndex: isOpened ? 5 : 40,
          }}
        >
          {/* Flap Outer Face (when closed) */}
          <div
            className="w-full h-full"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <svg
              className="w-full h-full drop-shadow-md"
              viewBox="0 0 380 135"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="flapOuterGrad" x1="50%" y1="0%" x2="50%" y2="100%">
                  <stop offset="0%" stopColor="#be93a2" />
                  <stop offset="100%" stopColor="#ad8090" />
                </linearGradient>
              </defs>
              <polygon points="0,0 380,0 190,135" fill="url(#flapOuterGrad)" />
              {/* Delicate gold rim along flap edge */}
              <line x1="0" y1="0" x2="190" y2="135" stroke="#f0ddbf" strokeWidth="1" opacity="0.6" />
              <line x1="380" y1="0" x2="190" y2="135" stroke="#f0ddbf" strokeWidth="1" opacity="0.6" />
            </svg>
          </div>

          {/* Flap Inner Face (when open/folded back) */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateX(180deg)",
            }}
          >
            <svg
              className="w-full h-full"
              viewBox="0 0 380 135"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="flapInnerGrad" x1="50%" y1="100%" x2="50%" y2="0%">
                  <stop offset="0%" stopColor="#f3eae0" />
                  <stop offset="100%" stopColor="#e8ded1" />
                </linearGradient>
              </defs>
              <polygon points="0,135 380,135 190,0" fill="url(#flapInnerGrad)" />
              <line x1="0" y1="135" x2="190" y2="0" stroke="#d5be9b" strokeWidth="0.8" opacity="0.4" />
              <line x1="380" y1="135" x2="190" y2="0" stroke="#d5be9b" strokeWidth="0.8" opacity="0.4" />
            </svg>
          </div>
        </div>

        {/* ── WAX SEAL (STAMPED M & P EMBLEM) ── */}
        <div
          className="absolute z-50 transition-all pointer-events-none"
          style={{
            top: "105px",
            transform: isOpened
              ? "scale(0.35) translateY(-25px)"
              : "scale(1) translateY(0)",
            opacity: isOpened ? 0 : 1,
            transitionDuration: "450ms",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <div
            className="w-18 h-18 sm:w-20 sm:h-20 rounded-full flex items-center justify-center relative"
            style={{
              background: "radial-gradient(circle at 35% 35%, #7aa087 0%, #527a60 65%, #3e624b 100%)",
              boxShadow: "0 6px 20px rgba(45, 75, 55, 0.38), inset 0 2px 3px rgba(255, 255, 255, 0.35)",
              border: "1.5px solid rgba(220, 245, 225, 0.45)",
            }}
          >
            {/* Inner embossed ring */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-white/30 flex items-center justify-center">
              <span
                className="font-great-vibes text-[#f8fff9] select-none text-xl sm:text-2xl"
                style={{
                  textShadow: "0 1px 3px rgba(0,0,0,0.45)",
                }}
              >
                M&amp;P
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Prompt Indicator ── */}
      <div className="relative z-50 text-center pb-3">
        {!isOpened ? (
          <p className="font-dm-mono text-[9px] tracking-[4px] uppercase text-[#7a546b] animate-pulse font-semibold">
            ✦ Tap Envelope to Open ✦
          </p>
        ) : (
          <p className="font-serif italic text-xs text-[#846377]">
            Tap card or "Step Inside" to continue
          </p>
        )}
      </div>
    </div>
  );
};
