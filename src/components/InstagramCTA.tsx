import { AnimateOnScroll } from "./SectionObserver";

export function InstagramCTA() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-coral/10 via-cream to-ocean/10">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <AnimateOnScroll>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-coral mb-3">
            Follow us
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-charcoal mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Theo dõi Favori Foto
          </h2>
          <p className="text-charcoal-light mb-8 leading-relaxed">
            Cập nhật concept mới, ảnh đẹp, và ưu đãi trên Instagram nhé!
          </p>
          <a
            href="https://www.instagram.com/favori.fotoo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-charcoal px-8 py-3.5 text-base font-semibold text-white hover:bg-charcoal-light transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
          >
            📸 @favori.fotoo
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
