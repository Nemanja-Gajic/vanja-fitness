"use client";

import { useEffect, useState } from "react";
import { OPEN_SETTINGS_EVENT, getConsent, setConsent } from "@/lib/consent";

export default function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (window.location.pathname.startsWith("/studio")) return;
    if (getConsent() === null) setOpen(true);
    const onOpen = () => {
      setLeaving(false);
      setOpen(true);
    };
    window.addEventListener(OPEN_SETTINGS_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, onOpen);
  }, []);

  if (!open) return null;

  const choose = (v: "granted" | "denied") => {
    setConsent(v);
    setLeaving(true);
    window.setTimeout(() => {
      setOpen(false);
      setLeaving(false);
    }, 200);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Podešavanja kolačića"
      className={`cookie-banner ${leaving ? "is-leaving" : ""} fixed inset-x-3 bottom-3 z-[90] mx-auto max-w-xl rounded-3xl border border-espresso/10 bg-cream p-5 text-espresso shadow-[0_12px_40px_rgba(35,27,21,0.18)] sm:bottom-5 sm:p-6`}
    >
      <p className="font-display text-sm font-bold uppercase tracking-[0.18em]">
        Kolačići
      </p>
      <p className="mt-2 text-sm leading-relaxed text-espresso/75">
        Uz tvoju dozvolu koristimo kolačiće Google Analytics i Meta Pixel. Pomažu
        nam da vidimo kako se sajt koristi i da merimo reklame na Instagramu. Ako
        odbiješ, sajt radi isto. Detalji su u{" "}
        <a
          href="/politika-privatnosti#kolacici"
          className="font-medium underline decoration-taupe underline-offset-4 hover:text-taupe"
        >
          politici privatnosti
        </a>
        .
      </p>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => choose("denied")}
          className="rounded-full border border-espresso/30 px-5 py-3 btn-press text-sm font-medium hover:border-espresso hover:bg-espresso hover:text-cream"
        >
          Odbijam
        </button>
        <button
          type="button"
          onClick={() => choose("granted")}
          className="rounded-full border border-espresso bg-espresso px-5 py-3 btn-press text-sm font-medium text-cream hover:bg-cocoa"
        >
          Prihvatam
        </button>
      </div>
    </div>
  );
}
