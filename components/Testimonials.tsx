const quotes = [
  {
    text: "Prvi put da mi je teretana zabavna. Vanja te isprati kroz svaki pokret.",
    who: "ime članice",
  },
  {
    text: "Za tri meseca sam zategla telo i, što je najvažnije, ostala dosledna.",
    who: "ime članice",
  },
  {
    text: "Mala grupa, super energija. Konačno mesto gde se ne osećam posmatrano.",
    who: "ime članice",
  },
];

export default function Testimonials() {
  return (
    <section id="utisci" className="section">
      <div className="wrap">
        <div className="mx-auto max-w-xl text-center">
          <span className="kicker">Utisci</span>
          <h2 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">
            Reči <span className="italic">naših žena</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <figure key={i} className="card">
              <div className="text-ink/70">★★★★★</div>
              <blockquote className="mt-4 font-serif text-xl italic text-ink">
                „{q.text}"
              </blockquote>
              <figcaption className="mt-5 text-sm uppercase tracking-wide text-ink/45">
                — {q.who}
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-ink/40">
          Placeholder — zameni stvarnim utiscima i before/after fotografijama iz
          septembarske grupe.
        </p>
      </div>
    </section>
  );
}
