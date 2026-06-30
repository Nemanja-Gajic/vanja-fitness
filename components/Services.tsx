const services = [
  {
    title: "Grupni treninzi",
    text: "Male grupe od 4 do 8 žena, tri puta nedeljno. Sa snagom i spravama, uz stalan nadzor pravilne forme. Dovoljno pažnje za svaku, dovoljno energije da bude zabavno.",
    accent: "bg-lilac",
  },
  {
    title: "Individualni trening",
    text: "Trening jedan na jedan, potpuno prilagođen tvom telu, tempu i cilju. Idealno ako želiš maksimalnu pažnju i brži napredak.",
    accent: "bg-peach",
  },
  {
    title: "Praćenje napretka",
    text: "Mesečna merenja — težina, obim i sastav tela. Vidiš crno na belo da napreduješ i ostaješ motivisana.",
    accent: "bg-mint",
  },
];

export default function Services() {
  return (
    <section id="treninzi" className="section">
      <div className="wrap">
        <div className="mx-auto max-w-xl text-center">
          <span className="kicker">Šta nudimo</span>
          <h2 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">
            Trening za <span className="italic">svaku ženu</span>
          </h2>
          <p className="mt-4 text-ink/60">
            Ne juri se samo kilaža na šipci — radi se na tebi, tvojoj formi i
            tvom tempu.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="card transition-transform duration-200 hover:-translate-y-1"
            >
              <span
                className={`inline-grid h-12 w-12 place-items-center rounded-full ${s.accent} font-serif text-lg text-ink`}
              >
                ✦
              </span>
              <h3 className="mt-5 font-serif text-2xl text-ink">{s.title}</h3>
              <p className="mt-3 text-ink/60">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
