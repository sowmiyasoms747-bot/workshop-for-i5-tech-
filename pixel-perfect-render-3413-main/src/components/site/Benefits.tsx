import {
  Brain,
  Lightbulb,
  Search,
  MessageSquare,
  Palette,
  Settings,
  ShieldCheck,
  Quote,
} from "lucide-react";
import { Reveal } from "./Reveal";

const GAINS = [
  { icon: Brain, label: "Logical Thinking", color: "text-brand-blue" },
  { icon: Lightbulb, label: "Creativity", color: "text-brand-yellow" },
  { icon: Search, label: "Curiosity", color: "text-brand-violet" },
  { icon: MessageSquare, label: "Better Questioning Skills", color: "text-brand-cyan" },
  { icon: Palette, label: "Digital Creativity", color: "text-brand-pink" },
  { icon: Settings, label: "Practical AI Awareness", color: "text-brand-blue" },
  { icon: ShieldCheck, label: "Responsible Technology Habits", color: "text-brand-green" },
];

export function Benefits() {
  return (
    <section id="benefits" className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr]">
        <Reveal className="panel p-6 lg:p-8">
          <h2 className="text-2xl sm:text-3xl">What Will Your Child Gain?</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {GAINS.map((g, i) => (
              <Reveal as="li" key={g.label} delay={i * 0.06}>
                <div
                  tabIndex={0}
                  className="group flex h-full min-w-0 items-center gap-3 rounded-2xl bg-sky px-4 py-3 shadow-soft transition-all outline-none hover:-translate-y-[5px] hover:shadow-lift focus-visible:-translate-y-[5px] focus-visible:ring-4 focus-visible:ring-ring/40"
                >
                  <g.icon
                    className={`h-6 w-6 shrink-0 ${g.color} transition-transform group-hover:rotate-[5deg]`}
                  />
                  <span className="min-w-0 text-sm font-extrabold text-ink">{g.label}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </Reveal>

        <Reveal className="panel p-6 lg:p-8" delay={0.1}>
          <h2 className="text-2xl sm:text-3xl">Why Should Kids Learn AI?</h2>
          <p className="mt-4 text-base text-ink/75">
            AI is becoming an important part of modern technology. Rather than only using AI,
            children can start understanding how to use it thoughtfully, creatively and responsibly.
          </p>
          <div className="mt-6 flex items-start gap-3 rounded-2xl bg-pastel-yellow p-5">
            <Quote className="h-6 w-6 shrink-0 text-brand-yellow" />
            <p className="min-w-0 font-display text-lg font-extrabold text-brand-violet">
              Don't just use technology. Learn how to create with it.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
