import {
  CalendarDays,
  Users,
  BarChart3,
  Monitor,
  Clock,
  MapPin,
  Ticket,
  Award,
  Gift,
} from "lucide-react";
import { Reveal } from "./Reveal";

const DETAILS = [
  { icon: CalendarDays, label: "Date", value: "5 October 2026", color: "text-brand-pink" },
  { icon: Users, label: "Classes", value: "4 to 9 std", color: "text-brand-blue" },
  { icon: BarChart3, label: "Level", value: "Beginner", color: "text-brand-violet" },
  { icon: Monitor, label: "Mode", value: "Online & Offline", color: "text-brand-cyan" },
  { icon: Clock, label: "Duration", value: "2 Hours", color: "text-brand-blue" },
  {
    icon: MapPin,
    label: "Venue",
    value: "i5 Technologies Aminjikarai, Chennai",
    color: "text-brand-pink",
  },
  { icon: Ticket, label: "Seats", value: "Limited", color: "text-brand-green" },
];

export function Details() {
  return (
    <section id="details" className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
      <Reveal className="panel p-6 lg:p-8">
        <h2 className="text-2xl sm:text-3xl">Workshop Details</h2>
        <ul className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7">
          {DETAILS.map((d, i) => (
            <Reveal as="li" key={d.label} delay={i * 0.06}>
              <div
                tabIndex={0}
                className="group flex h-full flex-col items-center gap-1 rounded-2xl border border-border bg-card p-4 text-center transition-all outline-none hover:-translate-y-[5px] hover:shadow-lift focus-visible:-translate-y-[5px] focus-visible:ring-4 focus-visible:ring-ring/40"
              >
                <d.icon className={`h-6 w-6 ${d.color} transition-transform group-hover:rotate-[5deg]`} />
                <span className="text-sm font-extrabold text-ink">{d.label}</span>
                <span className="text-xs text-ink/70">{d.value}</span>
              </div>
            </Reveal>
          ))}
        </ul>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <Reveal className="flex items-start gap-4 rounded-2xl bg-pastel-blue p-5">
            <Award className="h-8 w-8 shrink-0 text-brand-blue" />
            <div className="min-w-0">
              <h3 className="text-lg text-brand-blue">Certificate of Participation</h3>
              <p className="mt-1 text-sm text-ink/75">
                Students who complete the workshop will receive an i5 Technologies Certificate of
                Participation.
              </p>
            </div>
          </Reveal>
          <Reveal className="flex items-start gap-4 rounded-2xl bg-pastel-pink p-5" delay={0.08}>
            <Gift className="h-8 w-8 shrink-0 text-brand-pink" />
            <div className="min-w-0">
              <h3 className="text-lg text-brand-pink">Special Workshop Activities</h3>
              <p className="mt-1 text-sm font-bold text-brand-violet">
                Learn AI → Explore AI Tools → Create → Present
              </p>
            </div>
          </Reveal>
        </div>
      </Reveal>
    </section>
  );
}
