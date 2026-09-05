import React from "react";
import { timelineData } from "../data/weddingData";

export const TimelineSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center mb-14">
        <div className="font-dm-mono text-[11px] tracking-[4px] uppercase text-primary font-bold mb-2">
          Wedding Schedule
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif gold-text font-light mb-3">
          Events at a Glance
        </h2>
        <div className="dishoom-divider">
          <span>✦</span>
        </div>
        <p className="font-serif italic text-muted-foreground mt-4 text-base sm:text-lg max-w-xl mx-auto">
          Three celebrations of love, music, and sacred vows. We look forward to having you with us.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {timelineData.map((item, idx) => (
            <div
              key={`${item.act}-${idx}`}
              className="relative group bg-white/90 border border-border/80 rounded-2xl p-6 sm:p-8 text-center shadow-xs hover:shadow-xl hover:border-gold/50 transition-all duration-300"
            >
              {/* Event Step Number */}
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary border border-primary/20 flex items-center justify-center font-serif text-lg font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">
                {idx + 1}
              </div>

              <span className="inline-block px-3 py-0.5 text-[10px] uppercase tracking-wider font-dm-mono rounded-full bg-gold/15 text-gold-dark font-bold mb-2">
                {item.loc}
              </span>

              <h4 className="font-serif text-2xl font-bold text-secondary mb-1">
                {item.act}
              </h4>

              <p className="font-sans text-xs text-muted-foreground mb-4">
                {item.sub}
              </p>

              {item.annotation?.lines && (
                <div className="pt-3 border-t border-border/60 text-xs font-caveat text-primary text-center">
                  {item.annotation.lines.map((line, i) => (
                    <p key={i} className="text-sm">
                      {line}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
