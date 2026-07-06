import Reveal from "./Reveal";

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
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="kicker">Utisci</span>
          <h2 className="mt-4 text-3xl text-espresso sm:text-5xl">
            Reči{" "}
            <span className="script text-[1.35em] text-taupe">naših žena</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <Reveal key={i} delay={i * 130} className="h-full">
              <figure className="card h-full hover:-translate-y-1.5 hover:shadow-[0_18px_45px_rgba(35,27,21,0.1)]">
                <div className="text-taupe">★★★★★</div>
                <blockquote className="mt-4 text-lg font-light leading-relaxed text-espresso/85">
                  „{q.text}"
                </blockquote>
                <figcaption className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-taupe">
                  — {q.who}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-espresso/40">
          Placeholder — zameni stvarnim utiscima i before/after fotografijama iz
          septembarske grupe.
        </p>
      </div>
    </section>
  );
}
