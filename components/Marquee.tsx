const items = [
  "Pravilna forma",
  "Male grupe",
  "Bez osude",
  "Rezultati",
  "Samopouzdanje",
  "Studio za žene",
];

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-ink/10 bg-lilac py-4">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {[...items, ...items].map((t, i) => (
          <span
            key={i}
            className="flex items-center gap-12 font-serif text-xl text-ink/80"
          >
            <span className="text-ink/40">✦</span> {t}
          </span>
        ))}
      </div>
    </div>
  );
}
