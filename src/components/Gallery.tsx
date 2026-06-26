import { AnimateOnScroll } from "./SectionObserver";

// TODO: Replace these placeholders with actual gallery images
// Suggested filenames and alt text:
// gallery-1.jpg — "Nhóm bạn chụp photobooth concept Hải Dương tại Favori Foto Hải Phòng"
// gallery-2.jpg — "Cặp đôi chụp photobooth concept Viễn Du tại Favori Foto"
// gallery-3.jpg — "Chụp ảnh solo tại photobooth Favori Foto Hải Phòng"
// gallery-4.jpg — "Ảnh nhóm vui vẻ tại Favori Foto photobooth"
// gallery-5.jpg — "Ảnh chụp photobooth phong cách biển tại Hải Phòng"
// gallery-6.jpg — "Khoảnh khắc đáng yêu tại Favori Foto studio"

const galleryItems = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  alt: `Ảnh photobooth tại Favori Foto Hải Phòng ${i + 1}`,
}));

export function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ocean-deep mb-3">
              Gallery
            </p>
            <h2
              className="text-3xl md:text-5xl font-bold text-charcoal"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Khoảnh khắc tại Favori
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item) => (
            <AnimateOnScroll key={item.id}>
              <div className="group relative aspect-square rounded-2xl bg-cream-dark border border-charcoal/5 overflow-hidden transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
                {/* TODO: Replace with <Image> component using actual photos */}
                <div className="absolute inset-0 flex items-center justify-center text-4xl opacity-20">
                  📸
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  {item.alt}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
