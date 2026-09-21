import { Wheat, Crown, Sparkles, Package, MessageCircle, Facebook, Instagram } from "lucide-react";
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY, FACEBOOK_URL, INSTAGRAM_URL } from "@/data/products";

const BADGES = [
  { icon: Wheat, label: "PURE INGREDIENTS" },
  { icon: Crown, label: "PREMIUM QUALITY" },
  { icon: Sparkles, label: "HYGIENICALLY PREPARED" },
  { icon: Package, label: "EXPORT PACKING" },
];

export default function Footer() {
  return (
    <footer data-testid="footer" className="relative bg-maroon-deep grain text-cream overflow-hidden">
      <div className="border-y border-gold/20">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-10 py-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {BADGES.map((b, i) => (
            <div key={b.label} data-testid={`footer-badge-${i}`} className="flex items-center justify-center gap-3 group">
              <b.icon size={20} strokeWidth={1.4} className="text-gold group-hover:scale-110 transition-transform duration-500" />
              <span className="text-[10px] tracking-[0.28em] text-cream/70 font-medium">{b.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-5 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        <div>
          <span className="block font-serif text-3xl gold-foil-text font-semibold tracking-[0.06em]">KALI DASS</span>
          <span className="block text-[10px] tracking-[0.55em] text-gold/80 font-medium mt-1">& SONS · SINCE 1920</span>
          <p className="text-[12.5px] text-cream/55 leading-relaxed mt-6 max-w-xs">
            From the heart of Himachal Pradesh to the table across India and beyond &amp; beyond.
          </p>
        </div>

        <div className="md:text-center">
          <h3 className="text-[10px] tracking-[0.4em] text-gold font-semibold mb-6">ORDER &amp; ENQUIRIES</h3>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-whatsapp-cta"
            className="inline-flex items-center gap-3 rounded-full bg-gold text-maroon-deep px-7 py-3.5 text-[11px] font-semibold tracking-[0.2em] hover:bg-gold-light transition-colors duration-300"
          >
            <MessageCircle size={15} strokeWidth={2.4} />
            ORDER ON WHATSAPP
          </a>
          <p className="font-serif text-cream/80 text-xl mt-4" data-testid="footer-phone">{WHATSAPP_DISPLAY}</p>
          <p className="text-[11px] text-cream/45 mt-2">Rates applicable from 3 May 2026</p>
        </div>

        <div className="md:text-right">
          <h3 className="text-[10px] tracking-[0.4em] text-gold font-semibold mb-6">FOLLOW US</h3>
          <div className="flex md:justify-end gap-4">
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-facebook-link"
              aria-label="Facebook"
              className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-maroon-deep transition-colors duration-400"
            >
              <Facebook size={19} strokeWidth={1.5} />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-instagram-link"
              aria-label="Instagram"
              className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-maroon-deep transition-colors duration-400"
            >
              <Instagram size={19} strokeWidth={1.5} />
            </a>
          </div>
          <p className="text-[11px] text-cream/45 mt-4">facebook.com/share/1CEfTHjgyC<br />@kalidasssweets</p>
        </div>
      </div>

      <div className="border-t border-gold/15">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[10.5px] tracking-[0.18em] text-cream/45">
            © {new Date().getFullYear()} KALI DASS &amp; SONS · ALL RIGHTS RESERVED
          </p>
          <p className="text-[10.5px] tracking-[0.18em] text-cream/60" data-testid="footer-developer-credit">
            DEVELOPED BY <span className="text-gold font-semibold">PELTRIX PRIVATE LIMITED</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
