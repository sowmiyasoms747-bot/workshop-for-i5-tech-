import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function BouncyButton({
  children,
  onClick,
  className,
  type = "button",
  bounceOnMount = false,
  disabled,
}: {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  bounceOnMount?: boolean;
  disabled?: boolean;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-display text-base font-extrabold text-primary-foreground shadow-soft outline-none transition-shadow focus-visible:ring-4 focus-visible:ring-ring/50 disabled:opacity-60",
        className,
      )}
      {...(reduced || disabled
        ? {}
        : { whileHover: { y: -3, scale: 1.03 }, whileTap: { scale: 0.98 } })}
      {...(bounceOnMount && !reduced ? { animate: { y: [0, -8, 0, -3, 0] } } : {})}
      transition={
        bounceOnMount && !reduced
          ? { delay: 1.1, duration: 0.7, ease: "easeOut" }
          : { type: "spring", stiffness: 420, damping: 18 }
      }
    >
      {children}
    </motion.button>
  );
}
