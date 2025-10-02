export function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Sinocle Nigeria Limited",
          url: "https://sinoclenigeria.com",
          logo: "https://sinoclenigeria.com/images/logo.png",
          description:
            "Professional construction services across Nigeria. Roads, drainage, buildings, and facility management.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Asaba",
            addressRegion: "Delta State",
            addressCountry: "Nigeria",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+234-810-406-4868",
            contactType: "Customer Service",
            areaServed: "NG",
            availableLanguage: "English",
          },
          sameAs: [],
        }),
      }}
    />
  )
}

export function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://sinoclenigeria.com",
          name: "Sinocle Nigeria Limited",
          image: "https://sinoclenigeria.com/images/logo.png",
          description:
            "Construction company delivering quality roads, drainage, buildings, and facility services across Nigeria.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Asaba",
            addressLocality: "Asaba",
            addressRegion: "Delta State",
            addressCountry: "Nigeria",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "6.2027",
            longitude: "6.6977",
          },
          telephone: "+234-810-406-4868",
          email: "info@sinoclenigeria.com",
          url: "https://sinoclenigeria.com",
          priceRange: "₦₦₦",
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "08:00",
              closes: "18:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Saturday",
              opens: "09:00",
              closes: "14:00",
            },
          ],
        }),
      }}
    />
  )
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
          })),
        }),
      }}
    />
  )
}
