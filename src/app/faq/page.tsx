import type { Metadata } from "next";
import { FAQContent } from "@/components/FAQContent";

export const metadata: Metadata = {
  title: "FAQ — Câu hỏi thường gặp | Favori Foto Photobooth Hải Phòng",
  description:
    "Giải đáp mọi thắc mắc về photobooth Favori Foto tại Hải Phòng: giá chụp, concept, thời gian, địa chỉ, đặt lịch và nhiều hơn nữa.",
  alternates: {
    canonical: "https://favorifoto.com/faq",
  },
};

const faqs = [
  {
    q: "Photobooth Hải Phòng ở đâu đẹp?",
    a: "Favori Foto là studio photobooth tự chụp đẹp tại Hải Phòng, nằm ở 1B Nguyễn Đức Cảnh. Studio có concept chụp độc quyền, không gian xinh xắn, phù hợp với bạn bè, cặp đôi và cá nhân.",
  },
  {
    q: "Favori Foto ở địa chỉ nào?",
    a: "Favori Foto toạ lạc tại 1B Nguyễn Đức Cảnh, Hải Phòng. Vị trí gần trung tâm thành phố, dễ tìm và có chỗ để xe thuận tiện.",
  },
  {
    q: "Photobooth Favori có concept gì?",
    a: "Favori Foto hiện có 2 concept chụp: \"Hải Dương\" — lấy cảm hứng từ đại dương với backdrop biển xanh và phụ kiện vỏ sò; \"Viễn Du\" — phong cách western mùa hè với backdrop hoàng hôn và phụ kiện cowboy. Concept được cập nhật theo mùa.",
  },
  {
    q: "Có cần đặt lịch trước không?",
    a: "Bạn nên đặt lịch trước qua Instagram @favori.fotoo để đảm bảo có chỗ, đặc biệt vào cuối tuần. Tuy nhiên, nếu studio còn trống bạn có thể walk-in trực tiếp.",
  },
  {
    q: "Chụp photobooth mất bao lâu?",
    a: "Mỗi lượt chụp kéo dài từ 15 đến 30 phút tuỳ gói. Bạn có thể chụp thoả thích trong thời gian này và nhận ảnh ngay sau khi chụp xong.",
  },
  {
    q: "Có nhận ảnh liền không?",
    a: "Có! Ảnh được in tại chỗ ngay sau khi chụp. Ngoài ra, bạn cũng nhận file gốc chất lượng cao qua Zalo trong ngày.",
  },
  {
    q: "Giá chụp photobooth ở Hải Phòng khoảng bao nhiêu?",
    a: "Tại Favori Foto, giá chụp photobooth từ 99K cho gói Solo (1 người), 149K cho gói Bestie (2-3 người), và 199K cho gói Squad (4-6 người). Giá đã bao gồm in ảnh và file gốc.",
  },
  {
    q: "Favori Foto phù hợp với ai?",
    a: "Favori Foto phù hợp với tất cả mọi người: bạn bè muốn có ảnh kỷ niệm, cặp đôi muốn date vui, hoặc bạn muốn chụp ảnh solo chill. Studio đặc biệt được Gen Z yêu thích!",
  },
  {
    q: "Có thể chụp nhóm không?",
    a: "Có! Gói Squad hỗ trợ nhóm từ 4-6 người với 30 phút chụp thoả thích. Nếu nhóm đông hơn, bạn có thể liên hệ trước để sắp xếp.",
  },
  {
    q: "Favori Foto có gần trung tâm Hải Phòng không?",
    a: "Có, Favori Foto nằm ở 1B Nguyễn Đức Cảnh — một trong những con đường trung tâm của Hải Phòng, rất tiện di chuyển bằng xe máy hoặc taxi.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://favorifoto.com" },
    { "@type": "ListItem", position: 2, name: "FAQ", item: "https://favorifoto.com/faq" },
  ],
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-coral mb-3">
              FAQ
            </p>
            <h1
              className="text-3xl md:text-5xl font-bold text-charcoal"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Câu hỏi thường gặp
            </h1>
            <p className="mt-4 text-charcoal-light">
              Mọi thắc mắc về photobooth Favori Foto tại Hải Phòng
            </p>
          </div>

          <FAQContent faqs={faqs} />

          <div className="mt-16 text-center">
            <p className="text-charcoal-light mb-4">
              Còn câu hỏi khác? Nhắn cho mình nhé!
            </p>
            <a
              href="https://www.instagram.com/favori.fotoo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3 text-sm font-semibold text-white hover:bg-sunset-warm transition-colors"
            >
              Nhắn qua Instagram 📸
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
