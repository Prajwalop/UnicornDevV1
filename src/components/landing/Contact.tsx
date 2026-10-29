import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { SectionHead } from "./Services";

// NOTE: placeholder inbox — swap for the real business email before going live.
const CONTACT_EMAIL = "hello@unicorndev.in";

type FormState = {
  name: string;
  email: string;
  category: string;
  message: string;
  company: string;
  phone: string;
  budget: string;
  preferredContact: string;
  consent: boolean;
  honeypot: string;
};

const EMPTY: FormState = {
  name: "",
  email: "",
  category: "",
  message: "",
  company: "",
  phone: "",
  budget: "",
  preferredContact: "",
  consent: false,
  honeypot: "",
};

const CATEGORIES = [
  "Business website / landing page",
  "Web application / customer portal",
  "Custom software / internal tool",
  "Automation & data",
  "Something else",
];

const inputCls =
  "w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30";
const labelCls = "mb-1.5 block text-sm font-medium text-white/85";

export function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const set = (key: keyof FormState, value: string | boolean) =>
    setForm((f) => ({ ...f, [key]: value }));

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) next.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = "That email address doesn't look right.";
    if (!form.category) next.category = "Please pick a project type.";
    if (!form.message.trim()) next.message = "Tell us briefly what you need.";
    else if (form.message.trim().length < 10)
      next.message = "A sentence or two helps us respond usefully.";
    if (!form.consent) next.consent = "Please confirm you're happy for us to reply.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Bot trap: silently drop submissions that filled the hidden field.
    if (form.honeypot) return;
    if (!validate()) return;

    setSending(true);
    const subject = `Project enquiry: ${form.category}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.company && `Business: ${form.company}`,
      form.phone && `Phone: ${form.phone}`,
      form.budget && `Indicative budget: ${form.budget}`,
      form.preferredContact && `Preferred contact: ${form.preferredContact}`,
      "",
      "Project description:",
      form.message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
    setSending(false);
  }

  return (
    <section id="contact" className="scroll-mt-20 bg-ink py-20 text-ink-foreground sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-violet-glow">
              Contact
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Tell us what you want to build
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              A few lines about your idea, your problem or your business is enough to start. We'll
              come back with questions and a suggested next step — no obligation.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-white/60">
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 text-violet-glow" aria-hidden="true" />
                Replies come from the team, not an automated funnel.
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 text-violet-glow" aria-hidden="true" />
                Your details are used only to respond to your enquiry.
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            {sent ? (
              <div className="py-10 text-center">
                <h3 className="font-display text-2xl font-bold">Your enquiry is ready to send</h3>
                <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-white/70">
                  Your email app should have opened with everything pre-filled — just hit send. If
                  nothing opened, email us directly at{" "}
                  <a className="font-semibold text-violet-glow underline" href={`mailto:${CONTACT_EMAIL}`}>
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSent(false);
                    setForm(EMPTY);
                  }}
                  className="mt-6 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white/90 hover:bg-white/10"
                >
                  Write another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelCls}>
                      Name <span className="text-violet-glow">*</span>
                    </label>
                    <input
                      id="name"
                      autoComplete="name"
                      className={inputCls}
                      value={form.name}
                      onChange={(e) => set("name", e.target.value)}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1.5 text-xs text-red-300">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className={labelCls}>
                      Email <span className="text-violet-glow">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      className={inputCls}
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      placeholder="you@company.com"
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1.5 text-xs text-red-300">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="company" className={labelCls}>
                      Business name <span className="text-white/40">(optional)</span>
                    </label>
                    <input
                      id="company"
                      autoComplete="organization"
                      className={inputCls}
                      value={form.company}
                      onChange={(e) => set("company", e.target.value)}
                      placeholder="Your company or business"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelCls}>
                      Phone <span className="text-white/40">(optional)</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      className={inputCls}
                      value={form.phone}
                      onChange={(e) => set("phone", e.target.value)}
                      placeholder="+91 …"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="category" className={labelCls}>
                    Project type <span className="text-violet-glow">*</span>
                  </label>
                  <select
                    id="category"
                    className={inputCls}
                    value={form.category}
                    onChange={(e) => set("category", e.target.value)}
                    aria-invalid={!!errors.category}
                    aria-describedby={errors.category ? "category-error" : undefined}
                  >
                    <option value="">Select what you need…</option>
                    {CATEGORIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                  {errors.category && (
                    <p id="category-error" className="mt-1.5 text-xs text-red-300">
                      {errors.category}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className={labelCls}>
                    Project description <span className="text-violet-glow">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className={`${inputCls} resize-y`}
                    value={form.message}
                    onChange={(e) => set("message", e.target.value)}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    placeholder="What are you building, and what problem should it solve?"
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1.5 text-xs text-red-300">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="budget" className={labelCls}>
                      Indicative budget <span className="text-white/40">(optional)</span>
                    </label>
                    <select
                      id="budget"
                      className={inputCls}
                      value={form.budget}
                      onChange={(e) => set("budget", e.target.value)}
                    >
                      <option value="">Prefer not to say</option>
                      <option value="Under ₹50,000">Under ₹50,000</option>
                      <option value="₹50,000 – ₹2,00,000">₹50,000 – ₹2,00,000</option>
                      <option value="₹2,00,000 – ₹5,00,000">₹2,00,000 – ₹5,00,000</option>
                      <option value="Above ₹5,00,000">Above ₹5,00,000</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="preferredContact" className={labelCls}>
                      Preferred contact <span className="text-white/40">(optional)</span>
                    </label>
                    <select
                      id="preferredContact"
                      className={inputCls}
                      value={form.preferredContact}
                      onChange={(e) => set("preferredContact", e.target.value)}
                    >
                      <option value="">Email is fine</option>
                      <option value="Phone call">Phone call</option>
                      <option value="WhatsApp">WhatsApp</option>
                      <option value="Video call">Video call</option>
                    </select>
                  </div>
                </div>

                {/* Bot trap — hidden from humans */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                  value={form.honeypot}
                  onChange={(e) => set("honeypot", e.target.value)}
                />

                <div>
                  <label className="flex items-start gap-2.5 text-xs leading-relaxed text-white/60">
                    <input
                      type="checkbox"
                      className="mt-0.5 size-4 accent-[oklch(0.545_0.23_293)]"
                      checked={form.consent}
                      onChange={(e) => set("consent", e.target.checked)}
                      aria-invalid={!!errors.consent}
                    />
                    <span>
                      I'm happy for UnicornDev to use these details to reply to my enquiry.
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="mt-1.5 text-xs text-red-300">{errors.consent}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
                >
                  Send enquiry
                  <ArrowRight className="size-4" aria-hidden="true" />
                </button>
                <p className="text-center text-xs text-white/40">
                  Submitting opens your email app with the enquiry pre-filled.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink pb-10 pt-14 text-ink-foreground">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid size-8 place-items-center rounded-lg bg-primary font-display text-sm font-bold text-primary-foreground">
                U
              </span>
              <span className="font-display text-lg font-semibold">UnicornDev</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              Websites, apps, software and smart digital tools — designed around your idea, your
              customers and the way your business works. Pune, Maharashtra, India.
            </p>
          </div>
          <nav aria-label="Footer">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                ["Services", "#services"],
                ["What we build", "#work"],
                ["Our process", "#process"],
                ["About", "#about"],
                ["Start a project", "#contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="text-white/70 transition-colors hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40">
              Legal
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="/privacy" className="text-white/70 transition-colors hover:text-white">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-12 border-t border-white/10 pt-6 text-xs text-white/40">
          © {new Date().getFullYear()} UnicornDev. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
