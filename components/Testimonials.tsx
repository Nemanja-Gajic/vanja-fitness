import Reveal from "./Reveal";

// Pravi utisci članica (ime + saglasnost). Kad bude 3+, grid se sam vraća na kolone.
const quotes = [
  {
    text: "Sa Vanjom treniram od 2022. godine i mogu iskreno da kažem da je to jedna od najboljih odluka koje sam donela za sebe. Došla sam potpuno neaktivna, nespremna i sa viškom kilograma, a danas sam mnogo zadovoljnija sobom, jača i istrajnija. Ono što Vanju izdvaja nisu samo stručnost i kvalitetni treninzi, već i podrška, motivacija i posvećenost svakom klijentu. Treninzi su prilagodljivi svima, a posle svakog osećam da sam uradila nešto dobro za svoje telo i svoj um. Od srca je preporučujem svima koji žele rezultate, ali i zdrav odnos prema treningu i sebi.",
    who: "Ivana Vitorović, 38",
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

        <div
          className={
            quotes.length === 1
              ? "mx-auto mt-14 max-w-2xl"
              : "mt-14 grid gap-6 md:grid-cols-3"
          }
        >
          {quotes.map((q, i) => (
            <Reveal key={i} delay={i * 130} className="h-full">
              <figure className="card h-full">
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
      </div>
    </section>
  );
}
