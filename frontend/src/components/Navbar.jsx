import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, MessageCircle, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from "@/data/products";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Our Story", href: "#our-story" },
  { label: "Shop", href: "#shop" },
  { label: "Gifting", href: "#gifting" },
  { label: "Bulk Orders", href: "#bulk-orders" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { count, setOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    setMobile(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 inset-x-0 z-50 bg-maroon/95 backdrop-blur-md border-b border-gold/25 transition-shadow duration-500 ${scrolled ? "shadow-[0_10px_40px_rgba(0,0,0,0.45)]" : ""}`}
    >
      <div className="max-w-[1440px] mx-auto px-5 lg:px-10 h-[76px] flex items-center justify-between gap-6">
        <a href="#home" onClick={(e) => go(e, "#home")} data-testid="nav-logo" className="shrink-0 leading-none">
          <span className="block font-serif text-[26px] tracking-[0.08em] gold-foil-text font-semibold">KALI DASS</span>
          <span className="block text-[10px] tracking-[0.55em] text-gold/90 font-medium mt-0.5">& SONS · SINCE 1920</span>
        </a>

        <nav className="hidden lg:flex items-center gap-8" data-testid="nav-links">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => go(e, l.href)}
              data-testid={`nav-link-${l.label.toLowerCase().replace(/\s/g, "-")}`}
              className="text-[11.5px] tracking-[0.22em] font-medium text-cream/80 hover:text-gold transition-colors duration-300"
            >
              {l.label.toUpperCase()}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="nav-whatsapp-cta"
            className="hidden md:flex items-center gap-2 rounded-full bg-gold text-maroon-deep px-5 py-2.5 text-[11px] font-semibold tracking-[0.14em] hover:bg-gold-light transition-colors duration-300"
          >
            <MessageCircle size={14} strokeWidth={2.4} />
            ORDER · {WHATSAPP_DISPLAY}
          </a>
          <button
            onClick={() => setOpen(true)}
            data-testid="nav-cart-button"
            className="relative flex items-center justify-center w-11 h-11 rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-maroon-deep transition-colors duration-300"
            aria-label="Open cart"
          >
            <ShoppingBag size={18} />
            {count > 0 && (
              <motion.span
                key={count}
                initial={{ scale: 0.4 }}
                animate={{ scale: 1 }}
                data-testid="nav-cart-count"
                className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1 rounded-full bg-gold text-maroon-deep text-[11px] font-bold flex items-center justify-center"
              >
                {count}
              </motion.span>
            )}
          </button>
          <button
            onClick={() => setMobile(!mobile)}
            data-testid="nav-mobile-toggle"
            className="lg:hidden w-11 h-11 flex items-center justify-center text-gold"
            aria-label="Toggle menu"
          >
            {mobile ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobile && (
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-maroon border-t border-gold/20 px-6 py-5 flex flex-col gap-4"
          data-testid="nav-mobile-menu"
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => go(e, l.href)}
              className="text-sm tracking-[0.2em] text-cream/85 hover:text-gold transition-colors"
            >
              {l.label.toUpperCase()}
            </a>
          ))}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="nav-mobile-whatsapp-cta"
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gold text-maroon-deep px-5 py-3 text-xs font-semibold tracking-[0.14em]"
          >
            <MessageCircle size={14} /> ORDER ON WHATSAPP
          </a>
        </motion.nav>
      )}
    </header>
  );
}
