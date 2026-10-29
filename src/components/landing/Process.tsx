import { CheckCircle2 } from "lucide-react";
import { SectionHead } from "./Services";

const STEPS = [
  {
    n: "01",
    title: "Understand",
    text: "We discuss your business, the problem you're solving and what success looks like.",
  },
  {
    n: "02",
    title: "Plan & design",
    text: "We agree on scope, the user experience and the proposed solution — before any code.",
  },
  {
    n: "03",
    title: "Build & test",
    text: "We develop the agreed features and test that everything works as expected.",
  },
  {
    n: "04",
    title: "Launch & support",
    text: "We deploy the project, hand it over and provide the support you've agreed on.",
  },
];

const CONCEPTS = [
  {
    tag: "Concept",
    title: "Business website for a service company",
    problem:
      "A growing service business needs enquiries from its website, not just another online brochure.",
    solution:
      "A clear service presentation, an enquiry form, a project or product gallery, a responsive layout and basic SEO setup.",
    deliverables: ["Service pages", "Enquiry form", "Gallery", "SEO basics", "Responsive layout"],
  },
  {
    tag: "Concept",
    title: "Internal workflow tracker for an operations team",
    problem:
      "An admin team juggles tasks and documents across spreadsheets, chats and email.",
    solution:
      "A simple internal application with user access, task and document assignment, status tracking, a review workflow and summary reporting.",
    deliverables: ["User access", "Task assignment", "Status tracking", "Review workflow", "Reports"],
  },
];

export function Process() {
  return (
    <section id="process" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHead
          eyebrow="Our process"
          title="From first conversation to launch"
          sub="A straightforward four-stage way of working — you always know what happens next."
        />

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <li
              key={s.n}
              className="relative rounded-2xl border border-border bg-card p-6"
            >
              <span className="font-display text-3xl font-bold text-primary/25">{s.n}</span>
              <h3 className="mt-2 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Concepts() {
  return (
    <section aria-labelledby="concepts-title" className="scroll-mt-20 bg-surface-soft py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHead
          eyebrow="Concept projects"
          title="How we approach real problems"
          sub="Worked examples that show our thinking. These are concepts, not client projects."
        />
        <h2 id="concepts-title" className="sr-only">
          Concept projects
        </h2>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {CONCEPTS.map((c) => (
            <article
              key={c.title}
              className="rounded-2xl border border-border bg-card p-7 sm:p-8"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-violet-soft px-3 py-1 text-xs font-semibold text-primary">
                <CheckCircle2 className="size-3.5" aria-hidden="true" />
                {c.tag} — illustrative example
              </span>
              <h3 className="mt-4 font-display text-xl font-bold sm:text-2xl">{c.title}</h3>
              <dl className="mt-5 space-y-4 text-sm leading-relaxed">
                <div>
                  <dt className="font-semibold text-foreground">The problem</dt>
                  <dd className="mt-1 text-muted-foreground">{c.problem}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">The approach</dt>
                  <dd className="mt-1 text-muted-foreground">{c.solution}</dd>
                </div>
              </dl>
              <div className="mt-5 flex flex-wrap gap-2">
                {c.deliverables.map((d) => (
                  <span
                    key={d}
                    className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground/75"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">About</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              A studio for useful digital products
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              UnicornDev works with businesses to plan and build useful digital products — from
              websites and applications to custom software and automation. Based in Pune,
              Maharashtra, we keep projects plainly scoped and clearly communicated.
            </p>
          </div>
          <ul className="grid gap-4">
            {[
              {
                t: "Business-first thinking",
                d: "We start from the problem and the outcome you need — not from a tech stack.",
              },
              {
                t: "Clear scope, honest timelines",
                d: "You'll know what's included, what it takes and what happens at each stage.",
              },
              {
                t: "Built to be maintained",
                d: "Clean, well-documented work you can keep running and improving after launch.",
              },
            ].map((item) => (
              <li key={item.t} className="rounded-2xl border border-border bg-card p-5">
                <h3 className="font-display text-base font-semibold">{item.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
