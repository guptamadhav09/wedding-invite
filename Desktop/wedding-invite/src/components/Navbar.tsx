import React, { useState, useEffect } from "react";

interface NavbarProps {
  variant?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ variant = "full" }) => {
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const navItems = [
    { id: "story", label: "Story" },
    ...(variant !== "rsvp" && variant !== "reception" ? [{ id: "events", label: "Events" }] : []),
    ...(variant !== "reception" ? [{ id: "venue", label: "Travel" }] : []),
    ...(variant !== "reception" ? [{ id: "outfits", label: "Outfits" }] : []),
    ...(variant !== "info" ? [{ id: "rsvp", label: "RSVP" }] : []),
  ];

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);

      const sections = navItems.map((item) => {
        const el = document.getElementById(item.id);
        if (!el) return null;
        return {
          id: item.id,
          top: el.getBoundingClientRect().top,
        };
      }).filter(Boolean) as { id: string; top: number }[];

      const passed = sections.filter((s) => s.top <= 140);
      if (passed.length > 0) {
        setActiveSection(passed[passed.length - 1].id);
      } else if (sections.length > 0) {
        setActiveSection(null);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [variant]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <nav
      aria-label="Section navigation"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-full pointer-events-none"
      }`}
    >
      <div className="bg-background/95 backdrop-blur-sm border-b border-primary/20 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-center">
          <ul className="flex items-center gap-2 sm:gap-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} className="flex">
                  <button
                    onClick={() => scrollTo(item.id)}
                    className={`relative text-[11px] sm:text-xs tracking-[0.25em] uppercase px-2.5 sm:px-3.5 py-1.5 transition-colors font-sans outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                      isActive
                        ? "text-primary font-semibold after:content-[''] after:absolute after:left-2 after:right-2 after:-bottom-2.5 after:h-[2px] after:bg-primary"
                        : "text-muted-foreground hover:text-burgundy"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
