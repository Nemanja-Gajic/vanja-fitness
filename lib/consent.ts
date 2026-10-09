// Pristanak za kolačiće (član 126 Zakona o elektronskim komunikacijama).
// GA4 i Meta Pixel se učitavaju TEK kad korisnica klikne "Prihvatam".

export type Consent = "granted" | "denied";

const KEY = "vf-consent";
export const CONSENT_EVENT = "vf-consent-change";
export const OPEN_SETTINGS_EVENT = "vf-consent-open";

export function getConsent(): Consent | null {
  try {
    const v = window.localStorage.getItem(KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

export function setConsent(value: Consent) {
  const before = getConsent();
  try {
    window.localStorage.setItem(KEY, value);
  } catch {
    /* privatni prozor: pamti se samo do kraja posete */
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));

  // Opoziv pristanka: obriši kolačiće analitike i reklama i učitaj stranu ponovo,
  // da skripte koje su već učitane prestanu da rade.
  if (before === "granted" && value === "denied") {
    clearTrackingCookies();
    window.location.reload();
  }
}

export function openConsentSettings() {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}

function clearTrackingCookies() {
  const names = document.cookie
    .split(";")
    .map((c) => c.split("=")[0].trim())
    .filter((n) => n === "_ga" || n.startsWith("_ga_") || n === "_gid" || n === "_fbp" || n === "_fbc");
  const host = window.location.hostname;
  const domains = ["", host, "." + host, "." + host.replace(/^www\./, "")];
  for (const name of names) {
    for (const d of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/${d ? `; domain=${d}` : ""}`;
    }
  }
}
