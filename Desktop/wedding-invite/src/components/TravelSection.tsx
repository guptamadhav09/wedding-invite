import React from "react";
import { ExternalLink, MapPin, Navigation, Car } from "lucide-react";

export const TravelSection: React.FC = () => {
  return (
    <section id="venue" className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="font-dm-mono text-[11px] tracking-[4px] uppercase text-primary font-bold mb-2">
          Location &amp; Directions
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif gold-text font-light mb-3">
          Wedding Venue
        </h2>
        <div className="dishoom-divider">
          <span>✦</span>
        </div>
        <p className="font-serif italic text-muted-foreground mt-4 text-base sm:text-lg max-w-xl mx-auto">
          Detailed location guide for Evara, Vasundhara, and navigation directions.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Main Venue Highlight */}
        <div className="bg-white border border-gold/40 rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-dm-mono uppercase tracking-widest font-bold">
                Haldi &amp; Wedding Ceremony Venue
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-secondary font-bold mt-3 mb-4">
                Evara, Vasundhara
              </h3>
              <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                Evara is a premier luxury celebration destination located in Vasundhara, Ghaziabad (Delhi NCR). Featuring lush landscaped lawns and bespoke banquet halls, it offers the perfect setting for our wedding ceremony.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-foreground/90 font-sans mb-8">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Evara, Sector 15 / Sector 16, Vasundhara, Ghaziabad, Delhi NCR</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Car className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Easily accessible from Delhi via Delhi-Meerut Expressway &amp; Anand Vihar</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Navigation className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Complimentary valet parking available on-site for all guests</span>
                </div>
              </div>

              <a
                href="https://share.google/IKoSU02wwdxXIkSUl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white text-xs font-dm-mono uppercase tracking-wider font-semibold shadow-md hover:bg-secondary transition-all hover:scale-[1.02]"
              >
                <MapPin className="w-4 h-4 text-gold-light" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-80" />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <img
                src="/assets/reception-outdoor-ByfPxEn1.webp"
                alt="Evara Venue"
                className="w-full h-44 object-cover rounded-2xl shadow-xs"
              />
              <img
                src="/assets/reception-sitting-Ck64fR4z.webp"
                alt="Banquet Setup"
                className="w-full h-44 object-cover rounded-2xl shadow-xs"
              />
              <img
                src="/assets/wedding-nighttime-CsWYzfaJ.webp"
                alt="Evening Lights"
                className="w-full h-44 object-cover rounded-2xl shadow-xs col-span-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
