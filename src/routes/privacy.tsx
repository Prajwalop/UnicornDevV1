import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      {
        title: "Privacy Policy — UnicornDev",
        description: "How UnicornDev handles the information you share through our enquiry form.",
      },
      { property: "og:title", content: "Privacy Policy — UnicornDev" },
      {
        property: "og:description",
        content: "How UnicornDev handles the information you share through our enquiry form.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Link to="/" className="text-sm font-semibold text-primary hover:text-primary/80">
        ← Back to UnicornDev
      </Link>
      <h1 className="mt-6 font-display text-4xl font-bold">Privacy policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Last updated: {new Date().getFullYear()}
      </p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground/85">
        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">What we collect</h2>
          <p className="mt-2">
            When you send an enquiry through this website, we receive the details you choose to
            share — typically your name, email address, business name, phone number and a
            description of your project. We use this information for one purpose: to understand and
            respond to your enquiry.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">How we use it</h2>
          <p className="mt-2">
            Your details are used to reply to you and, if we work together, to deliver the agreed
            project. We do not sell, rent or share your information with third parties for
            marketing. We don't run advertising trackers on this website.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">Retention</h2>
          <p className="mt-2">
            We keep enquiry correspondence only as long as it's useful for our conversation and any
            resulting project. You can ask us to delete your details at any time.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">Your choices</h2>
          <p className="mt-2">
            You may request access to, correction of, or deletion of the information you've shared
            by replying to any email we've sent you.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">Contact</h2>
          <p className="mt-2">
            Questions about this policy? Mention them in your enquiry via the{" "}
            <Link to="/" className="font-semibold text-primary hover:text-primary/80">
              contact section on our homepage
            </Link>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
