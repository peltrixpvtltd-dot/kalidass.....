import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChefHat, Wheat, Package, Truck } from "lucide-react";
import Reveal from "@/components/Reveal";

const FEATURES = [
  { icon: ChefHat, title: "AUTHENTIC RECIPES", text: "Passed down through generations" },
  { icon: Wheat, title: "PREMIUM INGREDIENTS", text: "Sourced from the finest farms" },
  { icon: Package, title: "EXPORT QUALITY PACKING", text: "Packed with care for longer shelf life" },
  { icon: Truck, title: "DELIVERED WITH CARE", text: "Across India & worldwide" },
];

function MaskedLine({ children, delay, className }) {
  return (
    <span className="block overflow-hidden pb-1">
      <motion.span
        className={`block ${className}`}
        initial={{ y: "115%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.05, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const badgeY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const go = (href) => (e) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" ref={ref} data-testid="hero-section" className="relative bg-cream grain overflow-hidden pt-[76px]">
      <div className="absolute top-24 left-0 w-px h-64 bg-gold/40 hidden xl:block" />
      <div className="absolute bottom-16 right-0 w-px h-48 bg-gold/40 hidden xl:block" />

      <div className="max-w-[1440px] mx-auto px-5 lg:px-10 pt-12 lg:pt-20 pb-16 lg:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative">
        <div className="lg:col-span-4 relative z-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-[11px] tracking-[0.5em] text-gold-dark font-semibold mb-7"
          >
            EST. 1920 · HANDCRAFTED MITHAI
          </motion.p>

          <h1 className="font-serif text-maroon leading-[0.95] text-[52px] sm:text-[68px] lg:text-[76px]" data-testid="hero-headline">
            <MaskedLine delay={0.35} className="font-medium">A tradition</MaskedLine>
            <MaskedLine delay={0.5} className="italic font-semibold text-maroon-light">worth tasting<span className="text-gold-dark">.</span></MaskedLine>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 text-[15px] leading-relaxed text-ink/70 max-w-sm"
          >
            A century of slow-cooked khoya, desi ghee and saffron — from our family
            kitchen to tables across India &amp; beyond.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#shop"
              onClick={go("#shop")}
              data-testid="hero-shop-sweets-btn"
              className="group relative overflow-hidden bg-maroon text-cream text-[11px] font-semibold tracking-[0.25em] px-8 py-4"
            >
              <span className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="relative group-hover:text-maroon-deep transition-colors duration-500">SHOP SWEETS</span>
            </a>
            <a
              href="#gifting"
              onClick={go("#gifting")}
              data-testid="hero-explore-gifting-btn"
              className="border border-maroon/40 text-maroon text-[11px] font-semibold tracking-[0.25em] px-8 py-4 hover:border-gold-dark hover:text-gold-dark transition-colors duration-400"
            >
              EXPLORE GIFTING
            </a>
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -inset-3 border border-gold/50 pointer-events-none z-10" />
            <motion.div style={{ y: imgY }} className="overflow-hidden shadow-[0_40px_80px_rgba(61,10,30,0.35)]">
              <img
                src="/images/hero_box.png"
                alt="Kali Dass & Sons luxury gift box of assorted mithai"
                data-testid="hero-image"
                className="w-full h-[420px] lg:h-[540px] object-cover scale-105"
              />
            </motion.div>
          </motion.div>

          <motion.div
            style={{ y: badgeY }}
            initial={{ opacity: 0, rotate: -12, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -bottom-8 -left-4 lg:-left-10 z-20"
            data-testid="hero-tradition-badge"
          >
            <div className="relative w-32 h-32 lg:w-36 lg:h-36">
              <svg viewBox="0 0 100 100" className="absolute inset-0 spin-slow">
                <circle cx="50" cy="50" r="48" fill="none" stroke="#c9a24b" strokeWidth="1" strokeDasharray="3 4" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#c9a24b" strokeWidth="0.6" opacity="0.6" />
              </svg>
              <div className="absolute inset-3 rounded-full bg-maroon shadow-[0_16px_40px_rgba(61,10,30,0.5)] flex flex-col items-center justify-center text-center">
                <span className="font-serif text-gold text-2xl lg:text-[26px] font-semibold leading-none">100+</span>
                <span className="text-[7.5px] tracking-[0.28em] text-cream/80 mt-1.5 leading-relaxed">YEARS OF<br />TRADITION</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-3 flex flex-col gap-0 lg:pl-6">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={0.15 * i}>
              <div
                data-testid={`hero-feature-${i}`}
                className="group flex gap-4 py-6 border-b border-maroon/15 first:border-t hover:border-gold/60 transition-colors duration-500"
              >
                <f.icon size={26} strokeWidth={1.3} className="text-gold-dark shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-500" />
                <div>
                  <h3 className="text-[11px] tracking-[0.22em] font-semibold text-maroon">{f.title}</h3>
                  <p className="text-[12.5px] text-ink/60 mt-1.5 leading-relaxed">{f.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
