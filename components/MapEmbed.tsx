"use client";

import { useEffect, useState } from "react";
import { CONSENT_EVENT, getConsent } from "@/lib/consent";

const SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.3222336293074!2d19.602458812592563!3d44.97275647094948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ba586c264b055%3A0x719b6737c8f447ec!2sVanja%20Fitness!5e1!3m2!1ssr!2srs!4v1783951479759!5m2!1ssr!2srs";

// Google mapa postavlja kolačiće, pa se učitava tek uz pristanak ili na klik.
export default function MapEmbed({ title, address }: { title: string; address: string }) {
  const [show, setShow] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (getConsent() === "granted") setShow(true);
    const onChange = (e: Event) => {
      if ((e as CustomEvent).detail === "granted") setShow(true);
    };
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  if (show) {
    return (
      <iframe
        title={title}
        src={SRC}
        width="100%"
        height="380"
        className="map-frame"
        style={{ border: 0, display: "block", opacity: loaded ? 1 : 0 }}
        onLoad={() => setLoaded(true)}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    );
  }

  return (
    <div className="flex h-[380px] flex-col items-center justify-center gap-4 bg-cream px-6 text-center">
      <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-espresso">
        {address}
      </p>
      <p className="max-w-sm text-sm text-espresso/60">
        Mapa se učitava sa Google-a, koji pri tome koristi kolačiće.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <button type="button" onClick={() => setShow(true)} className="btn-primary">
          Prikaži mapu
        </button>
        <a
          href="https://maps.app.goo.gl/E1cZ3JQNbQPmEwGW9"
          data-cta="mapa_link"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
        >
          Otvori u Google mapama
        </a>
      </div>
    </div>
  );
}
