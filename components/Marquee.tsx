const items = [
  "Pravilna forma",
  "Male grupe",
  "Zakazani termini",
  "Rezultati",
  "Trener uz tebe",
  "Studio za žene",
];

export default function Marquee() {
  return (
    <div className="overflow-hidden bg-espresso py-5">
      <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="text-taupe">✦</span>
            {i % 2 === 0 ? (
              <span className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-cream/90">
                {t}
              </span>
            ) : (
              <span className="script text-3xl text-latte">{t}</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
