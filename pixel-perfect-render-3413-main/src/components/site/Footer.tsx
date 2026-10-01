import { Globe, Phone } from "lucide-react";
import logo from "@/assets/i5-logo.png";
import { scrollToId } from "./Header";

const NAV = ["home", "about", "workshop", "benefits", "details", "contact"];
const LABELS: Record<string, string> = {
  home: "Home",
  about: "About",
  workshop: "Workshop",
  benefits: "Benefits",
  details: "Details",
  contact: "Contact",
};

export function Footer() {
  return (
    <footer id="contact" className="bg-card px-4 py-8 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[auto_1fr_auto] lg:items-center">
        <img src={logo} alt="i5 Technologies" width={174} height={42} loading="lazy" className="h-9 w-auto" />

        <nav className="flex flex-wrap gap-x-5 gap-y-2 lg:justify-center">
          {NAV.map((id) => (
            <button
              key={id}
              onClick={() => scrollToId(id)}
              className="text-sm font-bold text-ink/70 hover:text-ink"
            >
              {LABELS[id]}
            </button>
          ))}
        </nav>

        <div className="flex flex-wrap items-center gap-5">
          <a
            href="https://www.i5technologies.in"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-bold text-brand-blue"
          >
            <Globe className="h-4 w-4" /> www.i5technologies.in
          </a>
          <a
            href="https://wa.me/919791070214"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-bold text-brand-green"
          >
            <Phone className="h-4 w-4" /> Call / WhatsApp: 9791070214
          </a>
        </div>
      </div>

      <div className="mx-auto mt-6 flex max-w-7xl flex-col gap-1 border-t border-border pt-4 text-xs text-ink/60 sm:flex-row sm:justify-between">
        <p>© 2026 i5 Technologies. All rights reserved.</p>
        <p>Empowering Young Minds with Future Skills.</p>
      </div>
    </footer>
  );
}
