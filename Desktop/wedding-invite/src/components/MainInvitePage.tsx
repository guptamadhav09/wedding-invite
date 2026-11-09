import React, { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { SideSelector, type Side } from "./SideSelector";
import { EnvelopeIntro } from "./EnvelopeIntro";
import { Navbar } from "./Navbar";
import { HeroSection } from "./HeroSection";
import { StorySection } from "./StorySection";
import { EventsSection } from "./EventsSection";
import { RSVPSection } from "./RSVPSection";
import { WeddingFooter } from "./WeddingFooter";
import { FloatingRSVP } from "./FloatingRSVP";
import { ScrollReveal } from "./ScrollReveal";
import type { InviteeContact } from "../data/weddingData";

interface MainInvitePageProps {
  variant?: "full" | "rsvp" | "info" | "reception" | "mehndi-6th";
  defaultSide?: Side;
  featuredContact?: InviteeContact;
  includeMehendi?: boolean;
}

export const MainInvitePage: React.FC<MainInvitePageProps> = ({
  variant = "full",
  defaultSide,
  featuredContact,
  includeMehendi = false,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
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

  useEffect(() => {
    setSelectedSide(initialSide);
  }, [initialSide, location.key]);

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
    const historyIndex = window.history.state?.idx;
    if (typeof historyIndex === "number" && historyIndex > 0) {
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
        className="fixed top-3 left-3 z-50 flex h-8 w-8 items-center justify-center rounded-full border border-[#d9c5a9] bg-[#fbf8f2]/95 text-[#765a3d] shadow-sm backdrop-blur-sm transition-colors hover:bg-[#765a3d] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a6b4d] sm:top-4 sm:left-4 sm:h-10 sm:w-10"
      >
        <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
      </button>
      <Navbar variant={variant} />
      <HeroSection variant={variant} side={activeSide} />

      {/* Story Journey */}
      <ScrollReveal delay={80} variant="left">
        <StorySection />
      </ScrollReveal>

      {/* Detailed Wedding Events List */}
      <ScrollReveal delay={120} variant="right">
        <EventsSection side={activeSide} includeMehendi={includeMehendi} />
      </ScrollReveal>

      {/* Embedded RSVP Section */}
      <ScrollReveal delay={160} variant="zoom">
        <RSVPSection
          side={activeSide}
          featuredContact={featuredContact}
          includeMehendi={includeMehendi}
        />
      </ScrollReveal>

      {/* Footer */}
      <ScrollReveal delay={200} variant="rise">
        <WeddingFooter variant={variant} side={activeSide} />
      </ScrollReveal>

      {/* Floating Action Button for RSVP */}
      <FloatingRSVP side={activeSide} />
    </main>
  );
};
