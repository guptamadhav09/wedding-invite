import React from "react";
import { Coffee, Heart, Sparkles, MapPin } from "lucide-react";

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="pt-20 sm:pt-28 pb-20 sm:pb-28 px-4 sm:px-6 bg-[#faf8f5] relative overflow-hidden scroll-mt-24">
      {/* Background soft ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background:
            "radial-gradient(circle at 50% 25%, hsl(var(--gold) / 0.15) 0%, transparent 70%)",
        }}
      />

      {/* ── Section Header ── */}
      <div className="max-w-2xl mx-auto text-center mb-16 sm:mb-20 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/15 text-gold-dark text-[10px] font-dm-mono uppercase tracking-[3px] font-bold mb-3">
          <Sparkles className="w-3 h-3 text-gold-dark" />
          <span>Our Journey</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif gold-text font-light mb-3">
          How It All Began?
        </h2>
        <div className="dishoom-divider">
          <span>✦</span>
        </div>
        <p className="font-serif italic text-muted-foreground mt-4 text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
          Every love story has a beginning.
          <span className="block text-secondary font-medium mt-1">
            Theirs began at <strong className="font-semibold text-secondary">Colocal</strong>—her favourite place, and soon, theirs.
          </span>
        </p>
      </div>

      {/* ── Open Vertical Timeline (No Boxes) ── */}
      <div className="max-w-2xl mx-auto relative z-10 pl-6 sm:pl-10">

        {/* Continuous Vertical Timeline Line */}
        <div className="absolute left-[15px] sm:left-[23px] top-3 bottom-8 w-[2px] bg-gradient-to-b from-gold/70 via-gold/40 to-gold/70 pointer-events-none" />

        <div className="space-y-16 sm:space-y-20">

          {/* ══ TIMELINE INSTANCE 01 ══ */}
          <div className="relative pl-6 sm:pl-10">
            {/* Timeline Node Circle */}
            <div className="absolute -left-[23px] sm:-left-[35px] top-1 w-8 h-8 rounded-full bg-[#faf8f5] border-2 border-gold flex items-center justify-center shadow-xs">
              <Coffee className="w-3.5 h-3.5 text-gold-dark" />
            </div>

            {/* Instance Header */}
            <div className="mb-3">
              <span className="font-dm-mono text-[10px] tracking-[3px] uppercase text-gold-dark font-bold block mb-1">
                Chapter 01 · Colocal Debut
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-secondary font-semibold">
                The Cookie Debate
              </h3>
            </div>

            <p className="font-sans text-xs sm:text-sm text-muted-foreground mb-4 italic">
              It started over a recommendation that was subject to immediate review...
            </p>

            {/* Dialogue stream */}
            <div className="space-y-2.5 my-4">
              <p className="font-serif text-base sm:text-lg text-secondary leading-relaxed">
                <span className="font-dm-mono text-[10px] tracking-wider uppercase text-primary font-bold mr-2">She:</span>
                “You have to try the chocolate cookie. It’s my favourite.”
              </p>
              <p className="font-serif text-base sm:text-lg text-secondary leading-relaxed">
                <span className="font-dm-mono text-[10px] tracking-wider uppercase text-gold-dark font-bold mr-2">He:</span>
                “Your favourite? Now I have expectations.”
              </p>

              <div className="py-1">
                <span className="font-caveat text-lg sm:text-xl text-gold-dark italic">
                  — After one bite —
                </span>
              </div>

              <p className="font-serif text-base sm:text-lg text-secondary leading-relaxed">
                <span className="font-dm-mono text-[10px] tracking-wider uppercase text-gold-dark font-bold mr-2">He:</span>
                “Really? This one?”
              </p>
              <p className="font-serif text-base sm:text-lg text-secondary leading-relaxed">
                <span className="font-dm-mono text-[10px] tracking-wider uppercase text-primary font-bold mr-2">She:</span>
                “Yes. I stand by it.”
              </p>
              <p className="font-serif text-base sm:text-lg text-secondary leading-relaxed">
                <span className="font-dm-mono text-[10px] tracking-wider uppercase text-gold-dark font-bold mr-2">He:</span>
                “I may have to rethink your food recommendations.”
              </p>
            </div>

            {/* Instance takeaway */}
            <p className="font-serif italic text-sm sm:text-base text-secondary/90 leading-relaxed pt-2 border-t border-gold/25">
              She laughed. He stayed. And the cookie became the beginning of something far more meaningful.
            </p>
          </div>

          {/* ══ TIMELINE INSTANCE 02 ══ */}
          <div className="relative pl-6 sm:pl-10">
            {/* Timeline Node Circle */}
            <div className="absolute -left-[23px] sm:-left-[35px] top-1 w-8 h-8 rounded-full bg-[#faf8f5] border-2 border-gold flex items-center justify-center shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
            </div>

            <div className="mb-3">
              <span className="font-dm-mono text-[10px] tracking-[3px] uppercase text-gold-dark font-bold block mb-1">
                Chapter 02 · Shared Roots
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-secondary font-semibold">
                Strangely Familiar
              </h3>
            </div>

            <p className="font-sans text-xs sm:text-sm text-muted-foreground mb-4 italic">
              As they talked about family, childhood, and the values that shaped them, they discovered how much they had in common.
            </p>

            <div className="space-y-2.5 my-4">
              <p className="font-serif text-base sm:text-lg text-secondary leading-relaxed">
                <span className="font-dm-mono text-[10px] tracking-wider uppercase text-primary font-bold mr-2">She:</span>
                “Your family does that too?”
              </p>
              <p className="font-serif text-base sm:text-lg text-secondary leading-relaxed">
                <span className="font-dm-mono text-[10px] tracking-wider uppercase text-gold-dark font-bold mr-2">He:</span>
                “Exactly the same way.”
              </p>
              <p className="font-serif text-base sm:text-lg text-secondary leading-relaxed">
                <span className="font-dm-mono text-[10px] tracking-wider uppercase text-primary font-bold mr-2">She:</span>
                “That’s strange.”
              </p>
              <p className="font-serif text-base sm:text-lg text-secondary leading-relaxed">
                <span className="font-dm-mono text-[10px] tracking-wider uppercase text-gold-dark font-bold mr-2">He:</span>
                “Or maybe familiar.”
              </p>
            </div>

            <p className="font-serif italic text-sm sm:text-base text-secondary/90 leading-relaxed pt-2 border-t border-gold/25">
              Finding someone whose warmth, values, and family quirks mirrored your own made everything feel like coming home.
            </p>
          </div>

          {/* ══ TIMELINE INSTANCE 03 ══ */}
          <div className="relative pl-6 sm:pl-10">
            {/* Timeline Node Circle */}
            <div className="absolute -left-[23px] sm:-left-[35px] top-1 w-8 h-8 rounded-full bg-[#faf8f5] border-2 border-gold flex items-center justify-center shadow-xs">
              <Coffee className="w-3.5 h-3.5 text-gold-dark" />
            </div>

            <div className="mb-3">
              <span className="font-dm-mono text-[10px] tracking-[3px] uppercase text-gold-dark font-bold block mb-1">
                Chapter 03 · The Compatibility Test
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-secondary font-semibold">
                Coffee or Chai?
              </h3>
            </div>

            <p className="font-sans text-xs sm:text-sm text-muted-foreground mb-4 italic">
              Then came the most important question of all.
            </p>

            <div className="space-y-2.5 my-4">
              <p className="font-serif text-base sm:text-lg text-secondary leading-relaxed">
                <span className="font-dm-mono text-[10px] tracking-wider uppercase text-primary font-bold mr-2">She:</span>
                “Coffee or chai?”
              </p>
              <p className="font-serif text-base sm:text-lg text-secondary leading-relaxed">
                <span className="font-dm-mono text-[10px] tracking-wider uppercase text-gold-dark font-bold mr-2">He:</span>
                “Coffee.”
              </p>
              <p className="font-serif text-base sm:text-lg text-secondary leading-relaxed">
                <span className="font-dm-mono text-[10px] tracking-wider uppercase text-primary font-bold mr-2">She:</span>
                “Good answer.”
              </p>

              <div className="py-1">
                <span className="font-caveat text-lg sm:text-xl text-gold-dark italic">
                  — The conversation flowed effortlessly —
                </span>
              </div>

              <p className="font-serif text-base sm:text-lg text-secondary leading-relaxed">
                <span className="font-dm-mono text-[10px] tracking-wider uppercase text-gold-dark font-bold mr-2">He:</span>
                “We’ve been talking for a while.”
              </p>
              <p className="font-serif text-base sm:text-lg text-secondary leading-relaxed">
                <span className="font-dm-mono text-[10px] tracking-wider uppercase text-primary font-bold mr-2">She:</span>
                “It doesn’t feel like it.”
              </p>
            </div>

            <p className="font-serif italic text-sm sm:text-base text-secondary/90 leading-relaxed pt-2 border-t border-gold/25">
              One meeting became many, and friendship slowly turned into something more.
            </p>
          </div>

          {/* ══ TIMELINE INSTANCE 04 (FINALE) ══ */}
          <div className="relative pl-6 sm:pl-10">
            {/* Timeline Node Circle */}
            <div className="absolute -left-[23px] sm:-left-[35px] top-1 w-8 h-8 rounded-full bg-[#faf8f5] border-2 border-gold flex items-center justify-center shadow-xs">
              <Heart className="w-3.5 h-3.5 text-gold fill-gold/30" />
            </div>

            <div className="mb-3">
              <span className="font-dm-mono text-[10px] tracking-[3px] uppercase text-gold-dark font-bold block mb-1">
                Chapter 04 · Forever Began
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-secondary font-semibold">
                To Forever &amp; Beyond
              </h3>
            </div>

            <p className="font-sans text-xs sm:text-sm text-muted-foreground mb-4">
              What began at one table, over one debatable cookie and a shared love for coffee, became a love they wanted to carry into everything ahead.
            </p>

            <div className="space-y-2 py-3 my-3">
              <p className="font-serif text-xl sm:text-2xl text-secondary font-medium">
                <span className="font-dm-mono text-xs uppercase tracking-wider text-primary font-bold mr-2">She:</span>
                “Coffee?”
              </p>
              <p className="font-serif text-xl sm:text-2xl text-secondary font-medium">
                <span className="font-dm-mono text-xs uppercase tracking-wider text-gold-dark font-bold mr-2">He:</span>
                “Always.”
              </p>
            </div>

            <p className="font-caveat text-2xl sm:text-3xl text-primary font-medium my-4">
              “And just like that, their forever began.”
            </p>

            {/* Venue Polaroid Photo */}
            <div className="mt-6 max-w-md rounded-2xl overflow-hidden shadow-md border-4 border-white bg-white">
              <img
                src="/assets/wedding-nighttime-CsWYzfaJ.webp"
                alt="Evara, Vasundhara"
                className="w-full h-52 sm:h-60 object-cover"
              />
              <div className="p-3.5 bg-white text-center">
                <div className="flex items-center justify-center gap-1 text-primary text-xs font-semibold mb-0.5">
                  <MapPin className="w-3 h-3 text-gold-dark" />
                  <span>Evara, Vasundhara</span>
                </div>
                <p className="font-serif italic text-xs text-secondary">
                  Friday, 12th December 2026
                </p>
                <span className="font-dm-mono text-[9px] uppercase tracking-wider text-muted-foreground mt-0.5 block">
                  Where forever begins
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
