import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";
import logo from "@/assets/i5-logo.png";
import { BouncyButton } from "./BouncyButton";
import { cn } from "@/lib/utils";

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "workshop", label: "Workshop" },
  { id: "benefits", label: "Benefits" },
  { id: "details", label: "Details" },
  { id: "contact", label: "Contact" },
];

export function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.4] },
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const go = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={cn(
        "sticky top-0 z-50 w-full bg-card/95 backdrop-blur transition-shadow",
        scrolled && "shadow-soft",
      )}
    >
      <motion.div
        style={{ scaleX: progress }}
        className="absolute inset-x-0 top-0 h-1 origin-left bg-primary"
        aria-hidden
      />
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 lg:px-8">
        <button onClick={() => go("home")} className="min-w-0 justify-self-start" aria-label="i5 Technologies home">
          <img src={logo} alt="i5 Technologies" width={174} height={42} className="h-9 w-auto" />
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-bold text-ink/70 transition-colors hover:bg-sky hover:text-ink",
                active === n.id && "bg-sky text-ink",
              )}
            >
              {n.label}
            </button>
          ))}
          <BouncyButton className="ml-3" onClick={() => go("register")}>
            Book Now <ArrowRight className="h-4 w-4" />
          </BouncyButton>
        </nav>

        <button
          className="rounded-full p-2 text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-card px-4 pb-4 lg:hidden">
          <nav className="flex flex-col py-2">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className={cn(
                  "rounded-xl px-4 py-3 text-left text-base font-bold text-ink/80",
                  active === n.id && "bg-sky text-ink",
                )}
              >
                {n.label}
              </button>
            ))}
          </nav>
          <BouncyButton className="w-full" onClick={() => go("register")}>
            Book Now <ArrowRight className="h-4 w-4" />
          </BouncyButton>
        </div>
      )}
    </motion.header>
  );
}
