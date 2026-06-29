import { AnimateOnScroll } from "./SectionObserver";

const concepts = [
  {
    name: "Nhà Hát Của Những Giấc Mơ",
    tagline: "Sang trọng, cổ điển, và đầy cuốn hút",
    description:
      "Concept lấy cảm hứng từ sắc đỏ nhung cổ điển — backdrop đỏ trầm, ánh sáng mềm và cảm giác điện ảnh. Phù hợp cho những bức ảnh mang vibe sang, nổi bật, hơi bí ẩn nhưng vẫn rất thời thượng.",
    icon: "🎭",
    bgClass: "bg-[#8f2636]/10",
    borderClass: "border-[#8f2636]/30",
  },
  {
    name: "Chớp Thoáng Đông Dương",
    tagline: "Hoài niệm, cá tính, và nổi bật",
    description:
      "Concept mang phong cách retro với nền xanh lam đặc trưng — vừa có cảm giác cổ điển, vừa trẻ trung và khác biệt. Hoàn hảo cho những ai thích ảnh có màu sắc lạ mắt, cá tính nhưng vẫn dễ thương.",
    icon: "🪭",
    bgClass: "bg-[#3f72af]/10",
    borderClass: "border-[#3f72af]/30",
  },
  {
    name: "Đêm Xanh",
    tagline: "Tôn da, thanh lịch, và rất ăn ảnh",
    description:
      "Concept nền xanh navy cực kỳ tôn da — giúp gương mặt sáng hơn, outfit nổi bật hơn và tổng thể ảnh trông sang hơn. Phù hợp cho cả chụp cá nhân, couple hoặc nhóm bạn muốn có bộ ảnh chỉn chu.",
    icon: "🌙",
    bgClass: "bg-[#14213d]/10",
    borderClass: "border-[#14213d]/30",
  },
  {
    name: "Chạm Môi",
    tagline: "Tươi sáng, vui nhộn, và khác biệt",
    description:
      "Concept với sắc xanh nổi bật kết hợp cùng chi tiết môi vui mắt — tạo cảm giác trẻ trung, tinh nghịch và rất “bắt trend”. Dành cho những ai thích một bộ ảnh có màu sắc riêng, nhìn là nhớ ngay.",
    icon: "💋",
    bgClass: "bg-[#20a39e]/10",
    borderClass: "border-[#20a39e]/30",
  },
  {
    name: "Hải Dương",
    tagline: "Gió biển, vỏ sò, và ánh nắng xanh",
    description:
      "Concept lấy cảm hứng từ đại dương — backdrop biển xanh mát, phụ kiện vỏ sò, ngọc trai. Hoàn hảo cho những bức ảnh mang hơi thở mùa hè Hải Phòng.",
    icon: "🐚",
    bgClass: "bg-ocean/10",
    borderClass: "border-ocean/30",
  },
  {
    name: "Viễn Du",
    tagline: "Hoàng hôn, phiêu lưu, và tự do",
    description:
      "Concept phong cách western mùa hè — backdrop hoàng hôn ấm áp, phụ kiện cowboy. Cho những ai thích phong cách cá tính, bay bổng và một chút tự do như đang trên chuyến viễn du.",
    icon: "🌅",
    bgClass: "bg-sunset/10",
    borderClass: "border-sunset/30",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {concepts.map((concept) => (
            <AnimateOnScroll key={concept.name}>
              <div
                className={`group relative rounded-3xl ${concept.bgClass} border ${concept.borderClass} p-8 md:p-10 transition-all duration-500 hover:shadow-xl hover:-translate-y-1`}
              >
                {/* Placeholder for concept image */}
                <div
                  className={`aspect-[4/3] rounded-2xl ${concept.bgClass} border ${concept.borderClass} mb-8 flex items-center justify-center overflow-hidden`}
                >
                  <span className="text-6xl opacity-40">{concept.icon}</span>
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
