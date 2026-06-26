"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/#concepts", label: "Concept" },
  { href: "/#pricing", label: "Bảng giá" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/#location", label: "Địa chỉ" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-cream/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="font-[var(--font-display)] text-xl md:text-2xl font-semibold tracking-tight text-charcoal"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Favori Foto
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-charcoal-light hover:text-coral transition-colors"
              >
                {link.label}
              </Link>
            ))}
            {/* TODO: Replace # with actual booking link */}
            <Link
              href="#"
              className="rounded-full bg-coral px-5 py-2 text-sm font-semibold text-white hover:bg-coral-soft transition-colors"
            >
              Đặt lịch chụp
            </Link>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
          >
            <span
              className={`block h-0.5 w-6 bg-charcoal transition-transform duration-300 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-charcoal transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-charcoal transition-transform duration-300 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Full-screen mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-cream flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-2xl font-semibold text-charcoal hover:text-coral transition-colors"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="#"
          onClick={() => setMenuOpen(false)}
          className="mt-4 rounded-full bg-coral px-8 py-3 text-lg font-semibold text-white hover:bg-coral-soft transition-colors"
        >
          Đặt lịch chụp
        </Link>
      </div>
    </>
  );
}
