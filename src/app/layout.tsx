import type { Metadata } from "next";
import { Quicksand, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SchemaMarkup } from "@/components/SchemaMarkup";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Favori Foto — Photobooth Hải Phòng cho những khoảnh khắc thật xinh",
  description:
    "Favori Foto là studio photobooth tự chụp tại Hải Phòng với concept độc đáo, không gian xinh xắn. Đặt lịch chụp ảnh lấy liền tại 1B Nguyễn Đức Cảnh.",
  keywords: [
    "photobooth Hải Phòng",
    "chụp photobooth Hải Phòng",
    "photobooth đẹp ở Hải Phòng",
    "self photo studio Hải Phòng",
    "chụp ảnh lấy liền Hải Phòng",
    "Favori Foto photobooth",
    "photobooth Nguyễn Đức Cảnh",
  ],
  openGraph: {
    title: "Favori Foto — Photobooth Hải Phòng",
    description:
      "Studio photobooth tự chụp tại Hải Phòng. Concept xinh, ảnh đẹp, lấy liền!",
    url: "https://favorifoto.com",
    siteName: "Favori Foto",
    locale: "vi_VN",
    type: "website",
    // TODO: Replace with actual OG image
    // images: [{ url: "https://favorifoto.com/images/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://favorifoto.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${quicksand.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SchemaMarkup />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
