import React from "react";
import { Coffee, Heart, Sparkles, MessageCircleHeart } from "lucide-react";
import { storyPrelude, storyBeats } from "../data/weddingData";

export const StorySection: React.FC = () => {
  return (
    <section
      id="story"
      className="py-20 sm:py-28 px-4 sm:px-6 bg-[#faf7f2] relative overflow-hidden"
    >
      {/* Ambient background glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 50% 20%, hsl(var(--gold) / 0.12) 0%, transparent 65%)",
        }}
      />

      {/* ── Section Header ── */}
      <div className="max-w-2xl mx-auto text-center mb-16 sm:mb-20 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold-dark text-[10px] font-dm-mono uppercase tracking-[3px] font-bold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
          <span>Our Journey</span>
        </div>
        <h2
          className="font-serif font-light italic gold-text pb-2 leading-tight"
          style={{ fontSize: "clamp(2.5rem, 6.5vw, 4rem)" }}
        >
          Our Story
        </h2>
        <div className="dishoom-divider my-3">
          <span>✦</span>
        </div>
        <p className="font-serif italic text-muted-foreground text-base sm:text-lg max-w-lg mx-auto leading-relaxed pt-1">
          {storyPrelude.intro}
        </p>
      </div>

      {/* ── Story Chapters Container ── */}
      <div className="max-w-2xl mx-auto space-y-12 sm:space-y-16 relative z-10">
        {storyBeats.map((beat, idx) => {
          const isFinale = beat.id === "forever-began";

          return (
            <div
              key={beat.id}
              className="bg-white/90 border border-[#e8ded1] rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden transition-all hover:shadow-md hover:border-gold/40"
            >
              {/* Subtle ornamental top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

              {/* ── Chapter Header ── */}
              <div className="flex items-center justify-between border-b border-[#f0e8dc] pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#f4ebe1] text-secondary font-dm-mono text-xs font-bold flex items-center justify-center border border-gold/30">
                    {beat.chapterNumber}
                  </span>
                  <div>
                    <span className="block font-dm-mono text-[9px] uppercase tracking-[3px] text-gold-dark font-bold">
                      Chapter {idx + 1} · {beat.tag}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-secondary font-semibold">
                      {beat.chapterTitle}
                    </h3>
                  </div>
                </div>
                <div className="text-gold/40">
                  {isFinale ? (
                    <Heart className="w-5 h-5 text-gold fill-gold/20" />
                  ) : (
                    <Coffee className="w-5 h-5" />
                  )}
                </div>
              </div>

              {/* Chapter Narrative Context */}
              {beat.intro && (
                <p className="font-serif italic text-secondary/75 text-sm sm:text-base leading-relaxed mb-6">
                  {beat.intro}
                </p>
              )}

              {/* ── Dialogue Block (Structured Script Format) ── */}
              <div className="space-y-3.5 bg-[#faf8f4] border border-[#f0e7d8] rounded-2xl p-4 sm:p-6 mb-6">
                {beat.dialogues?.map((line, dIdx) => (
                  <DialogueRow key={`d-${dIdx}`} speaker={line.speaker} text={line.text} />
                ))}

                {/* Narrative Interlude (e.g. After one bite—) */}
                {beat.interlude && (
                  <div className="py-2.5 flex items-center gap-3 justify-center">
                    <div className="w-12 h-px bg-gold/30" />
                    <span className="font-caveat text-xl text-gold-dark italic px-2">
                      {beat.interlude}
                    </span>
                    <div className="w-12 h-px bg-gold/30" />
                  </div>
                )}

                {/* Secondary Dialogues */}
                {beat.secondaryDialogues?.map((line, sdIdx) => (
                  <DialogueRow key={`sd-${sdIdx}`} speaker={line.speaker} text={line.text} />
                ))}
              </div>

              {/* ── Chapter Reflection Callout ── */}
              {beat.reflection && !isFinale && (
                <div className="flex items-start gap-3 bg-[#fdfbf7] border-l-3 border-gold/60 p-4 rounded-r-xl">
                  <MessageCircleHeart className="w-4 h-4 text-gold-dark shrink-0 mt-0.5" />
                  <p className="font-serif italic text-xs sm:text-sm text-secondary/80 leading-relaxed">
                    {beat.reflection}
                  </p>
                </div>
              )}

              {/* ── Finale Special Spread (Chapter IV) ── */}
              {beat.reflection && isFinale && (
                <div className="mt-6 text-center space-y-5">
                  <p className="font-caveat text-2xl sm:text-3xl text-secondary font-medium leading-relaxed">
                    “{beat.reflection}”
                  </p>

                  <div className="relative rounded-2xl overflow-hidden shadow-md border border-gold/30">
                    <img
                      src="/assets/wedding-nighttime-CsWYzfaJ.webp"
                      alt="Evara, Vasundhara"
                      className="w-full h-56 sm:h-72 object-cover hover:scale-102 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-center text-white">
                      <p className="font-serif italic text-lg sm:text-xl font-medium drop-shadow-xs">
                        Evara, Vasundhara
                      </p>
                      <p className="font-dm-mono text-[10px] tracking-[3px] uppercase text-white/80 mt-0.5 font-semibold">
                        Friday, 12th December 2025 · Where forever begins
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

/* ── Formatted Dialogue Line Component ── */
const DialogueRow: React.FC<{ speaker: "She" | "He"; text: string }> = ({
  speaker,
  text,
}) => {
  const isShe = speaker === "She";

  return (
    <div className={`flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-3 ${isShe ? "items-start" : "items-end sm:items-baseline sm:pl-6"}`}>
      <span
        className={`px-2 py-0.5 rounded text-[10px] font-dm-mono uppercase tracking-wider font-bold shrink-0 ${
          isShe
            ? "bg-[#e8efe9] text-[#2d5038] border border-[#c4d6c7]"
            : "bg-[#f5ecdd] text-[#6d4f24] border border-[#e4d2b9]"
        }`}
      >
        {speaker}
      </span>
      <p className="font-serif text-lg sm:text-xl text-secondary leading-snug">
        “{text}”
      </p>
    </div>
  );
};
