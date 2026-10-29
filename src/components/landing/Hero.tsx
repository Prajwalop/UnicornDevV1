import { useEffect, useState } from "react";
import { ArrowRight, ArrowDown } from "lucide-react";

const WORDS = ["Website", "App", "Software", "Digital product", "Business tool"];
const ROTATE_MS = 2200;

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % WORDS.length), ROTATE_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-ink text-ink-foreground"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="animate-drift pointer-events-none absolute -top-40 right-[-10%] size-[34rem] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--color-violet-brand), transparent)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-20%] left-[-8%] size-[28rem] rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--color-violet-glow), transparent)" }}
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-20 sm:px-6 sm:pb-28 sm:pt-28">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium tracking-wide text-white/80">
          <span className="size-1.5 rounded-full bg-violet-glow" aria-hidden="true" />
          Digital services studio · Pune, India
        </p>

        <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.08] sm:text-6xl">
          We build your{" "}
          <span className="sr-only">Websites, apps, software and business tools.</span>
          <span aria-hidden="true" className="relative inline-grid align-baseline">
            {WORDS.map((word, i) => (
              <span
                key={word}
                className="col-start-1 row-start-1 whitespace-nowrap text-violet-glow underline decoration-violet-glow/40 decoration-4 underline-offset-8 transition-all duration-500 ease-out"
                style={{
                  opacity: i === index ? 1 : 0,
                  transform: i === index ? "translateY(0)" : "translateY(0.35em)",
                  filter: i === index ? "blur(0)" : "blur(4px)",
                }}
              >
                {word}
              </span>
            ))}
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
          Websites, apps, software and smart digital tools — designed around your idea, your
          customers and the way your business works.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Start a project
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/90 transition-colors hover:bg-white/10"
          >
            See what we build
            <ArrowDown className="size-4" aria-hidden="true" />
          </a>
        </div>

        <p className="mt-10 text-sm text-white/50">
          Business websites · Web & mobile apps · Custom software · Automation &amp; data
        </p>
      </div>
    </section>
  );
}
