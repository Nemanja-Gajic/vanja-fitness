import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-espresso py-14 text-cream/60">
      <div className="wrap">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <img
              src="/vanja-logo-white.png"
              alt="Vanja Fitness logo"
              className="h-12 w-auto"
            />
            <span className="font-display text-sm font-bold uppercase tracking-[0.22em] text-cream">
              {site.name}
            </span>
          </div>

          <nav className="flex flex-wrap gap-x-7 gap-y-2 text-sm">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-cream"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition-colors hover:text-cream"
          >
            {site.instagramHandle}
          </a>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-cream/10 pt-6 text-sm text-cream/45 sm:flex-row sm:justify-between">
          <p>
            {site.tagline} · {site.address}, {site.postalCode} {site.city},
            Srbija
          </p>
          <p>
            © {new Date().getFullYear()} {site.name}. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
}
