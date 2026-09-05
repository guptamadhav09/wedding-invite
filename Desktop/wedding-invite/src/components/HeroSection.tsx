import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  variant?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  // Live countdown timer state
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    let target = new Date("2026-12-12T19:00:00+05:30").getTime();
    let diff = target - now;

    // If target is in the past relative to system clock, target December 12 of current year
    if (diff <= 0) {
      target = new Date(`${new Date().getFullYear()}-12-12T19:00:00+05:30`).getTime();
      diff = target - now;
      if (diff <= 0) {
        target = new Date(`${new Date().getFullYear() + 1}-12-12T19:00:00+05:30`).getTime();
        diff = target - now;
      }
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToContent = () => {
    const el = document.getElementById("story");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between items-center bg-[#faf7f2] pt-16 sm:pt-20 pb-16 px-4"
    >
      {/* Soft luxury ambient background lighting (NO background image) */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle at 50% 35%, hsl(var(--gold) / 0.15) 0%, transparent 70%)",
        }}
      />

      {/* Top Spacer */}
      <div className="h-2 sm:h-6" />

      {/* ── Main Hero Content (Always 100% visible, no fading or disappearing) ── */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto my-auto py-4 sm:py-6">
        {/* ── Sacred Auspicious Invocation: Lord Ganesha (Bhagwan Ji) ── */}
        <div className="flex flex-col items-center justify-center mb-5 sm:mb-7">
          {/* Elegant Golden Ganesha Line-Art Motif */}
          <svg
            viewBox="0 0 64 64"
            className="w-12 h-12 sm:w-14 sm:h-14 mb-2 text-[#b88d37] drop-shadow-xs"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-label="Lord Ganesha"
          >
            {/* Crown / Mukut */}
            <path d="M26 13 L32 6 L38 13 L34 16 L30 16 Z" fill="rgba(184, 141, 55, 0.15)" />
            <path d="M30 6 L32 3 L34 6" />
            <circle cx="32" cy="2" r="1.2" fill="#c0392b" stroke="none" />

            {/* Auspicious Tilak on Forehead */}
            <path d="M28 17 Q32 19 36 17" stroke="#b88d37" strokeWidth="1.5" />
            <path d="M32 14 L32 20" stroke="#c0392b" strokeWidth="2" />
            <circle cx="32" cy="18" r="1" fill="#c0392b" stroke="none" />

            {/* Left Ear */}
            <path d="M25 21 C17 21 16 31 22 35 C25 37 27 36 27 34" />

            {/* Right Ear */}
            <path d="M39 21 C47 21 48 31 42 35 C39 37 37 36 37 34" />

            {/* Gracefully Curving Face & Trunk */}
            <path d="M26 23 C26 21 29 19 32 19 C35 19 38 21 38 23 C38 28 35 34 35 41 C35 47 38 51 37 53 C36 55 33 56 30 54 C28 52 28 48 31 46 C33 45 35 47 34 49" />

            {/* Sweet Laddu / Modak */}
            <circle cx="29" cy="48" r="2.2" fill="#dfc082" stroke="#b88d37" strokeWidth="1" />

            {/* Eyes */}
            <ellipse cx="29.5" cy="23.5" rx="1.2" ry="0.6" fill="#3d2b1f" stroke="none" />
            <ellipse cx="34.5" cy="23.5" rx="1.2" ry="0.6" fill="#3d2b1f" stroke="none" />
          </svg>

          {/* Traditional Sanskrit Shloka Header */}
          <p className="font-tiro text-sm sm:text-base md:text-lg tracking-[0.25em] text-[#8f6d2d] font-semibold select-none">
            ॥ श्री गणेशाय नमः ॥
          </p>
        </div>

        {/* THE WEDDING OF */}
        <p className="font-serif tracking-[0.35em] text-xs sm:text-sm uppercase text-[#b69963] font-semibold mb-3 sm:mb-5">
          The Wedding Of
        </p>

        {/* Couple Names (Prateek & Mahek) */}
        <h1 className="font-serif text-[#3d2b1f] font-bold leading-tight flex items-baseline justify-center whitespace-nowrap select-none drop-shadow-2xs text-4xl sm:text-6xl md:text-7xl">
          <span>Prateek</span>
          <span className="font-great-vibes text-gold font-normal px-2.5 sm:px-4 text-[1.1em] align-baseline">
            &amp;
          </span>
          <span>Mahek</span>
        </h1>

        {/* Thin Gold Divider Line */}
        <div className="w-48 sm:w-64 h-[1.5px] bg-[#cbb085]/60 mx-auto my-5 sm:my-6" />

        {/* Date */}
        <p className="font-serif text-xl sm:text-2xl text-[#523d2e] tracking-wide font-medium mb-1.5">
          December 12, 2026
        </p>

        {/* Venue */}
        <p className="font-serif text-xs sm:text-sm tracking-[0.28em] uppercase text-[#7d6453] font-semibold">
          Evara, Vasundhara
        </p>

        {/* ── 4 Countdown Timer Cards ── */}
        <div className="flex items-center justify-center gap-2.5 sm:gap-4 mt-8 sm:mt-10">
          {/* DAYS */}
          <div className="w-18 h-22 sm:w-24 sm:h-28 rounded-2xl bg-[#fffdfa] border border-[#e8dfd3] shadow-md flex flex-col items-center justify-center p-2 transition-transform hover:scale-103">
            <span className="font-serif text-2xl sm:text-4xl font-bold text-[#661b24] leading-none">
              {String(timeLeft.days).padStart(2, "0")}
            </span>
            <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#887063] font-semibold mt-1.5">
              Days
            </span>
          </div>

          {/* HOURS */}
          <div className="w-18 h-22 sm:w-24 sm:h-28 rounded-2xl bg-[#fffdfa] border border-[#e8dfd3] shadow-md flex flex-col items-center justify-center p-2 transition-transform hover:scale-103">
            <span className="font-serif text-2xl sm:text-4xl font-bold text-[#661b24] leading-none">
              {String(timeLeft.hours).padStart(2, "0")}
            </span>
            <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#887063] font-semibold mt-1.5">
              Hours
            </span>
          </div>

          {/* MINUTES */}
          <div className="w-18 h-22 sm:w-24 sm:h-28 rounded-2xl bg-[#fffdfa] border border-[#e8dfd3] shadow-md flex flex-col items-center justify-center p-2 transition-transform hover:scale-103">
            <span className="font-serif text-2xl sm:text-4xl font-bold text-[#661b24] leading-none">
              {String(timeLeft.minutes).padStart(2, "0")}
            </span>
            <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#887063] font-semibold mt-1.5">
              Minutes
            </span>
          </div>

          {/* SECONDS */}
          <div className="w-18 h-22 sm:w-24 sm:h-28 rounded-2xl bg-[#fffdfa] border border-[#e8dfd3] shadow-md flex flex-col items-center justify-center p-2 transition-transform hover:scale-103">
            <span className="font-serif text-2xl sm:text-4xl font-bold text-[#661b24] leading-none">
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
            <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#887063] font-semibold mt-1.5">
              Seconds
            </span>
          </div>
        </div>
      </div>

      {/* Scroll to explore indicator */}
      <button
        onClick={scrollToContent}
        className="relative z-10 flex flex-col items-center gap-1.5 text-[#887063] hover:text-secondary transition-colors cursor-pointer group mt-6"
        aria-label="Scroll to story"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase font-dm-mono font-medium">
          Scroll to explore
        </span>
        <ChevronDown className="w-4 h-4 text-gold-dark animate-bounce transition-transform group-hover:scale-110" />
      </button>
    </section>
  );
};
