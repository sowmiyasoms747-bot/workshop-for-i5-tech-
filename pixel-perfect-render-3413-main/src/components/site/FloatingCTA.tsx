import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Star } from "lucide-react";
import { BouncyButton } from "./BouncyButton";
import { scrollToId } from "./Header";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the register section is in view
      const registerEl = document.getElementById("register");
      let isRegisterVisible = false;
      
      if (registerEl) {
        const rect = registerEl.getBoundingClientRect();
        // If the top of the register section is inside the viewport
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          isRegisterVisible = true;
        }
      }

      // Show the floating CTA after scrolling down 400px, but hide it if register section is visible
      if (window.scrollY > 400 && !isRegisterVisible) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 pb-6 sm:pb-4 md:hidden pointer-events-none"
        >
          {/* We use pointer-events-none on the wrapper so you can click through the empty space, 
              and pointer-events-auto on the actual card */}
          <div className="mx-auto max-w-md rounded-3xl bg-white/80 backdrop-blur-xl p-4 shadow-[0_-10px_40px_-10px_rgba(0,0,0,0.15)] border border-white/40 pointer-events-auto">
            <div className="text-center mb-3">
              <h3 className="text-[15px] font-bold text-ink leading-tight">
                Secure Your Child's Spot Today
              </h3>
              <div className="flex items-center justify-center gap-1.5 mt-1">
                <div className="flex -space-x-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-brand-yellow text-brand-yellow" />
                  ))}
                </div>
                <span className="text-xs font-semibold text-ink/70">
                  4.8 Rating
                </span>
              </div>
            </div>
            
            <div className="flex gap-2">
              <BouncyButton
                className="flex-1 py-3.5 text-base shadow-lg"
                onClick={() => scrollToId("register")}
              >
                Book Now for ₹99
              </BouncyButton>
              <BouncyButton
                className="px-4 bg-brand-pink text-white hover:bg-brand-pink/90"
                onClick={() => scrollToId("register")}
              >
                <ArrowRight className="w-5 h-5" />
              </BouncyButton>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
