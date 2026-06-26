import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream-dark">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3
              className="text-2xl font-semibold text-white mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Favori Foto
            </h3>
            <p className="text-sm leading-relaxed opacity-80">
              Studio photobooth tự chụp tại Hải Phòng.
              <br />
              Nơi lưu giữ những khoảnh khắc thật xinh.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Liên kết</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link href="/#concepts" className="hover:text-coral transition-colors">
                  Concept
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-coral transition-colors">
                  Bảng giá
                </Link>
              </li>
              <li>
                <Link href="/#gallery" className="hover:text-coral transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-coral transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Thông tin</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>📍 1B Nguyễn Đức Cảnh, Hải Phòng</li>
              <li>🕐 09:00 – 21:00 hàng ngày</li>
              <li>
                <a
                  href="https://www.instagram.com/favori.fotoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-coral transition-colors"
                >
                  📸 @favori.fotoo
                </a>
              </li>
              {/* TODO: Add phone number */}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs opacity-60">
          © {new Date().getFullYear()} Favori Foto. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
