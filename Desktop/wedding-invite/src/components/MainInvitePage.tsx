import React, { useState } from "react";
import { SideSelector, type Side } from "./SideSelector";
import { Navbar } from "./Navbar";
import { HeroSection } from "./HeroSection";
import { StorySection } from "./StorySection";
import { TimelineSection } from "./TimelineSection";
import { EventsSection } from "./EventsSection";
import { TravelSection } from "./TravelSection";
import { OutfitGuideSection } from "./OutfitGuideSection";
import { RSVPSection } from "./RSVPSection";
import { WeddingFooter } from "./WeddingFooter";
import { FloatingRSVP } from "./FloatingRSVP";

interface MainInvitePageProps {
  variant?: "full" | "rsvp" | "info" | "reception" | "mehndi-6th";
}

export const MainInvitePage: React.FC<MainInvitePageProps> = ({
  variant = "full",
}) => {
  const [selectedSide, setSelectedSide] = useState<Side | null>(null);

  // If no side has been selected yet, display the welcome gateway selector
  if (!selectedSide) {
    return (
      <main className="bg-background">
        <SideSelector onSelect={(side) => setSelectedSide(side)} />
      </main>
    );
  }

  const activeSide = selectedSide || "mahek";

  return (
    <main className="bg-background outline-none min-h-screen">
      <Navbar variant={variant} />
      <HeroSection variant={variant} />

      {/* Story Journey */}
      <StorySection />

      {/* Schedule / Timeline for 3 events */}
      <TimelineSection />

      {/* Detailed Wedding Events List */}
      <EventsSection />

      {/* Venue Evara, Vasundhara & Stay */}
      <TravelSection />

      {/* Outfit Guide */}
      <OutfitGuideSection />

      {/* Embedded RSVP Section */}
      <RSVPSection side={activeSide} />

      {/* Footer */}
      <WeddingFooter variant={variant} />

      {/* Floating Action Button for RSVP */}
      <FloatingRSVP side={activeSide} />
    </main>
  );
};
