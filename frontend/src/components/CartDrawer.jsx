import { AnimatePresence, motion } from "framer-motion";
import { X, Minus, Plus, Trash2, MessageCircle, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { items, open, setOpen, updateQty, removeItem, clear, total, checkout } = useCart();

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            data-testid="cart-backdrop"
            className="fixed inset-0 z-[60] bg-maroon-deep/70 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            data-testid="cart-drawer"
            className="fixed top-0 right-0 z-[70] h-full w-full sm:w-[440px] bg-cream shadow-[-30px_0_80px_rgba(42,7,20,0.5)] flex flex-col"
          >
            <div className="flex items-center justify-between px-7 py-6 bg-maroon border-b border-gold/30">
              <div>
                <h2 className="font-serif text-2xl text-cream font-semibold">Your Order</h2>
                <p className="text-[10px] tracking-[0.3em] text-gold mt-1">KALI DASS &amp; SONS</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                data-testid="cart-close-btn"
                aria-label="Close cart"
                className="w-10 h-10 rounded-full border border-gold/40 text-gold flex items-center justify-center hover:bg-gold hover:text-maroon-deep transition-colors duration-300"
              >
                <X size={17} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-7 py-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center" data-testid="cart-empty-state">
                  <ShoppingBag size={44} strokeWidth={1} className="text-maroon/30" />
                  <p className="font-serif text-2xl text-maroon mt-5">Your box is empty</p>
                  <p className="text-[12px] text-ink/50 mt-2 max-w-[220px]">
                    Add something sweet — the milk cake is calling.
                  </p>
                  <button
                    onClick={() => {
                      setOpen(false);
                      document.querySelector("#shop")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    data-testid="cart-browse-sweets-btn"
                    className="mt-7 bg-maroon text-cream text-[10.5px] tracking-[0.25em] font-semibold px-7 py-3.5 hover:bg-gold hover:text-maroon-deep transition-colors duration-400"
                  >
                    BROWSE SWEETS
                  </button>
                </div>
              ) : (
                <ul className="flex flex-col divide-y divide-maroon/10" data-testid="cart-items-list">
                  {items.map((i) => (
                    <motion.li
                      layout
                      key={i.key}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="py-5 flex gap-4"
                      data-testid={`cart-item-${i.id}`}
                    >
                      <div className="w-20 h-20 shrink-0 overflow-hidden border border-gold/40">
                        <img src={i.img} alt={i.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="font-serif text-lg font-semibold text-maroon leading-tight">{i.name}</h3>
                            <p className="text-[10px] tracking-[0.18em] text-gold-dark font-semibold mt-1">{i.variant.toUpperCase()}</p>
                          </div>
                          <button
                            onClick={() => removeItem(i.key)}
                            data-testid={`cart-remove-${i.id}`}
                            aria-label={`Remove ${i.name}`}
                            className="text-maroon/40 hover:text-maroon transition-colors"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center border border-maroon/20">
                            <button
                              onClick={() => updateQty(i.key, -1)}
                              data-testid={`cart-qty-minus-${i.id}`}
                              className="w-8 h-8 flex items-center justify-center text-maroon hover:bg-maroon hover:text-cream transition-colors"
                            >
                              <Minus size={13} />
                            </button>
                            <span className="w-9 text-center text-sm font-semibold text-maroon" data-testid={`cart-qty-${i.id}`}>{i.qty}</span>
                            <button
                              onClick={() => updateQty(i.key, 1)}
                              data-testid={`cart-qty-plus-${i.id}`}
                              className="w-8 h-8 flex items-center justify-center text-maroon hover:bg-maroon hover:text-cream transition-colors"
                            >
                              <Plus size={13} />
                            </button>
                          </div>
                          <span className="font-serif text-lg font-semibold text-gold-dark" data-testid={`cart-line-total-${i.id}`}>
                            ₹{i.price * i.qty}
                          </span>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-gold/40 bg-white/60 px-7 py-6">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] tracking-[0.3em] font-semibold text-maroon">ORDER TOTAL</span>
                  <span className="font-serif text-3xl font-semibold text-maroon" data-testid="cart-total">₹{total}</span>
                </div>
                <p className="text-[10px] text-ink/45 mb-5">Rates applicable from 3 May 2026 · Final confirmation on WhatsApp</p>
                <button
                  onClick={checkout}
                  data-testid="cart-checkout-whatsapp-btn"
                  className="w-full flex items-center justify-center gap-3 rounded-full bg-gold text-maroon-deep py-4 text-[11.5px] font-bold tracking-[0.22em] hover:bg-gold-light transition-colors duration-300"
                >
                  <MessageCircle size={16} strokeWidth={2.5} />
                  CHECKOUT ON WHATSAPP
                </button>
                <button
                  onClick={clear}
                  data-testid="cart-clear-btn"
                  className="w-full mt-3 text-[10px] tracking-[0.25em] text-maroon/50 hover:text-maroon transition-colors py-2"
                >
                  CLEAR ORDER
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
