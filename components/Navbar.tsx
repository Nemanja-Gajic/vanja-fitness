"use client";

import { useState } from "react";
import { site } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-mist/85 backdrop-blur-md">
      <nav className="wrap flex h-[72px] items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img
            src="/vanja-logo.png"
            alt="Vanja Fitness logo"
            className="h-12 w-auto"
          />
          <span className="font-serif text-2xl text-ink">{site.name}</span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-ink/70 transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href={site.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary hidden md:inline-flex"
        >
          Besplatna proba
        </a>

        <button
          aria-label="Meni"
          className="text-2xl text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink/10 bg-mist md:hidden">
          <div className="wrap flex flex-col gap-1 py-4">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 text-ink/80"
              >
                {item.label}
              </a>
            ))}
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-2"
            >
              Besplatna proba
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
