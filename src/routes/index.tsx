import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Services } from "@/components/landing/Services";
import { Build } from "@/components/landing/Build";
import { Process, Concepts, About } from "@/components/landing/Process";
import { Contact, Footer } from "@/components/landing/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "UnicornDev — Websites, Apps & Custom Software | Pune",
        description:
          "UnicornDev builds business websites, web and mobile apps, custom software and automation — designed around how your business works.",
      },
      { property: "og:title", content: "UnicornDev — Websites, Apps & Custom Software" },
      {
        property: "og:description",
        content:
          "Websites, apps, software and smart digital tools — designed around your idea, your customers and the way your business works.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Services />
        <Build />
        <Process />
        <Concepts />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
