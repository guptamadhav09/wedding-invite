import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { MainInvitePage } from "./components/MainInvitePage";

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted px-4">
      <div className="text-center">
        <h1 className="mb-4 text-5xl font-serif font-bold text-burgundy">404</h1>
        <p className="mb-6 text-xl text-muted-foreground font-sans">
          Oops! Page not found
        </p>
        <Link
          to="/"
          className="text-primary underline hover:text-primary/90 font-sans font-medium"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainInvitePage variant="full" />} />
        {/* Specific webpages for Groom's side */}
        <Route path="/groom" element={<MainInvitePage variant="full" defaultSide="prateek" />} />
        <Route path="/prateek" element={<MainInvitePage variant="full" defaultSide="prateek" />} />
        {/* Specific webpages for Bride's side */}
        <Route path="/bride" element={<MainInvitePage variant="full" defaultSide="mahek" />} />
        <Route path="/mahek" element={<MainInvitePage variant="full" defaultSide="mahek" />} />
        
        <Route path="/rsvp" element={<MainInvitePage variant="rsvp" />} />
        <Route path="/info" element={<MainInvitePage variant="info" />} />
        <Route path="/reception" element={<MainInvitePage variant="reception" />} />
        <Route path="/mehendi" element={<MainInvitePage variant="mehndi-6th" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
