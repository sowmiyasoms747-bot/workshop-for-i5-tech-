import boyImg from "@/assets/boy-laptop.jpg";
import { Floating, Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
      <Reveal className="grid items-center gap-8 rounded-[2rem] bg-sky p-6 lg:grid-cols-2 lg:p-10">
        <div>
          <h2 className="text-3xl sm:text-4xl">
            <span className="block text-ink">What is the</span>
            <span className="text-brand-violet">AI Workshop?</span>
          </h2>
          <p className="mt-4 max-w-prose text-base text-ink/75">
            A fun, practical and beginner-friendly AI workshop designed especially for school
            students. Explore age-appropriate AI tools through guided activities and mini projects.
            No previous AI or coding experience required.
          </p>
        </div>
        <Floating distance={6}>
          <img
            src={boyImg}
            alt="A boy in a blue hoodie using a laptop in a classroom"
            width={1008}
            height={752}
            loading="lazy"
            className="w-full rounded-[1.5rem] shadow-soft"
          />
        </Floating>
      </Reveal>
    </section>
  );
}
