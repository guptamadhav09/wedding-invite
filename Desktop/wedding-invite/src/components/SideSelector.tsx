import React, { useState } from "react";

export type Side = "prateek" | "mahek";

interface SideSelectorProps {
  onSelect: (side: Side) => void;
}

export const SideSelector: React.FC<SideSelectorProps> = ({ onSelect }) => {
  const [hovered, setHovered] = useState<Side | null>(null);

  return (
    <section className="min-h-screen flex flex-col items-center justify-start bg-[#fbf8ed] relative overflow-hidden px-4 pt-20 pb-6 text-[#513e30] sm:justify-center sm:py-10">
      <div className="absolute inset-0 pointer-events-none opacity-45 bg-[radial-gradient(circle_at_50%_42%,rgba(224,191,113,0.13),transparent_48%)]" />

      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center text-center">
        <p className="font-tiro text-xl sm:text-3xl tracking-[0.24em] text-[#a4772e] font-semibold select-none">
          ॥ श्री गणेशाय नमः ॥
        </p>

        <p className="mt-5 sm:mt-10 max-w-2xl font-serif italic text-2xl sm:text-4xl leading-[1.25] tracking-wide text-[#4f392d]">
          The Dhingra &amp; Gupta families joyfully invite you to celebrate
        </p>

        <p className="mt-5 sm:mt-10 text-xl sm:text-4xl tracking-[0.22em] uppercase text-[#60483a] font-sans font-bold">
          The Wedding Of
        </p>

        <img
          src="/assets/mahekandprateek.png"
          alt="Mahek and Prateek"
          className="mt-3 h-[15rem] sm:mt-6 sm:h-[27rem] w-auto max-w-[92vw] object-contain drop-shadow-[0_16px_18px_rgba(83,58,40,0.12)]"
        />

        <div className="mt-3 flex items-center gap-2 sm:gap-8 font-serif text-sm sm:text-2xl tracking-[0.08em] sm:tracking-[0.12em] font-semibold text-[#4d392c]">
          <span className="h-px w-8 sm:w-28 bg-[#b98b45]" />
          <span className="whitespace-nowrap">12 December 2026&nbsp; · &nbsp;Evara, Vasundhara</span>
          <span className="h-px w-8 sm:w-28 bg-[#b98b45]" />
        </div>

        <div className="mt-1 text-xl text-[#a4772e]">✦</div>

        <p className="mt-1 text-sm sm:mt-2 sm:text-base tracking-[0.16em] uppercase text-[#614b35] font-sans font-semibold">
          Whose side are you celebrating with?
        </p>

        <div className="mt-4 sm:mt-8 flex w-full flex-row gap-2 sm:gap-5">
          <SideChoice
            side="prateek"
            hovered={hovered}
            setHovered={setHovered}
            onSelect={onSelect}
            image="/assets/boy-icon.png"
            team="Team Groom"
            name="Prateek"
            relation="Groom's side"
          />
          <SideChoice
            side="mahek"
            hovered={hovered}
            setHovered={setHovered}
            onSelect={onSelect}
            image="/assets/girl-icon.png"
            team="Team Bride"
            name="Mahek"
            relation="Bride's side"
          />
        </div>
      </div>
    </section>
  );
};

interface SideChoiceProps {
  side: Side;
  hovered: Side | null;
  setHovered: (side: Side | null) => void;
  onSelect: (side: Side) => void;
  image: string;
  team: string;
  name: string;
  relation: string;
}

const SideChoice: React.FC<SideChoiceProps> = ({
  side,
  hovered,
  setHovered,
  onSelect,
  image,
  team,
  name,
  relation,
}) => (
  <button
    type="button"
    onClick={() => onSelect(side)}
    onMouseEnter={() => setHovered(side)}
    onMouseLeave={() => setHovered(null)}
    aria-label={`Enter celebration as ${relation}`}
    className={`group flex min-h-[7.5rem] min-w-0 flex-1 items-center gap-1.5 rounded-xl border px-1 py-2 text-left shadow-[0_3px_12px_rgba(93,65,40,0.05)] outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#a4772e] sm:gap-3 sm:px-2 sm:py-2 ${
      hovered === side
        ? "-translate-y-1 border-[#b98b45] bg-[#fffdf5] shadow-[0_8px_20px_rgba(93,65,40,0.13)]"
        : "border-[#e4d4bd] bg-[#fdf9ee]"
    } ${hovered && hovered !== side ? "opacity-65" : "opacity-100"}`}
  >
    <img
      src={image}
      alt=""
      className="h-20 w-14 shrink-0 object-contain transition-transform duration-300 group-hover:scale-105 sm:h-24 sm:w-20"
    />
    <span className="ml-4 min-w-0 sm:ml-6">
      <span className="block truncate text-[10px] font-dm-mono font-bold uppercase tracking-[0.08em] text-[#80644f] sm:text-xs sm:tracking-[0.14em]">
        {team}
      </span>
      <span className="mt-1.5 block truncate font-serif text-2xl font-bold leading-none text-[#4b3428] sm:text-3xl">
        {name}
      </span>
      <span className="mt-1.5 block truncate font-serif text-[15px] font-semibold italic text-[#987c65] sm:text-[17px]">
        {relation}
      </span>
    </span>
  </button>
);
