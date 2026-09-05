import React, { useState } from "react";
import { Sparkles } from "lucide-react";

export const OutfitGuideSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"women" | "men">("women");

  const outfitData = {
    women: [
      {
        event: "Mehendi Ceremony",
        colors: ["#10B981", "#F59E0B", "#F472B6", "#06B6D4"],
        colorNames: "Emerald, Mustard, Peony Pink, Aqua",
        style: "Flowy Lehengas, Shararas, or Floral Anarkalis",
        tip: "Lightweight and flowy fabrics with comfortable sleeves for receiving mehendi.",
        image: "/assets/haldi-w-karaj-yellow-Di6dU4mR.jpg",
      },
      {
        event: "Cocktail Party",
        colors: ["#18181B", "#1E3A8A", "#831843", "#4C1D95"],
        colorNames: "Midnight Black, Royal Blue, Wine, Deep Violet",
        style: "Glamorous Evening Gowns, Sequin Lehengas, or Pre-Draped Sarees",
        tip: "Shimmer and contemporary chic for an energetic night on the dance floor.",
        image: "/assets/sangeet-w-nyk-kalki-purple-BGCOynEQ.jpg",
      },
      {
        event: "Wedding Ceremony",
        colors: ["#DC2626", "#D97706", "#B45309", "#FEF3C7"],
        colorNames: "Crimson Red, Antique Gold, Rust, Warm Ivory",
        style: "Regal Embroidered Lehengas or Heritage Banarasi Silk Sarees",
        tip: "Timeless traditional elegance honoring sacred evening rituals.",
        image: "/assets/wedding-w-nyk-kalki-gold-CGMb6yoy.jpg",
      },
    ],
    men: [
      {
        event: "Mehendi Ceremony",
        colors: ["#10B981", "#FBBF24", "#FDE047", "#FED7AA"],
        colorNames: "Mint Green, Mustard, Lemon, Peach",
        style: "Linen/Silk Kurta-Pyjama paired with a vibrant Nehru Jacket",
        tip: "Effortless, breezy celebration attire.",
        image: "/assets/haldi-m-uc134763-CSI84B9X.jpg",
      },
      {
        event: "Cocktail Party",
        colors: ["#09090B", "#1E293B", "#312E81"],
        colorNames: "Tuxedo Black, Navy Blue, Deep Indigo",
        style: "Indo-Western Tuxedo, Bandhgala Suit, or Sharp Blazer",
        tip: "Sleek, tailored cocktail glamour.",
        image: "/assets/mehndi-m-uc144304-DayBV-8z.jpg",
      },
      {
        event: "Wedding Ceremony",
        colors: ["#FEF3C7", "#D97706", "#78350F", "#B45309"],
        colorNames: "Royal Cream, Antique Gold, Deep Maroon, Warm Sand",
        style: "Classic Royal Sherwani with Safa (Turban) and Stole",
        tip: "Regal and grand traditional look for the Baraat and wedding ceremony.",
        image: "/assets/reception-m-mdb451-Ctwj1D0O.jpg",
      },
    ],
  };

  return (
    <section id="outfits" className="py-24 px-4 bg-[#f8fbf9] relative">
      <div className="max-w-4xl mx-auto text-center mb-14">
        <div className="font-dm-mono text-[11px] tracking-[4px] uppercase text-primary font-bold mb-2">
          Style &amp; Attire
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif gold-text font-light mb-3">
          Outfit Inspiration
        </h2>
        <div className="dishoom-divider">
          <span>✦</span>
        </div>
        <p className="font-serif italic text-muted-foreground mt-4 text-base sm:text-lg max-w-xl mx-auto">
          Dress inspirations and recommended palettes for each of our three celebrations.
        </p>

        {/* Tab Toggle */}
        <div className="flex justify-center mt-8">
          <div className="inline-flex rounded-full border border-gold/40 p-1 bg-white shadow-xs">
            <button
              onClick={() => setActiveTab("women")}
              className={`px-6 py-2 rounded-full text-xs font-dm-mono uppercase tracking-widest transition-all ${
                activeTab === "women"
                  ? "bg-primary text-white shadow-sm font-semibold"
                  : "text-muted-foreground hover:text-secondary"
              }`}
            >
              Women's Guide
            </button>
            <button
              onClick={() => setActiveTab("men")}
              className={`px-6 py-2 rounded-full text-xs font-dm-mono uppercase tracking-widest transition-all ${
                activeTab === "men"
                  ? "bg-primary text-white shadow-sm font-semibold"
                  : "text-muted-foreground hover:text-secondary"
              }`}
            >
              Men's Guide
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {outfitData[activeTab].map((item) => (
          <div
            key={item.event}
            className="bg-white border border-border/80 rounded-2xl p-6 shadow-xs flex flex-col justify-between hover:border-gold/50 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-serif text-xl font-bold text-secondary">
                  {item.event}
                </h4>
                <div className="flex gap-1">
                  {item.colors.map((c, i) => (
                    <span
                      key={i}
                      className="w-3.5 h-3.5 rounded-full border border-black/10 shadow-xs"
                      style={{ backgroundColor: c }}
                      title={item.colorNames}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-2 text-xs font-sans mb-4">
                <p>
                  <strong className="text-foreground">Palette:</strong>{" "}
                  <span className="text-muted-foreground">{item.colorNames}</span>
                </p>
                <p>
                  <strong className="text-foreground">Style:</strong>{" "}
                  <span className="text-primary font-medium">{item.style}</span>
                </p>
                <p className="text-muted-foreground italic leading-relaxed pt-1">
                  💡 {item.tip}
                </p>
              </div>
            </div>

            {item.image && (
              <div className="mt-4 rounded-xl overflow-hidden shadow-xs border border-border/40">
                <img
                  src={item.image}
                  alt={item.event}
                  className="w-full h-56 object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="max-w-xl mx-auto text-center mt-12 bg-white border border-gold/30 rounded-2xl p-4 flex items-center justify-center gap-2 text-xs sm:text-sm text-secondary font-sans shadow-xs">
        <Sparkles className="w-4 h-4 text-gold shrink-0" />
        <span>Wear what makes you feel happiest and ready to celebrate with us!</span>
      </div>
    </section>
  );
};
