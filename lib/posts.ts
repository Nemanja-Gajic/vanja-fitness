// Blog postovi — dodaj novi objekat u niz i stranica se generiše automatski.
// NAPOMENA: sadržaj piši iz stvarnog iskustva (Vanja) — bez generičkih tekstova.
// U tekstu pasusa možeš koristiti [tekst](/putanja) za interni link.

export type PostSection = {
  id?: string; // anchor za sadržaj (table of contents) — samo za sekcije sa naslovom
  heading?: string;
  body: string[];
};

export type PostImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  image?: PostImage;
  sections: PostSection[];
};

export const posts: Post[] = [
  {
    slug: "kako-izgleda-prvi-trening",
    title: "Kako izgleda prvi trening u Vanja Fitness studiju?",
    description:
      "Šta te čeka na prvom besplatnom treningu: kako se zakazuje, šta da poneseš i kako izgleda prvih 60 minuta u malom fitnes studiju za žene u Sremskoj Mitrovici.",
    date: "2026-07-06",
    image: {
      src: "/teretana-sprave.jpg",
      alt: "Sprave i tegovi u Vanja Fitness studiju za žene u Sremskoj Mitrovici — rack, klupa i kardio zona",
      width: 1600,
      height: 1200,
    },
    sections: [
      {
        body: [
          "Najteži deo svakog treninga je onaj prvi — ne zbog vežbi, nego zbog odluke da dođeš. Ako nikad nisi trenirala, ili nisi odavno, potpuno je normalno da te je malo strah: da li ću izgledati smešno, da li ću izdržati, da li će me neko gledati. Zato ovde piše, korak po korak, šta te tačno čeka.",
        ],
      },
      {
        id: "zakazivanje",
        heading: "Pre dolaska — kako se zakazuje",
        body: [
          "Kod nas ne postoji šalter ni članska kartica na ulazu. Pišeš nam poruku na Instagramu i dogovaramo [termin koji ti odgovara](/#termini) — jutarnji između 8 i 10h, ili večernji između 18 i 21h, od ponedeljka do petka.",
          "Prva tri treninga su besplatna. Bez kartice, bez ugovora, bez ikakve obaveze — dolaziš, probaš, pa odlučiš.",
        ],
      },
      {
        id: "sta-poneti",
        heading: "Šta da poneseš",
        body: [
          "Patike, flašicu vode i peškir. Toliko. Ne treba ti posebna oprema ni markirana garderoba — bilo šta u čemu možeš slobodno da se krećeš.",
        ],
      },
      {
        id: "prvih-60-minuta",
        heading: "Kako izgleda prvih 60 minuta",
        body: [
          "Trening je u [maloj grupi, od 4 do 8 žena](/#treninzi) — nikad više. To znači da trener stvarno vidi svaki tvoj pokret, a ne da si prepuštena sama sebi kao u klasičnoj teretani.",
          "Počinjemo zagrevanjem, a onda prelazimo na osnovne vežbe sa spravama i tegovima — prilagođene tebi. Prvi trening nije test snage: cilj je da naučiš pravilnu formu i da vidiš kako ti prija. Težina dolazi kasnije, forma je uvek prva.",
          "Ako ti nešto ne ide, to je očekivano — zato si i došla. Niko te ne gleda i niko te ne ocenjuje; sve u grupi su nekad bile na svom prvom treningu.",
        ],
      },
      {
        id: "posle-treninga",
        heading: "Šta posle treninga",
        body: [
          "Posle prvog treninga nema pritiska ni prodaje. Ako ti se svidelo, dogovaramo sledeći termin — imaš još dva besplatna treninga da budeš sigurna.",
          "Kad odlučiš da ostaneš, uz prvi mesec dobijaš i [startni plan ishrane](/#treninzi), a jednom mesečno merimo napredak — težinu, obime i sastav tela — da crno na belo vidiš da se stvari pomeraju.",
          "Ako te još nešto zanima, verovatno je već odgovoreno među [čestim pitanjima](/#pitanja) — a za sve ostalo, piši nam porukom.",
        ],
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
