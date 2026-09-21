import Reveal from "@/components/Reveal";
import { MessageCircle, Package, ShieldCheck, Globe2 } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/products";

const POINTS = [
  { icon: Package, title: "Bulk & Wedding Orders", text: "From 10 kg to 1,000 gift boxes — priced specially for scale." },
  { icon: ShieldCheck, title: "Hygienically Prepared", text: "FSSAI-standard kitchens, sealed at source, untouched by hand after packing." },
  { icon: Globe2, title: "Export Ready", text: "Shelf-life engineered packing for delivery across India & worldwide." },
];

export default function BulkOrders() {
  const msg = encodeURIComponent("Hello Kali Dass & Sons! I would like to discuss a bulk / export order.");
  return (
    <section id="bulk-orders" data-testid="bulk-orders-section" className="relative bg-cream grain py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
        <Reveal className="lg:col-span-5 relative">
          <div className="absolute -inset-3 border border-gold/50 translate-x-4 translate-y-4 pointer-events-none" />
          <div className="overflow-hidden shadow-[0_40px_80px_rgba(61,10,30,0.3)]">
            <img
              src="/images/bulk_boxes.png"
              alt="Bulk and export packing of Kali Dass & Sons boxes"
              data-testid="bulk-image"
              className="w-full h-[380px] lg:h-[500px] object-cover hover:scale-105 transition-transform duration-[1600ms]"
            />
          </div>
        </Reveal>

        <div className="lg:col-span-7 lg:pl-8">
          <Reveal>
            <p className="text-[11px] tracking-[0.5em] text-gold-dark font-semibold">BULK ORDERS &amp; EXPORT</p>
            <h2 className="font-serif text-maroon text-4xl sm:text-5xl lg:text-6xl font-medium mt-4">
              One kadhai, <span className="italic text-gold-dark">a thousand boxes</span>
            </h2>
          </Reveal>

          <div className="mt-10 flex flex-col gap-2">
            {POINTS.map((p, i) => (
              <Reveal key={p.title} delay={0.12 * i}>
                <div
                  data-testid={`bulk-point-${i}`}
                  className="group flex gap-5 items-start py-6 border-t border-maroon/15 last:border-b px-2 -mx-2 hover:bg-white/50 transition-colors duration-500"
                >
                  <p.icon size={26} strokeWidth={1.3} className="text-gold-dark shrink-0 mt-1 group-hover:scale-110 transition-transform duration-500" />
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-maroon">{p.title}</h3>
                    <p className="text-sm text-ink/60 leading-relaxed mt-1.5">{p.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.35}>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="bulk-whatsapp-btn"
              className="mt-9 inline-flex items-center gap-3 bg-maroon text-cream px-8 py-4 text-[11px] font-semibold tracking-[0.25em] hover:bg-gold hover:text-maroon-deep transition-colors duration-400"
            >
              <MessageCircle size={15} strokeWidth={2.4} />
              REQUEST BULK PRICING
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
