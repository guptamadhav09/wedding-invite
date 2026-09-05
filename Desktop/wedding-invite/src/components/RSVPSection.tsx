import React, { useState } from "react";
import { Check } from "lucide-react";
import type { Side } from "./SideSelector";

interface RSVPSectionProps {
  side?: Side;
  embedded?: boolean;
}

export const RSVPSection: React.FC<RSVPSectionProps> = ({
  embedded = false,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    guests: "1",
    events: ["mehendi", "cocktail", "wedding"],
    dietary: "",
    message: "",
  });

  const toggleEvent = (eventKey: string) => {
    setFormData((prev) => {
      const exists = prev.events.includes(eventKey);
      return {
        ...prev,
        events: exists
          ? prev.events.filter((e) => e !== eventKey)
          : [...prev.events, eventKey],
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!formData.name.trim() || !formData.contact.trim()) {
      setErrorMsg("Please fill in your name and contact details.");
      return;
    }

    const guestsNum = parseInt(formData.guests, 10);
    if (!guestsNum || guestsNum < 1 || guestsNum > 10) {
      setErrorMsg("Please enter a guest count between 1 and 10.");
      return;
    }

    if (formData.events.length === 0) {
      setErrorMsg("Please select at least one event you will be attending.");
      return;
    }

    setSubmitting(true);

    try {
      const existingRsvps = JSON.parse(
        localStorage.getItem("mahek_prateek_rsvps") || "[]"
      );
      existingRsvps.push({
        ...formData,
        submittedAt: new Date().toISOString(),
      });
      localStorage.setItem(
        "mahek_prateek_rsvps",
        JSON.stringify(existingRsvps)
      );

      await new Promise((resolve) => setTimeout(resolve, 500));
      setSubmitted(true);
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return submitted ? (
    <section className={embedded ? "py-8 px-4" : "py-28 px-4 bg-[#f8fbf9]"}>
      <div className="max-w-lg mx-auto text-center animate-fade-in py-8 bg-white border border-gold/40 rounded-3xl p-8 sm:p-12 shadow-md">
        <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-4">
          <Check className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif text-secondary mb-3 font-bold">
          Thank You!
        </h2>
        <p className="text-muted-foreground font-sans text-sm sm:text-base leading-relaxed">
          Your RSVP has been joyfully received. Mahek &amp; Prateek look forward to celebrating with you!
        </p>
        <div className="dishoom-divider mt-6">
          <span>✦</span>
        </div>
      </div>
    </section>
  ) : (
    <section
      id="rsvp"
      className={
        embedded
          ? "py-6 px-4 relative overflow-hidden"
          : "py-24 px-4 bg-background relative overflow-hidden"
      }
    >
      {/* Decorative framed photos surrounding on desktop (non-embedded only) */}
      {!embedded && (
        <>
          <img
            src="/assets/frame_8-BaEUAn-D.png"
            alt=""
            aria-hidden="true"
            className="absolute pointer-events-none select-none hidden lg:block lg:left-[2%] xl:left-[5%] top-[32%] w-44 -rotate-1 drop-shadow-md opacity-85"
          />
          <img
            src="/assets/frame_7-JBcahA4W.png"
            alt=""
            aria-hidden="true"
            className="absolute pointer-events-none select-none hidden lg:block lg:left-[11%] xl:left-[16%] top-[29%] w-40 rotate-1 drop-shadow-md opacity-85"
          />
          <img
            src="/assets/frame_6-9tW8cRkH.png"
            alt=""
            aria-hidden="true"
            className="absolute pointer-events-none select-none hidden lg:block lg:left-[2%] xl:left-[6%] top-[64%] w-36 rotate-2 drop-shadow-md opacity-85"
          />
          <img
            src="/assets/frame_5-DdEtww5K.png"
            alt=""
            aria-hidden="true"
            className="absolute pointer-events-none select-none hidden lg:block lg:left-[10%] xl:left-[15%] top-[60%] w-40 -rotate-2 drop-shadow-md opacity-85"
          />
          <img
            src="/assets/frame_4-DYsMBjCQ.png"
            alt=""
            aria-hidden="true"
            className="absolute pointer-events-none select-none hidden lg:block lg:right-[11%] xl:right-[16%] top-[27%] w-40 -rotate-1 drop-shadow-md opacity-85"
          />
          <img
            src="/assets/frame_3-Dg_WWeDn.png"
            alt=""
            aria-hidden="true"
            className="absolute pointer-events-none select-none hidden lg:block lg:right-[2%] xl:right-[5%] top-[31%] w-44 rotate-1 drop-shadow-md opacity-85"
          />
          <img
            src="/assets/frame_2-Df0JR_9p.png"
            alt=""
            aria-hidden="true"
            className="absolute pointer-events-none select-none hidden lg:block lg:right-[10%] xl:right-[15%] top-[63%] w-40 rotate-2 drop-shadow-md opacity-85"
          />
          <img
            src="/assets/frame_1-Diqr8l96.png"
            alt=""
            aria-hidden="true"
            className="absolute pointer-events-none select-none hidden lg:block lg:right-[2%] xl:right-[4%] top-[65%] w-44 -rotate-1 drop-shadow-md opacity-85"
          />
        </>
      )}

      {/* Header Info */}
      <div className="max-w-2xl mx-auto text-center mb-10 relative z-10">
        <div className="font-dm-mono text-[11px] tracking-[4px] uppercase text-primary font-bold mb-2">
          Confirm Your Presence
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif gold-text font-light mb-3">
          Please RSVP
        </h2>
        <div className="dishoom-divider">
          <span>✦</span>
        </div>
        <p className="font-serif italic text-muted-foreground text-sm sm:text-base leading-relaxed max-w-lg mx-auto pt-3">
          Please let us know if you will be joining us for the wedding celebrations.
        </p>
      </div>

      {/* Arch Card Container */}
      <div className="relative max-w-xl mx-auto z-10 drop-shadow-xl">
        <div className="relative z-10">
          <img
            src="/assets/arch-top-DAnAgPZy.png"
            alt=""
            className="w-full block"
          />
        </div>

        <div
          className="relative -mt-[38%]"
          style={{
            backgroundImage: "url(/assets/arch-repeat-4IYxuu58.png)",
            backgroundRepeat: "repeat-y",
            backgroundSize: "100% auto",
          }}
        >
          <div className="px-[12%] pt-[44%] pb-4">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
              {errorMsg && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg font-sans">
                  {errorMsg}
                </div>
              )}

              <div className="space-y-3.5 font-sans">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="rsvp-name"
                    className="text-xs tracking-wider uppercase font-semibold text-foreground mb-1 block"
                  >
                    Full Name *
                  </label>
                  <input
                    id="rsvp-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Your full name"
                    className="w-full bg-[#fbfdfc] border border-gold/40 rounded-lg px-3.5 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Phone / Email */}
                <div>
                  <label
                    htmlFor="rsvp-contact"
                    className="text-xs tracking-wider uppercase font-semibold text-foreground mb-1 block"
                  >
                    Phone Number or Email *
                  </label>
                  <input
                    id="rsvp-contact"
                    type="text"
                    required
                    value={formData.contact}
                    onChange={(e) =>
                      setFormData({ ...formData, contact: e.target.value })
                    }
                    placeholder="+91 98765 43210 / email@example.com"
                    className="w-full bg-[#fbfdfc] border border-gold/40 rounded-lg px-3.5 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Number of Guests */}
                <div>
                  <label
                    htmlFor="rsvp-guests"
                    className="text-xs tracking-wider uppercase font-semibold text-foreground mb-1 block"
                  >
                    Number of Guests
                  </label>
                  <input
                    id="rsvp-guests"
                    type="number"
                    min="1"
                    max="10"
                    value={formData.guests}
                    onChange={(e) =>
                      setFormData({ ...formData, guests: e.target.value })
                    }
                    className="w-24 bg-[#fbfdfc] border border-gold/40 rounded-lg px-3.5 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Events Attending */}
                <div>
                  <label className="text-xs tracking-wider uppercase font-semibold text-foreground mb-2 block">
                    Events Attending
                  </label>
                  <div className="grid grid-cols-1 gap-2">
                    {[
                      { key: "mehendi", label: "Mehendi Ceremony" },
                      { key: "cocktail", label: "Cocktail Party" },
                      { key: "wedding", label: "Wedding Ceremony (Evara)" },
                    ].map((evt) => {
                      const checked = formData.events.includes(evt.key);
                      return (
                        <button
                          type="button"
                          key={evt.key}
                          onClick={() => toggleEvent(evt.key)}
                          className={`flex items-center justify-between px-3.5 py-2 rounded-lg border text-xs text-left transition-all ${
                            checked
                              ? "bg-primary/10 border-primary text-primary font-semibold"
                              : "bg-white/60 border-border/70 text-muted-foreground"
                          }`}
                        >
                          <span>{evt.label}</span>
                          <span
                            className={`w-4 h-4 rounded flex items-center justify-center text-[10px] border ${
                              checked
                                ? "bg-primary text-white border-primary"
                                : "border-border"
                            }`}
                          >
                            {checked ? "✓" : ""}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Dietary Requirements */}
                <div>
                  <label
                    htmlFor="rsvp-dietary"
                    className="text-xs tracking-wider uppercase font-semibold text-foreground mb-1 block"
                  >
                    Dietary Requirements (Optional)
                  </label>
                  <input
                    id="rsvp-dietary"
                    type="text"
                    maxLength={500}
                    value={formData.dietary}
                    onChange={(e) =>
                      setFormData({ ...formData, dietary: e.target.value })
                    }
                    placeholder="Vegetarian, Jain, allergies, etc."
                    className="w-full bg-[#fbfdfc] border border-gold/40 rounded-lg px-3.5 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="rsvp-message"
                    className="text-xs tracking-wider uppercase font-semibold text-foreground mb-1 block"
                  >
                    Warm Wishes for the Couple
                  </label>
                  <textarea
                    id="rsvp-message"
                    rows={2}
                    maxLength={500}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Share your blessings and wishes..."
                    className="w-full bg-[#fbfdfc] border border-gold/40 rounded-lg px-3.5 py-2 text-sm text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full gold-gradient text-secondary font-baloo tracking-[0.2em] uppercase text-sm font-bold h-12 rounded-lg border-2 border-gold shadow-md hover:opacity-95 hover:shadow-lg transition-all duration-300 disabled:opacity-60 cursor-pointer mt-4"
              >
                {submitting ? "Sending RSVP..." : "Send RSVP"}
              </button>
            </form>
          </div>
        </div>

        <div className="relative">
          <img
            src="/assets/arch-bottom-BHOnFDYg.png"
            alt=""
            className="w-full block"
          />
        </div>
      </div>
    </section>
  );
};
