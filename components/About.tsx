import { site } from "@/lib/site";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="o-nama" className="section overflow-hidden bg-sand">
      <div className="wrap grid items-center gap-12 md:grid-cols-2">
        <Reveal variant="left" className="order-2 md:order-1">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-5xl bg-latte">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="/vanja-portret.jpg"
              alt="Vanja Drljača, personalni trener za žene, u svom studiju Vanja Fitness u Sremskoj Mitrovici"
              width={1200}
              height={1600}
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal variant="right" className="order-1 md:order-2">
          <span className="kicker">O nama</span>
          <h2 className="mt-4 text-3xl text-espresso sm:text-5xl">
            Mesto gde se snaga
            <span className="script -mb-1 mt-1 block text-[1.6em] text-taupe">
              spaja sa zajednicom
            </span>
          </h2>
          <p className="mt-6 text-espresso/65">
            Vanja Drljača je personalni trener sa završenom NASM edukacijom
            (International Certified Personal Trainer) i preko četiri godine
            iskustva, sa sopstvenim fitnes studiom za žene u Sremskoj
            Mitrovici. Ovde nije bitno
            koliko podigneš, bitno je da svaki pokret radiš pravilno i bezbedno.
          </p>
          <p className="mt-4 text-espresso/65">
            Nismo klasična teretana, treniraš samo u zakazanim terminima, u maloj
            grupi ili jedan na jedan, uvek uz trenera.
          </p>
          <p className="mt-4 text-espresso/65">
            Fitnes se menja iz godine u godinu, zato Vanja ne prestaje da uči.
            Slobodno vreme koristi za edukaciju o treningu i ishrani, a u studio
            donosi samo ono što stvarno radi.
          </p>

          <ul className="mt-7 space-y-3">
            {[
              "Završena NASM edukacija za personalnog trenera",
              "Fitnes studio isključivo za žene — bez gužve klasične teretane",
              "Male grupe i lična pažnja za svaku polaznicu",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-espresso/75">
                <span className="mt-1 inline-grid h-5 w-5 place-items-center rounded-full bg-espresso text-[11px] text-cream">
                  ✓
                </span>
                {t}
              </li>
            ))}
          </ul>

          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8"
          >
            Upoznaj studio
          </a>
        </Reveal>
      </div>
    </section>
  );
}
