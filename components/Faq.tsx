const faqs = [
  {
    q: "Šta ako nikad nisam vežbala?",
    a: "Upravo zato postojimo. Krećemo od osnova, tvojim tempom, uz stalan nadzor forme. To je naš posao, ne tvoj.",
  },
  {
    q: "Moram li odmah da platim?",
    a: "Ne. Prva 3 treninga su potpuno besplatna — bez kartice i bez ugovora. Ostaješ samo ako ti se svidi.",
  },
  {
    q: "Koliko nas je u grupi?",
    a: "Male grupe od 4 do 8 žena, da svaka dobije dovoljno pažnje.",
  },
  {
    q: "Da li je studio samo za žene?",
    a: "Da — boutique studio isključivo za žene, sa atmosferom bez osude.",
  },
];

export default function Faq() {
  return (
    <section id="pitanja" className="section bg-mist-deep">
      <div className="wrap max-w-3xl">
        <div className="text-center">
          <span className="kicker">Česta pitanja</span>
          <h2 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">
            Pre nego što <span className="italic">kročiš</span>
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <details
              key={i}
              open={i === 0}
              className="group rounded-3xl border border-ink/[0.08] bg-white px-6 py-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between font-serif text-xl text-ink">
                {f.q}
                <span className="text-2xl text-ink/50 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-ink/65">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
