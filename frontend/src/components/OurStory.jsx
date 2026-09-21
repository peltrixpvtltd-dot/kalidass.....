import Reveal from "@/components/Reveal";

const CHAPTERS = [
  {
    num: "01",
    title: "The First Flame",
    text: "In 1920, a single brass kadhai and a family recipe for milk cake lit the fire that still burns today. Kali Dass believed a sweet should take as long as it takes — and not a minute less.",
  },
  {
    num: "02",
    title: "The Craft Endures",
    text: "Five generations later, khoya is still reduced by hand, ghee is still churned in-house, and every ladoo is still rolled by the same palms that learned from their fathers.",
  },
  {
    num: "03",
    title: "The Promise",
    text: "No shortcuts, no compromises, no preservatives. Only pure ingredients, patient craft, and the same taste your grandparents remember — sealed in every box we send.",
  },
];

export default function OurStory() {
  return (
    <section id="our-story" data-testid="our-story-section" className="relative bg-cream grain py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
        <Reveal className="lg:col-span-5 relative">
          <div className="absolute -inset-3 border border-gold/50 translate-x-4 translate-y-4 pointer-events-none" />
          <div className="relative overflow-hidden shadow-[0_40px_80px_rgba(61,10,30,0.3)]">
            <img
              src="/images/story_making.png"
              alt="Handcrafting sweets the traditional way"
              data-testid="story-image"
              className="w-full h-[440px] lg:h-[560px] object-cover hover:scale-105 transition-transform duration-[1600ms]"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-maroon px-8 py-6 shadow-[0_20px_50px_rgba(61,10,30,0.45)]">
            <span className="font-serif text-gold text-4xl font-semibold">1920</span>
            <span className="block text-[9px] tracking-[0.35em] text-cream/70 mt-1">THE YEAR IT BEGAN</span>
          </div>
        </Reveal>

        <div className="lg:col-span-7 lg:pl-10">
          <Reveal>
            <p className="text-[11px] tracking-[0.5em] text-gold-dark font-semibold">OUR STORY · A MANIFESTO IN THREE CHAPTERS</p>
            <h2 className="font-serif text-maroon text-4xl sm:text-5xl lg:text-6xl font-medium mt-4 mb-12">
              A century, <span className="italic text-gold-dark">slow-cooked</span>
            </h2>
          </Reveal>

          <div className="flex flex-col">
            {CHAPTERS.map((c, i) => (
              <Reveal key={c.num} delay={0.12 * i}>
                <div
                  data-testid={`story-chapter-${c.num}`}
                  className="group flex gap-7 py-8 border-t border-maroon/15 last:border-b hover:bg-white/50 transition-colors duration-500 px-2 -mx-2"
                >
                  <span className="font-serif text-5xl lg:text-6xl font-light text-gold/70 group-hover:text-gold-dark transition-colors duration-500 leading-none shrink-0 w-20">
                    {c.num}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-maroon tracking-wide">{c.title}</h3>
                    <p className="text-sm text-ink/65 leading-relaxed mt-3 max-w-xl">{c.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
