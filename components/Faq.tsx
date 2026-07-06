import Reveal from "./Reveal";

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
    <section id="pitanja" className="section bg-sand">
      <div className="wrap max-w-3xl">
        <Reveal className="text-center">
          <span className="kicker">Česta pitanja</span>
          <h2 className="mt-4 text-3xl text-espresso sm:text-5xl">
            Pre nego što{" "}
            <span className="script text-[1.35em] text-taupe">kročiš</span>
          </h2>
        </Reveal>

        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={i} delay={i * 90}>
              <details
                open={i === 0}
                className="group rounded-3xl border border-espresso/[0.08] bg-white px-6 py-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between font-display text-lg font-semibold text-espresso">
                  {f.q}
                  <span className="text-2xl text-espresso/50 transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-espresso/65">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
