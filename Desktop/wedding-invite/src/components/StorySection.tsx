import React from "react";
import { Coffee, Heart, Sparkles, MapPin } from "lucide-react";

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-16 sm:py-24 px-4 bg-[#faf8f5] relative overflow-hidden">
      {/* Background soft glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-35"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, hsl(var(--gold) / 0.15) 0%, transparent 70%)",
        }}
      />

      {/* ── Section Header ── */}
      <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-dm-mono uppercase tracking-[3px] font-bold mb-2.5">
          <Sparkles className="w-3 h-3 text-gold-dark" />
          <span>Our Journey</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif gold-text font-light mb-3">
          Our Love Story
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

      {/* ── Story Cards Grid ── */}
      <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8 relative z-10">

        {/* ── ACT 1: THE COOKIE DEBATE ── */}
        <div className="bg-white border border-border/80 rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-all">
          <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-border/60">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-full bg-primary/10 text-primary font-dm-mono text-xs font-bold flex items-center justify-center">
                1
              </span>
              <h3 className="font-serif text-2xl text-secondary font-semibold">
                The Cookie Debate
              </h3>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-dm-mono uppercase tracking-wider text-gold-dark font-bold bg-gold/10 px-2.5 py-0.5 rounded-full">
              <Coffee className="w-3 h-3" /> Colocal
            </span>
          </div>

          <p className="font-sans text-xs sm:text-sm text-muted-foreground mb-4 italic">
            It started over a recommendation that was subject to immediate review...
          </p>

          <div className="space-y-2.5 py-1">
            <p className="font-serif text-base sm:text-lg text-secondary leading-relaxed">
              <span className="font-dm-mono text-[10px] tracking-wider uppercase text-primary font-bold mr-2">She:</span>
              “You have to try the chocolate cookie. It’s my favourite.”
            </p>
            <p className="font-serif text-base sm:text-lg text-secondary leading-relaxed">
              <span className="font-dm-mono text-[10px] tracking-wider uppercase text-gold-dark font-bold mr-2">He:</span>
              “Your favourite? Now I have expectations.”
            </p>

            <div className="py-2 text-center">
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

          <div className="mt-5 pt-4 border-t border-border/60">
            <p className="font-serif italic text-sm sm:text-base text-secondary/90 leading-relaxed">
              She laughed. He stayed. And the cookie became the beginning of something far more meaningful.
            </p>
          </div>
        </div>

        {/* ── ACT 2: STRANGELY FAMILIAR ── */}
        <div className="bg-white border border-border/80 rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-all">
          <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-border/60">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-full bg-primary/10 text-primary font-dm-mono text-xs font-bold flex items-center justify-center">
                2
              </span>
              <h3 className="font-serif text-2xl text-secondary font-semibold">
                Strangely Familiar
              </h3>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-dm-mono uppercase tracking-wider text-gold-dark font-bold bg-gold/10 px-2.5 py-0.5 rounded-full">
              <Sparkles className="w-3 h-3" /> Shared Roots
            </span>
          </div>

          <p className="font-sans text-xs sm:text-sm text-muted-foreground mb-4 italic">
            As they talked about family, childhood, and the values that shaped them, they discovered how much they had in common.
          </p>

          <div className="space-y-2.5 py-1">
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

          <div className="mt-5 pt-4 border-t border-border/60">
            <p className="font-serif italic text-sm sm:text-base text-secondary/90 leading-relaxed">
              Finding someone whose warmth, values, and family quirks mirrored your own made everything feel like coming home.
            </p>
          </div>
        </div>

        {/* ── ACT 3: THE COMPATIBILITY TEST ── */}
        <div className="bg-white border border-border/80 rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-all">
          <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-border/60">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-full bg-primary/10 text-primary font-dm-mono text-xs font-bold flex items-center justify-center">
                3
              </span>
              <h3 className="font-serif text-2xl text-secondary font-semibold">
                Coffee or Chai?
              </h3>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-dm-mono uppercase tracking-wider text-gold-dark font-bold bg-gold/10 px-2.5 py-0.5 rounded-full">
              <Coffee className="w-3 h-3" /> The Litmus Test
            </span>
          </div>

          <p className="font-sans text-xs sm:text-sm text-muted-foreground mb-4 italic">
            Then came the most important question of all.
          </p>

          <div className="space-y-2.5 py-1">
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

            <div className="py-2 text-center">
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

          <div className="mt-5 pt-4 border-t border-border/60">
            <p className="font-serif italic text-sm sm:text-base text-secondary/90 leading-relaxed">
              One meeting became many, and friendship slowly turned into something more.
            </p>
          </div>
        </div>

        {/* ── ACT 4: TO FOREVER & BEYOND ── */}
        <div className="bg-gradient-to-br from-[#faf8f5] to-[#f4eee4] border border-gold/40 rounded-3xl p-6 sm:p-10 shadow-sm hover:shadow-md transition-all">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold/15 text-gold-dark rounded-full text-xs font-dm-mono uppercase tracking-widest mb-3 font-bold">
                <Heart className="w-3.5 h-3.5 fill-gold-dark/20" /> Forever
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-secondary font-bold mb-3">
                To Forever &amp; Beyond
              </h3>

              <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-5">
                What began at one table, over one debatable cookie and a shared love for coffee, became a love they wanted to carry into everything ahead.
              </p>

              {/* The Iconic Exchange */}
              <div className="space-y-2 py-3 border-y border-gold/30 my-4">
                <p className="font-serif text-xl sm:text-2xl text-secondary font-medium">
                  <span className="font-dm-mono text-xs uppercase tracking-wider text-primary font-bold mr-2">She:</span>
                  “Coffee?”
                </p>
                <p className="font-serif text-xl sm:text-2xl text-secondary font-medium">
                  <span className="font-dm-mono text-xs uppercase tracking-wider text-gold-dark font-bold mr-2">He:</span>
                  “Always.”
                </p>
              </div>

              <p className="font-caveat text-2xl sm:text-3xl text-primary font-medium mt-3">
                “And just like that, their forever began.”
              </p>
            </div>

            {/* Venue Polaroid Card */}
            <div className="w-full md:w-72 shrink-0">
              <div className="relative rounded-2xl overflow-hidden shadow-md border-4 border-white bg-white">
                <img
                  src="/assets/wedding-nighttime-CsWYzfaJ.webp"
                  alt="Evara, Vasundhara"
                  className="w-full h-52 object-cover"
                />
                <div className="p-3.5 bg-white text-center">
                  <div className="flex items-center justify-center gap-1 text-primary text-xs font-semibold mb-0.5">
                    <MapPin className="w-3 h-3 text-gold-dark" />
                    <span>Evara, Vasundhara</span>
                  </div>
                  <p className="font-serif italic text-xs text-secondary">
                    Friday, 12th December 2025
                  </p>
                  <span className="font-dm-mono text-[9px] uppercase tracking-wider text-muted-foreground mt-0.5 block">
                    Where forever begins
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
