import { site } from "@/lib/site";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="o-nama" className="section overflow-hidden bg-sand">
      <div className="wrap grid items-center gap-12 md:grid-cols-2">
        {/* Video preview (placeholder for Vanja photo) */}
        <Reveal variant="left" className="order-2 md:order-1">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-5xl bg-latte">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src="/hero.mp4"
              poster="/hero-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
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
            Vanja je sertifikovani trener sa preko četiri godine iskustva i
            sopstvenim studijem za žene u Sremskoj Mitrovici. Ovde nije bitno
            koliko podigneš — bitno je da svaki pokret radiš pravilno, bezbedno i
            sa osmehom.
          </p>
          <p className="mt-4 text-espresso/65">
            Male grupe, topla atmosfera bez osude i trener koji te zna po imenu.
            Zato se žene vraćaju — i ostaju.
          </p>

          <ul className="mt-7 space-y-3">
            {[
              "Sertifikovani trener sa fokusom na pravilnu formu",
              "Fitness studio isključivo za žene",
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
