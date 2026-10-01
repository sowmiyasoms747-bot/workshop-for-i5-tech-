import { CheckCircle2 } from "lucide-react";
import girlImg from "@/assets/girl-thinking.jpg";
import { Floating, Reveal } from "./Reveal";

const POINTS = [
  "Verify important information",
  "Don't share personal information",
  "Respect copyright and other people's work",
  "Use AI for learning and creativity",
  "Think before accepting AI-generated content",
];

export function Safety() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
      <Reveal className="grid items-center gap-8 rounded-[2rem] bg-pastel-blue p-6 lg:grid-cols-2 lg:p-10">
        <div>
          <h2 className="text-3xl text-brand-violet sm:text-4xl">AI Safety &amp; Responsible Use</h2>
          <p className="mt-3 max-w-prose text-base text-ink/75">
            We teach students that AI is a tool, not a replacement for your own thinking.
          </p>
          <ul className="mt-5 space-y-3">
            {POINTS.map((p) => (
              <li key={p} className="flex items-start gap-3 text-base text-ink">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                <span className="min-w-0">{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <Floating distance={6}>
          <img
            src={girlImg}
            alt="A girl thinking beside her laptop with a glowing idea lightbulb"
            width={1008}
            height={704}
            loading="lazy"
            className="w-full rounded-[1.5rem] shadow-soft"
          />
        </Floating>
      </Reveal>
    </section>
  );
}
