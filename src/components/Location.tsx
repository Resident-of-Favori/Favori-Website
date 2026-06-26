import { AnimateOnScroll } from "./SectionObserver";

export function Location() {
  return (
    <section id="location" className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimateOnScroll>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sunset mb-3">
                Địa chỉ
              </p>
              <h2
                className="text-3xl md:text-5xl font-bold text-charcoal mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Ghé Favori Foto
              </h2>
              <div className="space-y-4 text-charcoal-light">
                <p className="flex items-start gap-3">
                  <span className="text-xl">📍</span>
                  <span>
                    <strong className="text-charcoal">1B Nguyễn Đức Cảnh</strong>
                    <br />
                    Hải Phòng, Việt Nam
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-xl">🕐</span>
                  <span>09:00 – 21:00 hàng ngày</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-xl">📸</span>
                  <a
                    href="https://www.instagram.com/favori.fotoo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ocean-deep hover:text-coral transition-colors font-medium"
                  >
                    @favori.fotoo
                  </a>
                </p>
              </div>
              <p className="mt-6 text-sm text-charcoal-light/70">
                Gần trung tâm Hải Phòng, dễ tìm và có chỗ để xe thoải mái.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
              {/* TODO: Replace coordinates with exact location */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3727.5!2d106.688!3d20.845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z4oCcMUIgTmd1eeG7hW4gxJDhu6ljIEPhuqNuaCwgSOG6o2kgUGjDsm5n4oCd!5e0!3m2!1svi!2svn!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Favori Foto — 1B Nguyễn Đức Cảnh, Hải Phòng"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
