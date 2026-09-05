export interface WeddingEvent {
  key: string;
  name: string;
  date: string;
  time: string;
  venue: string;
  venueStatus?: "confirmed" | "tba";
  mapLink?: string;
  dress: string;
  description: string;
  expandedDetails: string[];
  image?: string;
}

export const weddingEvents: WeddingEvent[] = [
  {
    key: "mehendi",
    name: "Mehendi & Ring Ceremony",
    date: "Thursday, 11th December 2026",
    time: "4:00 PM onwards",
    venue: "Venue to be finalised",
    venueStatus: "tba",
    dress: "Vibrant Indian Attire / Bright Pastels",
    description:
      "An enchanting afternoon of intricate henna artistry, the joyful exchange of rings, live music, delicious bites, and cheerful celebrations.",
    expandedDetails: [
      "Professional henna artists for all guests",
      "Ring ceremony — a beautiful exchange of promises",
      "Live music and celebratory folk beats",
      "Gourmet chaat counters and refreshing drinks",
      "Venue details will be shared once finalised"
    ],
    image: "/assets/mehendi-venue-B2G5rUvw.webp",
  },
  {
    key: "haldi",
    name: "Haldi Ceremony",
    date: "Friday, 12th December 2026",
    time: "9:00 AM onwards",
    venue: "Evara, Vasundhara",
    venueStatus: "confirmed",
    mapLink: "https://share.google/IKoSU02wwdxXIkSUl",
    dress: "Old clothes / Yellow & White attire",
    description:
      "Begin the wedding day with the golden glow of turmeric blessings. An intimate, joyful ceremony filled with laughter, love, and the warmth of family traditions.",
    expandedDetails: [
      "Traditional turmeric paste ceremony with family blessings",
      "Fun-filled moments surrounded by closest family and friends",
      "Morning refreshments and light breakfast spread",
      "Complimentary valet parking available at Evara"
    ],
    image: "/assets/our-story.jpeg",
  },
  {
    key: "wedding",
    name: "Wedding Ceremony",
    date: "Friday, 12th December 2026",
    time: "7:00 PM onwards",
    venue: "Evara, Vasundhara",
    venueStatus: "confirmed",
    mapLink: "https://share.google/IKoSU02wwdxXIkSUl",
    dress: "Royal Indian Traditional / Sherwanis & Silk Lehengas",
    description:
      "The grand celebration culminates in the sacred vows where Prateek & Mahek unite for a lifetime of love. Surrounded by family, blessings, and timeless rituals under the stars.",
    expandedDetails: [
      "Grand Baraat procession with dhol drummers",
      "Varmala and sacred Pheras under the stars",
      "Grand wedding feast featuring royal delicacies",
      "Complimentary valet parking available at Evara"
    ],
    image: "/assets/our-story.jpeg",
  },
];

export interface StoryDialogue {
  speaker: "She" | "He";
  name: "Mahek" | "Prateek";
  text: string;
}

export interface StoryBeat {
  id: string;
  chapterNumber: string;
  chapterTitle: string;
  tag: string;
  intro?: string;
  dialogues?: StoryDialogue[];
  interlude?: string;
  secondaryDialogues?: StoryDialogue[];
  reflection?: string;
}

export const storyPrelude = {
  hook: "Every love story has a beginning.",
  location: "Colocal",
  intro: "Theirs began at Colocal—her favourite place, and soon, theirs.",
};

export const storyBeats: StoryBeat[] = [
  {
    id: "the-cookie-debate",
    chapterNumber: "01",
    tag: "Colocal Debut",
    chapterTitle: "The Debatable Cookie",
    intro: "It started over a recommendation that was subject to immediate peer review...",
    dialogues: [
      { speaker: "She", name: "Mahek", text: "You have to try the chocolate cookie. It’s my favourite." },
      { speaker: "He", name: "Prateek", text: "Your favourite? Now I have expectations." },
    ],
    interlude: "After one bite—",
    secondaryDialogues: [
      { speaker: "He", name: "Prateek", text: "Really? This one?" },
      { speaker: "She", name: "Mahek", text: "Yes. I stand by it." },
      { speaker: "He", name: "Prateek", text: "I may have to rethink your food recommendations." },
    ],
    reflection: "She laughed. He stayed. And the cookie became the beginning of something far more meaningful.",
  },
  {
    id: "strangely-familiar",
    chapterNumber: "02",
    tag: "Shared Roots",
    chapterTitle: "Strangely Familiar",
    intro: "As they talked about family, childhood, and the values that shaped them, they discovered how much they had in common.",
    dialogues: [
      { speaker: "She", name: "Mahek", text: "Your family does that too?" },
      { speaker: "He", name: "Prateek", text: "Exactly the same way." },
      { speaker: "She", name: "Mahek", text: "That’s strange." },
      { speaker: "He", name: "Prateek", text: "Or maybe familiar." },
    ],
    reflection: "Finding someone whose warmth, values, and family quirks mirrored your own made everything feel like coming home.",
  },
  {
    id: "the-coffee-question",
    chapterNumber: "03",
    tag: "The Litmus Test",
    chapterTitle: "Coffee or Chai?",
    intro: "Then came the most important question of all—the ultimate test of compatibility.",
    dialogues: [
      { speaker: "She", name: "Mahek", text: "Coffee or chai?" },
      { speaker: "He", name: "Prateek", text: "Coffee." },
      { speaker: "She", name: "Mahek", text: "Good answer." },
    ],
    interlude: "The conversation flowed effortlessly—",
    secondaryDialogues: [
      { speaker: "He", name: "Prateek", text: "We’ve been talking for a while." },
      { speaker: "She", name: "Mahek", text: "It doesn’t feel like it." },
    ],
    reflection: "One meeting became many, and friendship slowly turned into something more.",
  },
  {
    id: "forever-began",
    chapterNumber: "04",
    tag: "The Beginning of Forever",
    chapterTitle: "To Forever & Beyond",
    intro: "What began at one table, over one debatable cookie and a shared love for coffee, became a love they wanted to carry into everything ahead.",
    dialogues: [
      { speaker: "She", name: "Mahek", text: "Coffee?" },
      { speaker: "He", name: "Prateek", text: "Always." },
    ],
    reflection: "And just like that, their forever began.",
  },
];

export interface StoryChapter {
  year: string;
  title: string;
  description: string;
  tag: string;
  artifact: string;
  bgGradient: string;
}

export const storyChapters: StoryChapter[] = [
  {
    year: "Chapter 1",
    title: "A Debatable Cookie",
    description:
      "Theirs began at Colocal over her favourite chocolate cookie. After one bite: 'Really? This one?' — 'Yes. I stand by it.' She laughed. He stayed. And the cookie became the beginning of something far more meaningful.",
    bgGradient: "linear-gradient(135deg, #e8f3ee, #f5ede4)",
    artifact: "polaroid",
    tag: "colocal debut",
  },
  {
    year: "Chapter 2",
    title: "Strangely Familiar",
    description:
      "Talking about family, childhood, and values: 'Your family does that too?' — 'Exactly the same way.' — 'That’s strange.' — 'Or maybe familiar.'",
    bgGradient: "linear-gradient(135deg, #f5f0ea, #eaf2ed)",
    artifact: "ticket",
    tag: "shared roots",
  },
  {
    year: "Chapter 3",
    title: "Coffee or Chai?",
    description:
      "'Coffee or chai?' — 'Coffee.' — 'Good answer.' The conversation flowed effortlessly until hours flew by. One meeting became many, and friendship turned into something more.",
    bgGradient: "linear-gradient(135deg, #e7efe9, #f7ede2)",
    artifact: "letter",
    tag: "the coffee test",
  },
  {
    year: "The Big Day",
    title: "Two Hearts, One Celebration",
    description:
      "What began at one table over one debatable cookie and a shared love for coffee became a love they wanted to carry into everything ahead. 'Coffee?' — 'Always.' And just like that, their forever began.",
    bgGradient: "linear-gradient(135deg, #e3ede6, #faecd9)",
    artifact: "invitation",
    tag: "wedding bells",
  },
];

export interface TimelineItem {
  day: string;
  date: string;
  loc: string;
  act: string;
  sub: string;
  side: "above" | "below";
  festive?: boolean;
  annotation?: {
    lines: string[];
  };
}

export const timelineData: TimelineItem[] = [
  {
    day: "Thu",
    date: "11",
    loc: "Delhi NCR",
    act: "Mehendi & Ring",
    sub: "Henna & Promises",
    side: "below",
    festive: true,
    annotation: { lines: ["Venue to be announced", "4:00 PM onwards"] },
  },
  {
    day: "Fri",
    date: "12",
    loc: "Vasundhara",
    act: "Haldi & Wedding",
    sub: "Sacred Pheras",
    side: "below",
    festive: true,
    annotation: { lines: ["Evara, Vasundhara", "9 AM · 7 PM"] },
  },
];

export const hotelOptions = [
  {
    name: "Radisson Blu Kaushambi",
    tag: "Luxury 5-Star",
    area: "Kaushambi, Ghaziabad",
    price: "~10 mins from Evara",
    desc: "Upscale comfort with refined rooms, multiple dining options, and close proximity to Vasundhara.",
    image: "/assets/claridges-SI4u4KWB.webp",
  },
  {
    name: "Country Inn & Suites by Radisson",
    tag: "Premium Hospitality",
    area: "Sahibabad",
    price: "~12 mins from Evara",
    desc: "Renowned eco-friendly property offering world-class vegetarian dining and luxury suites.",
    image: "/assets/itc-maurya-DJUDd9jd.webp",
  },
  {
    name: "Mahagun Sarovar Portico",
    tag: "Boutique Comfort",
    area: "Vaishali",
    price: "~8 mins from Evara",
    desc: "Contemporary business-leisure hotel conveniently situated near Vasundhara.",
    image: "/assets/ambassador-BxE5SsyC.webp",
  },
];
