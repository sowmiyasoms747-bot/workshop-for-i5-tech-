import { Brain, BookOpen, Palette, MessageSquare, Wrench } from "lucide-react";
import { Reveal } from "./Reveal";

const CARDS = [
  {
    icon: Brain,
    title: "1. Understanding AI",
    bg: "bg-pastel-blue",
    icon_color: "text-brand-blue",
    title_color: "text-ink",
    points: ["What is AI?", "How AI works", "AI in everyday life"],
  },
  {
    icon: BookOpen,
    title: "2. AI for Learning",
    bg: "bg-pastel-green",
    icon_color: "text-brand-green",
    title_color: "text-ink",
    points: [
      "Understand topics",
      "Generate ideas",
      "Summarize information",
      "Create study materials",
      "Practice questions",
    ],
  },
  {
    icon: Palette,
    title: "3. AI for Creativity",
    bg: "bg-pastel-pink",
    icon_color: "text-brand-pink",
    title_color: "text-brand-pink",
    points: ["Stories and characters", "AI image creation", "Posters and presentations"],
  },
  {
    icon: MessageSquare,
    title: "4. Giving Good AI Instructions",
    bg: "bg-pastel-yellow",
    icon_color: "text-brand-yellow",
    title_color: "text-ink",
    points: ["Ask clearly", "Give details", "Check the result", "Improve the answer"],
  },
  {
    icon: Wrench,
    title: "5. Hands-on Activities",
    bg: "bg-pastel-violet",
    icon_color: "text-brand-violet",
    title_color: "text-ink",
    points: ["AI challenges", "Problem-solving", "Story creation", "Mini AI projects"],
  },
];

export function Learn() {
  return (
    <section id="workshop" className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
      <Reveal className="text-center">
        <h2 className="text-3xl sm:text-4xl">What Will Students Learn?</h2>
        <p className="mt-2 text-base text-ink/70">
          Interactive sessions with real examples and hands-on practice
        </p>
      </Reveal>

      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {CARDS.map((c, idx) => (
          <Reveal as="li" key={c.title} delay={idx * 0.08}>
            <div
              tabIndex={0}
              className={`group h-full rounded-2xl ${c.bg} p-5 shadow-soft transition-all outline-none hover:-translate-y-[5px] hover:shadow-lift focus-visible:-translate-y-[5px] focus-visible:ring-4 focus-visible:ring-ring/40`}
            >
              <c.icon
                className={`h-8 w-8 ${c.icon_color} transition-transform group-hover:rotate-[5deg] group-focus-visible:rotate-[5deg]`}
              />
              <h3 className={`mt-3 text-lg ${c.title_color}`}>{c.title}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-ink/75">
                {c.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-ink/40" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
