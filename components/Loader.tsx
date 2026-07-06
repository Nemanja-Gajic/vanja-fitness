"use client";

import { useEffect, useState } from "react";

const MIN_SHOW = 600; // ms — avoid a flash
const MAX_SHOW = 3500; // ms — never block longer than this

export default function Loader() {
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const started = Date.now();
    let finished = false;

    const finish = () => {
      if (finished) return;
      finished = true;
      const wait = Math.max(0, MIN_SHOW - (Date.now() - started));
      window.setTimeout(() => {
        // signal the hero that it can start its entrance
        document.documentElement.classList.add("app-ready");
        setLeaving(true);
        window.setTimeout(() => setGone(true), 700);
      }, wait);
    };

    const ready = () => {
      const fonts =
        "fonts" in document ? document.fonts.ready : Promise.resolve();
      fonts.then(finish).catch(finish);
    };

    if (document.readyState === "complete") {
      ready();
    } else {
      window.addEventListener("load", ready, { once: true });
    }

    // hard fallback so the site can never stay covered
    const failsafe = window.setTimeout(finish, MAX_SHOW);

    return () => {
      window.removeEventListener("load", ready);
      window.clearTimeout(failsafe);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center gap-5 bg-cream transition-opacity duration-700 ease-out ${
        leaving ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <span className="script loader-pulse text-5xl text-taupe sm:text-6xl">vanjaa.fitness</span>
      <span className="loader-bar" />
    </div>
  );
}
