import { Separator } from "@/components/ui/separator";

const FOOTER_LINKS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#how-it-works" },
      { label: "Pricing", href: "#pricing" },
      { label: "Waitlist", href: "#waitlist" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Security", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-inertia-cream px-4 pt-16 pb-8 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <span className="font-serif text-2xl font-bold text-inertia-primary">Inertia</span>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-inertia-secondary/60">
              The financial tool that adapts to you. Built on behavioral science, designed with
              empathy.
            </p>
            {/* Logo mark */}
            <div className="mt-6 flex h-10 w-10 items-center justify-center rounded-full bg-inertia-primary text-white">
              <span className="font-serif text-lg font-bold">n</span>
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h4 className="mb-4 text-sm font-semibold text-inertia-primary">{group.title}</h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-inertia-secondary/60 transition-colors hover:text-inertia-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8 bg-inertia-tint/30" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-inertia-secondary/40">
            © {new Date().getFullYear()} Inertia. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-inertia-secondary/40 hover:text-inertia-primary">
              Twitter
            </a>
            <a href="#" className="text-xs text-inertia-secondary/40 hover:text-inertia-primary">
              LinkedIn
            </a>
            <a href="#" className="text-xs text-inertia-secondary/40 hover:text-inertia-primary">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
