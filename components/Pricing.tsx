import { site } from "@/lib/site";

const included = [
  "3 grupna treninga nedeljno",
  "Male grupe — 4 do 8 žena",
  "Stalni nadzor pravilne forme",
  "Mesečno praćenje napretka",
];

export default function Pricing() {
  return (
    <section id="clanarine" className="section bg-mist-deep">
      <div className="wrap">
        <div className="mx-auto max-w-xl text-center">
          <span className="kicker">Članarine</span>
          <h2 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">
            Treniraj u <span className="italic">maloj grupi žena</span>
          </h2>
          <p className="mt-4 text-ink/60">
            Male grupe, tri treninga nedeljno i trener koji prati svaki tvoj
            pokret. Počni bez obaveza — prva tri treninga su besplatna.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl items-center gap-6 md:grid-cols-2">
          {/* What's included */}
          <div className="rounded-5xl border border-ink/[0.08] bg-white p-8">
            <h3 className="font-serif text-2xl text-ink">Šta uključuje</h3>
            <ul className="mt-6 space-y-3">
              {included.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-ink/75"
                >
                  <span className="mt-0.5 inline-grid h-5 w-5 place-items-center rounded-full bg-lilac text-[11px] text-ink">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Free trial CTA — no prices */}
          <div className="relative overflow-hidden rounded-5xl bg-lilac p-8">
            <span className="inline-block rounded-full bg-ink px-4 py-1 text-xs font-medium uppercase tracking-wide text-mist">
              Počni besplatno
            </span>
            <p className="mt-5 font-serif text-3xl leading-tight text-ink">
              Prva 3 treninga su besplatna
            </p>
            <p className="mt-3 text-ink/70">
              Bez kartice, bez ugovora, bez pritiska. Probaš, pa odlučiš.
            </p>
            <p className="mt-6 border-t border-ink/15 pt-5 text-sm text-ink/70">
              Za aktuelne članarine i slobodne termine — javi se porukom, pa se
              dogovaramo.
            </p>

            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark mt-7 w-full"
            >
              Javi se za članarine
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
