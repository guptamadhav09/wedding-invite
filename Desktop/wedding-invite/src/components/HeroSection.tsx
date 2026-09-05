import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, MapPin } from "lucide-react";

interface HeroSectionProps {
  variant?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const totalScroll = sectionRef.current.offsetHeight - window.innerHeight;
      const progress = Math.min(Math.max(-rect.top / totalScroll, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContent = () => {
    const el = document.getElementById("story");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      <section
        ref={sectionRef}
        className="relative min-h-screen flex flex-col justify-between items-center overflow-hidden bg-[#faf8f5] pt-12 pb-24"
      >
        {/* Background Illustrations with modern soft tint */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <img
            src="/assets/hero-background-D3FH2qrh.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-multiply"
          />
          <img
            src="/assets/hero-background-frame1-BNBUASou.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-contain pointer-events-none opacity-25"
          />
        </div>

        {/* Ambient modern lighting */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background:
              "radial-gradient(circle at 50% 30%, hsl(var(--gold) / 0.14) 0%, transparent 68%)",
          }}
        />

        {/* Main Invite Header Content */}
        <div
          className="relative z-20 flex flex-col items-center text-center px-4 max-w-4xl mx-auto mt-6 sm:mt-10"
          style={{
            transform: `translateY(${-scrollProgress * 20}vh)`,
            opacity: Math.max(1 - scrollProgress * 1.5, 0),
          }}
        >
          {/* Namaste Icon & Heading */}
          <div className="flex flex-col items-center mb-1">
            <img
              src="/assets/namaste-cjBk0Frq.svg"
              alt=""
              aria-hidden="true"
              className="w-10 h-10 mb-1 opacity-90 drop-shadow-xs"
            />
            <p className="text-3xl sm:text-4xl text-secondary mb-3 font-rozha">
              नमस्ते
            </p>
          </div>

          <p className="font-dm-mono text-[11px] sm:text-xs tracking-[4px] md:tracking-[6px] text-primary uppercase opacity-90 mb-4 font-bold">
            With Joy, Love &amp; Blessings
          </p>

          {/* Couple Names */}
          <h1
            className="font-mea-culpa text-secondary leading-[0.9] tracking-[-1px] flex items-baseline justify-center whitespace-nowrap mb-4 select-none drop-shadow-xs"
            style={{
              fontSize: "clamp(3.8rem, 11vw, 8rem)",
              gap: "clamp(8px, 1.2vw, 22px)",
            }}
          >
            <span>Mahek</span>
            <span
              className="font-tiro opacity-80 inline-block text-[0.45em] align-middle px-1"
              style={{ transform: "translateY(-0.15em)" }}
            >
              व
            </span>
            <span>Prateek</span>
          </h1>

          <p
            className="font-serif font-light italic text-secondary/90 mb-6 max-w-md sm:max-w-xl text-center leading-relaxed"
            style={{ fontSize: "clamp(19px, 2.2vw, 26px)" }}
          >
            invite you to celebrate their wedding celebrations with family &amp; friends
          </p>

          {/* Divider with Star */}
          <div className="flex items-center gap-3 my-2">
            <div className="w-12 sm:w-16 h-px bg-gold/50" />
            <span className="text-gold text-xs">✦</span>
            <div className="w-12 sm:w-16 h-px bg-gold/50" />
          </div>

          {/* Venue & Maps Highlight Badge */}
          <div className="mt-4 flex flex-col sm:flex-row items-center gap-4 bg-white/75 backdrop-blur-md border border-gold/30 rounded-2xl py-3.5 px-6 shadow-sm">
            <div className="text-center sm:text-left">
              <p className="font-dm-mono text-[10px] tracking-[3px] text-muted-foreground uppercase mb-0.5 font-bold">
                Wedding Venue
              </p>
              <div
                className="font-serif text-secondary font-bold tracking-wide"
                style={{ fontSize: "clamp(18px, 2vw, 23px)" }}
              >
                Evara, Vasundhara
              </div>
            </div>

            <div className="hidden sm:block w-px h-9 bg-border" />

            <a
              href="https://share.google/IKoSU02wwdxXIkSUl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors text-xs font-dm-mono uppercase tracking-wider font-semibold border border-primary/20"
            >
              <MapPin className="w-3.5 h-3.5 text-primary" />
              <span>Open in Google Maps</span>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToContent}
          className="relative z-20 flex flex-col items-center gap-1.5 text-muted-foreground hover:text-secondary transition-colors cursor-pointer group mt-12 mb-4"
          aria-label="Scroll to story"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase font-dm-mono font-medium">
            Scroll to explore
          </span>
          <ChevronDown className="w-4 h-4 text-primary animate-bounce transition-transform group-hover:scale-110" />
        </button>
      </section>

      {/* Modern Bottom Transition Graphic */}
      <img
        src="/assets/hero-bottom-watercolor-CjYsISzi.png"
        alt=""
        aria-hidden="true"
        className="w-full block -mt-px saturate-[0.9] opacity-80 pointer-events-none relative z-10"
      />
    </div>
  );
};
