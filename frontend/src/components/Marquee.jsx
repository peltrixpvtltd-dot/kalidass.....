const ITEMS = [
  "MILK CAKE", "KHOYA BARFI", "KALAKAND", "GULAB JAMUN", "JALEBI", "BESAN LADOO",
  "RASMALAI", "CHAM CHAM", "GUJIYA", "RASGULLA", "AMRITI", "PATISHA",
];

export default function Marquee({ dark = true }) {
  const row = (
    <>
      {ITEMS.map((item) => (
        <span key={item} className="flex items-center shrink-0">
          <span className={`font-serif italic text-2xl lg:text-3xl px-8 ${dark ? "text-cream/85" : "text-maroon/85"}`}>{item}</span>
          <span className="text-gold text-lg">✦</span>
        </span>
      ))}
    </>
  );
  return (
    <div
      data-testid="editorial-marquee"
      className={`relative overflow-hidden py-6 border-y ${dark ? "bg-maroon border-gold/25" : "bg-cream-dark border-gold/40"}`}
    >
      <div className="marquee-track flex w-max">
        <div className="flex">{row}</div>
        <div className="flex" aria-hidden="true">{row}</div>
      </div>
    </div>
  );
}
