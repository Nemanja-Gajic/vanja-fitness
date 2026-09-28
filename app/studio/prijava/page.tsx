import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prijava | Vanja Studio",
  robots: { index: false, follow: false },
};

export default function Prijava({ searchParams }: { searchParams: { greska?: string } }) {
  const greska = searchParams?.greska;
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: "24px 16px", background: "#F6F1F2", color: "#2A1418", fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif" }}>
      <form method="post" action="/api/studio/login" style={{ width: "100%", maxWidth: 360, background: "#fff", border: "1px solid #E4D6D9", borderRadius: 16, padding: 24, display: "flex", flexDirection: "column", gap: 14 }}>
        <div>
          <div style={{ fontSize: 22, fontWeight: 600 }}>Vanja Studio</div>
          <div style={{ fontSize: 14, color: "#7A666B" }}>Prijavi se svojim korisničkim imenom i lozinkom.</div>
        </div>
        <label htmlFor="korisnik" style={{ fontSize: 13, color: "#7A666B" }}>Korisničko ime</label>
        <input id="korisnik" name="korisnik" type="text" required autoFocus autoCapitalize="none" autoCorrect="off" autoComplete="username"
          style={{ border: "1px solid #E4D6D9", borderRadius: 10, padding: "11px 12px", fontSize: 16 }} />
        <label htmlFor="lozinka" style={{ fontSize: 13, color: "#7A666B" }}>Lozinka</label>
        <input id="lozinka" name="lozinka" type="password" required autoComplete="current-password"
          style={{ border: "1px solid #E4D6D9", borderRadius: 10, padding: "11px 12px", fontSize: 16 }} />
        {greska ? <div role="alert" style={{ color: "#A3263B", fontSize: 14 }}>Pogrešno korisničko ime ili lozinka.</div> : null}
        <button type="submit" style={{ background: "#6E1F33", color: "#fff", border: 0, borderRadius: 10, padding: "12px 14px", fontSize: 16, fontWeight: 600, cursor: "pointer" }}>Prijavi se</button>
      </form>
    </main>
  );
}
