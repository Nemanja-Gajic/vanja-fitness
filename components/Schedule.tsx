const days = ["Ponedeljak", "Utorak", "Sreda", "Četvrtak", "Petak"];

export default function Schedule() {
  return (
    <section id="termini" className="section">
      <div className="wrap">
        <div className="mx-auto max-w-xl text-center">
          <span className="kicker">Termini</span>
          <h2 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">
            Treniraj <span className="italic">kad tebi odgovara</span>
          </h2>
          <p className="mt-4 text-ink/60">
            Treninzi su od ponedeljka do petka, u jutarnjim i večernjim
            terminima. Izaberi deo dana koji ti odgovara.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {days.map((day) => (
            <div
              key={day}
              className="rounded-4xl border border-ink/[0.08] bg-white p-6 text-center shadow-[0_8px_30px_rgba(19,19,19,0.04)]"
            >
              <p className="font-serif text-xl text-ink">{day}</p>
              <div className="mt-5 space-y-2">
                <span className="block rounded-full bg-peach px-3 py-1.5 text-sm font-medium text-ink">
                  Jutarnji termin
                </span>
                <span className="block rounded-full bg-lilac px-3 py-1.5 text-sm font-medium text-ink">
                  Večernji termin
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-ink/45">
          * Za tačno vreme treninga javi se porukom — dogovaramo termin koji ti
          najviše odgovara.
        </p>
      </div>
    </section>
  );
}
