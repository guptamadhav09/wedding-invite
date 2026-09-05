# Chhavi & Connor Wedding Invitation App

A complete, high-fidelity React wedding invitation web application replicating the design, typography, layout, interactive gateway, and RSVP experience from [chhaviandconnor.com/rsvp?invite=mehndi-6th](https://chhaviandconnor.com/rsvp?invite=mehndi-6th).

## Features

- **Guest Gateway (Side Selector)**:
  - Initial question: *"Who are you celebrating with?"*
  - Connor (The Groom - Family & friends from UK) vs. Chhavi (The Bride - Family & friends from India)
  - Regional filter for Chhavi's guests (India 🇮🇳, Italy 🇮🇹, UK 🇬🇧).
- **Sticky Parallax Hero**:
  - Devanagari "नमस्ते" greeting, "With utmost love and joy", and calligraphic "Chhavi व Connor".
  - Event date: 9th - 10th Jan 2027 | Place: Mundota Fort, Jaipur.
  - Decorative watercolor transitions.
- **Chapter Book / Story Section**:
  - Milestones spanning seven years (2017 to 2027) from "Lab Partners & Lost Touch" to "The Wedding".
  - Royal Rajasthani fort invitation artwork.
- **Dynamic Itinerary & Events (`invite=mehndi-6th`)**:
  - Includes the 6th January intimate Mehendi in Noida.
  - 9th January Haldi · Sangeet at Mundota Fort & Palace.
  - 10th January Wedding Ceremony at Mundota Fort & Palace.
  - 15th January Reception at MorBagh, New Delhi.
  - Expandable itinerary cards with dress codes, timings, and what to expect.
- **Venue & Travel Guide**:
  - Details on Mundota Fort & Palace and MorBagh.
  - Flight recommendations (IndiGo, Virgin Atlantic, Emirates) for overseas guests.
  - Luxury hotel recommendations in Delhi (The Claridges, ITC Maurya, Ambassador).
  - Travel essentials (Indian eVisa, Weather, Currency/UPI, eSIM).
- **Outfit Guide**:
  - Tabbed guide for Women and Men with event-by-event color palettes, styles, and photo inspiration.
- **Mughal Arch RSVP Card & Floating Drawer**:
  - Traditional arch border artwork.
  - Dynamic invite badge for `All Wedding Events (incl. early Mehendi)`.
  - Form validation: Full Name, Email, Number of Guests (1–10), Dietary Requirements, Wishes.
  - Persistent local storage RSVP handling with success confirmation.
  - Floating `✦ RSVP` action button with bottom drawer sheet.
- **Full Asset Suite**:
  - 160+ original images, watercolor illustrations, arch frames, and SVG stamps cached locally in `/public/assets/`.

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173/rsvp?invite=mehndi-6th` or `http://localhost:5173/`.

### 3. Build for Production
```bash
npm run build
npm run preview
```
The compiled bundle will be in `dist/`.

### Save RSVPs to Google Sheets

The RSVP form saves a local backup and can also append every response to a Google Sheet.

1. Create or open a Google Sheet, then open **Extensions > Apps Script**.
2. Copy the code from `google-apps-script/Code.gs` into the Apps Script editor and save it.
3. Choose **Deploy > New deployment**, select **Web app**, set **Execute as** to `Me`, and set **Who has access** to `Anyone`. Authorize the deployment when prompted.
4. Copy the deployed web app URL into a local `.env` file:

```bash
VITE_RSVP_WEBHOOK_URL=https://script.google.com/macros/s/your-deployment-id/exec
```

5. Restart the Vite server or rebuild the site after changing `.env`.

Responses will appear in a tab named `RSVP Responses`. The existing local browser backup remains enabled if the sheet is temporarily unavailable.
