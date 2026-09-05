import React, { useState, useEffect } from "react";
import { Check, Sparkles, Phone, MessageCircle } from "lucide-react";
import type { Side } from "./SideSelector";

interface RSVPSectionProps {
  side?: Side;
  embedded?: boolean;
}

export interface RSVPRecord {
  submittedAt: string;
  name: string;
  contact: string;
  guests: string;
  events: string[];
  dietary: string;
  message: string;
  side: string;
}

const GOOGLE_SHEETS_WEBHOOK_URL =
  import.meta.env.VITE_RSVP_WEBHOOK_URL || "";

// Family Contact Numbers for both sides
export const familyContacts = {
  groom: [
    { name: "Kavita Dhingra", phone: "+91 99109 83781", raw: "919910983781" },
    { name: "Deepak Dhingra", phone: "+91 99992 54398", raw: "919999254398" },
  ],
  bride: [
    { name: "Veenu Gupta", phone: "+91 99118 67070", raw: "919911867070" },
    { name: "Haresh Kumar Gupta", phone: "+91 99114 59501", raw: "919911459501" },
  ],
};

export const RSVPSection: React.FC<RSVPSectionProps> = ({
  side = "mahek",
  embedded = false,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    guests: "1",
    events: ["mehendi", "haldi", "wedding"],
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
      setErrorMsg("Please provide your name and phone number/email.");
      return;
    }

    const guestsNum = parseInt(formData.guests, 10);
    if (!guestsNum || guestsNum < 1 || guestsNum > 15) {
      setErrorMsg("Please enter a valid guest count (1 - 15).");
      return;
    }

    if (formData.events.length === 0) {
      setErrorMsg("Please select at least one event you will be attending.");
      return;
    }

    setSubmitting(true);

    const newRecord: RSVPRecord = {
      ...formData,
      side: side === "prateek" ? "Groom (Prateek)" : "Bride (Mahek)",
      submittedAt: new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        dateStyle: "medium",
        timeStyle: "short",
      }),
    };

    try {
      // 1. Store locally in browser storage as permanent backup
      const existing: RSVPRecord[] = JSON.parse(
        localStorage.getItem("mahek_prateek_rsvps") || "[]"
      );
      existing.push(newRecord);
      localStorage.setItem("mahek_prateek_rsvps", JSON.stringify(existing));

      // 2. If Google Sheets Webhook is configured, POST to Google Sheets
      if (GOOGLE_SHEETS_WEBHOOK_URL) {
        try {
          await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
            method: "POST",
            mode: "no-cors",
            headers: {
              "Content-Type": "text/plain",
            },
            body: JSON.stringify({
              name: formData.name,
              contact: formData.contact,
              phone: formData.contact,
              guests: formData.guests,
              dietary: formData.dietary,
              message: formData.message,
              wishes: formData.message,
              events: formData.events,
              side: newRecord.side,
              submittedAt: newRecord.submittedAt,
            }),
          });
        } catch (fetchErr) {
          console.warn("Could not post to remote webhook, saved locally:", fetchErr);
        }
      }

      await new Promise((res) => setTimeout(res, 500));
      setSubmitted(true);
    } catch {
      setErrorMsg("Something went wrong saving your RSVP. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // ══════════════════════════════════════════════════════════════════════════
  // CASE A: EMBEDDED INSIDE POPUP MODAL (THE INTERACTIVE FORM)
  // ══════════════════════════════════════════════════════════════════════════
  if (embedded) {
    if (submitted) {
      return (
        <div className="text-center py-8 px-2 animate-fade-in">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-3 border border-emerald-300">
            <Check className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-2xl font-serif text-secondary mb-2 font-bold">
            RSVP Confirmed!
          </h3>
          <p className="text-muted-foreground font-sans text-xs sm:text-sm leading-relaxed max-w-sm mx-auto">
            Thank you for confirming your presence. Mahek &amp; Prateek eagerly look forward to celebrating with you!
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-5 text-xs font-dm-mono uppercase tracking-widest text-primary hover:underline cursor-pointer"
          >
            Submit another response
          </button>
        </div>
      );
    }

    return (
      <form onSubmit={handleSubmit} className="space-y-4 font-sans">
        {errorMsg && (
          <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl font-sans">
            {errorMsg}
          </div>
        )}

        <div>
          <label htmlFor="modal-name" className="text-xs tracking-wider uppercase font-semibold text-secondary mb-1 block">
            Full Name *
          </label>
          <input
            id="modal-name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Enter your full name"
            className="w-full bg-[#fdfcf9] border border-[#e2d6c6] rounded-xl px-3.5 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label htmlFor="modal-contact" className="text-xs tracking-wider uppercase font-semibold text-secondary mb-1 block">
            Phone Number or Email *
          </label>
          <input
            id="modal-contact"
            type="text"
            required
            value={formData.contact}
            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
            placeholder="+91 98765 43210 / email@example.com"
            className="w-full bg-[#fdfcf9] border border-[#e2d6c6] rounded-xl px-3.5 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label htmlFor="modal-guests" className="text-xs tracking-wider uppercase font-semibold text-secondary mb-1 block">
            Number of Guests
          </label>
          <input
            id="modal-guests"
            type="number"
            min="1"
            max="15"
            value={formData.guests}
            onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
            className="w-28 bg-[#fdfcf9] border border-[#e2d6c6] rounded-xl px-3.5 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="text-xs tracking-wider uppercase font-semibold text-secondary mb-1.5 block">
            Events Attending
          </label>
          <div className="grid grid-cols-1 gap-2">
            {[
              { key: "mehendi", label: "Mehendi & Ring Ceremony (11th Dec)" },
              { key: "haldi", label: "Haldi Ceremony (12th Dec — Morning)" },
              { key: "wedding", label: "Wedding Ceremony (12th Dec — Evening)" },
            ].map((evt) => {
              const checked = formData.events.includes(evt.key);
              return (
                <button
                  type="button"
                  key={evt.key}
                  onClick={() => toggleEvent(evt.key)}
                  className={`flex items-center justify-between px-3.5 py-2 rounded-xl border text-xs text-left transition-all ${
                    checked
                      ? "bg-primary/10 border-primary text-primary font-semibold"
                      : "bg-[#fdfcf9] border-[#e2d6c6] text-muted-foreground"
                  }`}
                >
                  <span>{evt.label}</span>
                  <span className={`w-4 h-4 rounded flex items-center justify-center text-[10px] border ${
                    checked ? "bg-primary text-white border-primary" : "border-border bg-white"
                  }`}>
                    {checked ? "✓" : ""}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <label htmlFor="modal-dietary" className="text-xs tracking-wider uppercase font-semibold text-secondary mb-1 block">
            Dietary Preferences (Optional)
          </label>
          <input
            id="modal-dietary"
            type="text"
            maxLength={500}
            value={formData.dietary}
            onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
            placeholder="Vegetarian, Jain, food allergies..."
            className="w-full bg-[#fdfcf9] border border-[#e2d6c6] rounded-xl px-3.5 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label htmlFor="modal-message" className="text-xs tracking-wider uppercase font-semibold text-secondary mb-1 block">
            Warm Wishes for the Couple
          </label>
          <textarea
            id="modal-message"
            rows={2}
            maxLength={500}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Share your blessings..."
            className="w-full bg-[#fdfcf9] border border-[#e2d6c6] rounded-xl px-3.5 py-2 text-sm text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full gold-gradient text-secondary font-baloo tracking-[0.2em] uppercase text-sm font-bold h-11 rounded-xl border-2 border-gold shadow-md hover:opacity-95 transition-all disabled:opacity-60 cursor-pointer mt-2"
        >
          {submitting ? "Sending..." : "Confirm RSVP"}
        </button>
      </form>
    );
  }

  const [activeContactSide, setActiveContactSide] = useState<Side>(side);

  useEffect(() => {
    setActiveContactSide(side);
  }, [side]);

  return (
    <section id="rsvp" className="py-20 sm:py-28 px-4 sm:px-6 bg-[#faf8f5] relative scroll-mt-24">
      {/* ── Section Header ── */}
      <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-dm-mono uppercase tracking-[3px] font-bold mb-3">
          <Sparkles className="w-3 h-3 text-gold-dark" />
          <span>Confirm Your Presence</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif gold-text font-light mb-3">
          RSVP &amp; Contacts
        </h2>
        <div className="dishoom-divider">
          <span>✦</span>
        </div>
        <p className="font-serif italic text-muted-foreground text-sm sm:text-base leading-relaxed max-w-md mx-auto pt-3">
          Kindly confirm your attendance with the family. For any arrangements, questions, or travel assistance, please reach out to us below.
        </p>
      </div>

      {/* ── SPECIFIC CONTACT CARD (ONLY GROOM'S OR ONLY BRIDE'S BASED ON SELECTION) ── */}
      <div className="max-w-xl mx-auto relative z-10">
        {activeContactSide === "prateek" ? (
          /* ── GROOM'S SIDE (PRATEEK'S FAMILY) ── */
          <div className="bg-white border border-[#d9e5dd] rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between mb-6 pb-3.5 border-b border-[#eef3f0]">
              <div>
                <span className="inline-block px-3 py-0.5 rounded-full bg-[#d7e6dc] text-[#2c533c] text-[10px] font-dm-mono uppercase tracking-wider font-bold mb-1">
                  Team Groom
                </span>
                <h4 className="font-serif text-2xl font-bold text-secondary">
                  Prateek's Family
                </h4>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#edf5f0] flex items-center justify-center text-[#356147]">
                <Phone className="w-5 h-5" />
              </div>
            </div>

            <div className="space-y-4">
              {familyContacts.groom.map((c, i) => (
                <div key={i} className="flex items-center justify-between gap-3 p-3.5 sm:p-4 rounded-xl bg-[#fafcfb] border border-[#e5eeea]">
                  <div>
                    <p className="font-serif text-base sm:text-lg font-semibold text-secondary">
                      {c.name}
                    </p>
                    {"relation" in c && (c as any).relation && (
                      <p className="font-sans text-xs text-muted-foreground">
                        {(c as any).relation}
                      </p>
                    )}
                    <p className="font-dm-mono text-xs sm:text-sm text-secondary font-medium mt-0.5">
                      {c.phone}
                    </p>
                  </div>

                  <div className="flex items-center gap-2.5 shrink-0">
                    <a
                      href={`tel:${c.raw}`}
                      title={`Call ${c.name}`}
                      aria-label={`Call ${c.name}`}
                      className="w-10 h-10 rounded-full bg-[#e5f0ea] hover:bg-[#d5e7dd] text-[#2c533c] flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-xs"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                    <a
                      href={`https://wa.me/${c.raw}?text=Hi%20${encodeURIComponent(c.name)}%2C%20regarding%20Mahek%20%26%20Prateek%27s%20wedding...`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`WhatsApp ${c.name}`}
                      aria-label={`WhatsApp ${c.name}`}
                      className="w-10 h-10 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#128C7E] flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-xs"
                    >
                      <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Subtle Switcher */}
            <div className="text-center mt-5 pt-3 border-t border-[#f0f4f1]">
              <button
                onClick={() => setActiveContactSide("mahek")}
                className="text-[11px] font-dm-mono uppercase tracking-wider text-muted-foreground hover:text-secondary underline transition-colors cursor-pointer"
              >
                Looking for Bride's family contacts instead?
              </button>
            </div>
          </div>
        ) : (
          /* ── BRIDE'S SIDE (MAHEK'S FAMILY) ── */
          <div className="bg-white border border-[#ebdce0] rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between mb-6 pb-3.5 border-b border-[#f6edf0]">
              <div>
                <span className="inline-block px-3 py-0.5 rounded-full bg-[#ebdce0] text-[#6b3548] text-[10px] font-dm-mono uppercase tracking-wider font-bold mb-1">
                  Team Bride
                </span>
                <h4 className="font-serif text-2xl font-bold text-secondary">
                  Mahek's Family
                </h4>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#f9f1f3] flex items-center justify-center text-[#7a3e52]">
                <Phone className="w-5 h-5" />
              </div>
            </div>

            <div className="space-y-4">
              {familyContacts.bride.map((c, i) => (
                <div key={i} className="flex items-center justify-between gap-3 p-3.5 sm:p-4 rounded-xl bg-[#fdfbfa] border border-[#f2e7ea]">
                  <div>
                    <p className="font-serif text-base sm:text-lg font-semibold text-secondary">
                      {c.name}
                    </p>
                    {"relation" in c && (c as any).relation && (
                      <p className="font-sans text-xs text-muted-foreground">
                        {(c as any).relation}
                      </p>
                    )}
                    <p className="font-dm-mono text-xs sm:text-sm text-secondary font-medium mt-0.5">
                      {c.phone}
                    </p>
                  </div>

                  <div className="flex items-center gap-2.5 shrink-0">
                    <a
                      href={`tel:${c.raw}`}
                      title={`Call ${c.name}`}
                      aria-label={`Call ${c.name}`}
                      className="w-10 h-10 rounded-full bg-[#f4e8eb] hover:bg-[#ebdbe0] text-[#6b3548] flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-xs"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                    <a
                      href={`https://wa.me/${c.raw}?text=Hi%20${encodeURIComponent(c.name)}%2C%20regarding%20Mahek%20%26%20Prateek%27s%20wedding...`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`WhatsApp ${c.name}`}
                      aria-label={`WhatsApp ${c.name}`}
                      className="w-10 h-10 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#128C7E] flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-xs"
                    >
                      <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Subtle Switcher */}
            <div className="text-center mt-5 pt-3 border-t border-[#f8f0f3]">
              <button
                onClick={() => setActiveContactSide("prateek")}
                className="text-[11px] font-dm-mono uppercase tracking-wider text-muted-foreground hover:text-secondary underline transition-colors cursor-pointer"
              >
                Looking for Groom's family contacts instead?
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
