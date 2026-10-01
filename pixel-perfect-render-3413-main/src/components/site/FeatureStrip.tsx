import { Award, Boxes, Laptop, Settings, Users } from "lucide-react";
import { Reveal } from "./Reveal";

const ITEMS = [
  { icon: Settings, label: "Hands-on Activities", color: "text-brand-blue" },
  { icon: Laptop, label: "Real AI Tools", color: "text-brand-cyan" },
  { icon: Boxes, label: "Mini Projects", color: "text-brand-violet" },
  { icon: Award, label: "Certificate", color: "text-brand-green" },
  { icon: Users, label: "Beginner Friendly", color: "text-brand-pink" },
];

export function FeatureStrip() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
      <Reveal className="panel grid grid-cols-2 gap-4 p-5 sm:grid-cols-3 lg:grid-cols-5">
        {ITEMS.map((i) => (
          <div key={i.label} className="group flex min-w-0 items-center gap-3">
            <i.icon
              className={`h-7 w-7 shrink-0 transition-transform group-hover:-rotate-6 ${i.color}`}
            />
            <span className="min-w-0 text-sm font-extrabold text-ink">{i.label}</span>
          </div>
        ))}
      </Reveal>
    </div>
  );
}
