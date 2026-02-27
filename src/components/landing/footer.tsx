import Image from "next/image";

const FOOTER_LINKS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#how-it-works" },
      { label: "Quiz", href: "#quiz" },
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
    <footer className="bg-[#FAFAF7] px-4 pt-16 pb-8 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <Image
              src="/images/inertia-wordmark.png"
              alt="Inertia"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
            <p className="mt-4 max-w-xs font-[family-name:var(--font-dm-sans)] text-sm leading-relaxed text-[#8C938E]">
              The financial tool that adapts to you. Built on behavioral science, designed with
              empathy.
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h4 className="mb-4 font-[family-name:var(--font-dm-sans)] text-sm font-semibold text-[#153828]">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-[family-name:var(--font-dm-sans)] text-sm text-[#8C938E] transition-colors hover:text-[#153828]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-[#C4DED0]/30 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="font-[family-name:var(--font-inter)] text-xs text-[#8C938E]">
              © {new Date().getFullYear()} Inertia. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="font-[family-name:var(--font-inter)] text-xs text-[#8C938E] hover:text-[#153828]"
              >
                Twitter
              </a>
              <a
                href="#"
                className="font-[family-name:var(--font-inter)] text-xs text-[#8C938E] hover:text-[#153828]"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="font-[family-name:var(--font-inter)] text-xs text-[#8C938E] hover:text-[#153828]"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
