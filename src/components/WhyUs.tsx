import { AnimateOnScroll } from "./SectionObserver";

const reasons = [
  {
    icon: "🎨",
    title: "Concept độc quyền",
    desc: "Mỗi concept được thiết kế riêng, mang đậm dấu ấn Favori Foto — không đụng hàng!",
  },
  {
    icon: "📸",
    title: "Ảnh đẹp lấy liền",
    desc: "Chụp xong là có ảnh luôn. In tại chỗ hoặc nhận file gốc chất lượng cao.",
  },
  {
    icon: "✨",
    title: "Không gian xinh xắn",
    desc: "Studio được decor tỉ mỉ, check-in cũng xinh, chụp ảnh càng xinh hơn!",
  },
  {
    icon: "🎉",
    title: "Vui với mọi người",
    desc: "Đi một mình, đi cùng bạn bè, hay đi với người yêu — đều có trải nghiệm phù hợp.",
  },
];

export function WhyUs() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ocean-deep mb-3">
              Tại sao chọn Favori?
            </p>
            <h2
              className="text-3xl md:text-5xl font-bold text-charcoal"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Photobooth đẹp ở Hải Phòng
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((r, i) => (
            <AnimateOnScroll key={r.title} delay={i * 150}>
              <div className="text-center group">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cream text-3xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  {r.icon}
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-2">
                  {r.title}
                </h3>
                <p className="text-sm text-charcoal-light leading-relaxed">
                  {r.desc}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
