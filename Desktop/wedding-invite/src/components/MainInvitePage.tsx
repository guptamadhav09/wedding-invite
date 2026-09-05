import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SideSelector, type Side } from "./SideSelector";
import { EnvelopeIntro } from "./EnvelopeIntro";
import { Navbar } from "./Navbar";
import { HeroSection } from "./HeroSection";
import { StorySection } from "./StorySection";
import { EventsSection } from "./EventsSection";
import { RSVPSection } from "./RSVPSection";
import { WeddingFooter } from "./WeddingFooter";
import { FloatingRSVP } from "./FloatingRSVP";

interface MainInvitePageProps {
  variant?: "full" | "rsvp" | "info" | "reception" | "mehndi-6th";
  defaultSide?: Side;
}

export const MainInvitePage: React.FC<MainInvitePageProps> = ({
  variant = "full",
  defaultSide,
}) => {
  const [searchParams] = useSearchParams();
  const urlSideParam = searchParams.get("side")?.toLowerCase();
  
  const initialSide: Side | null =
    defaultSide ||
    (urlSideParam === "groom" || urlSideParam === "prateek"
      ? "prateek"
      : urlSideParam === "bride" || urlSideParam === "mahek"
      ? "mahek"
      : null);

  const [envelopeDone, setEnvelopeDone] = useState(false);
  const [selectedSide, setSelectedSide] = useState<Side | null>(initialSide);

  // Stage 1 — Envelope opening animation
  if (!envelopeDone) {
    return <EnvelopeIntro onComplete={() => setEnvelopeDone(true)} />;
  }

  // Stage 2 — Side selector gateway
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

      {/* Detailed Wedding Events List */}
      <EventsSection />

      {/* Embedded RSVP Section */}
      <RSVPSection side={activeSide} />

      {/* Footer */}
      <WeddingFooter variant={variant} />

      {/* Floating Action Button for RSVP */}
      <FloatingRSVP side={activeSide} />
    </main>
  );
};
