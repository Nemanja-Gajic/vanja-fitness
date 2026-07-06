import Reveal from "./Reveal";

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
    <section className="section bg-espresso text-cream">
      <div className="wrap">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <Reveal className="md:sticky md:top-28">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-latte">
              Zašto vredi
            </span>
            <h2 className="mt-4 text-3xl text-cream sm:text-5xl">
              Promeni telo,
              <span className="script -mb-1 mt-1 block text-[1.6em] text-latte">
                um i naviku
              </span>
            </h2>
            <p className="mt-5 max-w-sm text-cream/60">
              Bilo da želiš da smršaš, zategneš telo ili samo da se bolje
              osećaš, trening donosi promene koje se vide i u svakodnevnom
              životu.
            </p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 110}>
                <div className="h-full rounded-4xl border border-cream/10 bg-cocoa p-7 transition-transform duration-300 hover:-translate-y-1">
                  <h3 className="text-lg text-cream">{b.title}</h3>
                  <p className="mt-2 text-sm text-cream/60">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
