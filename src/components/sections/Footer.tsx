import Image from "next/image";
import Link from "next/link";
import { MapPin, PhoneCall, Mail, Clock4 } from "lucide-react";

const COLS = [
  {
    title: "Explore",
    links: [
      { label: "Programs", href: "#programs" },
      { label: "Curriculum", href: "#curriculum" },
      { label: "Gallery", href: "#gallery" },
      { label: "Tuition", href: "#tuition" },
      { label: "Visit", href: "#visit" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "(718) 404-6909", href: "tel:+17184046909", icon: PhoneCall },
      { label: "sunshineslearninglaboratoryinc@gmail.com", href: "mailto:sunshineslearninglaboratoryinc@gmail.com", icon: Mail },
      {
        label: "159-14 134th Ave, Jamaica, NY 11434",
        href: "https://maps.google.com/?q=159-14+134th+Avenue,+1st+Floor,+Jamaica,+NY+11434",
        icon: MapPin,
      },
      { label: "Mon–Fri · 8:00 AM – 6:00 PM", href: "#tuition", icon: Clock4 },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative w-full border-t-4 border-[var(--sunshine-yellow)]/60 bg-[#1F2A44] text-[#FFF4D6]">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3" aria-label="Sunshine's Learning Laboratory home">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white shadow ring-2 ring-primary/40">
              <Image
                src="/LOGOSS.png"
                alt=""
                width={48}
                height={48}
                className="h-10 w-10 object-contain"
              />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-heading text-xl font-extrabold text-white">
                Sunshine&rsquo;s
              </span>
              <span className="font-display text-[11px] font-bold uppercase tracking-widest text-white/70">
                Learning Laboratory
              </span>
            </span>
          </Link>
          <p className="mt-5 max-w-sm font-display text-sm text-white/75">
            A NYS-licensed daycare and learning lab in Jamaica, NY for kids 6
            weeks – 12 years. Where curiosity grows wings.
          </p>
        </div>

        {COLS.map((col) => (
          <div key={col.title}>
            <h3 className="font-heading text-base font-extrabold uppercase tracking-widest text-[var(--sunshine-yellow)]">
              {col.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => {
                const Icon = "icon" in link ? link.icon : undefined;
                const external = link.href.startsWith("http") || link.href.startsWith("mailto") || link.href.startsWith("tel");
                return (
                  <li key={link.href + link.label}>
                    <a
                      href={link.href}
                      {...(external ? { rel: "noopener noreferrer", target: link.href.startsWith("http") ? "_blank" : undefined } : {})}
                      className="inline-flex items-center gap-2 rounded-full font-display text-sm font-medium text-white/85 transition-colors hover:text-[var(--sunshine-yellow)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--sunshine-yellow)]/40"
                    >
                      {Icon && <Icon className="h-4 w-4 text-[var(--sunshine-yellow)]" aria-hidden="true" />}
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 sm:flex-row sm:px-6 lg:px-8">
          <p className="font-display text-xs text-white/65">
            © {new Date().getFullYear()} Sunshine&rsquo;s Learning Laboratory Inc. All rights reserved.
          </p>
          <p className="font-display text-xs text-white/65">
            Made with care in Jamaica, NY ☀️
          </p>
        </div>
      </div>
    </footer>
  );
}
