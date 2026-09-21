import Reveal from "@/components/Reveal";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/products";

const OCCASIONS = ["Weddings", "Diwali & Festivals", "Corporate Gifting", "Celebrations"];

export default function Gifting() {
  const msg = encodeURIComponent("Hello Kali Dass & Sons! I would like to enquire about gift boxes.");
  return (
    <section id="gifting" data-testid="gifting-section" className="relative bg-maroon grain py-24 lg:py-32 overflow-hidden">
      <div className="absolute -bottom-32 -left-32 w-[480px] h-[480px] rounded-full bg-gold/5 blur-3xl glow-pulse" />
      <div className="max-w-[1440px] mx-auto px-5 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <Reveal>
            <p className="text-[11px] tracking-[0.5em] text-gold font-semibold">GIFTING, PERFECTED</p>
            <h2 className="font-serif text-cream text-4xl sm:text-5xl lg:text-6xl font-medium mt-4 leading-[1.05]">
              Boxes that say it <span className="italic gold-foil-text">before you do</span>
            </h2>
            <p className="text-sm text-cream/60 leading-relaxed mt-6 max-w-lg">
              Deep maroon, gold-foiled, and filled with our finest — a Kali Dass &amp; Sons
              box has been the gift of choice for a hundred years of celebrations.
              Custom assortments, personalized sleeves, and export-grade packing available.
            </p>
          </Reveal>

          <div className="mt-9 flex flex-wrap gap-3">
            {OCCASIONS.map((o, i) => (
              <Reveal key={o} delay={0.08 * i}>
                <span
                  data-testid={`gifting-occasion-${i}`}
                  className="inline-block border border-gold/40 text-gold text-[10.5px] tracking-[0.22em] font-semibold px-5 py-2.5 hover:bg-gold hover:text-maroon-deep transition-colors duration-400 cursor-default"
                >
                  {o.toUpperCase()}
                </span>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.35}>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="gifting-whatsapp-btn"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-gold text-maroon-deep px-8 py-4 text-[11px] font-semibold tracking-[0.25em] hover:bg-gold-light transition-colors duration-300"
            >
              <MessageCircle size={15} strokeWidth={2.4} />
              DESIGN YOUR BOX ON WHATSAPP
            </a>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-6 order-1 lg:order-2 relative">
          <div className="absolute -inset-3 border border-gold/40 -translate-x-4 -translate-y-4 pointer-events-none" />
          <div className="overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
            <img
              src="/images/gifting_box.png"
              alt="Kali Dass & Sons luxury gifting box"
              data-testid="gifting-image"
              className="w-full h-[380px] lg:h-[520px] object-cover hover:scale-105 transition-transform duration-[1600ms]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
