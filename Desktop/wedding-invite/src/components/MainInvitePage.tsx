import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
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
  const navigate = useNavigate();
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

  const goBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }
    navigate("/");
  };

  return (
    <main className="bg-background outline-none min-h-screen">
      <button
        type="button"
        onClick={goBack}
        aria-label="Go back"
        title="Go back"
        className="fixed top-4 left-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-[#d9c5a9] bg-[#fbf8f2]/95 text-[#765a3d] shadow-sm backdrop-blur-sm transition-colors hover:bg-[#765a3d] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a6b4d]"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
      </button>
      <Navbar variant={variant} />
      <HeroSection variant={variant} side={activeSide} />

      {/* Story Journey */}
      <StorySection />

      {/* Detailed Wedding Events List */}
      <EventsSection />

      {/* Embedded RSVP Section */}
      <RSVPSection side={activeSide} />

      {/* Footer */}
      <WeddingFooter variant={variant} side={activeSide} />

      {/* Floating Action Button for RSVP */}
      <FloatingRSVP side={activeSide} />
    </main>
  );
};
