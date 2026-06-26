import Link from "next/link";
import { AnimateOnScroll } from "./SectionObserver";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream-dark to-coral-soft/20" />
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-ocean/10 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-sunset/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center">
        <AnimateOnScroll>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-ocean-deep">
            Self Photo Studio · Hải Phòng
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-charcoal"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Photobooth Hải Phòng
            <br />
            <span className="text-coral">cho những khoảnh khắc</span>
            <br />
            <span className="italic text-ocean-deep">thật xinh</span>
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll delay={400}>
          <p className="mx-auto mt-8 max-w-xl text-lg text-charcoal-light leading-relaxed">
            Favori Foto — studio photobooth tự chụp với concept độc quyền, không
            gian xinh yêu, ảnh đẹp lấy liền. Đến một mình, cùng bạn bè, hay
            người thương đều vui!
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={600}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* TODO: Replace # with actual booking link */}
            <Link
              href="#"
              className="rounded-full bg-coral px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-coral/25 hover:bg-sunset-warm hover:shadow-sunset/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              Đặt lịch chụp ✨
            </Link>
            <Link
              href="#concepts"
              className="rounded-full border-2 border-charcoal/20 px-8 py-3.5 text-base font-semibold text-charcoal hover:border-ocean hover:text-ocean-deep transition-all duration-300"
            >
              Xem concept
            </Link>
          </div>
        </AnimateOnScroll>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-charcoal/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-charcoal/40" />
        </div>
      </div>
    </section>
  );
}
