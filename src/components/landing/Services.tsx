import { Globe, Smartphone, Boxes, Workflow, ArrowRight, Building2, Rocket, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const SERVICES: { icon: LucideIcon; title: string; blurb: string; items: string[] }[] = [
  {
    icon: Globe,
    title: "Web development",
    blurb: "A professional online presence that turns visitors into enquiries.",
    items: [
      "Business websites & landing pages",
      "Service and product websites",
      "Enquiry forms & online presence",
      "Maintenance & technical improvements",
    ],
  },
  {
    icon: Smartphone,
    title: "Application development",
    blurb: "Apps your customers and teams actually use, on any device.",
    items: [
      "Web applications",
      "Customer portals",
      "Internal applications",
      "MVPs & working prototypes",
    ],
  },
  {
    icon: Boxes,
    title: "Custom software",
    blurb: "Software shaped around how your business really operates.",
    items: [
      "Business management tools",
      "Internal portals",
      "Process-specific systems",
      "Admin tools & workflow apps",
    ],
  },
  {
    icon: Workflow,
    title: "Automation & data",
    blurb: "Less manual work, clearer numbers, faster decisions.",
    items: [
      "Document & data processing",
      "Repetitive task automation",
      "Reporting & dashboards",
      "Practical AI-enabled features",
    ],
  },
];

const PATHS: { icon: LucideIcon; audience: string; title: string; points: string[]; cta: string }[] = [
  {
    icon: Building2,
    audience: "For businesses",
    title: "Get a website that works for you",
    points: [
      "Business websites & landing pages",
      "Online enquiry collection",
      "Website improvements & ongoing support",
    ],
    cta: "Discuss a website project",
  },
  {
    icon: Rocket,
    audience: "For startups & teams",
    title: "Turn an idea into working software",
    points: [
      "Web applications & custom software",
      "Internal tools & process automation",
      "Data reporting & system improvements",
    ],
    cta: "Discuss a software project",
  },
];

function SectionHead({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">{title}</h2>
      <p className="mt-3 text-lg text-muted-foreground">{sub}</p>
    </div>
  );
}

export function Services() {
  return (
    <>
      <section id="services" className="scroll-mt-20 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHead
            eyebrow="Services"
            title="Four ways we help your business run better"
            sub="Every engagement starts with the problem you're trying to solve — then we pick the right tool for it."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <article
                key={s.title}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg hover:shadow-ink/5"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-violet-soft text-primary">
                  <s.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.blurb}</p>
                <ul className="mt-4 space-y-2 text-sm text-foreground/85">
                  {s.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  Discuss this
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="paths-heading" className="scroll-mt-20 pb-20 sm:pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="paths-heading" className="sr-only">
            Choose your path
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {PATHS.map((p) => (
              <article
                key={p.audience}
                className="rounded-2xl border border-border bg-surface-soft p-7 sm:p-8"
              >
                <p className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  <p.icon className="size-3.5" aria-hidden="true" />
                  {p.audience}
                </p>
                <h3 className="mt-4 font-display text-xl font-bold sm:text-2xl">{p.title}</h3>
                <ul className="mt-4 space-y-2.5 text-sm text-foreground/85">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5">
                      <Users className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-background px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-violet-soft"
                >
                  {p.cta}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export { SectionHead };
