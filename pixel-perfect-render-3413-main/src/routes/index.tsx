import { createFileRoute } from "@tanstack/react-router";
import { CountdownBanner } from "@/components/site/CountdownBanner";
import { FloatingCTA } from "@/components/site/FloatingCTA";
import { Hero } from "@/components/site/Hero";
import { FeatureStrip } from "@/components/site/FeatureStrip";
import { About } from "@/components/site/About";
import { Learn } from "@/components/site/Learn";
import { Safety } from "@/components/site/Safety";
import { Benefits } from "@/components/site/Benefits";
import { Details } from "@/components/site/Details";
import { Register } from "@/components/site/Register";

const title = "AI Tools Learning Workshop for Kids | i5 Technologies";
const description =
  "A fun, beginner-friendly AI workshop for students from 4 to 9 std. 5 October 2026, online & offline in Chennai. Register for ₹99.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <CountdownBanner />
      <Hero />
      <FeatureStrip />
      <About />
      <Learn />
      <Safety />
      <Benefits />
      <Details />
      <Register />
      <FloatingCTA />
    </main>
  );
}
