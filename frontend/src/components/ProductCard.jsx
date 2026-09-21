import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import { useCart } from "@/context/CartContext";
import { WEIGHTS, priceLabel } from "@/data/products";

export default function ProductCard({ product, dark = false, index = 0 }) {
  const { addItem } = useCart();
  const [weight, setWeight] = useState("500g");

  const isKg = product.unit === "kg";
  const selected = WEIGHTS.find((w) => w.id === weight);
  const variant = isKg
    ? { label: selected.label, price: Math.round(product.price * selected.factor) }
    : { label: product.unit === "piece" ? "Per Piece" : "Per Plate", price: product.price };

  const handleAdd = () => {
    addItem(product, variant);
    toast.success(`${product.name} (${variant.label}) added to cart`, {
      style: { background: "#3d0a1e", color: "#f5efe4", border: "1px solid #c9a24b" },
    });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, delay: (index % 4) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      data-testid={`product-card-${product.id}`}
      className={`group relative flex flex-col ${dark ? "bg-maroon-light/60 border border-gold/20" : "bg-white/60 border border-maroon/10"} hover:border-gold/60 transition-colors duration-500`}
    >
      {product.tag && (
        <span className="absolute top-4 left-4 z-10 bg-gold text-maroon-deep text-[9px] font-bold tracking-[0.22em] px-3 py-1.5">
          {product.tag.toUpperCase()}
        </span>
      )}

      <div className="relative overflow-hidden aspect-[4/3]">
        <div className="absolute inset-0 bg-gradient-to-t from-maroon/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />
        <img
          src={product.img}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-[1.07] transition-transform duration-[1200ms] ease-out"
        />
      </div>

      <div className="flex flex-col flex-1 p-6">
        <h3 className={`font-serif text-[22px] font-semibold tracking-wide ${dark ? "text-cream" : "text-maroon"}`}>
          {product.name}
        </h3>
        <p className={`text-[12.5px] mt-1.5 leading-relaxed flex-1 ${dark ? "text-cream/60" : "text-ink/60"}`}>
          {product.desc}
        </p>

        <div className="mt-4 flex items-baseline gap-2">
          <span className={`font-serif text-xl font-semibold ${dark ? "text-gold" : "text-gold-dark"}`} data-testid={`product-price-${product.id}`}>
            ₹{variant.price}
          </span>
          <span className={`text-[10px] tracking-[0.18em] ${dark ? "text-cream/50" : "text-ink/45"}`}>
            {isKg ? `FOR ${selected.label.toUpperCase()} · ${priceLabel(product)}` : priceLabel(product).replace("₹" + product.price + " ", "")}
          </span>
        </div>

        {isKg && (
          <div className="mt-4 flex gap-2" data-testid={`weight-selector-${product.id}`}>
            {WEIGHTS.map((w) => (
              <button
                key={w.id}
                onClick={() => setWeight(w.id)}
                data-testid={`weight-${product.id}-${w.id}`}
                className={`flex-1 text-[10.5px] tracking-[0.12em] font-semibold py-2 border transition-colors duration-300 ${
                  weight === w.id
                    ? "bg-gold text-maroon-deep border-gold"
                    : dark
                      ? "border-gold/30 text-cream/70 hover:border-gold"
                      : "border-maroon/25 text-maroon/70 hover:border-gold-dark"
                }`}
              >
                {w.label.toUpperCase()}
              </button>
            ))}
          </div>
        )}

        <button
          onClick={handleAdd}
          data-testid={`add-to-cart-${product.id}`}
          className={`mt-5 flex items-center justify-center gap-2 py-3.5 text-[11px] font-semibold tracking-[0.25em] transition-colors duration-400 ${
            dark
              ? "bg-gold text-maroon-deep hover:bg-gold-light"
              : "bg-maroon text-cream hover:bg-gold hover:text-maroon-deep"
          }`}
        >
          <Plus size={14} strokeWidth={2.6} />
          ADD TO CART
        </button>
      </div>
    </motion.article>
  );
}
