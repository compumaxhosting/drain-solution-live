import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Residential Sewer Service in Northern NJ | Drain Solution Plus",
  description:
    "Residential sewer service in Northern NJ for sewer cleaning, repair, hydro-jetting, inspections and installation. Call Drain Solution Plus today.",
  keywords: [
    "residential sewer service",
    "residential sewer cleaning",
    "sewer repair Northern NJ",
    "sewer line repair NJ",
    "hydro-jetting",
    "sewer inspection",
    "trenchless sewer repair",
  ],
  authors: [{ name: "Drain Solution Plus" }],
  alternates: {
    canonical: "https://www.drainsolutionplus.com/residential-sewer-service",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: "Residential Sewer Service in Northern NJ | Drain Solution Plus",
    description:
      "Residential sewer service in Northern NJ for sewer cleaning, repair, hydro-jetting, inspections and installation.",
    url: "https://www.drainsolutionplus.com/residential-sewer-service",
    siteName: "Drain Solution Plus",
    images: [
      {
        url: "/images/client-images/sewer-pipe-repaired.webp",
        alt: "Residential sewer service in Northern New Jersey",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Residential Sewer Service in Northern NJ | Drain Solution Plus",
    description:
      "Residential sewer service in Northern NJ for sewer cleaning, repair, hydro-jetting, inspections and installation.",
    images: ["/images/client-images/sewer-pipe-repaired.webp"],
  },
  referrer: "strict-origin-when-cross-origin",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function ResidentialSewerServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.drainsolutionplus.com/residential-sewer-service#webpage",
        "url": "https://www.drainsolutionplus.com/residential-sewer-service",
        "name": "Residential Sewer Service in Northern NJ",
        "description":
          "Residential sewer cleaning, inspection, hydro-jetting, repair, trenchless pipe repair, and sewer installation services in Northern New Jersey.",
        "isPartOf": {
          "@id": "https://www.drainsolutionplus.com/#website",
        },
        "about": {
          "@id": "https://www.drainsolutionplus.com/residential-sewer-service#service",
        },
        "breadcrumb": {
          "@id": "https://www.drainsolutionplus.com/residential-sewer-service#breadcrumb",
        },
      },
      {
        "@type": "Service",
        "@id": "https://www.drainsolutionplus.com/residential-sewer-service#service",
        "name": "Residential Sewer Service",
        "serviceType": [
          "Residential Sewer Cleaning",
          "Sewer Line Inspection",
          "Hydro-Jetting",
          "Residential Sewer Repair",
          "Trenchless Sewer Repair",
          "Residential Sewer Installation",
        ],
        "description":
          "Residential sewer services including sewer cleaning, hydro-jetting, video inspection, sewer repair, trenchless pipe repair, and sewer installation.",
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
        "audience": {
          "@type": "Audience",
          "audienceType": "Residential property owners",
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "servicePhone": {
            "@type": "ContactPoint",
            "telephone": "+1-201-881-9622",
            "contactType": "customer service",
            "areaServed": "Northern New Jersey",
          },
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.drainsolutionplus.com/#business",
        "name": "Drain Solution Plus",
        "url": "https://www.drainsolutionplus.com/",
        "telephone": "+1-201-881-9622",
        "description":
          "Drain Solution Plus provides residential and commercial drain and sewer services in Northern New Jersey.",
        "areaServed": [
          "Bergen County, New Jersey",
          "Essex County, New Jersey",
          "Hudson County, New Jersey",
          "Passaic County, New Jersey",
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.drainsolutionplus.com/residential-sewer-service#breadcrumb",
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
            "name": "Residential Sewer Service",
            "item": "https://www.drainsolutionplus.com/residential-sewer-service",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://www.drainsolutionplus.com/#website",
        "url": "https://www.drainsolutionplus.com/",
        "name": "Drain Solution Plus",
        "publisher": {
          "@id": "https://www.drainsolutionplus.com/#business",
        },
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