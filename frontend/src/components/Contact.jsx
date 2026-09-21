import Reveal from "@/components/Reveal";
import { MessageCircle, Facebook, Instagram, Clock } from "lucide-react";
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY, FACEBOOK_URL, INSTAGRAM_URL } from "@/data/products";

export default function Contact() {
  return (
    <section id="contact" data-testid="contact-section" className="relative bg-cream-dark grain py-24 lg:py-28 border-t border-gold/30">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-10">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="text-[11px] tracking-[0.5em] text-gold-dark font-semibold">GET IN TOUCH</p>
          <h2 className="font-serif text-maroon text-4xl sm:text-5xl lg:text-6xl font-medium mt-4">
            Craving something <span className="italic text-gold-dark">sweet?</span>
          </h2>
          <p className="text-sm text-ink/60 mt-5 leading-relaxed">
            Order fresh, ask about gift boxes, or plan a wedding order — we answer
            fastest on WhatsApp.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Reveal delay={0.05}>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="contact-whatsapp-card"
              className="group flex flex-col items-center text-center bg-maroon px-8 py-10 border border-maroon hover:border-gold transition-colors duration-500 h-full"
            >
              <MessageCircle size={28} strokeWidth={1.4} className="text-gold group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-[11px] tracking-[0.3em] font-semibold text-cream mt-5">WHATSAPP US</h3>
              <p className="font-serif text-gold text-2xl mt-2" data-testid="contact-phone">{WHATSAPP_DISPLAY}</p>
              <p className="text-[11px] text-cream/50 mt-2">Tap to start an order</p>
            </a>
          </Reveal>

          <Reveal delay={0.15}>
            <div
              data-testid="contact-hours-card"
              className="flex flex-col items-center text-center bg-white/60 px-8 py-10 border border-maroon/15 h-full"
            >
              <Clock size={28} strokeWidth={1.4} className="text-gold-dark" />
              <h3 className="text-[11px] tracking-[0.3em] font-semibold text-maroon mt-5">SHOP HOURS</h3>
              <p className="font-serif text-maroon text-2xl mt-2">Open All Days</p>
              <p className="text-[11px] text-ink/50 mt-2">Fresh batches every morning &amp; evening</p>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div
              data-testid="contact-social-card"
              className="flex flex-col items-center text-center bg-white/60 px-8 py-10 border border-maroon/15 h-full"
            >
              <h3 className="text-[11px] tracking-[0.3em] font-semibold text-maroon mt-1">FOLLOW THE LEGACY</h3>
              <div className="flex gap-4 mt-6">
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="contact-facebook-link"
                  aria-label="Kali Dass & Sons on Facebook"
                  className="w-14 h-14 rounded-full border border-maroon/25 flex items-center justify-center text-maroon hover:bg-maroon hover:text-gold hover:border-maroon transition-colors duration-400"
                >
                  <Facebook size={22} strokeWidth={1.5} />
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="contact-instagram-link"
                  aria-label="Kali Dass & Sons on Instagram"
                  className="w-14 h-14 rounded-full border border-maroon/25 flex items-center justify-center text-maroon hover:bg-maroon hover:text-gold hover:border-maroon transition-colors duration-400"
                >
                  <Instagram size={22} strokeWidth={1.5} />
                </a>
              </div>
              <p className="text-[11px] text-ink/50 mt-6">@kalidasssweets · daily fresh batches</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
