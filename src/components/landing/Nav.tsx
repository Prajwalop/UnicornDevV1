import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "What we build", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
      >
<a href="#top" className="flex items-center gap-2.5" aria-label="UnicornDev home">
  <img 
    src="/logo.png" 
    alt="UnicornDev" 
    className="h-8 w-auto object-contain" 
  />
</a>


        <div className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Start a project
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-lg border border-border text-foreground md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background px-4 pb-4 pt-2 md:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-lg bg-primary px-3 py-2.5 text-center text-sm font-semibold text-primary-foreground"
          >
            Start a project
          </a>
        </div>
      )}
    </header>
  );
}
