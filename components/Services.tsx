import Reveal from "./Reveal";

const services = [
  {
    num: "01",
    title: "Grupni treninzi",
    text: "Male grupe od 4 do 8 žena, tri puta nedeljno. Sa snagom i spravama, uz stalan nadzor pravilne forme. Dovoljno pažnje za svaku, dovoljno energije da bude zabavno.",
  },
  {
    num: "02",
    title: "Personalni trening",
    text: "Trening jedan na jedan, potpuno prilagođen tvom telu, tempu i cilju. Idealno ako želiš maksimalnu pažnju i brži napredak.",
  },
  {
    num: "03",
    title: "Praćenje napretka",
    text: "Mesečna merenja — težina, obim i sastav tela. Vidiš crno na belo da napreduješ i ostaješ motivisana.",
  },
  {
    num: "04",
    title: "Besplatan plan ishrane za prvi mesec",
    text: "Uz prvi mesec treninga dobijaš startni plan ishrane — jednostavan i realan, bez izgladnjivanja. Trening i tanjir rade zajedno.",
  },
];

export default function Services() {
  return (
    <section id="treninzi" className="section">
      <div className="wrap">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="kicker">Šta nudimo</span>
          <h2 className="mt-4 text-3xl text-espresso sm:text-5xl">
            Trening za{" "}
            <span className="script text-[1.35em] text-taupe">svaku</span> ženu
          </h2>
          <p className="mt-4 text-espresso/60">
            Grupni treninzi u malim grupama i personalni trening jedan na jedan —
            radi se na tebi, tvojoj formi i tvom tempu, ne na kilaži na šipci.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 130} className="h-full">
              <div className="card h-full hover:-translate-y-1.5 hover:shadow-[0_18px_45px_rgba(35,27,21,0.1)]">
                <span className="font-display text-5xl font-extrabold text-latte">
                  {s.num}
                </span>
                <h3 className="mt-5 text-xl text-espresso">{s.title}</h3>
                <p className="mt-3 text-espresso/60">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
