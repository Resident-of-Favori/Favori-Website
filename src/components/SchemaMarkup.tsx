export function SchemaMarkup() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Favori Foto",
    description:
      "Studio photobooth tự chụp tại Hải Phòng với concept độc đáo và không gian xinh xắn.",
    url: "https://favorifoto.com",
    telephone: "", // TODO: Add phone number
    address: {
      "@type": "PostalAddress",
      streetAddress: "1B Nguyễn Đức Cảnh",
      addressLocality: "Hải Phòng",
      addressCountry: "VN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 20.8449,
      longitude: 106.6881,
    },
    // TODO: Replace with actual image URL
    image: "https://favorifoto.com/images/storefront.jpg",
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "21:00",
      },
    ],
    sameAs: ["https://www.instagram.com/favori.fotoo"],
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Trang chủ",
        item: "https://favorifoto.com",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
