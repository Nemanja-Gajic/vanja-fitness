// Blog postovi, dodaj novi objekat u niz i stranica se generiše automatski.
// NAPOMENA: sadržaj piši iz stvarnog iskustva (Vanja), bez generičkih tekstova.
// U tekstu pasusa možeš koristiti [tekst](/putanja) za interni link.

export type PostSection = {
  id?: string; // anchor za sadržaj (table of contents), samo za sekcije sa naslovom
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
  /** Opcioni SEO <title> (do 60 karaktera). Ako ga nema, koristi se `title | Vanja Fitness`. */
  metaTitle?: string;
  description: string;
  date: string; // YYYY-MM-DD
  image?: PostImage;
  sections: PostSection[];
};

export const posts: Post[] = [
  {
    slug: "kako-izgleda-prvi-trening",
    title: "Kako izgleda prvi trening u Vanja Fitness studiju?",
    metaTitle: "Kako izgleda prvi trening u studiju? | Vanja Fitness",
    description:
      "Šta te čeka na prvom besplatnom treningu: kako se zakazuje, šta da poneseš i kako izgleda prvih 60 minuta u malom fitnes studiju za žene u Sremskoj Mitrovici.",
    date: "2026-07-06",
    image: {
      src: "/teretana-sprave.jpg",
      alt: "Sprave i tegovi u Vanja Fitness studiju za žene u Sremskoj Mitrovici: rack, klupa i kardio zona",
      width: 1600,
      height: 1200,
    },
    sections: [
      {
        body: [
          "Najteži deo svakog treninga je onaj prvi, ne zbog vežbi, nego zbog odluke da dođeš. Ako nikad nisi trenirala, ili nisi odavno, potpuno je normalno da te je malo strah: da li ću izgledati smešno, da li ću izdržati, da li će me neko gledati. Zato ovde piše, korak po korak, šta te tačno čeka.",
        ],
      },
      {
        id: "zakazivanje",
        heading: "Pre dolaska: kako se zakazuje",
        body: [
          "Kod nas ne postoji šalter ni članska kartica na ulazu. Pišeš nam poruku na Instagramu i dogovaramo [termin koji ti odgovara](/#termini): jutarnji između 8 i 10h, ili večernji između 18 i 21h, od ponedeljka do petka.",
          "Prva tri treninga su besplatna. Bez kartice, bez ugovora, bez ikakve obaveze. Dolaziš, probaš, pa odlučiš.",
        ],
      },
      {
        id: "sta-poneti",
        heading: "Šta da poneseš",
        body: [
          "Patike, flašicu vode i peškir. Toliko. Ne treba ti posebna oprema ni markirana garderoba, bilo šta u čemu možeš slobodno da se krećeš.",
        ],
      },
      {
        id: "prvih-60-minuta",
        heading: "Kako izgleda prvih 60 minuta",
        body: [
          "Trening je u [maloj grupi, od 4 do 8 žena](/#treninzi), nikad više. To znači da trener stvarno vidi svaki tvoj pokret, a ne da si prepuštena sama sebi kao u klasičnoj teretani.",
          "Počinjemo zagrevanjem, a onda prelazimo na osnovne vežbe sa spravama i tegovima, prilagođene tebi. Prvi trening nije test snage: cilj je da naučiš pravilnu formu i da vidiš kako ti prija. Težina dolazi kasnije, forma je uvek prva.",
          "Ako ti nešto ne ide, to je očekivano, zato si i došla. Niko te ne gleda i niko te ne ocenjuje; sve u grupi su nekad bile na svom prvom treningu.",
        ],
      },
      {
        id: "posle-treninga",
        heading: "Šta posle treninga",
        body: [
          "Posle prvog treninga nema pritiska ni prodaje. Ako ti se svidelo, dogovaramo sledeći termin, imaš još dva besplatna treninga da budeš sigurna.",
          "Kad odlučiš da ostaneš, uz prvi mesec dobijaš i [startni plan ishrane](/#treninzi), a jednom mesečno merimo napredak: težinu, obime i sastav tela, da crno na belo vidiš da se stvari pomeraju.",
          "Ako te još nešto zanima, verovatno je već odgovoreno među [čestim pitanjima](/#pitanja), a za sve ostalo piši nam porukom.",
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
      "Najveći mit o ženama i tegovima: da li od tegova možeš da se nabilduješ? Šta se stvarno desi sa telom u prva tri meseca i kako krećemo sa težinama.",
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
          "„Htela bih da počnem da treniram, ali ne bih da se nabildujem, samo da se malo zategnem.“ Ovo čujem skoro svaki put kad se javi nova članica. Odmah uz to ide i „neću da dižem velike kilaže, nabaciću puno mišića“. Strah od tegova je razlog zašto žene i tegovi u mnogim glavama ne idu zajedno. Evo šta se stvarno dešava.",
        ],
      },
      {
        id: "da-je-lako-svi-bi",
        heading: "Da je tako lako, svi bi se nabildovali",
        body: [
          "Kad mi žena kaže da se plaši da će se nabildovati, odgovor je uvek isti: da je to tako jednostavno, svi bi to radili.",
          "Mišići se ne grade ni brzo ni lako. Da bi se žena stvarno nabildovala, potrebne su godine, posebno praćen trening, ishrana i suplementacija. To se nikome ne desi slučajno. Dizanjem tegova na treningu ne možeš da se nabilduješ do mere koja ti je neprijatna, možeš samo da se zategneš.",
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
  {
    slug: "zasto-vaga-stoji-a-obimi-padaju",
    title: "Zašto vaga stoji, a obimi padaju?",
    description:
      "Prošao je mesec dana, a broj na vagi je isti. Šta merimo u studiju, zašto vaga sama ne govori mnogo i šta se na telu promeni pre nego kilaža.",
    date: "2026-07-27",
    image: {
      src: "/merenje-obima.jpg",
      alt: "Metar za merenje obima struka i butine, merenje obima pokazuje napredak i onda kad vaga stoji",
      width: 1600,
      height: 1200,
    },
    sections: [
      {
        body: [
          "Prošlo je mesec dana. Staneš na vagu i broj je isti kao prvog dana. U tom trenutku većina žena pomisli da mesec dana nije vredeo ništa.",
          "Skoro nikad nije tako. Evo šta merimo u studiju i zašto vaga sama ne govori mnogo.",
        ],
      },
      {
        id: "sta-merimo",
        heading: "Šta merimo na prvom treningu",
        body: [
          "Merenje radimo odmah, pre nego što uopšte kreneš da vežbaš. Merimo težinu, na vagi koja pokazuje i procenat masti i procenat mišića. Uz to merimo obim struka, butine i ruke.",
          "To je tvoja početna slika. Bez nje kasnije nemaš sa čim da uporediš, pa ostaje samo utisak. Merenje radimo isto i sa članicama [grupnih i individualnih treninga](/#treninzi).",
        ],
      },
      {
        id: "jednom-mesecno",
        heading: "Merimo početkom svakog meseca",
        body: [
          "Merenje ponavljamo početkom svakog meseca, da vidimo napredak crno na belo.",
          "Isto savetujem i za kod kuće. Jednom mesečno, i vaga i obimi, nikad samo vaga. Ako se vagaš svaki dan, gledaš vodu, so i to šta si taj dan jela, ne napredak.",
          "Ako pristaneš, pravimo i fotografije. Na njima se promena vidi jasnije nego na bilo kom broju.",
        ],
      },
      {
        id: "ista-kilaza",
        heading: "Kad kilaža stoji, a stara garderoba je odjednom taman",
        body: [
          "Kod nekih žena kilaža prvog meseca ostane potpuno ista. Onda probaju neku staru garderobu u koju nisu mogle da uđu i shvate da su izgubile u obimu. Najviše u struku i u nogama.",
          "Jedna članica mi je rekla: „Kada se izmerim, imam isto kilograma kao kada sam počela, čak sam dobila koji kilogram. Međutim, probala sam stare farmerke i posle dve godine sam ušla u njih.“",
          "Ne znači to da se kilaža nikad ne pomeri. Jedna devojka je smršala 4 kilograma za mesec i po dana. Ali kilaža je samo jedan podatak od nekoliko koje pratimo.",
        ],
      },
      {
        id: "prvo-se-promeni",
        heading: "Prvo se promeni energija, pa tek onda obim",
        body: [
          "Ono što se prvo promeni nije ni vaga ni obim, nego energija i snaga. Već na početku mi kažu da imaju više energije tokom dana, da su srećnije i zadovoljnije, pogotovo kad se trening završi.",
          "Tek posle toga dolaze obimi i odeća. Tim redom, skoro uvek.",
        ],
      },
      {
        id: "vaga-poraste",
        heading: "Šta ako vaga poraste",
        body: [
          "Bilo je žena kojima vaga u prvim nedeljama poraste. To nije korak unazad.",
          "Kažem im uvek isto, vaga nije toliko merodavna koliko merenje obima. Mišić je teži od masti, pa se dešava da obimi padaju dok broj na vagi stoji ili raste. O tome kako telo reaguje na tegove pisala sam u tekstu [Da li ću se ugojiti od tegova](/blog/da-li-cu-se-ugojiti-od-tegova).",
        ],
      },
      {
        id: "ogledalo",
        heading: "Zašto niko ne odustane zbog vage",
        body: [
          "Nije mi se desilo da neka žena odustane zato što joj vaga stoji. Razlog je jednostavan, kad se pogleda u ogledalo, vidi napredak.",
          "Vaga je jedan broj jednom mesečno. Ogledalo, garderoba, snaga na treningu i energija tokom dana su četiri stvari koje vidiš svaki dan.",
        ],
      },
      {
        id: "izmeri-se",
        heading: "Izmeri se na prvom treningu",
        body: [
          "Prva 3 treninga su besplatna, a merenje radimo već na prvom. Za mesec dana imaš sa čim da uporediš.",
          "Javi se u DM na [@vanjaa.fitness](https://instagram.com/vanjaa.fitness) i izaberi [termin koji ti odgovara](/#termini). Kako izgleda sam trening, pročitaj u tekstu [Kako izgleda prvi trening](/blog/kako-izgleda-prvi-trening), a ostalo je verovatno već među [čestim pitanjima](/#pitanja).",
        ],
      },
    ],
  },
  {
    slug: "kardio-ili-tegovi-za-mrsavljenje",
    title: "Kardio ili tegovi, šta je bolje za mršavljenje?",
    metaTitle: "Kardio ili tegovi za mršavljenje? | Vanja Fitness",
    description:
      "Da li je za mršavljenje bolji kardio ili tegovi? Iskren odgovor trenera: zavisi šta hoćeš od tela. Za početnice je najbitnija redovnost i ishrana.",
    date: "2026-08-07",
    image: {
      src: "/kardio-tegovi.jpg",
      alt: "Šipka sa tegovima na podu teretane, kardio ili tegovi za mršavljenje",
      width: 1600,
      height: 1067,
    },
    sections: [
      {
        body: [
          "Kad mi se javi žena koja hoće da smrša, obično ne zna odakle da krene. Da li da trči, da diže tegove ili samo da jede manje. Pitanje kardio ili tegovi za mršavljenje čujem stalno, a odgovor je jednostavniji nego što misliš.",
        ],
      },
      {
        id: "redovnost",
        heading: "Za početak je manje bitno nego što misliš",
        body: [
          "Ako si početnica, bilo koja vrsta treninga će ti pomoći da smršaš. Trčanje, tegovi, svejedno. Telo do sada nije imalo skoro nikakvu aktivnost i reagovaće na svaku.",
          "Ono što stvarno pravi razliku je redovnost. Da ne preskačeš treninge, da se držiš plana ishrane i da ne jedeš visokokalorične stvari između. Koliko brzo ćeš smršati zavisi od toga koliko si dosledna, ne od toga da li si taj dan bila na traci ili sa bučicama u ruci.",
        ],
      },
      {
        id: "zavisi-od-cilja",
        heading: "Pravo pitanje: šta hoćeš od tela",
        body: [
          "Ne mora da znači da je trening snage bolji od čistog kardija. Svaki trening je dobar za nekog, pitanje je samo šta je tebi potrebno.",
          "Ako hoćeš isključivo da izgubiš masu, bez obzira da li je to salo ili mišić, kardio je sasvim dovoljan. To možeš i sama, bez trenera i bez studija.",
          "Ali ako hoćeš da izgubiš salo, a pritom izgradiš mišić i zategneš telo, onda mora kombinovano: vežbe snage i kardio zajedno.",
        ],
      },
      {
        id: "kako-izgleda-kod-nas",
        heading: "Kako to izgleda kod nas na treningu",
        body: [
          "Kod mene na treningu se radi od svega po malo, nikad isključivo jedno. Za početak se zagreješ na traci ili biciklu, pa odradiš vežbe zagrevanja, a onda prelazimo na vežbe za core, noge ili šta je već planirano za taj dan.",
          "Vežbe su kombinovane, sa sopstvenom težinom ili sa tegovima. I to se razlikuje od žene do žene, prema njenim sposobnostima. [Treninzi](/#treninzi) su u malim grupama, pa svaka radi ono što je za nju.",
        ],
      },
      {
        id: "koliko-puta-nedeljno",
        heading: "Koliko puta nedeljno je dovoljno",
        body: [
          "Za početnice praktikujem 3 treninga nedeljno. To je sasvim dovoljno, jer je i to mnogo više aktivnosti nego što su do sada radile.",
          "Tri puta nedeljno redovno, uz korigovanu ishranu, i kroz neki period se primeti znatna razlika. Razlika je samo u tome koliko brzo neko želi da izgubi kilograme, ali za sve treba vreme. [Termine](/#termini) imamo jutarnje i večernje, pa se trening uklopi i uz posao.",
        ],
      },
      {
        id: "strah-od-tegova",
        heading: "A šta ako se nabildujem od tegova?",
        body: [
          "I dalje čujem ovo pitanje. Neke žene biraju kardio samo zato što se plaše da će od tegova postati jake kao muškarci.",
          "To jednostavno nije moguće, zbog ljudske genetike. Da bi žena postala jaka kao neki muškarac, trebale bi joj godine intenzivnog treninga i suplementi. Ceo tekst o tom mitu imaš ovde: [Da li ću se ugojiti od tegova?](/blog/da-li-cu-se-ugojiti-od-tegova)",
        ],
      },
      {
        id: "izgladnjivanje",
        heading: "Najveća greška: izgladnjivanje umesto ishrane",
        body: [
          "Dosta žena pokuša samo da odredi sebi plan ishrane, a on u većini slučajeva izgleda kao izgladnjivanje. Izdrže par dana, pa se prepuste starim navikama i često pogoršaju situaciju.",
          "Poenta nije izgladnjivati se, nego korigovati ishranu tako da na taj način možeš da se hraniš uvek, i da polako ali sigurno dođeš do željene kilaže. Normalno je imati i takozvani cheat meal, ali se i to planira i ne treba preterivati.",
          "Zato uz [prvi mesec treninga](/#treninzi) dobijaš startni plan ishrane, da ne moraš sama da pogađaš.",
        ],
      },
    ],
  },
  {
    slug: "vezbe-za-stomak",
    title: "Vežbe za stomak, šta stvarno skida salo?",
    metaTitle: "Vežbe za stomak, šta stvarno skida salo? | Vanja Fitness",
    description:
      "Trbušnjaci ne skidaju salo sa stomaka. Šta stvarno radi: ishrana, trening snage i jak core. Vežbe koje radimo u studiju i realna očekivanja.",
    date: "2026-08-10",
    image: {
      src: "/vezbe-za-stomak.jpg",
      alt: "Vanja, trener u Vanja Fitness, radi vežbe za stomak sa podignutim nogama",
      width: 1600,
      height: 1067,
    },
    sections: [
      {
        body: [
          "Kad me žene pitaju odakle da krenu, najčešći cilj je isti: da skinu stomak. I skoro uvek dodaju da im najteže ide onaj donji deo. Zato hajde da raščistimo šta vežbe za stomak stvarno mogu, a šta ne mogu.",
        ],
      },
      {
        id: "trbusnjaci-ne-skidaju-salo",
        heading: "Trbušnjaci ne skidaju salo sa stomaka",
        body: [
          "Ovo je najvažnija stvar u celom tekstu. Salo ne možeš da skineš sa stomaka samo trbušnjacima. Telo ne radi tako, masne naslage se gube ravnomerno, sa celog tela.",
          "Najveći problem koji viđam je što žene očekuju da skinu stomak, a ne paze na ishranu. Rade vežbe, trude se, a rezultata nema, jer je tanjir ostao isti. Rečenica koju stalno ponavljam u studiju glasi: 70% je ishrana, 30% trening. Ne može jedno bez drugog.",
        ],
      },
      {
        id: "pravi-redosled",
        heading: "Pravi redosled za skidanje stomaka",
        body: [
          "Prvo ide kalorijski deficit i promena ishrane. Pa onda trening snage i kardio. I ništa od toga ne radi kako treba bez regulisanog sna i stresa.",
          "To ne znači izgladnjivanje, nego ishranu koju možeš da držiš stalno. A šta od treninga, [kardio ili tegovi](/blog/kardio-ili-tegovi-za-mrsavljenje), o tome sam već pisala: za zatezanje tela mora kombinovano.",
        ],
      },
      {
        id: "donji-stomak",
        heading: "A šta je sa donjim stomakom?",
        body: [
          "Donji stomak je najtvrdoglaviji i tu žene najviše gube strpljenje. Bitno je da znaš i ovo: stomak nije uvek salo. Na njega dosta utiču hormoni, pa je pred menstruaciju, tokom nje i posle nje stomak nekad prosto naduvaniji.",
          "To znači da izgled stomaka varira iz dana u dan i da jedan pogled u ogledalo nije merilo napretka. Zato kod nas napredak pratimo merenjem, o tome imaš ceo tekst: [Zašto vaga stoji, a obimi padaju](/blog/zasto-vaga-stoji-a-obimi-padaju).",
        ],
      },
      {
        id: "vezbe-koje-radimo",
        heading: "Vežbe za stomak koje radimo u studiju",
        body: [
          "U studiju se najviše fokusiram na jačanje core mišića, jer je snažan i stabilan core osnova svakog pokreta. Radimo dead bug, plank, side plank, bird dog, hollowman i slične vežbe.",
          "U zagrevanju uvek bude jedna ili dve vežbe za core, a u toku [treninga](/#treninzi) odradimo još nekoliko vežbi za core ili trbušnjake. Znači, sredina tela se radi na svakom treningu, samo ne satima i ne napamet.",
          "Zašto baš te vežbe, a ne 100 trbušnjaka na podu? Zbog zdravlja i funkcionalnosti. Jak core nije bitan samo ako želiš vidljive pločice: popravlja držanje tela i ravnotežu, štiti kičmu od opterećenja i pomaže da izbegneš bolove u leđima. Bilo da podižeš nešto teško, trčiš ili ceo dan sediš za stolom, core je osnova svakog pokreta.",
        ],
      },
      {
        id: "posle-porodjaja-i-posle-30",
        heading: "Stomak posle porođaja i posle 30. godine",
        body: [
          "Kod žena posle trudnoće, i posebno kako godine prolaze, stomak može biti izraženiji i zbog promena u mišićima trupa, držanju, rasporedu masnog tkiva i hormonima, ne samo zbog viška kilograma.",
          "Zato tu ne jurimo trbušnjake. Cilj je da kroz trening i ishranu smanjimo ukupni procenat masti, ojačamo stomak i celo telo, i da se figura postepeno zategne.",
        ],
      },
      {
        id: "kad-se-vide-rezultati",
        heading: "Kad se vide prvi rezultati",
        body: [
          "Iskren odgovor: individualno je. Žene sa većim viškom kilograma na početku gube znatno brže od onih koje žele da skinu par milimetara sala sa stomaka. I genetika tu dosta utiče.",
          "Ali okvirno, posle 2 nedelje redovnog treninga i korigovane ishrane već se vide neki rezultati. Zato merenja radimo jednom mesečno, da napredak vidiš crno na belo, a ne da ga tražiš u ogledalu.",
        ],
      },
      {
        id: "odakle-da-krenes",
        heading: "Odakle da kreneš",
        body: [
          "Ako ti je cilj stomak, ne treba ti poseban trening za stomak, treba ti sistem: ishrana, trening snage i core na svakom treningu. Uz prvi mesec dobijaš i startni plan ishrane, da onih 70% ne pogađaš sama.",
          "Prva 3 treninga su besplatna. Javi se u DM na [@vanjaa.fitness](https://instagram.com/vanjaa.fitness), izaberi [termin](/#termini), a ako te još nešto zanima, pogledaj [česta pitanja](/#pitanja).",
        ],
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
