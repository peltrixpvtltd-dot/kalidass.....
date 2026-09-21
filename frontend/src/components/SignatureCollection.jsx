import { useState } from "react";
import Reveal from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";
import { SWEETS } from "@/data/products";

const FILTERS = [
  { id: "all", label: "All Sweets" },
  { id: "milk", label: "Milk Classics" },
  { id: "syrup", label: "Syrup Soaked" },
  { id: "festive", label: "Festive & Crunchy" },
];

export default function SignatureCollection() {
  const [filter, setFilter] = useState("all");
  const list = filter === "all" ? SWEETS : SWEETS.filter((s) => s.cat === filter);

  return (
    <section id="shop" data-testid="signature-collection" className="relative bg-cream grain py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-10">
        <Reveal className="text-center">
          <div className="flex items-center justify-center gap-4 mb-5">
            <span className="h-px w-14 bg-gold" />
            <span className="text-gold-dark text-lg">✦</span>
            <span className="h-px w-14 bg-gold" />
          </div>
          <p className="text-[11px] tracking-[0.5em] text-gold-dark font-semibold">SINCE 1920 · MADE FRESH DAILY</p>
          <h2 className="font-serif text-maroon text-4xl sm:text-5xl lg:text-6xl font-medium mt-4">
            Our Signature <span className="italic text-gold-dark">Collection</span>
          </h2>
          <p className="text-sm text-ink/60 max-w-xl mx-auto mt-5 leading-relaxed">
            Every sweet is slow-crafted each morning in desi ghee — priced exactly as
            our shop counter, per kilogram unless noted.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-12 flex flex-wrap justify-center gap-3">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              data-testid={`filter-${f.id}`}
              className={`text-[10.5px] tracking-[0.22em] font-semibold px-6 py-3 border transition-colors duration-400 ${
                filter === f.id
                  ? "bg-maroon text-gold border-maroon"
                  : "border-maroon/25 text-maroon/70 hover:border-gold-dark hover:text-gold-dark"
              }`}
            >
              {f.label.toUpperCase()}
            </button>
          ))}
        </Reveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7" data-testid="sweets-grid">
          {list.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
