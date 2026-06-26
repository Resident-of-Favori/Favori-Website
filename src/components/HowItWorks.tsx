import { AnimateOnScroll } from "./SectionObserver";

const steps = [
  { num: "01", title: "Đặt lịch", desc: "Chọn ngày giờ và concept qua Instagram hoặc hotline." },
  { num: "02", title: "Đến studio", desc: "Ghé 1B Nguyễn Đức Cảnh, nhận phụ kiện và hướng dẫn." },
  { num: "03", title: "Chụp thoả thích", desc: "Tự chụp trong không gian riêng tư, xinh xắn." },
  { num: "04", title: "Nhận ảnh liền", desc: "In ảnh tại chỗ + nhận file gốc qua Zalo ngay!" },
];

export function HowItWorks() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-coral mb-3">
              Quy trình
            </p>
            <h2
              className="text-3xl md:text-5xl font-bold text-charcoal"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Chụp photobooth dễ lắm!
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step) => (
            <AnimateOnScroll key={step.num}>
              <div className="relative text-center">
                <span
                  className="block text-5xl font-bold text-coral/20 mb-4"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {step.num}
                </span>
                <h3 className="text-lg font-bold text-charcoal mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-charcoal-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
