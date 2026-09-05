import React, { useState } from "react";
import { X } from "lucide-react";
import { RSVPSection } from "./RSVPSection";
import type { Side } from "./SideSelector";

interface FloatingRSVPProps {
  side?: Side;
}

export const FloatingRSVP: React.FC<FloatingRSVPProps> = ({ side = "mahek" }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating CTA Button */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open RSVP form"
        className="fixed bottom-4 right-4 sm:bottom-auto sm:top-1/2 sm:right-0 sm:-translate-y-1/2 z-50 gold-gradient text-secondary font-baloo tracking-[0.2em] uppercase text-sm sm:text-base font-semibold h-11 sm:h-12 px-5 sm:px-6 rounded-none border-2 border-[hsl(43,72%,38%)] shadow-lg hover:opacity-90 hover:shadow-[0_4px_20px_hsl(43,72%,53%,0.4)] transition-all duration-300 cursor-pointer sm:[writing-mode:vertical-rl] sm:rounded-l-md"
      >
        ✦ RSVP
      </button>

      {/* Bottom Sheet Drawer Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-center">
          {/* Backdrop */}
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity animate-fade-in"
          />

          {/* Drawer Content */}
          <div className="relative w-full max-w-2xl bg-background rounded-t-3xl border-t border-gold/40 shadow-2xl max-h-[85vh] overflow-y-auto z-10 animate-slide-up">
            {/* Sticky Header with Close */}
            <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border/40 px-6 py-4 flex items-center justify-between z-20">
              <span className="font-serif text-xl font-semibold gold-text">
                Wedding RSVP
              </span>
              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 rounded-full border border-border/80 flex items-center justify-center hover:bg-black/5 transition-colors text-muted-foreground hover:text-foreground"
                aria-label="Close RSVP modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Form */}
            <div className="p-4 sm:p-6">
              <RSVPSection side={side} embedded={true} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
