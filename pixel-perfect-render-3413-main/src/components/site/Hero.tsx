import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, CalendarDays, MapPin, Users } from "lucide-react";
import heroImg from "@/assets/hero-kids-robot.jpg";
import { BouncyButton } from "./BouncyButton";
import { Floating } from "./Reveal";
import { scrollToId } from "./Header";

const INFO = [
  { icon: CalendarDays, label: "5 October", value: "2026", color: "text-brand-blue" },
  { icon: MapPin, label: "Online &", value: "Offline", color: "text-brand-pink" },
  { icon: Users, label: "4 to 9 std", value: "", color: "text-brand-violet" },
];

export function Hero() {
  const reduced = useReducedMotion();
  const rise = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section
      id="home"
      className="relative overflow-hidden rounded-b-[2rem] bg-[image:var(--gradient-hero)] px-4 pt-8 pb-10 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2">
        <div>
          <motion.span
            {...rise(0.05)}
            className="inline-block rounded-full bg-card/80 px-4 py-2 text-xs font-extrabold tracking-[0.12em] text-ink/70 uppercase"
          >
            AI Tools Learning Workshop
          </motion.span>

          <motion.h1 {...rise(0.15)} className="mt-4 text-4xl leading-tight sm:text-5xl">
            <span className="text-brand-blue">Explore</span>
            <span className="text-brand-yellow"> • </span>
            <span className="text-brand-yellow">Create</span>
            <span className="text-brand-pink"> • </span>
            <span className="text-brand-pink">Imagine</span>
            <span className="block text-ink">with Artificial Intelligence</span>
          </motion.h1>

          <motion.p {...rise(0.25)} className="mt-4 text-lg font-extrabold text-ink">
            Turn Your Child's Curiosity into AI Creativity!
          </motion.p>
          <motion.p {...rise(0.33)} className="mt-2 max-w-md text-base text-ink/75">
            A fun, practical and beginner-friendly workshop for students from 4 to 9 std.
          </motion.p>

          <motion.div {...rise(0.42)} className="mt-6">
            <BouncyButton
              bounceOnMount
              className="w-full px-8 py-4 text-lg sm:w-auto"
              onClick={() => scrollToId("register")}
            >
              Book Now — ₹99 <ArrowRight className="h-5 w-5" />
            </BouncyButton>
          </motion.div>

          <motion.ul {...rise(0.52)} className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {INFO.map((i) => (
              <li
                key={i.label}
                className="flex min-w-0 items-center gap-3 rounded-2xl bg-card px-4 py-3 shadow-soft"
              >
                <i.icon className={`h-5 w-5 shrink-0 ${i.color}`} />
                <span className="min-w-0 text-sm leading-tight font-bold text-ink">
                  {i.label}
                  {i.value && <span className="block">{i.value}</span>}
                </span>
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          {...(reduced
            ? {}
            : { initial: { opacity: 0, scale: 0.97 }, animate: { opacity: 1, scale: 1 } })}
          transition={{ type: "spring", stiffness: 90, damping: 14, delay: 0.2 }}
        >
          <Floating>
            <img
              src={heroImg}
              alt="Two children and a friendly AI robot learning together on a laptop"
              width={1200}
              height={912}
              className="w-full rounded-[2rem] shadow-lift"
            />
          </Floating>
        </motion.div>
      </div>
    </section>
  );
}
