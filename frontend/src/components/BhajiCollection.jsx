import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import { SAVORY } from "@/data/products";

export default function BhajiCollection() {
  return (
    <section id="bhaji" data-testid="bhaji-collection" className="relative bg-maroon grain py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gold/40" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gold/5 blur-3xl glow-pulse" />

      <div className="max-w-[1440px] mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-14">
          <Reveal className="lg:col-span-7">
            <p className="text-[11px] tracking-[0.5em] text-gold font-semibold">SAVOURY &amp; HOT FROM THE KADHAI</p>
            <h2 className="font-serif text-cream text-4xl sm:text-5xl lg:text-6xl font-medium mt-4">
              The Bhaji <span className="italic gold-foil-text">Collection</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-5">
            <p className="text-sm text-cream/60 leading-relaxed lg:text-right">
              Authentic Indian savouries made with love &amp; tradition — crisp pakoras,
              fluffy bhature and namkeen by the kilogram.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7" data-testid="savory-grid">
          {SAVORY.map((p, i) => (
            <ProductCard key={p.id} product={p} dark index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
