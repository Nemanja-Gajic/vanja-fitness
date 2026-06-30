const benefits = [
  {
    title: "Zategnuto telo",
    text: "Rad sa spravama i tegovima oblikuje i učvršćuje telo. Uz redovan trening vidiš i osećaš razliku već za jednu sezonu.",
  },
  {
    title: "Pravilna forma",
    text: "Svaki pokret pod nadzorom trenera — rezultat bez povreda i bez loših navika koje te kasnije koče.",
  },
  {
    title: "Više energije",
    text: "Redovan trening diže nivo energije, popravlja san i raspoloženje. Osećaš se bolje i van studija.",
  },
  {
    title: "Samopouzdanje",
    text: "Kad vidiš da napreduješ i da telo sluša, raste i samopouzdanje. To je ono što žene najviše pamte.",
  },
];

export default function Benefits() {
  return (
    <section className="section bg-ink text-mist">
      <div className="wrap">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div className="md:sticky md:top-28">
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-mist/50">
              Zašto vredi
            </span>
            <h2 className="mt-4 font-serif text-4xl text-mist sm:text-5xl">
              Promeni telo, <span className="italic">um i naviku</span>
            </h2>
            <p className="mt-5 max-w-sm text-mist/60">
              Bilo da želiš da smršaš, zategneš telo ili samo da se bolje
              osećaš, trening donosi promene koje se vide i u svakodnevnom
              životu.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-4xl border border-mist/10 bg-charcoal p-7"
              >
                <h3 className="font-serif text-xl text-mist">{b.title}</h3>
                <p className="mt-2 text-sm text-mist/60">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
