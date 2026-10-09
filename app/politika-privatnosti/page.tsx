import type { Metadata } from "next";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieSettingsButton from "@/components/CookieSettingsButton";
import { site } from "@/lib/site";

// Kontakt rukovaoca podacima. Kad se otvori firma: promeni ime, dodaj MB i PIB.
const rukovalac = {
  ime: "Vanja Gajić",
  email: "vanjadrljaca@outlook.com",
};
const AZURIRANO = "9. oktobar 2026.";

export const metadata: Metadata = {
  title: "Politika privatnosti i kolačića | Vanja Fitness",
  description:
    "Koje podatke sajt vanjafitness.rs prikuplja, zašto, koliko ih čuvamo i koja su tvoja prava. Pravila o kolačićima.",
  alternates: { canonical: "/politika-privatnosti" },
};

function H2({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h2
      id={id}
      className="mt-12 scroll-mt-28 font-display text-lg font-bold uppercase tracking-wide text-espresso sm:text-xl"
    >
      {children}
    </h2>
  );
}

const P = ({ children }: { children: ReactNode }) => (
  <p className="mt-4 leading-relaxed text-espresso/75">{children}</p>
);

const UL = ({ children }: { children: ReactNode }) => (
  <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-espresso/75">
    {children}
  </ul>
);

const Mail = () => (
  <a
    href={`mailto:${rukovalac.email}`}
    className="font-medium text-espresso underline decoration-taupe underline-offset-4 hover:text-taupe"
  >
    {rukovalac.email}
  </a>
);

const kolacici = [
  ["vf-consent", "Vanja Fitness", "Pamti da li si prihvatila ili odbila kolačiće.", "Neophodan", "Dok ga ne obrišeš"],
  ["Sesija za Vanja Studio", "Vanja Fitness", "Prijava članica i trenera u aplikaciju studija.", "Neophodan", "Do odjave"],
  ["_ga, _ga_*", "Google Analytics", "Broji posete i prati koje stranice i dugmad se koriste.", "Analitički, uz pristanak", "Do 2 godine"],
  ["_fbp, _fbc", "Meta (Facebook, Instagram)", "Meri rezultate reklama na Instagramu.", "Marketinški, uz pristanak", "Do 90 dana"],
  ["Google mape", "Google", "Prikaz mape sa lokacijom studija.", "Uz pristanak ili klik na mapu", "Po Google pravilima"],
];

export default function PrivacyPage() {
  return (
    <main>
      <Navbar />
      <section className="section">
        <div className="wrap max-w-3xl">
          <span className="kicker">Pravne informacije</span>
          <h1 className="mt-4 text-3xl text-espresso sm:text-5xl">
            Politika{" "}
            <span className="script text-[1.35em] text-taupe">privatnosti</span>
          </h1>
          <p className="mt-4 text-sm text-espresso/50">
            Poslednja izmena: {AZURIRANO}
          </p>

          <P>
            Ovde piše koje podatke prikupljamo kad posetiš sajt {site.url.replace("https://", "")}{" "}
            ili treniraš u studiju, zašto to radimo i šta možeš da tražiš od
            nas. Pisali smo jednostavno, bez pravničkog jezika gde god je to
            moguće.
          </P>

          <H2>1. Ko je odgovoran za tvoje podatke</H2>
          <P>
            Rukovalac podacima je {rukovalac.ime}, {site.address},{" "}
            {site.postalCode} {site.city}, Srbija. Za sva pitanja o privatnosti
            piši na <Mail />.
          </P>

          <H2>2. Koje podatke prikupljamo</H2>
          <P>
            <strong className="text-espresso">Kad posećuješ sajt.</strong> Sajt
            nema formulare, naloge za posetioce ni online plaćanje. Samo ako
            prihvatiš kolačiće, Google Analytics i Meta Pixel beleže podatke o
            poseti: koje stranice gledaš, na koja dugmad klikćeš, vrstu uređaja
            i pregledača, približnu lokaciju (grad) i odakle si došla na sajt.
            Ne vidimo tvoje ime niti ko si.
          </P>
          <P>
            <strong className="text-espresso">Kad nam pišeš na Instagramu.</strong>{" "}
            Dugmad na sajtu vode u Instagram poruke. Tvoje ime, profil i poruku
            koristimo samo da dogovorimo termin i odgovorimo na pitanja. Poruke
            obrađuje i Meta, po svojim pravilima privatnosti.
          </P>
          <P>
            <strong className="text-espresso">Kad treniraš u studiju.</strong>{" "}
            Vodimo evidenciju članica: ime i prezime, kontakt, grupu i termine,
            dolaske i uplate. Ako ti napravimo pristup aplikaciji studija, čuvamo
            i korisničko ime i šifru u zaštićenom obliku.
          </P>

          <H2>3. Zašto i na osnovu čega</H2>
          <UL>
            <li>
              Analitika i merenje reklama: samo na osnovu tvog pristanka. Pristanak
              možeš da povučeš u svakom trenutku.
            </li>
            <li>
              Dogovor termina i evidencija članica: zato što je to potrebno da bi
              ti pružili uslugu treninga koju si tražila.
            </li>
            <li>
              Čuvanje podataka o uplatama: kad to traže propisi.
            </li>
          </UL>

          <H2>4. Ko još vidi podatke</H2>
          <P>
            Podatke ne prodajemo i ne dajemo nikome za njegove reklame. Koristimo
            ove servise:
          </P>
          <UL>
            <li>Google (Google Analytics, Google mape)</li>
            <li>Meta Platforms (Instagram, Meta Pixel)</li>
            <li>Vercel (hosting sajta) i Upstash (baza aplikacije studija)</li>
          </UL>
          <P>
            Ovi servisi čuvaju podatke i van Srbije, u Evropskoj uniji i SAD.
            Prenos se radi uz zaštitne mere koje ti servisi primenjuju po
            pravilima EU (standardne ugovorne klauzule i EU–US okvir za zaštitu
            podataka).
          </P>

          <H2>5. Koliko dugo čuvamo podatke</H2>
          <UL>
            <li>Podaci u Google Analytics: najduže 14 meseci.</li>
            <li>Kolačići: koliko piše u tabeli ispod.</li>
            <li>Instagram poruke: dok traje razgovor ili ih ne obrišeš.</li>
            <li>
              Evidencija članica: dok treniraš kod nas, a zatim najduže godinu dana,
              osim podataka koje propisi traže da se čuvaju duže.
            </li>
          </UL>

          <H2 id="kolacici">6. Kolačići</H2>
          <P>
            Kolačići su male datoteke koje sajt čuva u tvom pregledaču. Neophodni
            rade uvek, jer bez njih sajt ne može da zapamti tvoj izbor. Sve ostale
            uključujemo tek kad klikneš „Prihvatam”. Ako odbiješ, sajt radi isto.
          </P>
          <div className="mt-6 overflow-x-auto rounded-3xl border border-espresso/10 bg-white">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="bg-sand text-espresso">
                <tr>
                  <th className="px-4 py-3 font-semibold">Naziv</th>
                  <th className="px-4 py-3 font-semibold">Ko ga postavlja</th>
                  <th className="px-4 py-3 font-semibold">Čemu služi</th>
                  <th className="px-4 py-3 font-semibold">Vrsta</th>
                  <th className="px-4 py-3 font-semibold">Trajanje</th>
                </tr>
              </thead>
              <tbody className="text-espresso/75">
                {kolacici.map((r) => (
                  <tr key={r[0]} className="border-t border-espresso/10 align-top">
                    {r.map((c, i) => (
                      <td key={i} className="px-4 py-3">
                        {c}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <P>
            Izbor možeš da promeniš bilo kad:{" "}
            <CookieSettingsButton className="font-medium text-espresso underline decoration-taupe underline-offset-4 hover:text-taupe" />
            . Kolačiće možeš da obrišeš i u podešavanjima svog pregledača.
          </P>

          <H2>7. Tvoja prava</H2>
          <P>Imaš pravo da tražiš:</P>
          <UL>
            <li>da saznaš koje podatke o tebi imamo i dobiješ kopiju,</li>
            <li>da ispravimo netačne podatke,</li>
            <li>da obrišemo tvoje podatke,</li>
            <li>da ograničimo obradu ili da se usprotiviš obradi,</li>
            <li>da ti podatke damo u obliku koji možeš da preneseš drugome,</li>
            <li>da povučeš pristanak, bez posledica za ono što je urađeno pre toga.</li>
          </UL>
          <P>
            Piši na <Mail />. Odgovaramo najkasnije u roku od 30 dana. Ako misliš
            da tvoje podatke ne obrađujemo po zakonu, možeš da podneseš pritužbu
            Povereniku za informacije od javnog značaja i zaštitu podataka o
            ličnosti, Bulevar kralja Aleksandra 15, Beograd,{" "}
            <a
              href="https://www.poverenik.rs"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-espresso underline decoration-taupe underline-offset-4 hover:text-taupe"
            >
              www.poverenik.rs
            </a>
            .
          </P>

          <H2>8. Izmene</H2>
          <P>
            Ako promenimo način na koji koristimo podatke, izmenićemo i ovu
            stranu i datum na vrhu.
          </P>
        </div>
      </section>
      <Footer />
    </main>
  );
}
