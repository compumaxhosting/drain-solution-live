import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Commercial Drain Cleaning & Repair | Northern NJ",
  description:
    "Commercial drain cleaning and repair for Northern NJ businesses. Drain Solution Plus offers inspections, water jetting, repairs and maintenance.",
  keywords: [
    "commercial drain cleaning",
    "commercial drain service",
    "commercial drain repair",
    "commercial drain cleaning NJ",
    "commercial drain maintenance",
    "Northern NJ drain service",
  ],
  authors: [{ name: "Drain Solution Plus" }],
  alternates: {
    canonical: "https://www.drainsolutionplus.com/commercial-drain-service",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "Commercial Drain Cleaning & Repair | Northern NJ",
    description:
      "Commercial drain cleaning and repair for Northern NJ businesses. Get inspections, water jetting, repairs and maintenance from Drain Solution Plus.",
    url: "https://www.drainsolutionplus.com/commercial-drain-service",
    siteName: "Drain Solution Plus",
    images: [
      {
        url: "/images/client-images/commercial-drain-repair-2.webp",
        alt: "Commercial drain cleaning and repair services in Northern New Jersey",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Drain Cleaning & Repair | Northern NJ",
    description:
      "Commercial drain cleaning and repair for Northern NJ businesses with inspections, water jetting, maintenance and repairs.",
    images: ["/images/client-images/commercial-drain-repair-2.webp"],
  },
  referrer: "strict-origin-when-cross-origin",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function CommercialDrainServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.drainsolutionplus.com/commercial-drain-service#webpage",
        "url": "https://www.drainsolutionplus.com/commercial-drain-service",
        "name": "Commercial Drain Cleaning & Repair | Northern NJ",
        "description":
          "Commercial drain cleaning and repair for Northern NJ businesses, including drain inspections, high-pressure water jetting, repairs, sewer services and preventive maintenance.",
        "isPartOf": {
          "@id": "https://www.drainsolutionplus.com/#website",
        },
        "about": {
          "@id": "https://www.drainsolutionplus.com/commercial-drain-service#service",
        },
        "breadcrumb": {
          "@id": "https://www.drainsolutionplus.com/commercial-drain-service#breadcrumb",
        },
        "inLanguage": "en-US",
      },
      {
        "@type": "WebSite",
        "@id": "https://www.drainsolutionplus.com/#website",
        "url": "https://www.drainsolutionplus.com/",
        "name": "Drain Solution Plus",
        "publisher": {
          "@id": "https://www.drainsolutionplus.com/#business",
        },
        "inLanguage": "en-US",
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.drainsolutionplus.com/#business",
        "name": "Drain Solution Plus",
        "url": "https://www.drainsolutionplus.com/",
        "telephone": "+1-201-881-9622",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Hawthorne",
          "addressRegion": "NJ",
          "addressCountry": "US",
        },
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "Bergen County, New Jersey",
          },
          {
            "@type": "AdministrativeArea",
            "name": "Essex County, New Jersey",
          },
          {
            "@type": "AdministrativeArea",
            "name": "Hudson County, New Jersey",
          },
          {
            "@type": "AdministrativeArea",
            "name": "Passaic County, New Jersey",
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://www.drainsolutionplus.com/commercial-drain-service#service",
        "name": "Commercial Drain Cleaning and Repair",
        "serviceType": "Commercial Drain Cleaning and Repair",
        "url": "https://www.drainsolutionplus.com/commercial-drain-service",
        "description":
          "Commercial drain cleaning, inspection, high-pressure water jetting, drain repair and preventive drain maintenance for businesses in Northern New Jersey.",
        "provider": {
          "@id": "https://www.drainsolutionplus.com/#business",
        },
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "Bergen County, New Jersey",
          },
          {
            "@type": "AdministrativeArea",
            "name": "Essex County, New Jersey",
          },
          {
            "@type": "AdministrativeArea",
            "name": "Hudson County, New Jersey",
          },
          {
            "@type": "AdministrativeArea",
            "name": "Passaic County, New Jersey",
          },
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Commercial Drain Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Commercial Drain Cleaning",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Commercial Drain Repair",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Video Drain and Sewer Inspection",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "High-Pressure Water Jetting",
              },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Preventive Drain Maintenance",
              },
            },
          ],
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.drainsolutionplus.com/commercial-drain-service#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.drainsolutionplus.com/",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Commercial Drain Service",
            "item": "https://www.drainsolutionplus.com/commercial-drain-service",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
      {children}
    </>
  );
}