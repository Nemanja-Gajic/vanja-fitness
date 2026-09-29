import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prijava | Vanja Studio",
  robots: { index: false, follow: false },
};

const PORUKE: Record<string, { naslov: string; tekst: string }> = {
  "1": { naslov: "Pogrešno korisničko ime ili lozinka.", tekst: "Proveri da li je ime ukucano malim slovima i bez razmaka. Ako si zaboravila lozinku, Vanja može da postavi novu u Nalozi." },
  "2": { naslov: "Ovaj nalog još nema svoju lozinku.", tekst: "Vanja treba da otvori Nalozi, klikne na ovaj nalog i upiše novu lozinku." },
  "3": { naslov: "Ovaj nalog je isključen.", tekst: "Vanja može da ga uključi u Nalozi." },
  "4": { naslov: "Prijava trenutno ne radi.", tekst: "Sajt nije do kraja podešen (lozinka ili baza u Vercel podešavanjima). Javi se onome ko održava sajt." },
  "5": { naslov: "Baza ne odgovara.", tekst: "Sačekaj malo i pokušaj ponovo. Ako se ponavlja, javi se onome ko održava sajt." },
};

export default function Prijava({ searchParams }: { searchParams: { greska?: string } }) {
  const greska = searchParams?.greska;
  const poruka = greska ? PORUKE[greska] || PORUKE["1"] : null;
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
        {poruka ? (
          <div role="alert" style={{ background: "#FBE9EC", border: "1px solid #E9B8C1", color: "#8E1F33", borderRadius: 10, padding: "10px 12px", fontSize: 14, lineHeight: 1.4 }}>
            <div style={{ fontWeight: 600 }}>{poruka.naslov}</div>
            <div style={{ color: "#6B3440", marginTop: 2 }}>{poruka.tekst}</div>
          </div>
        ) : null}
        <button type="submit" style={{ background: "#6E1F33", color: "#fff", border: 0, borderRadius: 10, padding: "12px 14px", fontSize: 16, fontWeight: 600, cursor: "pointer" }}>Prijavi se</button>
      </form>
    </main>
  );
}
