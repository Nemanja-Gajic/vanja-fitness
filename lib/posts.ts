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
  {
    slug: "sta-poneti-na-prvi-trening",
    title: "Šta poneti na prvi trening?",
    description:
      "Lista je kraća nego što misliš: voda, patike i peškir. Šta te čeka u studiju, kako izgleda prvi dolazak i šta da pojedeš pre prvog treninga.",
    date: "2026-07-07",
    image: {
      src: "/studio-sala.jpg",
      alt: "Sala za trening sa ogledalima i TRX trakama u fitnes studiju za žene u Sremskoj Mitrovici",
      width: 1600,
      height: 1200,
    },
    sections: [
      {
        body: [
          "Zakazala si prvi trening i razmišljaš šta ti sve treba. Kratak odgovor: skoro ništa. Evo šta devojke kod nas obično nose i šta te čeka kad dođeš.",
        ],
      },
      {
        id: "sta-da-poneses",
        heading: "Šta da poneseš",
        body: [
          "**Voda.** Trening traje sat vremena, pićeš je više puta.",
          "**Čiste patike.** Bilo koje udobne sportske patike. A ako ti je tako lakše, možeš da treniraš i u čarapama. Podovi u studiju se svaki dan brišu i dezinfikuju, tako da je i to potpuno ok.",
          "**Čist peškir.** Za lice i za sprave.",
          "To je cela lista. Sve ostalo već imamo u studiju.",
        ],
      },
      {
        id: "sta-te-ceka",
        heading: "Šta te čeka u studiju",
        body: [
          "Ne moraš da dolaziš spremna od kuće. Imamo svlačionicu gde možeš da se presvučeš i ostaviš stvari, a ako želiš da se istuširaš posle treninga, imamo i tuš. Znači, možeš da dođeš pravo s posla i odeš sređena dalje.",
        ],
      },
      {
        id: "prvi-dolazak",
        heading: "Kako izgleda prvi dolazak",
        body: [
          "Na prvi trening dolaziš 15 minuta ranije da se upoznamo. Popričamo o tome da li si nekad nešto trenirala, koliko dugo si pravila pauzu i da li je bilo nekih povreda. Uradimo i merenje, da od prvog dana pratimo tvoj napredak.",
          "A kako izgleda samih 60 minuta treninga, korak po korak, pročitaj u tekstu [Kako izgleda prvi trening](/blog/kako-izgleda-prvi-trening).",
        ],
      },
      {
        id: "strah-od-prvog",
        heading: "„Nikad ništa nisam trenirala, plašim se prvog treninga“",
        body: [
          "Ovo čujem najčešće. I potpuno je normalno, bilo da nikad nisi trenirala ili si napravila dugu pauzu.",
          "Zato prvih par treninga prilagođavam tvojim sposobnostima. Čak te izdvojim od grupe, pa na neki način imaš [individualni trening](/#treninzi) dok ne uhvatiš ritam. Niko te ne poredi ni sa kim i ne moraš ništa da „stigneš“. Krećemo od tvog nivoa, gde god da je on.",
        ],
      },
      {
        id: "savet-pre-polaska",
        heading: "Još jedan savet pre nego što kreneš",
        body: [
          "Poslednji obrok pojedi najkasnije sat vremena pre treninga. Nemoj dolaziti ni gladna ni odmah posle jela.",
        ],
      },
      {
        id: "zakazi",
        heading: "Zakaži svoj prvi trening",
        body: [
          "Prva 3 treninga su besplatna. Dođeš, probaš, pa odlučiš.",
          "Zakazivanje ide preko Instagrama, javi se u DM na [@vanjaa.fitness](https://instagram.com/vanjaa.fitness), izaberi [termin koji ti odgovara](/#termini) i vidimo se u studiju.",
        ],
      },
    ],
  },
  {
    slug: "da-li-cu-se-ugojiti-od-tegova",
    title: "Da li ću se ugojiti od tegova?",
    description:
      "Najveći mit o ženama i tegovima: da li od tegova možeš da se napucaš? Šta se stvarno desi sa telom u prva tri meseca i kako krećemo sa težinama.",
    date: "2026-07-13",
    image: {
      src: "/tegovi.jpg",
      alt: "Bučice, kettlebell i tegovi za trening žena u Vanja Fitness studiju u Sremskoj Mitrovici",
      width: 1600,
      height: 1067,
    },
    sections: [
      {
        body: [
          "„Htela bih da počnem da treniram, ali ne bih da se napucam, samo da se malo zategnem.“ Ovo čujem skoro svaki put kad se javi nova članica. Odmah uz to ide i „neću da dižem velike kilaže, nabaciću puno mišića“. Strah od tegova je razlog zašto žene i tegovi u mnogim glavama ne idu zajedno. Evo šta se stvarno dešava.",
        ],
      },
      {
        id: "da-je-lako-svi-bi",
        heading: "Da je tako lako, svi bi se napucali",
        body: [
          "Kad mi žena kaže da se plaši da će se napucati, odgovor je uvek isti: da je to tako jednostavno, svi bi to radili.",
          "Mišići se ne grade ni brzo ni lako. Da bi se žena stvarno „napucala“, potrebne su godine, posebno praćen trening, ishrana i suplementacija. To se nikome ne desi slučajno. Dizanjem tegova na treningu ne možeš da se napucaš do mere koja ti je neprijatna, možeš samo da se zategneš.",
        ],
      },
      {
        id: "prva-tri-meseca",
        heading: "Šta se stvarno desi u prva dva-tri meseca",
        body: [
          "Prvih dva do tri meseca vidi se najviše napretka, jer je trening najveći šok za organizam. Ako se uz to pazi na ishranu i trenira redovno, obimi se smanjuju, masti je sve manje, a mišićna masa raste.",
          "Zanimljivo je da kilaža nekad ode i gore dok se obimi smanjuju. To je zato što je mišić mnogo teži od masti. Zato kod nas [mesečno merenje](/#treninzi) ne gleda samo vagu, nego i obime i sastav tela. Vaga ume da prevari, obim struka ne ume.",
        ],
      },
      {
        id: "kako-krecemo",
        heading: "Nikad ne krećemo od velikih kilaža",
        body: [
          "Težina zavisi od žene do žene. Ako si apsolutni početnik, krećeš sa vrlo lakim težinama, skoro nepostojećim, dok ne naučiš pravilan pokret. Tek kad to savladaš, kilaža polako raste.",
          "I raste samo u granicama tvojih mogućnosti. Nikad ne idem do tačke gde ne možeš da izdržiš, držim zdravu granicu koja daje efikasan trening bez rizika od povrede. Kako to izgleda uživo, pročitaj u tekstu [Kako izgleda prvi trening](/blog/kako-izgleda-prvi-trening).",
        ],
      },
      {
        id: "sta-se-menja",
        heading: "Šta se prvo promeni na telu",
        body: [
          "Prvo se obično vidi razlika u nogama i rukama, tu se telo najviše zategne. Onda se promeni i držanje, jer treningom popravljamo celu građu. Na kraju poraste i samopouzdanje. Sve to zajedno izgleda kao ogromna promena, a počelo je od bučice od par kila.",
        ],
      },
      {
        id: "strah-nestane",
        heading: "Strah nestane u sali",
        body: [
          "Mnoge moje članice su se plašile da krenu. Došle su uz nagovaranje, moje ili neke prijateljice, a danas su uz mene već godinama.",
          "Trenutno u studiju nemam nijednu ženu koja izbegava tegove. Kad vidiš princip rada, da se svaka vežba radi uz podršku i kako treba, [od malih težina ka većim](/#treninzi), ta blokada nestane.",
          "Zato uvek kažem isto: bitno je samo početi. Nemaš šta da izgubiš. Gubiš samo ako ne probaš.",
        ],
      },
      {
        id: "probaj",
        heading: "Probaj bez rizika",
        body: [
          "Prva 3 treninga su besplatna, bez kartice i bez ugovora. Javi se u DM na [@vanjaa.fitness](https://instagram.com/vanjaa.fitness), izaberi [termin](/#termini) i probaj tegove uz nekoga ko prati svaki tvoj pokret.",
        ],
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
