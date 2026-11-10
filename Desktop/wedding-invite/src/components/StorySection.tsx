import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Coffee, Heart, Sparkles } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const storyPhotos = [
  {
    src: "/assets/bride&groom3.jpeg",
    alt: "Illustration of Mahek and Prateek",
    className: "object-cover object-center",
  },
  {
    src: "/assets/bride&groom2.png",
    alt: "Illustrated portrait of Mahek and Prateek together",
    className: "object-cover object-top",
  },
  {
    src: "/assets/our-story.png",
    alt: "Mahek and Prateek sharing a moment",
    className: "object-cover object-[center_65%]",
  },
  {
    src: "/assets/bride&groom5.jpeg",
    alt: "Mahek and Prateek looking up at the night sky",
    className: "object-cover object-center",
  },
];

const StoryPhotoSlideshow: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState(0);
  const [direction, setDirection] = useState<"next" | "previous">("next");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const interval = window.setInterval(() => {
      setDirection("next");
      setActivePhoto((current) => (current + 1) % storyPhotos.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  const showPhoto = (offset: number) => {
    setDirection(offset > 0 ? "next" : "previous");
    setActivePhoto((current) => (current + offset + storyPhotos.length) % storyPhotos.length);
  };

  return (
    <div
      className="story-slideshow"
      role="region"
      aria-roledescription="carousel"
      aria-label="Photos of Mahek and Prateek"
    >
      <div className="story-slideshow__frame">
        <img
          key={storyPhotos[activePhoto].src}
          src={storyPhotos[activePhoto].src}
          alt={storyPhotos[activePhoto].alt}
          className={`story-slideshow__image story-slideshow__image--${direction} ${storyPhotos[activePhoto].className}`}
          loading="lazy"
          decoding="async"
        />
        <button
          type="button"
          aria-label="Show previous photo"
          onClick={() => showPhoto(-1)}
          className="story-slideshow__arrow story-slideshow__arrow--previous"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label="Show next photo"
          onClick={() => showPhoto(1)}
          className="story-slideshow__arrow story-slideshow__arrow--next"
        >
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
      <div className="story-slideshow__dots" aria-label="Choose a photo">
        {storyPhotos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            aria-label={`Show photo ${index + 1} of ${storyPhotos.length}`}
            aria-current={activePhoto === index ? "true" : undefined}
            onClick={() => {
              setDirection(index >= activePhoto ? "next" : "previous");
              setActivePhoto(index);
            }}
            className={`story-slideshow__dot${activePhoto === index ? " is-active" : ""}`}
          />
        ))}
      </div>
      <p className="sr-only" aria-live="off">
        Photo {activePhoto + 1} of {storyPhotos.length}: {storyPhotos[activePhoto].alt}
      </p>
    </div>
  );
};

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
          <ScrollReveal delay={0} variant="left" className="relative pl-6 sm:pl-10">
            {/* Timeline Node Circle */}
            <div className="story-timeline-node absolute -left-[23px] sm:-left-[35px] top-1 w-8 h-8 rounded-full bg-[#faf8f5] border-2 border-gold flex items-center justify-center shadow-xs">
              <Coffee className="w-3.5 h-3.5 text-gold-dark" />
            </div>

            {/* Instance Header */}
            <div className="mb-3">
              <h3 className="font-serif text-2xl sm:text-3xl text-secondary font-semibold">
                The Cookie Recommendation
              </h3>
            </div>

            <p className="font-sans text-xs sm:text-sm text-muted-foreground mb-4 italic">
              It started over a sweet recommendation...
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
          </ScrollReveal>

          {/* ══ TIMELINE INSTANCE 02 ══ */}
          <ScrollReveal delay={90} variant="right" className="relative pl-6 sm:pl-10">
            {/* Timeline Node Circle */}
            <div className="story-timeline-node absolute -left-[23px] sm:-left-[35px] top-1 w-8 h-8 rounded-full bg-[#faf8f5] border-2 border-gold flex items-center justify-center shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
            </div>

            <div className="mb-3">
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
          </ScrollReveal>

          {/* ══ TIMELINE INSTANCE 03 ══ */}
          <ScrollReveal delay={90} variant="left" className="relative pl-6 sm:pl-10">
            {/* Timeline Node Circle */}
            <div className="story-timeline-node absolute -left-[23px] sm:-left-[35px] top-1 w-8 h-8 rounded-full bg-[#faf8f5] border-2 border-gold flex items-center justify-center shadow-xs">
              <Coffee className="w-3.5 h-3.5 text-gold-dark" />
            </div>

            <div className="mb-3">
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

              <div className="py-1">
                <span className="font-caveat text-lg sm:text-xl text-gold-dark italic">
                  — Fingers crossed —
                </span>
              </div>

              <p className="font-serif text-base sm:text-lg text-secondary leading-relaxed">
                <span className="font-dm-mono text-[10px] tracking-wider uppercase text-gold-dark font-bold mr-2">He:</span>
                “Coffee, Always.”
              </p>
              <p className="font-serif text-base sm:text-lg text-secondary leading-relaxed">
                <span className="font-dm-mono text-[10px] tracking-wider uppercase text-primary font-bold mr-2">She:</span>
                “Amazinggggg”
              </p>
              <p className="font-serif text-base sm:text-lg text-secondary leading-relaxed">
                <span className="font-dm-mono text-[10px] tracking-wider uppercase text-gold-dark font-bold mr-2">He:</span>
                “Cheers!!!”
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
          </ScrollReveal>

          {/* ══ TIMELINE INSTANCE 04 (FINALE) ══ */}
          <ScrollReveal delay={120} variant="zoom" className="relative pl-6 sm:pl-10">
            {/* Timeline Node Circle */}
            <div className="story-timeline-node absolute -left-[23px] sm:-left-[35px] top-1 w-8 h-8 rounded-full bg-[#faf8f5] border-2 border-gold flex items-center justify-center shadow-xs">
              <Heart className="w-3.5 h-3.5 text-gold fill-gold/30" />
            </div>

            <div className="mb-3">
              <h3 className="font-serif text-2xl sm:text-3xl text-secondary font-semibold">
                To Forever &amp; Beyond
              </h3>
            </div>

            <p className="font-sans text-xs sm:text-sm text-muted-foreground mb-4">
              What began at one table, over one debatable cookie and a shared love for coffee, became a love they decided to take life ahead together.
            </p>

            <p className="font-caveat text-2xl sm:text-3xl text-primary font-medium my-4">
              “And just like that, their forever began.”
            </p>

            <StoryPhotoSlideshow />
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};
