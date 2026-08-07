import Reveal from "./Reveal";

const days = ["Ponedeljak", "Utorak", "Sreda", "Četvrtak", "Petak"];

export default function Schedule() {
  return (
    <section id="termini" className="section">
      <div className="wrap">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="kicker">Termini</span>
          <h2 className="mt-4 text-3xl text-espresso sm:text-5xl">
            Treniraj{" "}
            <span className="script text-[1.35em] text-taupe">
              kad tebi odgovara
            </span>
          </h2>
          <p className="mt-4 text-espresso/60">
            Treninzi su od ponedeljka do petka, u jutarnjim i večernjim
            terminima. Izaberi deo dana koji ti odgovara.
          </p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {days.map((day, i) => (
            <Reveal key={day} delay={i * 90} className="h-full">
              <div className="h-full rounded-4xl border border-espresso/[0.08] bg-white p-6 text-center shadow-[0_8px_30px_rgba(35,27,21,0.04)] transition-transform duration-300 hover:-translate-y-1">
                <p className="font-display text-base font-bold uppercase tracking-wide text-espresso">
                  {day}
                </p>
                <div className="mt-5 space-y-2">
                  <span className="block rounded-full bg-sand-deep px-3 py-1.5 text-sm font-medium text-espresso">
                    Jutarnji · 8–10h
                  </span>
                  <span className="block rounded-full bg-espresso px-3 py-1.5 text-sm font-medium text-cream">
                    Večernji · 18–21h
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-6 text-center text-sm text-espresso/60">
            * Za tačno vreme treninga javi se porukom, dogovaramo termin koji
            ti najviše odgovara.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
