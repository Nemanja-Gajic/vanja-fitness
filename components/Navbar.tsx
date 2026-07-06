"use client";

import { useState } from "react";
import { site } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-espresso/10 bg-cream/85 backdrop-blur-md">
      <nav className="wrap flex h-[72px] items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img
            src="/vanja-logo.png"
            alt="Vanja Fitness logo"
            width={1186}
            height={1421}
            className="h-12 w-auto"
          />
          <span className="font-display text-sm font-bold uppercase tracking-[0.22em] text-espresso">
            {site.name}
          </span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-espresso/70 transition-colors hover:text-espresso"
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
          className="text-2xl text-espresso md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <div className="border-t border-espresso/10 bg-cream md:hidden">
          <div className="wrap flex flex-col gap-1 py-4">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 text-espresso/80"
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
