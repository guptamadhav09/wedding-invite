import React from "react";
import { Coffee, Sparkles, Heart, Quote } from "lucide-react";
import { storyPrelude, storyBeats } from "../data/weddingData";

export const StorySection: React.FC = () => {
  return (
    <section
      id="story"
      className="py-20 sm:py-28 px-4 sm:px-6 bg-background relative overflow-hidden"
    >
      {/* Subtle modern ambient background glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 50% 25%, hsl(var(--gold) / 0.12) 0%, transparent 70%)",
        }}
      />

      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-primary/10 text-primary rounded-full text-[11px] font-dm-mono uppercase tracking-[3px] font-bold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
          Our Journey
        </div>
        <h2
          className="font-serif font-medium italic gold-text pb-2 leading-tight tracking-[-1px]"
          style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)" }}
        >
          Mahek &amp; Prateek's Story
        </h2>
        <div className="font-caveat text-xl sm:text-2xl text-primary mt-1 rotate-[-1.5deg]">
          moments, banter &amp; the road to forever ✶
        </div>
      </div>

      {/* Prelude Card: Colocal Introduction */}
      <div className="max-w-3xl mx-auto mb-16 relative z-10">
        <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-[#faf7f2] via-[#fffefa] to-[#f6f2ea] p-6 sm:p-10 shadow-sm text-center">
          {/* Decorative Corner accents */}
          <div className="absolute top-3 left-3 text-gold/25 pointer-events-none">
            <Quote className="w-8 h-8 rotate-180" />
          </div>
          <div className="absolute bottom-3 right-3 text-gold/25 pointer-events-none">
            <Quote className="w-8 h-8" />
          </div>

          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/15 text-gold-dark mb-4 shadow-2xs">
            <Coffee className="w-6 h-6" />
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl text-secondary font-medium italic mb-3">
            "{storyPrelude.hook}"
          </h3>

          <p className="font-sans text-muted-foreground text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Theirs began at{" "}
            <strong className="text-secondary font-semibold border-b-2 border-gold/50 pb-0.5">
              Colocal
            </strong>
            —her favourite place, and soon, theirs.
          </p>
        </div>
      </div>

      {/* Narrative Beats Container */}
      <div className="max-w-3xl mx-auto space-y-12 relative z-10">
        {storyBeats.map((beat) => {
          const isFinale = beat.id === "forever-began";

          if (isFinale) {
            return (
              <div
                key={beat.id}
                className="relative overflow-hidden rounded-3xl border-2 border-gold/50 bg-gradient-to-br from-[#fbf8f3] via-[#f7f2ea] to-[#efe9dd] p-8 sm:p-12 shadow-lg transition-all duration-300"
              >
                {/* Subtle decorative glow */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-56 h-56 rounded-full bg-gold/15 blur-2xl pointer-events-none" />

                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1 text-center md:text-left">
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-primary/10 text-primary rounded-full text-xs font-dm-mono uppercase tracking-widest mb-4 font-bold">
                      <Heart className="w-3.5 h-3.5 text-primary fill-primary/30" />
                      {beat.chapterNumber} · {beat.tag}
                    </div>

                    <h3 className="font-serif text-3xl sm:text-4xl text-secondary font-bold mb-4">
                      {beat.chapterTitle}
                    </h3>

                    <p className="font-sans text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
                      {beat.intro}
                    </p>

                    {/* Iconic Final Dialogue */}
                    <div className="bg-white/85 backdrop-blur-xs rounded-2xl p-5 border border-gold/30 shadow-xs mb-6 max-w-md mx-auto md:mx-0">
                      <div className="flex flex-col gap-3">
                        {beat.dialogues?.map((line, dIdx) => (
                          <div
                            key={dIdx}
                            className={`flex items-center gap-3 ${
                              line.speaker === "She"
                                ? "justify-start"
                                : "justify-end"
                            }`}
                          >
                            <span
                              className={`px-2.5 py-0.5 rounded-full text-[11px] font-dm-mono font-bold tracking-wide uppercase ${
                                line.speaker === "She"
                                  ? "bg-primary/10 text-primary"
                                  : "bg-amber-600/10 text-amber-900"
                              }`}
                            >
                              {line.speaker}
                            </span>
                            <span className="font-serif italic text-lg sm:text-xl text-secondary font-medium">
                              “{line.text}”
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Proclamation */}
                    <div className="font-caveat text-2xl sm:text-3xl text-primary font-bold mb-2">
                      {beat.reflection}
                    </div>

                    <p className="font-sans text-xs sm:text-sm text-muted-foreground italic">
                      We invite you to celebrate, laugh, and bless our beginning at Evara!
                    </p>
                  </div>

                  {/* Polaroid Venue Accent */}
                  <div className="w-full md:w-72 shrink-0">
                    <div className="relative rounded-2xl overflow-hidden shadow-md border-4 border-white transform rotate-1 hover:rotate-0 transition-transform duration-300 bg-white">
                      <img
                        src="/assets/wedding-nighttime-CsWYzfaJ.webp"
                        alt="Wedding Celebration at Evara"
                        className="w-full h-52 object-cover"
                      />
                      <div className="p-3 bg-white text-center">
                        <span className="font-serif italic text-secondary text-sm font-semibold">
                          Evara, Vasundhara
                        </span>
                        <div className="font-dm-mono text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5">
                          Where Forever Continues
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <div
              key={beat.id}
              className="relative bg-white/90 border border-border/80 hover:border-gold/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-all duration-300"
            >
              {/* Beat Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-border/60">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-primary/10 text-primary font-dm-mono text-xs font-bold flex items-center justify-center">
                    {beat.chapterNumber}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-secondary font-semibold">
                    {beat.chapterTitle}
                  </h3>
                </div>
                <span className="font-dm-mono text-[11px] tracking-widest text-primary uppercase font-bold bg-primary/5 px-3 py-1 rounded-full">
                  {beat.tag}
                </span>
              </div>

              {/* Intro Narration */}
              {beat.intro && (
                <p className="font-sans text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 italic">
                  {beat.intro}
                </p>
              )}

              {/* Dialogue Transcript Card */}
              <div className="space-y-3 bg-[#faf8f5] rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gold/20 mb-6">
                {beat.dialogues?.map((line, dIdx) => (
                  <div
                    key={`d-${dIdx}`}
                    className={`flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 ${
                      line.speaker === "She" ? "text-left" : "text-left sm:pl-4"
                    }`}
                  >
                    <div className="shrink-0">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-md text-[11px] font-dm-mono font-bold uppercase tracking-wider ${
                          line.speaker === "She"
                            ? "bg-primary text-white"
                            : "bg-amber-800 text-amber-50"
                        }`}
                      >
                        {line.speaker} ({line.name})
                      </span>
                    </div>
                    <p className="font-serif text-lg sm:text-xl text-secondary leading-snug">
                      “{line.text}”
                    </p>
                  </div>
                ))}

                {/* Narrative Interlude (e.g., After one bite...) */}
                {beat.interlude && (
                  <div className="py-2 my-2 text-center relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gold/30"></div>
                    </div>
                    <span className="relative bg-[#faf8f5] px-4 font-caveat text-xl text-gold-dark font-medium">
                      {beat.interlude}
                    </span>
                  </div>
                )}

                {/* Secondary Dialogues */}
                {beat.secondaryDialogues?.map((line, sdIdx) => (
                  <div
                    key={`sd-${sdIdx}`}
                    className={`flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 ${
                      line.speaker === "She" ? "text-left" : "text-left sm:pl-4"
                    }`}
                  >
                    <div className="shrink-0">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-md text-[11px] font-dm-mono font-bold uppercase tracking-wider ${
                          line.speaker === "She"
                            ? "bg-primary text-white"
                            : "bg-amber-800 text-amber-50"
                        }`}
                      >
                        {line.speaker} ({line.name})
                      </span>
                    </div>
                    <p className="font-serif text-lg sm:text-xl text-secondary leading-snug">
                      “{line.text}”
                    </p>
                  </div>
                ))}
              </div>

              {/* Reflection / Takeaway */}
              {beat.reflection && (
                <div className="flex items-start gap-3 text-secondary/90 bg-primary/5 rounded-xl p-4 border border-primary/10">
                  <Sparkles className="w-5 h-5 text-gold-dark shrink-0 mt-0.5" />
                  <p className="font-sans text-sm sm:text-base leading-relaxed font-medium">
                    {beat.reflection}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
