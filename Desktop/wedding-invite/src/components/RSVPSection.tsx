import React, { useState, useEffect } from "react";
import { Check, Download, FileSpreadsheet, Sparkles } from "lucide-react";
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

// Google Sheets Webhook URL (Users can paste their Google Apps Script Web App URL here or in .env)
const GOOGLE_SHEETS_WEBHOOK_URL =
  (import.meta as any).env?.VITE_RSVP_WEBHOOK_URL || "";

export const RSVPSection: React.FC<RSVPSectionProps> = ({
  side = "mahek",
  embedded = false,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [rsvpCount, setRsvpCount] = useState(0);
  const [showAdminExport, setShowAdminExport] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    guests: "1",
    events: ["mehendi", "wedding"],
    dietary: "",
    message: "",
  });

  useEffect(() => {
    try {
      const records: RSVPRecord[] = JSON.parse(
        localStorage.getItem("mahek_prateek_rsvps") || "[]"
      );
      setRsvpCount(records.length);
    } catch {
      setRsvpCount(0);
    }
  }, [submitted]);

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
      // 1. Always store locally in browser storage as permanent backup
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
            mode: "no-cors", // Required for Google Apps Script webhooks
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newRecord),
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

  // Export all RSVPs to Excel CSV
  const handleDownloadExcel = () => {
    try {
      const records: RSVPRecord[] = JSON.parse(
        localStorage.getItem("mahek_prateek_rsvps") || "[]"
      );

      if (records.length === 0) {
        alert("No RSVPs recorded yet on this device.");
        return;
      }

      // Format CSV rows with BOM for Excel UTF-8 support
      const headers = [
        "Submission Date & Time",
        "Guest Name",
        "Phone / Email",
        "Celebrating Side",
        "Total Guests",
        "Events Attending",
        "Dietary Requirements",
        "Warm Wishes",
      ];

      const csvRows = [
        headers.join(","),
        ...records.map((r) => {
          const eventsStr = r.events
            .map((e) =>
              e === "mehendi"
                ? "Mehendi & Ring Ceremony"
                : e === "wedding"
                ? "Haldi & Wedding Ceremony"
                : e
            )
            .join(" + ");

          return [
            `"${r.submittedAt.replace(/"/g, '""')}"`,
            `"${r.name.replace(/"/g, '""')}"`,
            `"${r.contact.replace(/"/g, '""')}"`,
            `"${r.side.replace(/"/g, '""')}"`,
            `"${r.guests}"`,
            `"${eventsStr.replace(/"/g, '""')}"`,
            `"${(r.dietary || "None").replace(/"/g, '""')}"`,
            `"${(r.message || "").replace(/"/g, '""')}"`,
          ].join(",");
        }),
      ];

      const blob = new Blob(["\uFEFF" + csvRows.join("\r\n")], {
        type: "text/csv;charset=utf-8;",
      });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("download", `Mahek_Prateek_Wedding_RSVPs_${new Date().toISOString().slice(0, 10)}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {
      alert("Error exporting RSVP file.");
    }
  };

  return submitted ? (
    <section className={embedded ? "py-8 px-4" : "py-28 px-4 bg-[#f8fbf9]"}>
      <div className="max-w-lg mx-auto text-center animate-fade-in py-8 bg-white border border-gold/40 rounded-3xl p-8 sm:p-12 shadow-md">
        <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-4 border border-emerald-300">
          <Check className="w-7 h-7 text-primary" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif text-secondary mb-3 font-bold">
          RSVP Received!
        </h2>
        <p className="text-muted-foreground font-sans text-sm sm:text-base leading-relaxed">
          Thank you for confirming your presence. Mahek &amp; Prateek eagerly look forward to celebrating with you!
        </p>
        <div className="dishoom-divider mt-6">
          <span>✦</span>
        </div>

        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-xs font-dm-mono uppercase tracking-widest text-primary hover:underline cursor-pointer"
        >
          Submit another response
        </button>
      </div>
    </section>
  ) : (
    <section
      id="rsvp"
      className={
        embedded
          ? "py-6 px-4 relative overflow-hidden"
          : "py-24 px-4 bg-[#fbf9f5] relative overflow-hidden"
      }
    >
      {/* Decorative framed photos surrounding on desktop */}
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
            src="/assets/frame_1-Diqr8l96.png"
            alt=""
            aria-hidden="true"
            className="absolute pointer-events-none select-none hidden lg:block lg:right-[2%] xl:right-[4%] top-[65%] w-44 -rotate-1 drop-shadow-md opacity-85"
          />
        </>
      )}

      {/* Header Info */}
      <div className="max-w-2xl mx-auto text-center mb-10 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-dm-mono uppercase tracking-[3px] font-bold mb-2">
          <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
          <span>Confirm Your Presence</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif gold-text font-light mb-2">
          Please RSVP
        </h2>
        <div className="dishoom-divider">
          <span>✦</span>
        </div>
        <p className="font-serif italic text-muted-foreground text-sm sm:text-base leading-relaxed max-w-lg mx-auto pt-3">
          Kindly confirm your attendance so we can ensure the finest arrangements for you.
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
                    placeholder="Enter your full name"
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
                    Number of Guests Attending
                  </label>
                  <input
                    id="rsvp-guests"
                    type="number"
                    min="1"
                    max="15"
                    value={formData.guests}
                    onChange={(e) =>
                      setFormData({ ...formData, guests: e.target.value })
                    }
                    className="w-28 bg-[#fbfdfc] border border-gold/40 rounded-lg px-3.5 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Events Attending (Updated: Mehendi & Ring + Haldi & Wedding) */}
                <div>
                  <label className="text-xs tracking-wider uppercase font-semibold text-foreground mb-2 block">
                    Events Attending
                  </label>
                  <div className="grid grid-cols-1 gap-2">
                    {[
                      {
                        key: "mehendi",
                        label: "Mehendi & Ring Ceremony",
                        sub: "Thursday, 11th Dec · 4:00 PM onwards",
                      },
                      {
                        key: "wedding",
                        label: "Haldi & Wedding Ceremony",
                        sub: "Friday, 12th Dec · Haldi 9 AM · Wedding 7 PM",
                      },
                    ].map((evt) => {
                      const checked = formData.events.includes(evt.key);
                      return (
                        <button
                          type="button"
                          key={evt.key}
                          onClick={() => toggleEvent(evt.key)}
                          className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-xs text-left transition-all ${
                            checked
                              ? "bg-primary/10 border-primary text-primary font-semibold shadow-2xs"
                              : "bg-white/60 border-border/70 text-muted-foreground"
                          }`}
                        >
                          <div>
                            <span className="block text-foreground font-medium">
                              {evt.label}
                            </span>
                            <span className="block text-[10px] text-muted-foreground font-normal">
                              {evt.sub}
                            </span>
                          </div>
                          <span
                            className={`w-5 h-5 rounded-md flex items-center justify-center text-xs border shrink-0 ${
                              checked
                                ? "bg-primary text-white border-primary"
                                : "border-border bg-white"
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
                    Dietary Preferences (Optional)
                  </label>
                  <input
                    id="rsvp-dietary"
                    type="text"
                    maxLength={500}
                    value={formData.dietary}
                    onChange={(e) =>
                      setFormData({ ...formData, dietary: e.target.value })
                    }
                    placeholder="Vegetarian, Jain, food allergies..."
                    className="w-full bg-[#fbfdfc] border border-gold/40 rounded-lg px-3.5 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Warm Wishes Message */}
                <div>
                  <label
                    htmlFor="rsvp-message"
                    className="text-xs tracking-wider uppercase font-semibold text-foreground mb-1 block"
                  >
                    Warm Wishes for Mahek &amp; Prateek
                  </label>
                  <textarea
                    id="rsvp-message"
                    rows={2}
                    maxLength={500}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Share your blessings with the couple..."
                    className="w-full bg-[#fbfdfc] border border-gold/40 rounded-lg px-3.5 py-2 text-sm text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full gold-gradient text-secondary font-baloo tracking-[0.2em] uppercase text-sm font-bold h-12 rounded-xl border-2 border-gold shadow-md hover:opacity-95 hover:shadow-lg transition-all duration-300 disabled:opacity-60 cursor-pointer mt-4"
              >
                {submitting ? "Sending RSVP..." : "Confirm RSVP"}
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

      {/* ── Couple / Admin Excel Download Panel ── */}
      <div className="max-w-md mx-auto mt-12 text-center relative z-20">
        <button
          onClick={() => setShowAdminExport(!showAdminExport)}
          className="text-[11px] font-dm-mono uppercase tracking-[2px] text-muted-foreground/80 hover:text-secondary underline flex items-center justify-center gap-1.5 mx-auto transition-colors cursor-pointer"
        >
          <FileSpreadsheet className="w-3.5 h-3.5 text-gold-dark" />
          <span>Host / Couple Admin: View &amp; Export RSVPs ({rsvpCount})</span>
        </button>

        {showAdminExport && (
          <div className="mt-4 p-5 bg-white border border-gold/30 rounded-2xl shadow-lg text-left animate-fade-in font-sans">
            <div className="flex items-center justify-between mb-3 border-b pb-2">
              <h4 className="font-serif font-bold text-secondary text-base flex items-center gap-2">
                <FileSpreadsheet className="w-4 h-4 text-primary" />
                RSVP Excel Tracker
              </h4>
              <span className="text-xs bg-primary/10 text-primary font-bold px-2 py-0.5 rounded-full font-dm-mono">
                {rsvpCount} Responses
              </span>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed mb-4">
              Export all guest responses into a clean, formatted Excel spreadsheet (.csv file) that opens directly in Microsoft Excel, Apple Numbers, or Google Sheets.
            </p>

            <button
              onClick={handleDownloadExcel}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-primary text-white text-xs font-dm-mono uppercase tracking-wider font-semibold hover:bg-secondary transition-colors cursor-pointer shadow-sm"
            >
              <Download className="w-4 h-4 text-gold-light" />
              <span>Download Excel Spreadsheet (.csv)</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
