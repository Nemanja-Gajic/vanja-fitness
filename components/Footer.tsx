import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-mist py-14 text-ink/60">
      <div className="wrap">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <img
              src="/vanja-logo.png"
              alt="Vanja Fitness logo"
              className="h-12 w-auto"
            />
            <span className="font-serif text-2xl text-ink">{site.name}</span>
          </div>

          <nav className="flex flex-wrap gap-x-7 gap-y-2 text-sm">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm transition-colors hover:text-ink"
          >
            {site.instagramHandle}
          </a>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-ink/10 pt-6 text-sm text-ink/45 sm:flex-row sm:justify-between">
          <p>
            {site.tagline} · {site.city}, Srbija
          </p>
          <p>
            © {new Date().getFullYear()} {site.name}. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
}
