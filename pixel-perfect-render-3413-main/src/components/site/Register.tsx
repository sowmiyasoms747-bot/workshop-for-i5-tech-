import { useState } from "react";
import { ArrowRight, Check, Megaphone } from "lucide-react";
import { BouncyButton } from "./BouncyButton";
import { Reveal } from "./Reveal";

const PERKS = [
  "Fun & Practical Learning",
  "Real AI Tools",
  "Hands-on Activities",
  "Certificate of Participation",
  "Limited Seats",
];

type Values = {
  studentName: string;
  standard: string;
  parentName: string;
  phone: string;
  email: string;
  mode: string;
};

const EMPTY: Values = {
  studentName: "",
  standard: "4th Standard",
  parentName: "",
  phone: "",
  email: "",
  mode: "Online",
};

const fieldClass =
  "w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-ink outline-none transition-[box-shadow,border-color] focus:border-ring focus:ring-4 focus:ring-ring/30";

export function Register() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  const set = (k: keyof Values) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  const validate = () => {
    const next: Partial<Record<keyof Values, string>> = {};
    if (!values.studentName.trim()) next.studentName = "Please enter the student's name.";
    if (!values.parentName.trim()) next.parentName = "Please enter the parent/guardian name.";
    if (!/^[0-9+\-\s]{10,15}$/.test(values.phone.trim()))
      next.phone = "Please enter a valid phone number.";
    if (values.email.trim() && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email.trim()))
      next.email = "Please enter a valid email address.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNotice(null);
    if (!validate() || submitting) return;
    setSubmitting(true);
    // No registration database or payment provider is connected yet, so we never
    // claim success here. Values are kept so nothing the parent typed is lost.
    setNotice(
      "Your details look good, but online payment isn't connected yet. Please call or WhatsApp 9791070214 to confirm the seat.",
    );
    setSubmitting(false);
  };

  return (
    <section
      id="register"
      className="mt-8 rounded-t-[2rem] bg-[image:var(--gradient-hero)] px-4 py-10 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
        <Reveal>
          <h2 className="text-4xl sm:text-5xl">Book Now</h2>
          <p className="mt-2 text-base text-ink/75">
            Secure your child's seat for the AI Tools Learning Workshop.
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-[auto_1fr] sm:items-center">
            <div className="rounded-3xl bg-pastel-yellow p-6 text-center shadow-soft">
              <p className="font-display text-sm font-extrabold text-ink">Workshop Enrollment</p>
              <p className="mt-1 font-display text-6xl font-extrabold text-primary">₹99</p>
              <p className="mt-1 text-xs font-bold text-ink/70">(One Day Workshop)</p>
              <Megaphone className="mx-auto mt-3 h-7 w-7 text-brand-pink" />
            </div>
            <ul className="space-y-2">
              {PERKS.map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm font-bold text-ink">
                  <Check className="h-4 w-4 shrink-0 text-primary" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="panel p-6">
          <h3 className="text-xl">Book Your Seat</h3>
          <form className="mt-4 grid gap-4 sm:grid-cols-2" onSubmit={onSubmit} noValidate>
            <div>
              <label htmlFor="studentName" className="text-xs font-bold text-ink/70">
                Student Name *
              </label>
              <input
                id="studentName"
                className={fieldClass}
                placeholder="Enter student name"
                value={values.studentName}
                onChange={set("studentName")}
              />
              {errors.studentName && (
                <p className="mt-1 text-xs font-bold text-primary">{errors.studentName}</p>
              )}
            </div>
            <div>
              <label htmlFor="standard" className="text-xs font-bold text-ink/70">
                Standard *
              </label>
              <select
                id="standard"
                className={fieldClass}
                value={values.standard}
                onChange={set("standard")}
              >
                {["4th Standard", "5th Standard", "6th Standard", "7th Standard", "8th Standard", "9th Standard"].map(
                  (s) => (
                    <option key={s}>{s}</option>
                  ),
                )}
              </select>
            </div>
            <div>
              <label htmlFor="parentName" className="text-xs font-bold text-ink/70">
                Parent/Guardian Name *
              </label>
              <input
                id="parentName"
                className={fieldClass}
                placeholder="Enter parent name"
                value={values.parentName}
                onChange={set("parentName")}
              />
              {errors.parentName && (
                <p className="mt-1 text-xs font-bold text-primary">{errors.parentName}</p>
              )}
            </div>
            <div>
              <label htmlFor="phone" className="text-xs font-bold text-ink/70">
                Phone Number *
              </label>
              <input
                id="phone"
                inputMode="tel"
                className={fieldClass}
                placeholder="Enter phone number"
                value={values.phone}
                onChange={set("phone")}
              />
              {errors.phone && <p className="mt-1 text-xs font-bold text-primary">{errors.phone}</p>}
            </div>
            <div>
              <label htmlFor="email" className="text-xs font-bold text-ink/70">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className={fieldClass}
                placeholder="Enter email address"
                value={values.email}
                onChange={set("email")}
              />
              {errors.email && <p className="mt-1 text-xs font-bold text-primary">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="mode" className="text-xs font-bold text-ink/70">
                Mode *
              </label>
              <select id="mode" className={fieldClass} value={values.mode} onChange={set("mode")}>
                <option>Online</option>
                <option>Offline</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <BouncyButton type="submit" className="w-full py-4" disabled={submitting}>
                {submitting ? "Please wait…" : "Proceed to Payment"}
                <ArrowRight className="h-5 w-5" />
              </BouncyButton>
              {notice && (
                <p
                  role="status"
                  className="mt-3 rounded-xl bg-pastel-yellow p-3 text-sm font-bold text-ink"
                >
                  {notice}
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
