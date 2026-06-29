import Link from "next/link";
import { AnimateOnScroll } from "./SectionObserver";

const plans = [
  {
    name: "Gói ảnh dọc",
    price: "80.000đ",
    features: [
      "Không giới hạn số người chụp",
      "5 phút chụp thỏa thích hoặc 10 tấm chụp tự động",
      "Nhận 2 tấm ảnh in",
      "Quét mã QR để lấy file ảnh gốc trong vòng 1 ngày",
    ],
    popular: false,
  },
  {
    name: "Gói phổ biến nhất",
    price: "120.000đ",
    features: [
      "Ảnh in kích thước lớn hơn",
      "Không giới hạn số người chụp",
      "5 phút chụp thỏa thích hoặc 10 tấm chụp tự động",
      "Nhận 2 tấm ảnh in",
      "Quét mã QR để lấy file ảnh gốc trong vòng 1 ngày",
    ],
    popular: true,
  },
  {
    name: "Gói đặc biệt",
    price: "150.000đ",
    features: ["Thông tin chi tiết cần bổ sung thêm"],
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sunset mb-3">
              Bảng giá
            </p>
            <h2
              className="text-3xl md:text-5xl font-bold text-charcoal"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Bảng giá chụp photobook
            </h2>
            <p className="mt-4 text-charcoal-light">
              Chọn gói ảnh phù hợp với phong cách của bạn
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <AnimateOnScroll key={plan.name}>
              <div
                className={`relative rounded-3xl bg-white p-8 shadow-sm border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  plan.popular
                    ? "border-coral shadow-md ring-2 ring-coral/20"
                    : "border-charcoal/10"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-coral px-4 py-1 text-xs font-semibold text-white">
                    Phổ biến nhất ⭐
                  </div>
                )}

                <h3 className="text-xl font-bold text-charcoal mb-1">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span
                    className="text-4xl font-bold text-charcoal"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {plan.price}
                  </span>
                  <span className="text-charcoal-light text-sm">/lượt</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-charcoal-light"
                    >
                      <span className="text-coral mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* TODO: Replace # with actual booking link */}
                <Link
                  href="#"
                  className={`block w-full rounded-full py-3 text-center text-sm font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-coral text-white hover:bg-sunset-warm"
                      : "border-2 border-charcoal/20 text-charcoal hover:border-coral hover:text-coral"
                  }`}
                >
                  Đặt lịch ngay
                </Link>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
