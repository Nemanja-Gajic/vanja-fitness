"use client";

import { useEffect } from "react";

// Prati klikove na sve linkove koji vode do konverzije.
// Jedan listener na dokumentu, bez menjanja strukture komponenti.
// Ime dugmeta se čita iz data-cta atributa, tip se određuje iz href-a.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function tipLinka(href: string): string | null {
  if (!href) return null;
  if (href.includes("instagram.com")) return "instagram";
  if (href.includes("maps.app.goo.gl") || href.includes("google.com/maps"))
    return "mapa";
  if (href.startsWith("#") || href.startsWith("/#")) return "sidro";
  if (href.startsWith("/blog")) return "blog";
  return null;
}

export default function Analytics() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const link = target?.closest?.("a") as HTMLAnchorElement | null;
      if (!link) return;

      const href = link.getAttribute("href") || "";
      const tip = tipLinka(href);
      if (!tip) return;

      const ime =
        link.dataset.cta ||
        href.replace(/^https?:\/\//, "").replace(/^\/?#?/, "") ||
        "nepoznato";

      window.gtag?.("event", "cta_click", {
        cta_id: ime,
        cta_tip: tip,
        link_url: href,
        stranica: window.location.pathname,
      });
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
