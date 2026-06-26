import { AnimateOnScroll } from "./SectionObserver";

const concepts = [
  {
    name: "Hải Dương",
    tagline: "Gió biển, vỏ sò, và ánh nắng xanh",
    description:
      "Concept lấy cảm hứng từ đại dương — backdrop biển xanh mát, phụ kiện vỏ sò, ngọc trai. Hoàn hảo cho những bức ảnh mang hơi thở mùa hè Hải Phòng.",
    color: "ocean",
    bgClass: "bg-ocean/10",
    borderClass: "border-ocean/30",
    // TODO: Replace with actual concept image
    // Image suggestion: ocean-themed photobooth backdrop with shells and blue tones
    // Filename: concept-hai-duong.jpg
    // Alt: "Concept Hải Dương — photobooth backdrop biển xanh tại Favori Foto Hải Phòng"
  },
  {
    name: "Viễn Du",
    tagline: "Hoàng hôn, phiêu lưu, và tự do",
    description:
      "Concept phong cách western mùa hè — backdrop hoàng hôn ấm áp, phụ kiện cowboy. Cho những ai thích phong cách cá tính, bay bổng.",
    color: "sunset",
    bgClass: "bg-sunset/10",
    borderClass: "border-sunset/30",
    // TODO: Replace with actual concept image
    // Filename: concept-vien-du.jpg
    // Alt: "Concept Viễn Du — photobooth backdrop hoàng hôn cowboy tại Favori Foto Hải Phòng"
  },
];

export function Concepts() {
  return (
    <section id="concepts" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-coral mb-3">
              Concept chụp
            </p>
            <h2
              className="text-3xl md:text-5xl font-bold text-charcoal"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Chọn phong cách của bạn
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {concepts.map((concept) => (
            <AnimateOnScroll key={concept.name}>
              <div
                className={`group relative rounded-3xl ${concept.bgClass} border ${concept.borderClass} p-8 md:p-10 transition-all duration-500 hover:shadow-xl hover:-translate-y-1`}
              >
                {/* Placeholder for concept image */}
                <div
                  className={`aspect-[4/3] rounded-2xl ${concept.bgClass} border ${concept.borderClass} mb-8 flex items-center justify-center overflow-hidden`}
                >
                  <span className="text-6xl opacity-30">
                    {concept.color === "ocean" ? "🐚" : "🌅"}
                  </span>
                </div>

                <h3
                  className="text-2xl md:text-3xl font-bold text-charcoal mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {concept.name}
                </h3>
                <p className="text-sm font-semibold text-charcoal-light/70 italic mb-4">
                  {concept.tagline}
                </p>
                <p className="text-charcoal-light leading-relaxed">
                  {concept.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
