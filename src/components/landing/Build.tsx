import { Store, Briefcase, Settings2, GraduationCap, ShoppingBag, type LucideIcon } from "lucide-react";
import { SectionHead } from "./Services";

function BrowserMockup() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-background shadow-2xl shadow-black/30">
      <div className="flex items-center gap-2 border-b border-border bg-muted px-3 py-2">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-red-400/70" />
          <span className="size-2.5 rounded-full bg-amber-400/70" />
          <span className="size-2.5 rounded-full bg-emerald-400/70" />
        </span>
        <span className="ml-2 flex-1 rounded-md bg-background px-3 py-1 text-[10px] text-muted-foreground">
          yourbusiness.in
        </span>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="size-3.5 rounded bg-primary" />
            <span className="h-2 w-14 rounded-full bg-foreground/20" />
          </div>
          <div className="flex items-center gap-2" aria-hidden="true">
            <span className="h-1.5 w-8 rounded-full bg-foreground/15" />
            <span className="h-1.5 w-8 rounded-full bg-foreground/15" />
            <span className="h-4 w-12 rounded-full bg-primary/80" />
          </div>
        </div>
        <div className="mt-5 grid grid-cols-5 gap-4">
          <div className="col-span-3 space-y-2">
            <span className="block h-3 w-full rounded-full bg-foreground/25" />
            <span className="block h-3 w-4/5 rounded-full bg-foreground/25" />
            <span className="block h-1.5 w-full rounded-full bg-foreground/10" />
            <span className="block h-1.5 w-2/3 rounded-full bg-foreground/10" />
            <span className="mt-2 block h-5 w-20 rounded-full bg-primary" />
          </div>
          <div className="col-span-2 h-24 rounded-lg bg-gradient-to-br from-violet-brand/70 to-violet-glow/40" />
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-lg border border-border p-2.5">
              <span className="block size-4 rounded-md bg-violet-soft" />
              <span className="mt-2 block h-1.5 w-3/4 rounded-full bg-foreground/20" />
              <span className="mt-1.5 block h-1.5 w-1/2 rounded-full bg-foreground/10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="mx-auto w-44 rounded-[1.6rem] border border-white/15 bg-background p-1.5 shadow-2xl shadow-black/30">
      <div className="rounded-[1.25rem] bg-card px-3 pb-3 pt-2">
        <span className="mx-auto block h-1.5 w-12 rounded-full bg-foreground/15" aria-hidden="true" />
        <div className="mt-3 flex items-center justify-between">
          <span className="h-2.5 w-16 rounded-full bg-foreground/30" />
          <span className="size-5 rounded-full bg-violet-soft" />
        </div>
        <div className="mt-3 space-y-2">
          {["bg-primary/90", "bg-foreground/80", "bg-foreground/60"].map((c, i) => (
            <div key={i} className="flex items-center justify-between rounded-lg border border-border p-2">
              <div className="flex items-center gap-2">
                <span className={`size-5 rounded-md ${c}`} />
                <span className="h-1.5 w-14 rounded-full bg-foreground/20" />
              </div>
              <span
                className={`h-3.5 w-10 rounded-full text-center text-[7px] leading-[0.9rem] ${
                  i === 0 ? "bg-emerald-500/15 text-emerald-600" : "bg-muted text-muted-foreground"
                }`}
              >
                {i === 0 ? "Active" : "Pending"}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-around rounded-full border border-border bg-background py-2">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className={`size-2 rounded-full ${i === 0 ? "bg-primary" : "bg-foreground/20"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ToolMockup() {
  const rows = [
    { w: "w-24", status: "Done", cls: "bg-emerald-500/15 text-emerald-600" },
    { w: "w-16", status: "In review", cls: "bg-violet-soft text-primary" },
    { w: "w-20", status: "Assigned", cls: "bg-amber-500/15 text-amber-600" },
    { w: "w-14", status: "Done", cls: "bg-emerald-500/15 text-emerald-600" },
  ];
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-background shadow-2xl shadow-black/30">
      <div className="flex">
        <div className="w-20 shrink-0 border-r border-border bg-muted p-2.5">
          <span className="block size-4 rounded bg-primary" aria-hidden="true" />
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className={`mt-3 block h-1.5 rounded-full ${i === 0 ? "bg-primary/80" : "bg-foreground/15"}`}
              style={{ width: i % 2 ? "70%" : "90%" }}
            />
          ))}
        </div>
        <div className="flex-1 p-3">
          <div className="flex items-center justify-between">
            <span className="h-2.5 w-20 rounded-full bg-foreground/25" />
            <span className="h-5 w-14 rounded-md bg-primary/85" />
          </div>
          <div className="mt-3 space-y-1.5">
            {rows.map((r, i) => (
              <div key={i} className="flex items-center justify-between rounded-md border border-border px-2.5 py-2">
                <span className={`h-1.5 rounded-full bg-foreground/20 ${r.w}`} />
                <span className={`rounded-full px-2 py-0.5 text-[8px] font-medium ${r.cls}`}>{r.status}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 flex h-12 items-end gap-1.5" aria-hidden="true">
            {[40, 65, 50, 80, 60, 95, 70].map((h, i) => (
              <span
                key={i}
                className="flex-1 rounded-sm bg-gradient-to-t from-violet-brand/60 to-violet-glow/50"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const INDUSTRIES: { icon: LucideIcon; title: string; fit: string }[] = [
  {
    icon: Store,
    title: "Local & growing businesses",
    fit: "Shops, clinics, studios and service providers that need a strong online presence.",
  },
  {
    icon: Briefcase,
    title: "Professional services",
    fit: "Consultants, agencies and practices that rely on enquiries and credibility.",
  },
  {
    icon: Settings2,
    title: "Operations & admin teams",
    fit: "Teams drowning in spreadsheets, manual steps and repeated data entry.",
  },
  {
    icon: GraduationCap,
    title: "Education & training",
    fit: "Institutes and coaches that need enrolment, scheduling and content tools.",
  },
  {
    icon: ShoppingBag,
    title: "Retail & e-commerce",
    fit: "Retailers moving sales, catalogues and customer communication online.",
  },
];

export function Build() {
  return (
    <>
      <section id="work" className="scroll-mt-20 bg-ink py-20 text-ink-foreground sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-violet-glow">
              What we build
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Interfaces your customers and teams will actually use
            </h2>
            <p className="mt-3 text-lg text-white/70">
              A sample of the kinds of products we design and develop.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
            <div className="grid gap-8">
              <figure className="m-0">
                <BrowserMockup />
                <figcaption className="mt-3 text-sm text-white/60">
                  Business website — services, enquiry form, mobile-friendly layout.
                </figcaption>
              </figure>
              <figure className="m-0">
                <ToolMockup />
                <figcaption className="mt-3 text-sm text-white/60">
                  Internal tool — task assignment, status tracking and reporting.
                </figcaption>
              </figure>
            </div>
            <figure className="m-0 self-start">
              <PhoneMockup />
              <figcaption className="mt-3 text-center text-sm text-white/60">
                Mobile app — customer-facing or internal use.
              </figcaption>
            </figure>
          </div>

          <p className="mt-10 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/60">
            These are illustrative previews of interfaces we design — not screenshots of completed
            client work.
          </p>
        </div>
      </section>

      <section className="scroll-mt-20 bg-surface-soft py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHead
            eyebrow="Industries"
            title="Who we work well with"
            sub="The kinds of businesses and teams our services are built for."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {INDUSTRIES.map((ind) => (
              <article
                key={ind.title}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <span className="grid size-10 place-items-center rounded-xl bg-violet-soft text-primary">
                  <ind.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-3 font-display text-base font-semibold leading-snug">
                  {ind.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ind.fit}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            This list describes the customers we're set up to help — it doesn't imply existing
            client relationships.
          </p>
        </div>
      </section>
    </>
  );
}
