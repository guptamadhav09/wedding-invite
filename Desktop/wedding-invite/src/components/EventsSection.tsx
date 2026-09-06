import React, { useState } from "react";
import { ChevronDown, MapPin, Clock, ExternalLink } from "lucide-react";
import { weddingEvents } from "../data/weddingData";
import type { Side } from "./SideSelector";

interface EventsSectionProps {
  side?: Side;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ side = "mahek" }) => {
  const [expandedKey, setExpandedKey] = useState<string | null>("wedding");

  const toggleExpand = (key: string) => {
    setExpandedKey(expandedKey === key ? null : key);
  };

  return (
    <section id="events" className="py-24 px-4 bg-[#f8fbf9] relative">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="font-dm-mono text-[11px] tracking-[4px] uppercase text-primary font-bold mb-2">
          The Celebrations
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif gold-text font-light mb-3">
          Wedding Events
        </h2>
        <div className="dishoom-divider">
          <span>✦</span>
        </div>
        <p className="font-serif italic text-muted-foreground mt-4 text-base sm:text-lg max-w-xl mx-auto">
          Here is what we have planned for our wedding celebrations. Tap any event card to view full details.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {weddingEvents.map((evt) => {
          const isExpanded = expandedKey === evt.key;
          const venueAddress = evt.sideVenues
            ? evt.sideVenues[side === "prateek" ? "groom" : "bride"]
            : undefined;
          const venueLabel = venueAddress || evt.venue;
          const mapLink = evt.sideMapLinks
            ? evt.sideMapLinks[side === "prateek" ? "groom" : "bride"]
            : evt.mapLink;
          const eventImage = evt.sideImages
            ? evt.sideImages[side === "prateek" ? "groom" : "bride"]
            : evt.image;

          return (
            <div
              key={evt.key}
              className={`bg-white border rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 ${
                isExpanded ? "border-gold/60 shadow-md ring-1 ring-gold/30" : "border-border/80"
              }`}
            >
              <div
                onClick={() => toggleExpand(evt.key)}
                className="p-4 sm:p-6 cursor-pointer flex flex-col md:flex-row gap-4 sm:gap-5 items-start md:items-center justify-between"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
                    <span className="font-dm-mono text-xs uppercase tracking-wider text-primary font-bold">
                      {evt.date}
                    </span>
                    <span className="text-gold">✦</span>
                    <span className="font-sans text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-primary" /> {evt.time}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-secondary font-bold mb-2">
                    {evt.name}
                  </h3>

                  <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-muted-foreground font-sans mt-3">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-primary shrink-0" />
                      <span
                        title={venueAddress}
                        className="font-semibold text-secondary"
                      >
                        {venueLabel}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0 self-end md:self-center">
                  <span className="text-xs uppercase tracking-widest font-dm-mono text-primary hidden sm:inline font-semibold">
                    {isExpanded ? "Hide Details" : "View Details"}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-gold/40 flex items-center justify-center transition-transform duration-300 ${
                      isExpanded ? "rotate-180 bg-gold/10" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </div>

              {/* Expandable Details */}
              {isExpanded && (
                <div className="px-6 sm:px-8 pb-8 pt-3 border-t border-border/40 bg-light-card animate-fade-in">
                  <p className="font-serif italic text-base sm:text-lg text-secondary/90 mb-4 leading-relaxed">
                    {evt.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 items-center">
                    <div>
                      <h4 className="font-dm-mono text-xs uppercase tracking-wider text-primary font-bold mb-3">
                        Highlights
                      </h4>
                      <ul className="space-y-2">
                        {evt.expandedDetails.map((detail, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground font-sans"
                          >
                            <span className="text-gold mt-1 text-xs">✦</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>

                      {mapLink && (
                        <div className="mt-6">
                          <a
                            href={mapLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-xs font-dm-mono uppercase tracking-wider font-semibold shadow-sm hover:bg-secondary transition-colors"
                          >
                            <MapPin className="w-3.5 h-3.5 text-gold-light" />
                            <span>
                              Open {evt.key === "haldi" ? "Home" : evt.key === "mehendi" ? "Mehendi Venue" : "Evara"} in Google Maps
                            </span>
                            <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
                          </a>
                        </div>
                      )}
                    </div>

                    {eventImage && (
                      <div
                        className="rounded-xl overflow-hidden shadow-sm border border-gold/20"
                      >
                        <img
                          src={eventImage}
                          alt={evt.name}
                          className={`w-full h-48 object-cover hover:scale-105 transition-transform duration-500 ${
                            evt.key === "mehendi" ? "object-[center_20%]" : ""
                          }`}
                        />
                      </div>
                    )}
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
